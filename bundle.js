/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./pkg/seqedit_wasm.js":
/*!*****************************!*\
  !*** ./pkg/seqedit_wasm.js ***!
  \*****************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AminoAcid: () => (/* reexport safe */ _seqedit_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.AminoAcid),
/* harmony export */   __wbg_new_405e22f390576ce2: () => (/* reexport safe */ _seqedit_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_new_405e22f390576ce2),
/* harmony export */   __wbg_new_78feb108b6472713: () => (/* reexport safe */ _seqedit_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_new_78feb108b6472713),
/* harmony export */   __wbg_set_37837023f3d740e8: () => (/* reexport safe */ _seqedit_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_set_37837023f3d740e8),
/* harmony export */   __wbg_set_3fda3bac07393de4: () => (/* reexport safe */ _seqedit_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_set_3fda3bac07393de4),
/* harmony export */   __wbg_set_wasm: () => (/* reexport safe */ _seqedit_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_set_wasm),
/* harmony export */   __wbindgen_init_externref_table: () => (/* reexport safe */ _seqedit_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbindgen_init_externref_table),
/* harmony export */   __wbindgen_string_new: () => (/* reexport safe */ _seqedit_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbindgen_string_new),
/* harmony export */   __wbindgen_throw: () => (/* reexport safe */ _seqedit_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbindgen_throw),
/* harmony export */   parse_fasta: () => (/* reexport safe */ _seqedit_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.parse_fasta),
/* harmony export */   reverse_complement: () => (/* reexport safe */ _seqedit_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.reverse_complement),
/* harmony export */   search: () => (/* reexport safe */ _seqedit_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.search),
/* harmony export */   translate: () => (/* reexport safe */ _seqedit_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.translate)
/* harmony export */ });
/* harmony import */ var _seqedit_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seqedit_wasm_bg.wasm */ "./pkg/seqedit_wasm_bg.wasm");
/* harmony import */ var _seqedit_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seqedit_wasm_bg.js */ "./pkg/seqedit_wasm_bg.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_seqedit_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);
var __webpack_async_dependencies_result__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
_seqedit_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_async_dependencies_result__[0];



(0,_seqedit_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__.__wbg_set_wasm)(_seqedit_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__);
_seqedit_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_start();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./pkg/seqedit_wasm_bg.js":
/*!********************************!*\
  !*** ./pkg/seqedit_wasm_bg.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AminoAcid: () => (/* binding */ AminoAcid),
/* harmony export */   __wbg_new_405e22f390576ce2: () => (/* binding */ __wbg_new_405e22f390576ce2),
/* harmony export */   __wbg_new_78feb108b6472713: () => (/* binding */ __wbg_new_78feb108b6472713),
/* harmony export */   __wbg_set_37837023f3d740e8: () => (/* binding */ __wbg_set_37837023f3d740e8),
/* harmony export */   __wbg_set_3fda3bac07393de4: () => (/* binding */ __wbg_set_3fda3bac07393de4),
/* harmony export */   __wbg_set_wasm: () => (/* binding */ __wbg_set_wasm),
/* harmony export */   __wbindgen_init_externref_table: () => (/* binding */ __wbindgen_init_externref_table),
/* harmony export */   __wbindgen_string_new: () => (/* binding */ __wbindgen_string_new),
/* harmony export */   __wbindgen_throw: () => (/* binding */ __wbindgen_throw),
/* harmony export */   parse_fasta: () => (/* binding */ parse_fasta),
/* harmony export */   reverse_complement: () => (/* binding */ reverse_complement),
/* harmony export */   search: () => (/* binding */ search),
/* harmony export */   translate: () => (/* binding */ translate)
/* harmony export */ });
let wasm;
function __wbg_set_wasm(val) {
    wasm = val;
}


const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8ArrayMemory0 = null;

function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

let WASM_VECTOR_LEN = 0;

const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachedUint32ArrayMemory0 = null;

function getUint32ArrayMemory0() {
    if (cachedUint32ArrayMemory0 === null || cachedUint32ArrayMemory0.byteLength === 0) {
        cachedUint32ArrayMemory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32ArrayMemory0;
}

function getArrayU32FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint32ArrayMemory0().subarray(ptr / 4, ptr / 4 + len);
}
/**
 * @param {string} sequence
 * @param {string} query
 * @returns {Uint32Array}
 */
function search(sequence, query) {
    const ptr0 = passStringToWasm0(sequence, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passStringToWasm0(query, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.search(ptr0, len0, ptr1, len1);
    var v3 = getArrayU32FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
    return v3;
}

/**
 * @param {string} sequence
 * @param {number} frame
 * @returns {string}
 */
function translate(sequence, frame) {
    let deferred2_0;
    let deferred2_1;
    try {
        const ptr0 = passStringToWasm0(sequence, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.translate(ptr0, len0, frame);
        deferred2_0 = ret[0];
        deferred2_1 = ret[1];
        return getStringFromWasm0(ret[0], ret[1]);
    } finally {
        wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_export_0.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}
/**
 * @param {string} data
 * @returns {any}
 */
function parse_fasta(data) {
    const ptr0 = passStringToWasm0(data, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.parse_fasta(ptr0, len0);
    if (ret[2]) {
        throw takeFromExternrefTable0(ret[1]);
    }
    return takeFromExternrefTable0(ret[0]);
}

/**
 * @param {string} sequence
 * @returns {string}
 */
function reverse_complement(sequence) {
    let deferred2_0;
    let deferred2_1;
    try {
        const ptr0 = passStringToWasm0(sequence, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.reverse_complement(ptr0, len0);
        deferred2_0 = ret[0];
        deferred2_1 = ret[1];
        return getStringFromWasm0(ret[0], ret[1]);
    } finally {
        wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
}

/**
 * @enum {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21}
 */
const AminoAcid = Object.freeze({
    Ala: 0, "0": "Ala",
    Arg: 1, "1": "Arg",
    Asn: 2, "2": "Asn",
    Asp: 3, "3": "Asp",
    Cys: 4, "4": "Cys",
    Gln: 5, "5": "Gln",
    Glu: 6, "6": "Glu",
    Gly: 7, "7": "Gly",
    His: 8, "8": "His",
    Ile: 9, "9": "Ile",
    Leu: 10, "10": "Leu",
    Lys: 11, "11": "Lys",
    Met: 12, "12": "Met",
    Phe: 13, "13": "Phe",
    Pro: 14, "14": "Pro",
    Ser: 15, "15": "Ser",
    Thr: 16, "16": "Thr",
    Trp: 17, "17": "Trp",
    Tyr: 18, "18": "Tyr",
    Val: 19, "19": "Val",
    Stop: 20, "20": "Stop",
    Unknown: 21, "21": "Unknown",
});

function __wbg_new_405e22f390576ce2() {
    const ret = new Object();
    return ret;
};

function __wbg_new_78feb108b6472713() {
    const ret = new Array();
    return ret;
};

function __wbg_set_37837023f3d740e8(arg0, arg1, arg2) {
    arg0[arg1 >>> 0] = arg2;
};

function __wbg_set_3fda3bac07393de4(arg0, arg1, arg2) {
    arg0[arg1] = arg2;
};

function __wbindgen_init_externref_table() {
    const table = wasm.__wbindgen_export_0;
    const offset = table.grow(4);
    table.set(0, undefined);
    table.set(offset + 0, undefined);
    table.set(offset + 1, null);
    table.set(offset + 2, true);
    table.set(offset + 3, false);
    ;
};

function __wbindgen_string_new(arg0, arg1) {
    const ret = getStringFromWasm0(arg0, arg1);
    return ret;
};

function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};



/***/ }),

/***/ "./pkg/seqedit_wasm_bg.wasm":
/*!**********************************!*\
  !*** ./pkg/seqedit_wasm_bg.wasm ***!
  \**********************************/
/***/ ((module, exports, __webpack_require__) => {

/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./seqedit_wasm_bg.js */ "./pkg/seqedit_wasm_bg.js");
module.exports = __webpack_require__.v(exports, module.id, "1744027064f1280ff6a0", {
	"./seqedit_wasm_bg.js": {
		"__wbindgen_string_new": WEBPACK_IMPORTED_MODULE_0.__wbindgen_string_new,
		"__wbg_set_3fda3bac07393de4": WEBPACK_IMPORTED_MODULE_0.__wbg_set_3fda3bac07393de4,
		"__wbg_new_78feb108b6472713": WEBPACK_IMPORTED_MODULE_0.__wbg_new_78feb108b6472713,
		"__wbg_new_405e22f390576ce2": WEBPACK_IMPORTED_MODULE_0.__wbg_new_405e22f390576ce2,
		"__wbg_set_37837023f3d740e8": WEBPACK_IMPORTED_MODULE_0.__wbg_set_37837023f3d740e8,
		"__wbindgen_throw": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw,
		"__wbindgen_init_externref_table": WEBPACK_IMPORTED_MODULE_0.__wbindgen_init_externref_table
	}
});

/***/ }),

/***/ "./www/app-state.ts":
/*!**************************!*\
  !*** ./www/app-state.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppStateManager: () => (/* binding */ AppStateManager)
/* harmony export */ });
class AppStateManager {
    static STATE_KEY = 'seqedit-app-state';
    static AUTH_STATE_KEY = 'seqedit-auth-flow-state';
    /**
     * Save the current application state before authentication
     */
    static saveStateBeforeAuth(urlParams, sequences, isTranslated, currentFrame, translatedSequences, metadata, groupId, searchResults, shouldContinueSaveRevision = false) {
        const state = {
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
    static isReturningFromAuth() {
        return localStorage.getItem(this.AUTH_STATE_KEY) === 'true';
    }
    /**
     * Restore the application state after authentication
     */
    static restoreStateAfterAuth() {
        const stateJson = localStorage.getItem(this.STATE_KEY);
        if (!stateJson) {
            return null;
        }
        try {
            const state = JSON.parse(stateJson);
            // Clean up the stored state
            localStorage.removeItem(this.STATE_KEY);
            localStorage.removeItem(this.AUTH_STATE_KEY);
            console.log('Application state restored after authentication');
            return state;
        }
        catch (error) {
            console.error('Failed to restore application state:', error);
            this.clearStoredState();
            return null;
        }
    }
    /**
     * Clear any stored application state
     */
    static clearStoredState() {
        localStorage.removeItem(this.STATE_KEY);
        localStorage.removeItem(this.AUTH_STATE_KEY);
    }
    /**
     * Restore URL parameters to the current page
     */
    static restoreUrlParams(urlParams) {
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


/***/ }),

/***/ "./www/auth.ts":
/*!*********************!*\
  !*** ./www/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthManager: () => (/* binding */ AuthManager),
/* harmony export */   createAuthManagerFromStorage: () => (/* binding */ createAuthManagerFromStorage),
/* harmony export */   parseAuthConfig: () => (/* binding */ parseAuthConfig)
/* harmony export */ });
class AuthManager {
    config;
    tokenKey = 'seqedit-access-token';
    tokenExpiryKey = 'seqedit-token-expiry';
    refreshTokenKey = 'seqedit-refresh-token';
    configKey = 'seqedit-auth-config'; // Add config key
    constructor(config) {
        this.config = config;
        // Save config to localStorage for later retrieval
        localStorage.setItem(this.configKey, JSON.stringify(config));
    }
    /**
     * Get the stored access token if it exists and is not expired
     */
    getStoredToken() {
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
    storeTokens(tokenResponse) {
        const expiryTime = Date.now() + (tokenResponse.expires_in * 1000);
        localStorage.setItem(this.tokenKey, tokenResponse.access_token);
        localStorage.setItem(this.refreshTokenKey, tokenResponse.refresh_token);
        localStorage.setItem(this.tokenExpiryKey, expiryTime.toString());
    }
    /**
     * Clear stored authentication data
     */
    clearStoredAuth() {
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
    generateRandomString(length) {
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
    async sha256(plain) {
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
    getRedirectUri() {
        // Use just the origin + pathname for consistency with Keycloak expectations
        // Some Keycloak setups are very strict about this
        return window.location.origin + window.location.pathname;
    }
    /**
     * Initiate OAuth2 flow with PKCE
     * Note: Application state should be saved before calling this method
     */
    async initiateAuth() {
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
    async handleCallback() {
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
        }
        catch (error) {
            console.error('Token exchange failed:', error);
            this.clearStoredAuth();
            return false;
        }
    }
    /**
     * Exchange authorization code for tokens
     */
    async exchangeCodeForTokens(code, codeVerifier) {
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
        return await response.json();
    }
    /**
     * Try to refresh the access token using the refresh token
     */
    async refreshToken() {
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
            const tokenResponse = await response.json();
            this.storeTokens(tokenResponse);
            return tokenResponse.access_token;
        }
        catch (error) {
            console.error('Token refresh failed:', error);
            this.clearStoredAuth();
            return null;
        }
    }
    /**
     * Get a valid access token, refreshing if necessary
     */
    async getValidToken() {
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
    async isAuthenticated() {
        const token = await this.getValidToken();
        return token !== null;
    }
    /**
     * Logout user by clearing tokens and optionally redirect to Keycloak logout
     */
    async logout(redirectToKeycloak = true) {
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
function createAuthManagerFromStorage() {
    const configJson = localStorage.getItem('seqedit-auth-config');
    if (!configJson) {
        return null;
    }
    try {
        const config = JSON.parse(configJson);
        return new AuthManager(config);
    }
    catch (error) {
        console.error('Error parsing stored auth config:', error);
        return null;
    }
}
/**
 * Parse authentication configuration from URL parameters
 */
function parseAuthConfig() {
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


/***/ }),

/***/ "./www/main.ts":
/*!*********************!*\
  !*** ./www/main.ts ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sequence_viewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sequence-viewer */ "./www/sequence-viewer.ts");
/* harmony import */ var _pkg_seqedit_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pkg/seqedit_wasm */ "./pkg/seqedit_wasm.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./www/auth.ts");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-state */ "./www/app-state.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pkg_seqedit_wasm__WEBPACK_IMPORTED_MODULE_1__]);
var __webpack_async_dependencies_result__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
_pkg_seqedit_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_async_dependencies_result__[0];




async function main() {
    const sequenceCanvas = document.getElementById('sequence-canvas');
    const namesCanvas = document.getElementById('names-canvas');
    const rulerCanvas = document.getElementById('ruler-canvas');
    const viewer = new _sequence_viewer__WEBPACK_IMPORTED_MODULE_0__.SequenceViewer(sequenceCanvas, namesCanvas, rulerCanvas);
    const urlInput = document.getElementById('url-input');
    const loadButton = document.getElementById('load-button');
    const revCompButton = document.getElementById('revcomp-button');
    const translateButton = document.getElementById('translate-button');
    const frameButtons = document.getElementById('frame-buttons');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const saveRevisionButton = document.getElementById('save-revision-button');
    const logoutButton = document.getElementById('logout-button');
    let isTranslated = false;
    let currentFrame = 1;
    let metadata = null;
    let groupId = null;
    let authManager = null;
    let searchResults;
    let stateWasRestored = false;
    let urlParams = new URLSearchParams(window.location.search);
    let fastaUrl = urlParams.get('input-fasta');
    let metadataUrl = urlParams.get('metadata-url');
    let organism = urlParams.get('organism');
    // Debug: Log the current URL to see what we're getting back from Keycloak
    console.log('Page loaded with URL:', window.location.href);
    console.log('URL search params:', window.location.search);
    // Initialize authentication first
    const authConfig = (0,_auth__WEBPACK_IMPORTED_MODULE_2__.parseAuthConfig)();
    if (authConfig) {
        authManager = new _auth__WEBPACK_IMPORTED_MODULE_2__.AuthManager(authConfig);
    }
    else {
        // Try to create from stored config (e.g., during OAuth callback)
        authManager = (0,_auth__WEBPACK_IMPORTED_MODULE_2__.createAuthManagerFromStorage)();
    }
    // Check if we have OAuth callback parameters (code/state)
    const currentUrlParams = new URLSearchParams(window.location.search);
    const hasOAuthCallback = currentUrlParams.has('code') && currentUrlParams.has('state');
    console.log('OAuth callback parameters present:', hasOAuthCallback);
    console.log('Is returning from auth:', _app_state__WEBPACK_IMPORTED_MODULE_3__.AppStateManager.isReturningFromAuth());
    console.log('AuthManager exists:', authManager ? 'YES' : 'NO');
    // Handle OAuth callback FIRST if present, regardless of state restoration status
    let callbackHandled = false;
    if (authManager && hasOAuthCallback) {
        console.log('Processing OAuth callback...');
        try {
            callbackHandled = await authManager.handleCallback();
            if (callbackHandled) {
                console.log('Authentication callback handled successfully');
                // Check authentication status immediately after callback
                const isAuthenticated = await authManager.isAuthenticated();
                console.log('Authentication status after callback:', isAuthenticated);
            }
            else {
                console.log('OAuth callback processing failed');
            }
        }
        catch (error) {
            console.error('Error processing OAuth callback:', error);
        }
    }
    else if (hasOAuthCallback && !authManager) {
        console.error('OAuth callback detected but AuthManager is not available!');
    }
    // Check if we're returning from authentication and restore state
    // ONLY do this AFTER processing the OAuth callback
    let shouldContinueSave = false;
    if (_app_state__WEBPACK_IMPORTED_MODULE_3__.AppStateManager.isReturningFromAuth()) {
        console.log('Restoring state after authentication');
        const savedState = _app_state__WEBPACK_IMPORTED_MODULE_3__.AppStateManager.restoreStateAfterAuth();
        if (savedState) {
            console.log('Restoring application state after authentication');
            stateWasRestored = true;
            // Restore URL parameters AFTER handling OAuth callback
            _app_state__WEBPACK_IMPORTED_MODULE_3__.AppStateManager.restoreUrlParams(savedState.urlParams);
            // Update local variables with restored parameters
            urlParams = new URLSearchParams(window.location.search);
            fastaUrl = urlParams.get('input-fasta');
            metadataUrl = urlParams.get('metadata-url');
            organism = urlParams.get('organism');
            // Restore application state
            isTranslated = savedState.sequences.isTranslated;
            currentFrame = savedState.sequences.currentFrame;
            metadata = savedState.metadata;
            groupId = savedState.metadata?.groupId || null;
            searchResults = savedState.searchResults;
            // Restore sequences in the viewer
            viewer.setSequences(savedState.sequences.names, savedState.sequences.sequences);
            // Restore translated state if applicable
            if (savedState.sequences.isTranslated && savedState.sequences.translatedSequences) {
                viewer.setTranslatedSequences(savedState.sequences.translatedSequences, savedState.sequences.currentFrame);
                translateButton.textContent = 'Nucleotide Mode';
                frameButtons.style.display = 'inline-block';
            }
            // Restore search results if applicable
            if (savedState.searchResults) {
                viewer.setSearchResults(savedState.searchResults.results, savedState.searchResults.queryLength);
            }
            // Check if we should continue with saving revision after authentication
            shouldContinueSave = savedState.shouldContinueSaveRevision || false;
            console.log('Should continue save after auth:', shouldContinueSave);
        }
    }
    // Finalize authentication setup
    if (authManager) {
        // Update save revision button based on auth status
        await updateSaveButtonState();
        // If we should continue saving and we're now authenticated, do it
        if (shouldContinueSave) {
            const isAuth = await authManager.isAuthenticated();
            console.log('Checking authentication status after callback:', isAuth);
            if (isAuth) {
                console.log('Continuing with save revision after successful authentication...');
                setTimeout(() => {
                    saveRevisionButton.click();
                }, 100);
            }
            else {
                console.log('Authentication failed, not continuing with save revision');
            }
        }
    }
    else {
        // No auth config, disable save revision button
        saveRevisionButton.disabled = true;
        saveRevisionButton.textContent = 'Save Revision (No Auth)';
    }
    async function updateSaveButtonState() {
        if (!authManager)
            return;
        const isAuth = await authManager.isAuthenticated();
        if (isAuth) {
            saveRevisionButton.disabled = false;
            saveRevisionButton.textContent = 'Save as Revision';
            logoutButton.style.display = 'inline-block';
        }
        else {
            saveRevisionButton.disabled = false;
            saveRevisionButton.textContent = 'Login & Save Revision';
            logoutButton.style.display = 'none';
        }
    }
    async function loadSequences() {
        const url = urlInput.value;
        if (!url)
            return;
        try {
            const response = await fetch(url);
            const fasta = await response.text();
            const sequencesData = (0,_pkg_seqedit_wasm__WEBPACK_IMPORTED_MODULE_1__.parse_fasta)(fasta);
            const names = sequencesData.map(s => s.id);
            const sequences = sequencesData.map(s => s.residues);
            viewer.setSequences(names, sequences);
        }
        catch (error) {
            console.error('Error loading or parsing FASTA file:', error);
            alert('Failed to load sequences. See console for details.');
        }
    }
    async function loadMetadata(url) {
        if (!url)
            return;
        try {
            const response = await fetch(url);
            const tsv = await response.text();
            const lines = tsv.trim().split('\n');
            const header = lines[0].split('\t');
            const rows = lines.slice(1).map(line => line.split('\t'));
            metadata = { header, rows, originalText: tsv };
            const groupIdIndex = header.indexOf('groupId');
            if (groupIdIndex !== -1 && rows.length > 0) {
                groupId = rows[0][groupIdIndex];
            }
            else {
                alert('Could not find groupId in metadata file.');
            }
        }
        catch (error) {
            console.error('Error loading or parsing metadata file:', error);
            alert('Failed to load metadata. See console for details.');
        }
    }
    async function getAuthToken() {
        if (!authManager) {
            console.error('No authentication manager configured');
            return null;
        }
        return await authManager.getValidToken();
    }
    loadButton.addEventListener('click', loadSequences);
    revCompButton.addEventListener('click', () => {
        const selectedIndices = viewer.getSelectedSequenceIndices();
        if (selectedIndices.length > 0) {
            selectedIndices.forEach(seqIndex => {
                const originalSequence = viewer.getSequences()[seqIndex];
                const revCompSequence = (0,_pkg_seqedit_wasm__WEBPACK_IMPORTED_MODULE_1__.reverse_complement)(originalSequence);
                viewer.updateSequence(seqIndex, revCompSequence);
            });
            viewer.clearSelectedSequenceNames();
        }
        else {
            alert('Please select one or more sequences to reverse complement.');
        }
    });
    function translateAll(frame) {
        const sequences = viewer.getSequences();
        const translatedSequences = sequences.map(seq => (0,_pkg_seqedit_wasm__WEBPACK_IMPORTED_MODULE_1__.translate)(seq, frame));
        viewer.setTranslatedSequences(translatedSequences, frame);
        currentFrame = frame;
        isTranslated = true;
        translateButton.textContent = 'Nucleotide Mode';
        frameButtons.style.display = 'inline-block';
    }
    translateButton.addEventListener('click', () => {
        console.log('translate button clicked', isTranslated);
        if (isTranslated) {
            viewer.setNucleotideMode();
            isTranslated = false;
            translateButton.textContent = 'Translate';
            frameButtons.style.display = 'none';
        }
        else {
            translateAll(currentFrame);
        }
    });
    searchButton.addEventListener('click', () => {
        const query = searchInput.value;
        if (!query)
            return;
        const sequences = viewer.getSequences();
        const searchResultsData = sequences.map(seq => (0,_pkg_seqedit_wasm__WEBPACK_IMPORTED_MODULE_1__.search)(seq, query));
        const convertedResults = searchResultsData.map(res => Array.from(res));
        viewer.setSearchResults(convertedResults, query.length);
        // Store search results for state management
        searchResults = { results: convertedResults, queryLength: query.length };
    });
    saveRevisionButton.addEventListener('click', async () => {
        console.log('Save revision button clicked');
        if (!authManager) {
            console.error('No authentication manager configured');
            alert('No authentication configured.');
            return;
        }
        const returnUrl = urlParams.get('return-url');
        if (!returnUrl) {
            console.error('No return-url specified in URL params');
            alert('No return-url specified.');
            return;
        }
        console.log('Return URL:', returnUrl);
        if (!organism) {
            console.error('No organism specified in URL params');
            alert('No organism specified in URL.');
            return;
        }
        console.log('Organism:', organism);
        if (!metadata || !groupId) {
            console.error('Metadata or groupId not available', { metadata: !!metadata, groupId });
            alert('Metadata not loaded or groupId not found.');
            return;
        }
        console.log('Metadata loaded, groupId:', groupId);
        // Check if user is authenticated, if not, initiate auth flow
        const isAuth = await authManager.isAuthenticated();
        console.log('User authenticated:', isAuth);
        if (!isAuth) {
            alert('Please refresh the page to authenticate first.');
            return;
        }
        // User is authenticated, proceed with saving revision
        console.log('User is authenticated, proceeding with revision save...');
        const authToken = await getAuthToken();
        if (!authToken) {
            console.error('Failed to get authentication token');
            alert('Failed to get authentication token.');
            return;
        }
        console.log('Auth token obtained successfully');
        const sequences = viewer.getSequences();
        const names = viewer.getSequenceNames();
        console.log('Sequences to save:', names.length, 'sequences');
        console.log('Original sequence names:', names);
        // Create a mapping from accessionVersion to submissionId based on metadata
        const accessionToSubmissionId = new Map();
        const lines = metadata.originalText.split('\n');
        const headers = lines[0].split('\t');
        const accessionVersionIndex = headers.indexOf('accessionVersion');
        const submissionIdIndex = headers.indexOf('submissionId');
        console.log('Metadata headers:', headers);
        console.log('AccessionVersion index:', accessionVersionIndex, 'SubmissionId index:', submissionIdIndex);
        if (accessionVersionIndex !== -1 && submissionIdIndex !== -1) {
            for (let i = 1; i < lines.length; i++) {
                const columns = lines[i].split('\t');
                if (columns.length > Math.max(accessionVersionIndex, submissionIdIndex)) {
                    const accessionVersion = columns[accessionVersionIndex];
                    const submissionId = columns[submissionIdIndex];
                    if (accessionVersion && submissionId) {
                        accessionToSubmissionId.set(accessionVersion, submissionId);
                    }
                }
            }
        }
        console.log('Accession to SubmissionId mapping:', Array.from(accessionToSubmissionId.entries()));
        // Map sequence names from accessionVersion to submissionId
        const mappedNames = names.map(name => {
            const submissionId = accessionToSubmissionId.get(name);
            if (submissionId) {
                console.log(`Mapping ${name} -> ${submissionId}`);
                return submissionId;
            }
            else {
                console.warn(`No submissionId found for ${name}, keeping original name`);
                return name;
            }
        });
        console.log('Mapped sequence names:', mappedNames);
        const fastaContent = mappedNames.map((name, i) => `>${name}\n${sequences[i]}`).join('\n');
        console.log('FASTA content preview:', fastaContent.substring(0, 200) + '...');
        const fastaFile = new File([fastaContent], "sequences.fasta", { type: "text/plain" });
        const metadataFile = new File([metadata.originalText], "metadata.tsv", { type: "text/tab-separated-values" });
        console.log('Metadata preview:', metadata.originalText.substring(0, 500) + '...');
        const formData = new FormData();
        formData.append('sequenceFile', fastaFile);
        formData.append('metadataFile', metadataFile);
        const revisionUrl = `${returnUrl.replace(/\/$/, '')}/${organism}/revise?groupId=${groupId}&dataUseTermsType=OPEN`;
        console.log('Making API call to:', revisionUrl);
        try {
            saveRevisionButton.disabled = true;
            saveRevisionButton.textContent = 'Saving...';
            console.log('Sending POST request to Loculus...');
            const response = await fetch(revisionUrl, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                },
                body: formData,
            });
            console.log('Received response:', response.status, response.statusText);
            if (response.ok) {
                alert('Revision saved successfully!');
                const responseData = await response.json();
                console.log('Success response:', responseData);
            }
            else if (response.status === 401) {
                // Token might be expired, try to refresh and retry once
                console.log('Unauthorized, attempting to refresh token...');
                const newToken = await authManager.refreshToken();
                if (newToken) {
                    console.log('Token refreshed, retrying request...');
                    // Retry with new token
                    const retryResponse = await fetch(revisionUrl, {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${newToken}`,
                        },
                        body: formData,
                    });
                    console.log('Retry response:', retryResponse.status, retryResponse.statusText);
                    if (retryResponse.ok) {
                        alert('Revision saved successfully!');
                        const responseData = await retryResponse.json();
                        console.log('Success response:', responseData);
                    }
                    else {
                        const errorText = await retryResponse.text();
                        alert(`Error saving revision: ${retryResponse.status} ${retryResponse.statusText}\n${errorText}`);
                        console.error('Error response:', errorText);
                    }
                }
                else {
                    alert('Authentication expired. Please refresh the page and try again.');
                    await authManager.clearStoredAuth();
                    await updateSaveButtonState();
                }
            }
            else {
                const errorText = await response.text();
                alert(`Error saving revision: ${response.status} ${response.statusText}\n${errorText}`);
                console.error('Error response:', errorText);
            }
        }
        catch (error) {
            console.error('Error saving revision:', error);
            alert('Failed to save revision. See console for details.');
        }
        finally {
            saveRevisionButton.disabled = false;
            await updateSaveButtonState();
        }
    });
    document.getElementById('frame1-button').addEventListener('click', () => translateAll(1));
    document.getElementById('frame2-button').addEventListener('click', () => translateAll(2));
    document.getElementById('frame3-button').addEventListener('click', () => translateAll(3));
    // Authentication-first flow: Check if we need authentication and do it early
    async function checkAndInitiateAuthenticationIfNeeded() {
        if (!authManager) {
            return; // No auth config
        }
        const isAuthenticated = await authManager.isAuthenticated();
        if (!isAuthenticated && !_app_state__WEBPACK_IMPORTED_MODULE_3__.AppStateManager.isReturningFromAuth()) {
            console.log('Authentication required - will initiate after loading content...');
            return false; // Don't initiate auth yet, load content first
        }
        return false; // No auth needed or already authenticated
    }
    // Load sequences and metadata first, then check auth
    async function loadContentAndCheckAuth() {
        // Load sequences if URL is provided and we haven't restored state
        if (fastaUrl && !stateWasRestored) {
            urlInput.value = fastaUrl;
            await loadSequences();
        }
        // Load metadata if URL is provided and we haven't restored state  
        if (metadataUrl && !stateWasRestored) {
            await loadMetadata(metadataUrl);
        }
        // Now check authentication after content is loaded
        if (authManager) {
            const isAuthenticated = await authManager.isAuthenticated();
            if (!isAuthenticated && !_app_state__WEBPACK_IMPORTED_MODULE_3__.AppStateManager.isReturningFromAuth()) {
                console.log('Content loaded, now initiating authentication...');
                // Save current application state before authentication (now with loaded content)
                const sequences = viewer.getSequences();
                const names = viewer.getSequenceNames();
                _app_state__WEBPACK_IMPORTED_MODULE_3__.AppStateManager.saveStateBeforeAuth(urlParams, { names, sequences }, isTranslated, currentFrame, isTranslated ? viewer.getTranslatedSequences() : undefined, metadata, groupId, searchResults, false // Don't continue with save revision after auth
                );
                await authManager.initiateAuth();
                return; // Will redirect
            }
        }
    }
    logoutButton.addEventListener('click', async () => {
        if (authManager) {
            await authManager.logout(true);
        }
    });
    // Load content first, then handle authentication
    await loadContentAndCheckAuth();
}
main();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./www/sequence-viewer.ts":
/*!********************************!*\
  !*** ./www/sequence-viewer.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SequenceViewer: () => (/* binding */ SequenceViewer)
/* harmony export */ });
class SequenceViewer {
    sequenceCanvas;
    namesCanvas;
    rulerCanvas;
    seqCtx;
    namesCtx;
    rulerCtx;
    sequences = [];
    names = [];
    selectedSequenceNames = new Set();
    colors = {
        'A': { foreground: '#018001', background: '#5ADC5A' }, // Green foreground, light green background
        'C': { foreground: '#0101FF', background: '#6464FA' }, // Blue foreground, light blue background
        'G': { foreground: '#000000', background: '#5A5A5A' }, // Black foreground, dark gray background
        'T': { foreground: '#FF0101', background: '#F58282' }, // Red foreground, light red background
        'U': { foreground: '#FF0101', background: '#F58282' }, // Same as T
        'R': { foreground: '#FF00FF', background: '#FFFFFF' }, // Magenta foreground, white background
        'Y': { foreground: '#FF00FF', background: '#FFFFFF' },
        'S': { foreground: '#FF00FF', background: '#FFFFFF' },
        'W': { foreground: '#FF00FF', background: '#FFFFFF' },
        'K': { foreground: '#FF00FF', background: '#FFFFFF' },
        'M': { foreground: '#FF00FF', background: '#FFFFFF' },
        'B': { foreground: '#FF00FF', background: '#FFFFFF' },
        'D': { foreground: '#FF00FF', background: '#FFFFFF' },
        'H': { foreground: '#FF00FF', background: '#FFFFFF' },
        'V': { foreground: '#FF00FF', background: '#FFFFFF' },
        'N': { foreground: '#FF00FF', background: '#FFFFFF' }, // Magenta foreground, white background
        '-': { foreground: '#808080', background: '#FAFAFA' }, // Dark gray foreground, light gray background (GAP)
    };
    aminoAcidColors = {
        'A': { foreground: '#000000', background: '#276EB7' },
        'C': { foreground: '#000000', background: '#E68080' },
        'D': { foreground: '#000000', background: '#CC4DCC' },
        'E': { foreground: '#000000', background: '#984097' },
        'F': { foreground: '#000000', background: '#1980E6' },
        'G': { foreground: '#000000', background: '#E6994D' },
        'H': { foreground: '#000000', background: '#19B3B3' },
        'I': { foreground: '#000000', background: '#4E9BF3' },
        'K': { foreground: '#000000', background: '#E63319' },
        'L': { foreground: '#000000', background: '#78A6D5' },
        'M': { foreground: '#000000', background: '#0F549B' },
        'N': { foreground: '#000000', background: '#19CC19' },
        'P': { foreground: '#000000', background: '#CCCC00' },
        'Q': { foreground: '#000000', background: '#5CED5C' },
        'R': { foreground: '#000000', background: '#F6442C' },
        'S': { foreground: '#000000', background: '#029602' },
        'T': { foreground: '#000000', background: '#45C945' },
        'V': { foreground: '#000000', background: '#047DF9' },
        'W': { foreground: '#000000', background: '#0355A9' },
        'Y': { foreground: '#000000', background: '#14C6C8' },
        '*': { foreground: '#00FFFF', background: '#696969' }, // STOP codon (darkGray)
        '-': { foreground: '#A9A9A9', background: '#E6E6E6' }, // GAP (darkGray, 230,230,230)
        'X': { foreground: '#00FFFF', background: '#FFFFFF' }, // Unknown (cyan, white)
    };
    blockWidth = 20;
    blockHeight = 20;
    scrollX = 0;
    scrollY = 0;
    maxSequenceLength = 0;
    isRedrawScheduled = false;
    selectionStart = null;
    selectionEnd = null;
    isDragging = false;
    isDraggingHScrollbar = false;
    isDraggingVScrollbar = false;
    lastMouseX = 0;
    lastMouseY = 0;
    scrollbarWidth = 10;
    scrollbarColor = '#888';
    scrollbarTrackColor = '#f1f1f1';
    displayMode = 'nucleotide';
    translatedSequences = [];
    currentReadingFrame = 1;
    searchResults = [];
    searchQueryLength = 0;
    constructor(sequenceCanvas, namesCanvas, rulerCanvas) {
        this.sequenceCanvas = sequenceCanvas;
        this.namesCanvas = namesCanvas;
        this.rulerCanvas = rulerCanvas;
        this.seqCtx = sequenceCanvas.getContext('2d');
        this.namesCtx = namesCanvas.getContext('2d');
        this.rulerCtx = rulerCanvas.getContext('2d');
        // Make canvas focusable for keyboard navigation
        this.sequenceCanvas.tabIndex = 0;
        this.sequenceCanvas.addEventListener('wheel', this.onWheel.bind(this));
        this.namesCanvas.addEventListener('wheel', this.onWheel.bind(this));
        this.namesCanvas.addEventListener('mousedown', this.onNamesCanvasMouseDown.bind(this));
        this.sequenceCanvas.addEventListener('mousedown', this.onMouseDown.bind(this));
        this.sequenceCanvas.addEventListener('mousemove', this.onMouseMove.bind(this));
        this.sequenceCanvas.addEventListener('mouseup', this.onMouseUp.bind(this));
        this.sequenceCanvas.addEventListener('focus', () => {
            this.ensureSelection();
            this.requestRedraw();
        });
        this.resizeCanvas();
        window.addEventListener('resize', this.resizeCanvas.bind(this));
        window.addEventListener('keydown', this.onKeyDown.bind(this));
    }
    saveState() {
        const state = {
            names: this.names,
            sequences: this.sequences
        };
        localStorage.setItem('seqedit-state', JSON.stringify(state));
    }
    setSequences(names, sequences) {
        this.names = names;
        this.sequences = sequences;
        this.maxSequenceLength = Math.max(...sequences.map(s => s.length));
        this.scrollX = 0;
        this.scrollY = 0;
        this.selectionStart = null;
        this.selectionEnd = null;
        this.requestRedraw();
    }
    getSelectedSequence() {
        if (!this.selectionStart) {
            return null;
        }
        return {
            seqIndex: this.selectionStart.seqIndex,
            sequence: this.sequences[this.selectionStart.seqIndex]
        };
    }
    updateSequence(seqIndex, newSequence) {
        this.sequences[seqIndex] = newSequence;
        this.maxSequenceLength = Math.max(...this.sequences.map(s => s.length));
        this.requestRedraw();
    }
    getSequences() {
        return this.sequences;
    }
    getSequenceNames() {
        return this.names;
    }
    getSelectedSequenceIndices() {
        return Array.from(this.selectedSequenceNames);
    }
    getTranslatedSequences() {
        return this.translatedSequences;
    }
    clearSelectedSequenceNames() {
        this.selectedSequenceNames.clear();
        this.requestRedraw();
    }
    setTranslatedSequences(sequences, frame) {
        this.translatedSequences = sequences;
        this.currentReadingFrame = frame;
        this.displayMode = 'aminoacid';
        this.scrollX = 0;
        this.scrollY = 0;
        this.selectionStart = null;
        this.selectionEnd = null;
        this.requestRedraw();
    }
    setNucleotideMode() {
        this.displayMode = 'nucleotide';
        this.scrollX = 0;
        this.scrollY = 0;
        this.selectionStart = null;
        this.selectionEnd = null;
        this.requestRedraw();
    }
    setSearchResults(results, queryLength) {
        this.searchResults = results;
        this.searchQueryLength = queryLength;
        this.requestRedraw();
    }
    resizeCanvas() {
        const parent = this.sequenceCanvas.parentElement;
        this.sequenceCanvas.width = parent.clientWidth;
        this.sequenceCanvas.height = parent.clientHeight;
        const namesParent = this.namesCanvas.parentElement;
        this.namesCanvas.width = namesParent.clientWidth;
        this.namesCanvas.height = namesParent.clientHeight;
        const rulerParent = this.rulerCanvas.parentElement;
        this.rulerCanvas.width = rulerParent.clientWidth;
        this.rulerCanvas.height = 20;
        this.requestRedraw();
    }
    onMouseDown(event) {
        const rect = this.sequenceCanvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        // Check for horizontal scrollbar click
        const contentWidth = this.maxSequenceLength * this.blockWidth;
        const canvasWidth = this.sequenceCanvas.width;
        const canvasHeight = this.sequenceCanvas.height;
        if (contentWidth > canvasWidth && y >= canvasHeight - this.scrollbarWidth) {
            this.isDraggingHScrollbar = true;
            this.lastMouseX = x;
            return;
        }
        // Check for vertical scrollbar click
        const contentHeight = this.sequences.length * this.blockHeight;
        if (contentHeight > canvasHeight && x >= canvasWidth - this.scrollbarWidth) {
            this.isDraggingVScrollbar = true;
            this.lastMouseY = y;
            return;
        }
        this.isDragging = true;
        const seqIndex = Math.floor((y + this.scrollY) / this.blockHeight);
        const pos = Math.floor((x + this.scrollX) / this.blockWidth);
        if (seqIndex >= 0 && seqIndex < this.sequences.length && pos >= 0 && pos < this.sequences[seqIndex].length) {
            this.selectionStart = { seqIndex, pos };
            this.selectionEnd = { seqIndex, pos };
        }
        else {
            this.selectionStart = null;
            this.selectionEnd = null;
        }
        this.requestRedraw();
    }
    onMouseMove(event) {
        const rect = this.sequenceCanvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        if (this.isDraggingHScrollbar) {
            const contentWidth = this.maxSequenceLength * this.blockWidth;
            const canvasWidth = this.sequenceCanvas.width;
            const scrollbarTrackWidth = canvasWidth - this.scrollbarWidth;
            const scrollbarThumbWidth = Math.max(50, scrollbarTrackWidth * (canvasWidth / contentWidth));
            const deltaX = x - this.lastMouseX;
            const scrollRatio = (contentWidth - canvasWidth) / (scrollbarTrackWidth - scrollbarThumbWidth);
            this.scrollX += deltaX * scrollRatio;
            this.lastMouseX = x;
            const maxScrollX = contentWidth - canvasWidth;
            this.scrollX = Math.max(0, Math.min(this.scrollX, maxScrollX));
            this.requestRedraw();
            return;
        }
        if (this.isDraggingVScrollbar) {
            const contentHeight = this.sequences.length * this.blockHeight;
            const canvasHeight = this.sequenceCanvas.height;
            const scrollbarTrackHeight = canvasHeight - this.scrollbarWidth;
            const scrollbarThumbHeight = Math.max(50, scrollbarTrackHeight * (canvasHeight / contentHeight));
            const deltaY = y - this.lastMouseY;
            const scrollRatio = (contentHeight - canvasHeight) / (scrollbarTrackHeight - scrollbarThumbHeight);
            this.scrollY += deltaY * scrollRatio;
            this.lastMouseY = y;
            const maxScrollY = contentHeight - canvasHeight;
            this.scrollY = Math.max(0, Math.min(this.scrollY, maxScrollY));
            this.requestRedraw();
            return;
        }
        if (!this.isDragging || !this.selectionStart)
            return;
        const seqIndex = Math.floor((y + this.scrollY) / this.blockHeight);
        const pos = Math.floor((x + this.scrollX) / this.blockWidth);
        // Allow selection across multiple sequences
        if (seqIndex >= 0 && seqIndex < this.sequences.length && pos >= 0 && pos <= this.sequences[seqIndex].length) {
            this.selectionEnd = { seqIndex, pos };
        }
        this.requestRedraw();
    }
    onMouseUp(event) {
        this.isDragging = false;
        this.isDraggingHScrollbar = false;
        this.isDraggingVScrollbar = false;
    }
    getSelectedText() {
        if (!this.selectionStart || !this.selectionEnd) {
            return '';
        }
        const startRow = Math.min(this.selectionStart.seqIndex, this.selectionEnd.seqIndex);
        const endRow = Math.max(this.selectionStart.seqIndex, this.selectionEnd.seqIndex);
        const startCol = Math.min(this.selectionStart.pos, this.selectionEnd.pos);
        const endCol = Math.max(this.selectionStart.pos, this.selectionEnd.pos);
        let selectedText = '';
        for (let i = startRow; i <= endRow; i++) {
            const sequence = this.sequences[i];
            selectedText += sequence.substring(startCol, endCol + 1); // +1 because substring end is exclusive
            if (i < endRow) {
                selectedText += '\n';
            }
        }
        return selectedText;
    }
    deleteSelectedRange(preserveSelection = false) {
        if (!this.selectionStart || !this.selectionEnd) {
            return null;
        }
        const startRow = Math.min(this.selectionStart.seqIndex, this.selectionEnd.seqIndex);
        const endRow = Math.max(this.selectionStart.seqIndex, this.selectionEnd.seqIndex);
        const startCol = Math.min(this.selectionStart.pos, this.selectionEnd.pos);
        const endCol = Math.max(this.selectionStart.pos, this.selectionEnd.pos);
        const newCursorPos = { seqIndex: startRow, pos: startCol };
        // Store the original selection if we want to preserve it
        const originalSelectionStart = preserveSelection ? { ...this.selectionStart } : null;
        const originalSelectionEnd = preserveSelection ? { ...this.selectionEnd } : null;
        for (let i = startRow; i <= endRow; i++) {
            const originalSequence = this.sequences[i];
            const newSequence = originalSequence.slice(0, startCol) + originalSequence.slice(endCol + 1);
            this.sequences[i] = newSequence;
        }
        this.maxSequenceLength = Math.max(...this.sequences.map(s => s.length));
        if (preserveSelection && originalSelectionStart && originalSelectionEnd) {
            // Adjust the selection bounds after deletion
            const deletedLength = endCol - startCol + 1;
            this.selectionStart = originalSelectionStart;
            this.selectionEnd = {
                seqIndex: originalSelectionEnd.seqIndex,
                pos: Math.max(startCol, originalSelectionEnd.pos - deletedLength)
            };
        }
        else {
            // Keep the cursor position but clear the range selection
            this.selectionStart = newCursorPos;
            this.selectionEnd = newCursorPos;
        }
        this.requestRedraw();
        return newCursorPos;
    }
    backspaceSelection() {
        if (!this.selectionStart || !this.selectionEnd) {
            return;
        }
        const startRow = Math.min(this.selectionStart.seqIndex, this.selectionEnd.seqIndex);
        const endRow = Math.max(this.selectionStart.seqIndex, this.selectionEnd.seqIndex);
        const startCol = Math.min(this.selectionStart.pos, this.selectionEnd.pos);
        // Store the original selection to preserve it
        const originalSelectionStart = { ...this.selectionStart };
        const originalSelectionEnd = { ...this.selectionEnd };
        // If we're at the beginning of sequences, there's nothing to backspace
        if (startCol === 0) {
            return;
        }
        // Remove the character immediately to the left of the selection
        const backspacePos = startCol - 1;
        for (let i = startRow; i <= endRow; i++) {
            const originalSequence = this.sequences[i];
            if (backspacePos < originalSequence.length) {
                const newSequence = originalSequence.slice(0, backspacePos) + originalSequence.slice(backspacePos + 1);
                this.sequences[i] = newSequence;
            }
        }
        this.maxSequenceLength = Math.max(...this.sequences.map(s => s.length));
        // Adjust the selection to account for the removed character (shift left by 1)
        this.selectionStart = {
            seqIndex: originalSelectionStart.seqIndex,
            pos: originalSelectionStart.pos - 1
        };
        this.selectionEnd = {
            seqIndex: originalSelectionEnd.seqIndex,
            pos: originalSelectionEnd.pos - 1
        };
        this.requestRedraw();
    }
    deleteCharacter(isBackspace) {
        if (!this.selectionStart || !this.selectionEnd) {
            return;
        }
        const startRow = Math.min(this.selectionStart.seqIndex, this.selectionEnd.seqIndex);
        const endRow = Math.max(this.selectionStart.seqIndex, this.selectionEnd.seqIndex);
        const startCol = Math.min(this.selectionStart.pos, this.selectionEnd.pos);
        const endCol = Math.max(this.selectionStart.pos, this.selectionEnd.pos);
        // Check if we have a multi-cell selection
        const hasMultiCellSelection = (startRow !== endRow) || (startCol !== endCol);
        if (hasMultiCellSelection) {
            if (isBackspace) {
                // Backspace: Remove characters to the left of selection, preserve selection
                this.backspaceSelection();
            }
            else {
                // Delete key: Replace selection with dashes and preserve selection
                this.fillSelection('-');
            }
            return;
        }
        // For single cell cursor position, delete one character
        let deletePos = startCol;
        if (isBackspace && deletePos > 0) {
            deletePos--;
        }
        for (let i = startRow; i <= endRow; i++) {
            const originalSequence = this.sequences[i];
            if (deletePos < originalSequence.length) {
                const newSequence = originalSequence.slice(0, deletePos) + originalSequence.slice(deletePos + 1);
                this.sequences[i] = newSequence;
            }
        }
        this.maxSequenceLength = Math.max(...this.sequences.map(s => s.length));
        // Position cursor at the deletion point
        this.selectionStart = { seqIndex: startRow, pos: deletePos };
        this.selectionEnd = this.selectionStart;
        this.requestRedraw();
    }
    insertCharacter(char) {
        if (!this.selectionStart || !this.selectionEnd) {
            return;
        }
        // If we have a multi-cell selection, replace it with the character instead of inserting
        const startRow = Math.min(this.selectionStart.seqIndex, this.selectionEnd.seqIndex);
        const endRow = Math.max(this.selectionStart.seqIndex, this.selectionEnd.seqIndex);
        const startCol = Math.min(this.selectionStart.pos, this.selectionEnd.pos);
        const endCol = Math.max(this.selectionStart.pos, this.selectionEnd.pos);
        // Check if we have a multi-cell selection
        const hasMultiCellSelection = (startRow !== endRow) || (startCol !== endCol);
        if (hasMultiCellSelection) {
            // For multi-cell selections, fill the selection instead of inserting
            this.fillSelection(char);
            return;
        }
        // For single cell cursor position, insert the character
        for (let i = startRow; i <= endRow; i++) {
            const originalSequence = this.sequences[i];
            const newSequence = originalSequence.slice(0, startCol) + char + originalSequence.slice(startCol);
            this.sequences[i] = newSequence;
        }
        this.maxSequenceLength = Math.max(...this.sequences.map(s => s.length));
        // Move cursor to after the inserted character
        this.selectionStart = { seqIndex: startRow, pos: startCol + 1 };
        this.selectionEnd = this.selectionStart;
        this.requestRedraw();
    }
    fillSelection(char) {
        if (!this.selectionStart || !this.selectionEnd) {
            return;
        }
        const startRow = Math.min(this.selectionStart.seqIndex, this.selectionEnd.seqIndex);
        const endRow = Math.max(this.selectionStart.seqIndex, this.selectionEnd.seqIndex);
        const startCol = Math.min(this.selectionStart.pos, this.selectionEnd.pos);
        const endCol = Math.max(this.selectionStart.pos, this.selectionEnd.pos);
        // Store the original selection to preserve it
        const originalSelectionStart = { ...this.selectionStart };
        const originalSelectionEnd = { ...this.selectionEnd };
        for (let i = startRow; i <= endRow; i++) {
            const originalSequence = this.sequences[i];
            let newSequenceArray = originalSequence.split('');
            for (let j = startCol; j <= endCol; j++) {
                if (j < newSequenceArray.length) {
                    newSequenceArray[j] = char;
                }
            }
            this.sequences[i] = newSequenceArray.join('');
        }
        this.maxSequenceLength = Math.max(...this.sequences.map(s => s.length));
        // Restore the original selection to preserve it
        this.selectionStart = originalSelectionStart;
        this.selectionEnd = originalSelectionEnd;
        this.requestRedraw();
    }
    insertCharacterWithShift(char) {
        if (!this.selectionStart || !this.selectionEnd) {
            return;
        }
        const startRow = Math.min(this.selectionStart.seqIndex, this.selectionEnd.seqIndex);
        const endRow = Math.max(this.selectionStart.seqIndex, this.selectionEnd.seqIndex);
        const startCol = Math.min(this.selectionStart.pos, this.selectionEnd.pos);
        // Store the original selection to preserve it after insertion
        const originalSelectionStart = { ...this.selectionStart };
        const originalSelectionEnd = { ...this.selectionEnd };
        // Insert character at the start position and shift everything right
        for (let i = startRow; i <= endRow; i++) {
            const originalSequence = this.sequences[i];
            const newSequence = originalSequence.slice(0, startCol) + char + originalSequence.slice(startCol);
            this.sequences[i] = newSequence;
        }
        this.maxSequenceLength = Math.max(...this.sequences.map(s => s.length));
        // Adjust selection to account for the inserted character
        this.selectionStart = {
            seqIndex: originalSelectionStart.seqIndex,
            pos: originalSelectionStart.pos + 1
        };
        this.selectionEnd = {
            seqIndex: originalSelectionEnd.seqIndex,
            pos: originalSelectionEnd.pos + 1
        };
        this.requestRedraw();
    }
    ensureSelection() {
        // Initialize selection if not already set (for keyboard navigation without mouse click)
        if (!this.selectionStart && this.sequences.length > 0) {
            this.selectionStart = { seqIndex: 0, pos: 0 };
            this.selectionEnd = { ...this.selectionStart };
        }
    }
    onKeyDown(event) {
        // Ensure we have a valid selection for keyboard navigation
        this.ensureSelection();
        if (!this.selectionStart)
            return;
        if (event.ctrlKey || event.metaKey) {
            if (event.key.toLowerCase() === 'c') {
                event.preventDefault();
                const selectedText = this.getSelectedText();
                if (selectedText) {
                    navigator.clipboard.writeText(selectedText);
                }
                return;
            }
            if (event.key.toLowerCase() === 'v') {
                event.preventDefault();
                navigator.clipboard.readText().then(text => {
                    if (text && this.selectionStart) {
                        const { seqIndex } = this.selectionStart;
                        const start = Math.min(this.selectionStart.pos, this.selectionEnd.pos);
                        const end = Math.max(this.selectionStart.pos, this.selectionEnd.pos);
                        const originalSequence = this.sequences[seqIndex];
                        const newSequence = originalSequence.slice(0, start) + text + originalSequence.slice(end + 1);
                        this.sequences[seqIndex] = newSequence;
                        this.selectionStart = { seqIndex, pos: start + text.length };
                        this.selectionEnd = this.selectionStart;
                        this.maxSequenceLength = Math.max(...this.sequences.map(s => s.length));
                        this.requestRedraw();
                    }
                });
                return;
            }
        }
        const { seqIndex, pos } = this.selectionStart;
        const iupacCharacters = 'ACGTURYSWKMBDHVN-';
        if (iupacCharacters.includes(event.key.toUpperCase())) {
            event.preventDefault();
            if (this.selectionStart && this.selectionEnd && (this.selectionStart.pos !== this.selectionEnd.pos || this.selectionStart.seqIndex !== this.selectionEnd.seqIndex)) { // Check if any selection exists
                this.fillSelection(event.key.toUpperCase());
            }
            else {
                this.insertCharacter(event.key.toUpperCase());
            }
        }
        else if (event.key === ' ') {
            event.preventDefault();
            // Spacebar: Insert dash and shift characters (insert action)
            if (this.selectionStart && this.selectionEnd && (this.selectionStart.pos !== this.selectionEnd.pos || this.selectionStart.seqIndex !== this.selectionEnd.seqIndex)) {
                // Multi-cell selection: insert at start and shift selection
                this.insertCharacterWithShift('-');
            }
            else {
                // Single cursor: regular insert
                this.insertCharacter('-');
            }
        }
        else if (event.key === 'ArrowLeft') {
            event.preventDefault();
            if (event.ctrlKey) {
                const newPos = this.findPreviousWord(seqIndex, pos);
                this.selectionStart = { seqIndex, pos: newPos };
                this.selectionEnd = this.selectionStart;
            }
            else if (event.shiftKey) {
                // Ensure selectionEnd is initialized if not already
                if (!this.selectionEnd) {
                    this.selectionEnd = { ...this.selectionStart };
                }
                // Extend selection left
                if (this.selectionEnd.pos > 0) {
                    this.selectionEnd.pos--;
                }
                else if (this.selectionEnd.seqIndex > 0) {
                    this.selectionEnd.seqIndex--;
                    this.selectionEnd.pos = this.sequences[this.selectionEnd.seqIndex].length;
                }
            }
            else {
                // Move cursor left, clear selection
                if (pos > 0) {
                    this.selectionStart = { seqIndex, pos: pos - 1 };
                }
                else if (seqIndex > 0) {
                    this.selectionStart = { seqIndex: seqIndex - 1, pos: this.sequences[seqIndex - 1].length };
                }
                this.selectionEnd = this.selectionStart;
            }
            this.requestRedraw();
        }
        else if (event.key === 'ArrowRight') {
            event.preventDefault();
            if (event.ctrlKey) {
                const newPos = this.findNextWord(seqIndex, pos);
                this.selectionStart = { seqIndex, pos: newPos };
                this.selectionEnd = this.selectionStart;
            }
            else if (event.shiftKey) {
                // Ensure selectionEnd is initialized if not already
                if (!this.selectionEnd) {
                    this.selectionEnd = { ...this.selectionStart };
                }
                // Extend selection right
                if (this.selectionEnd.pos < this.sequences[this.selectionEnd.seqIndex].length) {
                    this.selectionEnd.pos++;
                }
                else if (this.selectionEnd.seqIndex < this.sequences.length - 1) {
                    this.selectionEnd.seqIndex++;
                    this.selectionEnd.pos = 0;
                }
            }
            else {
                // Move cursor right, clear selection
                if (pos < this.sequences[seqIndex].length) {
                    this.selectionStart = { seqIndex, pos: pos + 1 };
                }
                else if (seqIndex < this.sequences.length - 1) {
                    this.selectionStart = { seqIndex: seqIndex + 1, pos: 0 };
                }
                this.selectionEnd = this.selectionStart;
            }
            this.requestRedraw();
        }
        else if (event.key === 'ArrowUp') {
            event.preventDefault();
            if (event.ctrlKey) {
                this.selectionStart = { seqIndex: 0, pos: pos };
                this.selectionEnd = this.selectionStart;
            }
            else if (event.shiftKey) {
                // Ensure selectionEnd is initialized if not already
                if (!this.selectionEnd) {
                    this.selectionEnd = { ...this.selectionStart };
                }
                // Extend selection up
                if (this.selectionEnd.seqIndex > 0) {
                    this.selectionEnd.seqIndex--;
                    this.selectionEnd.pos = Math.min(this.selectionEnd.pos, this.sequences[this.selectionEnd.seqIndex].length);
                }
            }
            else {
                // Move cursor up, clear selection
                if (seqIndex > 0) {
                    this.selectionStart = { seqIndex: seqIndex - 1, pos: Math.min(pos, this.sequences[seqIndex - 1].length) };
                }
                else {
                    this.selectionStart = { seqIndex: 0, pos: 0 }; // Move to start of first sequence
                }
                this.selectionEnd = this.selectionStart;
            }
            this.requestRedraw();
        }
        else if (event.key === 'ArrowDown') {
            event.preventDefault();
            if (event.ctrlKey) {
                this.selectionStart = { seqIndex: this.sequences.length - 1, pos: pos };
                this.selectionEnd = this.selectionStart;
            }
            else if (event.shiftKey) {
                // Ensure selectionEnd is initialized if not already
                if (!this.selectionEnd) {
                    this.selectionEnd = { ...this.selectionStart };
                }
                // Extend selection down
                if (this.selectionEnd.seqIndex < this.sequences.length - 1) {
                    this.selectionEnd.seqIndex++;
                    this.selectionEnd.pos = Math.min(this.selectionEnd.pos, this.sequences[this.selectionEnd.seqIndex].length);
                }
            }
            else {
                // Move cursor down, clear selection
                if (seqIndex < this.sequences.length - 1) {
                    this.selectionStart = { seqIndex: seqIndex + 1, pos: Math.min(pos, this.sequences[seqIndex + 1].length) };
                }
                else {
                    const lastSeqIndex = this.sequences.length - 1;
                    this.selectionStart = { seqIndex: lastSeqIndex, pos: this.sequences[lastSeqIndex].length }; // Move to end of last sequence
                }
                this.selectionEnd = this.selectionStart;
            }
            this.requestRedraw();
        }
        else if (event.key === 'Backspace') {
            event.preventDefault();
            this.deleteCharacter(true);
        }
        else if (event.key === 'Delete') {
            event.preventDefault();
            this.deleteCharacter(false);
        }
    }
    findNextWord(seqIndex, pos) {
        const sequence = this.sequences[seqIndex];
        let inWord = !this.isGap(sequence[pos]);
        for (let i = pos; i < sequence.length; i++) {
            if (inWord) {
                if (this.isGap(sequence[i])) {
                    inWord = false;
                }
            }
            else {
                if (!this.isGap(sequence[i])) {
                    return i;
                }
            }
        }
        return sequence.length;
    }
    findPreviousWord(seqIndex, pos) {
        const sequence = this.sequences[seqIndex];
        let inWord = pos > 0 && !this.isGap(sequence[pos - 1]);
        for (let i = pos - 1; i >= 0; i--) {
            if (inWord) {
                if (this.isGap(sequence[i])) {
                    return i + 1;
                }
            }
            else {
                if (!this.isGap(sequence[i])) {
                    inWord = true;
                }
            }
        }
        return 0;
    }
    isGap(char) {
        return char === '-';
    }
    onWheel(event) {
        event.preventDefault();
        this.scrollX += event.deltaX;
        this.scrollY += event.deltaY;
        const maxScrollX = this.maxSequenceLength * this.blockWidth - this.sequenceCanvas.width;
        const maxScrollY = this.sequences.length * this.blockHeight - this.sequenceCanvas.height;
        this.scrollX = Math.max(0, Math.min(this.scrollX, maxScrollX));
        this.scrollY = Math.max(0, Math.min(this.scrollY, maxScrollY));
        this.requestRedraw();
    }
    requestRedraw() {
        if (this.isRedrawScheduled) {
            return;
        }
        this.isRedrawScheduled = true;
        requestAnimationFrame(() => {
            this.draw();
            this.isRedrawScheduled = false;
        });
    }
    isNucleotideSelected(seqIndex, pos) {
        if (!this.selectionStart || !this.selectionEnd) {
            return false;
        }
        const startRow = Math.min(this.selectionStart.seqIndex, this.selectionEnd.seqIndex);
        const endRow = Math.max(this.selectionStart.seqIndex, this.selectionEnd.seqIndex);
        const startCol = Math.min(this.selectionStart.pos, this.selectionEnd.pos);
        const endCol = Math.max(this.selectionStart.pos, this.selectionEnd.pos);
        return seqIndex >= startRow && seqIndex <= endRow && pos >= startCol && pos <= endCol;
    }
    isSearchResult(seqIndex, pos) {
        if (!this.searchResults || !this.searchResults[seqIndex] || this.searchQueryLength === 0) {
            return false;
        }
        for (const startIndex of this.searchResults[seqIndex]) {
            if (pos >= startIndex && pos < startIndex + this.searchQueryLength) {
                return true;
            }
        }
        return false;
    }
    draw() {
        this.drawSequences();
        this.drawNames();
        this.drawRuler();
        this.drawScrollbars();
    }
    drawScrollbars() {
        const ctx = this.seqCtx;
        const canvasWidth = this.sequenceCanvas.width;
        const canvasHeight = this.sequenceCanvas.height;
        // Horizontal Scrollbar
        const contentWidth = this.maxSequenceLength * this.blockWidth;
        if (contentWidth > canvasWidth) {
            const scrollbarTrackWidth = canvasWidth - this.scrollbarWidth; // Leave space for vertical scrollbar
            const scrollbarThumbWidth = Math.max(50, scrollbarTrackWidth * (canvasWidth / contentWidth));
            const scrollbarThumbX = (this.scrollX / (contentWidth - canvasWidth)) * (scrollbarTrackWidth - scrollbarThumbWidth);
            ctx.fillStyle = this.scrollbarTrackColor;
            ctx.fillRect(0, canvasHeight - this.scrollbarWidth, scrollbarTrackWidth, this.scrollbarWidth);
            ctx.fillStyle = this.scrollbarColor;
            ctx.fillRect(scrollbarThumbX, canvasHeight - this.scrollbarWidth, scrollbarThumbWidth, this.scrollbarWidth);
        }
        // Vertical Scrollbar
        const contentHeight = this.sequences.length * this.blockHeight;
        if (contentHeight > canvasHeight) {
            const scrollbarTrackHeight = canvasHeight - this.scrollbarWidth; // Leave space for horizontal scrollbar
            const scrollbarThumbHeight = Math.max(50, scrollbarTrackHeight * (canvasHeight / contentHeight));
            const scrollbarThumbY = (this.scrollY / (contentHeight - canvasHeight)) * (scrollbarTrackHeight - scrollbarThumbHeight);
            ctx.fillStyle = this.scrollbarTrackColor;
            ctx.fillRect(canvasWidth - this.scrollbarWidth, 0, this.scrollbarWidth, scrollbarTrackHeight);
            ctx.fillStyle = this.scrollbarColor;
            ctx.fillRect(canvasWidth - this.scrollbarWidth, scrollbarThumbY, this.scrollbarWidth, scrollbarThumbHeight);
        }
    }
    drawSequences() {
        this.seqCtx.clearRect(0, 0, this.sequenceCanvas.width, this.sequenceCanvas.height);
        const startRow = Math.floor(this.scrollY / this.blockHeight);
        const endRow = Math.min(this.sequences.length, startRow + Math.ceil(this.sequenceCanvas.height / this.blockHeight));
        const startCol = Math.floor(this.scrollX / this.blockWidth);
        const endCol = Math.min(this.maxSequenceLength, startCol + Math.ceil(this.sequenceCanvas.width / this.blockWidth));
        for (let i = startRow; i < endRow; i++) {
            const sequence = this.sequences[i];
            for (let j = startCol; j < endCol; j++) {
                const x = j * this.blockWidth - this.scrollX;
                const y = i * this.blockHeight - this.scrollY;
                const nucleotide = sequence[j] || '';
                const charToDraw = this.displayMode === 'nucleotide' ? nucleotide : this.translatedSequences[i][j] || '';
                const colorMap = this.displayMode === 'nucleotide' ? this.colors : this.aminoAcidColors;
                const colorInfo = colorMap[charToDraw.toUpperCase()] || { foreground: '#000000', background: '#FFFFFF' }; // Default to black text on white background
                this.seqCtx.fillStyle = colorInfo.background;
                this.seqCtx.fillRect(x, y, this.blockWidth, this.blockHeight);
                this.seqCtx.strokeStyle = '#DDDDDD';
                this.seqCtx.strokeRect(x, y, this.blockWidth, this.blockHeight);
                // Highlight selected sequence names (entire row)
                if (this.selectedSequenceNames.has(i)) {
                    this.seqCtx.fillStyle = 'rgba(0, 255, 0, 0.1)'; // Light green overlay for selected rows
                    this.seqCtx.fillRect(x, y, this.blockWidth, this.blockHeight); // Apply to each block in the row
                }
                if (this.isSearchResult(i, j)) {
                    this.seqCtx.fillStyle = 'rgba(255, 255, 0, 0.5)'; // Semi-transparent yellow for search results
                    this.seqCtx.fillRect(x, y, this.blockWidth, this.blockHeight);
                }
                if (this.isNucleotideSelected(i, j)) { // This method name is now misleading, should be isCharSelected
                    this.seqCtx.fillStyle = 'rgba(0, 0, 255, 0.3)'; // Semi-transparent blue overlay for cell selection
                    this.seqCtx.fillRect(x, y, this.blockWidth, this.blockHeight);
                    this.seqCtx.strokeStyle = 'blue';
                    this.seqCtx.lineWidth = 2;
                    this.seqCtx.strokeRect(x, y, this.blockWidth, this.blockHeight);
                }
                this.seqCtx.fillStyle = colorInfo.foreground; // Use foreground color from scheme
                this.seqCtx.textAlign = 'center';
                this.seqCtx.textBaseline = 'middle';
                this.seqCtx.fillText(charToDraw, x + this.blockWidth / 2, y + this.blockHeight / 2);
            }
        }
    }
    drawNames() {
        this.namesCtx.clearRect(0, 0, this.namesCanvas.width, this.namesCanvas.height);
        this.namesCtx.font = '14px sans-serif';
        this.namesCtx.textAlign = 'left';
        this.namesCtx.textBaseline = 'middle';
        const startRow = Math.floor(this.scrollY / this.blockHeight);
        const endRow = Math.min(this.sequences.length, startRow + Math.ceil(this.namesCanvas.height / this.blockHeight));
        for (let i = startRow; i < endRow; i++) {
            const y = i * this.blockHeight - this.scrollY; // Top of the block
            const textY = y + this.blockHeight / 2; // Middle for text
            if (this.selectedSequenceNames.has(i)) {
                this.namesCtx.fillStyle = 'rgba(0, 0, 255, 0.1)'; // Light blue background for selected names
                this.namesCtx.fillRect(0, y, this.namesCanvas.width, this.blockHeight);
            }
            this.namesCtx.fillStyle = '#000000'; // Black text
            this.namesCtx.fillText(this.names[i], 5, textY);
        }
    }
    drawRuler() {
        this.rulerCtx.clearRect(0, 0, this.rulerCanvas.width, this.rulerCanvas.height);
        this.rulerCtx.font = '12px sans-serif';
        this.rulerCtx.textAlign = 'center';
        this.rulerCtx.textBaseline = 'middle';
        const startCol = Math.floor(this.scrollX / this.blockWidth);
        const endCol = Math.min(this.maxSequenceLength, startCol + Math.ceil(this.rulerCanvas.width / this.blockWidth));
        for (let j = startCol; j < endCol; j++) {
            if (j % 3 === 0) { // Draw label every 5 blocks
                const x = j * this.blockWidth - this.scrollX + this.blockWidth / 2;
                this.rulerCtx.fillStyle = '#000000';
                this.rulerCtx.fillText(String(j + 1), x, this.rulerCanvas.height / 2);
            }
        }
    }
    onNamesCanvasMouseDown(event) {
        const rect = this.namesCanvas.getBoundingClientRect();
        const y = event.clientY - rect.top;
        const seqIndex = Math.floor((y + this.scrollY) / this.blockHeight);
        if (seqIndex >= 0 && seqIndex < this.names.length) {
            if (event.ctrlKey || event.metaKey) { // Ctrl/Cmd click to toggle selection
                if (this.selectedSequenceNames.has(seqIndex)) {
                    this.selectedSequenceNames.delete(seqIndex);
                }
                else {
                    this.selectedSequenceNames.add(seqIndex);
                }
            }
            else if (event.shiftKey) { // Shift click to select a range
                if (this.selectedSequenceNames.size > 0) {
                    const firstSelected = Math.min(...Array.from(this.selectedSequenceNames));
                    const start = Math.min(firstSelected, seqIndex);
                    const end = Math.max(firstSelected, seqIndex);
                    for (let i = start; i <= end; i++) {
                        this.selectedSequenceNames.add(i);
                    }
                }
                else {
                    this.selectedSequenceNames.add(seqIndex);
                }
            }
            else { // Regular click to select only this item
                this.selectedSequenceNames.clear();
                this.selectedSequenceNames.add(seqIndex);
            }
            this.requestRedraw();
        }
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var hasSymbol = typeof Symbol === "function";
/******/ 		var webpackQueues = hasSymbol ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = hasSymbol ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = hasSymbol ? Symbol("webpack error") : "__webpack_error__";
/******/ 		
/******/ 		
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 		
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 		
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			var handle = (deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 		
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}
/******/ 			var done = (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue))
/******/ 			body(handle, done);
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/wasm loading */
/******/ 	(() => {
/******/ 		__webpack_require__.v = (exports, wasmModuleId, wasmModuleHash, importsObj) => {
/******/ 		
/******/ 			var req = fetch(__webpack_require__.p + "" + wasmModuleHash + ".module.wasm");
/******/ 			var fallback = () => (req
/******/ 				.then((x) => (x.arrayBuffer()))
/******/ 				.then((bytes) => (WebAssembly.instantiate(bytes, importsObj)))
/******/ 				.then((res) => (Object.assign(exports, res.instance.exports))));
/******/ 			return req.then((res) => {
/******/ 				if (typeof WebAssembly.instantiateStreaming === "function") {
/******/ 		
/******/ 					return WebAssembly.instantiateStreaming(res, importsObj)
/******/ 						.then(
/******/ 							(res) => (Object.assign(exports, res.instance.exports)),
/******/ 							(e) => {
/******/ 								if(res.headers.get("Content-Type") !== "application/wasm") {
/******/ 									console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
/******/ 									return fallback();
/******/ 								}
/******/ 								throw e;
/******/ 							}
/******/ 						);
/******/ 				}
/******/ 				return fallback();
/******/ 			});
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./www/main.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ1Y7QUFDaUI7QUFDdEQsbUVBQWMsQ0FBQyxrREFBSTtBQUNuQixtRUFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSnJCO0FBQ087QUFDUDtBQUNBOzs7QUFHQTs7QUFFQSxvREFBb0QsOEJBQThCOztBQUVsRjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxXQUFXLGNBQWM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM09PO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUUsNEJBQTRCO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsd0JBQXdCLFVBQVUsa0JBQWtCO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHdCQUF3QixVQUFVLGtCQUFrQjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHNEQUFzRCxpQkFBaUIsRUFBRSxVQUFVO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx3QkFBd0IsVUFBVSxrQkFBa0I7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsd0JBQXdCLFVBQVUsa0JBQWtCO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyU21EO0FBQ3NDO0FBQ0w7QUFDdEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNERBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNEQUFlO0FBQ3RDO0FBQ0EsMEJBQTBCLDhDQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtRUFBNEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1REFBZTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFlO0FBQ3ZCO0FBQ0EsMkJBQTJCLHVEQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1REFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsOERBQVc7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MscUVBQWtCO0FBQzFEO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHlEQUF5RCw0REFBUztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQseURBQU07QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsK0JBQStCO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixrQkFBa0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLE1BQU0sS0FBSyxhQUFhO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxLQUFLO0FBQy9EO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw4REFBOEQsS0FBSyxJQUFJLGFBQWE7QUFDcEY7QUFDQSx3RUFBd0Usb0JBQW9CO0FBQzVGLGlGQUFpRixtQ0FBbUM7QUFDcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsNkJBQTZCLEdBQUcsU0FBUyxrQkFBa0IsUUFBUTtBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFVBQVU7QUFDekQsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELFNBQVM7QUFDaEUseUJBQXlCO0FBQ3pCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Qsc0JBQXNCLEVBQUUseUJBQXlCLElBQUksVUFBVTtBQUN2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGlCQUFpQixFQUFFLG9CQUFvQixJQUFJLFVBQVU7QUFDckc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBLGlDQUFpQyx1REFBZTtBQUNoRDtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsdURBQWU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsdURBQWUsa0NBQWtDLGtCQUFrQjtBQUNuRjtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdiTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0Q7QUFDQTtBQUNBLGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGLEU7Ozs7O1dDeEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7OztVRWxCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcWVkaXQtd2FzbS8uL3BrZy9zZXFlZGl0X3dhc20uanMiLCJ3ZWJwYWNrOi8vc2VxZWRpdC13YXNtLy4vcGtnL3NlcWVkaXRfd2FzbV9iZy5qcyIsIndlYnBhY2s6Ly9zZXFlZGl0LXdhc20vLi93d3cvYXBwLXN0YXRlLnRzIiwid2VicGFjazovL3NlcWVkaXQtd2FzbS8uL3d3dy9hdXRoLnRzIiwid2VicGFjazovL3NlcWVkaXQtd2FzbS8uL3d3dy9tYWluLnRzIiwid2VicGFjazovL3NlcWVkaXQtd2FzbS8uL3d3dy9zZXF1ZW5jZS12aWV3ZXIudHMiLCJ3ZWJwYWNrOi8vc2VxZWRpdC13YXNtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NlcWVkaXQtd2FzbS93ZWJwYWNrL3J1bnRpbWUvYXN5bmMgbW9kdWxlIiwid2VicGFjazovL3NlcWVkaXQtd2FzbS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2VxZWRpdC13YXNtL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vc2VxZWRpdC13YXNtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2VxZWRpdC13YXNtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2VxZWRpdC13YXNtL3dlYnBhY2svcnVudGltZS93YXNtIGxvYWRpbmciLCJ3ZWJwYWNrOi8vc2VxZWRpdC13YXNtL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3NlcWVkaXQtd2FzbS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3NlcWVkaXQtd2FzbS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vc2VxZWRpdC13YXNtL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB3YXNtIGZyb20gXCIuL3NlcWVkaXRfd2FzbV9iZy53YXNtXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zZXFlZGl0X3dhc21fYmcuanNcIjtcbmltcG9ydCB7IF9fd2JnX3NldF93YXNtIH0gZnJvbSBcIi4vc2VxZWRpdF93YXNtX2JnLmpzXCI7XG5fX3diZ19zZXRfd2FzbSh3YXNtKTtcbndhc20uX193YmluZGdlbl9zdGFydCgpO1xuIiwibGV0IHdhc207XG5leHBvcnQgZnVuY3Rpb24gX193Ymdfc2V0X3dhc20odmFsKSB7XG4gICAgd2FzbSA9IHZhbDtcbn1cblxuXG5jb25zdCBsVGV4dERlY29kZXIgPSB0eXBlb2YgVGV4dERlY29kZXIgPT09ICd1bmRlZmluZWQnID8gKDAsIG1vZHVsZS5yZXF1aXJlKSgndXRpbCcpLlRleHREZWNvZGVyIDogVGV4dERlY29kZXI7XG5cbmxldCBjYWNoZWRUZXh0RGVjb2RlciA9IG5ldyBsVGV4dERlY29kZXIoJ3V0Zi04JywgeyBpZ25vcmVCT006IHRydWUsIGZhdGFsOiB0cnVlIH0pO1xuXG5jYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoKTtcblxubGV0IGNhY2hlZFVpbnQ4QXJyYXlNZW1vcnkwID0gbnVsbDtcblxuZnVuY3Rpb24gZ2V0VWludDhBcnJheU1lbW9yeTAoKSB7XG4gICAgaWYgKGNhY2hlZFVpbnQ4QXJyYXlNZW1vcnkwID09PSBudWxsIHx8IGNhY2hlZFVpbnQ4QXJyYXlNZW1vcnkwLmJ5dGVMZW5ndGggPT09IDApIHtcbiAgICAgICAgY2FjaGVkVWludDhBcnJheU1lbW9yeTAgPSBuZXcgVWludDhBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVkVWludDhBcnJheU1lbW9yeTA7XG59XG5cbmZ1bmN0aW9uIGdldFN0cmluZ0Zyb21XYXNtMChwdHIsIGxlbikge1xuICAgIHB0ciA9IHB0ciA+Pj4gMDtcbiAgICByZXR1cm4gY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKGdldFVpbnQ4QXJyYXlNZW1vcnkwKCkuc3ViYXJyYXkocHRyLCBwdHIgKyBsZW4pKTtcbn1cblxubGV0IFdBU01fVkVDVE9SX0xFTiA9IDA7XG5cbmNvbnN0IGxUZXh0RW5jb2RlciA9IHR5cGVvZiBUZXh0RW5jb2RlciA9PT0gJ3VuZGVmaW5lZCcgPyAoMCwgbW9kdWxlLnJlcXVpcmUpKCd1dGlsJykuVGV4dEVuY29kZXIgOiBUZXh0RW5jb2RlcjtcblxubGV0IGNhY2hlZFRleHRFbmNvZGVyID0gbmV3IGxUZXh0RW5jb2RlcigndXRmLTgnKTtcblxuY29uc3QgZW5jb2RlU3RyaW5nID0gKHR5cGVvZiBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGVJbnRvID09PSAnZnVuY3Rpb24nXG4gICAgPyBmdW5jdGlvbiAoYXJnLCB2aWV3KSB7XG4gICAgcmV0dXJuIGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8oYXJnLCB2aWV3KTtcbn1cbiAgICA6IGZ1bmN0aW9uIChhcmcsIHZpZXcpIHtcbiAgICBjb25zdCBidWYgPSBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGUoYXJnKTtcbiAgICB2aWV3LnNldChidWYpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlYWQ6IGFyZy5sZW5ndGgsXG4gICAgICAgIHdyaXR0ZW46IGJ1Zi5sZW5ndGhcbiAgICB9O1xufSk7XG5cbmZ1bmN0aW9uIHBhc3NTdHJpbmdUb1dhc20wKGFyZywgbWFsbG9jLCByZWFsbG9jKSB7XG5cbiAgICBpZiAocmVhbGxvYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGJ1ZiA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZShhcmcpO1xuICAgICAgICBjb25zdCBwdHIgPSBtYWxsb2MoYnVmLmxlbmd0aCwgMSkgPj4+IDA7XG4gICAgICAgIGdldFVpbnQ4QXJyYXlNZW1vcnkwKCkuc3ViYXJyYXkocHRyLCBwdHIgKyBidWYubGVuZ3RoKS5zZXQoYnVmKTtcbiAgICAgICAgV0FTTV9WRUNUT1JfTEVOID0gYnVmLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHB0cjtcbiAgICB9XG5cbiAgICBsZXQgbGVuID0gYXJnLmxlbmd0aDtcbiAgICBsZXQgcHRyID0gbWFsbG9jKGxlbiwgMSkgPj4+IDA7XG5cbiAgICBjb25zdCBtZW0gPSBnZXRVaW50OEFycmF5TWVtb3J5MCgpO1xuXG4gICAgbGV0IG9mZnNldCA9IDA7XG5cbiAgICBmb3IgKDsgb2Zmc2V0IDwgbGVuOyBvZmZzZXQrKykge1xuICAgICAgICBjb25zdCBjb2RlID0gYXJnLmNoYXJDb2RlQXQob2Zmc2V0KTtcbiAgICAgICAgaWYgKGNvZGUgPiAweDdGKSBicmVhaztcbiAgICAgICAgbWVtW3B0ciArIG9mZnNldF0gPSBjb2RlO1xuICAgIH1cblxuICAgIGlmIChvZmZzZXQgIT09IGxlbikge1xuICAgICAgICBpZiAob2Zmc2V0ICE9PSAwKSB7XG4gICAgICAgICAgICBhcmcgPSBhcmcuc2xpY2Uob2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgICBwdHIgPSByZWFsbG9jKHB0ciwgbGVuLCBsZW4gPSBvZmZzZXQgKyBhcmcubGVuZ3RoICogMywgMSkgPj4+IDA7XG4gICAgICAgIGNvbnN0IHZpZXcgPSBnZXRVaW50OEFycmF5TWVtb3J5MCgpLnN1YmFycmF5KHB0ciArIG9mZnNldCwgcHRyICsgbGVuKTtcbiAgICAgICAgY29uc3QgcmV0ID0gZW5jb2RlU3RyaW5nKGFyZywgdmlldyk7XG5cbiAgICAgICAgb2Zmc2V0ICs9IHJldC53cml0dGVuO1xuICAgICAgICBwdHIgPSByZWFsbG9jKHB0ciwgbGVuLCBvZmZzZXQsIDEpID4+PiAwO1xuICAgIH1cblxuICAgIFdBU01fVkVDVE9SX0xFTiA9IG9mZnNldDtcbiAgICByZXR1cm4gcHRyO1xufVxuXG5sZXQgY2FjaGVkVWludDMyQXJyYXlNZW1vcnkwID0gbnVsbDtcblxuZnVuY3Rpb24gZ2V0VWludDMyQXJyYXlNZW1vcnkwKCkge1xuICAgIGlmIChjYWNoZWRVaW50MzJBcnJheU1lbW9yeTAgPT09IG51bGwgfHwgY2FjaGVkVWludDMyQXJyYXlNZW1vcnkwLmJ5dGVMZW5ndGggPT09IDApIHtcbiAgICAgICAgY2FjaGVkVWludDMyQXJyYXlNZW1vcnkwID0gbmV3IFVpbnQzMkFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWRVaW50MzJBcnJheU1lbW9yeTA7XG59XG5cbmZ1bmN0aW9uIGdldEFycmF5VTMyRnJvbVdhc20wKHB0ciwgbGVuKSB7XG4gICAgcHRyID0gcHRyID4+PiAwO1xuICAgIHJldHVybiBnZXRVaW50MzJBcnJheU1lbW9yeTAoKS5zdWJhcnJheShwdHIgLyA0LCBwdHIgLyA0ICsgbGVuKTtcbn1cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlcXVlbmNlXG4gKiBAcGFyYW0ge3N0cmluZ30gcXVlcnlcbiAqIEByZXR1cm5zIHtVaW50MzJBcnJheX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaChzZXF1ZW5jZSwgcXVlcnkpIHtcbiAgICBjb25zdCBwdHIwID0gcGFzc1N0cmluZ1RvV2FzbTAoc2VxdWVuY2UsIHdhc20uX193YmluZGdlbl9tYWxsb2MsIHdhc20uX193YmluZGdlbl9yZWFsbG9jKTtcbiAgICBjb25zdCBsZW4wID0gV0FTTV9WRUNUT1JfTEVOO1xuICAgIGNvbnN0IHB0cjEgPSBwYXNzU3RyaW5nVG9XYXNtMChxdWVyeSwgd2FzbS5fX3diaW5kZ2VuX21hbGxvYywgd2FzbS5fX3diaW5kZ2VuX3JlYWxsb2MpO1xuICAgIGNvbnN0IGxlbjEgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgY29uc3QgcmV0ID0gd2FzbS5zZWFyY2gocHRyMCwgbGVuMCwgcHRyMSwgbGVuMSk7XG4gICAgdmFyIHYzID0gZ2V0QXJyYXlVMzJGcm9tV2FzbTAocmV0WzBdLCByZXRbMV0pLnNsaWNlKCk7XG4gICAgd2FzbS5fX3diaW5kZ2VuX2ZyZWUocmV0WzBdLCByZXRbMV0gKiA0LCA0KTtcbiAgICByZXR1cm4gdjM7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlcXVlbmNlXG4gKiBAcGFyYW0ge251bWJlcn0gZnJhbWVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGUoc2VxdWVuY2UsIGZyYW1lKSB7XG4gICAgbGV0IGRlZmVycmVkMl8wO1xuICAgIGxldCBkZWZlcnJlZDJfMTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBwdHIwID0gcGFzc1N0cmluZ1RvV2FzbTAoc2VxdWVuY2UsIHdhc20uX193YmluZGdlbl9tYWxsb2MsIHdhc20uX193YmluZGdlbl9yZWFsbG9jKTtcbiAgICAgICAgY29uc3QgbGVuMCA9IFdBU01fVkVDVE9SX0xFTjtcbiAgICAgICAgY29uc3QgcmV0ID0gd2FzbS50cmFuc2xhdGUocHRyMCwgbGVuMCwgZnJhbWUpO1xuICAgICAgICBkZWZlcnJlZDJfMCA9IHJldFswXTtcbiAgICAgICAgZGVmZXJyZWQyXzEgPSByZXRbMV07XG4gICAgICAgIHJldHVybiBnZXRTdHJpbmdGcm9tV2FzbTAocmV0WzBdLCByZXRbMV0pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICAgIHdhc20uX193YmluZGdlbl9mcmVlKGRlZmVycmVkMl8wLCBkZWZlcnJlZDJfMSwgMSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0YWtlRnJvbUV4dGVybnJlZlRhYmxlMChpZHgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHdhc20uX193YmluZGdlbl9leHBvcnRfMC5nZXQoaWR4KTtcbiAgICB3YXNtLl9fZXh0ZXJucmVmX3RhYmxlX2RlYWxsb2MoaWR4KTtcbiAgICByZXR1cm4gdmFsdWU7XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhXG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VfZmFzdGEoZGF0YSkge1xuICAgIGNvbnN0IHB0cjAgPSBwYXNzU3RyaW5nVG9XYXNtMChkYXRhLCB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jLCB3YXNtLl9fd2JpbmRnZW5fcmVhbGxvYyk7XG4gICAgY29uc3QgbGVuMCA9IFdBU01fVkVDVE9SX0xFTjtcbiAgICBjb25zdCByZXQgPSB3YXNtLnBhcnNlX2Zhc3RhKHB0cjAsIGxlbjApO1xuICAgIGlmIChyZXRbMl0pIHtcbiAgICAgICAgdGhyb3cgdGFrZUZyb21FeHRlcm5yZWZUYWJsZTAocmV0WzFdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRha2VGcm9tRXh0ZXJucmVmVGFibGUwKHJldFswXSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlcXVlbmNlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmV2ZXJzZV9jb21wbGVtZW50KHNlcXVlbmNlKSB7XG4gICAgbGV0IGRlZmVycmVkMl8wO1xuICAgIGxldCBkZWZlcnJlZDJfMTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBwdHIwID0gcGFzc1N0cmluZ1RvV2FzbTAoc2VxdWVuY2UsIHdhc20uX193YmluZGdlbl9tYWxsb2MsIHdhc20uX193YmluZGdlbl9yZWFsbG9jKTtcbiAgICAgICAgY29uc3QgbGVuMCA9IFdBU01fVkVDVE9SX0xFTjtcbiAgICAgICAgY29uc3QgcmV0ID0gd2FzbS5yZXZlcnNlX2NvbXBsZW1lbnQocHRyMCwgbGVuMCk7XG4gICAgICAgIGRlZmVycmVkMl8wID0gcmV0WzBdO1xuICAgICAgICBkZWZlcnJlZDJfMSA9IHJldFsxXTtcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZ0Zyb21XYXNtMChyZXRbMF0sIHJldFsxXSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgd2FzbS5fX3diaW5kZ2VuX2ZyZWUoZGVmZXJyZWQyXzAsIGRlZmVycmVkMl8xLCAxKTtcbiAgICB9XG59XG5cbi8qKlxuICogQGVudW0gezAgfCAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDkgfCAxMCB8IDExIHwgMTIgfCAxMyB8IDE0IHwgMTUgfCAxNiB8IDE3IHwgMTggfCAxOSB8IDIwIHwgMjF9XG4gKi9cbmV4cG9ydCBjb25zdCBBbWlub0FjaWQgPSBPYmplY3QuZnJlZXplKHtcbiAgICBBbGE6IDAsIFwiMFwiOiBcIkFsYVwiLFxuICAgIEFyZzogMSwgXCIxXCI6IFwiQXJnXCIsXG4gICAgQXNuOiAyLCBcIjJcIjogXCJBc25cIixcbiAgICBBc3A6IDMsIFwiM1wiOiBcIkFzcFwiLFxuICAgIEN5czogNCwgXCI0XCI6IFwiQ3lzXCIsXG4gICAgR2xuOiA1LCBcIjVcIjogXCJHbG5cIixcbiAgICBHbHU6IDYsIFwiNlwiOiBcIkdsdVwiLFxuICAgIEdseTogNywgXCI3XCI6IFwiR2x5XCIsXG4gICAgSGlzOiA4LCBcIjhcIjogXCJIaXNcIixcbiAgICBJbGU6IDksIFwiOVwiOiBcIklsZVwiLFxuICAgIExldTogMTAsIFwiMTBcIjogXCJMZXVcIixcbiAgICBMeXM6IDExLCBcIjExXCI6IFwiTHlzXCIsXG4gICAgTWV0OiAxMiwgXCIxMlwiOiBcIk1ldFwiLFxuICAgIFBoZTogMTMsIFwiMTNcIjogXCJQaGVcIixcbiAgICBQcm86IDE0LCBcIjE0XCI6IFwiUHJvXCIsXG4gICAgU2VyOiAxNSwgXCIxNVwiOiBcIlNlclwiLFxuICAgIFRocjogMTYsIFwiMTZcIjogXCJUaHJcIixcbiAgICBUcnA6IDE3LCBcIjE3XCI6IFwiVHJwXCIsXG4gICAgVHlyOiAxOCwgXCIxOFwiOiBcIlR5clwiLFxuICAgIFZhbDogMTksIFwiMTlcIjogXCJWYWxcIixcbiAgICBTdG9wOiAyMCwgXCIyMFwiOiBcIlN0b3BcIixcbiAgICBVbmtub3duOiAyMSwgXCIyMVwiOiBcIlVua25vd25cIixcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbmV3XzQwNWUyMmYzOTA1NzZjZTIoKSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IE9iamVjdCgpO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbmV3Xzc4ZmViMTA4YjY0NzI3MTMoKSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IEFycmF5KCk7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19zZXRfMzc4MzcwMjNmM2Q3NDBlOChhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgYXJnMFthcmcxID4+PiAwXSA9IGFyZzI7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfc2V0XzNmZGEzYmFjMDczOTNkZTQoYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIGFyZzBbYXJnMV0gPSBhcmcyO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5faW5pdF9leHRlcm5yZWZfdGFibGUoKSB7XG4gICAgY29uc3QgdGFibGUgPSB3YXNtLl9fd2JpbmRnZW5fZXhwb3J0XzA7XG4gICAgY29uc3Qgb2Zmc2V0ID0gdGFibGUuZ3Jvdyg0KTtcbiAgICB0YWJsZS5zZXQoMCwgdW5kZWZpbmVkKTtcbiAgICB0YWJsZS5zZXQob2Zmc2V0ICsgMCwgdW5kZWZpbmVkKTtcbiAgICB0YWJsZS5zZXQob2Zmc2V0ICsgMSwgbnVsbCk7XG4gICAgdGFibGUuc2V0KG9mZnNldCArIDIsIHRydWUpO1xuICAgIHRhYmxlLnNldChvZmZzZXQgKyAzLCBmYWxzZSk7XG4gICAgO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fc3RyaW5nX25ldyhhcmcwLCBhcmcxKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl90aHJvdyhhcmcwLCBhcmcxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGdldFN0cmluZ0Zyb21XYXNtMChhcmcwLCBhcmcxKSk7XG59O1xuXG4iLCJleHBvcnQgY2xhc3MgQXBwU3RhdGVNYW5hZ2VyIHtcbiAgICBzdGF0aWMgU1RBVEVfS0VZID0gJ3NlcWVkaXQtYXBwLXN0YXRlJztcbiAgICBzdGF0aWMgQVVUSF9TVEFURV9LRVkgPSAnc2VxZWRpdC1hdXRoLWZsb3ctc3RhdGUnO1xuICAgIC8qKlxuICAgICAqIFNhdmUgdGhlIGN1cnJlbnQgYXBwbGljYXRpb24gc3RhdGUgYmVmb3JlIGF1dGhlbnRpY2F0aW9uXG4gICAgICovXG4gICAgc3RhdGljIHNhdmVTdGF0ZUJlZm9yZUF1dGgodXJsUGFyYW1zLCBzZXF1ZW5jZXMsIGlzVHJhbnNsYXRlZCwgY3VycmVudEZyYW1lLCB0cmFuc2xhdGVkU2VxdWVuY2VzLCBtZXRhZGF0YSwgZ3JvdXBJZCwgc2VhcmNoUmVzdWx0cywgc2hvdWxkQ29udGludWVTYXZlUmV2aXNpb24gPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgICAgICAgIHVybFBhcmFtczogT2JqZWN0LmZyb21FbnRyaWVzKHVybFBhcmFtcy5lbnRyaWVzKCkpLFxuICAgICAgICAgICAgc2VxdWVuY2VzOiB7XG4gICAgICAgICAgICAgICAgbmFtZXM6IHNlcXVlbmNlcy5uYW1lcyxcbiAgICAgICAgICAgICAgICBzZXF1ZW5jZXM6IHNlcXVlbmNlcy5zZXF1ZW5jZXMsXG4gICAgICAgICAgICAgICAgaXNUcmFuc2xhdGVkLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRGcmFtZSxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVkU2VxdWVuY2VzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0YWRhdGE6IG1ldGFkYXRhID8ge1xuICAgICAgICAgICAgICAgIGhlYWRlcjogbWV0YWRhdGEuaGVhZGVyLFxuICAgICAgICAgICAgICAgIHJvd3M6IG1ldGFkYXRhLnJvd3MsXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxUZXh0OiBtZXRhZGF0YS5vcmlnaW5hbFRleHQsXG4gICAgICAgICAgICAgICAgZ3JvdXBJZFxuICAgICAgICAgICAgfSA6IG51bGwsXG4gICAgICAgICAgICBzZWFyY2hSZXN1bHRzLFxuICAgICAgICAgICAgc2hvdWxkQ29udGludWVTYXZlUmV2aXNpb25cbiAgICAgICAgfTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5TVEFURV9LRVksIEpTT04uc3RyaW5naWZ5KHN0YXRlKSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuQVVUSF9TVEFURV9LRVksICd0cnVlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBcHBsaWNhdGlvbiBzdGF0ZSBzYXZlZCBiZWZvcmUgYXV0aGVudGljYXRpb24nLCB7IHNob3VsZENvbnRpbnVlU2F2ZVJldmlzaW9uIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB3ZSdyZSByZXR1cm5pbmcgZnJvbSBhbiBhdXRoZW50aWNhdGlvbiBmbG93XG4gICAgICovXG4gICAgc3RhdGljIGlzUmV0dXJuaW5nRnJvbUF1dGgoKSB7XG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLkFVVEhfU1RBVEVfS0VZKSA9PT0gJ3RydWUnO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXN0b3JlIHRoZSBhcHBsaWNhdGlvbiBzdGF0ZSBhZnRlciBhdXRoZW50aWNhdGlvblxuICAgICAqL1xuICAgIHN0YXRpYyByZXN0b3JlU3RhdGVBZnRlckF1dGgoKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlSnNvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuU1RBVEVfS0VZKTtcbiAgICAgICAgaWYgKCFzdGF0ZUpzb24pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IEpTT04ucGFyc2Uoc3RhdGVKc29uKTtcbiAgICAgICAgICAgIC8vIENsZWFuIHVwIHRoZSBzdG9yZWQgc3RhdGVcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuU1RBVEVfS0VZKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuQVVUSF9TVEFURV9LRVkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0FwcGxpY2F0aW9uIHN0YXRlIHJlc3RvcmVkIGFmdGVyIGF1dGhlbnRpY2F0aW9uJyk7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gcmVzdG9yZSBhcHBsaWNhdGlvbiBzdGF0ZTonLCBlcnJvcik7XG4gICAgICAgICAgICB0aGlzLmNsZWFyU3RvcmVkU3RhdGUoKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsZWFyIGFueSBzdG9yZWQgYXBwbGljYXRpb24gc3RhdGVcbiAgICAgKi9cbiAgICBzdGF0aWMgY2xlYXJTdG9yZWRTdGF0ZSgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5TVEFURV9LRVkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLkFVVEhfU1RBVEVfS0VZKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVzdG9yZSBVUkwgcGFyYW1ldGVycyB0byB0aGUgY3VycmVudCBwYWdlXG4gICAgICovXG4gICAgc3RhdGljIHJlc3RvcmVVcmxQYXJhbXModXJsUGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAvLyBDbGVhciBleGlzdGluZyBzZWFyY2ggcGFyYW1ldGVyc1xuICAgICAgICB1cmwuc2VhcmNoID0gJyc7XG4gICAgICAgIC8vIEFkZCB0aGUgcmVzdG9yZWQgcGFyYW1ldGVyc1xuICAgICAgICBPYmplY3QuZW50cmllcyh1cmxQYXJhbXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBVcGRhdGUgdGhlIFVSTCB3aXRob3V0IHRyaWdnZXJpbmcgYSBwYWdlIHJlbG9hZFxuICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCB1cmwudG9TdHJpbmcoKSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEF1dGhNYW5hZ2VyIHtcbiAgICBjb25maWc7XG4gICAgdG9rZW5LZXkgPSAnc2VxZWRpdC1hY2Nlc3MtdG9rZW4nO1xuICAgIHRva2VuRXhwaXJ5S2V5ID0gJ3NlcWVkaXQtdG9rZW4tZXhwaXJ5JztcbiAgICByZWZyZXNoVG9rZW5LZXkgPSAnc2VxZWRpdC1yZWZyZXNoLXRva2VuJztcbiAgICBjb25maWdLZXkgPSAnc2VxZWRpdC1hdXRoLWNvbmZpZyc7IC8vIEFkZCBjb25maWcga2V5XG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICAvLyBTYXZlIGNvbmZpZyB0byBsb2NhbFN0b3JhZ2UgZm9yIGxhdGVyIHJldHJpZXZhbFxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmNvbmZpZ0tleSwgSlNPTi5zdHJpbmdpZnkoY29uZmlnKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgc3RvcmVkIGFjY2VzcyB0b2tlbiBpZiBpdCBleGlzdHMgYW5kIGlzIG5vdCBleHBpcmVkXG4gICAgICovXG4gICAgZ2V0U3RvcmVkVG9rZW4oKSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy50b2tlbktleSk7XG4gICAgICAgIGNvbnN0IGV4cGlyeSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudG9rZW5FeHBpcnlLZXkpO1xuICAgICAgICBpZiAoIXRva2VuIHx8ICFleHBpcnkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIGlmIHRva2VuIGlzIGV4cGlyZWQgKHdpdGggNSBtaW51dGUgYnVmZmVyKVxuICAgICAgICBjb25zdCBleHBpcnlUaW1lID0gcGFyc2VJbnQoZXhwaXJ5LCAxMCk7XG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGNvbnN0IGJ1ZmZlclRpbWUgPSA1ICogNjAgKiAxMDAwOyAvLyA1IG1pbnV0ZXMgaW4gbWlsbGlzZWNvbmRzXG4gICAgICAgIGlmIChub3cgPj0gKGV4cGlyeVRpbWUgLSBidWZmZXJUaW1lKSkge1xuICAgICAgICAgICAgLy8gVG9rZW4gaXMgZXhwaXJlZCBvciBhYm91dCB0byBleHBpcmUsIHRyeSB0byByZWZyZXNoXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0b3JlIHRva2VuIGluZm9ybWF0aW9uIGluIGxvY2FsU3RvcmFnZVxuICAgICAqL1xuICAgIHN0b3JlVG9rZW5zKHRva2VuUmVzcG9uc2UpIHtcbiAgICAgICAgY29uc3QgZXhwaXJ5VGltZSA9IERhdGUubm93KCkgKyAodG9rZW5SZXNwb25zZS5leHBpcmVzX2luICogMTAwMCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMudG9rZW5LZXksIHRva2VuUmVzcG9uc2UuYWNjZXNzX3Rva2VuKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5yZWZyZXNoVG9rZW5LZXksIHRva2VuUmVzcG9uc2UucmVmcmVzaF90b2tlbik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMudG9rZW5FeHBpcnlLZXksIGV4cGlyeVRpbWUudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENsZWFyIHN0b3JlZCBhdXRoZW50aWNhdGlvbiBkYXRhXG4gICAgICovXG4gICAgY2xlYXJTdG9yZWRBdXRoKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLnRva2VuS2V5KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5yZWZyZXNoVG9rZW5LZXkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLnRva2VuRXhwaXJ5S2V5KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5jb25maWdLZXkpOyAvLyBBbHNvIGNsZWFyIHN0b3JlZCBjb25maWdcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3NlcWVkaXQtYXV0aC1zdGF0ZScpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc2VxZWRpdC1hdXRoLWNvZGUtdmVyaWZpZXInKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgYSByYW5kb20gc3RyaW5nIGZvciBQS0NFXG4gICAgICovXG4gICAgZ2VuZXJhdGVSYW5kb21TdHJpbmcobGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGNoYXJzZXQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODktLl9+JztcbiAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gY2hhcnNldC5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnNldC5sZW5ndGgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSBTSEEyNTYgaGFzaCBmb3IgUEtDRSBjb2RlIGNoYWxsZW5nZVxuICAgICAqL1xuICAgIGFzeW5jIHNoYTI1NihwbGFpbikge1xuICAgICAgICBjb25zdCBlbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBlbmNvZGVyLmVuY29kZShwbGFpbik7XG4gICAgICAgIGNvbnN0IGhhc2ggPSBhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdCgnU0hBLTI1NicsIGRhdGEpO1xuICAgICAgICByZXR1cm4gYnRvYShTdHJpbmcuZnJvbUNoYXJDb2RlKC4uLm5ldyBVaW50OEFycmF5KGhhc2gpKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXCsvZywgJy0nKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcLy9nLCAnXycpXG4gICAgICAgICAgICAucmVwbGFjZSgvPS9nLCAnJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgcmVkaXJlY3QgVVJJIGZvciB0aGlzIGFwcGxpY2F0aW9uXG4gICAgICovXG4gICAgZ2V0UmVkaXJlY3RVcmkoKSB7XG4gICAgICAgIC8vIFVzZSBqdXN0IHRoZSBvcmlnaW4gKyBwYXRobmFtZSBmb3IgY29uc2lzdGVuY3kgd2l0aCBLZXljbG9hayBleHBlY3RhdGlvbnNcbiAgICAgICAgLy8gU29tZSBLZXljbG9hayBzZXR1cHMgYXJlIHZlcnkgc3RyaWN0IGFib3V0IHRoaXNcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEluaXRpYXRlIE9BdXRoMiBmbG93IHdpdGggUEtDRVxuICAgICAqIE5vdGU6IEFwcGxpY2F0aW9uIHN0YXRlIHNob3VsZCBiZSBzYXZlZCBiZWZvcmUgY2FsbGluZyB0aGlzIG1ldGhvZFxuICAgICAqL1xuICAgIGFzeW5jIGluaXRpYXRlQXV0aCgpIHtcbiAgICAgICAgLy8gR2VuZXJhdGUgUEtDRSBwYXJhbWV0ZXJzXG4gICAgICAgIGNvbnN0IGNvZGVWZXJpZmllciA9IHRoaXMuZ2VuZXJhdGVSYW5kb21TdHJpbmcoMTI4KTtcbiAgICAgICAgY29uc3QgY29kZUNoYWxsZW5nZSA9IGF3YWl0IHRoaXMuc2hhMjU2KGNvZGVWZXJpZmllcik7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZW5lcmF0ZVJhbmRvbVN0cmluZygzMik7XG4gICAgICAgIC8vIFN0b3JlIFBLQ0UgcGFyYW1ldGVyc1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VxZWRpdC1hdXRoLWNvZGUtdmVyaWZpZXInLCBjb2RlVmVyaWZpZXIpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VxZWRpdC1hdXRoLXN0YXRlJywgc3RhdGUpO1xuICAgICAgICAvLyBHZXQgcmVkaXJlY3QgVVJJXG4gICAgICAgIGNvbnN0IHJlZGlyZWN0VXJpID0gdGhpcy5nZXRSZWRpcmVjdFVyaSgpO1xuICAgICAgICAvLyBCdWlsZCBhdXRob3JpemF0aW9uIFVSTFxuICAgICAgICBjb25zdCBhdXRoVXJsID0gbmV3IFVSTChgJHt0aGlzLmNvbmZpZy5rZXljbG9ha1VybH0vcmVhbG1zLyR7dGhpcy5jb25maWcucmVhbG19L3Byb3RvY29sL29wZW5pZC1jb25uZWN0L2F1dGhgKTtcbiAgICAgICAgYXV0aFVybC5zZWFyY2hQYXJhbXMuc2V0KCdjbGllbnRfaWQnLCB0aGlzLmNvbmZpZy5jbGllbnRJZCk7XG4gICAgICAgIGF1dGhVcmwuc2VhcmNoUGFyYW1zLnNldCgncmVkaXJlY3RfdXJpJywgcmVkaXJlY3RVcmkpO1xuICAgICAgICBhdXRoVXJsLnNlYXJjaFBhcmFtcy5zZXQoJ3Jlc3BvbnNlX3R5cGUnLCAnY29kZScpO1xuICAgICAgICBhdXRoVXJsLnNlYXJjaFBhcmFtcy5zZXQoJ3Njb3BlJywgJ29wZW5pZCBwcm9maWxlJyk7XG4gICAgICAgIGF1dGhVcmwuc2VhcmNoUGFyYW1zLnNldCgnc3RhdGUnLCBzdGF0ZSk7XG4gICAgICAgIGF1dGhVcmwuc2VhcmNoUGFyYW1zLnNldCgnY29kZV9jaGFsbGVuZ2UnLCBjb2RlQ2hhbGxlbmdlKTtcbiAgICAgICAgYXV0aFVybC5zZWFyY2hQYXJhbXMuc2V0KCdjb2RlX2NoYWxsZW5nZV9tZXRob2QnLCAnUzI1NicpO1xuICAgICAgICBjb25zb2xlLmxvZygnSW5pdGlhdGluZyBPQXV0aDIgZmxvdyB3aXRoIHJlZGlyZWN0IFVSSTonLCByZWRpcmVjdFVyaSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdGdWxsIGF1dGggVVJMOicsIGF1dGhVcmwudG9TdHJpbmcoKSk7XG4gICAgICAgIC8vIFJlZGlyZWN0IHRvIEtleWNsb2FrXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXV0aFVybC50b1N0cmluZygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGhlIE9BdXRoMiBjYWxsYmFja1xuICAgICAqL1xuICAgIGFzeW5jIGhhbmRsZUNhbGxiYWNrKCkge1xuICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICBjb25zdCBjb2RlID0gdXJsUGFyYW1zLmdldCgnY29kZScpO1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHVybFBhcmFtcy5nZXQoJ3N0YXRlJyk7XG4gICAgICAgIGNvbnN0IGVycm9yID0gdXJsUGFyYW1zLmdldCgnZXJyb3InKTtcbiAgICAgICAgY29uc29sZS5sb2coJ09BdXRoIGNhbGxiYWNrIC0gVVJMIHBhcmFtczonLCB3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ09BdXRoIGNhbGxiYWNrIC0gY29kZTonLCBjb2RlID8gJ3ByZXNlbnQnIDogJ21pc3NpbmcnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ09BdXRoIGNhbGxiYWNrIC0gc3RhdGU6Jywgc3RhdGUgPyAncHJlc2VudCcgOiAnbWlzc2luZycpO1xuICAgICAgICBjb25zb2xlLmxvZygnT0F1dGggY2FsbGJhY2sgLSBlcnJvcjonLCBlcnJvcik7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignT0F1dGgyIGVycm9yOicsIGVycm9yLCB1cmxQYXJhbXMuZ2V0KCdlcnJvcl9kZXNjcmlwdGlvbicpKTtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yZWRBdXRoKCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjb2RlIHx8ICFzdGF0ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ09BdXRoIGNhbGxiYWNrIC0gTm8gY2FsbGJhY2sgcGFyYW1ldGVycyBmb3VuZCcpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBObyBjYWxsYmFjayBwYXJhbWV0ZXJzXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ09BdXRoIGNhbGxiYWNrIC0gUHJvY2Vzc2luZyBhdXRob3JpemF0aW9uIGNvZGUuLi4nKTtcbiAgICAgICAgLy8gVmVyaWZ5IHN0YXRlIHBhcmFtZXRlclxuICAgICAgICBjb25zdCBzdG9yZWRTdGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXFlZGl0LWF1dGgtc3RhdGUnKTtcbiAgICAgICAgaWYgKHN0YXRlICE9PSBzdG9yZWRTdGF0ZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignU3RhdGUgcGFyYW1ldGVyIG1pc21hdGNoJyk7XG4gICAgICAgICAgICB0aGlzLmNsZWFyU3RvcmVkQXV0aCgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIEdldCBzdG9yZWQgY29kZSB2ZXJpZmllclxuICAgICAgICBjb25zdCBjb2RlVmVyaWZpZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VxZWRpdC1hdXRoLWNvZGUtdmVyaWZpZXInKTtcbiAgICAgICAgaWYgKCFjb2RlVmVyaWZpZXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvZGUgdmVyaWZpZXIgbm90IGZvdW5kJyk7XG4gICAgICAgICAgICB0aGlzLmNsZWFyU3RvcmVkQXV0aCgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBFeGNoYW5nZSBjb2RlIGZvciB0b2tlbnNcbiAgICAgICAgICAgIGNvbnN0IHRva2VuUmVzcG9uc2UgPSBhd2FpdCB0aGlzLmV4Y2hhbmdlQ29kZUZvclRva2Vucyhjb2RlLCBjb2RlVmVyaWZpZXIpO1xuICAgICAgICAgICAgdGhpcy5zdG9yZVRva2Vucyh0b2tlblJlc3BvbnNlKTtcbiAgICAgICAgICAgIC8vIENsZWFuIHVwIFVSTCBwYXJhbWV0ZXJzXG4gICAgICAgICAgICBjb25zdCBjbGVhblVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAgICAgY2xlYW5Vcmwuc2VhcmNoID0gJyc7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCBjbGVhblVybC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVG9rZW4gZXhjaGFuZ2UgZmFpbGVkOicsIGVycm9yKTtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yZWRBdXRoKCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogRXhjaGFuZ2UgYXV0aG9yaXphdGlvbiBjb2RlIGZvciB0b2tlbnNcbiAgICAgKi9cbiAgICBhc3luYyBleGNoYW5nZUNvZGVGb3JUb2tlbnMoY29kZSwgY29kZVZlcmlmaWVyKSB7XG4gICAgICAgIGNvbnN0IHRva2VuVXJsID0gYCR7dGhpcy5jb25maWcua2V5Y2xvYWtVcmx9L3JlYWxtcy8ke3RoaXMuY29uZmlnLnJlYWxtfS9wcm90b2NvbC9vcGVuaWQtY29ubmVjdC90b2tlbmA7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgICAgICAgIGdyYW50X3R5cGU6ICdhdXRob3JpemF0aW9uX2NvZGUnLFxuICAgICAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNvbmZpZy5jbGllbnRJZCxcbiAgICAgICAgICAgIGNvZGU6IGNvZGUsXG4gICAgICAgICAgICByZWRpcmVjdF91cmk6IHRoaXMuZ2V0UmVkaXJlY3RVcmkoKSxcbiAgICAgICAgICAgIGNvZGVfdmVyaWZpZXI6IGNvZGVWZXJpZmllcixcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godG9rZW5VcmwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBib2R5LFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUb2tlbiBleGNoYW5nZSBmYWlsZWQ6ICR7cmVzcG9uc2Uuc3RhdHVzfSAke2Vycm9yVGV4dH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUcnkgdG8gcmVmcmVzaCB0aGUgYWNjZXNzIHRva2VuIHVzaW5nIHRoZSByZWZyZXNoIHRva2VuXG4gICAgICovXG4gICAgYXN5bmMgcmVmcmVzaFRva2VuKCkge1xuICAgICAgICBjb25zdCByZWZyZXNoVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnJlZnJlc2hUb2tlbktleSk7XG4gICAgICAgIGlmICghcmVmcmVzaFRva2VuKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdG9rZW5VcmwgPSBgJHt0aGlzLmNvbmZpZy5rZXljbG9ha1VybH0vcmVhbG1zLyR7dGhpcy5jb25maWcucmVhbG19L3Byb3RvY29sL29wZW5pZC1jb25uZWN0L3Rva2VuYDtcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgICAgICAgICAgICBncmFudF90eXBlOiAncmVmcmVzaF90b2tlbicsXG4gICAgICAgICAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNvbmZpZy5jbGllbnRJZCxcbiAgICAgICAgICAgICAgICByZWZyZXNoX3Rva2VuOiByZWZyZXNoVG9rZW4sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godG9rZW5VcmwsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IGJvZHksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAvLyBSZWZyZXNoIGZhaWxlZCwgY2xlYXIgc3RvcmVkIHRva2Vuc1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yZWRBdXRoKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0b2tlblJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgdGhpcy5zdG9yZVRva2Vucyh0b2tlblJlc3BvbnNlKTtcbiAgICAgICAgICAgIHJldHVybiB0b2tlblJlc3BvbnNlLmFjY2Vzc190b2tlbjtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1Rva2VuIHJlZnJlc2ggZmFpbGVkOicsIGVycm9yKTtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTdG9yZWRBdXRoKCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYSB2YWxpZCBhY2Nlc3MgdG9rZW4sIHJlZnJlc2hpbmcgaWYgbmVjZXNzYXJ5XG4gICAgICovXG4gICAgYXN5bmMgZ2V0VmFsaWRUb2tlbigpIHtcbiAgICAgICAgLy8gVHJ5IHRvIGdldCBzdG9yZWQgdG9rZW5cbiAgICAgICAgbGV0IHRva2VuID0gdGhpcy5nZXRTdG9yZWRUb2tlbigpO1xuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgfVxuICAgICAgICAvLyBUcnkgdG8gcmVmcmVzaCB0b2tlblxuICAgICAgICB0b2tlbiA9IGF3YWl0IHRoaXMucmVmcmVzaFRva2VuKCk7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vIHZhbGlkIHRva2VuIGF2YWlsYWJsZVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdXNlciBpcyBjdXJyZW50bHkgYXV0aGVudGljYXRlZFxuICAgICAqL1xuICAgIGFzeW5jIGlzQXV0aGVudGljYXRlZCgpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCB0aGlzLmdldFZhbGlkVG9rZW4oKTtcbiAgICAgICAgcmV0dXJuIHRva2VuICE9PSBudWxsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBMb2dvdXQgdXNlciBieSBjbGVhcmluZyB0b2tlbnMgYW5kIG9wdGlvbmFsbHkgcmVkaXJlY3QgdG8gS2V5Y2xvYWsgbG9nb3V0XG4gICAgICovXG4gICAgYXN5bmMgbG9nb3V0KHJlZGlyZWN0VG9LZXljbG9hayA9IHRydWUpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmdldFN0b3JlZFRva2VuKCk7XG4gICAgICAgIHRoaXMuY2xlYXJTdG9yZWRBdXRoKCk7XG4gICAgICAgIGlmIChyZWRpcmVjdFRvS2V5Y2xvYWsgJiYgdG9rZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGxvZ291dFVybCA9IG5ldyBVUkwoYCR7dGhpcy5jb25maWcua2V5Y2xvYWtVcmx9L3JlYWxtcy8ke3RoaXMuY29uZmlnLnJlYWxtfS9wcm90b2NvbC9vcGVuaWQtY29ubmVjdC9sb2dvdXRgKTtcbiAgICAgICAgICAgIGxvZ291dFVybC5zZWFyY2hQYXJhbXMuc2V0KCdwb3N0X2xvZ291dF9yZWRpcmVjdF91cmknLCB0aGlzLmdldFJlZGlyZWN0VXJpKCkpO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBsb2dvdXRVcmwudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8qKlxuICogQ3JlYXRlIGFuIEF1dGhNYW5hZ2VyIGZyb20gc3RvcmVkIGNvbmZpZ3VyYXRpb24gaW4gbG9jYWxTdG9yYWdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBdXRoTWFuYWdlckZyb21TdG9yYWdlKCkge1xuICAgIGNvbnN0IGNvbmZpZ0pzb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VxZWRpdC1hdXRoLWNvbmZpZycpO1xuICAgIGlmICghY29uZmlnSnNvbikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gSlNPTi5wYXJzZShjb25maWdKc29uKTtcbiAgICAgICAgcmV0dXJuIG5ldyBBdXRoTWFuYWdlcihjb25maWcpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcGFyc2luZyBzdG9yZWQgYXV0aCBjb25maWc6JywgZXJyb3IpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG4vKipcbiAqIFBhcnNlIGF1dGhlbnRpY2F0aW9uIGNvbmZpZ3VyYXRpb24gZnJvbSBVUkwgcGFyYW1ldGVyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBdXRoQ29uZmlnKCkge1xuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgY29uc3QgYXV0aEVuZHBvaW50ID0gdXJsUGFyYW1zLmdldCgnYXV0aC1lbmRwb2ludCcpO1xuICAgIGNvbnN0IHJlYWxtID0gdXJsUGFyYW1zLmdldCgnYXV0aC1yZWFsbScpIHx8ICdtYXN0ZXInO1xuICAgIGNvbnN0IGNsaWVudElkID0gdXJsUGFyYW1zLmdldCgnYXV0aC1jbGllbnQtaWQnKSB8fCAnc2VxZWRpdCc7XG4gICAgaWYgKCFhdXRoRW5kcG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGtleWNsb2FrVXJsOiBhdXRoRW5kcG9pbnQsXG4gICAgICAgIHJlYWxtOiByZWFsbSxcbiAgICAgICAgY2xpZW50SWQ6IGNsaWVudElkLFxuICAgIH07XG59XG4iLCJpbXBvcnQgeyBTZXF1ZW5jZVZpZXdlciB9IGZyb20gJy4vc2VxdWVuY2Utdmlld2VyJztcbmltcG9ydCB7IHBhcnNlX2Zhc3RhLCByZXZlcnNlX2NvbXBsZW1lbnQsIHRyYW5zbGF0ZSwgc2VhcmNoIH0gZnJvbSAnLi4vcGtnL3NlcWVkaXRfd2FzbSc7XG5pbXBvcnQgeyBBdXRoTWFuYWdlciwgcGFyc2VBdXRoQ29uZmlnLCBjcmVhdGVBdXRoTWFuYWdlckZyb21TdG9yYWdlIH0gZnJvbSAnLi9hdXRoJztcbmltcG9ydCB7IEFwcFN0YXRlTWFuYWdlciB9IGZyb20gJy4vYXBwLXN0YXRlJztcbmFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XG4gICAgY29uc3Qgc2VxdWVuY2VDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VxdWVuY2UtY2FudmFzJyk7XG4gICAgY29uc3QgbmFtZXNDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZXMtY2FudmFzJyk7XG4gICAgY29uc3QgcnVsZXJDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncnVsZXItY2FudmFzJyk7XG4gICAgY29uc3Qgdmlld2VyID0gbmV3IFNlcXVlbmNlVmlld2VyKHNlcXVlbmNlQ2FudmFzLCBuYW1lc0NhbnZhcywgcnVsZXJDYW52YXMpO1xuICAgIGNvbnN0IHVybElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VybC1pbnB1dCcpO1xuICAgIGNvbnN0IGxvYWRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZC1idXR0b24nKTtcbiAgICBjb25zdCByZXZDb21wQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JldmNvbXAtYnV0dG9uJyk7XG4gICAgY29uc3QgdHJhbnNsYXRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zbGF0ZS1idXR0b24nKTtcbiAgICBjb25zdCBmcmFtZUJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnJhbWUtYnV0dG9ucycpO1xuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1pbnB1dCcpO1xuICAgIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYnV0dG9uJyk7XG4gICAgY29uc3Qgc2F2ZVJldmlzaW9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmUtcmV2aXNpb24tYnV0dG9uJyk7XG4gICAgY29uc3QgbG9nb3V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ291dC1idXR0b24nKTtcbiAgICBsZXQgaXNUcmFuc2xhdGVkID0gZmFsc2U7XG4gICAgbGV0IGN1cnJlbnRGcmFtZSA9IDE7XG4gICAgbGV0IG1ldGFkYXRhID0gbnVsbDtcbiAgICBsZXQgZ3JvdXBJZCA9IG51bGw7XG4gICAgbGV0IGF1dGhNYW5hZ2VyID0gbnVsbDtcbiAgICBsZXQgc2VhcmNoUmVzdWx0cztcbiAgICBsZXQgc3RhdGVXYXNSZXN0b3JlZCA9IGZhbHNlO1xuICAgIGxldCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgIGxldCBmYXN0YVVybCA9IHVybFBhcmFtcy5nZXQoJ2lucHV0LWZhc3RhJyk7XG4gICAgbGV0IG1ldGFkYXRhVXJsID0gdXJsUGFyYW1zLmdldCgnbWV0YWRhdGEtdXJsJyk7XG4gICAgbGV0IG9yZ2FuaXNtID0gdXJsUGFyYW1zLmdldCgnb3JnYW5pc20nKTtcbiAgICAvLyBEZWJ1ZzogTG9nIHRoZSBjdXJyZW50IFVSTCB0byBzZWUgd2hhdCB3ZSdyZSBnZXR0aW5nIGJhY2sgZnJvbSBLZXljbG9ha1xuICAgIGNvbnNvbGUubG9nKCdQYWdlIGxvYWRlZCB3aXRoIFVSTDonLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgY29uc29sZS5sb2coJ1VSTCBzZWFyY2ggcGFyYW1zOicsIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgIC8vIEluaXRpYWxpemUgYXV0aGVudGljYXRpb24gZmlyc3RcbiAgICBjb25zdCBhdXRoQ29uZmlnID0gcGFyc2VBdXRoQ29uZmlnKCk7XG4gICAgaWYgKGF1dGhDb25maWcpIHtcbiAgICAgICAgYXV0aE1hbmFnZXIgPSBuZXcgQXV0aE1hbmFnZXIoYXV0aENvbmZpZyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBUcnkgdG8gY3JlYXRlIGZyb20gc3RvcmVkIGNvbmZpZyAoZS5nLiwgZHVyaW5nIE9BdXRoIGNhbGxiYWNrKVxuICAgICAgICBhdXRoTWFuYWdlciA9IGNyZWF0ZUF1dGhNYW5hZ2VyRnJvbVN0b3JhZ2UoKTtcbiAgICB9XG4gICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSBPQXV0aCBjYWxsYmFjayBwYXJhbWV0ZXJzIChjb2RlL3N0YXRlKVxuICAgIGNvbnN0IGN1cnJlbnRVcmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgIGNvbnN0IGhhc09BdXRoQ2FsbGJhY2sgPSBjdXJyZW50VXJsUGFyYW1zLmhhcygnY29kZScpICYmIGN1cnJlbnRVcmxQYXJhbXMuaGFzKCdzdGF0ZScpO1xuICAgIGNvbnNvbGUubG9nKCdPQXV0aCBjYWxsYmFjayBwYXJhbWV0ZXJzIHByZXNlbnQ6JywgaGFzT0F1dGhDYWxsYmFjayk7XG4gICAgY29uc29sZS5sb2coJ0lzIHJldHVybmluZyBmcm9tIGF1dGg6JywgQXBwU3RhdGVNYW5hZ2VyLmlzUmV0dXJuaW5nRnJvbUF1dGgoKSk7XG4gICAgY29uc29sZS5sb2coJ0F1dGhNYW5hZ2VyIGV4aXN0czonLCBhdXRoTWFuYWdlciA/ICdZRVMnIDogJ05PJyk7XG4gICAgLy8gSGFuZGxlIE9BdXRoIGNhbGxiYWNrIEZJUlNUIGlmIHByZXNlbnQsIHJlZ2FyZGxlc3Mgb2Ygc3RhdGUgcmVzdG9yYXRpb24gc3RhdHVzXG4gICAgbGV0IGNhbGxiYWNrSGFuZGxlZCA9IGZhbHNlO1xuICAgIGlmIChhdXRoTWFuYWdlciAmJiBoYXNPQXV0aENhbGxiYWNrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdQcm9jZXNzaW5nIE9BdXRoIGNhbGxiYWNrLi4uJyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjYWxsYmFja0hhbmRsZWQgPSBhd2FpdCBhdXRoTWFuYWdlci5oYW5kbGVDYWxsYmFjaygpO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrSGFuZGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoZW50aWNhdGlvbiBjYWxsYmFjayBoYW5kbGVkIHN1Y2Nlc3NmdWxseScpO1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGF1dGhlbnRpY2F0aW9uIHN0YXR1cyBpbW1lZGlhdGVseSBhZnRlciBjYWxsYmFja1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9IGF3YWl0IGF1dGhNYW5hZ2VyLmlzQXV0aGVudGljYXRlZCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoZW50aWNhdGlvbiBzdGF0dXMgYWZ0ZXIgY2FsbGJhY2s6JywgaXNBdXRoZW50aWNhdGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPQXV0aCBjYWxsYmFjayBwcm9jZXNzaW5nIGZhaWxlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcHJvY2Vzc2luZyBPQXV0aCBjYWxsYmFjazonLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaGFzT0F1dGhDYWxsYmFjayAmJiAhYXV0aE1hbmFnZXIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignT0F1dGggY2FsbGJhY2sgZGV0ZWN0ZWQgYnV0IEF1dGhNYW5hZ2VyIGlzIG5vdCBhdmFpbGFibGUhJyk7XG4gICAgfVxuICAgIC8vIENoZWNrIGlmIHdlJ3JlIHJldHVybmluZyBmcm9tIGF1dGhlbnRpY2F0aW9uIGFuZCByZXN0b3JlIHN0YXRlXG4gICAgLy8gT05MWSBkbyB0aGlzIEFGVEVSIHByb2Nlc3NpbmcgdGhlIE9BdXRoIGNhbGxiYWNrXG4gICAgbGV0IHNob3VsZENvbnRpbnVlU2F2ZSA9IGZhbHNlO1xuICAgIGlmIChBcHBTdGF0ZU1hbmFnZXIuaXNSZXR1cm5pbmdGcm9tQXV0aCgpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXN0b3Jpbmcgc3RhdGUgYWZ0ZXIgYXV0aGVudGljYXRpb24nKTtcbiAgICAgICAgY29uc3Qgc2F2ZWRTdGF0ZSA9IEFwcFN0YXRlTWFuYWdlci5yZXN0b3JlU3RhdGVBZnRlckF1dGgoKTtcbiAgICAgICAgaWYgKHNhdmVkU3RhdGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXN0b3JpbmcgYXBwbGljYXRpb24gc3RhdGUgYWZ0ZXIgYXV0aGVudGljYXRpb24nKTtcbiAgICAgICAgICAgIHN0YXRlV2FzUmVzdG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgLy8gUmVzdG9yZSBVUkwgcGFyYW1ldGVycyBBRlRFUiBoYW5kbGluZyBPQXV0aCBjYWxsYmFja1xuICAgICAgICAgICAgQXBwU3RhdGVNYW5hZ2VyLnJlc3RvcmVVcmxQYXJhbXMoc2F2ZWRTdGF0ZS51cmxQYXJhbXMpO1xuICAgICAgICAgICAgLy8gVXBkYXRlIGxvY2FsIHZhcmlhYmxlcyB3aXRoIHJlc3RvcmVkIHBhcmFtZXRlcnNcbiAgICAgICAgICAgIHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAgICAgICBmYXN0YVVybCA9IHVybFBhcmFtcy5nZXQoJ2lucHV0LWZhc3RhJyk7XG4gICAgICAgICAgICBtZXRhZGF0YVVybCA9IHVybFBhcmFtcy5nZXQoJ21ldGFkYXRhLXVybCcpO1xuICAgICAgICAgICAgb3JnYW5pc20gPSB1cmxQYXJhbXMuZ2V0KCdvcmdhbmlzbScpO1xuICAgICAgICAgICAgLy8gUmVzdG9yZSBhcHBsaWNhdGlvbiBzdGF0ZVxuICAgICAgICAgICAgaXNUcmFuc2xhdGVkID0gc2F2ZWRTdGF0ZS5zZXF1ZW5jZXMuaXNUcmFuc2xhdGVkO1xuICAgICAgICAgICAgY3VycmVudEZyYW1lID0gc2F2ZWRTdGF0ZS5zZXF1ZW5jZXMuY3VycmVudEZyYW1lO1xuICAgICAgICAgICAgbWV0YWRhdGEgPSBzYXZlZFN0YXRlLm1ldGFkYXRhO1xuICAgICAgICAgICAgZ3JvdXBJZCA9IHNhdmVkU3RhdGUubWV0YWRhdGE/Lmdyb3VwSWQgfHwgbnVsbDtcbiAgICAgICAgICAgIHNlYXJjaFJlc3VsdHMgPSBzYXZlZFN0YXRlLnNlYXJjaFJlc3VsdHM7XG4gICAgICAgICAgICAvLyBSZXN0b3JlIHNlcXVlbmNlcyBpbiB0aGUgdmlld2VyXG4gICAgICAgICAgICB2aWV3ZXIuc2V0U2VxdWVuY2VzKHNhdmVkU3RhdGUuc2VxdWVuY2VzLm5hbWVzLCBzYXZlZFN0YXRlLnNlcXVlbmNlcy5zZXF1ZW5jZXMpO1xuICAgICAgICAgICAgLy8gUmVzdG9yZSB0cmFuc2xhdGVkIHN0YXRlIGlmIGFwcGxpY2FibGVcbiAgICAgICAgICAgIGlmIChzYXZlZFN0YXRlLnNlcXVlbmNlcy5pc1RyYW5zbGF0ZWQgJiYgc2F2ZWRTdGF0ZS5zZXF1ZW5jZXMudHJhbnNsYXRlZFNlcXVlbmNlcykge1xuICAgICAgICAgICAgICAgIHZpZXdlci5zZXRUcmFuc2xhdGVkU2VxdWVuY2VzKHNhdmVkU3RhdGUuc2VxdWVuY2VzLnRyYW5zbGF0ZWRTZXF1ZW5jZXMsIHNhdmVkU3RhdGUuc2VxdWVuY2VzLmN1cnJlbnRGcmFtZSk7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ051Y2xlb3RpZGUgTW9kZSc7XG4gICAgICAgICAgICAgICAgZnJhbWVCdXR0b25zLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlc3RvcmUgc2VhcmNoIHJlc3VsdHMgaWYgYXBwbGljYWJsZVxuICAgICAgICAgICAgaWYgKHNhdmVkU3RhdGUuc2VhcmNoUmVzdWx0cykge1xuICAgICAgICAgICAgICAgIHZpZXdlci5zZXRTZWFyY2hSZXN1bHRzKHNhdmVkU3RhdGUuc2VhcmNoUmVzdWx0cy5yZXN1bHRzLCBzYXZlZFN0YXRlLnNlYXJjaFJlc3VsdHMucXVlcnlMZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2Ugc2hvdWxkIGNvbnRpbnVlIHdpdGggc2F2aW5nIHJldmlzaW9uIGFmdGVyIGF1dGhlbnRpY2F0aW9uXG4gICAgICAgICAgICBzaG91bGRDb250aW51ZVNhdmUgPSBzYXZlZFN0YXRlLnNob3VsZENvbnRpbnVlU2F2ZVJldmlzaW9uIHx8IGZhbHNlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Nob3VsZCBjb250aW51ZSBzYXZlIGFmdGVyIGF1dGg6Jywgc2hvdWxkQ29udGludWVTYXZlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBGaW5hbGl6ZSBhdXRoZW50aWNhdGlvbiBzZXR1cFxuICAgIGlmIChhdXRoTWFuYWdlcikge1xuICAgICAgICAvLyBVcGRhdGUgc2F2ZSByZXZpc2lvbiBidXR0b24gYmFzZWQgb24gYXV0aCBzdGF0dXNcbiAgICAgICAgYXdhaXQgdXBkYXRlU2F2ZUJ1dHRvblN0YXRlKCk7XG4gICAgICAgIC8vIElmIHdlIHNob3VsZCBjb250aW51ZSBzYXZpbmcgYW5kIHdlJ3JlIG5vdyBhdXRoZW50aWNhdGVkLCBkbyBpdFxuICAgICAgICBpZiAoc2hvdWxkQ29udGludWVTYXZlKSB7XG4gICAgICAgICAgICBjb25zdCBpc0F1dGggPSBhd2FpdCBhdXRoTWFuYWdlci5pc0F1dGhlbnRpY2F0ZWQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDaGVja2luZyBhdXRoZW50aWNhdGlvbiBzdGF0dXMgYWZ0ZXIgY2FsbGJhY2s6JywgaXNBdXRoKTtcbiAgICAgICAgICAgIGlmIChpc0F1dGgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29udGludWluZyB3aXRoIHNhdmUgcmV2aXNpb24gYWZ0ZXIgc3VjY2Vzc2Z1bCBhdXRoZW50aWNhdGlvbi4uLicpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzYXZlUmV2aXNpb25CdXR0b24uY2xpY2soKTtcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0F1dGhlbnRpY2F0aW9uIGZhaWxlZCwgbm90IGNvbnRpbnVpbmcgd2l0aCBzYXZlIHJldmlzaW9uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIE5vIGF1dGggY29uZmlnLCBkaXNhYmxlIHNhdmUgcmV2aXNpb24gYnV0dG9uXG4gICAgICAgIHNhdmVSZXZpc2lvbkJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHNhdmVSZXZpc2lvbkJ1dHRvbi50ZXh0Q29udGVudCA9ICdTYXZlIFJldmlzaW9uIChObyBBdXRoKSc7XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVNhdmVCdXR0b25TdGF0ZSgpIHtcbiAgICAgICAgaWYgKCFhdXRoTWFuYWdlcilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgaXNBdXRoID0gYXdhaXQgYXV0aE1hbmFnZXIuaXNBdXRoZW50aWNhdGVkKCk7XG4gICAgICAgIGlmIChpc0F1dGgpIHtcbiAgICAgICAgICAgIHNhdmVSZXZpc2lvbkJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgc2F2ZVJldmlzaW9uQnV0dG9uLnRleHRDb250ZW50ID0gJ1NhdmUgYXMgUmV2aXNpb24nO1xuICAgICAgICAgICAgbG9nb3V0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNhdmVSZXZpc2lvbkJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgc2F2ZVJldmlzaW9uQnV0dG9uLnRleHRDb250ZW50ID0gJ0xvZ2luICYgU2F2ZSBSZXZpc2lvbic7XG4gICAgICAgICAgICBsb2dvdXRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkU2VxdWVuY2VzKCkge1xuICAgICAgICBjb25zdCB1cmwgPSB1cmxJbnB1dC52YWx1ZTtcbiAgICAgICAgaWYgKCF1cmwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICAgICAgICBjb25zdCBmYXN0YSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHNlcXVlbmNlc0RhdGEgPSBwYXJzZV9mYXN0YShmYXN0YSk7XG4gICAgICAgICAgICBjb25zdCBuYW1lcyA9IHNlcXVlbmNlc0RhdGEubWFwKHMgPT4gcy5pZCk7XG4gICAgICAgICAgICBjb25zdCBzZXF1ZW5jZXMgPSBzZXF1ZW5jZXNEYXRhLm1hcChzID0+IHMucmVzaWR1ZXMpO1xuICAgICAgICAgICAgdmlld2VyLnNldFNlcXVlbmNlcyhuYW1lcywgc2VxdWVuY2VzKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgb3IgcGFyc2luZyBGQVNUQSBmaWxlOicsIGVycm9yKTtcbiAgICAgICAgICAgIGFsZXJ0KCdGYWlsZWQgdG8gbG9hZCBzZXF1ZW5jZXMuIFNlZSBjb25zb2xlIGZvciBkZXRhaWxzLicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRNZXRhZGF0YSh1cmwpIHtcbiAgICAgICAgaWYgKCF1cmwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICAgICAgICBjb25zdCB0c3YgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICBjb25zdCBsaW5lcyA9IHRzdi50cmltKCkuc3BsaXQoJ1xcbicpO1xuICAgICAgICAgICAgY29uc3QgaGVhZGVyID0gbGluZXNbMF0uc3BsaXQoJ1xcdCcpO1xuICAgICAgICAgICAgY29uc3Qgcm93cyA9IGxpbmVzLnNsaWNlKDEpLm1hcChsaW5lID0+IGxpbmUuc3BsaXQoJ1xcdCcpKTtcbiAgICAgICAgICAgIG1ldGFkYXRhID0geyBoZWFkZXIsIHJvd3MsIG9yaWdpbmFsVGV4dDogdHN2IH07XG4gICAgICAgICAgICBjb25zdCBncm91cElkSW5kZXggPSBoZWFkZXIuaW5kZXhPZignZ3JvdXBJZCcpO1xuICAgICAgICAgICAgaWYgKGdyb3VwSWRJbmRleCAhPT0gLTEgJiYgcm93cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBJZCA9IHJvd3NbMF1bZ3JvdXBJZEluZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdDb3VsZCBub3QgZmluZCBncm91cElkIGluIG1ldGFkYXRhIGZpbGUuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIG9yIHBhcnNpbmcgbWV0YWRhdGEgZmlsZTonLCBlcnJvcik7XG4gICAgICAgICAgICBhbGVydCgnRmFpbGVkIHRvIGxvYWQgbWV0YWRhdGEuIFNlZSBjb25zb2xlIGZvciBkZXRhaWxzLicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEF1dGhUb2tlbigpIHtcbiAgICAgICAgaWYgKCFhdXRoTWFuYWdlcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTm8gYXV0aGVudGljYXRpb24gbWFuYWdlciBjb25maWd1cmVkJyk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXdhaXQgYXV0aE1hbmFnZXIuZ2V0VmFsaWRUb2tlbigpO1xuICAgIH1cbiAgICBsb2FkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZFNlcXVlbmNlcyk7XG4gICAgcmV2Q29tcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRpY2VzID0gdmlld2VyLmdldFNlbGVjdGVkU2VxdWVuY2VJbmRpY2VzKCk7XG4gICAgICAgIGlmIChzZWxlY3RlZEluZGljZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2VsZWN0ZWRJbmRpY2VzLmZvckVhY2goc2VxSW5kZXggPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU2VxdWVuY2UgPSB2aWV3ZXIuZ2V0U2VxdWVuY2VzKClbc2VxSW5kZXhdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJldkNvbXBTZXF1ZW5jZSA9IHJldmVyc2VfY29tcGxlbWVudChvcmlnaW5hbFNlcXVlbmNlKTtcbiAgICAgICAgICAgICAgICB2aWV3ZXIudXBkYXRlU2VxdWVuY2Uoc2VxSW5kZXgsIHJldkNvbXBTZXF1ZW5jZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZpZXdlci5jbGVhclNlbGVjdGVkU2VxdWVuY2VOYW1lcygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBzZWxlY3Qgb25lIG9yIG1vcmUgc2VxdWVuY2VzIHRvIHJldmVyc2UgY29tcGxlbWVudC4nKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZUFsbChmcmFtZSkge1xuICAgICAgICBjb25zdCBzZXF1ZW5jZXMgPSB2aWV3ZXIuZ2V0U2VxdWVuY2VzKCk7XG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRTZXF1ZW5jZXMgPSBzZXF1ZW5jZXMubWFwKHNlcSA9PiB0cmFuc2xhdGUoc2VxLCBmcmFtZSkpO1xuICAgICAgICB2aWV3ZXIuc2V0VHJhbnNsYXRlZFNlcXVlbmNlcyh0cmFuc2xhdGVkU2VxdWVuY2VzLCBmcmFtZSk7XG4gICAgICAgIGN1cnJlbnRGcmFtZSA9IGZyYW1lO1xuICAgICAgICBpc1RyYW5zbGF0ZWQgPSB0cnVlO1xuICAgICAgICB0cmFuc2xhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnTnVjbGVvdGlkZSBNb2RlJztcbiAgICAgICAgZnJhbWVCdXR0b25zLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICB9XG4gICAgdHJhbnNsYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygndHJhbnNsYXRlIGJ1dHRvbiBjbGlja2VkJywgaXNUcmFuc2xhdGVkKTtcbiAgICAgICAgaWYgKGlzVHJhbnNsYXRlZCkge1xuICAgICAgICAgICAgdmlld2VyLnNldE51Y2xlb3RpZGVNb2RlKCk7XG4gICAgICAgICAgICBpc1RyYW5zbGF0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRyYW5zbGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdUcmFuc2xhdGUnO1xuICAgICAgICAgICAgZnJhbWVCdXR0b25zLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0cmFuc2xhdGVBbGwoY3VycmVudEZyYW1lKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hJbnB1dC52YWx1ZTtcbiAgICAgICAgaWYgKCFxdWVyeSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3Qgc2VxdWVuY2VzID0gdmlld2VyLmdldFNlcXVlbmNlcygpO1xuICAgICAgICBjb25zdCBzZWFyY2hSZXN1bHRzRGF0YSA9IHNlcXVlbmNlcy5tYXAoc2VxID0+IHNlYXJjaChzZXEsIHF1ZXJ5KSk7XG4gICAgICAgIGNvbnN0IGNvbnZlcnRlZFJlc3VsdHMgPSBzZWFyY2hSZXN1bHRzRGF0YS5tYXAocmVzID0+IEFycmF5LmZyb20ocmVzKSk7XG4gICAgICAgIHZpZXdlci5zZXRTZWFyY2hSZXN1bHRzKGNvbnZlcnRlZFJlc3VsdHMsIHF1ZXJ5Lmxlbmd0aCk7XG4gICAgICAgIC8vIFN0b3JlIHNlYXJjaCByZXN1bHRzIGZvciBzdGF0ZSBtYW5hZ2VtZW50XG4gICAgICAgIHNlYXJjaFJlc3VsdHMgPSB7IHJlc3VsdHM6IGNvbnZlcnRlZFJlc3VsdHMsIHF1ZXJ5TGVuZ3RoOiBxdWVyeS5sZW5ndGggfTtcbiAgICB9KTtcbiAgICBzYXZlUmV2aXNpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTYXZlIHJldmlzaW9uIGJ1dHRvbiBjbGlja2VkJyk7XG4gICAgICAgIGlmICghYXV0aE1hbmFnZXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIGF1dGhlbnRpY2F0aW9uIG1hbmFnZXIgY29uZmlndXJlZCcpO1xuICAgICAgICAgICAgYWxlcnQoJ05vIGF1dGhlbnRpY2F0aW9uIGNvbmZpZ3VyZWQuJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmV0dXJuVXJsID0gdXJsUGFyYW1zLmdldCgncmV0dXJuLXVybCcpO1xuICAgICAgICBpZiAoIXJldHVyblVybCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTm8gcmV0dXJuLXVybCBzcGVjaWZpZWQgaW4gVVJMIHBhcmFtcycpO1xuICAgICAgICAgICAgYWxlcnQoJ05vIHJldHVybi11cmwgc3BlY2lmaWVkLicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXR1cm4gVVJMOicsIHJldHVyblVybCk7XG4gICAgICAgIGlmICghb3JnYW5pc20pIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIG9yZ2FuaXNtIHNwZWNpZmllZCBpbiBVUkwgcGFyYW1zJyk7XG4gICAgICAgICAgICBhbGVydCgnTm8gb3JnYW5pc20gc3BlY2lmaWVkIGluIFVSTC4nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnT3JnYW5pc206Jywgb3JnYW5pc20pO1xuICAgICAgICBpZiAoIW1ldGFkYXRhIHx8ICFncm91cElkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdNZXRhZGF0YSBvciBncm91cElkIG5vdCBhdmFpbGFibGUnLCB7IG1ldGFkYXRhOiAhIW1ldGFkYXRhLCBncm91cElkIH0pO1xuICAgICAgICAgICAgYWxlcnQoJ01ldGFkYXRhIG5vdCBsb2FkZWQgb3IgZ3JvdXBJZCBub3QgZm91bmQuJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ01ldGFkYXRhIGxvYWRlZCwgZ3JvdXBJZDonLCBncm91cElkKTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdXNlciBpcyBhdXRoZW50aWNhdGVkLCBpZiBub3QsIGluaXRpYXRlIGF1dGggZmxvd1xuICAgICAgICBjb25zdCBpc0F1dGggPSBhd2FpdCBhdXRoTWFuYWdlci5pc0F1dGhlbnRpY2F0ZWQoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgYXV0aGVudGljYXRlZDonLCBpc0F1dGgpO1xuICAgICAgICBpZiAoIWlzQXV0aCkge1xuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSByZWZyZXNoIHRoZSBwYWdlIHRvIGF1dGhlbnRpY2F0ZSBmaXJzdC4nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBVc2VyIGlzIGF1dGhlbnRpY2F0ZWQsIHByb2NlZWQgd2l0aCBzYXZpbmcgcmV2aXNpb25cbiAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgaXMgYXV0aGVudGljYXRlZCwgcHJvY2VlZGluZyB3aXRoIHJldmlzaW9uIHNhdmUuLi4nKTtcbiAgICAgICAgY29uc3QgYXV0aFRva2VuID0gYXdhaXQgZ2V0QXV0aFRva2VuKCk7XG4gICAgICAgIGlmICghYXV0aFRva2VuKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZ2V0IGF1dGhlbnRpY2F0aW9uIHRva2VuJyk7XG4gICAgICAgICAgICBhbGVydCgnRmFpbGVkIHRvIGdldCBhdXRoZW50aWNhdGlvbiB0b2tlbi4nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnQXV0aCB0b2tlbiBvYnRhaW5lZCBzdWNjZXNzZnVsbHknKTtcbiAgICAgICAgY29uc3Qgc2VxdWVuY2VzID0gdmlld2VyLmdldFNlcXVlbmNlcygpO1xuICAgICAgICBjb25zdCBuYW1lcyA9IHZpZXdlci5nZXRTZXF1ZW5jZU5hbWVzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTZXF1ZW5jZXMgdG8gc2F2ZTonLCBuYW1lcy5sZW5ndGgsICdzZXF1ZW5jZXMnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ09yaWdpbmFsIHNlcXVlbmNlIG5hbWVzOicsIG5hbWVzKTtcbiAgICAgICAgLy8gQ3JlYXRlIGEgbWFwcGluZyBmcm9tIGFjY2Vzc2lvblZlcnNpb24gdG8gc3VibWlzc2lvbklkIGJhc2VkIG9uIG1ldGFkYXRhXG4gICAgICAgIGNvbnN0IGFjY2Vzc2lvblRvU3VibWlzc2lvbklkID0gbmV3IE1hcCgpO1xuICAgICAgICBjb25zdCBsaW5lcyA9IG1ldGFkYXRhLm9yaWdpbmFsVGV4dC5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBsaW5lc1swXS5zcGxpdCgnXFx0Jyk7XG4gICAgICAgIGNvbnN0IGFjY2Vzc2lvblZlcnNpb25JbmRleCA9IGhlYWRlcnMuaW5kZXhPZignYWNjZXNzaW9uVmVyc2lvbicpO1xuICAgICAgICBjb25zdCBzdWJtaXNzaW9uSWRJbmRleCA9IGhlYWRlcnMuaW5kZXhPZignc3VibWlzc2lvbklkJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdNZXRhZGF0YSBoZWFkZXJzOicsIGhlYWRlcnMpO1xuICAgICAgICBjb25zb2xlLmxvZygnQWNjZXNzaW9uVmVyc2lvbiBpbmRleDonLCBhY2Nlc3Npb25WZXJzaW9uSW5kZXgsICdTdWJtaXNzaW9uSWQgaW5kZXg6Jywgc3VibWlzc2lvbklkSW5kZXgpO1xuICAgICAgICBpZiAoYWNjZXNzaW9uVmVyc2lvbkluZGV4ICE9PSAtMSAmJiBzdWJtaXNzaW9uSWRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW5zID0gbGluZXNbaV0uc3BsaXQoJ1xcdCcpO1xuICAgICAgICAgICAgICAgIGlmIChjb2x1bW5zLmxlbmd0aCA+IE1hdGgubWF4KGFjY2Vzc2lvblZlcnNpb25JbmRleCwgc3VibWlzc2lvbklkSW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjY2Vzc2lvblZlcnNpb24gPSBjb2x1bW5zW2FjY2Vzc2lvblZlcnNpb25JbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1Ym1pc3Npb25JZCA9IGNvbHVtbnNbc3VibWlzc2lvbklkSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWNjZXNzaW9uVmVyc2lvbiAmJiBzdWJtaXNzaW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc2lvblRvU3VibWlzc2lvbklkLnNldChhY2Nlc3Npb25WZXJzaW9uLCBzdWJtaXNzaW9uSWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdBY2Nlc3Npb24gdG8gU3VibWlzc2lvbklkIG1hcHBpbmc6JywgQXJyYXkuZnJvbShhY2Nlc3Npb25Ub1N1Ym1pc3Npb25JZC5lbnRyaWVzKCkpKTtcbiAgICAgICAgLy8gTWFwIHNlcXVlbmNlIG5hbWVzIGZyb20gYWNjZXNzaW9uVmVyc2lvbiB0byBzdWJtaXNzaW9uSWRcbiAgICAgICAgY29uc3QgbWFwcGVkTmFtZXMgPSBuYW1lcy5tYXAobmFtZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJtaXNzaW9uSWQgPSBhY2Nlc3Npb25Ub1N1Ym1pc3Npb25JZC5nZXQobmFtZSk7XG4gICAgICAgICAgICBpZiAoc3VibWlzc2lvbklkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYE1hcHBpbmcgJHtuYW1lfSAtPiAke3N1Ym1pc3Npb25JZH1gKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3VibWlzc2lvbklkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBObyBzdWJtaXNzaW9uSWQgZm91bmQgZm9yICR7bmFtZX0sIGtlZXBpbmcgb3JpZ2luYWwgbmFtZWApO1xuICAgICAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ01hcHBlZCBzZXF1ZW5jZSBuYW1lczonLCBtYXBwZWROYW1lcyk7XG4gICAgICAgIGNvbnN0IGZhc3RhQ29udGVudCA9IG1hcHBlZE5hbWVzLm1hcCgobmFtZSwgaSkgPT4gYD4ke25hbWV9XFxuJHtzZXF1ZW5jZXNbaV19YCkuam9pbignXFxuJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdGQVNUQSBjb250ZW50IHByZXZpZXc6JywgZmFzdGFDb250ZW50LnN1YnN0cmluZygwLCAyMDApICsgJy4uLicpO1xuICAgICAgICBjb25zdCBmYXN0YUZpbGUgPSBuZXcgRmlsZShbZmFzdGFDb250ZW50XSwgXCJzZXF1ZW5jZXMuZmFzdGFcIiwgeyB0eXBlOiBcInRleHQvcGxhaW5cIiB9KTtcbiAgICAgICAgY29uc3QgbWV0YWRhdGFGaWxlID0gbmV3IEZpbGUoW21ldGFkYXRhLm9yaWdpbmFsVGV4dF0sIFwibWV0YWRhdGEudHN2XCIsIHsgdHlwZTogXCJ0ZXh0L3RhYi1zZXBhcmF0ZWQtdmFsdWVzXCIgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdNZXRhZGF0YSBwcmV2aWV3OicsIG1ldGFkYXRhLm9yaWdpbmFsVGV4dC5zdWJzdHJpbmcoMCwgNTAwKSArICcuLi4nKTtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdzZXF1ZW5jZUZpbGUnLCBmYXN0YUZpbGUpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ21ldGFkYXRhRmlsZScsIG1ldGFkYXRhRmlsZSk7XG4gICAgICAgIGNvbnN0IHJldmlzaW9uVXJsID0gYCR7cmV0dXJuVXJsLnJlcGxhY2UoL1xcLyQvLCAnJyl9LyR7b3JnYW5pc219L3JldmlzZT9ncm91cElkPSR7Z3JvdXBJZH0mZGF0YVVzZVRlcm1zVHlwZT1PUEVOYDtcbiAgICAgICAgY29uc29sZS5sb2coJ01ha2luZyBBUEkgY2FsbCB0bzonLCByZXZpc2lvblVybCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzYXZlUmV2aXNpb25CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2F2ZVJldmlzaW9uQnV0dG9uLnRleHRDb250ZW50ID0gJ1NhdmluZy4uLic7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VuZGluZyBQT1NUIHJlcXVlc3QgdG8gTG9jdWx1cy4uLicpO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXZpc2lvblVybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YXV0aFRva2VufWAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1JlY2VpdmVkIHJlc3BvbnNlOicsIHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnUmV2aXNpb24gc2F2ZWQgc3VjY2Vzc2Z1bGx5IScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU3VjY2VzcyByZXNwb25zZTonLCByZXNwb25zZURhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAgICAgICAvLyBUb2tlbiBtaWdodCBiZSBleHBpcmVkLCB0cnkgdG8gcmVmcmVzaCBhbmQgcmV0cnkgb25jZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVbmF1dGhvcml6ZWQsIGF0dGVtcHRpbmcgdG8gcmVmcmVzaCB0b2tlbi4uLicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Rva2VuID0gYXdhaXQgYXV0aE1hbmFnZXIucmVmcmVzaFRva2VuKCk7XG4gICAgICAgICAgICAgICAgaWYgKG5ld1Rva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiByZWZyZXNoZWQsIHJldHJ5aW5nIHJlcXVlc3QuLi4nKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmV0cnkgd2l0aCBuZXcgdG9rZW5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0cnlSZXNwb25zZSA9IGF3YWl0IGZldGNoKHJldmlzaW9uVXJsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtuZXdUb2tlbn1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JldHJ5IHJlc3BvbnNlOicsIHJldHJ5UmVzcG9uc2Uuc3RhdHVzLCByZXRyeVJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmV0cnlSZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1JldmlzaW9uIHNhdmVkIHN1Y2Nlc3NmdWxseSEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJldHJ5UmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3MgcmVzcG9uc2U6JywgcmVzcG9uc2VEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yVGV4dCA9IGF3YWl0IHJldHJ5UmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoYEVycm9yIHNhdmluZyByZXZpc2lvbjogJHtyZXRyeVJlc3BvbnNlLnN0YXR1c30gJHtyZXRyeVJlc3BvbnNlLnN0YXR1c1RleHR9XFxuJHtlcnJvclRleHR9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZXNwb25zZTonLCBlcnJvclRleHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgnQXV0aGVudGljYXRpb24gZXhwaXJlZC4gUGxlYXNlIHJlZnJlc2ggdGhlIHBhZ2UgYW5kIHRyeSBhZ2Fpbi4nKTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgYXV0aE1hbmFnZXIuY2xlYXJTdG9yZWRBdXRoKCk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHVwZGF0ZVNhdmVCdXR0b25TdGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yVGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgICAgICBhbGVydChgRXJyb3Igc2F2aW5nIHJldmlzaW9uOiAke3Jlc3BvbnNlLnN0YXR1c30gJHtyZXNwb25zZS5zdGF0dXNUZXh0fVxcbiR7ZXJyb3JUZXh0fWApO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlc3BvbnNlOicsIGVycm9yVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzYXZpbmcgcmV2aXNpb246JywgZXJyb3IpO1xuICAgICAgICAgICAgYWxlcnQoJ0ZhaWxlZCB0byBzYXZlIHJldmlzaW9uLiBTZWUgY29uc29sZSBmb3IgZGV0YWlscy4nKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNhdmVSZXZpc2lvbkJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgYXdhaXQgdXBkYXRlU2F2ZUJ1dHRvblN0YXRlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnJhbWUxLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdHJhbnNsYXRlQWxsKDEpKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnJhbWUyLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdHJhbnNsYXRlQWxsKDIpKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnJhbWUzLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdHJhbnNsYXRlQWxsKDMpKTtcbiAgICAvLyBBdXRoZW50aWNhdGlvbi1maXJzdCBmbG93OiBDaGVjayBpZiB3ZSBuZWVkIGF1dGhlbnRpY2F0aW9uIGFuZCBkbyBpdCBlYXJseVxuICAgIGFzeW5jIGZ1bmN0aW9uIGNoZWNrQW5kSW5pdGlhdGVBdXRoZW50aWNhdGlvbklmTmVlZGVkKCkge1xuICAgICAgICBpZiAoIWF1dGhNYW5hZ2VyKSB7XG4gICAgICAgICAgICByZXR1cm47IC8vIE5vIGF1dGggY29uZmlnXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gYXdhaXQgYXV0aE1hbmFnZXIuaXNBdXRoZW50aWNhdGVkKCk7XG4gICAgICAgIGlmICghaXNBdXRoZW50aWNhdGVkICYmICFBcHBTdGF0ZU1hbmFnZXIuaXNSZXR1cm5pbmdGcm9tQXV0aCgpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aGVudGljYXRpb24gcmVxdWlyZWQgLSB3aWxsIGluaXRpYXRlIGFmdGVyIGxvYWRpbmcgY29udGVudC4uLicpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBEb24ndCBpbml0aWF0ZSBhdXRoIHlldCwgbG9hZCBjb250ZW50IGZpcnN0XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBObyBhdXRoIG5lZWRlZCBvciBhbHJlYWR5IGF1dGhlbnRpY2F0ZWRcbiAgICB9XG4gICAgLy8gTG9hZCBzZXF1ZW5jZXMgYW5kIG1ldGFkYXRhIGZpcnN0LCB0aGVuIGNoZWNrIGF1dGhcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkQ29udGVudEFuZENoZWNrQXV0aCgpIHtcbiAgICAgICAgLy8gTG9hZCBzZXF1ZW5jZXMgaWYgVVJMIGlzIHByb3ZpZGVkIGFuZCB3ZSBoYXZlbid0IHJlc3RvcmVkIHN0YXRlXG4gICAgICAgIGlmIChmYXN0YVVybCAmJiAhc3RhdGVXYXNSZXN0b3JlZCkge1xuICAgICAgICAgICAgdXJsSW5wdXQudmFsdWUgPSBmYXN0YVVybDtcbiAgICAgICAgICAgIGF3YWl0IGxvYWRTZXF1ZW5jZXMoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBMb2FkIG1ldGFkYXRhIGlmIFVSTCBpcyBwcm92aWRlZCBhbmQgd2UgaGF2ZW4ndCByZXN0b3JlZCBzdGF0ZSAgXG4gICAgICAgIGlmIChtZXRhZGF0YVVybCAmJiAhc3RhdGVXYXNSZXN0b3JlZCkge1xuICAgICAgICAgICAgYXdhaXQgbG9hZE1ldGFkYXRhKG1ldGFkYXRhVXJsKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBOb3cgY2hlY2sgYXV0aGVudGljYXRpb24gYWZ0ZXIgY29udGVudCBpcyBsb2FkZWRcbiAgICAgICAgaWYgKGF1dGhNYW5hZ2VyKSB7XG4gICAgICAgICAgICBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSBhd2FpdCBhdXRoTWFuYWdlci5pc0F1dGhlbnRpY2F0ZWQoKTtcbiAgICAgICAgICAgIGlmICghaXNBdXRoZW50aWNhdGVkICYmICFBcHBTdGF0ZU1hbmFnZXIuaXNSZXR1cm5pbmdGcm9tQXV0aCgpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbnRlbnQgbG9hZGVkLCBub3cgaW5pdGlhdGluZyBhdXRoZW50aWNhdGlvbi4uLicpO1xuICAgICAgICAgICAgICAgIC8vIFNhdmUgY3VycmVudCBhcHBsaWNhdGlvbiBzdGF0ZSBiZWZvcmUgYXV0aGVudGljYXRpb24gKG5vdyB3aXRoIGxvYWRlZCBjb250ZW50KVxuICAgICAgICAgICAgICAgIGNvbnN0IHNlcXVlbmNlcyA9IHZpZXdlci5nZXRTZXF1ZW5jZXMoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lcyA9IHZpZXdlci5nZXRTZXF1ZW5jZU5hbWVzKCk7XG4gICAgICAgICAgICAgICAgQXBwU3RhdGVNYW5hZ2VyLnNhdmVTdGF0ZUJlZm9yZUF1dGgodXJsUGFyYW1zLCB7IG5hbWVzLCBzZXF1ZW5jZXMgfSwgaXNUcmFuc2xhdGVkLCBjdXJyZW50RnJhbWUsIGlzVHJhbnNsYXRlZCA/IHZpZXdlci5nZXRUcmFuc2xhdGVkU2VxdWVuY2VzKCkgOiB1bmRlZmluZWQsIG1ldGFkYXRhLCBncm91cElkLCBzZWFyY2hSZXN1bHRzLCBmYWxzZSAvLyBEb24ndCBjb250aW51ZSB3aXRoIHNhdmUgcmV2aXNpb24gYWZ0ZXIgYXV0aFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYXdhaXQgYXV0aE1hbmFnZXIuaW5pdGlhdGVBdXRoKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBXaWxsIHJlZGlyZWN0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9nb3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAoYXV0aE1hbmFnZXIpIHtcbiAgICAgICAgICAgIGF3YWl0IGF1dGhNYW5hZ2VyLmxvZ291dCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIExvYWQgY29udGVudCBmaXJzdCwgdGhlbiBoYW5kbGUgYXV0aGVudGljYXRpb25cbiAgICBhd2FpdCBsb2FkQ29udGVudEFuZENoZWNrQXV0aCgpO1xufVxubWFpbigpO1xuIiwiZXhwb3J0IGNsYXNzIFNlcXVlbmNlVmlld2VyIHtcbiAgICBzZXF1ZW5jZUNhbnZhcztcbiAgICBuYW1lc0NhbnZhcztcbiAgICBydWxlckNhbnZhcztcbiAgICBzZXFDdHg7XG4gICAgbmFtZXNDdHg7XG4gICAgcnVsZXJDdHg7XG4gICAgc2VxdWVuY2VzID0gW107XG4gICAgbmFtZXMgPSBbXTtcbiAgICBzZWxlY3RlZFNlcXVlbmNlTmFtZXMgPSBuZXcgU2V0KCk7XG4gICAgY29sb3JzID0ge1xuICAgICAgICAnQSc6IHsgZm9yZWdyb3VuZDogJyMwMTgwMDEnLCBiYWNrZ3JvdW5kOiAnIzVBREM1QScgfSwgLy8gR3JlZW4gZm9yZWdyb3VuZCwgbGlnaHQgZ3JlZW4gYmFja2dyb3VuZFxuICAgICAgICAnQyc6IHsgZm9yZWdyb3VuZDogJyMwMTAxRkYnLCBiYWNrZ3JvdW5kOiAnIzY0NjRGQScgfSwgLy8gQmx1ZSBmb3JlZ3JvdW5kLCBsaWdodCBibHVlIGJhY2tncm91bmRcbiAgICAgICAgJ0cnOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyM1QTVBNUEnIH0sIC8vIEJsYWNrIGZvcmVncm91bmQsIGRhcmsgZ3JheSBiYWNrZ3JvdW5kXG4gICAgICAgICdUJzogeyBmb3JlZ3JvdW5kOiAnI0ZGMDEwMScsIGJhY2tncm91bmQ6ICcjRjU4MjgyJyB9LCAvLyBSZWQgZm9yZWdyb3VuZCwgbGlnaHQgcmVkIGJhY2tncm91bmRcbiAgICAgICAgJ1UnOiB7IGZvcmVncm91bmQ6ICcjRkYwMTAxJywgYmFja2dyb3VuZDogJyNGNTgyODInIH0sIC8vIFNhbWUgYXMgVFxuICAgICAgICAnUic6IHsgZm9yZWdyb3VuZDogJyNGRjAwRkYnLCBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicgfSwgLy8gTWFnZW50YSBmb3JlZ3JvdW5kLCB3aGl0ZSBiYWNrZ3JvdW5kXG4gICAgICAgICdZJzogeyBmb3JlZ3JvdW5kOiAnI0ZGMDBGRicsIGJhY2tncm91bmQ6ICcjRkZGRkZGJyB9LFxuICAgICAgICAnUyc6IHsgZm9yZWdyb3VuZDogJyNGRjAwRkYnLCBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicgfSxcbiAgICAgICAgJ1cnOiB7IGZvcmVncm91bmQ6ICcjRkYwMEZGJywgYmFja2dyb3VuZDogJyNGRkZGRkYnIH0sXG4gICAgICAgICdLJzogeyBmb3JlZ3JvdW5kOiAnI0ZGMDBGRicsIGJhY2tncm91bmQ6ICcjRkZGRkZGJyB9LFxuICAgICAgICAnTSc6IHsgZm9yZWdyb3VuZDogJyNGRjAwRkYnLCBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicgfSxcbiAgICAgICAgJ0InOiB7IGZvcmVncm91bmQ6ICcjRkYwMEZGJywgYmFja2dyb3VuZDogJyNGRkZGRkYnIH0sXG4gICAgICAgICdEJzogeyBmb3JlZ3JvdW5kOiAnI0ZGMDBGRicsIGJhY2tncm91bmQ6ICcjRkZGRkZGJyB9LFxuICAgICAgICAnSCc6IHsgZm9yZWdyb3VuZDogJyNGRjAwRkYnLCBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicgfSxcbiAgICAgICAgJ1YnOiB7IGZvcmVncm91bmQ6ICcjRkYwMEZGJywgYmFja2dyb3VuZDogJyNGRkZGRkYnIH0sXG4gICAgICAgICdOJzogeyBmb3JlZ3JvdW5kOiAnI0ZGMDBGRicsIGJhY2tncm91bmQ6ICcjRkZGRkZGJyB9LCAvLyBNYWdlbnRhIGZvcmVncm91bmQsIHdoaXRlIGJhY2tncm91bmRcbiAgICAgICAgJy0nOiB7IGZvcmVncm91bmQ6ICcjODA4MDgwJywgYmFja2dyb3VuZDogJyNGQUZBRkEnIH0sIC8vIERhcmsgZ3JheSBmb3JlZ3JvdW5kLCBsaWdodCBncmF5IGJhY2tncm91bmQgKEdBUClcbiAgICB9O1xuICAgIGFtaW5vQWNpZENvbG9ycyA9IHtcbiAgICAgICAgJ0EnOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyMyNzZFQjcnIH0sXG4gICAgICAgICdDJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjRTY4MDgwJyB9LFxuICAgICAgICAnRCc6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnI0NDNERDQycgfSxcbiAgICAgICAgJ0UnOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyM5ODQwOTcnIH0sXG4gICAgICAgICdGJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjMTk4MEU2JyB9LFxuICAgICAgICAnRyc6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnI0U2OTk0RCcgfSxcbiAgICAgICAgJ0gnOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyMxOUIzQjMnIH0sXG4gICAgICAgICdJJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjNEU5QkYzJyB9LFxuICAgICAgICAnSyc6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnI0U2MzMxOScgfSxcbiAgICAgICAgJ0wnOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyM3OEE2RDUnIH0sXG4gICAgICAgICdNJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjMEY1NDlCJyB9LFxuICAgICAgICAnTic6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnIzE5Q0MxOScgfSxcbiAgICAgICAgJ1AnOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyNDQ0NDMDAnIH0sXG4gICAgICAgICdRJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjNUNFRDVDJyB9LFxuICAgICAgICAnUic6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnI0Y2NDQyQycgfSxcbiAgICAgICAgJ1MnOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyMwMjk2MDInIH0sXG4gICAgICAgICdUJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjNDVDOTQ1JyB9LFxuICAgICAgICAnVic6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnIzA0N0RGOScgfSxcbiAgICAgICAgJ1cnOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyMwMzU1QTknIH0sXG4gICAgICAgICdZJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjMTRDNkM4JyB9LFxuICAgICAgICAnKic6IHsgZm9yZWdyb3VuZDogJyMwMEZGRkYnLCBiYWNrZ3JvdW5kOiAnIzY5Njk2OScgfSwgLy8gU1RPUCBjb2RvbiAoZGFya0dyYXkpXG4gICAgICAgICctJzogeyBmb3JlZ3JvdW5kOiAnI0E5QTlBOScsIGJhY2tncm91bmQ6ICcjRTZFNkU2JyB9LCAvLyBHQVAgKGRhcmtHcmF5LCAyMzAsMjMwLDIzMClcbiAgICAgICAgJ1gnOiB7IGZvcmVncm91bmQ6ICcjMDBGRkZGJywgYmFja2dyb3VuZDogJyNGRkZGRkYnIH0sIC8vIFVua25vd24gKGN5YW4sIHdoaXRlKVxuICAgIH07XG4gICAgYmxvY2tXaWR0aCA9IDIwO1xuICAgIGJsb2NrSGVpZ2h0ID0gMjA7XG4gICAgc2Nyb2xsWCA9IDA7XG4gICAgc2Nyb2xsWSA9IDA7XG4gICAgbWF4U2VxdWVuY2VMZW5ndGggPSAwO1xuICAgIGlzUmVkcmF3U2NoZWR1bGVkID0gZmFsc2U7XG4gICAgc2VsZWN0aW9uU3RhcnQgPSBudWxsO1xuICAgIHNlbGVjdGlvbkVuZCA9IG51bGw7XG4gICAgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgIGlzRHJhZ2dpbmdIU2Nyb2xsYmFyID0gZmFsc2U7XG4gICAgaXNEcmFnZ2luZ1ZTY3JvbGxiYXIgPSBmYWxzZTtcbiAgICBsYXN0TW91c2VYID0gMDtcbiAgICBsYXN0TW91c2VZID0gMDtcbiAgICBzY3JvbGxiYXJXaWR0aCA9IDEwO1xuICAgIHNjcm9sbGJhckNvbG9yID0gJyM4ODgnO1xuICAgIHNjcm9sbGJhclRyYWNrQ29sb3IgPSAnI2YxZjFmMSc7XG4gICAgZGlzcGxheU1vZGUgPSAnbnVjbGVvdGlkZSc7XG4gICAgdHJhbnNsYXRlZFNlcXVlbmNlcyA9IFtdO1xuICAgIGN1cnJlbnRSZWFkaW5nRnJhbWUgPSAxO1xuICAgIHNlYXJjaFJlc3VsdHMgPSBbXTtcbiAgICBzZWFyY2hRdWVyeUxlbmd0aCA9IDA7XG4gICAgY29uc3RydWN0b3Ioc2VxdWVuY2VDYW52YXMsIG5hbWVzQ2FudmFzLCBydWxlckNhbnZhcykge1xuICAgICAgICB0aGlzLnNlcXVlbmNlQ2FudmFzID0gc2VxdWVuY2VDYW52YXM7XG4gICAgICAgIHRoaXMubmFtZXNDYW52YXMgPSBuYW1lc0NhbnZhcztcbiAgICAgICAgdGhpcy5ydWxlckNhbnZhcyA9IHJ1bGVyQ2FudmFzO1xuICAgICAgICB0aGlzLnNlcUN0eCA9IHNlcXVlbmNlQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMubmFtZXNDdHggPSBuYW1lc0NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLnJ1bGVyQ3R4ID0gcnVsZXJDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgLy8gTWFrZSBjYW52YXMgZm9jdXNhYmxlIGZvciBrZXlib2FyZCBuYXZpZ2F0aW9uXG4gICAgICAgIHRoaXMuc2VxdWVuY2VDYW52YXMudGFiSW5kZXggPSAwO1xuICAgICAgICB0aGlzLnNlcXVlbmNlQ2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5vbldoZWVsLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLm5hbWVzQ2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5vbldoZWVsLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLm5hbWVzQ2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25OYW1lc0NhbnZhc01vdXNlRG93bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5zZXF1ZW5jZUNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnNlcXVlbmNlQ2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuc2VxdWVuY2VDYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnNlcXVlbmNlQ2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbnN1cmVTZWxlY3Rpb24oKTtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZXNpemVDYW52YXMoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplQ2FudmFzLmJpbmQodGhpcykpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBzYXZlU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgICAgICAgbmFtZXM6IHRoaXMubmFtZXMsXG4gICAgICAgICAgICBzZXF1ZW5jZXM6IHRoaXMuc2VxdWVuY2VzXG4gICAgICAgIH07XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXFlZGl0LXN0YXRlJywgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKTtcbiAgICB9XG4gICAgc2V0U2VxdWVuY2VzKG5hbWVzLCBzZXF1ZW5jZXMpIHtcbiAgICAgICAgdGhpcy5uYW1lcyA9IG5hbWVzO1xuICAgICAgICB0aGlzLnNlcXVlbmNlcyA9IHNlcXVlbmNlcztcbiAgICAgICAgdGhpcy5tYXhTZXF1ZW5jZUxlbmd0aCA9IE1hdGgubWF4KC4uLnNlcXVlbmNlcy5tYXAocyA9PiBzLmxlbmd0aCkpO1xuICAgICAgICB0aGlzLnNjcm9sbFggPSAwO1xuICAgICAgICB0aGlzLnNjcm9sbFkgPSAwO1xuICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSBudWxsO1xuICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICB9XG4gICAgZ2V0U2VsZWN0ZWRTZXF1ZW5jZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvblN0YXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2VxSW5kZXg6IHRoaXMuc2VsZWN0aW9uU3RhcnQuc2VxSW5kZXgsXG4gICAgICAgICAgICBzZXF1ZW5jZTogdGhpcy5zZXF1ZW5jZXNbdGhpcy5zZWxlY3Rpb25TdGFydC5zZXFJbmRleF1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgdXBkYXRlU2VxdWVuY2Uoc2VxSW5kZXgsIG5ld1NlcXVlbmNlKSB7XG4gICAgICAgIHRoaXMuc2VxdWVuY2VzW3NlcUluZGV4XSA9IG5ld1NlcXVlbmNlO1xuICAgICAgICB0aGlzLm1heFNlcXVlbmNlTGVuZ3RoID0gTWF0aC5tYXgoLi4udGhpcy5zZXF1ZW5jZXMubWFwKHMgPT4gcy5sZW5ndGgpKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgfVxuICAgIGdldFNlcXVlbmNlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VxdWVuY2VzO1xuICAgIH1cbiAgICBnZXRTZXF1ZW5jZU5hbWVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lcztcbiAgICB9XG4gICAgZ2V0U2VsZWN0ZWRTZXF1ZW5jZUluZGljZXMoKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuc2VsZWN0ZWRTZXF1ZW5jZU5hbWVzKTtcbiAgICB9XG4gICAgZ2V0VHJhbnNsYXRlZFNlcXVlbmNlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlZFNlcXVlbmNlcztcbiAgICB9XG4gICAgY2xlYXJTZWxlY3RlZFNlcXVlbmNlTmFtZXMoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTZXF1ZW5jZU5hbWVzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgIH1cbiAgICBzZXRUcmFuc2xhdGVkU2VxdWVuY2VzKHNlcXVlbmNlcywgZnJhbWUpIHtcbiAgICAgICAgdGhpcy50cmFuc2xhdGVkU2VxdWVuY2VzID0gc2VxdWVuY2VzO1xuICAgICAgICB0aGlzLmN1cnJlbnRSZWFkaW5nRnJhbWUgPSBmcmFtZTtcbiAgICAgICAgdGhpcy5kaXNwbGF5TW9kZSA9ICdhbWlub2FjaWQnO1xuICAgICAgICB0aGlzLnNjcm9sbFggPSAwO1xuICAgICAgICB0aGlzLnNjcm9sbFkgPSAwO1xuICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSBudWxsO1xuICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICB9XG4gICAgc2V0TnVjbGVvdGlkZU1vZGUoKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheU1vZGUgPSAnbnVjbGVvdGlkZSc7XG4gICAgICAgIHRoaXMuc2Nyb2xsWCA9IDA7XG4gICAgICAgIHRoaXMuc2Nyb2xsWSA9IDA7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IG51bGw7XG4gICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgIH1cbiAgICBzZXRTZWFyY2hSZXN1bHRzKHJlc3VsdHMsIHF1ZXJ5TGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IHJlc3VsdHM7XG4gICAgICAgIHRoaXMuc2VhcmNoUXVlcnlMZW5ndGggPSBxdWVyeUxlbmd0aDtcbiAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgfVxuICAgIHJlc2l6ZUNhbnZhcygpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5zZXF1ZW5jZUNhbnZhcy5wYXJlbnRFbGVtZW50O1xuICAgICAgICB0aGlzLnNlcXVlbmNlQ2FudmFzLndpZHRoID0gcGFyZW50LmNsaWVudFdpZHRoO1xuICAgICAgICB0aGlzLnNlcXVlbmNlQ2FudmFzLmhlaWdodCA9IHBhcmVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGNvbnN0IG5hbWVzUGFyZW50ID0gdGhpcy5uYW1lc0NhbnZhcy5wYXJlbnRFbGVtZW50O1xuICAgICAgICB0aGlzLm5hbWVzQ2FudmFzLndpZHRoID0gbmFtZXNQYXJlbnQuY2xpZW50V2lkdGg7XG4gICAgICAgIHRoaXMubmFtZXNDYW52YXMuaGVpZ2h0ID0gbmFtZXNQYXJlbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICBjb25zdCBydWxlclBhcmVudCA9IHRoaXMucnVsZXJDYW52YXMucGFyZW50RWxlbWVudDtcbiAgICAgICAgdGhpcy5ydWxlckNhbnZhcy53aWR0aCA9IHJ1bGVyUGFyZW50LmNsaWVudFdpZHRoO1xuICAgICAgICB0aGlzLnJ1bGVyQ2FudmFzLmhlaWdodCA9IDIwO1xuICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICB9XG4gICAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuc2VxdWVuY2VDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xuICAgICAgICAvLyBDaGVjayBmb3IgaG9yaXpvbnRhbCBzY3JvbGxiYXIgY2xpY2tcbiAgICAgICAgY29uc3QgY29udGVudFdpZHRoID0gdGhpcy5tYXhTZXF1ZW5jZUxlbmd0aCAqIHRoaXMuYmxvY2tXaWR0aDtcbiAgICAgICAgY29uc3QgY2FudmFzV2lkdGggPSB0aGlzLnNlcXVlbmNlQ2FudmFzLndpZHRoO1xuICAgICAgICBjb25zdCBjYW52YXNIZWlnaHQgPSB0aGlzLnNlcXVlbmNlQ2FudmFzLmhlaWdodDtcbiAgICAgICAgaWYgKGNvbnRlbnRXaWR0aCA+IGNhbnZhc1dpZHRoICYmIHkgPj0gY2FudmFzSGVpZ2h0IC0gdGhpcy5zY3JvbGxiYXJXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy5pc0RyYWdnaW5nSFNjcm9sbGJhciA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxhc3RNb3VzZVggPSB4O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIGZvciB2ZXJ0aWNhbCBzY3JvbGxiYXIgY2xpY2tcbiAgICAgICAgY29uc3QgY29udGVudEhlaWdodCA9IHRoaXMuc2VxdWVuY2VzLmxlbmd0aCAqIHRoaXMuYmxvY2tIZWlnaHQ7XG4gICAgICAgIGlmIChjb250ZW50SGVpZ2h0ID4gY2FudmFzSGVpZ2h0ICYmIHggPj0gY2FudmFzV2lkdGggLSB0aGlzLnNjcm9sbGJhcldpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmdWU2Nyb2xsYmFyID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGFzdE1vdXNlWSA9IHk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgc2VxSW5kZXggPSBNYXRoLmZsb29yKCh5ICsgdGhpcy5zY3JvbGxZKSAvIHRoaXMuYmxvY2tIZWlnaHQpO1xuICAgICAgICBjb25zdCBwb3MgPSBNYXRoLmZsb29yKCh4ICsgdGhpcy5zY3JvbGxYKSAvIHRoaXMuYmxvY2tXaWR0aCk7XG4gICAgICAgIGlmIChzZXFJbmRleCA+PSAwICYmIHNlcUluZGV4IDwgdGhpcy5zZXF1ZW5jZXMubGVuZ3RoICYmIHBvcyA+PSAwICYmIHBvcyA8IHRoaXMuc2VxdWVuY2VzW3NlcUluZGV4XS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSB7IHNlcUluZGV4LCBwb3MgfTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0geyBzZXFJbmRleCwgcG9zIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICB9XG4gICAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuc2VxdWVuY2VDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xuICAgICAgICBpZiAodGhpcy5pc0RyYWdnaW5nSFNjcm9sbGJhcikge1xuICAgICAgICAgICAgY29uc3QgY29udGVudFdpZHRoID0gdGhpcy5tYXhTZXF1ZW5jZUxlbmd0aCAqIHRoaXMuYmxvY2tXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhc1dpZHRoID0gdGhpcy5zZXF1ZW5jZUNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGJhclRyYWNrV2lkdGggPSBjYW52YXNXaWR0aCAtIHRoaXMuc2Nyb2xsYmFyV2lkdGg7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxiYXJUaHVtYldpZHRoID0gTWF0aC5tYXgoNTAsIHNjcm9sbGJhclRyYWNrV2lkdGggKiAoY2FudmFzV2lkdGggLyBjb250ZW50V2lkdGgpKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhWCA9IHggLSB0aGlzLmxhc3RNb3VzZVg7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxSYXRpbyA9IChjb250ZW50V2lkdGggLSBjYW52YXNXaWR0aCkgLyAoc2Nyb2xsYmFyVHJhY2tXaWR0aCAtIHNjcm9sbGJhclRodW1iV2lkdGgpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxYICs9IGRlbHRhWCAqIHNjcm9sbFJhdGlvO1xuICAgICAgICAgICAgdGhpcy5sYXN0TW91c2VYID0geDtcbiAgICAgICAgICAgIGNvbnN0IG1heFNjcm9sbFggPSBjb250ZW50V2lkdGggLSBjYW52YXNXaWR0aDtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsWCA9IE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMuc2Nyb2xsWCwgbWF4U2Nyb2xsWCkpO1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2luZ1ZTY3JvbGxiYXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSB0aGlzLnNlcXVlbmNlcy5sZW5ndGggKiB0aGlzLmJsb2NrSGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gdGhpcy5zZXF1ZW5jZUNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxiYXJUcmFja0hlaWdodCA9IGNhbnZhc0hlaWdodCAtIHRoaXMuc2Nyb2xsYmFyV2lkdGg7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxiYXJUaHVtYkhlaWdodCA9IE1hdGgubWF4KDUwLCBzY3JvbGxiYXJUcmFja0hlaWdodCAqIChjYW52YXNIZWlnaHQgLyBjb250ZW50SGVpZ2h0KSk7XG4gICAgICAgICAgICBjb25zdCBkZWx0YVkgPSB5IC0gdGhpcy5sYXN0TW91c2VZO1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsUmF0aW8gPSAoY29udGVudEhlaWdodCAtIGNhbnZhc0hlaWdodCkgLyAoc2Nyb2xsYmFyVHJhY2tIZWlnaHQgLSBzY3JvbGxiYXJUaHVtYkhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFkgKz0gZGVsdGFZICogc2Nyb2xsUmF0aW87XG4gICAgICAgICAgICB0aGlzLmxhc3RNb3VzZVkgPSB5O1xuICAgICAgICAgICAgY29uc3QgbWF4U2Nyb2xsWSA9IGNvbnRlbnRIZWlnaHQgLSBjYW52YXNIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFkgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLnNjcm9sbFksIG1heFNjcm9sbFkpKTtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pc0RyYWdnaW5nIHx8ICF0aGlzLnNlbGVjdGlvblN0YXJ0KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBzZXFJbmRleCA9IE1hdGguZmxvb3IoKHkgKyB0aGlzLnNjcm9sbFkpIC8gdGhpcy5ibG9ja0hlaWdodCk7XG4gICAgICAgIGNvbnN0IHBvcyA9IE1hdGguZmxvb3IoKHggKyB0aGlzLnNjcm9sbFgpIC8gdGhpcy5ibG9ja1dpZHRoKTtcbiAgICAgICAgLy8gQWxsb3cgc2VsZWN0aW9uIGFjcm9zcyBtdWx0aXBsZSBzZXF1ZW5jZXNcbiAgICAgICAgaWYgKHNlcUluZGV4ID49IDAgJiYgc2VxSW5kZXggPCB0aGlzLnNlcXVlbmNlcy5sZW5ndGggJiYgcG9zID49IDAgJiYgcG9zIDw9IHRoaXMuc2VxdWVuY2VzW3NlcUluZGV4XS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0geyBzZXFJbmRleCwgcG9zIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgfVxuICAgIG9uTW91c2VVcChldmVudCkge1xuICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nSFNjcm9sbGJhciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRHJhZ2dpbmdWU2Nyb2xsYmFyID0gZmFsc2U7XG4gICAgfVxuICAgIGdldFNlbGVjdGVkVGV4dCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvblN0YXJ0IHx8ICF0aGlzLnNlbGVjdGlvbkVuZCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0Um93ID0gTWF0aC5taW4odGhpcy5zZWxlY3Rpb25TdGFydC5zZXFJbmRleCwgdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXgpO1xuICAgICAgICBjb25zdCBlbmRSb3cgPSBNYXRoLm1heCh0aGlzLnNlbGVjdGlvblN0YXJ0LnNlcUluZGV4LCB0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCk7XG4gICAgICAgIGNvbnN0IHN0YXJ0Q29sID0gTWF0aC5taW4odGhpcy5zZWxlY3Rpb25TdGFydC5wb3MsIHRoaXMuc2VsZWN0aW9uRW5kLnBvcyk7XG4gICAgICAgIGNvbnN0IGVuZENvbCA9IE1hdGgubWF4KHRoaXMuc2VsZWN0aW9uU3RhcnQucG9zLCB0aGlzLnNlbGVjdGlvbkVuZC5wb3MpO1xuICAgICAgICBsZXQgc2VsZWN0ZWRUZXh0ID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydFJvdzsgaSA8PSBlbmRSb3c7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc2VxdWVuY2UgPSB0aGlzLnNlcXVlbmNlc1tpXTtcbiAgICAgICAgICAgIHNlbGVjdGVkVGV4dCArPSBzZXF1ZW5jZS5zdWJzdHJpbmcoc3RhcnRDb2wsIGVuZENvbCArIDEpOyAvLyArMSBiZWNhdXNlIHN1YnN0cmluZyBlbmQgaXMgZXhjbHVzaXZlXG4gICAgICAgICAgICBpZiAoaSA8IGVuZFJvdykge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkVGV4dCArPSAnXFxuJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRUZXh0O1xuICAgIH1cbiAgICBkZWxldGVTZWxlY3RlZFJhbmdlKHByZXNlcnZlU2VsZWN0aW9uID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvblN0YXJ0IHx8ICF0aGlzLnNlbGVjdGlvbkVuZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnRSb3cgPSBNYXRoLm1pbih0aGlzLnNlbGVjdGlvblN0YXJ0LnNlcUluZGV4LCB0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCk7XG4gICAgICAgIGNvbnN0IGVuZFJvdyA9IE1hdGgubWF4KHRoaXMuc2VsZWN0aW9uU3RhcnQuc2VxSW5kZXgsIHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4KTtcbiAgICAgICAgY29uc3Qgc3RhcnRDb2wgPSBNYXRoLm1pbih0aGlzLnNlbGVjdGlvblN0YXJ0LnBvcywgdGhpcy5zZWxlY3Rpb25FbmQucG9zKTtcbiAgICAgICAgY29uc3QgZW5kQ29sID0gTWF0aC5tYXgodGhpcy5zZWxlY3Rpb25TdGFydC5wb3MsIHRoaXMuc2VsZWN0aW9uRW5kLnBvcyk7XG4gICAgICAgIGNvbnN0IG5ld0N1cnNvclBvcyA9IHsgc2VxSW5kZXg6IHN0YXJ0Um93LCBwb3M6IHN0YXJ0Q29sIH07XG4gICAgICAgIC8vIFN0b3JlIHRoZSBvcmlnaW5hbCBzZWxlY3Rpb24gaWYgd2Ugd2FudCB0byBwcmVzZXJ2ZSBpdFxuICAgICAgICBjb25zdCBvcmlnaW5hbFNlbGVjdGlvblN0YXJ0ID0gcHJlc2VydmVTZWxlY3Rpb24gPyB7IC4uLnRoaXMuc2VsZWN0aW9uU3RhcnQgfSA6IG51bGw7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsU2VsZWN0aW9uRW5kID0gcHJlc2VydmVTZWxlY3Rpb24gPyB7IC4uLnRoaXMuc2VsZWN0aW9uRW5kIH0gOiBudWxsO1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRSb3c7IGkgPD0gZW5kUm93OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU2VxdWVuY2UgPSB0aGlzLnNlcXVlbmNlc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1NlcXVlbmNlID0gb3JpZ2luYWxTZXF1ZW5jZS5zbGljZSgwLCBzdGFydENvbCkgKyBvcmlnaW5hbFNlcXVlbmNlLnNsaWNlKGVuZENvbCArIDEpO1xuICAgICAgICAgICAgdGhpcy5zZXF1ZW5jZXNbaV0gPSBuZXdTZXF1ZW5jZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1heFNlcXVlbmNlTGVuZ3RoID0gTWF0aC5tYXgoLi4udGhpcy5zZXF1ZW5jZXMubWFwKHMgPT4gcy5sZW5ndGgpKTtcbiAgICAgICAgaWYgKHByZXNlcnZlU2VsZWN0aW9uICYmIG9yaWdpbmFsU2VsZWN0aW9uU3RhcnQgJiYgb3JpZ2luYWxTZWxlY3Rpb25FbmQpIHtcbiAgICAgICAgICAgIC8vIEFkanVzdCB0aGUgc2VsZWN0aW9uIGJvdW5kcyBhZnRlciBkZWxldGlvblxuICAgICAgICAgICAgY29uc3QgZGVsZXRlZExlbmd0aCA9IGVuZENvbCAtIHN0YXJ0Q29sICsgMTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSBvcmlnaW5hbFNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSB7XG4gICAgICAgICAgICAgICAgc2VxSW5kZXg6IG9yaWdpbmFsU2VsZWN0aW9uRW5kLnNlcUluZGV4LFxuICAgICAgICAgICAgICAgIHBvczogTWF0aC5tYXgoc3RhcnRDb2wsIG9yaWdpbmFsU2VsZWN0aW9uRW5kLnBvcyAtIGRlbGV0ZWRMZW5ndGgpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gS2VlcCB0aGUgY3Vyc29yIHBvc2l0aW9uIGJ1dCBjbGVhciB0aGUgcmFuZ2Ugc2VsZWN0aW9uXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0gbmV3Q3Vyc29yUG9zO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSBuZXdDdXJzb3JQb3M7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgICAgIHJldHVybiBuZXdDdXJzb3JQb3M7XG4gICAgfVxuICAgIGJhY2tzcGFjZVNlbGVjdGlvbigpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvblN0YXJ0IHx8ICF0aGlzLnNlbGVjdGlvbkVuZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0Um93ID0gTWF0aC5taW4odGhpcy5zZWxlY3Rpb25TdGFydC5zZXFJbmRleCwgdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXgpO1xuICAgICAgICBjb25zdCBlbmRSb3cgPSBNYXRoLm1heCh0aGlzLnNlbGVjdGlvblN0YXJ0LnNlcUluZGV4LCB0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCk7XG4gICAgICAgIGNvbnN0IHN0YXJ0Q29sID0gTWF0aC5taW4odGhpcy5zZWxlY3Rpb25TdGFydC5wb3MsIHRoaXMuc2VsZWN0aW9uRW5kLnBvcyk7XG4gICAgICAgIC8vIFN0b3JlIHRoZSBvcmlnaW5hbCBzZWxlY3Rpb24gdG8gcHJlc2VydmUgaXRcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxTZWxlY3Rpb25TdGFydCA9IHsgLi4udGhpcy5zZWxlY3Rpb25TdGFydCB9O1xuICAgICAgICBjb25zdCBvcmlnaW5hbFNlbGVjdGlvbkVuZCA9IHsgLi4udGhpcy5zZWxlY3Rpb25FbmQgfTtcbiAgICAgICAgLy8gSWYgd2UncmUgYXQgdGhlIGJlZ2lubmluZyBvZiBzZXF1ZW5jZXMsIHRoZXJlJ3Mgbm90aGluZyB0byBiYWNrc3BhY2VcbiAgICAgICAgaWYgKHN0YXJ0Q29sID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBjaGFyYWN0ZXIgaW1tZWRpYXRlbHkgdG8gdGhlIGxlZnQgb2YgdGhlIHNlbGVjdGlvblxuICAgICAgICBjb25zdCBiYWNrc3BhY2VQb3MgPSBzdGFydENvbCAtIDE7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydFJvdzsgaSA8PSBlbmRSb3c7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTZXF1ZW5jZSA9IHRoaXMuc2VxdWVuY2VzW2ldO1xuICAgICAgICAgICAgaWYgKGJhY2tzcGFjZVBvcyA8IG9yaWdpbmFsU2VxdWVuY2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U2VxdWVuY2UgPSBvcmlnaW5hbFNlcXVlbmNlLnNsaWNlKDAsIGJhY2tzcGFjZVBvcykgKyBvcmlnaW5hbFNlcXVlbmNlLnNsaWNlKGJhY2tzcGFjZVBvcyArIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VxdWVuY2VzW2ldID0gbmV3U2VxdWVuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXhTZXF1ZW5jZUxlbmd0aCA9IE1hdGgubWF4KC4uLnRoaXMuc2VxdWVuY2VzLm1hcChzID0+IHMubGVuZ3RoKSk7XG4gICAgICAgIC8vIEFkanVzdCB0aGUgc2VsZWN0aW9uIHRvIGFjY291bnQgZm9yIHRoZSByZW1vdmVkIGNoYXJhY3RlciAoc2hpZnQgbGVmdCBieSAxKVxuICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0ge1xuICAgICAgICAgICAgc2VxSW5kZXg6IG9yaWdpbmFsU2VsZWN0aW9uU3RhcnQuc2VxSW5kZXgsXG4gICAgICAgICAgICBwb3M6IG9yaWdpbmFsU2VsZWN0aW9uU3RhcnQucG9zIC0gMVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IHtcbiAgICAgICAgICAgIHNlcUluZGV4OiBvcmlnaW5hbFNlbGVjdGlvbkVuZC5zZXFJbmRleCxcbiAgICAgICAgICAgIHBvczogb3JpZ2luYWxTZWxlY3Rpb25FbmQucG9zIC0gMVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICB9XG4gICAgZGVsZXRlQ2hhcmFjdGVyKGlzQmFja3NwYWNlKSB7XG4gICAgICAgIGlmICghdGhpcy5zZWxlY3Rpb25TdGFydCB8fCAhdGhpcy5zZWxlY3Rpb25FbmQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGFydFJvdyA9IE1hdGgubWluKHRoaXMuc2VsZWN0aW9uU3RhcnQuc2VxSW5kZXgsIHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4KTtcbiAgICAgICAgY29uc3QgZW5kUm93ID0gTWF0aC5tYXgodGhpcy5zZWxlY3Rpb25TdGFydC5zZXFJbmRleCwgdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXgpO1xuICAgICAgICBjb25zdCBzdGFydENvbCA9IE1hdGgubWluKHRoaXMuc2VsZWN0aW9uU3RhcnQucG9zLCB0aGlzLnNlbGVjdGlvbkVuZC5wb3MpO1xuICAgICAgICBjb25zdCBlbmRDb2wgPSBNYXRoLm1heCh0aGlzLnNlbGVjdGlvblN0YXJ0LnBvcywgdGhpcy5zZWxlY3Rpb25FbmQucG9zKTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSBhIG11bHRpLWNlbGwgc2VsZWN0aW9uXG4gICAgICAgIGNvbnN0IGhhc011bHRpQ2VsbFNlbGVjdGlvbiA9IChzdGFydFJvdyAhPT0gZW5kUm93KSB8fCAoc3RhcnRDb2wgIT09IGVuZENvbCk7XG4gICAgICAgIGlmIChoYXNNdWx0aUNlbGxTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIGlmIChpc0JhY2tzcGFjZSkge1xuICAgICAgICAgICAgICAgIC8vIEJhY2tzcGFjZTogUmVtb3ZlIGNoYXJhY3RlcnMgdG8gdGhlIGxlZnQgb2Ygc2VsZWN0aW9uLCBwcmVzZXJ2ZSBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICB0aGlzLmJhY2tzcGFjZVNlbGVjdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gRGVsZXRlIGtleTogUmVwbGFjZSBzZWxlY3Rpb24gd2l0aCBkYXNoZXMgYW5kIHByZXNlcnZlIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgIHRoaXMuZmlsbFNlbGVjdGlvbignLScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZvciBzaW5nbGUgY2VsbCBjdXJzb3IgcG9zaXRpb24sIGRlbGV0ZSBvbmUgY2hhcmFjdGVyXG4gICAgICAgIGxldCBkZWxldGVQb3MgPSBzdGFydENvbDtcbiAgICAgICAgaWYgKGlzQmFja3NwYWNlICYmIGRlbGV0ZVBvcyA+IDApIHtcbiAgICAgICAgICAgIGRlbGV0ZVBvcy0tO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydFJvdzsgaSA8PSBlbmRSb3c7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTZXF1ZW5jZSA9IHRoaXMuc2VxdWVuY2VzW2ldO1xuICAgICAgICAgICAgaWYgKGRlbGV0ZVBvcyA8IG9yaWdpbmFsU2VxdWVuY2UubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U2VxdWVuY2UgPSBvcmlnaW5hbFNlcXVlbmNlLnNsaWNlKDAsIGRlbGV0ZVBvcykgKyBvcmlnaW5hbFNlcXVlbmNlLnNsaWNlKGRlbGV0ZVBvcyArIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VxdWVuY2VzW2ldID0gbmV3U2VxdWVuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXhTZXF1ZW5jZUxlbmd0aCA9IE1hdGgubWF4KC4uLnRoaXMuc2VxdWVuY2VzLm1hcChzID0+IHMubGVuZ3RoKSk7XG4gICAgICAgIC8vIFBvc2l0aW9uIGN1cnNvciBhdCB0aGUgZGVsZXRpb24gcG9pbnRcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHsgc2VxSW5kZXg6IHN0YXJ0Um93LCBwb3M6IGRlbGV0ZVBvcyB9O1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IHRoaXMuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgIH1cbiAgICBpbnNlcnRDaGFyYWN0ZXIoY2hhcikge1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uU3RhcnQgfHwgIXRoaXMuc2VsZWN0aW9uRW5kKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIG11bHRpLWNlbGwgc2VsZWN0aW9uLCByZXBsYWNlIGl0IHdpdGggdGhlIGNoYXJhY3RlciBpbnN0ZWFkIG9mIGluc2VydGluZ1xuICAgICAgICBjb25zdCBzdGFydFJvdyA9IE1hdGgubWluKHRoaXMuc2VsZWN0aW9uU3RhcnQuc2VxSW5kZXgsIHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4KTtcbiAgICAgICAgY29uc3QgZW5kUm93ID0gTWF0aC5tYXgodGhpcy5zZWxlY3Rpb25TdGFydC5zZXFJbmRleCwgdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXgpO1xuICAgICAgICBjb25zdCBzdGFydENvbCA9IE1hdGgubWluKHRoaXMuc2VsZWN0aW9uU3RhcnQucG9zLCB0aGlzLnNlbGVjdGlvbkVuZC5wb3MpO1xuICAgICAgICBjb25zdCBlbmRDb2wgPSBNYXRoLm1heCh0aGlzLnNlbGVjdGlvblN0YXJ0LnBvcywgdGhpcy5zZWxlY3Rpb25FbmQucG9zKTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSBhIG11bHRpLWNlbGwgc2VsZWN0aW9uXG4gICAgICAgIGNvbnN0IGhhc011bHRpQ2VsbFNlbGVjdGlvbiA9IChzdGFydFJvdyAhPT0gZW5kUm93KSB8fCAoc3RhcnRDb2wgIT09IGVuZENvbCk7XG4gICAgICAgIGlmIChoYXNNdWx0aUNlbGxTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIC8vIEZvciBtdWx0aS1jZWxsIHNlbGVjdGlvbnMsIGZpbGwgdGhlIHNlbGVjdGlvbiBpbnN0ZWFkIG9mIGluc2VydGluZ1xuICAgICAgICAgICAgdGhpcy5maWxsU2VsZWN0aW9uKGNoYXIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZvciBzaW5nbGUgY2VsbCBjdXJzb3IgcG9zaXRpb24sIGluc2VydCB0aGUgY2hhcmFjdGVyXG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydFJvdzsgaSA8PSBlbmRSb3c7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTZXF1ZW5jZSA9IHRoaXMuc2VxdWVuY2VzW2ldO1xuICAgICAgICAgICAgY29uc3QgbmV3U2VxdWVuY2UgPSBvcmlnaW5hbFNlcXVlbmNlLnNsaWNlKDAsIHN0YXJ0Q29sKSArIGNoYXIgKyBvcmlnaW5hbFNlcXVlbmNlLnNsaWNlKHN0YXJ0Q29sKTtcbiAgICAgICAgICAgIHRoaXMuc2VxdWVuY2VzW2ldID0gbmV3U2VxdWVuY2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXhTZXF1ZW5jZUxlbmd0aCA9IE1hdGgubWF4KC4uLnRoaXMuc2VxdWVuY2VzLm1hcChzID0+IHMubGVuZ3RoKSk7XG4gICAgICAgIC8vIE1vdmUgY3Vyc29yIHRvIGFmdGVyIHRoZSBpbnNlcnRlZCBjaGFyYWN0ZXJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHsgc2VxSW5kZXg6IHN0YXJ0Um93LCBwb3M6IHN0YXJ0Q29sICsgMSB9O1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IHRoaXMuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgIH1cbiAgICBmaWxsU2VsZWN0aW9uKGNoYXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvblN0YXJ0IHx8ICF0aGlzLnNlbGVjdGlvbkVuZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0Um93ID0gTWF0aC5taW4odGhpcy5zZWxlY3Rpb25TdGFydC5zZXFJbmRleCwgdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXgpO1xuICAgICAgICBjb25zdCBlbmRSb3cgPSBNYXRoLm1heCh0aGlzLnNlbGVjdGlvblN0YXJ0LnNlcUluZGV4LCB0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCk7XG4gICAgICAgIGNvbnN0IHN0YXJ0Q29sID0gTWF0aC5taW4odGhpcy5zZWxlY3Rpb25TdGFydC5wb3MsIHRoaXMuc2VsZWN0aW9uRW5kLnBvcyk7XG4gICAgICAgIGNvbnN0IGVuZENvbCA9IE1hdGgubWF4KHRoaXMuc2VsZWN0aW9uU3RhcnQucG9zLCB0aGlzLnNlbGVjdGlvbkVuZC5wb3MpO1xuICAgICAgICAvLyBTdG9yZSB0aGUgb3JpZ2luYWwgc2VsZWN0aW9uIHRvIHByZXNlcnZlIGl0XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsU2VsZWN0aW9uU3RhcnQgPSB7IC4uLnRoaXMuc2VsZWN0aW9uU3RhcnQgfTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxTZWxlY3Rpb25FbmQgPSB7IC4uLnRoaXMuc2VsZWN0aW9uRW5kIH07XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydFJvdzsgaSA8PSBlbmRSb3c7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTZXF1ZW5jZSA9IHRoaXMuc2VxdWVuY2VzW2ldO1xuICAgICAgICAgICAgbGV0IG5ld1NlcXVlbmNlQXJyYXkgPSBvcmlnaW5hbFNlcXVlbmNlLnNwbGl0KCcnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBzdGFydENvbDsgaiA8PSBlbmRDb2w7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChqIDwgbmV3U2VxdWVuY2VBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3U2VxdWVuY2VBcnJheVtqXSA9IGNoYXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXF1ZW5jZXNbaV0gPSBuZXdTZXF1ZW5jZUFycmF5LmpvaW4oJycpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWF4U2VxdWVuY2VMZW5ndGggPSBNYXRoLm1heCguLi50aGlzLnNlcXVlbmNlcy5tYXAocyA9PiBzLmxlbmd0aCkpO1xuICAgICAgICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBzZWxlY3Rpb24gdG8gcHJlc2VydmUgaXRcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IG9yaWdpbmFsU2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gb3JpZ2luYWxTZWxlY3Rpb25FbmQ7XG4gICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgIH1cbiAgICBpbnNlcnRDaGFyYWN0ZXJXaXRoU2hpZnQoY2hhcikge1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uU3RhcnQgfHwgIXRoaXMuc2VsZWN0aW9uRW5kKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnRSb3cgPSBNYXRoLm1pbih0aGlzLnNlbGVjdGlvblN0YXJ0LnNlcUluZGV4LCB0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCk7XG4gICAgICAgIGNvbnN0IGVuZFJvdyA9IE1hdGgubWF4KHRoaXMuc2VsZWN0aW9uU3RhcnQuc2VxSW5kZXgsIHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4KTtcbiAgICAgICAgY29uc3Qgc3RhcnRDb2wgPSBNYXRoLm1pbih0aGlzLnNlbGVjdGlvblN0YXJ0LnBvcywgdGhpcy5zZWxlY3Rpb25FbmQucG9zKTtcbiAgICAgICAgLy8gU3RvcmUgdGhlIG9yaWdpbmFsIHNlbGVjdGlvbiB0byBwcmVzZXJ2ZSBpdCBhZnRlciBpbnNlcnRpb25cbiAgICAgICAgY29uc3Qgb3JpZ2luYWxTZWxlY3Rpb25TdGFydCA9IHsgLi4udGhpcy5zZWxlY3Rpb25TdGFydCB9O1xuICAgICAgICBjb25zdCBvcmlnaW5hbFNlbGVjdGlvbkVuZCA9IHsgLi4udGhpcy5zZWxlY3Rpb25FbmQgfTtcbiAgICAgICAgLy8gSW5zZXJ0IGNoYXJhY3RlciBhdCB0aGUgc3RhcnQgcG9zaXRpb24gYW5kIHNoaWZ0IGV2ZXJ5dGhpbmcgcmlnaHRcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0Um93OyBpIDw9IGVuZFJvdzsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFNlcXVlbmNlID0gdGhpcy5zZXF1ZW5jZXNbaV07XG4gICAgICAgICAgICBjb25zdCBuZXdTZXF1ZW5jZSA9IG9yaWdpbmFsU2VxdWVuY2Uuc2xpY2UoMCwgc3RhcnRDb2wpICsgY2hhciArIG9yaWdpbmFsU2VxdWVuY2Uuc2xpY2Uoc3RhcnRDb2wpO1xuICAgICAgICAgICAgdGhpcy5zZXF1ZW5jZXNbaV0gPSBuZXdTZXF1ZW5jZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1heFNlcXVlbmNlTGVuZ3RoID0gTWF0aC5tYXgoLi4udGhpcy5zZXF1ZW5jZXMubWFwKHMgPT4gcy5sZW5ndGgpKTtcbiAgICAgICAgLy8gQWRqdXN0IHNlbGVjdGlvbiB0byBhY2NvdW50IGZvciB0aGUgaW5zZXJ0ZWQgY2hhcmFjdGVyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSB7XG4gICAgICAgICAgICBzZXFJbmRleDogb3JpZ2luYWxTZWxlY3Rpb25TdGFydC5zZXFJbmRleCxcbiAgICAgICAgICAgIHBvczogb3JpZ2luYWxTZWxlY3Rpb25TdGFydC5wb3MgKyAxXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0ge1xuICAgICAgICAgICAgc2VxSW5kZXg6IG9yaWdpbmFsU2VsZWN0aW9uRW5kLnNlcUluZGV4LFxuICAgICAgICAgICAgcG9zOiBvcmlnaW5hbFNlbGVjdGlvbkVuZC5wb3MgKyAxXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgIH1cbiAgICBlbnN1cmVTZWxlY3Rpb24oKSB7XG4gICAgICAgIC8vIEluaXRpYWxpemUgc2VsZWN0aW9uIGlmIG5vdCBhbHJlYWR5IHNldCAoZm9yIGtleWJvYXJkIG5hdmlnYXRpb24gd2l0aG91dCBtb3VzZSBjbGljaylcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvblN0YXJ0ICYmIHRoaXMuc2VxdWVuY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSB7IHNlcUluZGV4OiAwLCBwb3M6IDAgfTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0geyAuLi50aGlzLnNlbGVjdGlvblN0YXJ0IH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIC8vIEVuc3VyZSB3ZSBoYXZlIGEgdmFsaWQgc2VsZWN0aW9uIGZvciBrZXlib2FyZCBuYXZpZ2F0aW9uXG4gICAgICAgIHRoaXMuZW5zdXJlU2VsZWN0aW9uKCk7XG4gICAgICAgIGlmICghdGhpcy5zZWxlY3Rpb25TdGFydClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpID09PSAnYycpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVGV4dCA9IHRoaXMuZ2V0U2VsZWN0ZWRUZXh0KCk7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChzZWxlY3RlZFRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5LnRvTG93ZXJDYXNlKCkgPT09ICd2Jykge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC5yZWFkVGV4dCgpLnRoZW4odGV4dCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0ICYmIHRoaXMuc2VsZWN0aW9uU3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgc2VxSW5kZXggfSA9IHRoaXMuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IE1hdGgubWluKHRoaXMuc2VsZWN0aW9uU3RhcnQucG9zLCB0aGlzLnNlbGVjdGlvbkVuZC5wb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5kID0gTWF0aC5tYXgodGhpcy5zZWxlY3Rpb25TdGFydC5wb3MsIHRoaXMuc2VsZWN0aW9uRW5kLnBvcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFNlcXVlbmNlID0gdGhpcy5zZXF1ZW5jZXNbc2VxSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U2VxdWVuY2UgPSBvcmlnaW5hbFNlcXVlbmNlLnNsaWNlKDAsIHN0YXJ0KSArIHRleHQgKyBvcmlnaW5hbFNlcXVlbmNlLnNsaWNlKGVuZCArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXF1ZW5jZXNbc2VxSW5kZXhdID0gbmV3U2VxdWVuY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0geyBzZXFJbmRleCwgcG9zOiBzdGFydCArIHRleHQubGVuZ3RoIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IHRoaXMuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1heFNlcXVlbmNlTGVuZ3RoID0gTWF0aC5tYXgoLi4udGhpcy5zZXF1ZW5jZXMubWFwKHMgPT4gcy5sZW5ndGgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc2VxSW5kZXgsIHBvcyB9ID0gdGhpcy5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgY29uc3QgaXVwYWNDaGFyYWN0ZXJzID0gJ0FDR1RVUllTV0tNQkRIVk4tJztcbiAgICAgICAgaWYgKGl1cGFjQ2hhcmFjdGVycy5pbmNsdWRlcyhldmVudC5rZXkudG9VcHBlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb25TdGFydCAmJiB0aGlzLnNlbGVjdGlvbkVuZCAmJiAodGhpcy5zZWxlY3Rpb25TdGFydC5wb3MgIT09IHRoaXMuc2VsZWN0aW9uRW5kLnBvcyB8fCB0aGlzLnNlbGVjdGlvblN0YXJ0LnNlcUluZGV4ICE9PSB0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCkpIHsgLy8gQ2hlY2sgaWYgYW55IHNlbGVjdGlvbiBleGlzdHNcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxTZWxlY3Rpb24oZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRDaGFyYWN0ZXIoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJyAnKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy8gU3BhY2ViYXI6IEluc2VydCBkYXNoIGFuZCBzaGlmdCBjaGFyYWN0ZXJzIChpbnNlcnQgYWN0aW9uKVxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uU3RhcnQgJiYgdGhpcy5zZWxlY3Rpb25FbmQgJiYgKHRoaXMuc2VsZWN0aW9uU3RhcnQucG9zICE9PSB0aGlzLnNlbGVjdGlvbkVuZC5wb3MgfHwgdGhpcy5zZWxlY3Rpb25TdGFydC5zZXFJbmRleCAhPT0gdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgLy8gTXVsdGktY2VsbCBzZWxlY3Rpb246IGluc2VydCBhdCBzdGFydCBhbmQgc2hpZnQgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRDaGFyYWN0ZXJXaXRoU2hpZnQoJy0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFNpbmdsZSBjdXJzb3I6IHJlZ3VsYXIgaW5zZXJ0XG4gICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRDaGFyYWN0ZXIoJy0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChldmVudC5rZXkgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQb3MgPSB0aGlzLmZpbmRQcmV2aW91c1dvcmQoc2VxSW5kZXgsIHBvcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHsgc2VxSW5kZXgsIHBvczogbmV3UG9zIH07XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSB0aGlzLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAvLyBFbnN1cmUgc2VsZWN0aW9uRW5kIGlzIGluaXRpYWxpemVkIGlmIG5vdCBhbHJlYWR5XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvbkVuZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IHsgLi4udGhpcy5zZWxlY3Rpb25TdGFydCB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBFeHRlbmQgc2VsZWN0aW9uIGxlZnRcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb25FbmQucG9zID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZC5wb3MtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4LS07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kLnBvcyA9IHRoaXMuc2VxdWVuY2VzW3RoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4XS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTW92ZSBjdXJzb3IgbGVmdCwgY2xlYXIgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgaWYgKHBvcyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHsgc2VxSW5kZXgsIHBvczogcG9zIC0gMSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzZXFJbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHsgc2VxSW5kZXg6IHNlcUluZGV4IC0gMSwgcG9zOiB0aGlzLnNlcXVlbmNlc1tzZXFJbmRleCAtIDFdLmxlbmd0aCB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IHRoaXMuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChldmVudC5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChldmVudC5jdHJsS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UG9zID0gdGhpcy5maW5kTmV4dFdvcmQoc2VxSW5kZXgsIHBvcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHsgc2VxSW5kZXgsIHBvczogbmV3UG9zIH07XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSB0aGlzLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAvLyBFbnN1cmUgc2VsZWN0aW9uRW5kIGlzIGluaXRpYWxpemVkIGlmIG5vdCBhbHJlYWR5XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvbkVuZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IHsgLi4udGhpcy5zZWxlY3Rpb25TdGFydCB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBFeHRlbmQgc2VsZWN0aW9uIHJpZ2h0XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uRW5kLnBvcyA8IHRoaXMuc2VxdWVuY2VzW3RoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4XS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQucG9zKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4IDwgdGhpcy5zZXF1ZW5jZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZC5wb3MgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1vdmUgY3Vyc29yIHJpZ2h0LCBjbGVhciBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICBpZiAocG9zIDwgdGhpcy5zZXF1ZW5jZXNbc2VxSW5kZXhdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0geyBzZXFJbmRleCwgcG9zOiBwb3MgKyAxIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlcUluZGV4IDwgdGhpcy5zZXF1ZW5jZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0geyBzZXFJbmRleDogc2VxSW5kZXggKyAxLCBwb3M6IDAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSB0aGlzLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSB7IHNlcUluZGV4OiAwLCBwb3M6IHBvcyB9O1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gdGhpcy5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgLy8gRW5zdXJlIHNlbGVjdGlvbkVuZCBpcyBpbml0aWFsaXplZCBpZiBub3QgYWxyZWFkeVxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zZWxlY3Rpb25FbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSB7IC4uLnRoaXMuc2VsZWN0aW9uU3RhcnQgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gRXh0ZW5kIHNlbGVjdGlvbiB1cFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXgtLTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQucG9zID0gTWF0aC5taW4odGhpcy5zZWxlY3Rpb25FbmQucG9zLCB0aGlzLnNlcXVlbmNlc1t0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleF0ubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBNb3ZlIGN1cnNvciB1cCwgY2xlYXIgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgaWYgKHNlcUluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0geyBzZXFJbmRleDogc2VxSW5kZXggLSAxLCBwb3M6IE1hdGgubWluKHBvcywgdGhpcy5zZXF1ZW5jZXNbc2VxSW5kZXggLSAxXS5sZW5ndGgpIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0geyBzZXFJbmRleDogMCwgcG9zOiAwIH07IC8vIE1vdmUgdG8gc3RhcnQgb2YgZmlyc3Qgc2VxdWVuY2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSB0aGlzLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChldmVudC5jdHJsS2V5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHsgc2VxSW5kZXg6IHRoaXMuc2VxdWVuY2VzLmxlbmd0aCAtIDEsIHBvczogcG9zIH07XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSB0aGlzLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAvLyBFbnN1cmUgc2VsZWN0aW9uRW5kIGlzIGluaXRpYWxpemVkIGlmIG5vdCBhbHJlYWR5XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvbkVuZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IHsgLi4udGhpcy5zZWxlY3Rpb25TdGFydCB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBFeHRlbmQgc2VsZWN0aW9uIGRvd25cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXggPCB0aGlzLnNlcXVlbmNlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kLnBvcyA9IE1hdGgubWluKHRoaXMuc2VsZWN0aW9uRW5kLnBvcywgdGhpcy5zZXF1ZW5jZXNbdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXhdLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTW92ZSBjdXJzb3IgZG93biwgY2xlYXIgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgaWYgKHNlcUluZGV4IDwgdGhpcy5zZXF1ZW5jZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0geyBzZXFJbmRleDogc2VxSW5kZXggKyAxLCBwb3M6IE1hdGgubWluKHBvcywgdGhpcy5zZXF1ZW5jZXNbc2VxSW5kZXggKyAxXS5sZW5ndGgpIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0U2VxSW5kZXggPSB0aGlzLnNlcXVlbmNlcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0geyBzZXFJbmRleDogbGFzdFNlcUluZGV4LCBwb3M6IHRoaXMuc2VxdWVuY2VzW2xhc3RTZXFJbmRleF0ubGVuZ3RoIH07IC8vIE1vdmUgdG8gZW5kIG9mIGxhc3Qgc2VxdWVuY2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSB0aGlzLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnQmFja3NwYWNlJykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlQ2hhcmFjdGVyKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ0RlbGV0ZScpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUNoYXJhY3RlcihmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmluZE5leHRXb3JkKHNlcUluZGV4LCBwb3MpIHtcbiAgICAgICAgY29uc3Qgc2VxdWVuY2UgPSB0aGlzLnNlcXVlbmNlc1tzZXFJbmRleF07XG4gICAgICAgIGxldCBpbldvcmQgPSAhdGhpcy5pc0dhcChzZXF1ZW5jZVtwb3NdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHBvczsgaSA8IHNlcXVlbmNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaW5Xb3JkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNHYXAoc2VxdWVuY2VbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGluV29yZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0dhcChzZXF1ZW5jZVtpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXF1ZW5jZS5sZW5ndGg7XG4gICAgfVxuICAgIGZpbmRQcmV2aW91c1dvcmQoc2VxSW5kZXgsIHBvcykge1xuICAgICAgICBjb25zdCBzZXF1ZW5jZSA9IHRoaXMuc2VxdWVuY2VzW3NlcUluZGV4XTtcbiAgICAgICAgbGV0IGluV29yZCA9IHBvcyA+IDAgJiYgIXRoaXMuaXNHYXAoc2VxdWVuY2VbcG9zIC0gMV0pO1xuICAgICAgICBmb3IgKGxldCBpID0gcG9zIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGlmIChpbldvcmQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0dhcChzZXF1ZW5jZVtpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkgKyAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0dhcChzZXF1ZW5jZVtpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5Xb3JkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGlzR2FwKGNoYXIpIHtcbiAgICAgICAgcmV0dXJuIGNoYXIgPT09ICctJztcbiAgICB9XG4gICAgb25XaGVlbChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNjcm9sbFggKz0gZXZlbnQuZGVsdGFYO1xuICAgICAgICB0aGlzLnNjcm9sbFkgKz0gZXZlbnQuZGVsdGFZO1xuICAgICAgICBjb25zdCBtYXhTY3JvbGxYID0gdGhpcy5tYXhTZXF1ZW5jZUxlbmd0aCAqIHRoaXMuYmxvY2tXaWR0aCAtIHRoaXMuc2VxdWVuY2VDYW52YXMud2lkdGg7XG4gICAgICAgIGNvbnN0IG1heFNjcm9sbFkgPSB0aGlzLnNlcXVlbmNlcy5sZW5ndGggKiB0aGlzLmJsb2NrSGVpZ2h0IC0gdGhpcy5zZXF1ZW5jZUNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuc2Nyb2xsWCA9IE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMuc2Nyb2xsWCwgbWF4U2Nyb2xsWCkpO1xuICAgICAgICB0aGlzLnNjcm9sbFkgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLnNjcm9sbFksIG1heFNjcm9sbFkpKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgfVxuICAgIHJlcXVlc3RSZWRyYXcoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUmVkcmF3U2NoZWR1bGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1JlZHJhd1NjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgICAgIHRoaXMuaXNSZWRyYXdTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlzTnVjbGVvdGlkZVNlbGVjdGVkKHNlcUluZGV4LCBwb3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvblN0YXJ0IHx8ICF0aGlzLnNlbGVjdGlvbkVuZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0Um93ID0gTWF0aC5taW4odGhpcy5zZWxlY3Rpb25TdGFydC5zZXFJbmRleCwgdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXgpO1xuICAgICAgICBjb25zdCBlbmRSb3cgPSBNYXRoLm1heCh0aGlzLnNlbGVjdGlvblN0YXJ0LnNlcUluZGV4LCB0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCk7XG4gICAgICAgIGNvbnN0IHN0YXJ0Q29sID0gTWF0aC5taW4odGhpcy5zZWxlY3Rpb25TdGFydC5wb3MsIHRoaXMuc2VsZWN0aW9uRW5kLnBvcyk7XG4gICAgICAgIGNvbnN0IGVuZENvbCA9IE1hdGgubWF4KHRoaXMuc2VsZWN0aW9uU3RhcnQucG9zLCB0aGlzLnNlbGVjdGlvbkVuZC5wb3MpO1xuICAgICAgICByZXR1cm4gc2VxSW5kZXggPj0gc3RhcnRSb3cgJiYgc2VxSW5kZXggPD0gZW5kUm93ICYmIHBvcyA+PSBzdGFydENvbCAmJiBwb3MgPD0gZW5kQ29sO1xuICAgIH1cbiAgICBpc1NlYXJjaFJlc3VsdChzZXFJbmRleCwgcG9zKSB7XG4gICAgICAgIGlmICghdGhpcy5zZWFyY2hSZXN1bHRzIHx8ICF0aGlzLnNlYXJjaFJlc3VsdHNbc2VxSW5kZXhdIHx8IHRoaXMuc2VhcmNoUXVlcnlMZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IHN0YXJ0SW5kZXggb2YgdGhpcy5zZWFyY2hSZXN1bHRzW3NlcUluZGV4XSkge1xuICAgICAgICAgICAgaWYgKHBvcyA+PSBzdGFydEluZGV4ICYmIHBvcyA8IHN0YXJ0SW5kZXggKyB0aGlzLnNlYXJjaFF1ZXJ5TGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmRyYXdTZXF1ZW5jZXMoKTtcbiAgICAgICAgdGhpcy5kcmF3TmFtZXMoKTtcbiAgICAgICAgdGhpcy5kcmF3UnVsZXIoKTtcbiAgICAgICAgdGhpcy5kcmF3U2Nyb2xsYmFycygpO1xuICAgIH1cbiAgICBkcmF3U2Nyb2xsYmFycygpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5zZXFDdHg7XG4gICAgICAgIGNvbnN0IGNhbnZhc1dpZHRoID0gdGhpcy5zZXF1ZW5jZUNhbnZhcy53aWR0aDtcbiAgICAgICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gdGhpcy5zZXF1ZW5jZUNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIC8vIEhvcml6b250YWwgU2Nyb2xsYmFyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IHRoaXMubWF4U2VxdWVuY2VMZW5ndGggKiB0aGlzLmJsb2NrV2lkdGg7XG4gICAgICAgIGlmIChjb250ZW50V2lkdGggPiBjYW52YXNXaWR0aCkge1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYmFyVHJhY2tXaWR0aCA9IGNhbnZhc1dpZHRoIC0gdGhpcy5zY3JvbGxiYXJXaWR0aDsgLy8gTGVhdmUgc3BhY2UgZm9yIHZlcnRpY2FsIHNjcm9sbGJhclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYmFyVGh1bWJXaWR0aCA9IE1hdGgubWF4KDUwLCBzY3JvbGxiYXJUcmFja1dpZHRoICogKGNhbnZhc1dpZHRoIC8gY29udGVudFdpZHRoKSk7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxiYXJUaHVtYlggPSAodGhpcy5zY3JvbGxYIC8gKGNvbnRlbnRXaWR0aCAtIGNhbnZhc1dpZHRoKSkgKiAoc2Nyb2xsYmFyVHJhY2tXaWR0aCAtIHNjcm9sbGJhclRodW1iV2lkdGgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2Nyb2xsYmFyVHJhY2tDb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCBjYW52YXNIZWlnaHQgLSB0aGlzLnNjcm9sbGJhcldpZHRoLCBzY3JvbGxiYXJUcmFja1dpZHRoLCB0aGlzLnNjcm9sbGJhcldpZHRoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLnNjcm9sbGJhckNvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHNjcm9sbGJhclRodW1iWCwgY2FudmFzSGVpZ2h0IC0gdGhpcy5zY3JvbGxiYXJXaWR0aCwgc2Nyb2xsYmFyVGh1bWJXaWR0aCwgdGhpcy5zY3JvbGxiYXJXaWR0aCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVmVydGljYWwgU2Nyb2xsYmFyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSB0aGlzLnNlcXVlbmNlcy5sZW5ndGggKiB0aGlzLmJsb2NrSGVpZ2h0O1xuICAgICAgICBpZiAoY29udGVudEhlaWdodCA+IGNhbnZhc0hlaWdodCkge1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYmFyVHJhY2tIZWlnaHQgPSBjYW52YXNIZWlnaHQgLSB0aGlzLnNjcm9sbGJhcldpZHRoOyAvLyBMZWF2ZSBzcGFjZSBmb3IgaG9yaXpvbnRhbCBzY3JvbGxiYXJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGJhclRodW1iSGVpZ2h0ID0gTWF0aC5tYXgoNTAsIHNjcm9sbGJhclRyYWNrSGVpZ2h0ICogKGNhbnZhc0hlaWdodCAvIGNvbnRlbnRIZWlnaHQpKTtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGJhclRodW1iWSA9ICh0aGlzLnNjcm9sbFkgLyAoY29udGVudEhlaWdodCAtIGNhbnZhc0hlaWdodCkpICogKHNjcm9sbGJhclRyYWNrSGVpZ2h0IC0gc2Nyb2xsYmFyVGh1bWJIZWlnaHQpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2Nyb2xsYmFyVHJhY2tDb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdChjYW52YXNXaWR0aCAtIHRoaXMuc2Nyb2xsYmFyV2lkdGgsIDAsIHRoaXMuc2Nyb2xsYmFyV2lkdGgsIHNjcm9sbGJhclRyYWNrSGVpZ2h0KTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLnNjcm9sbGJhckNvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KGNhbnZhc1dpZHRoIC0gdGhpcy5zY3JvbGxiYXJXaWR0aCwgc2Nyb2xsYmFyVGh1bWJZLCB0aGlzLnNjcm9sbGJhcldpZHRoLCBzY3JvbGxiYXJUaHVtYkhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZHJhd1NlcXVlbmNlcygpIHtcbiAgICAgICAgdGhpcy5zZXFDdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuc2VxdWVuY2VDYW52YXMud2lkdGgsIHRoaXMuc2VxdWVuY2VDYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgY29uc3Qgc3RhcnRSb3cgPSBNYXRoLmZsb29yKHRoaXMuc2Nyb2xsWSAvIHRoaXMuYmxvY2tIZWlnaHQpO1xuICAgICAgICBjb25zdCBlbmRSb3cgPSBNYXRoLm1pbih0aGlzLnNlcXVlbmNlcy5sZW5ndGgsIHN0YXJ0Um93ICsgTWF0aC5jZWlsKHRoaXMuc2VxdWVuY2VDYW52YXMuaGVpZ2h0IC8gdGhpcy5ibG9ja0hlaWdodCkpO1xuICAgICAgICBjb25zdCBzdGFydENvbCA9IE1hdGguZmxvb3IodGhpcy5zY3JvbGxYIC8gdGhpcy5ibG9ja1dpZHRoKTtcbiAgICAgICAgY29uc3QgZW5kQ29sID0gTWF0aC5taW4odGhpcy5tYXhTZXF1ZW5jZUxlbmd0aCwgc3RhcnRDb2wgKyBNYXRoLmNlaWwodGhpcy5zZXF1ZW5jZUNhbnZhcy53aWR0aCAvIHRoaXMuYmxvY2tXaWR0aCkpO1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRSb3c7IGkgPCBlbmRSb3c7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc2VxdWVuY2UgPSB0aGlzLnNlcXVlbmNlc1tpXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBzdGFydENvbDsgaiA8IGVuZENvbDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IGogKiB0aGlzLmJsb2NrV2lkdGggLSB0aGlzLnNjcm9sbFg7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IGkgKiB0aGlzLmJsb2NrSGVpZ2h0IC0gdGhpcy5zY3JvbGxZO1xuICAgICAgICAgICAgICAgIGNvbnN0IG51Y2xlb3RpZGUgPSBzZXF1ZW5jZVtqXSB8fCAnJztcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFyVG9EcmF3ID0gdGhpcy5kaXNwbGF5TW9kZSA9PT0gJ251Y2xlb3RpZGUnID8gbnVjbGVvdGlkZSA6IHRoaXMudHJhbnNsYXRlZFNlcXVlbmNlc1tpXVtqXSB8fCAnJztcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvck1hcCA9IHRoaXMuZGlzcGxheU1vZGUgPT09ICdudWNsZW90aWRlJyA/IHRoaXMuY29sb3JzIDogdGhpcy5hbWlub0FjaWRDb2xvcnM7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3JJbmZvID0gY29sb3JNYXBbY2hhclRvRHJhdy50b1VwcGVyQ2FzZSgpXSB8fCB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyNGRkZGRkYnIH07IC8vIERlZmF1bHQgdG8gYmxhY2sgdGV4dCBvbiB3aGl0ZSBiYWNrZ3JvdW5kXG4gICAgICAgICAgICAgICAgdGhpcy5zZXFDdHguZmlsbFN0eWxlID0gY29sb3JJbmZvLmJhY2tncm91bmQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXFDdHguZmlsbFJlY3QoeCwgeSwgdGhpcy5ibG9ja1dpZHRoLCB0aGlzLmJsb2NrSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcUN0eC5zdHJva2VTdHlsZSA9ICcjREREREREJztcbiAgICAgICAgICAgICAgICB0aGlzLnNlcUN0eC5zdHJva2VSZWN0KHgsIHksIHRoaXMuYmxvY2tXaWR0aCwgdGhpcy5ibG9ja0hlaWdodCk7XG4gICAgICAgICAgICAgICAgLy8gSGlnaGxpZ2h0IHNlbGVjdGVkIHNlcXVlbmNlIG5hbWVzIChlbnRpcmUgcm93KVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkU2VxdWVuY2VOYW1lcy5oYXMoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXFDdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwgMjU1LCAwLCAwLjEpJzsgLy8gTGlnaHQgZ3JlZW4gb3ZlcmxheSBmb3Igc2VsZWN0ZWQgcm93c1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcUN0eC5maWxsUmVjdCh4LCB5LCB0aGlzLmJsb2NrV2lkdGgsIHRoaXMuYmxvY2tIZWlnaHQpOyAvLyBBcHBseSB0byBlYWNoIGJsb2NrIGluIHRoZSByb3dcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTZWFyY2hSZXN1bHQoaSwgaikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXFDdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LCAyNTUsIDAsIDAuNSknOyAvLyBTZW1pLXRyYW5zcGFyZW50IHllbGxvdyBmb3Igc2VhcmNoIHJlc3VsdHNcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXFDdHguZmlsbFJlY3QoeCwgeSwgdGhpcy5ibG9ja1dpZHRoLCB0aGlzLmJsb2NrSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNOdWNsZW90aWRlU2VsZWN0ZWQoaSwgaikpIHsgLy8gVGhpcyBtZXRob2QgbmFtZSBpcyBub3cgbWlzbGVhZGluZywgc2hvdWxkIGJlIGlzQ2hhclNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VxQ3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDI1NSwgMC4zKSc7IC8vIFNlbWktdHJhbnNwYXJlbnQgYmx1ZSBvdmVybGF5IGZvciBjZWxsIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcUN0eC5maWxsUmVjdCh4LCB5LCB0aGlzLmJsb2NrV2lkdGgsIHRoaXMuYmxvY2tIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcUN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXFDdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXFDdHguc3Ryb2tlUmVjdCh4LCB5LCB0aGlzLmJsb2NrV2lkdGgsIHRoaXMuYmxvY2tIZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNlcUN0eC5maWxsU3R5bGUgPSBjb2xvckluZm8uZm9yZWdyb3VuZDsgLy8gVXNlIGZvcmVncm91bmQgY29sb3IgZnJvbSBzY2hlbWVcbiAgICAgICAgICAgICAgICB0aGlzLnNlcUN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICAgICAgICAgICAgICB0aGlzLnNlcUN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICAgICAgICAgICAgICB0aGlzLnNlcUN0eC5maWxsVGV4dChjaGFyVG9EcmF3LCB4ICsgdGhpcy5ibG9ja1dpZHRoIC8gMiwgeSArIHRoaXMuYmxvY2tIZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBkcmF3TmFtZXMoKSB7XG4gICAgICAgIHRoaXMubmFtZXNDdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMubmFtZXNDYW52YXMud2lkdGgsIHRoaXMubmFtZXNDYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5uYW1lc0N0eC5mb250ID0gJzE0cHggc2Fucy1zZXJpZic7XG4gICAgICAgIHRoaXMubmFtZXNDdHgudGV4dEFsaWduID0gJ2xlZnQnO1xuICAgICAgICB0aGlzLm5hbWVzQ3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgICAgICBjb25zdCBzdGFydFJvdyA9IE1hdGguZmxvb3IodGhpcy5zY3JvbGxZIC8gdGhpcy5ibG9ja0hlaWdodCk7XG4gICAgICAgIGNvbnN0IGVuZFJvdyA9IE1hdGgubWluKHRoaXMuc2VxdWVuY2VzLmxlbmd0aCwgc3RhcnRSb3cgKyBNYXRoLmNlaWwodGhpcy5uYW1lc0NhbnZhcy5oZWlnaHQgLyB0aGlzLmJsb2NrSGVpZ2h0KSk7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydFJvdzsgaSA8IGVuZFJvdzsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB5ID0gaSAqIHRoaXMuYmxvY2tIZWlnaHQgLSB0aGlzLnNjcm9sbFk7IC8vIFRvcCBvZiB0aGUgYmxvY2tcbiAgICAgICAgICAgIGNvbnN0IHRleHRZID0geSArIHRoaXMuYmxvY2tIZWlnaHQgLyAyOyAvLyBNaWRkbGUgZm9yIHRleHRcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkU2VxdWVuY2VOYW1lcy5oYXMoaSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWVzQ3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDI1NSwgMC4xKSc7IC8vIExpZ2h0IGJsdWUgYmFja2dyb3VuZCBmb3Igc2VsZWN0ZWQgbmFtZXNcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWVzQ3R4LmZpbGxSZWN0KDAsIHksIHRoaXMubmFtZXNDYW52YXMud2lkdGgsIHRoaXMuYmxvY2tIZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5uYW1lc0N0eC5maWxsU3R5bGUgPSAnIzAwMDAwMCc7IC8vIEJsYWNrIHRleHRcbiAgICAgICAgICAgIHRoaXMubmFtZXNDdHguZmlsbFRleHQodGhpcy5uYW1lc1tpXSwgNSwgdGV4dFkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRyYXdSdWxlcigpIHtcbiAgICAgICAgdGhpcy5ydWxlckN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5ydWxlckNhbnZhcy53aWR0aCwgdGhpcy5ydWxlckNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLnJ1bGVyQ3R4LmZvbnQgPSAnMTJweCBzYW5zLXNlcmlmJztcbiAgICAgICAgdGhpcy5ydWxlckN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICAgICAgdGhpcy5ydWxlckN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICAgICAgY29uc3Qgc3RhcnRDb2wgPSBNYXRoLmZsb29yKHRoaXMuc2Nyb2xsWCAvIHRoaXMuYmxvY2tXaWR0aCk7XG4gICAgICAgIGNvbnN0IGVuZENvbCA9IE1hdGgubWluKHRoaXMubWF4U2VxdWVuY2VMZW5ndGgsIHN0YXJ0Q29sICsgTWF0aC5jZWlsKHRoaXMucnVsZXJDYW52YXMud2lkdGggLyB0aGlzLmJsb2NrV2lkdGgpKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IHN0YXJ0Q29sOyBqIDwgZW5kQ29sOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChqICUgMyA9PT0gMCkgeyAvLyBEcmF3IGxhYmVsIGV2ZXJ5IDUgYmxvY2tzXG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IGogKiB0aGlzLmJsb2NrV2lkdGggLSB0aGlzLnNjcm9sbFggKyB0aGlzLmJsb2NrV2lkdGggLyAyO1xuICAgICAgICAgICAgICAgIHRoaXMucnVsZXJDdHguZmlsbFN0eWxlID0gJyMwMDAwMDAnO1xuICAgICAgICAgICAgICAgIHRoaXMucnVsZXJDdHguZmlsbFRleHQoU3RyaW5nKGogKyAxKSwgeCwgdGhpcy5ydWxlckNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBvbk5hbWVzQ2FudmFzTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLm5hbWVzQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xuICAgICAgICBjb25zdCBzZXFJbmRleCA9IE1hdGguZmxvb3IoKHkgKyB0aGlzLnNjcm9sbFkpIC8gdGhpcy5ibG9ja0hlaWdodCk7XG4gICAgICAgIGlmIChzZXFJbmRleCA+PSAwICYmIHNlcUluZGV4IDwgdGhpcy5uYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpIHsgLy8gQ3RybC9DbWQgY2xpY2sgdG8gdG9nZ2xlIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkU2VxdWVuY2VOYW1lcy5oYXMoc2VxSW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTZXF1ZW5jZU5hbWVzLmRlbGV0ZShzZXFJbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU2VxdWVuY2VOYW1lcy5hZGQoc2VxSW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7IC8vIFNoaWZ0IGNsaWNrIHRvIHNlbGVjdCBhIHJhbmdlXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRTZXF1ZW5jZU5hbWVzLnNpemUgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0U2VsZWN0ZWQgPSBNYXRoLm1pbiguLi5BcnJheS5mcm9tKHRoaXMuc2VsZWN0ZWRTZXF1ZW5jZU5hbWVzKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gTWF0aC5taW4oZmlyc3RTZWxlY3RlZCwgc2VxSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmQgPSBNYXRoLm1heChmaXJzdFNlbGVjdGVkLCBzZXFJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFNlcXVlbmNlTmFtZXMuYWRkKGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU2VxdWVuY2VOYW1lcy5hZGQoc2VxSW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgeyAvLyBSZWd1bGFyIGNsaWNrIHRvIHNlbGVjdCBvbmx5IHRoaXMgaXRlbVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTZXF1ZW5jZU5hbWVzLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFNlcXVlbmNlTmFtZXMuYWRkKHNlcUluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsInZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCI7XG52YXIgd2VicGFja1F1ZXVlcyA9IGhhc1N5bWJvbCA/IFN5bWJvbChcIndlYnBhY2sgcXVldWVzXCIpIDogXCJfX3dlYnBhY2tfcXVldWVzX19cIjtcbnZhciB3ZWJwYWNrRXhwb3J0cyA9IGhhc1N5bWJvbCA/IFN5bWJvbChcIndlYnBhY2sgZXhwb3J0c1wiKSA6IFwiX193ZWJwYWNrX2V4cG9ydHNfX1wiO1xudmFyIHdlYnBhY2tFcnJvciA9IGhhc1N5bWJvbCA/IFN5bWJvbChcIndlYnBhY2sgZXJyb3JcIikgOiBcIl9fd2VicGFja19lcnJvcl9fXCI7XG5cblxudmFyIHJlc29sdmVRdWV1ZSA9IChxdWV1ZSkgPT4ge1xuXHRpZihxdWV1ZSAmJiBxdWV1ZS5kIDwgMSkge1xuXHRcdHF1ZXVlLmQgPSAxO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tKSk7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0gPyBmbi5yKysgOiBmbigpKSk7XG5cdH1cbn1cbnZhciB3cmFwRGVwcyA9IChkZXBzKSA9PiAoZGVwcy5tYXAoKGRlcCkgPT4ge1xuXHRpZihkZXAgIT09IG51bGwgJiYgdHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIikge1xuXG5cdFx0aWYoZGVwW3dlYnBhY2tRdWV1ZXNdKSByZXR1cm4gZGVwO1xuXHRcdGlmKGRlcC50aGVuKSB7XG5cdFx0XHR2YXIgcXVldWUgPSBbXTtcblx0XHRcdHF1ZXVlLmQgPSAwO1xuXHRcdFx0ZGVwLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFeHBvcnRzXSA9IHI7XG5cdFx0XHRcdHJlc29sdmVRdWV1ZShxdWV1ZSk7XG5cdFx0XHR9LCAoZSkgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0Vycm9yXSA9IGU7XG5cdFx0XHRcdHJlc29sdmVRdWV1ZShxdWV1ZSk7XG5cdFx0XHR9KTtcblx0XHRcdHZhciBvYmogPSB7fTtcblxuXHRcdFx0b2JqW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAoZm4ocXVldWUpKTtcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHR9XG5cdHZhciByZXQgPSB7fTtcblx0cmV0W3dlYnBhY2tRdWV1ZXNdID0geCA9PiB7fTtcblx0cmV0W3dlYnBhY2tFeHBvcnRzXSA9IGRlcDtcblx0cmV0dXJuIHJldDtcbn0pKTtcbl9fd2VicGFja19yZXF1aXJlX18uYSA9IChtb2R1bGUsIGJvZHksIGhhc0F3YWl0KSA9PiB7XG5cdHZhciBxdWV1ZTtcblx0aGFzQXdhaXQgJiYgKChxdWV1ZSA9IFtdKS5kID0gLTEpO1xuXHR2YXIgZGVwUXVldWVzID0gbmV3IFNldCgpO1xuXHR2YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuXHR2YXIgY3VycmVudERlcHM7XG5cdHZhciBvdXRlclJlc29sdmU7XG5cdHZhciByZWplY3Q7XG5cdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlaikgPT4ge1xuXHRcdHJlamVjdCA9IHJlajtcblx0XHRvdXRlclJlc29sdmUgPSByZXNvbHZlO1xuXHR9KTtcblx0cHJvbWlzZVt3ZWJwYWNrRXhwb3J0c10gPSBleHBvcnRzO1xuXHRwcm9taXNlW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAocXVldWUgJiYgZm4ocXVldWUpLCBkZXBRdWV1ZXMuZm9yRWFjaChmbiksIHByb21pc2VbXCJjYXRjaFwiXSh4ID0+IHt9KSk7XG5cdG1vZHVsZS5leHBvcnRzID0gcHJvbWlzZTtcblx0dmFyIGhhbmRsZSA9IChkZXBzKSA9PiB7XG5cdFx0Y3VycmVudERlcHMgPSB3cmFwRGVwcyhkZXBzKTtcblx0XHR2YXIgZm47XG5cdFx0dmFyIGdldFJlc3VsdCA9ICgpID0+IChjdXJyZW50RGVwcy5tYXAoKGQpID0+IHtcblxuXHRcdFx0aWYoZFt3ZWJwYWNrRXJyb3JdKSB0aHJvdyBkW3dlYnBhY2tFcnJvcl07XG5cdFx0XHRyZXR1cm4gZFt3ZWJwYWNrRXhwb3J0c107XG5cdFx0fSkpXG5cdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdFx0Zm4gPSAoKSA9PiAocmVzb2x2ZShnZXRSZXN1bHQpKTtcblx0XHRcdGZuLnIgPSAwO1xuXHRcdFx0dmFyIGZuUXVldWUgPSAocSkgPT4gKHEgIT09IHF1ZXVlICYmICFkZXBRdWV1ZXMuaGFzKHEpICYmIChkZXBRdWV1ZXMuYWRkKHEpLCBxICYmICFxLmQgJiYgKGZuLnIrKywgcS5wdXNoKGZuKSkpKTtcblx0XHRcdGN1cnJlbnREZXBzLm1hcCgoZGVwKSA9PiAoZGVwW3dlYnBhY2tRdWV1ZXNdKGZuUXVldWUpKSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGZuLnIgPyBwcm9taXNlIDogZ2V0UmVzdWx0KCk7XG5cdH1cblx0dmFyIGRvbmUgPSAoZXJyKSA9PiAoKGVyciA/IHJlamVjdChwcm9taXNlW3dlYnBhY2tFcnJvcl0gPSBlcnIpIDogb3V0ZXJSZXNvbHZlKGV4cG9ydHMpKSwgcmVzb2x2ZVF1ZXVlKHF1ZXVlKSlcblx0Ym9keShoYW5kbGUsIGRvbmUpO1xuXHRxdWV1ZSAmJiBxdWV1ZS5kIDwgMCAmJiAocXVldWUuZCA9IDApO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnYgPSAoZXhwb3J0cywgd2FzbU1vZHVsZUlkLCB3YXNtTW9kdWxlSGFzaCwgaW1wb3J0c09iaikgPT4ge1xuXG5cdHZhciByZXEgPSBmZXRjaChfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgd2FzbU1vZHVsZUhhc2ggKyBcIi5tb2R1bGUud2FzbVwiKTtcblx0dmFyIGZhbGxiYWNrID0gKCkgPT4gKHJlcVxuXHRcdC50aGVuKCh4KSA9PiAoeC5hcnJheUJ1ZmZlcigpKSlcblx0XHQudGhlbigoYnl0ZXMpID0+IChXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShieXRlcywgaW1wb3J0c09iaikpKVxuXHRcdC50aGVuKChyZXMpID0+IChPYmplY3QuYXNzaWduKGV4cG9ydHMsIHJlcy5pbnN0YW5jZS5leHBvcnRzKSkpKTtcblx0cmV0dXJuIHJlcS50aGVuKChyZXMpID0+IHtcblx0XHRpZiAodHlwZW9mIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nID09PSBcImZ1bmN0aW9uXCIpIHtcblxuXHRcdFx0cmV0dXJuIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKHJlcywgaW1wb3J0c09iailcblx0XHRcdFx0LnRoZW4oXG5cdFx0XHRcdFx0KHJlcykgPT4gKE9iamVjdC5hc3NpZ24oZXhwb3J0cywgcmVzLmluc3RhbmNlLmV4cG9ydHMpKSxcblx0XHRcdFx0XHQoZSkgPT4ge1xuXHRcdFx0XHRcdFx0aWYocmVzLmhlYWRlcnMuZ2V0KFwiQ29udGVudC1UeXBlXCIpICE9PSBcImFwcGxpY2F0aW9uL3dhc21cIikge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLndhcm4oXCJgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmdgIGZhaWxlZCBiZWNhdXNlIHlvdXIgc2VydmVyIGRvZXMgbm90IHNlcnZlIHdhc20gd2l0aCBgYXBwbGljYXRpb24vd2FzbWAgTUlNRSB0eXBlLiBGYWxsaW5nIGJhY2sgdG8gYFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlYCB3aGljaCBpcyBzbG93ZXIuIE9yaWdpbmFsIGVycm9yOlxcblwiLCBlKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbGxiYWNrKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0aHJvdyBlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbGxiYWNrKCk7XG5cdH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoL15ibG9iOi8sIFwiXCIpLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ21vZHVsZScgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi93d3cvbWFpbi50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==