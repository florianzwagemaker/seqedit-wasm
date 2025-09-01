export interface AuthConfig {
    keycloakUrl: string;
    realm: string;
    clientId: string;
}

export interface TokenResponse {
    access_token: string;
    refresh_token: string;
    expires_in: number;
    token_type: string;
}

export class AuthManager {
    private config: AuthConfig;
    private tokenKey = 'seqedit-access-token';
    private tokenExpiryKey = 'seqedit-token-expiry';
    private refreshTokenKey = 'seqedit-refresh-token';
    private configKey = 'seqedit-auth-config'; // Add config key

    constructor(config: AuthConfig) {
        this.config = config;
        // Save config to localStorage for later retrieval
        localStorage.setItem(this.configKey, JSON.stringify(config));
    }

    /**
     * Get the stored access token if it exists and is not expired
     */
    getStoredToken(): string | null {
        const token = localStorage.getItem(this.tokenKey);
        const expiry = localStorage.getItem(this.tokenExpiryKey);
        
        if (!token || !expiry) {
            return null;
        }

        // Check if token is expired (with 5 minute buffer)
        const expiryTime = parseInt(expiry, 10);
        const now = Date.now();
        const bufferTime = 5 * 60 * 1000; // 5 minutes in milliseconds
        
        if (now >= (expiryTime - bufferTime)) {
            // Token is expired or about to expire, try to refresh
            return null;
        }

        return token;
    }

    /**
     * Store token information in localStorage
     */
    private storeTokens(tokenResponse: TokenResponse): void {
        const expiryTime = Date.now() + (tokenResponse.expires_in * 1000);
        
        localStorage.setItem(this.tokenKey, tokenResponse.access_token);
        localStorage.setItem(this.refreshTokenKey, tokenResponse.refresh_token);
        localStorage.setItem(this.tokenExpiryKey, expiryTime.toString());
    }

    /**
     * Clear stored authentication data
     */
    clearStoredAuth(): void {
        localStorage.removeItem(this.tokenKey);
        localStorage.removeItem(this.refreshTokenKey);
        localStorage.removeItem(this.tokenExpiryKey);
        localStorage.removeItem(this.configKey); // Also clear stored config
        localStorage.removeItem('seqedit-auth-state');
        localStorage.removeItem('seqedit-auth-code-verifier');
    }

    /**
     * Generate a random string for PKCE
     */
    private generateRandomString(length: number): string {
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return result;
    }

    /**
     * Generate SHA256 hash for PKCE code challenge
     */
    private async sha256(plain: string): Promise<string> {
        const encoder = new TextEncoder();
        const data = encoder.encode(plain);
        const hash = await crypto.subtle.digest('SHA-256', data);
        return btoa(String.fromCharCode(...new Uint8Array(hash)))
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=/g, '');
    }

    /**
     * Get the redirect URI for this application
     */
    private getRedirectUri(): string {
        // Use just the origin + pathname for consistency with Keycloak expectations
        // Some Keycloak setups are very strict about this
        return window.location.origin + window.location.pathname;
    }

    /**
     * Initiate OAuth2 flow with PKCE
     * Note: Application state should be saved before calling this method
     */
    async initiateAuth(): Promise<void> {
        // Generate PKCE parameters
        const codeVerifier = this.generateRandomString(128);
        const codeChallenge = await this.sha256(codeVerifier);
        const state = this.generateRandomString(32);

        // Store PKCE parameters
        localStorage.setItem('seqedit-auth-code-verifier', codeVerifier);
        localStorage.setItem('seqedit-auth-state', state);

        // Get redirect URI
        const redirectUri = this.getRedirectUri();
        
        // Build authorization URL
        const authUrl = new URL(`${this.config.keycloakUrl}/realms/${this.config.realm}/protocol/openid-connect/auth`);
        authUrl.searchParams.set('client_id', this.config.clientId);
        authUrl.searchParams.set('redirect_uri', redirectUri);
        authUrl.searchParams.set('response_type', 'code');
        authUrl.searchParams.set('scope', 'openid profile');
        authUrl.searchParams.set('state', state);
        authUrl.searchParams.set('code_challenge', codeChallenge);
        authUrl.searchParams.set('code_challenge_method', 'S256');

        console.log('Initiating OAuth2 flow with redirect URI:', redirectUri);
        console.log('Full auth URL:', authUrl.toString());

        // Redirect to Keycloak
        window.location.href = authUrl.toString();
    }

    /**
     * Handle the OAuth2 callback
     */
    async handleCallback(): Promise<boolean> {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const state = urlParams.get('state');
        const error = urlParams.get('error');

        console.log('OAuth callback - URL params:', window.location.search);
        console.log('OAuth callback - code:', code ? 'present' : 'missing');
        console.log('OAuth callback - state:', state ? 'present' : 'missing');
        console.log('OAuth callback - error:', error);

        if (error) {
            console.error('OAuth2 error:', error, urlParams.get('error_description'));
            this.clearStoredAuth();
            return false;
        }

        if (!code || !state) {
            console.log('OAuth callback - No callback parameters found');
            return false; // No callback parameters
        }

        console.log('OAuth callback - Processing authorization code...');

        // Verify state parameter
        const storedState = localStorage.getItem('seqedit-auth-state');
        if (state !== storedState) {
            console.error('State parameter mismatch');
            this.clearStoredAuth();
            return false;
        }

        // Get stored code verifier
        const codeVerifier = localStorage.getItem('seqedit-auth-code-verifier');
        if (!codeVerifier) {
            console.error('Code verifier not found');
            this.clearStoredAuth();
            return false;
        }

        try {
            // Exchange code for tokens
            const tokenResponse = await this.exchangeCodeForTokens(code, codeVerifier);
            this.storeTokens(tokenResponse);

            // Clean up URL parameters
            const cleanUrl = new URL(window.location.href);
            cleanUrl.search = '';
            window.history.replaceState({}, document.title, cleanUrl.toString());

            return true;
        } catch (error) {
            console.error('Token exchange failed:', error);
            this.clearStoredAuth();
            return false;
        }
    }

    /**
     * Exchange authorization code for tokens
     */
    private async exchangeCodeForTokens(code: string, codeVerifier: string): Promise<TokenResponse> {
        const tokenUrl = `${this.config.keycloakUrl}/realms/${this.config.realm}/protocol/openid-connect/token`;
        
        const body = new URLSearchParams({
            grant_type: 'authorization_code',
            client_id: this.config.clientId,
            code: code,
            redirect_uri: this.getRedirectUri(),
            code_verifier: codeVerifier,
        });

        const response = await fetch(tokenUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: body,
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Token exchange failed: ${response.status} ${errorText}`);
        }

        return await response.json() as TokenResponse;
    }

    /**
     * Try to refresh the access token using the refresh token
     */
    async refreshToken(): Promise<string | null> {
        const refreshToken = localStorage.getItem(this.refreshTokenKey);
        if (!refreshToken) {
            return null;
        }

        try {
            const tokenUrl = `${this.config.keycloakUrl}/realms/${this.config.realm}/protocol/openid-connect/token`;
            
            const body = new URLSearchParams({
                grant_type: 'refresh_token',
                client_id: this.config.clientId,
                refresh_token: refreshToken,
            });

            const response = await fetch(tokenUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: body,
            });

            if (!response.ok) {
                // Refresh failed, clear stored tokens
                this.clearStoredAuth();
                return null;
            }

            const tokenResponse = await response.json() as TokenResponse;
            this.storeTokens(tokenResponse);
            return tokenResponse.access_token;
        } catch (error) {
            console.error('Token refresh failed:', error);
            this.clearStoredAuth();
            return null;
        }
    }

    /**
     * Get a valid access token, refreshing if necessary
     */
    async getValidToken(): Promise<string | null> {
        // Try to get stored token
        let token = this.getStoredToken();
        if (token) {
            return token;
        }

        // Try to refresh token
        token = await this.refreshToken();
        if (token) {
            return token;
        }

        // No valid token available
        return null;
    }

    /**
     * Check if user is currently authenticated
     */
    async isAuthenticated(): Promise<boolean> {
        const token = await this.getValidToken();
        return token !== null;
    }

    /**
     * Logout user by clearing tokens and optionally redirect to Keycloak logout
     */
    async logout(redirectToKeycloak: boolean = true): Promise<void> {
        const token = this.getStoredToken();
        this.clearStoredAuth();

        if (redirectToKeycloak && token) {
            const logoutUrl = new URL(`${this.config.keycloakUrl}/realms/${this.config.realm}/protocol/openid-connect/logout`);
            logoutUrl.searchParams.set('post_logout_redirect_uri', this.getRedirectUri());
            window.location.href = logoutUrl.toString();
        }
    }
}

/**
 * Create an AuthManager from stored configuration in localStorage
 */
export function createAuthManagerFromStorage(): AuthManager | null {
    const configJson = localStorage.getItem('seqedit-auth-config');
    if (!configJson) {
        return null;
    }

    try {
        const config = JSON.parse(configJson) as AuthConfig;
        return new AuthManager(config);
    } catch (error) {
        console.error('Error parsing stored auth config:', error);
        return null;
    }
}

/**
 * Parse authentication configuration from URL parameters
 */
export function parseAuthConfig(): AuthConfig | null {
    const urlParams = new URLSearchParams(window.location.search);
    const authEndpoint = urlParams.get('auth-endpoint');
    const realm = urlParams.get('auth-realm') || 'master';
    const clientId = urlParams.get('auth-client-id') || 'seqedit';

    if (!authEndpoint) {
        return null;
    }

    return {
        keycloakUrl: authEndpoint,
        realm: realm,
        clientId: clientId,
    };
}