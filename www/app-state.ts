export interface AppState {
    urlParams: Record<string, string>;
    sequences: {
        names: string[];
        sequences: string[];
        isTranslated: boolean;
        currentFrame: number;
        translatedSequences?: string[];
    };
    metadata: {
        header: string[];
        rows: string[][];
        originalText: string;
        groupId: string | null;
    } | null;
    searchResults?: {
        results: number[][];
        queryLength: number;
    };
    shouldContinueSaveRevision?: boolean; // Flag to indicate if we should continue save revision after auth
}

export class AppStateManager {
    private static readonly STATE_KEY = 'seqedit-app-state';
    private static readonly AUTH_STATE_KEY = 'seqedit-auth-flow-state';

    /**
     * Save the current application state before authentication
     */
    static saveStateBeforeAuth(
        urlParams: URLSearchParams,
        sequences: { names: string[], sequences: string[] },
        isTranslated: boolean,
        currentFrame: number,
        translatedSequences: string[] | undefined,
        metadata: { header: string[], rows: string[][], originalText: string } | null,
        groupId: string | null,
        searchResults?: { results: number[][], queryLength: number },
        shouldContinueSaveRevision = false
    ): void {
        const state: AppState = {
            urlParams: Object.fromEntries(urlParams.entries()),
            sequences: {
                names: sequences.names,
                sequences: sequences.sequences,
                isTranslated,
                currentFrame,
                translatedSequences
            },
            metadata: metadata ? {
                header: metadata.header,
                rows: metadata.rows,
                originalText: metadata.originalText,
                groupId
            } : null,
            searchResults,
            shouldContinueSaveRevision
        };

        localStorage.setItem(this.STATE_KEY, JSON.stringify(state));
        localStorage.setItem(this.AUTH_STATE_KEY, 'true');
        
        console.log('Application state saved before authentication', { shouldContinueSaveRevision });
    }

    /**
     * Check if we're returning from an authentication flow
     */
    static isReturningFromAuth(): boolean {
        return localStorage.getItem(this.AUTH_STATE_KEY) === 'true';
    }

    /**
     * Restore the application state after authentication
     */
    static restoreStateAfterAuth(): AppState | null {
        const stateJson = localStorage.getItem(this.STATE_KEY);
        if (!stateJson) {
            return null;
        }

        try {
            const state = JSON.parse(stateJson) as AppState;
            
            // Clean up the stored state
            localStorage.removeItem(this.STATE_KEY);
            localStorage.removeItem(this.AUTH_STATE_KEY);
            
            console.log('Application state restored after authentication');
            return state;
        } catch (error) {
            console.error('Failed to restore application state:', error);
            this.clearStoredState();
            return null;
        }
    }

    /**
     * Clear any stored application state
     */
    static clearStoredState(): void {
        localStorage.removeItem(this.STATE_KEY);
        localStorage.removeItem(this.AUTH_STATE_KEY);
    }

    /**
     * Restore URL parameters to the current page
     */
    static restoreUrlParams(urlParams: Record<string, string>): void {
        const url = new URL(window.location.href);
        
        // Clear existing search parameters
        url.search = '';
        
        // Add the restored parameters
        Object.entries(urlParams).forEach(([key, value]) => {
            url.searchParams.set(key, value);
        });
        
        // Update the URL without triggering a page reload
        window.history.replaceState({}, document.title, url.toString());
    }
}
