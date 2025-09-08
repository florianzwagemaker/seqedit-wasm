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
        // Start from parsed header/rows so we can modify columns programmatically
        let workingHeader = [...metadata.header];
        let workingRows = metadata.rows.map(r => [...r]);
        // Remove submissionId column if present
        const submissionIdIndex = workingHeader.indexOf('submissionId');
        if (submissionIdIndex !== -1) {
            console.log('Removing submissionId column from metadata');
            workingHeader = workingHeader.filter((_, idx) => idx !== submissionIdIndex);
            workingRows = workingRows.map(row => row.filter((_, idx) => idx !== submissionIdIndex));
        }
        else {
            console.log('No submissionId column found in metadata; using original metadata');
        }
        // Ensure there is an "Id" column that corresponds to the accession ID (sequence name).
        // If "Id" doesn't exist, prepend it. If it exists, overwrite its values with accession IDs when possible.
        const idIndex = workingHeader.indexOf('Id');
        if (idIndex === -1) {
            console.log('Adding Id column to metadata (will prepend as first column)');
            workingHeader = ['id', ...workingHeader];
            workingRows = workingRows.map((row, idx) => {
                const accession = names[idx] ?? '';
                return [accession, ...row];
            });
        }
        else {
            console.log('Id column exists in metadata; updating values to match accession IDs where possible');
            workingRows = workingRows.map((row, idx) => {
                const newRow = [...row];
                newRow[idIndex] = names[idx] ?? newRow[idIndex] ?? '';
                return newRow;
            });
        }
        // If there are more sequences than metadata rows, append rows with Id only (best-effort)
        if (names.length > workingRows.length) {
            console.warn('More sequences than metadata rows; appending additional metadata rows with Id only for unmatched sequences');
            for (let i = workingRows.length; i < names.length; i++) {
                const newRow = new Array(workingHeader.length).fill('');
                newRow[workingHeader.indexOf('Id')] = names[i];
                workingRows.push(newRow);
            }
        }
        // Compose modified metadata text
        const modifiedMetadataText = [workingHeader.join('\t'), ...workingRows.map(r => r.join('\t'))].join('\n');
        console.log('Modified metadata preview:', modifiedMetadataText.substring(0, 500) + '...');
        // Keep original sequence names (do not remap to submissionId)
        const fastaContent = names.map((name, i) => `>${name}\n${sequences[i]}`).join('\n');
        console.log('FASTA content preview:', fastaContent.substring(0, 200) + '...');
        const fastaFile = new File([fastaContent], "sequences.fasta", { type: "text/plain" });
        const metadataFile = new File([modifiedMetadataText], "metadata.tsv", { type: "text/tab-separated-values" });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ1Y7QUFDaUI7QUFDdEQsbUVBQWMsQ0FBQyxrREFBSTtBQUNuQixtRUFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSnJCO0FBQ087QUFDUDtBQUNBOzs7QUFHQTs7QUFFQSxvREFBb0QsOEJBQThCOztBQUVsRjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxXQUFXLGNBQWM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM09PO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUUsNEJBQTRCO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsd0JBQXdCLFVBQVUsa0JBQWtCO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHdCQUF3QixVQUFVLGtCQUFrQjtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHNEQUFzRCxpQkFBaUIsRUFBRSxVQUFVO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx3QkFBd0IsVUFBVSxrQkFBa0I7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsd0JBQXdCLFVBQVUsa0JBQWtCO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyU21EO0FBQ3NDO0FBQ0w7QUFDdEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNERBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNEQUFlO0FBQ3RDO0FBQ0EsMEJBQTBCLDhDQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtRUFBNEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1REFBZTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFlO0FBQ3ZCO0FBQ0EsMkJBQTJCLHVEQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1REFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsOERBQVc7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MscUVBQWtCO0FBQzFEO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHlEQUF5RCw0REFBUztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQseURBQU07QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsK0JBQStCO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0QsNkNBQTZDLGtCQUFrQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsS0FBSyxJQUFJLGFBQWE7QUFDOUU7QUFDQSx3RUFBd0Usb0JBQW9CO0FBQzVGLGdGQUFnRixtQ0FBbUM7QUFDbkg7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDZCQUE2QixHQUFHLFNBQVMsa0JBQWtCLFFBQVE7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxVQUFVO0FBQ3pELGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxTQUFTO0FBQ2hFLHlCQUF5QjtBQUN6QjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELHNCQUFzQixFQUFFLHlCQUF5QixJQUFJLFVBQVU7QUFDdkg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxpQkFBaUIsRUFBRSxvQkFBb0IsSUFBSSxVQUFVO0FBQ3JHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQSxpQ0FBaUMsdURBQWU7QUFDaEQ7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHVEQUFlO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVEQUFlLGtDQUFrQyxrQkFBa0I7QUFDbkY7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Y087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdEO0FBQ0E7QUFDQSxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixhQUFhO0FBQzVDO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQSw2REFBNkQseUJBQXlCO0FBQ3RGLDJEQUEyRCx1QkFBdUI7QUFDbEYsK0JBQStCLGFBQWE7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsYUFBYTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGFBQWE7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGFBQWE7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6Qyx1Q0FBdUM7QUFDdkMsK0JBQStCLGFBQWE7QUFDNUM7QUFDQTtBQUNBLG1DQUFtQyxhQUFhO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekMsdUNBQXVDO0FBQ3ZDO0FBQ0EsK0JBQStCLGFBQWE7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsV0FBVztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixnQkFBZ0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0Esa0xBQWtMO0FBQ2xMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0EsNENBQTRDLHVCQUF1QjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLG9FQUFvRTtBQUNoSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHFCQUFxQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixRQUFRO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixZQUFZO0FBQzNDO0FBQ0EsbUNBQW1DLFlBQVk7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxnREFBZ0Q7QUFDMUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFLG1GQUFtRjtBQUNuRjtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQsb0VBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQywyREFBMkQ7QUFDM0Qsb0RBQW9EO0FBQ3BEO0FBQ0Esa0VBQWtFO0FBQ2xFO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxVQUFVO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDdDNCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTs7O1dBR0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLENBQUM7V0FDRDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0Esc0dBQXNHO1dBQ3RHO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQ3hFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRixFOzs7OztXQ3hCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7VUVsQkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXFlZGl0LXdhc20vLi9wa2cvc2VxZWRpdF93YXNtLmpzIiwid2VicGFjazovL3NlcWVkaXQtd2FzbS8uL3BrZy9zZXFlZGl0X3dhc21fYmcuanMiLCJ3ZWJwYWNrOi8vc2VxZWRpdC13YXNtLy4vd3d3L2FwcC1zdGF0ZS50cyIsIndlYnBhY2s6Ly9zZXFlZGl0LXdhc20vLi93d3cvYXV0aC50cyIsIndlYnBhY2s6Ly9zZXFlZGl0LXdhc20vLi93d3cvbWFpbi50cyIsIndlYnBhY2s6Ly9zZXFlZGl0LXdhc20vLi93d3cvc2VxdWVuY2Utdmlld2VyLnRzIiwid2VicGFjazovL3NlcWVkaXQtd2FzbS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zZXFlZGl0LXdhc20vd2VicGFjay9ydW50aW1lL2FzeW5jIG1vZHVsZSIsIndlYnBhY2s6Ly9zZXFlZGl0LXdhc20vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NlcWVkaXQtd2FzbS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3NlcWVkaXQtd2FzbS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NlcWVkaXQtd2FzbS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NlcWVkaXQtd2FzbS93ZWJwYWNrL3J1bnRpbWUvd2FzbSBsb2FkaW5nIiwid2VicGFjazovL3NlcWVkaXQtd2FzbS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9zZXFlZGl0LXdhc20vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9zZXFlZGl0LXdhc20vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3NlcWVkaXQtd2FzbS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgd2FzbSBmcm9tIFwiLi9zZXFlZGl0X3dhc21fYmcud2FzbVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vc2VxZWRpdF93YXNtX2JnLmpzXCI7XG5pbXBvcnQgeyBfX3diZ19zZXRfd2FzbSB9IGZyb20gXCIuL3NlcWVkaXRfd2FzbV9iZy5qc1wiO1xuX193Ymdfc2V0X3dhc20od2FzbSk7XG53YXNtLl9fd2JpbmRnZW5fc3RhcnQoKTtcbiIsImxldCB3YXNtO1xuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3NldF93YXNtKHZhbCkge1xuICAgIHdhc20gPSB2YWw7XG59XG5cblxuY29uc3QgbFRleHREZWNvZGVyID0gdHlwZW9mIFRleHREZWNvZGVyID09PSAndW5kZWZpbmVkJyA/ICgwLCBtb2R1bGUucmVxdWlyZSkoJ3V0aWwnKS5UZXh0RGVjb2RlciA6IFRleHREZWNvZGVyO1xuXG5sZXQgY2FjaGVkVGV4dERlY29kZXIgPSBuZXcgbFRleHREZWNvZGVyKCd1dGYtOCcsIHsgaWdub3JlQk9NOiB0cnVlLCBmYXRhbDogdHJ1ZSB9KTtcblxuY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKCk7XG5cbmxldCBjYWNoZWRVaW50OEFycmF5TWVtb3J5MCA9IG51bGw7XG5cbmZ1bmN0aW9uIGdldFVpbnQ4QXJyYXlNZW1vcnkwKCkge1xuICAgIGlmIChjYWNoZWRVaW50OEFycmF5TWVtb3J5MCA9PT0gbnVsbCB8fCBjYWNoZWRVaW50OEFycmF5TWVtb3J5MC5ieXRlTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNhY2hlZFVpbnQ4QXJyYXlNZW1vcnkwID0gbmV3IFVpbnQ4QXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZFVpbnQ4QXJyYXlNZW1vcnkwO1xufVxuXG5mdW5jdGlvbiBnZXRTdHJpbmdGcm9tV2FzbTAocHRyLCBsZW4pIHtcbiAgICBwdHIgPSBwdHIgPj4+IDA7XG4gICAgcmV0dXJuIGNhY2hlZFRleHREZWNvZGVyLmRlY29kZShnZXRVaW50OEFycmF5TWVtb3J5MCgpLnN1YmFycmF5KHB0ciwgcHRyICsgbGVuKSk7XG59XG5cbmxldCBXQVNNX1ZFQ1RPUl9MRU4gPSAwO1xuXG5jb25zdCBsVGV4dEVuY29kZXIgPSB0eXBlb2YgVGV4dEVuY29kZXIgPT09ICd1bmRlZmluZWQnID8gKDAsIG1vZHVsZS5yZXF1aXJlKSgndXRpbCcpLlRleHRFbmNvZGVyIDogVGV4dEVuY29kZXI7XG5cbmxldCBjYWNoZWRUZXh0RW5jb2RlciA9IG5ldyBsVGV4dEVuY29kZXIoJ3V0Zi04Jyk7XG5cbmNvbnN0IGVuY29kZVN0cmluZyA9ICh0eXBlb2YgY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlSW50byA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gZnVuY3Rpb24gKGFyZywgdmlldykge1xuICAgIHJldHVybiBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGVJbnRvKGFyZywgdmlldyk7XG59XG4gICAgOiBmdW5jdGlvbiAoYXJnLCB2aWV3KSB7XG4gICAgY29uc3QgYnVmID0gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlKGFyZyk7XG4gICAgdmlldy5zZXQoYnVmKTtcbiAgICByZXR1cm4ge1xuICAgICAgICByZWFkOiBhcmcubGVuZ3RoLFxuICAgICAgICB3cml0dGVuOiBidWYubGVuZ3RoXG4gICAgfTtcbn0pO1xuXG5mdW5jdGlvbiBwYXNzU3RyaW5nVG9XYXNtMChhcmcsIG1hbGxvYywgcmVhbGxvYykge1xuXG4gICAgaWYgKHJlYWxsb2MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBidWYgPSBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGUoYXJnKTtcbiAgICAgICAgY29uc3QgcHRyID0gbWFsbG9jKGJ1Zi5sZW5ndGgsIDEpID4+PiAwO1xuICAgICAgICBnZXRVaW50OEFycmF5TWVtb3J5MCgpLnN1YmFycmF5KHB0ciwgcHRyICsgYnVmLmxlbmd0aCkuc2V0KGJ1Zik7XG4gICAgICAgIFdBU01fVkVDVE9SX0xFTiA9IGJ1Zi5sZW5ndGg7XG4gICAgICAgIHJldHVybiBwdHI7XG4gICAgfVxuXG4gICAgbGV0IGxlbiA9IGFyZy5sZW5ndGg7XG4gICAgbGV0IHB0ciA9IG1hbGxvYyhsZW4sIDEpID4+PiAwO1xuXG4gICAgY29uc3QgbWVtID0gZ2V0VWludDhBcnJheU1lbW9yeTAoKTtcblxuICAgIGxldCBvZmZzZXQgPSAwO1xuXG4gICAgZm9yICg7IG9mZnNldCA8IGxlbjsgb2Zmc2V0KyspIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGFyZy5jaGFyQ29kZUF0KG9mZnNldCk7XG4gICAgICAgIGlmIChjb2RlID4gMHg3RikgYnJlYWs7XG4gICAgICAgIG1lbVtwdHIgKyBvZmZzZXRdID0gY29kZTtcbiAgICB9XG5cbiAgICBpZiAob2Zmc2V0ICE9PSBsZW4pIHtcbiAgICAgICAgaWYgKG9mZnNldCAhPT0gMCkge1xuICAgICAgICAgICAgYXJnID0gYXJnLnNsaWNlKG9mZnNldCk7XG4gICAgICAgIH1cbiAgICAgICAgcHRyID0gcmVhbGxvYyhwdHIsIGxlbiwgbGVuID0gb2Zmc2V0ICsgYXJnLmxlbmd0aCAqIDMsIDEpID4+PiAwO1xuICAgICAgICBjb25zdCB2aWV3ID0gZ2V0VWludDhBcnJheU1lbW9yeTAoKS5zdWJhcnJheShwdHIgKyBvZmZzZXQsIHB0ciArIGxlbik7XG4gICAgICAgIGNvbnN0IHJldCA9IGVuY29kZVN0cmluZyhhcmcsIHZpZXcpO1xuXG4gICAgICAgIG9mZnNldCArPSByZXQud3JpdHRlbjtcbiAgICAgICAgcHRyID0gcmVhbGxvYyhwdHIsIGxlbiwgb2Zmc2V0LCAxKSA+Pj4gMDtcbiAgICB9XG5cbiAgICBXQVNNX1ZFQ1RPUl9MRU4gPSBvZmZzZXQ7XG4gICAgcmV0dXJuIHB0cjtcbn1cblxubGV0IGNhY2hlZFVpbnQzMkFycmF5TWVtb3J5MCA9IG51bGw7XG5cbmZ1bmN0aW9uIGdldFVpbnQzMkFycmF5TWVtb3J5MCgpIHtcbiAgICBpZiAoY2FjaGVkVWludDMyQXJyYXlNZW1vcnkwID09PSBudWxsIHx8IGNhY2hlZFVpbnQzMkFycmF5TWVtb3J5MC5ieXRlTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNhY2hlZFVpbnQzMkFycmF5TWVtb3J5MCA9IG5ldyBVaW50MzJBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVkVWludDMyQXJyYXlNZW1vcnkwO1xufVxuXG5mdW5jdGlvbiBnZXRBcnJheVUzMkZyb21XYXNtMChwdHIsIGxlbikge1xuICAgIHB0ciA9IHB0ciA+Pj4gMDtcbiAgICByZXR1cm4gZ2V0VWludDMyQXJyYXlNZW1vcnkwKCkuc3ViYXJyYXkocHRyIC8gNCwgcHRyIC8gNCArIGxlbik7XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZXF1ZW5jZVxuICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5XG4gKiBAcmV0dXJucyB7VWludDMyQXJyYXl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2goc2VxdWVuY2UsIHF1ZXJ5KSB7XG4gICAgY29uc3QgcHRyMCA9IHBhc3NTdHJpbmdUb1dhc20wKHNlcXVlbmNlLCB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jLCB3YXNtLl9fd2JpbmRnZW5fcmVhbGxvYyk7XG4gICAgY29uc3QgbGVuMCA9IFdBU01fVkVDVE9SX0xFTjtcbiAgICBjb25zdCBwdHIxID0gcGFzc1N0cmluZ1RvV2FzbTAocXVlcnksIHdhc20uX193YmluZGdlbl9tYWxsb2MsIHdhc20uX193YmluZGdlbl9yZWFsbG9jKTtcbiAgICBjb25zdCBsZW4xID0gV0FTTV9WRUNUT1JfTEVOO1xuICAgIGNvbnN0IHJldCA9IHdhc20uc2VhcmNoKHB0cjAsIGxlbjAsIHB0cjEsIGxlbjEpO1xuICAgIHZhciB2MyA9IGdldEFycmF5VTMyRnJvbVdhc20wKHJldFswXSwgcmV0WzFdKS5zbGljZSgpO1xuICAgIHdhc20uX193YmluZGdlbl9mcmVlKHJldFswXSwgcmV0WzFdICogNCwgNCk7XG4gICAgcmV0dXJuIHYzO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZXF1ZW5jZVxuICogQHBhcmFtIHtudW1iZXJ9IGZyYW1lXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlKHNlcXVlbmNlLCBmcmFtZSkge1xuICAgIGxldCBkZWZlcnJlZDJfMDtcbiAgICBsZXQgZGVmZXJyZWQyXzE7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcHRyMCA9IHBhc3NTdHJpbmdUb1dhc20wKHNlcXVlbmNlLCB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jLCB3YXNtLl9fd2JpbmRnZW5fcmVhbGxvYyk7XG4gICAgICAgIGNvbnN0IGxlbjAgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgICAgIGNvbnN0IHJldCA9IHdhc20udHJhbnNsYXRlKHB0cjAsIGxlbjAsIGZyYW1lKTtcbiAgICAgICAgZGVmZXJyZWQyXzAgPSByZXRbMF07XG4gICAgICAgIGRlZmVycmVkMl8xID0gcmV0WzFdO1xuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nRnJvbVdhc20wKHJldFswXSwgcmV0WzFdKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgICB3YXNtLl9fd2JpbmRnZW5fZnJlZShkZWZlcnJlZDJfMCwgZGVmZXJyZWQyXzEsIDEpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdGFrZUZyb21FeHRlcm5yZWZUYWJsZTAoaWR4KSB7XG4gICAgY29uc3QgdmFsdWUgPSB3YXNtLl9fd2JpbmRnZW5fZXhwb3J0XzAuZ2V0KGlkeCk7XG4gICAgd2FzbS5fX2V4dGVybnJlZl90YWJsZV9kZWFsbG9jKGlkeCk7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0YVxuICogQHJldHVybnMge2FueX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlX2Zhc3RhKGRhdGEpIHtcbiAgICBjb25zdCBwdHIwID0gcGFzc1N0cmluZ1RvV2FzbTAoZGF0YSwgd2FzbS5fX3diaW5kZ2VuX21hbGxvYywgd2FzbS5fX3diaW5kZ2VuX3JlYWxsb2MpO1xuICAgIGNvbnN0IGxlbjAgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgY29uc3QgcmV0ID0gd2FzbS5wYXJzZV9mYXN0YShwdHIwLCBsZW4wKTtcbiAgICBpZiAocmV0WzJdKSB7XG4gICAgICAgIHRocm93IHRha2VGcm9tRXh0ZXJucmVmVGFibGUwKHJldFsxXSk7XG4gICAgfVxuICAgIHJldHVybiB0YWtlRnJvbUV4dGVybnJlZlRhYmxlMChyZXRbMF0pO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZXF1ZW5jZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJldmVyc2VfY29tcGxlbWVudChzZXF1ZW5jZSkge1xuICAgIGxldCBkZWZlcnJlZDJfMDtcbiAgICBsZXQgZGVmZXJyZWQyXzE7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcHRyMCA9IHBhc3NTdHJpbmdUb1dhc20wKHNlcXVlbmNlLCB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jLCB3YXNtLl9fd2JpbmRnZW5fcmVhbGxvYyk7XG4gICAgICAgIGNvbnN0IGxlbjAgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgICAgIGNvbnN0IHJldCA9IHdhc20ucmV2ZXJzZV9jb21wbGVtZW50KHB0cjAsIGxlbjApO1xuICAgICAgICBkZWZlcnJlZDJfMCA9IHJldFswXTtcbiAgICAgICAgZGVmZXJyZWQyXzEgPSByZXRbMV07XG4gICAgICAgIHJldHVybiBnZXRTdHJpbmdGcm9tV2FzbTAocmV0WzBdLCByZXRbMV0pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICAgIHdhc20uX193YmluZGdlbl9mcmVlKGRlZmVycmVkMl8wLCBkZWZlcnJlZDJfMSwgMSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBlbnVtIHswIHwgMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5IHwgMTAgfCAxMSB8IDEyIHwgMTMgfCAxNCB8IDE1IHwgMTYgfCAxNyB8IDE4IHwgMTkgfCAyMCB8IDIxfVxuICovXG5leHBvcnQgY29uc3QgQW1pbm9BY2lkID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgQWxhOiAwLCBcIjBcIjogXCJBbGFcIixcbiAgICBBcmc6IDEsIFwiMVwiOiBcIkFyZ1wiLFxuICAgIEFzbjogMiwgXCIyXCI6IFwiQXNuXCIsXG4gICAgQXNwOiAzLCBcIjNcIjogXCJBc3BcIixcbiAgICBDeXM6IDQsIFwiNFwiOiBcIkN5c1wiLFxuICAgIEdsbjogNSwgXCI1XCI6IFwiR2xuXCIsXG4gICAgR2x1OiA2LCBcIjZcIjogXCJHbHVcIixcbiAgICBHbHk6IDcsIFwiN1wiOiBcIkdseVwiLFxuICAgIEhpczogOCwgXCI4XCI6IFwiSGlzXCIsXG4gICAgSWxlOiA5LCBcIjlcIjogXCJJbGVcIixcbiAgICBMZXU6IDEwLCBcIjEwXCI6IFwiTGV1XCIsXG4gICAgTHlzOiAxMSwgXCIxMVwiOiBcIkx5c1wiLFxuICAgIE1ldDogMTIsIFwiMTJcIjogXCJNZXRcIixcbiAgICBQaGU6IDEzLCBcIjEzXCI6IFwiUGhlXCIsXG4gICAgUHJvOiAxNCwgXCIxNFwiOiBcIlByb1wiLFxuICAgIFNlcjogMTUsIFwiMTVcIjogXCJTZXJcIixcbiAgICBUaHI6IDE2LCBcIjE2XCI6IFwiVGhyXCIsXG4gICAgVHJwOiAxNywgXCIxN1wiOiBcIlRycFwiLFxuICAgIFR5cjogMTgsIFwiMThcIjogXCJUeXJcIixcbiAgICBWYWw6IDE5LCBcIjE5XCI6IFwiVmFsXCIsXG4gICAgU3RvcDogMjAsIFwiMjBcIjogXCJTdG9wXCIsXG4gICAgVW5rbm93bjogMjEsIFwiMjFcIjogXCJVbmtub3duXCIsXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX25ld180MDVlMjJmMzkwNTc2Y2UyKCkge1xuICAgIGNvbnN0IHJldCA9IG5ldyBPYmplY3QoKTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX25ld183OGZlYjEwOGI2NDcyNzEzKCkge1xuICAgIGNvbnN0IHJldCA9IG5ldyBBcnJheSgpO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfc2V0XzM3ODM3MDIzZjNkNzQwZTgoYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIGFyZzBbYXJnMSA+Pj4gMF0gPSBhcmcyO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3NldF8zZmRhM2JhYzA3MzkzZGU0KGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICBhcmcwW2FyZzFdID0gYXJnMjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX2luaXRfZXh0ZXJucmVmX3RhYmxlKCkge1xuICAgIGNvbnN0IHRhYmxlID0gd2FzbS5fX3diaW5kZ2VuX2V4cG9ydF8wO1xuICAgIGNvbnN0IG9mZnNldCA9IHRhYmxlLmdyb3coNCk7XG4gICAgdGFibGUuc2V0KDAsIHVuZGVmaW5lZCk7XG4gICAgdGFibGUuc2V0KG9mZnNldCArIDAsIHVuZGVmaW5lZCk7XG4gICAgdGFibGUuc2V0KG9mZnNldCArIDEsIG51bGwpO1xuICAgIHRhYmxlLnNldChvZmZzZXQgKyAyLCB0cnVlKTtcbiAgICB0YWJsZS5zZXQob2Zmc2V0ICsgMywgZmFsc2UpO1xuICAgIDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX3N0cmluZ19uZXcoYXJnMCwgYXJnMSkge1xuICAgIGNvbnN0IHJldCA9IGdldFN0cmluZ0Zyb21XYXNtMChhcmcwLCBhcmcxKTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fdGhyb3coYXJnMCwgYXJnMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSkpO1xufTtcblxuIiwiZXhwb3J0IGNsYXNzIEFwcFN0YXRlTWFuYWdlciB7XG4gICAgc3RhdGljIFNUQVRFX0tFWSA9ICdzZXFlZGl0LWFwcC1zdGF0ZSc7XG4gICAgc3RhdGljIEFVVEhfU1RBVEVfS0VZID0gJ3NlcWVkaXQtYXV0aC1mbG93LXN0YXRlJztcbiAgICAvKipcbiAgICAgKiBTYXZlIHRoZSBjdXJyZW50IGFwcGxpY2F0aW9uIHN0YXRlIGJlZm9yZSBhdXRoZW50aWNhdGlvblxuICAgICAqL1xuICAgIHN0YXRpYyBzYXZlU3RhdGVCZWZvcmVBdXRoKHVybFBhcmFtcywgc2VxdWVuY2VzLCBpc1RyYW5zbGF0ZWQsIGN1cnJlbnRGcmFtZSwgdHJhbnNsYXRlZFNlcXVlbmNlcywgbWV0YWRhdGEsIGdyb3VwSWQsIHNlYXJjaFJlc3VsdHMsIHNob3VsZENvbnRpbnVlU2F2ZVJldmlzaW9uID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgICAgICB1cmxQYXJhbXM6IE9iamVjdC5mcm9tRW50cmllcyh1cmxQYXJhbXMuZW50cmllcygpKSxcbiAgICAgICAgICAgIHNlcXVlbmNlczoge1xuICAgICAgICAgICAgICAgIG5hbWVzOiBzZXF1ZW5jZXMubmFtZXMsXG4gICAgICAgICAgICAgICAgc2VxdWVuY2VzOiBzZXF1ZW5jZXMuc2VxdWVuY2VzLFxuICAgICAgICAgICAgICAgIGlzVHJhbnNsYXRlZCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RnJhbWUsXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlZFNlcXVlbmNlc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGFkYXRhOiBtZXRhZGF0YSA/IHtcbiAgICAgICAgICAgICAgICBoZWFkZXI6IG1ldGFkYXRhLmhlYWRlcixcbiAgICAgICAgICAgICAgICByb3dzOiBtZXRhZGF0YS5yb3dzLFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsVGV4dDogbWV0YWRhdGEub3JpZ2luYWxUZXh0LFxuICAgICAgICAgICAgICAgIGdyb3VwSWRcbiAgICAgICAgICAgIH0gOiBudWxsLFxuICAgICAgICAgICAgc2VhcmNoUmVzdWx0cyxcbiAgICAgICAgICAgIHNob3VsZENvbnRpbnVlU2F2ZVJldmlzaW9uXG4gICAgICAgIH07XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuU1RBVEVfS0VZLCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLkFVVEhfU1RBVEVfS0VZLCAndHJ1ZScpO1xuICAgICAgICBjb25zb2xlLmxvZygnQXBwbGljYXRpb24gc3RhdGUgc2F2ZWQgYmVmb3JlIGF1dGhlbnRpY2F0aW9uJywgeyBzaG91bGRDb250aW51ZVNhdmVSZXZpc2lvbiB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgd2UncmUgcmV0dXJuaW5nIGZyb20gYW4gYXV0aGVudGljYXRpb24gZmxvd1xuICAgICAqL1xuICAgIHN0YXRpYyBpc1JldHVybmluZ0Zyb21BdXRoKCkge1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5BVVRIX1NUQVRFX0tFWSkgPT09ICd0cnVlJztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVzdG9yZSB0aGUgYXBwbGljYXRpb24gc3RhdGUgYWZ0ZXIgYXV0aGVudGljYXRpb25cbiAgICAgKi9cbiAgICBzdGF0aWMgcmVzdG9yZVN0YXRlQWZ0ZXJBdXRoKCkge1xuICAgICAgICBjb25zdCBzdGF0ZUpzb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLlNUQVRFX0tFWSk7XG4gICAgICAgIGlmICghc3RhdGVKc29uKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBKU09OLnBhcnNlKHN0YXRlSnNvbik7XG4gICAgICAgICAgICAvLyBDbGVhbiB1cCB0aGUgc3RvcmVkIHN0YXRlXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLlNUQVRFX0tFWSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLkFVVEhfU1RBVEVfS0VZKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBcHBsaWNhdGlvbiBzdGF0ZSByZXN0b3JlZCBhZnRlciBhdXRoZW50aWNhdGlvbicpO1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHJlc3RvcmUgYXBwbGljYXRpb24gc3RhdGU6JywgZXJyb3IpO1xuICAgICAgICAgICAgdGhpcy5jbGVhclN0b3JlZFN0YXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbGVhciBhbnkgc3RvcmVkIGFwcGxpY2F0aW9uIHN0YXRlXG4gICAgICovXG4gICAgc3RhdGljIGNsZWFyU3RvcmVkU3RhdGUoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuU1RBVEVfS0VZKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5BVVRIX1NUQVRFX0tFWSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlc3RvcmUgVVJMIHBhcmFtZXRlcnMgdG8gdGhlIGN1cnJlbnQgcGFnZVxuICAgICAqL1xuICAgIHN0YXRpYyByZXN0b3JlVXJsUGFyYW1zKHVybFBhcmFtcykge1xuICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgLy8gQ2xlYXIgZXhpc3Rpbmcgc2VhcmNoIHBhcmFtZXRlcnNcbiAgICAgICAgdXJsLnNlYXJjaCA9ICcnO1xuICAgICAgICAvLyBBZGQgdGhlIHJlc3RvcmVkIHBhcmFtZXRlcnNcbiAgICAgICAgT2JqZWN0LmVudHJpZXModXJsUGFyYW1zKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIHVybC5zZWFyY2hQYXJhbXMuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBVUkwgd2l0aG91dCB0cmlnZ2VyaW5nIGEgcGFnZSByZWxvYWRcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgdXJsLnRvU3RyaW5nKCkpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBBdXRoTWFuYWdlciB7XG4gICAgY29uZmlnO1xuICAgIHRva2VuS2V5ID0gJ3NlcWVkaXQtYWNjZXNzLXRva2VuJztcbiAgICB0b2tlbkV4cGlyeUtleSA9ICdzZXFlZGl0LXRva2VuLWV4cGlyeSc7XG4gICAgcmVmcmVzaFRva2VuS2V5ID0gJ3NlcWVkaXQtcmVmcmVzaC10b2tlbic7XG4gICAgY29uZmlnS2V5ID0gJ3NlcWVkaXQtYXV0aC1jb25maWcnOyAvLyBBZGQgY29uZmlnIGtleVxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgLy8gU2F2ZSBjb25maWcgdG8gbG9jYWxTdG9yYWdlIGZvciBsYXRlciByZXRyaWV2YWxcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5jb25maWdLZXksIEpTT04uc3RyaW5naWZ5KGNvbmZpZykpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHN0b3JlZCBhY2Nlc3MgdG9rZW4gaWYgaXQgZXhpc3RzIGFuZCBpcyBub3QgZXhwaXJlZFxuICAgICAqL1xuICAgIGdldFN0b3JlZFRva2VuKCkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMudG9rZW5LZXkpO1xuICAgICAgICBjb25zdCBleHBpcnkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnRva2VuRXhwaXJ5S2V5KTtcbiAgICAgICAgaWYgKCF0b2tlbiB8fCAhZXhwaXJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBpZiB0b2tlbiBpcyBleHBpcmVkICh3aXRoIDUgbWludXRlIGJ1ZmZlcilcbiAgICAgICAgY29uc3QgZXhwaXJ5VGltZSA9IHBhcnNlSW50KGV4cGlyeSwgMTApO1xuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCBidWZmZXJUaW1lID0gNSAqIDYwICogMTAwMDsgLy8gNSBtaW51dGVzIGluIG1pbGxpc2Vjb25kc1xuICAgICAgICBpZiAobm93ID49IChleHBpcnlUaW1lIC0gYnVmZmVyVGltZSkpIHtcbiAgICAgICAgICAgIC8vIFRva2VuIGlzIGV4cGlyZWQgb3IgYWJvdXQgdG8gZXhwaXJlLCB0cnkgdG8gcmVmcmVzaFxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdG9yZSB0b2tlbiBpbmZvcm1hdGlvbiBpbiBsb2NhbFN0b3JhZ2VcbiAgICAgKi9cbiAgICBzdG9yZVRva2Vucyh0b2tlblJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IGV4cGlyeVRpbWUgPSBEYXRlLm5vdygpICsgKHRva2VuUmVzcG9uc2UuZXhwaXJlc19pbiAqIDEwMDApO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnRva2VuS2V5LCB0b2tlblJlc3BvbnNlLmFjY2Vzc190b2tlbik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMucmVmcmVzaFRva2VuS2V5LCB0b2tlblJlc3BvbnNlLnJlZnJlc2hfdG9rZW4pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnRva2VuRXhwaXJ5S2V5LCBleHBpcnlUaW1lLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDbGVhciBzdG9yZWQgYXV0aGVudGljYXRpb24gZGF0YVxuICAgICAqL1xuICAgIGNsZWFyU3RvcmVkQXV0aCgpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy50b2tlbktleSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMucmVmcmVzaFRva2VuS2V5KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy50b2tlbkV4cGlyeUtleSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuY29uZmlnS2V5KTsgLy8gQWxzbyBjbGVhciBzdG9yZWQgY29uZmlnXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzZXFlZGl0LWF1dGgtc3RhdGUnKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3NlcWVkaXQtYXV0aC1jb2RlLXZlcmlmaWVyJyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlIGEgcmFuZG9tIHN0cmluZyBmb3IgUEtDRVxuICAgICAqL1xuICAgIGdlbmVyYXRlUmFuZG9tU3RyaW5nKGxlbmd0aCkge1xuICAgICAgICBjb25zdCBjaGFyc2V0ID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5LS5ffic7XG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGNoYXJzZXQuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJzZXQubGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2VuZXJhdGUgU0hBMjU2IGhhc2ggZm9yIFBLQ0UgY29kZSBjaGFsbGVuZ2VcbiAgICAgKi9cbiAgICBhc3luYyBzaGEyNTYocGxhaW4pIHtcbiAgICAgICAgY29uc3QgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xuICAgICAgICBjb25zdCBkYXRhID0gZW5jb2Rlci5lbmNvZGUocGxhaW4pO1xuICAgICAgICBjb25zdCBoYXNoID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5kaWdlc3QoJ1NIQS0yNTYnLCBkYXRhKTtcbiAgICAgICAgcmV0dXJuIGJ0b2EoU3RyaW5nLmZyb21DaGFyQ29kZSguLi5uZXcgVWludDhBcnJheShoYXNoKSkpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFwrL2csICctJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXC8vZywgJ18nKVxuICAgICAgICAgICAgLnJlcGxhY2UoLz0vZywgJycpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHJlZGlyZWN0IFVSSSBmb3IgdGhpcyBhcHBsaWNhdGlvblxuICAgICAqL1xuICAgIGdldFJlZGlyZWN0VXJpKCkge1xuICAgICAgICAvLyBVc2UganVzdCB0aGUgb3JpZ2luICsgcGF0aG5hbWUgZm9yIGNvbnNpc3RlbmN5IHdpdGggS2V5Y2xvYWsgZXhwZWN0YXRpb25zXG4gICAgICAgIC8vIFNvbWUgS2V5Y2xvYWsgc2V0dXBzIGFyZSB2ZXJ5IHN0cmljdCBhYm91dCB0aGlzXG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbml0aWF0ZSBPQXV0aDIgZmxvdyB3aXRoIFBLQ0VcbiAgICAgKiBOb3RlOiBBcHBsaWNhdGlvbiBzdGF0ZSBzaG91bGQgYmUgc2F2ZWQgYmVmb3JlIGNhbGxpbmcgdGhpcyBtZXRob2RcbiAgICAgKi9cbiAgICBhc3luYyBpbml0aWF0ZUF1dGgoKSB7XG4gICAgICAgIC8vIEdlbmVyYXRlIFBLQ0UgcGFyYW1ldGVyc1xuICAgICAgICBjb25zdCBjb2RlVmVyaWZpZXIgPSB0aGlzLmdlbmVyYXRlUmFuZG9tU3RyaW5nKDEyOCk7XG4gICAgICAgIGNvbnN0IGNvZGVDaGFsbGVuZ2UgPSBhd2FpdCB0aGlzLnNoYTI1Nihjb2RlVmVyaWZpZXIpO1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2VuZXJhdGVSYW5kb21TdHJpbmcoMzIpO1xuICAgICAgICAvLyBTdG9yZSBQS0NFIHBhcmFtZXRlcnNcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlcWVkaXQtYXV0aC1jb2RlLXZlcmlmaWVyJywgY29kZVZlcmlmaWVyKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlcWVkaXQtYXV0aC1zdGF0ZScsIHN0YXRlKTtcbiAgICAgICAgLy8gR2V0IHJlZGlyZWN0IFVSSVxuICAgICAgICBjb25zdCByZWRpcmVjdFVyaSA9IHRoaXMuZ2V0UmVkaXJlY3RVcmkoKTtcbiAgICAgICAgLy8gQnVpbGQgYXV0aG9yaXphdGlvbiBVUkxcbiAgICAgICAgY29uc3QgYXV0aFVybCA9IG5ldyBVUkwoYCR7dGhpcy5jb25maWcua2V5Y2xvYWtVcmx9L3JlYWxtcy8ke3RoaXMuY29uZmlnLnJlYWxtfS9wcm90b2NvbC9vcGVuaWQtY29ubmVjdC9hdXRoYCk7XG4gICAgICAgIGF1dGhVcmwuc2VhcmNoUGFyYW1zLnNldCgnY2xpZW50X2lkJywgdGhpcy5jb25maWcuY2xpZW50SWQpO1xuICAgICAgICBhdXRoVXJsLnNlYXJjaFBhcmFtcy5zZXQoJ3JlZGlyZWN0X3VyaScsIHJlZGlyZWN0VXJpKTtcbiAgICAgICAgYXV0aFVybC5zZWFyY2hQYXJhbXMuc2V0KCdyZXNwb25zZV90eXBlJywgJ2NvZGUnKTtcbiAgICAgICAgYXV0aFVybC5zZWFyY2hQYXJhbXMuc2V0KCdzY29wZScsICdvcGVuaWQgcHJvZmlsZScpO1xuICAgICAgICBhdXRoVXJsLnNlYXJjaFBhcmFtcy5zZXQoJ3N0YXRlJywgc3RhdGUpO1xuICAgICAgICBhdXRoVXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2NvZGVfY2hhbGxlbmdlJywgY29kZUNoYWxsZW5nZSk7XG4gICAgICAgIGF1dGhVcmwuc2VhcmNoUGFyYW1zLnNldCgnY29kZV9jaGFsbGVuZ2VfbWV0aG9kJywgJ1MyNTYnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0luaXRpYXRpbmcgT0F1dGgyIGZsb3cgd2l0aCByZWRpcmVjdCBVUkk6JywgcmVkaXJlY3RVcmkpO1xuICAgICAgICBjb25zb2xlLmxvZygnRnVsbCBhdXRoIFVSTDonLCBhdXRoVXJsLnRvU3RyaW5nKCkpO1xuICAgICAgICAvLyBSZWRpcmVjdCB0byBLZXljbG9ha1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGF1dGhVcmwudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRoZSBPQXV0aDIgY2FsbGJhY2tcbiAgICAgKi9cbiAgICBhc3luYyBoYW5kbGVDYWxsYmFjaygpIHtcbiAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgY29uc3QgY29kZSA9IHVybFBhcmFtcy5nZXQoJ2NvZGUnKTtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSB1cmxQYXJhbXMuZ2V0KCdzdGF0ZScpO1xuICAgICAgICBjb25zdCBlcnJvciA9IHVybFBhcmFtcy5nZXQoJ2Vycm9yJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdPQXV0aCBjYWxsYmFjayAtIFVSTCBwYXJhbXM6Jywgd2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdPQXV0aCBjYWxsYmFjayAtIGNvZGU6JywgY29kZSA/ICdwcmVzZW50JyA6ICdtaXNzaW5nJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdPQXV0aCBjYWxsYmFjayAtIHN0YXRlOicsIHN0YXRlID8gJ3ByZXNlbnQnIDogJ21pc3NpbmcnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ09BdXRoIGNhbGxiYWNrIC0gZXJyb3I6JywgZXJyb3IpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ09BdXRoMiBlcnJvcjonLCBlcnJvciwgdXJsUGFyYW1zLmdldCgnZXJyb3JfZGVzY3JpcHRpb24nKSk7XG4gICAgICAgICAgICB0aGlzLmNsZWFyU3RvcmVkQXV0aCgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY29kZSB8fCAhc3RhdGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPQXV0aCBjYWxsYmFjayAtIE5vIGNhbGxiYWNrIHBhcmFtZXRlcnMgZm91bmQnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gTm8gY2FsbGJhY2sgcGFyYW1ldGVyc1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdPQXV0aCBjYWxsYmFjayAtIFByb2Nlc3NpbmcgYXV0aG9yaXphdGlvbiBjb2RlLi4uJyk7XG4gICAgICAgIC8vIFZlcmlmeSBzdGF0ZSBwYXJhbWV0ZXJcbiAgICAgICAgY29uc3Qgc3RvcmVkU3RhdGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VxZWRpdC1hdXRoLXN0YXRlJyk7XG4gICAgICAgIGlmIChzdGF0ZSAhPT0gc3RvcmVkU3RhdGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1N0YXRlIHBhcmFtZXRlciBtaXNtYXRjaCcpO1xuICAgICAgICAgICAgdGhpcy5jbGVhclN0b3JlZEF1dGgoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBHZXQgc3RvcmVkIGNvZGUgdmVyaWZpZXJcbiAgICAgICAgY29uc3QgY29kZVZlcmlmaWVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlcWVkaXQtYXV0aC1jb2RlLXZlcmlmaWVyJyk7XG4gICAgICAgIGlmICghY29kZVZlcmlmaWVyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDb2RlIHZlcmlmaWVyIG5vdCBmb3VuZCcpO1xuICAgICAgICAgICAgdGhpcy5jbGVhclN0b3JlZEF1dGgoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gRXhjaGFuZ2UgY29kZSBmb3IgdG9rZW5zXG4gICAgICAgICAgICBjb25zdCB0b2tlblJlc3BvbnNlID0gYXdhaXQgdGhpcy5leGNoYW5nZUNvZGVGb3JUb2tlbnMoY29kZSwgY29kZVZlcmlmaWVyKTtcbiAgICAgICAgICAgIHRoaXMuc3RvcmVUb2tlbnModG9rZW5SZXNwb25zZSk7XG4gICAgICAgICAgICAvLyBDbGVhbiB1cCBVUkwgcGFyYW1ldGVyc1xuICAgICAgICAgICAgY29uc3QgY2xlYW5VcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgIGNsZWFuVXJsLnNlYXJjaCA9ICcnO1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgY2xlYW5VcmwudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1Rva2VuIGV4Y2hhbmdlIGZhaWxlZDonLCBlcnJvcik7XG4gICAgICAgICAgICB0aGlzLmNsZWFyU3RvcmVkQXV0aCgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEV4Y2hhbmdlIGF1dGhvcml6YXRpb24gY29kZSBmb3IgdG9rZW5zXG4gICAgICovXG4gICAgYXN5bmMgZXhjaGFuZ2VDb2RlRm9yVG9rZW5zKGNvZGUsIGNvZGVWZXJpZmllcikge1xuICAgICAgICBjb25zdCB0b2tlblVybCA9IGAke3RoaXMuY29uZmlnLmtleWNsb2FrVXJsfS9yZWFsbXMvJHt0aGlzLmNvbmZpZy5yZWFsbX0vcHJvdG9jb2wvb3BlbmlkLWNvbm5lY3QvdG9rZW5gO1xuICAgICAgICBjb25zdCBib2R5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgICAgICBncmFudF90eXBlOiAnYXV0aG9yaXphdGlvbl9jb2RlJyxcbiAgICAgICAgICAgIGNsaWVudF9pZDogdGhpcy5jb25maWcuY2xpZW50SWQsXG4gICAgICAgICAgICBjb2RlOiBjb2RlLFxuICAgICAgICAgICAgcmVkaXJlY3RfdXJpOiB0aGlzLmdldFJlZGlyZWN0VXJpKCksXG4gICAgICAgICAgICBjb2RlX3ZlcmlmaWVyOiBjb2RlVmVyaWZpZXIsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRva2VuVXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogYm9keSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yVGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVG9rZW4gZXhjaGFuZ2UgZmFpbGVkOiAke3Jlc3BvbnNlLnN0YXR1c30gJHtlcnJvclRleHR9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJ5IHRvIHJlZnJlc2ggdGhlIGFjY2VzcyB0b2tlbiB1c2luZyB0aGUgcmVmcmVzaCB0b2tlblxuICAgICAqL1xuICAgIGFzeW5jIHJlZnJlc2hUb2tlbigpIHtcbiAgICAgICAgY29uc3QgcmVmcmVzaFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5yZWZyZXNoVG9rZW5LZXkpO1xuICAgICAgICBpZiAoIXJlZnJlc2hUb2tlbikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuVXJsID0gYCR7dGhpcy5jb25maWcua2V5Y2xvYWtVcmx9L3JlYWxtcy8ke3RoaXMuY29uZmlnLnJlYWxtfS9wcm90b2NvbC9vcGVuaWQtY29ubmVjdC90b2tlbmA7XG4gICAgICAgICAgICBjb25zdCBib2R5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgICAgICAgICAgZ3JhbnRfdHlwZTogJ3JlZnJlc2hfdG9rZW4nLFxuICAgICAgICAgICAgICAgIGNsaWVudF9pZDogdGhpcy5jb25maWcuY2xpZW50SWQsXG4gICAgICAgICAgICAgICAgcmVmcmVzaF90b2tlbjogcmVmcmVzaFRva2VuLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHRva2VuVXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBib2R5LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVmcmVzaCBmYWlsZWQsIGNsZWFyIHN0b3JlZCB0b2tlbnNcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyU3RvcmVkQXV0aCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdG9rZW5SZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIHRoaXMuc3RvcmVUb2tlbnModG9rZW5SZXNwb25zZSk7XG4gICAgICAgICAgICByZXR1cm4gdG9rZW5SZXNwb25zZS5hY2Nlc3NfdG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUb2tlbiByZWZyZXNoIGZhaWxlZDonLCBlcnJvcik7XG4gICAgICAgICAgICB0aGlzLmNsZWFyU3RvcmVkQXV0aCgpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGEgdmFsaWQgYWNjZXNzIHRva2VuLCByZWZyZXNoaW5nIGlmIG5lY2Vzc2FyeVxuICAgICAqL1xuICAgIGFzeW5jIGdldFZhbGlkVG9rZW4oKSB7XG4gICAgICAgIC8vIFRyeSB0byBnZXQgc3RvcmVkIHRva2VuXG4gICAgICAgIGxldCB0b2tlbiA9IHRoaXMuZ2V0U3RvcmVkVG9rZW4oKTtcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHJ5IHRvIHJlZnJlc2ggdG9rZW5cbiAgICAgICAgdG9rZW4gPSBhd2FpdCB0aGlzLnJlZnJlc2hUb2tlbigpO1xuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgfVxuICAgICAgICAvLyBObyB2YWxpZCB0b2tlbiBhdmFpbGFibGVcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHVzZXIgaXMgY3VycmVudGx5IGF1dGhlbnRpY2F0ZWRcbiAgICAgKi9cbiAgICBhc3luYyBpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy5nZXRWYWxpZFRva2VuKCk7XG4gICAgICAgIHJldHVybiB0b2tlbiAhPT0gbnVsbDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTG9nb3V0IHVzZXIgYnkgY2xlYXJpbmcgdG9rZW5zIGFuZCBvcHRpb25hbGx5IHJlZGlyZWN0IHRvIEtleWNsb2FrIGxvZ291dFxuICAgICAqL1xuICAgIGFzeW5jIGxvZ291dChyZWRpcmVjdFRvS2V5Y2xvYWsgPSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5nZXRTdG9yZWRUb2tlbigpO1xuICAgICAgICB0aGlzLmNsZWFyU3RvcmVkQXV0aCgpO1xuICAgICAgICBpZiAocmVkaXJlY3RUb0tleWNsb2FrICYmIHRva2VuKSB7XG4gICAgICAgICAgICBjb25zdCBsb2dvdXRVcmwgPSBuZXcgVVJMKGAke3RoaXMuY29uZmlnLmtleWNsb2FrVXJsfS9yZWFsbXMvJHt0aGlzLmNvbmZpZy5yZWFsbX0vcHJvdG9jb2wvb3BlbmlkLWNvbm5lY3QvbG9nb3V0YCk7XG4gICAgICAgICAgICBsb2dvdXRVcmwuc2VhcmNoUGFyYW1zLnNldCgncG9zdF9sb2dvdXRfcmVkaXJlY3RfdXJpJywgdGhpcy5nZXRSZWRpcmVjdFVyaSgpKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbG9nb3V0VXJsLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIENyZWF0ZSBhbiBBdXRoTWFuYWdlciBmcm9tIHN0b3JlZCBjb25maWd1cmF0aW9uIGluIGxvY2FsU3RvcmFnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQXV0aE1hbmFnZXJGcm9tU3RvcmFnZSgpIHtcbiAgICBjb25zdCBjb25maWdKc29uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlcWVkaXQtYXV0aC1jb25maWcnKTtcbiAgICBpZiAoIWNvbmZpZ0pzb24pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IEpTT04ucGFyc2UoY29uZmlnSnNvbik7XG4gICAgICAgIHJldHVybiBuZXcgQXV0aE1hbmFnZXIoY29uZmlnKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHBhcnNpbmcgc3RvcmVkIGF1dGggY29uZmlnOicsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuLyoqXG4gKiBQYXJzZSBhdXRoZW50aWNhdGlvbiBjb25maWd1cmF0aW9uIGZyb20gVVJMIHBhcmFtZXRlcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQXV0aENvbmZpZygpIHtcbiAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgIGNvbnN0IGF1dGhFbmRwb2ludCA9IHVybFBhcmFtcy5nZXQoJ2F1dGgtZW5kcG9pbnQnKTtcbiAgICBjb25zdCByZWFsbSA9IHVybFBhcmFtcy5nZXQoJ2F1dGgtcmVhbG0nKSB8fCAnbWFzdGVyJztcbiAgICBjb25zdCBjbGllbnRJZCA9IHVybFBhcmFtcy5nZXQoJ2F1dGgtY2xpZW50LWlkJykgfHwgJ3NlcWVkaXQnO1xuICAgIGlmICghYXV0aEVuZHBvaW50KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBrZXljbG9ha1VybDogYXV0aEVuZHBvaW50LFxuICAgICAgICByZWFsbTogcmVhbG0sXG4gICAgICAgIGNsaWVudElkOiBjbGllbnRJZCxcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgU2VxdWVuY2VWaWV3ZXIgfSBmcm9tICcuL3NlcXVlbmNlLXZpZXdlcic7XG5pbXBvcnQgeyBwYXJzZV9mYXN0YSwgcmV2ZXJzZV9jb21wbGVtZW50LCB0cmFuc2xhdGUsIHNlYXJjaCB9IGZyb20gJy4uL3BrZy9zZXFlZGl0X3dhc20nO1xuaW1wb3J0IHsgQXV0aE1hbmFnZXIsIHBhcnNlQXV0aENvbmZpZywgY3JlYXRlQXV0aE1hbmFnZXJGcm9tU3RvcmFnZSB9IGZyb20gJy4vYXV0aCc7XG5pbXBvcnQgeyBBcHBTdGF0ZU1hbmFnZXIgfSBmcm9tICcuL2FwcC1zdGF0ZSc7XG5hc3luYyBmdW5jdGlvbiBtYWluKCkge1xuICAgIGNvbnN0IHNlcXVlbmNlQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlcXVlbmNlLWNhbnZhcycpO1xuICAgIGNvbnN0IG5hbWVzQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWVzLWNhbnZhcycpO1xuICAgIGNvbnN0IHJ1bGVyQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3J1bGVyLWNhbnZhcycpO1xuICAgIGNvbnN0IHZpZXdlciA9IG5ldyBTZXF1ZW5jZVZpZXdlcihzZXF1ZW5jZUNhbnZhcywgbmFtZXNDYW52YXMsIHJ1bGVyQ2FudmFzKTtcbiAgICBjb25zdCB1cmxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cmwtaW5wdXQnKTtcbiAgICBjb25zdCBsb2FkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWQtYnV0dG9uJyk7XG4gICAgY29uc3QgcmV2Q29tcEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXZjb21wLWJ1dHRvbicpO1xuICAgIGNvbnN0IHRyYW5zbGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2xhdGUtYnV0dG9uJyk7XG4gICAgY29uc3QgZnJhbWVCdXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZyYW1lLWJ1dHRvbnMnKTtcbiAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtaW5wdXQnKTtcbiAgICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJ1dHRvbicpO1xuICAgIGNvbnN0IHNhdmVSZXZpc2lvbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYXZlLXJldmlzaW9uLWJ1dHRvbicpO1xuICAgIGNvbnN0IGxvZ291dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvdXQtYnV0dG9uJyk7XG4gICAgbGV0IGlzVHJhbnNsYXRlZCA9IGZhbHNlO1xuICAgIGxldCBjdXJyZW50RnJhbWUgPSAxO1xuICAgIGxldCBtZXRhZGF0YSA9IG51bGw7XG4gICAgbGV0IGdyb3VwSWQgPSBudWxsO1xuICAgIGxldCBhdXRoTWFuYWdlciA9IG51bGw7XG4gICAgbGV0IHNlYXJjaFJlc3VsdHM7XG4gICAgbGV0IHN0YXRlV2FzUmVzdG9yZWQgPSBmYWxzZTtcbiAgICBsZXQgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICBsZXQgZmFzdGFVcmwgPSB1cmxQYXJhbXMuZ2V0KCdpbnB1dC1mYXN0YScpO1xuICAgIGxldCBtZXRhZGF0YVVybCA9IHVybFBhcmFtcy5nZXQoJ21ldGFkYXRhLXVybCcpO1xuICAgIGxldCBvcmdhbmlzbSA9IHVybFBhcmFtcy5nZXQoJ29yZ2FuaXNtJyk7XG4gICAgLy8gRGVidWc6IExvZyB0aGUgY3VycmVudCBVUkwgdG8gc2VlIHdoYXQgd2UncmUgZ2V0dGluZyBiYWNrIGZyb20gS2V5Y2xvYWtcbiAgICBjb25zb2xlLmxvZygnUGFnZSBsb2FkZWQgd2l0aCBVUkw6Jywgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgIGNvbnNvbGUubG9nKCdVUkwgc2VhcmNoIHBhcmFtczonLCB3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICAvLyBJbml0aWFsaXplIGF1dGhlbnRpY2F0aW9uIGZpcnN0XG4gICAgY29uc3QgYXV0aENvbmZpZyA9IHBhcnNlQXV0aENvbmZpZygpO1xuICAgIGlmIChhdXRoQ29uZmlnKSB7XG4gICAgICAgIGF1dGhNYW5hZ2VyID0gbmV3IEF1dGhNYW5hZ2VyKGF1dGhDb25maWcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gVHJ5IHRvIGNyZWF0ZSBmcm9tIHN0b3JlZCBjb25maWcgKGUuZy4sIGR1cmluZyBPQXV0aCBjYWxsYmFjaylcbiAgICAgICAgYXV0aE1hbmFnZXIgPSBjcmVhdGVBdXRoTWFuYWdlckZyb21TdG9yYWdlKCk7XG4gICAgfVxuICAgIC8vIENoZWNrIGlmIHdlIGhhdmUgT0F1dGggY2FsbGJhY2sgcGFyYW1ldGVycyAoY29kZS9zdGF0ZSlcbiAgICBjb25zdCBjdXJyZW50VXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICBjb25zdCBoYXNPQXV0aENhbGxiYWNrID0gY3VycmVudFVybFBhcmFtcy5oYXMoJ2NvZGUnKSAmJiBjdXJyZW50VXJsUGFyYW1zLmhhcygnc3RhdGUnKTtcbiAgICBjb25zb2xlLmxvZygnT0F1dGggY2FsbGJhY2sgcGFyYW1ldGVycyBwcmVzZW50OicsIGhhc09BdXRoQ2FsbGJhY2spO1xuICAgIGNvbnNvbGUubG9nKCdJcyByZXR1cm5pbmcgZnJvbSBhdXRoOicsIEFwcFN0YXRlTWFuYWdlci5pc1JldHVybmluZ0Zyb21BdXRoKCkpO1xuICAgIGNvbnNvbGUubG9nKCdBdXRoTWFuYWdlciBleGlzdHM6JywgYXV0aE1hbmFnZXIgPyAnWUVTJyA6ICdOTycpO1xuICAgIC8vIEhhbmRsZSBPQXV0aCBjYWxsYmFjayBGSVJTVCBpZiBwcmVzZW50LCByZWdhcmRsZXNzIG9mIHN0YXRlIHJlc3RvcmF0aW9uIHN0YXR1c1xuICAgIGxldCBjYWxsYmFja0hhbmRsZWQgPSBmYWxzZTtcbiAgICBpZiAoYXV0aE1hbmFnZXIgJiYgaGFzT0F1dGhDYWxsYmFjaykge1xuICAgICAgICBjb25zb2xlLmxvZygnUHJvY2Vzc2luZyBPQXV0aCBjYWxsYmFjay4uLicpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2FsbGJhY2tIYW5kbGVkID0gYXdhaXQgYXV0aE1hbmFnZXIuaGFuZGxlQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFja0hhbmRsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aGVudGljYXRpb24gY2FsbGJhY2sgaGFuZGxlZCBzdWNjZXNzZnVsbHknKTtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBhdXRoZW50aWNhdGlvbiBzdGF0dXMgaW1tZWRpYXRlbHkgYWZ0ZXIgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSBhd2FpdCBhdXRoTWFuYWdlci5pc0F1dGhlbnRpY2F0ZWQoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQXV0aGVudGljYXRpb24gc3RhdHVzIGFmdGVyIGNhbGxiYWNrOicsIGlzQXV0aGVudGljYXRlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnT0F1dGggY2FsbGJhY2sgcHJvY2Vzc2luZyBmYWlsZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHByb2Nlc3NpbmcgT0F1dGggY2FsbGJhY2s6JywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGhhc09BdXRoQ2FsbGJhY2sgJiYgIWF1dGhNYW5hZ2VyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ09BdXRoIGNhbGxiYWNrIGRldGVjdGVkIGJ1dCBBdXRoTWFuYWdlciBpcyBub3QgYXZhaWxhYmxlIScpO1xuICAgIH1cbiAgICAvLyBDaGVjayBpZiB3ZSdyZSByZXR1cm5pbmcgZnJvbSBhdXRoZW50aWNhdGlvbiBhbmQgcmVzdG9yZSBzdGF0ZVxuICAgIC8vIE9OTFkgZG8gdGhpcyBBRlRFUiBwcm9jZXNzaW5nIHRoZSBPQXV0aCBjYWxsYmFja1xuICAgIGxldCBzaG91bGRDb250aW51ZVNhdmUgPSBmYWxzZTtcbiAgICBpZiAoQXBwU3RhdGVNYW5hZ2VyLmlzUmV0dXJuaW5nRnJvbUF1dGgoKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnUmVzdG9yaW5nIHN0YXRlIGFmdGVyIGF1dGhlbnRpY2F0aW9uJyk7XG4gICAgICAgIGNvbnN0IHNhdmVkU3RhdGUgPSBBcHBTdGF0ZU1hbmFnZXIucmVzdG9yZVN0YXRlQWZ0ZXJBdXRoKCk7XG4gICAgICAgIGlmIChzYXZlZFN0YXRlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzdG9yaW5nIGFwcGxpY2F0aW9uIHN0YXRlIGFmdGVyIGF1dGhlbnRpY2F0aW9uJyk7XG4gICAgICAgICAgICBzdGF0ZVdhc1Jlc3RvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIFJlc3RvcmUgVVJMIHBhcmFtZXRlcnMgQUZURVIgaGFuZGxpbmcgT0F1dGggY2FsbGJhY2tcbiAgICAgICAgICAgIEFwcFN0YXRlTWFuYWdlci5yZXN0b3JlVXJsUGFyYW1zKHNhdmVkU3RhdGUudXJsUGFyYW1zKTtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBsb2NhbCB2YXJpYWJsZXMgd2l0aCByZXN0b3JlZCBwYXJhbWV0ZXJzXG4gICAgICAgICAgICB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICAgICAgZmFzdGFVcmwgPSB1cmxQYXJhbXMuZ2V0KCdpbnB1dC1mYXN0YScpO1xuICAgICAgICAgICAgbWV0YWRhdGFVcmwgPSB1cmxQYXJhbXMuZ2V0KCdtZXRhZGF0YS11cmwnKTtcbiAgICAgICAgICAgIG9yZ2FuaXNtID0gdXJsUGFyYW1zLmdldCgnb3JnYW5pc20nKTtcbiAgICAgICAgICAgIC8vIFJlc3RvcmUgYXBwbGljYXRpb24gc3RhdGVcbiAgICAgICAgICAgIGlzVHJhbnNsYXRlZCA9IHNhdmVkU3RhdGUuc2VxdWVuY2VzLmlzVHJhbnNsYXRlZDtcbiAgICAgICAgICAgIGN1cnJlbnRGcmFtZSA9IHNhdmVkU3RhdGUuc2VxdWVuY2VzLmN1cnJlbnRGcmFtZTtcbiAgICAgICAgICAgIG1ldGFkYXRhID0gc2F2ZWRTdGF0ZS5tZXRhZGF0YTtcbiAgICAgICAgICAgIGdyb3VwSWQgPSBzYXZlZFN0YXRlLm1ldGFkYXRhPy5ncm91cElkIHx8IG51bGw7XG4gICAgICAgICAgICBzZWFyY2hSZXN1bHRzID0gc2F2ZWRTdGF0ZS5zZWFyY2hSZXN1bHRzO1xuICAgICAgICAgICAgLy8gUmVzdG9yZSBzZXF1ZW5jZXMgaW4gdGhlIHZpZXdlclxuICAgICAgICAgICAgdmlld2VyLnNldFNlcXVlbmNlcyhzYXZlZFN0YXRlLnNlcXVlbmNlcy5uYW1lcywgc2F2ZWRTdGF0ZS5zZXF1ZW5jZXMuc2VxdWVuY2VzKTtcbiAgICAgICAgICAgIC8vIFJlc3RvcmUgdHJhbnNsYXRlZCBzdGF0ZSBpZiBhcHBsaWNhYmxlXG4gICAgICAgICAgICBpZiAoc2F2ZWRTdGF0ZS5zZXF1ZW5jZXMuaXNUcmFuc2xhdGVkICYmIHNhdmVkU3RhdGUuc2VxdWVuY2VzLnRyYW5zbGF0ZWRTZXF1ZW5jZXMpIHtcbiAgICAgICAgICAgICAgICB2aWV3ZXIuc2V0VHJhbnNsYXRlZFNlcXVlbmNlcyhzYXZlZFN0YXRlLnNlcXVlbmNlcy50cmFuc2xhdGVkU2VxdWVuY2VzLCBzYXZlZFN0YXRlLnNlcXVlbmNlcy5jdXJyZW50RnJhbWUpO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdOdWNsZW90aWRlIE1vZGUnO1xuICAgICAgICAgICAgICAgIGZyYW1lQnV0dG9ucy5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSZXN0b3JlIHNlYXJjaCByZXN1bHRzIGlmIGFwcGxpY2FibGVcbiAgICAgICAgICAgIGlmIChzYXZlZFN0YXRlLnNlYXJjaFJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICB2aWV3ZXIuc2V0U2VhcmNoUmVzdWx0cyhzYXZlZFN0YXRlLnNlYXJjaFJlc3VsdHMucmVzdWx0cywgc2F2ZWRTdGF0ZS5zZWFyY2hSZXN1bHRzLnF1ZXJ5TGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHdlIHNob3VsZCBjb250aW51ZSB3aXRoIHNhdmluZyByZXZpc2lvbiBhZnRlciBhdXRoZW50aWNhdGlvblxuICAgICAgICAgICAgc2hvdWxkQ29udGludWVTYXZlID0gc2F2ZWRTdGF0ZS5zaG91bGRDb250aW51ZVNhdmVSZXZpc2lvbiB8fCBmYWxzZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTaG91bGQgY29udGludWUgc2F2ZSBhZnRlciBhdXRoOicsIHNob3VsZENvbnRpbnVlU2F2ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gRmluYWxpemUgYXV0aGVudGljYXRpb24gc2V0dXBcbiAgICBpZiAoYXV0aE1hbmFnZXIpIHtcbiAgICAgICAgLy8gVXBkYXRlIHNhdmUgcmV2aXNpb24gYnV0dG9uIGJhc2VkIG9uIGF1dGggc3RhdHVzXG4gICAgICAgIGF3YWl0IHVwZGF0ZVNhdmVCdXR0b25TdGF0ZSgpO1xuICAgICAgICAvLyBJZiB3ZSBzaG91bGQgY29udGludWUgc2F2aW5nIGFuZCB3ZSdyZSBub3cgYXV0aGVudGljYXRlZCwgZG8gaXRcbiAgICAgICAgaWYgKHNob3VsZENvbnRpbnVlU2F2ZSkge1xuICAgICAgICAgICAgY29uc3QgaXNBdXRoID0gYXdhaXQgYXV0aE1hbmFnZXIuaXNBdXRoZW50aWNhdGVkKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ2hlY2tpbmcgYXV0aGVudGljYXRpb24gc3RhdHVzIGFmdGVyIGNhbGxiYWNrOicsIGlzQXV0aCk7XG4gICAgICAgICAgICBpZiAoaXNBdXRoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbnRpbnVpbmcgd2l0aCBzYXZlIHJldmlzaW9uIGFmdGVyIHN1Y2Nlc3NmdWwgYXV0aGVudGljYXRpb24uLi4nKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2F2ZVJldmlzaW9uQnV0dG9uLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoZW50aWNhdGlvbiBmYWlsZWQsIG5vdCBjb250aW51aW5nIHdpdGggc2F2ZSByZXZpc2lvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBObyBhdXRoIGNvbmZpZywgZGlzYWJsZSBzYXZlIHJldmlzaW9uIGJ1dHRvblxuICAgICAgICBzYXZlUmV2aXNpb25CdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBzYXZlUmV2aXNpb25CdXR0b24udGV4dENvbnRlbnQgPSAnU2F2ZSBSZXZpc2lvbiAoTm8gQXV0aCknO1xuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiB1cGRhdGVTYXZlQnV0dG9uU3RhdGUoKSB7XG4gICAgICAgIGlmICghYXV0aE1hbmFnZXIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IGlzQXV0aCA9IGF3YWl0IGF1dGhNYW5hZ2VyLmlzQXV0aGVudGljYXRlZCgpO1xuICAgICAgICBpZiAoaXNBdXRoKSB7XG4gICAgICAgICAgICBzYXZlUmV2aXNpb25CdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHNhdmVSZXZpc2lvbkJ1dHRvbi50ZXh0Q29udGVudCA9ICdTYXZlIGFzIFJldmlzaW9uJztcbiAgICAgICAgICAgIGxvZ291dEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzYXZlUmV2aXNpb25CdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHNhdmVSZXZpc2lvbkJ1dHRvbi50ZXh0Q29udGVudCA9ICdMb2dpbiAmIFNhdmUgUmV2aXNpb24nO1xuICAgICAgICAgICAgbG9nb3V0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZFNlcXVlbmNlcygpIHtcbiAgICAgICAgY29uc3QgdXJsID0gdXJsSW5wdXQudmFsdWU7XG4gICAgICAgIGlmICghdXJsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICAgICAgY29uc3QgZmFzdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICBjb25zdCBzZXF1ZW5jZXNEYXRhID0gcGFyc2VfZmFzdGEoZmFzdGEpO1xuICAgICAgICAgICAgY29uc3QgbmFtZXMgPSBzZXF1ZW5jZXNEYXRhLm1hcChzID0+IHMuaWQpO1xuICAgICAgICAgICAgY29uc3Qgc2VxdWVuY2VzID0gc2VxdWVuY2VzRGF0YS5tYXAocyA9PiBzLnJlc2lkdWVzKTtcbiAgICAgICAgICAgIHZpZXdlci5zZXRTZXF1ZW5jZXMobmFtZXMsIHNlcXVlbmNlcyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIG9yIHBhcnNpbmcgRkFTVEEgZmlsZTonLCBlcnJvcik7XG4gICAgICAgICAgICBhbGVydCgnRmFpbGVkIHRvIGxvYWQgc2VxdWVuY2VzLiBTZWUgY29uc29sZSBmb3IgZGV0YWlscy4nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkTWV0YWRhdGEodXJsKSB7XG4gICAgICAgIGlmICghdXJsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICAgICAgY29uc3QgdHN2ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgY29uc3QgbGluZXMgPSB0c3YudHJpbSgpLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IGxpbmVzWzBdLnNwbGl0KCdcXHQnKTtcbiAgICAgICAgICAgIGNvbnN0IHJvd3MgPSBsaW5lcy5zbGljZSgxKS5tYXAobGluZSA9PiBsaW5lLnNwbGl0KCdcXHQnKSk7XG4gICAgICAgICAgICBtZXRhZGF0YSA9IHsgaGVhZGVyLCByb3dzLCBvcmlnaW5hbFRleHQ6IHRzdiB9O1xuICAgICAgICAgICAgY29uc3QgZ3JvdXBJZEluZGV4ID0gaGVhZGVyLmluZGV4T2YoJ2dyb3VwSWQnKTtcbiAgICAgICAgICAgIGlmIChncm91cElkSW5kZXggIT09IC0xICYmIHJvd3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGdyb3VwSWQgPSByb3dzWzBdW2dyb3VwSWRJbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnQ291bGQgbm90IGZpbmQgZ3JvdXBJZCBpbiBtZXRhZGF0YSBmaWxlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBvciBwYXJzaW5nIG1ldGFkYXRhIGZpbGU6JywgZXJyb3IpO1xuICAgICAgICAgICAgYWxlcnQoJ0ZhaWxlZCB0byBsb2FkIG1ldGFkYXRhLiBTZWUgY29uc29sZSBmb3IgZGV0YWlscy4nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRBdXRoVG9rZW4oKSB7XG4gICAgICAgIGlmICghYXV0aE1hbmFnZXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIGF1dGhlbnRpY2F0aW9uIG1hbmFnZXIgY29uZmlndXJlZCcpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF3YWl0IGF1dGhNYW5hZ2VyLmdldFZhbGlkVG9rZW4oKTtcbiAgICB9XG4gICAgbG9hZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRTZXF1ZW5jZXMpO1xuICAgIHJldkNvbXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kaWNlcyA9IHZpZXdlci5nZXRTZWxlY3RlZFNlcXVlbmNlSW5kaWNlcygpO1xuICAgICAgICBpZiAoc2VsZWN0ZWRJbmRpY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNlbGVjdGVkSW5kaWNlcy5mb3JFYWNoKHNlcUluZGV4ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFNlcXVlbmNlID0gdmlld2VyLmdldFNlcXVlbmNlcygpW3NlcUluZGV4XTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXZDb21wU2VxdWVuY2UgPSByZXZlcnNlX2NvbXBsZW1lbnQob3JpZ2luYWxTZXF1ZW5jZSk7XG4gICAgICAgICAgICAgICAgdmlld2VyLnVwZGF0ZVNlcXVlbmNlKHNlcUluZGV4LCByZXZDb21wU2VxdWVuY2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2aWV3ZXIuY2xlYXJTZWxlY3RlZFNlcXVlbmNlTmFtZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2Ugc2VsZWN0IG9uZSBvciBtb3JlIHNlcXVlbmNlcyB0byByZXZlcnNlIGNvbXBsZW1lbnQuJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVBbGwoZnJhbWUpIHtcbiAgICAgICAgY29uc3Qgc2VxdWVuY2VzID0gdmlld2VyLmdldFNlcXVlbmNlcygpO1xuICAgICAgICBjb25zdCB0cmFuc2xhdGVkU2VxdWVuY2VzID0gc2VxdWVuY2VzLm1hcChzZXEgPT4gdHJhbnNsYXRlKHNlcSwgZnJhbWUpKTtcbiAgICAgICAgdmlld2VyLnNldFRyYW5zbGF0ZWRTZXF1ZW5jZXModHJhbnNsYXRlZFNlcXVlbmNlcywgZnJhbWUpO1xuICAgICAgICBjdXJyZW50RnJhbWUgPSBmcmFtZTtcbiAgICAgICAgaXNUcmFuc2xhdGVkID0gdHJ1ZTtcbiAgICAgICAgdHJhbnNsYXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ051Y2xlb3RpZGUgTW9kZSc7XG4gICAgICAgIGZyYW1lQnV0dG9ucy5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgfVxuICAgIHRyYW5zbGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RyYW5zbGF0ZSBidXR0b24gY2xpY2tlZCcsIGlzVHJhbnNsYXRlZCk7XG4gICAgICAgIGlmIChpc1RyYW5zbGF0ZWQpIHtcbiAgICAgICAgICAgIHZpZXdlci5zZXROdWNsZW90aWRlTW9kZSgpO1xuICAgICAgICAgICAgaXNUcmFuc2xhdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0cmFuc2xhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnVHJhbnNsYXRlJztcbiAgICAgICAgICAgIGZyYW1lQnV0dG9ucy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdHJhbnNsYXRlQWxsKGN1cnJlbnRGcmFtZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBzZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoSW5wdXQudmFsdWU7XG4gICAgICAgIGlmICghcXVlcnkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHNlcXVlbmNlcyA9IHZpZXdlci5nZXRTZXF1ZW5jZXMoKTtcbiAgICAgICAgY29uc3Qgc2VhcmNoUmVzdWx0c0RhdGEgPSBzZXF1ZW5jZXMubWFwKHNlcSA9PiBzZWFyY2goc2VxLCBxdWVyeSkpO1xuICAgICAgICBjb25zdCBjb252ZXJ0ZWRSZXN1bHRzID0gc2VhcmNoUmVzdWx0c0RhdGEubWFwKHJlcyA9PiBBcnJheS5mcm9tKHJlcykpO1xuICAgICAgICB2aWV3ZXIuc2V0U2VhcmNoUmVzdWx0cyhjb252ZXJ0ZWRSZXN1bHRzLCBxdWVyeS5sZW5ndGgpO1xuICAgICAgICAvLyBTdG9yZSBzZWFyY2ggcmVzdWx0cyBmb3Igc3RhdGUgbWFuYWdlbWVudFxuICAgICAgICBzZWFyY2hSZXN1bHRzID0geyByZXN1bHRzOiBjb252ZXJ0ZWRSZXN1bHRzLCBxdWVyeUxlbmd0aDogcXVlcnkubGVuZ3RoIH07XG4gICAgfSk7XG4gICAgc2F2ZVJldmlzaW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnU2F2ZSByZXZpc2lvbiBidXR0b24gY2xpY2tlZCcpO1xuICAgICAgICBpZiAoIWF1dGhNYW5hZ2VyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdObyBhdXRoZW50aWNhdGlvbiBtYW5hZ2VyIGNvbmZpZ3VyZWQnKTtcbiAgICAgICAgICAgIGFsZXJ0KCdObyBhdXRoZW50aWNhdGlvbiBjb25maWd1cmVkLicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJldHVyblVybCA9IHVybFBhcmFtcy5nZXQoJ3JldHVybi11cmwnKTtcbiAgICAgICAgaWYgKCFyZXR1cm5VcmwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05vIHJldHVybi11cmwgc3BlY2lmaWVkIGluIFVSTCBwYXJhbXMnKTtcbiAgICAgICAgICAgIGFsZXJ0KCdObyByZXR1cm4tdXJsIHNwZWNpZmllZC4nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnUmV0dXJuIFVSTDonLCByZXR1cm5VcmwpO1xuICAgICAgICBpZiAoIW9yZ2FuaXNtKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdObyBvcmdhbmlzbSBzcGVjaWZpZWQgaW4gVVJMIHBhcmFtcycpO1xuICAgICAgICAgICAgYWxlcnQoJ05vIG9yZ2FuaXNtIHNwZWNpZmllZCBpbiBVUkwuJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ09yZ2FuaXNtOicsIG9yZ2FuaXNtKTtcbiAgICAgICAgaWYgKCFtZXRhZGF0YSB8fCAhZ3JvdXBJZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTWV0YWRhdGEgb3IgZ3JvdXBJZCBub3QgYXZhaWxhYmxlJywgeyBtZXRhZGF0YTogISFtZXRhZGF0YSwgZ3JvdXBJZCB9KTtcbiAgICAgICAgICAgIGFsZXJ0KCdNZXRhZGF0YSBub3QgbG9hZGVkIG9yIGdyb3VwSWQgbm90IGZvdW5kLicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdNZXRhZGF0YSBsb2FkZWQsIGdyb3VwSWQ6JywgZ3JvdXBJZCk7XG4gICAgICAgIC8vIENoZWNrIGlmIHVzZXIgaXMgYXV0aGVudGljYXRlZCwgaWYgbm90LCBpbml0aWF0ZSBhdXRoIGZsb3dcbiAgICAgICAgY29uc3QgaXNBdXRoID0gYXdhaXQgYXV0aE1hbmFnZXIuaXNBdXRoZW50aWNhdGVkKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIGF1dGhlbnRpY2F0ZWQ6JywgaXNBdXRoKTtcbiAgICAgICAgaWYgKCFpc0F1dGgpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgcmVmcmVzaCB0aGUgcGFnZSB0byBhdXRoZW50aWNhdGUgZmlyc3QuJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXNlciBpcyBhdXRoZW50aWNhdGVkLCBwcm9jZWVkIHdpdGggc2F2aW5nIHJldmlzaW9uXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIGlzIGF1dGhlbnRpY2F0ZWQsIHByb2NlZWRpbmcgd2l0aCByZXZpc2lvbiBzYXZlLi4uJyk7XG4gICAgICAgIGNvbnN0IGF1dGhUb2tlbiA9IGF3YWl0IGdldEF1dGhUb2tlbigpO1xuICAgICAgICBpZiAoIWF1dGhUb2tlbikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGdldCBhdXRoZW50aWNhdGlvbiB0b2tlbicpO1xuICAgICAgICAgICAgYWxlcnQoJ0ZhaWxlZCB0byBnZXQgYXV0aGVudGljYXRpb24gdG9rZW4uJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ0F1dGggdG9rZW4gb2J0YWluZWQgc3VjY2Vzc2Z1bGx5Jyk7XG4gICAgICAgIGNvbnN0IHNlcXVlbmNlcyA9IHZpZXdlci5nZXRTZXF1ZW5jZXMoKTtcbiAgICAgICAgY29uc3QgbmFtZXMgPSB2aWV3ZXIuZ2V0U2VxdWVuY2VOYW1lcygpO1xuICAgICAgICBjb25zb2xlLmxvZygnU2VxdWVuY2VzIHRvIHNhdmU6JywgbmFtZXMubGVuZ3RoLCAnc2VxdWVuY2VzJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdPcmlnaW5hbCBzZXF1ZW5jZSBuYW1lczonLCBuYW1lcyk7XG4gICAgICAgIC8vIFN0YXJ0IGZyb20gcGFyc2VkIGhlYWRlci9yb3dzIHNvIHdlIGNhbiBtb2RpZnkgY29sdW1ucyBwcm9ncmFtbWF0aWNhbGx5XG4gICAgICAgIGxldCB3b3JraW5nSGVhZGVyID0gWy4uLm1ldGFkYXRhLmhlYWRlcl07XG4gICAgICAgIGxldCB3b3JraW5nUm93cyA9IG1ldGFkYXRhLnJvd3MubWFwKHIgPT4gWy4uLnJdKTtcbiAgICAgICAgLy8gUmVtb3ZlIHN1Ym1pc3Npb25JZCBjb2x1bW4gaWYgcHJlc2VudFxuICAgICAgICBjb25zdCBzdWJtaXNzaW9uSWRJbmRleCA9IHdvcmtpbmdIZWFkZXIuaW5kZXhPZignc3VibWlzc2lvbklkJyk7XG4gICAgICAgIGlmIChzdWJtaXNzaW9uSWRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZW1vdmluZyBzdWJtaXNzaW9uSWQgY29sdW1uIGZyb20gbWV0YWRhdGEnKTtcbiAgICAgICAgICAgIHdvcmtpbmdIZWFkZXIgPSB3b3JraW5nSGVhZGVyLmZpbHRlcigoXywgaWR4KSA9PiBpZHggIT09IHN1Ym1pc3Npb25JZEluZGV4KTtcbiAgICAgICAgICAgIHdvcmtpbmdSb3dzID0gd29ya2luZ1Jvd3MubWFwKHJvdyA9PiByb3cuZmlsdGVyKChfLCBpZHgpID0+IGlkeCAhPT0gc3VibWlzc2lvbklkSW5kZXgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBzdWJtaXNzaW9uSWQgY29sdW1uIGZvdW5kIGluIG1ldGFkYXRhOyB1c2luZyBvcmlnaW5hbCBtZXRhZGF0YScpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVuc3VyZSB0aGVyZSBpcyBhbiBcIklkXCIgY29sdW1uIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIGFjY2Vzc2lvbiBJRCAoc2VxdWVuY2UgbmFtZSkuXG4gICAgICAgIC8vIElmIFwiSWRcIiBkb2Vzbid0IGV4aXN0LCBwcmVwZW5kIGl0LiBJZiBpdCBleGlzdHMsIG92ZXJ3cml0ZSBpdHMgdmFsdWVzIHdpdGggYWNjZXNzaW9uIElEcyB3aGVuIHBvc3NpYmxlLlxuICAgICAgICBjb25zdCBpZEluZGV4ID0gd29ya2luZ0hlYWRlci5pbmRleE9mKCdJZCcpO1xuICAgICAgICBpZiAoaWRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBZGRpbmcgSWQgY29sdW1uIHRvIG1ldGFkYXRhICh3aWxsIHByZXBlbmQgYXMgZmlyc3QgY29sdW1uKScpO1xuICAgICAgICAgICAgd29ya2luZ0hlYWRlciA9IFsnaWQnLCAuLi53b3JraW5nSGVhZGVyXTtcbiAgICAgICAgICAgIHdvcmtpbmdSb3dzID0gd29ya2luZ1Jvd3MubWFwKChyb3csIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjY2Vzc2lvbiA9IG5hbWVzW2lkeF0gPz8gJyc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFthY2Nlc3Npb24sIC4uLnJvd107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJZCBjb2x1bW4gZXhpc3RzIGluIG1ldGFkYXRhOyB1cGRhdGluZyB2YWx1ZXMgdG8gbWF0Y2ggYWNjZXNzaW9uIElEcyB3aGVyZSBwb3NzaWJsZScpO1xuICAgICAgICAgICAgd29ya2luZ1Jvd3MgPSB3b3JraW5nUm93cy5tYXAoKHJvdywgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Um93ID0gWy4uLnJvd107XG4gICAgICAgICAgICAgICAgbmV3Um93W2lkSW5kZXhdID0gbmFtZXNbaWR4XSA/PyBuZXdSb3dbaWRJbmRleF0gPz8gJyc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1JvdztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBtb3JlIHNlcXVlbmNlcyB0aGFuIG1ldGFkYXRhIHJvd3MsIGFwcGVuZCByb3dzIHdpdGggSWQgb25seSAoYmVzdC1lZmZvcnQpXG4gICAgICAgIGlmIChuYW1lcy5sZW5ndGggPiB3b3JraW5nUm93cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTW9yZSBzZXF1ZW5jZXMgdGhhbiBtZXRhZGF0YSByb3dzOyBhcHBlbmRpbmcgYWRkaXRpb25hbCBtZXRhZGF0YSByb3dzIHdpdGggSWQgb25seSBmb3IgdW5tYXRjaGVkIHNlcXVlbmNlcycpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHdvcmtpbmdSb3dzLmxlbmd0aDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Um93ID0gbmV3IEFycmF5KHdvcmtpbmdIZWFkZXIubGVuZ3RoKS5maWxsKCcnKTtcbiAgICAgICAgICAgICAgICBuZXdSb3dbd29ya2luZ0hlYWRlci5pbmRleE9mKCdJZCcpXSA9IG5hbWVzW2ldO1xuICAgICAgICAgICAgICAgIHdvcmtpbmdSb3dzLnB1c2gobmV3Um93KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBDb21wb3NlIG1vZGlmaWVkIG1ldGFkYXRhIHRleHRcbiAgICAgICAgY29uc3QgbW9kaWZpZWRNZXRhZGF0YVRleHQgPSBbd29ya2luZ0hlYWRlci5qb2luKCdcXHQnKSwgLi4ud29ya2luZ1Jvd3MubWFwKHIgPT4gci5qb2luKCdcXHQnKSldLmpvaW4oJ1xcbicpO1xuICAgICAgICBjb25zb2xlLmxvZygnTW9kaWZpZWQgbWV0YWRhdGEgcHJldmlldzonLCBtb2RpZmllZE1ldGFkYXRhVGV4dC5zdWJzdHJpbmcoMCwgNTAwKSArICcuLi4nKTtcbiAgICAgICAgLy8gS2VlcCBvcmlnaW5hbCBzZXF1ZW5jZSBuYW1lcyAoZG8gbm90IHJlbWFwIHRvIHN1Ym1pc3Npb25JZClcbiAgICAgICAgY29uc3QgZmFzdGFDb250ZW50ID0gbmFtZXMubWFwKChuYW1lLCBpKSA9PiBgPiR7bmFtZX1cXG4ke3NlcXVlbmNlc1tpXX1gKS5qb2luKCdcXG4nKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0ZBU1RBIGNvbnRlbnQgcHJldmlldzonLCBmYXN0YUNvbnRlbnQuc3Vic3RyaW5nKDAsIDIwMCkgKyAnLi4uJyk7XG4gICAgICAgIGNvbnN0IGZhc3RhRmlsZSA9IG5ldyBGaWxlKFtmYXN0YUNvbnRlbnRdLCBcInNlcXVlbmNlcy5mYXN0YVwiLCB7IHR5cGU6IFwidGV4dC9wbGFpblwiIH0pO1xuICAgICAgICBjb25zdCBtZXRhZGF0YUZpbGUgPSBuZXcgRmlsZShbbW9kaWZpZWRNZXRhZGF0YVRleHRdLCBcIm1ldGFkYXRhLnRzdlwiLCB7IHR5cGU6IFwidGV4dC90YWItc2VwYXJhdGVkLXZhbHVlc1wiIH0pO1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3NlcXVlbmNlRmlsZScsIGZhc3RhRmlsZSk7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbWV0YWRhdGFGaWxlJywgbWV0YWRhdGFGaWxlKTtcbiAgICAgICAgY29uc3QgcmV2aXNpb25VcmwgPSBgJHtyZXR1cm5VcmwucmVwbGFjZSgvXFwvJC8sICcnKX0vJHtvcmdhbmlzbX0vcmV2aXNlP2dyb3VwSWQ9JHtncm91cElkfSZkYXRhVXNlVGVybXNUeXBlPU9QRU5gO1xuICAgICAgICBjb25zb2xlLmxvZygnTWFraW5nIEFQSSBjYWxsIHRvOicsIHJldmlzaW9uVXJsKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNhdmVSZXZpc2lvbkJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBzYXZlUmV2aXNpb25CdXR0b24udGV4dENvbnRlbnQgPSAnU2F2aW5nLi4uJztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZW5kaW5nIFBPU1QgcmVxdWVzdCB0byBMb2N1bHVzLi4uJyk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJldmlzaW9uVXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthdXRoVG9rZW59YCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVjZWl2ZWQgcmVzcG9uc2U6JywgcmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdSZXZpc2lvbiBzYXZlZCBzdWNjZXNzZnVsbHkhJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzIHJlc3BvbnNlOicsIHJlc3BvbnNlRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgICAgICAgIC8vIFRva2VuIG1pZ2h0IGJlIGV4cGlyZWQsIHRyeSB0byByZWZyZXNoIGFuZCByZXRyeSBvbmNlXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VuYXV0aG9yaXplZCwgYXR0ZW1wdGluZyB0byByZWZyZXNoIHRva2VuLi4uJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VG9rZW4gPSBhd2FpdCBhdXRoTWFuYWdlci5yZWZyZXNoVG9rZW4oKTtcbiAgICAgICAgICAgICAgICBpZiAobmV3VG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Rva2VuIHJlZnJlc2hlZCwgcmV0cnlpbmcgcmVxdWVzdC4uLicpO1xuICAgICAgICAgICAgICAgICAgICAvLyBSZXRyeSB3aXRoIG5ldyB0b2tlblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXRyeVJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmV2aXNpb25VcmwsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke25ld1Rva2VufWAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmV0cnkgcmVzcG9uc2U6JywgcmV0cnlSZXNwb25zZS5zdGF0dXMsIHJldHJ5UmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXRyeVJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnUmV2aXNpb24gc2F2ZWQgc3VjY2Vzc2Z1bGx5IScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmV0cnlSZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU3VjY2VzcyByZXNwb25zZTonLCByZXNwb25zZURhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JUZXh0ID0gYXdhaXQgcmV0cnlSZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChgRXJyb3Igc2F2aW5nIHJldmlzaW9uOiAke3JldHJ5UmVzcG9uc2Uuc3RhdHVzfSAke3JldHJ5UmVzcG9uc2Uuc3RhdHVzVGV4dH1cXG4ke2Vycm9yVGV4dH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlc3BvbnNlOicsIGVycm9yVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdBdXRoZW50aWNhdGlvbiBleHBpcmVkLiBQbGVhc2UgcmVmcmVzaCB0aGUgcGFnZSBhbmQgdHJ5IGFnYWluLicpO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBhdXRoTWFuYWdlci5jbGVhclN0b3JlZEF1dGgoKTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdXBkYXRlU2F2ZUJ1dHRvblN0YXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgICAgIGFsZXJ0KGBFcnJvciBzYXZpbmcgcmV2aXNpb246ICR7cmVzcG9uc2Uuc3RhdHVzfSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9XFxuJHtlcnJvclRleHR9YCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVzcG9uc2U6JywgZXJyb3JUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNhdmluZyByZXZpc2lvbjonLCBlcnJvcik7XG4gICAgICAgICAgICBhbGVydCgnRmFpbGVkIHRvIHNhdmUgcmV2aXNpb24uIFNlZSBjb25zb2xlIGZvciBkZXRhaWxzLicpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgc2F2ZVJldmlzaW9uQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICBhd2FpdCB1cGRhdGVTYXZlQnV0dG9uU3RhdGUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmFtZTEtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0cmFuc2xhdGVBbGwoMSkpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmFtZTItYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0cmFuc2xhdGVBbGwoMikpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmFtZTMtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0cmFuc2xhdGVBbGwoMykpO1xuICAgIC8vIEF1dGhlbnRpY2F0aW9uLWZpcnN0IGZsb3c6IENoZWNrIGlmIHdlIG5lZWQgYXV0aGVudGljYXRpb24gYW5kIGRvIGl0IGVhcmx5XG4gICAgYXN5bmMgZnVuY3Rpb24gY2hlY2tBbmRJbml0aWF0ZUF1dGhlbnRpY2F0aW9uSWZOZWVkZWQoKSB7XG4gICAgICAgIGlmICghYXV0aE1hbmFnZXIpIHtcbiAgICAgICAgICAgIHJldHVybjsgLy8gTm8gYXV0aCBjb25maWdcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSBhd2FpdCBhdXRoTWFuYWdlci5pc0F1dGhlbnRpY2F0ZWQoKTtcbiAgICAgICAgaWYgKCFpc0F1dGhlbnRpY2F0ZWQgJiYgIUFwcFN0YXRlTWFuYWdlci5pc1JldHVybmluZ0Zyb21BdXRoKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBdXRoZW50aWNhdGlvbiByZXF1aXJlZCAtIHdpbGwgaW5pdGlhdGUgYWZ0ZXIgbG9hZGluZyBjb250ZW50Li4uJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIERvbid0IGluaXRpYXRlIGF1dGggeWV0LCBsb2FkIGNvbnRlbnQgZmlyc3RcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIE5vIGF1dGggbmVlZGVkIG9yIGFscmVhZHkgYXV0aGVudGljYXRlZFxuICAgIH1cbiAgICAvLyBMb2FkIHNlcXVlbmNlcyBhbmQgbWV0YWRhdGEgZmlyc3QsIHRoZW4gY2hlY2sgYXV0aFxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRDb250ZW50QW5kQ2hlY2tBdXRoKCkge1xuICAgICAgICAvLyBMb2FkIHNlcXVlbmNlcyBpZiBVUkwgaXMgcHJvdmlkZWQgYW5kIHdlIGhhdmVuJ3QgcmVzdG9yZWQgc3RhdGVcbiAgICAgICAgaWYgKGZhc3RhVXJsICYmICFzdGF0ZVdhc1Jlc3RvcmVkKSB7XG4gICAgICAgICAgICB1cmxJbnB1dC52YWx1ZSA9IGZhc3RhVXJsO1xuICAgICAgICAgICAgYXdhaXQgbG9hZFNlcXVlbmNlcygpO1xuICAgICAgICB9XG4gICAgICAgIC8vIExvYWQgbWV0YWRhdGEgaWYgVVJMIGlzIHByb3ZpZGVkIGFuZCB3ZSBoYXZlbid0IHJlc3RvcmVkIHN0YXRlICBcbiAgICAgICAgaWYgKG1ldGFkYXRhVXJsICYmICFzdGF0ZVdhc1Jlc3RvcmVkKSB7XG4gICAgICAgICAgICBhd2FpdCBsb2FkTWV0YWRhdGEobWV0YWRhdGFVcmwpO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5vdyBjaGVjayBhdXRoZW50aWNhdGlvbiBhZnRlciBjb250ZW50IGlzIGxvYWRlZFxuICAgICAgICBpZiAoYXV0aE1hbmFnZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9IGF3YWl0IGF1dGhNYW5hZ2VyLmlzQXV0aGVudGljYXRlZCgpO1xuICAgICAgICAgICAgaWYgKCFpc0F1dGhlbnRpY2F0ZWQgJiYgIUFwcFN0YXRlTWFuYWdlci5pc1JldHVybmluZ0Zyb21BdXRoKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ29udGVudCBsb2FkZWQsIG5vdyBpbml0aWF0aW5nIGF1dGhlbnRpY2F0aW9uLi4uJyk7XG4gICAgICAgICAgICAgICAgLy8gU2F2ZSBjdXJyZW50IGFwcGxpY2F0aW9uIHN0YXRlIGJlZm9yZSBhdXRoZW50aWNhdGlvbiAobm93IHdpdGggbG9hZGVkIGNvbnRlbnQpXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VxdWVuY2VzID0gdmlld2VyLmdldFNlcXVlbmNlcygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVzID0gdmlld2VyLmdldFNlcXVlbmNlTmFtZXMoKTtcbiAgICAgICAgICAgICAgICBBcHBTdGF0ZU1hbmFnZXIuc2F2ZVN0YXRlQmVmb3JlQXV0aCh1cmxQYXJhbXMsIHsgbmFtZXMsIHNlcXVlbmNlcyB9LCBpc1RyYW5zbGF0ZWQsIGN1cnJlbnRGcmFtZSwgaXNUcmFuc2xhdGVkID8gdmlld2VyLmdldFRyYW5zbGF0ZWRTZXF1ZW5jZXMoKSA6IHVuZGVmaW5lZCwgbWV0YWRhdGEsIGdyb3VwSWQsIHNlYXJjaFJlc3VsdHMsIGZhbHNlIC8vIERvbid0IGNvbnRpbnVlIHdpdGggc2F2ZSByZXZpc2lvbiBhZnRlciBhdXRoXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBhdXRoTWFuYWdlci5pbml0aWF0ZUF1dGgoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vIFdpbGwgcmVkaXJlY3RcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBsb2dvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmIChhdXRoTWFuYWdlcikge1xuICAgICAgICAgICAgYXdhaXQgYXV0aE1hbmFnZXIubG9nb3V0KHRydWUpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gTG9hZCBjb250ZW50IGZpcnN0LCB0aGVuIGhhbmRsZSBhdXRoZW50aWNhdGlvblxuICAgIGF3YWl0IGxvYWRDb250ZW50QW5kQ2hlY2tBdXRoKCk7XG59XG5tYWluKCk7XG4iLCJleHBvcnQgY2xhc3MgU2VxdWVuY2VWaWV3ZXIge1xuICAgIHNlcXVlbmNlQ2FudmFzO1xuICAgIG5hbWVzQ2FudmFzO1xuICAgIHJ1bGVyQ2FudmFzO1xuICAgIHNlcUN0eDtcbiAgICBuYW1lc0N0eDtcbiAgICBydWxlckN0eDtcbiAgICBzZXF1ZW5jZXMgPSBbXTtcbiAgICBuYW1lcyA9IFtdO1xuICAgIHNlbGVjdGVkU2VxdWVuY2VOYW1lcyA9IG5ldyBTZXQoKTtcbiAgICBjb2xvcnMgPSB7XG4gICAgICAgICdBJzogeyBmb3JlZ3JvdW5kOiAnIzAxODAwMScsIGJhY2tncm91bmQ6ICcjNUFEQzVBJyB9LCAvLyBHcmVlbiBmb3JlZ3JvdW5kLCBsaWdodCBncmVlbiBiYWNrZ3JvdW5kXG4gICAgICAgICdDJzogeyBmb3JlZ3JvdW5kOiAnIzAxMDFGRicsIGJhY2tncm91bmQ6ICcjNjQ2NEZBJyB9LCAvLyBCbHVlIGZvcmVncm91bmQsIGxpZ2h0IGJsdWUgYmFja2dyb3VuZFxuICAgICAgICAnRyc6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnIzVBNUE1QScgfSwgLy8gQmxhY2sgZm9yZWdyb3VuZCwgZGFyayBncmF5IGJhY2tncm91bmRcbiAgICAgICAgJ1QnOiB7IGZvcmVncm91bmQ6ICcjRkYwMTAxJywgYmFja2dyb3VuZDogJyNGNTgyODInIH0sIC8vIFJlZCBmb3JlZ3JvdW5kLCBsaWdodCByZWQgYmFja2dyb3VuZFxuICAgICAgICAnVSc6IHsgZm9yZWdyb3VuZDogJyNGRjAxMDEnLCBiYWNrZ3JvdW5kOiAnI0Y1ODI4MicgfSwgLy8gU2FtZSBhcyBUXG4gICAgICAgICdSJzogeyBmb3JlZ3JvdW5kOiAnI0ZGMDBGRicsIGJhY2tncm91bmQ6ICcjRkZGRkZGJyB9LCAvLyBNYWdlbnRhIGZvcmVncm91bmQsIHdoaXRlIGJhY2tncm91bmRcbiAgICAgICAgJ1knOiB7IGZvcmVncm91bmQ6ICcjRkYwMEZGJywgYmFja2dyb3VuZDogJyNGRkZGRkYnIH0sXG4gICAgICAgICdTJzogeyBmb3JlZ3JvdW5kOiAnI0ZGMDBGRicsIGJhY2tncm91bmQ6ICcjRkZGRkZGJyB9LFxuICAgICAgICAnVyc6IHsgZm9yZWdyb3VuZDogJyNGRjAwRkYnLCBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicgfSxcbiAgICAgICAgJ0snOiB7IGZvcmVncm91bmQ6ICcjRkYwMEZGJywgYmFja2dyb3VuZDogJyNGRkZGRkYnIH0sXG4gICAgICAgICdNJzogeyBmb3JlZ3JvdW5kOiAnI0ZGMDBGRicsIGJhY2tncm91bmQ6ICcjRkZGRkZGJyB9LFxuICAgICAgICAnQic6IHsgZm9yZWdyb3VuZDogJyNGRjAwRkYnLCBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicgfSxcbiAgICAgICAgJ0QnOiB7IGZvcmVncm91bmQ6ICcjRkYwMEZGJywgYmFja2dyb3VuZDogJyNGRkZGRkYnIH0sXG4gICAgICAgICdIJzogeyBmb3JlZ3JvdW5kOiAnI0ZGMDBGRicsIGJhY2tncm91bmQ6ICcjRkZGRkZGJyB9LFxuICAgICAgICAnVic6IHsgZm9yZWdyb3VuZDogJyNGRjAwRkYnLCBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicgfSxcbiAgICAgICAgJ04nOiB7IGZvcmVncm91bmQ6ICcjRkYwMEZGJywgYmFja2dyb3VuZDogJyNGRkZGRkYnIH0sIC8vIE1hZ2VudGEgZm9yZWdyb3VuZCwgd2hpdGUgYmFja2dyb3VuZFxuICAgICAgICAnLSc6IHsgZm9yZWdyb3VuZDogJyM4MDgwODAnLCBiYWNrZ3JvdW5kOiAnI0ZBRkFGQScgfSwgLy8gRGFyayBncmF5IGZvcmVncm91bmQsIGxpZ2h0IGdyYXkgYmFja2dyb3VuZCAoR0FQKVxuICAgIH07XG4gICAgYW1pbm9BY2lkQ29sb3JzID0ge1xuICAgICAgICAnQSc6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnIzI3NkVCNycgfSxcbiAgICAgICAgJ0MnOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyNFNjgwODAnIH0sXG4gICAgICAgICdEJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjQ0M0RENDJyB9LFxuICAgICAgICAnRSc6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnIzk4NDA5NycgfSxcbiAgICAgICAgJ0YnOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyMxOTgwRTYnIH0sXG4gICAgICAgICdHJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjRTY5OTREJyB9LFxuICAgICAgICAnSCc6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnIzE5QjNCMycgfSxcbiAgICAgICAgJ0knOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyM0RTlCRjMnIH0sXG4gICAgICAgICdLJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjRTYzMzE5JyB9LFxuICAgICAgICAnTCc6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnIzc4QTZENScgfSxcbiAgICAgICAgJ00nOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyMwRjU0OUInIH0sXG4gICAgICAgICdOJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjMTlDQzE5JyB9LFxuICAgICAgICAnUCc6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnI0NDQ0MwMCcgfSxcbiAgICAgICAgJ1EnOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyM1Q0VENUMnIH0sXG4gICAgICAgICdSJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjRjY0NDJDJyB9LFxuICAgICAgICAnUyc6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnIzAyOTYwMicgfSxcbiAgICAgICAgJ1QnOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyM0NUM5NDUnIH0sXG4gICAgICAgICdWJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjMDQ3REY5JyB9LFxuICAgICAgICAnVyc6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnIzAzNTVBOScgfSxcbiAgICAgICAgJ1knOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyMxNEM2QzgnIH0sXG4gICAgICAgICcqJzogeyBmb3JlZ3JvdW5kOiAnIzAwRkZGRicsIGJhY2tncm91bmQ6ICcjNjk2OTY5JyB9LCAvLyBTVE9QIGNvZG9uIChkYXJrR3JheSlcbiAgICAgICAgJy0nOiB7IGZvcmVncm91bmQ6ICcjQTlBOUE5JywgYmFja2dyb3VuZDogJyNFNkU2RTYnIH0sIC8vIEdBUCAoZGFya0dyYXksIDIzMCwyMzAsMjMwKVxuICAgICAgICAnWCc6IHsgZm9yZWdyb3VuZDogJyMwMEZGRkYnLCBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicgfSwgLy8gVW5rbm93biAoY3lhbiwgd2hpdGUpXG4gICAgfTtcbiAgICBibG9ja1dpZHRoID0gMjA7XG4gICAgYmxvY2tIZWlnaHQgPSAyMDtcbiAgICBzY3JvbGxYID0gMDtcbiAgICBzY3JvbGxZID0gMDtcbiAgICBtYXhTZXF1ZW5jZUxlbmd0aCA9IDA7XG4gICAgaXNSZWRyYXdTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICBzZWxlY3Rpb25TdGFydCA9IG51bGw7XG4gICAgc2VsZWN0aW9uRW5kID0gbnVsbDtcbiAgICBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgaXNEcmFnZ2luZ0hTY3JvbGxiYXIgPSBmYWxzZTtcbiAgICBpc0RyYWdnaW5nVlNjcm9sbGJhciA9IGZhbHNlO1xuICAgIGxhc3RNb3VzZVggPSAwO1xuICAgIGxhc3RNb3VzZVkgPSAwO1xuICAgIHNjcm9sbGJhcldpZHRoID0gMTA7XG4gICAgc2Nyb2xsYmFyQ29sb3IgPSAnIzg4OCc7XG4gICAgc2Nyb2xsYmFyVHJhY2tDb2xvciA9ICcjZjFmMWYxJztcbiAgICBkaXNwbGF5TW9kZSA9ICdudWNsZW90aWRlJztcbiAgICB0cmFuc2xhdGVkU2VxdWVuY2VzID0gW107XG4gICAgY3VycmVudFJlYWRpbmdGcmFtZSA9IDE7XG4gICAgc2VhcmNoUmVzdWx0cyA9IFtdO1xuICAgIHNlYXJjaFF1ZXJ5TGVuZ3RoID0gMDtcbiAgICBjb25zdHJ1Y3RvcihzZXF1ZW5jZUNhbnZhcywgbmFtZXNDYW52YXMsIHJ1bGVyQ2FudmFzKSB7XG4gICAgICAgIHRoaXMuc2VxdWVuY2VDYW52YXMgPSBzZXF1ZW5jZUNhbnZhcztcbiAgICAgICAgdGhpcy5uYW1lc0NhbnZhcyA9IG5hbWVzQ2FudmFzO1xuICAgICAgICB0aGlzLnJ1bGVyQ2FudmFzID0gcnVsZXJDYW52YXM7XG4gICAgICAgIHRoaXMuc2VxQ3R4ID0gc2VxdWVuY2VDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5uYW1lc0N0eCA9IG5hbWVzQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMucnVsZXJDdHggPSBydWxlckNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAvLyBNYWtlIGNhbnZhcyBmb2N1c2FibGUgZm9yIGtleWJvYXJkIG5hdmlnYXRpb25cbiAgICAgICAgdGhpcy5zZXF1ZW5jZUNhbnZhcy50YWJJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuc2VxdWVuY2VDYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLm9uV2hlZWwuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMubmFtZXNDYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLm9uV2hlZWwuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMubmFtZXNDYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk5hbWVzQ2FudmFzTW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnNlcXVlbmNlQ2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuc2VxdWVuY2VDYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5zZXF1ZW5jZUNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuc2VxdWVuY2VDYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVuc3VyZVNlbGVjdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlc2l6ZUNhbnZhcygpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemVDYW52YXMuYmluZCh0aGlzKSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24uYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHNhdmVTdGF0ZSgpIHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgICAgICBuYW1lczogdGhpcy5uYW1lcyxcbiAgICAgICAgICAgIHNlcXVlbmNlczogdGhpcy5zZXF1ZW5jZXNcbiAgICAgICAgfTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlcWVkaXQtc3RhdGUnLCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xuICAgIH1cbiAgICBzZXRTZXF1ZW5jZXMobmFtZXMsIHNlcXVlbmNlcykge1xuICAgICAgICB0aGlzLm5hbWVzID0gbmFtZXM7XG4gICAgICAgIHRoaXMuc2VxdWVuY2VzID0gc2VxdWVuY2VzO1xuICAgICAgICB0aGlzLm1heFNlcXVlbmNlTGVuZ3RoID0gTWF0aC5tYXgoLi4uc2VxdWVuY2VzLm1hcChzID0+IHMubGVuZ3RoKSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsWCA9IDA7XG4gICAgICAgIHRoaXMuc2Nyb2xsWSA9IDA7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IG51bGw7XG4gICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgIH1cbiAgICBnZXRTZWxlY3RlZFNlcXVlbmNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uU3RhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZXFJbmRleDogdGhpcy5zZWxlY3Rpb25TdGFydC5zZXFJbmRleCxcbiAgICAgICAgICAgIHNlcXVlbmNlOiB0aGlzLnNlcXVlbmNlc1t0aGlzLnNlbGVjdGlvblN0YXJ0LnNlcUluZGV4XVxuICAgICAgICB9O1xuICAgIH1cbiAgICB1cGRhdGVTZXF1ZW5jZShzZXFJbmRleCwgbmV3U2VxdWVuY2UpIHtcbiAgICAgICAgdGhpcy5zZXF1ZW5jZXNbc2VxSW5kZXhdID0gbmV3U2VxdWVuY2U7XG4gICAgICAgIHRoaXMubWF4U2VxdWVuY2VMZW5ndGggPSBNYXRoLm1heCguLi50aGlzLnNlcXVlbmNlcy5tYXAocyA9PiBzLmxlbmd0aCkpO1xuICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICB9XG4gICAgZ2V0U2VxdWVuY2VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXF1ZW5jZXM7XG4gICAgfVxuICAgIGdldFNlcXVlbmNlTmFtZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWVzO1xuICAgIH1cbiAgICBnZXRTZWxlY3RlZFNlcXVlbmNlSW5kaWNlcygpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5zZWxlY3RlZFNlcXVlbmNlTmFtZXMpO1xuICAgIH1cbiAgICBnZXRUcmFuc2xhdGVkU2VxdWVuY2VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVkU2VxdWVuY2VzO1xuICAgIH1cbiAgICBjbGVhclNlbGVjdGVkU2VxdWVuY2VOYW1lcygpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFNlcXVlbmNlTmFtZXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgfVxuICAgIHNldFRyYW5zbGF0ZWRTZXF1ZW5jZXMoc2VxdWVuY2VzLCBmcmFtZSkge1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZWRTZXF1ZW5jZXMgPSBzZXF1ZW5jZXM7XG4gICAgICAgIHRoaXMuY3VycmVudFJlYWRpbmdGcmFtZSA9IGZyYW1lO1xuICAgICAgICB0aGlzLmRpc3BsYXlNb2RlID0gJ2FtaW5vYWNpZCc7XG4gICAgICAgIHRoaXMuc2Nyb2xsWCA9IDA7XG4gICAgICAgIHRoaXMuc2Nyb2xsWSA9IDA7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IG51bGw7XG4gICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgIH1cbiAgICBzZXROdWNsZW90aWRlTW9kZSgpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5TW9kZSA9ICdudWNsZW90aWRlJztcbiAgICAgICAgdGhpcy5zY3JvbGxYID0gMDtcbiAgICAgICAgdGhpcy5zY3JvbGxZID0gMDtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IG51bGw7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgfVxuICAgIHNldFNlYXJjaFJlc3VsdHMocmVzdWx0cywgcXVlcnlMZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hSZXN1bHRzID0gcmVzdWx0cztcbiAgICAgICAgdGhpcy5zZWFyY2hRdWVyeUxlbmd0aCA9IHF1ZXJ5TGVuZ3RoO1xuICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICB9XG4gICAgcmVzaXplQ2FudmFzKCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnNlcXVlbmNlQ2FudmFzLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc2VxdWVuY2VDYW52YXMud2lkdGggPSBwYXJlbnQuY2xpZW50V2lkdGg7XG4gICAgICAgIHRoaXMuc2VxdWVuY2VDYW52YXMuaGVpZ2h0ID0gcGFyZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgY29uc3QgbmFtZXNQYXJlbnQgPSB0aGlzLm5hbWVzQ2FudmFzLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHRoaXMubmFtZXNDYW52YXMud2lkdGggPSBuYW1lc1BhcmVudC5jbGllbnRXaWR0aDtcbiAgICAgICAgdGhpcy5uYW1lc0NhbnZhcy5oZWlnaHQgPSBuYW1lc1BhcmVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGNvbnN0IHJ1bGVyUGFyZW50ID0gdGhpcy5ydWxlckNhbnZhcy5wYXJlbnRFbGVtZW50O1xuICAgICAgICB0aGlzLnJ1bGVyQ2FudmFzLndpZHRoID0gcnVsZXJQYXJlbnQuY2xpZW50V2lkdGg7XG4gICAgICAgIHRoaXMucnVsZXJDYW52YXMuaGVpZ2h0ID0gMjA7XG4gICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgIH1cbiAgICBvbk1vdXNlRG93bihldmVudCkge1xuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5zZXF1ZW5jZUNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgICAgIC8vIENoZWNrIGZvciBob3Jpem9udGFsIHNjcm9sbGJhciBjbGlja1xuICAgICAgICBjb25zdCBjb250ZW50V2lkdGggPSB0aGlzLm1heFNlcXVlbmNlTGVuZ3RoICogdGhpcy5ibG9ja1dpZHRoO1xuICAgICAgICBjb25zdCBjYW52YXNXaWR0aCA9IHRoaXMuc2VxdWVuY2VDYW52YXMud2lkdGg7XG4gICAgICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9IHRoaXMuc2VxdWVuY2VDYW52YXMuaGVpZ2h0O1xuICAgICAgICBpZiAoY29udGVudFdpZHRoID4gY2FudmFzV2lkdGggJiYgeSA+PSBjYW52YXNIZWlnaHQgLSB0aGlzLnNjcm9sbGJhcldpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmdIU2Nyb2xsYmFyID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGFzdE1vdXNlWCA9IHg7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgZm9yIHZlcnRpY2FsIHNjcm9sbGJhciBjbGlja1xuICAgICAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gdGhpcy5zZXF1ZW5jZXMubGVuZ3RoICogdGhpcy5ibG9ja0hlaWdodDtcbiAgICAgICAgaWYgKGNvbnRlbnRIZWlnaHQgPiBjYW52YXNIZWlnaHQgJiYgeCA+PSBjYW52YXNXaWR0aCAtIHRoaXMuc2Nyb2xsYmFyV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuaXNEcmFnZ2luZ1ZTY3JvbGxiYXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sYXN0TW91c2VZID0geTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICBjb25zdCBzZXFJbmRleCA9IE1hdGguZmxvb3IoKHkgKyB0aGlzLnNjcm9sbFkpIC8gdGhpcy5ibG9ja0hlaWdodCk7XG4gICAgICAgIGNvbnN0IHBvcyA9IE1hdGguZmxvb3IoKHggKyB0aGlzLnNjcm9sbFgpIC8gdGhpcy5ibG9ja1dpZHRoKTtcbiAgICAgICAgaWYgKHNlcUluZGV4ID49IDAgJiYgc2VxSW5kZXggPCB0aGlzLnNlcXVlbmNlcy5sZW5ndGggJiYgcG9zID49IDAgJiYgcG9zIDwgdGhpcy5zZXF1ZW5jZXNbc2VxSW5kZXhdLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHsgc2VxSW5kZXgsIHBvcyB9O1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSB7IHNlcUluZGV4LCBwb3MgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgIH1cbiAgICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5zZXF1ZW5jZUNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgICAgIGlmICh0aGlzLmlzRHJhZ2dpbmdIU2Nyb2xsYmFyKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50V2lkdGggPSB0aGlzLm1heFNlcXVlbmNlTGVuZ3RoICogdGhpcy5ibG9ja1dpZHRoO1xuICAgICAgICAgICAgY29uc3QgY2FudmFzV2lkdGggPSB0aGlzLnNlcXVlbmNlQ2FudmFzLndpZHRoO1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYmFyVHJhY2tXaWR0aCA9IGNhbnZhc1dpZHRoIC0gdGhpcy5zY3JvbGxiYXJXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGJhclRodW1iV2lkdGggPSBNYXRoLm1heCg1MCwgc2Nyb2xsYmFyVHJhY2tXaWR0aCAqIChjYW52YXNXaWR0aCAvIGNvbnRlbnRXaWR0aCkpO1xuICAgICAgICAgICAgY29uc3QgZGVsdGFYID0geCAtIHRoaXMubGFzdE1vdXNlWDtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFJhdGlvID0gKGNvbnRlbnRXaWR0aCAtIGNhbnZhc1dpZHRoKSAvIChzY3JvbGxiYXJUcmFja1dpZHRoIC0gc2Nyb2xsYmFyVGh1bWJXaWR0aCk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFggKz0gZGVsdGFYICogc2Nyb2xsUmF0aW87XG4gICAgICAgICAgICB0aGlzLmxhc3RNb3VzZVggPSB4O1xuICAgICAgICAgICAgY29uc3QgbWF4U2Nyb2xsWCA9IGNvbnRlbnRXaWR0aCAtIGNhbnZhc1dpZHRoO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxYID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5zY3JvbGxYLCBtYXhTY3JvbGxYKSk7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0RyYWdnaW5nVlNjcm9sbGJhcikge1xuICAgICAgICAgICAgY29uc3QgY29udGVudEhlaWdodCA9IHRoaXMuc2VxdWVuY2VzLmxlbmd0aCAqIHRoaXMuYmxvY2tIZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBjYW52YXNIZWlnaHQgPSB0aGlzLnNlcXVlbmNlQ2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGJhclRyYWNrSGVpZ2h0ID0gY2FudmFzSGVpZ2h0IC0gdGhpcy5zY3JvbGxiYXJXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGJhclRodW1iSGVpZ2h0ID0gTWF0aC5tYXgoNTAsIHNjcm9sbGJhclRyYWNrSGVpZ2h0ICogKGNhbnZhc0hlaWdodCAvIGNvbnRlbnRIZWlnaHQpKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhWSA9IHkgLSB0aGlzLmxhc3RNb3VzZVk7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxSYXRpbyA9IChjb250ZW50SGVpZ2h0IC0gY2FudmFzSGVpZ2h0KSAvIChzY3JvbGxiYXJUcmFja0hlaWdodCAtIHNjcm9sbGJhclRodW1iSGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsWSArPSBkZWx0YVkgKiBzY3JvbGxSYXRpbztcbiAgICAgICAgICAgIHRoaXMubGFzdE1vdXNlWSA9IHk7XG4gICAgICAgICAgICBjb25zdCBtYXhTY3JvbGxZID0gY29udGVudEhlaWdodCAtIGNhbnZhc0hlaWdodDtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsWSA9IE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMuc2Nyb2xsWSwgbWF4U2Nyb2xsWSkpO1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzRHJhZ2dpbmcgfHwgIXRoaXMuc2VsZWN0aW9uU3RhcnQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHNlcUluZGV4ID0gTWF0aC5mbG9vcigoeSArIHRoaXMuc2Nyb2xsWSkgLyB0aGlzLmJsb2NrSGVpZ2h0KTtcbiAgICAgICAgY29uc3QgcG9zID0gTWF0aC5mbG9vcigoeCArIHRoaXMuc2Nyb2xsWCkgLyB0aGlzLmJsb2NrV2lkdGgpO1xuICAgICAgICAvLyBBbGxvdyBzZWxlY3Rpb24gYWNyb3NzIG11bHRpcGxlIHNlcXVlbmNlc1xuICAgICAgICBpZiAoc2VxSW5kZXggPj0gMCAmJiBzZXFJbmRleCA8IHRoaXMuc2VxdWVuY2VzLmxlbmd0aCAmJiBwb3MgPj0gMCAmJiBwb3MgPD0gdGhpcy5zZXF1ZW5jZXNbc2VxSW5kZXhdLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSB7IHNlcUluZGV4LCBwb3MgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICB9XG4gICAgb25Nb3VzZVVwKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRHJhZ2dpbmdIU2Nyb2xsYmFyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZ1ZTY3JvbGxiYXIgPSBmYWxzZTtcbiAgICB9XG4gICAgZ2V0U2VsZWN0ZWRUZXh0KCkge1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uU3RhcnQgfHwgIXRoaXMuc2VsZWN0aW9uRW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnRSb3cgPSBNYXRoLm1pbih0aGlzLnNlbGVjdGlvblN0YXJ0LnNlcUluZGV4LCB0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCk7XG4gICAgICAgIGNvbnN0IGVuZFJvdyA9IE1hdGgubWF4KHRoaXMuc2VsZWN0aW9uU3RhcnQuc2VxSW5kZXgsIHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4KTtcbiAgICAgICAgY29uc3Qgc3RhcnRDb2wgPSBNYXRoLm1pbih0aGlzLnNlbGVjdGlvblN0YXJ0LnBvcywgdGhpcy5zZWxlY3Rpb25FbmQucG9zKTtcbiAgICAgICAgY29uc3QgZW5kQ29sID0gTWF0aC5tYXgodGhpcy5zZWxlY3Rpb25TdGFydC5wb3MsIHRoaXMuc2VsZWN0aW9uRW5kLnBvcyk7XG4gICAgICAgIGxldCBzZWxlY3RlZFRleHQgPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0Um93OyBpIDw9IGVuZFJvdzsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzZXF1ZW5jZSA9IHRoaXMuc2VxdWVuY2VzW2ldO1xuICAgICAgICAgICAgc2VsZWN0ZWRUZXh0ICs9IHNlcXVlbmNlLnN1YnN0cmluZyhzdGFydENvbCwgZW5kQ29sICsgMSk7IC8vICsxIGJlY2F1c2Ugc3Vic3RyaW5nIGVuZCBpcyBleGNsdXNpdmVcbiAgICAgICAgICAgIGlmIChpIDwgZW5kUm93KSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUZXh0ICs9ICdcXG4nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3RlZFRleHQ7XG4gICAgfVxuICAgIGRlbGV0ZVNlbGVjdGVkUmFuZ2UocHJlc2VydmVTZWxlY3Rpb24gPSBmYWxzZSkge1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uU3RhcnQgfHwgIXRoaXMuc2VsZWN0aW9uRW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGFydFJvdyA9IE1hdGgubWluKHRoaXMuc2VsZWN0aW9uU3RhcnQuc2VxSW5kZXgsIHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4KTtcbiAgICAgICAgY29uc3QgZW5kUm93ID0gTWF0aC5tYXgodGhpcy5zZWxlY3Rpb25TdGFydC5zZXFJbmRleCwgdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXgpO1xuICAgICAgICBjb25zdCBzdGFydENvbCA9IE1hdGgubWluKHRoaXMuc2VsZWN0aW9uU3RhcnQucG9zLCB0aGlzLnNlbGVjdGlvbkVuZC5wb3MpO1xuICAgICAgICBjb25zdCBlbmRDb2wgPSBNYXRoLm1heCh0aGlzLnNlbGVjdGlvblN0YXJ0LnBvcywgdGhpcy5zZWxlY3Rpb25FbmQucG9zKTtcbiAgICAgICAgY29uc3QgbmV3Q3Vyc29yUG9zID0geyBzZXFJbmRleDogc3RhcnRSb3csIHBvczogc3RhcnRDb2wgfTtcbiAgICAgICAgLy8gU3RvcmUgdGhlIG9yaWdpbmFsIHNlbGVjdGlvbiBpZiB3ZSB3YW50IHRvIHByZXNlcnZlIGl0XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsU2VsZWN0aW9uU3RhcnQgPSBwcmVzZXJ2ZVNlbGVjdGlvbiA/IHsgLi4udGhpcy5zZWxlY3Rpb25TdGFydCB9IDogbnVsbDtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxTZWxlY3Rpb25FbmQgPSBwcmVzZXJ2ZVNlbGVjdGlvbiA/IHsgLi4udGhpcy5zZWxlY3Rpb25FbmQgfSA6IG51bGw7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydFJvdzsgaSA8PSBlbmRSb3c7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTZXF1ZW5jZSA9IHRoaXMuc2VxdWVuY2VzW2ldO1xuICAgICAgICAgICAgY29uc3QgbmV3U2VxdWVuY2UgPSBvcmlnaW5hbFNlcXVlbmNlLnNsaWNlKDAsIHN0YXJ0Q29sKSArIG9yaWdpbmFsU2VxdWVuY2Uuc2xpY2UoZW5kQ29sICsgMSk7XG4gICAgICAgICAgICB0aGlzLnNlcXVlbmNlc1tpXSA9IG5ld1NlcXVlbmNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWF4U2VxdWVuY2VMZW5ndGggPSBNYXRoLm1heCguLi50aGlzLnNlcXVlbmNlcy5tYXAocyA9PiBzLmxlbmd0aCkpO1xuICAgICAgICBpZiAocHJlc2VydmVTZWxlY3Rpb24gJiYgb3JpZ2luYWxTZWxlY3Rpb25TdGFydCAmJiBvcmlnaW5hbFNlbGVjdGlvbkVuZCkge1xuICAgICAgICAgICAgLy8gQWRqdXN0IHRoZSBzZWxlY3Rpb24gYm91bmRzIGFmdGVyIGRlbGV0aW9uXG4gICAgICAgICAgICBjb25zdCBkZWxldGVkTGVuZ3RoID0gZW5kQ29sIC0gc3RhcnRDb2wgKyAxO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IG9yaWdpbmFsU2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IHtcbiAgICAgICAgICAgICAgICBzZXFJbmRleDogb3JpZ2luYWxTZWxlY3Rpb25FbmQuc2VxSW5kZXgsXG4gICAgICAgICAgICAgICAgcG9zOiBNYXRoLm1heChzdGFydENvbCwgb3JpZ2luYWxTZWxlY3Rpb25FbmQucG9zIC0gZGVsZXRlZExlbmd0aClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBLZWVwIHRoZSBjdXJzb3IgcG9zaXRpb24gYnV0IGNsZWFyIHRoZSByYW5nZSBzZWxlY3Rpb25cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSBuZXdDdXJzb3JQb3M7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IG5ld0N1cnNvclBvcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICAgICAgcmV0dXJuIG5ld0N1cnNvclBvcztcbiAgICB9XG4gICAgYmFja3NwYWNlU2VsZWN0aW9uKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uU3RhcnQgfHwgIXRoaXMuc2VsZWN0aW9uRW5kKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnRSb3cgPSBNYXRoLm1pbih0aGlzLnNlbGVjdGlvblN0YXJ0LnNlcUluZGV4LCB0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCk7XG4gICAgICAgIGNvbnN0IGVuZFJvdyA9IE1hdGgubWF4KHRoaXMuc2VsZWN0aW9uU3RhcnQuc2VxSW5kZXgsIHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4KTtcbiAgICAgICAgY29uc3Qgc3RhcnRDb2wgPSBNYXRoLm1pbih0aGlzLnNlbGVjdGlvblN0YXJ0LnBvcywgdGhpcy5zZWxlY3Rpb25FbmQucG9zKTtcbiAgICAgICAgLy8gU3RvcmUgdGhlIG9yaWdpbmFsIHNlbGVjdGlvbiB0byBwcmVzZXJ2ZSBpdFxuICAgICAgICBjb25zdCBvcmlnaW5hbFNlbGVjdGlvblN0YXJ0ID0geyAuLi50aGlzLnNlbGVjdGlvblN0YXJ0IH07XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsU2VsZWN0aW9uRW5kID0geyAuLi50aGlzLnNlbGVjdGlvbkVuZCB9O1xuICAgICAgICAvLyBJZiB3ZSdyZSBhdCB0aGUgYmVnaW5uaW5nIG9mIHNlcXVlbmNlcywgdGhlcmUncyBub3RoaW5nIHRvIGJhY2tzcGFjZVxuICAgICAgICBpZiAoc3RhcnRDb2wgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZW1vdmUgdGhlIGNoYXJhY3RlciBpbW1lZGlhdGVseSB0byB0aGUgbGVmdCBvZiB0aGUgc2VsZWN0aW9uXG4gICAgICAgIGNvbnN0IGJhY2tzcGFjZVBvcyA9IHN0YXJ0Q29sIC0gMTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0Um93OyBpIDw9IGVuZFJvdzsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFNlcXVlbmNlID0gdGhpcy5zZXF1ZW5jZXNbaV07XG4gICAgICAgICAgICBpZiAoYmFja3NwYWNlUG9zIDwgb3JpZ2luYWxTZXF1ZW5jZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTZXF1ZW5jZSA9IG9yaWdpbmFsU2VxdWVuY2Uuc2xpY2UoMCwgYmFja3NwYWNlUG9zKSArIG9yaWdpbmFsU2VxdWVuY2Uuc2xpY2UoYmFja3NwYWNlUG9zICsgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXF1ZW5jZXNbaV0gPSBuZXdTZXF1ZW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1heFNlcXVlbmNlTGVuZ3RoID0gTWF0aC5tYXgoLi4udGhpcy5zZXF1ZW5jZXMubWFwKHMgPT4gcy5sZW5ndGgpKTtcbiAgICAgICAgLy8gQWRqdXN0IHRoZSBzZWxlY3Rpb24gdG8gYWNjb3VudCBmb3IgdGhlIHJlbW92ZWQgY2hhcmFjdGVyIChzaGlmdCBsZWZ0IGJ5IDEpXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSB7XG4gICAgICAgICAgICBzZXFJbmRleDogb3JpZ2luYWxTZWxlY3Rpb25TdGFydC5zZXFJbmRleCxcbiAgICAgICAgICAgIHBvczogb3JpZ2luYWxTZWxlY3Rpb25TdGFydC5wb3MgLSAxXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0ge1xuICAgICAgICAgICAgc2VxSW5kZXg6IG9yaWdpbmFsU2VsZWN0aW9uRW5kLnNlcUluZGV4LFxuICAgICAgICAgICAgcG9zOiBvcmlnaW5hbFNlbGVjdGlvbkVuZC5wb3MgLSAxXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgIH1cbiAgICBkZWxldGVDaGFyYWN0ZXIoaXNCYWNrc3BhY2UpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvblN0YXJ0IHx8ICF0aGlzLnNlbGVjdGlvbkVuZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0Um93ID0gTWF0aC5taW4odGhpcy5zZWxlY3Rpb25TdGFydC5zZXFJbmRleCwgdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXgpO1xuICAgICAgICBjb25zdCBlbmRSb3cgPSBNYXRoLm1heCh0aGlzLnNlbGVjdGlvblN0YXJ0LnNlcUluZGV4LCB0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCk7XG4gICAgICAgIGNvbnN0IHN0YXJ0Q29sID0gTWF0aC5taW4odGhpcy5zZWxlY3Rpb25TdGFydC5wb3MsIHRoaXMuc2VsZWN0aW9uRW5kLnBvcyk7XG4gICAgICAgIGNvbnN0IGVuZENvbCA9IE1hdGgubWF4KHRoaXMuc2VsZWN0aW9uU3RhcnQucG9zLCB0aGlzLnNlbGVjdGlvbkVuZC5wb3MpO1xuICAgICAgICAvLyBDaGVjayBpZiB3ZSBoYXZlIGEgbXVsdGktY2VsbCBzZWxlY3Rpb25cbiAgICAgICAgY29uc3QgaGFzTXVsdGlDZWxsU2VsZWN0aW9uID0gKHN0YXJ0Um93ICE9PSBlbmRSb3cpIHx8IChzdGFydENvbCAhPT0gZW5kQ29sKTtcbiAgICAgICAgaWYgKGhhc011bHRpQ2VsbFNlbGVjdGlvbikge1xuICAgICAgICAgICAgaWYgKGlzQmFja3NwYWNlKSB7XG4gICAgICAgICAgICAgICAgLy8gQmFja3NwYWNlOiBSZW1vdmUgY2hhcmFjdGVycyB0byB0aGUgbGVmdCBvZiBzZWxlY3Rpb24sIHByZXNlcnZlIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgIHRoaXMuYmFja3NwYWNlU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBEZWxldGUga2V5OiBSZXBsYWNlIHNlbGVjdGlvbiB3aXRoIGRhc2hlcyBhbmQgcHJlc2VydmUgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5maWxsU2VsZWN0aW9uKCctJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRm9yIHNpbmdsZSBjZWxsIGN1cnNvciBwb3NpdGlvbiwgZGVsZXRlIG9uZSBjaGFyYWN0ZXJcbiAgICAgICAgbGV0IGRlbGV0ZVBvcyA9IHN0YXJ0Q29sO1xuICAgICAgICBpZiAoaXNCYWNrc3BhY2UgJiYgZGVsZXRlUG9zID4gMCkge1xuICAgICAgICAgICAgZGVsZXRlUG9zLS07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0Um93OyBpIDw9IGVuZFJvdzsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFNlcXVlbmNlID0gdGhpcy5zZXF1ZW5jZXNbaV07XG4gICAgICAgICAgICBpZiAoZGVsZXRlUG9zIDwgb3JpZ2luYWxTZXF1ZW5jZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdTZXF1ZW5jZSA9IG9yaWdpbmFsU2VxdWVuY2Uuc2xpY2UoMCwgZGVsZXRlUG9zKSArIG9yaWdpbmFsU2VxdWVuY2Uuc2xpY2UoZGVsZXRlUG9zICsgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXF1ZW5jZXNbaV0gPSBuZXdTZXF1ZW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1heFNlcXVlbmNlTGVuZ3RoID0gTWF0aC5tYXgoLi4udGhpcy5zZXF1ZW5jZXMubWFwKHMgPT4gcy5sZW5ndGgpKTtcbiAgICAgICAgLy8gUG9zaXRpb24gY3Vyc29yIGF0IHRoZSBkZWxldGlvbiBwb2ludFxuICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0geyBzZXFJbmRleDogc3RhcnRSb3csIHBvczogZGVsZXRlUG9zIH07XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gdGhpcy5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgfVxuICAgIGluc2VydENoYXJhY3RlcihjaGFyKSB7XG4gICAgICAgIGlmICghdGhpcy5zZWxlY3Rpb25TdGFydCB8fCAhdGhpcy5zZWxlY3Rpb25FbmQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgbXVsdGktY2VsbCBzZWxlY3Rpb24sIHJlcGxhY2UgaXQgd2l0aCB0aGUgY2hhcmFjdGVyIGluc3RlYWQgb2YgaW5zZXJ0aW5nXG4gICAgICAgIGNvbnN0IHN0YXJ0Um93ID0gTWF0aC5taW4odGhpcy5zZWxlY3Rpb25TdGFydC5zZXFJbmRleCwgdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXgpO1xuICAgICAgICBjb25zdCBlbmRSb3cgPSBNYXRoLm1heCh0aGlzLnNlbGVjdGlvblN0YXJ0LnNlcUluZGV4LCB0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCk7XG4gICAgICAgIGNvbnN0IHN0YXJ0Q29sID0gTWF0aC5taW4odGhpcy5zZWxlY3Rpb25TdGFydC5wb3MsIHRoaXMuc2VsZWN0aW9uRW5kLnBvcyk7XG4gICAgICAgIGNvbnN0IGVuZENvbCA9IE1hdGgubWF4KHRoaXMuc2VsZWN0aW9uU3RhcnQucG9zLCB0aGlzLnNlbGVjdGlvbkVuZC5wb3MpO1xuICAgICAgICAvLyBDaGVjayBpZiB3ZSBoYXZlIGEgbXVsdGktY2VsbCBzZWxlY3Rpb25cbiAgICAgICAgY29uc3QgaGFzTXVsdGlDZWxsU2VsZWN0aW9uID0gKHN0YXJ0Um93ICE9PSBlbmRSb3cpIHx8IChzdGFydENvbCAhPT0gZW5kQ29sKTtcbiAgICAgICAgaWYgKGhhc011bHRpQ2VsbFNlbGVjdGlvbikge1xuICAgICAgICAgICAgLy8gRm9yIG11bHRpLWNlbGwgc2VsZWN0aW9ucywgZmlsbCB0aGUgc2VsZWN0aW9uIGluc3RlYWQgb2YgaW5zZXJ0aW5nXG4gICAgICAgICAgICB0aGlzLmZpbGxTZWxlY3Rpb24oY2hhcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRm9yIHNpbmdsZSBjZWxsIGN1cnNvciBwb3NpdGlvbiwgaW5zZXJ0IHRoZSBjaGFyYWN0ZXJcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0Um93OyBpIDw9IGVuZFJvdzsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFNlcXVlbmNlID0gdGhpcy5zZXF1ZW5jZXNbaV07XG4gICAgICAgICAgICBjb25zdCBuZXdTZXF1ZW5jZSA9IG9yaWdpbmFsU2VxdWVuY2Uuc2xpY2UoMCwgc3RhcnRDb2wpICsgY2hhciArIG9yaWdpbmFsU2VxdWVuY2Uuc2xpY2Uoc3RhcnRDb2wpO1xuICAgICAgICAgICAgdGhpcy5zZXF1ZW5jZXNbaV0gPSBuZXdTZXF1ZW5jZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1heFNlcXVlbmNlTGVuZ3RoID0gTWF0aC5tYXgoLi4udGhpcy5zZXF1ZW5jZXMubWFwKHMgPT4gcy5sZW5ndGgpKTtcbiAgICAgICAgLy8gTW92ZSBjdXJzb3IgdG8gYWZ0ZXIgdGhlIGluc2VydGVkIGNoYXJhY3RlclxuICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0geyBzZXFJbmRleDogc3RhcnRSb3csIHBvczogc3RhcnRDb2wgKyAxIH07XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gdGhpcy5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgfVxuICAgIGZpbGxTZWxlY3Rpb24oY2hhcikge1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uU3RhcnQgfHwgIXRoaXMuc2VsZWN0aW9uRW5kKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnRSb3cgPSBNYXRoLm1pbih0aGlzLnNlbGVjdGlvblN0YXJ0LnNlcUluZGV4LCB0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCk7XG4gICAgICAgIGNvbnN0IGVuZFJvdyA9IE1hdGgubWF4KHRoaXMuc2VsZWN0aW9uU3RhcnQuc2VxSW5kZXgsIHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4KTtcbiAgICAgICAgY29uc3Qgc3RhcnRDb2wgPSBNYXRoLm1pbih0aGlzLnNlbGVjdGlvblN0YXJ0LnBvcywgdGhpcy5zZWxlY3Rpb25FbmQucG9zKTtcbiAgICAgICAgY29uc3QgZW5kQ29sID0gTWF0aC5tYXgodGhpcy5zZWxlY3Rpb25TdGFydC5wb3MsIHRoaXMuc2VsZWN0aW9uRW5kLnBvcyk7XG4gICAgICAgIC8vIFN0b3JlIHRoZSBvcmlnaW5hbCBzZWxlY3Rpb24gdG8gcHJlc2VydmUgaXRcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxTZWxlY3Rpb25TdGFydCA9IHsgLi4udGhpcy5zZWxlY3Rpb25TdGFydCB9O1xuICAgICAgICBjb25zdCBvcmlnaW5hbFNlbGVjdGlvbkVuZCA9IHsgLi4udGhpcy5zZWxlY3Rpb25FbmQgfTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0Um93OyBpIDw9IGVuZFJvdzsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFNlcXVlbmNlID0gdGhpcy5zZXF1ZW5jZXNbaV07XG4gICAgICAgICAgICBsZXQgbmV3U2VxdWVuY2VBcnJheSA9IG9yaWdpbmFsU2VxdWVuY2Uuc3BsaXQoJycpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IHN0YXJ0Q29sOyBqIDw9IGVuZENvbDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGogPCBuZXdTZXF1ZW5jZUFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdTZXF1ZW5jZUFycmF5W2pdID0gY2hhcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNlcXVlbmNlc1tpXSA9IG5ld1NlcXVlbmNlQXJyYXkuam9pbignJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXhTZXF1ZW5jZUxlbmd0aCA9IE1hdGgubWF4KC4uLnRoaXMuc2VxdWVuY2VzLm1hcChzID0+IHMubGVuZ3RoKSk7XG4gICAgICAgIC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIHNlbGVjdGlvbiB0byBwcmVzZXJ2ZSBpdFxuICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0gb3JpZ2luYWxTZWxlY3Rpb25TdGFydDtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSBvcmlnaW5hbFNlbGVjdGlvbkVuZDtcbiAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgfVxuICAgIGluc2VydENoYXJhY3RlcldpdGhTaGlmdChjaGFyKSB7XG4gICAgICAgIGlmICghdGhpcy5zZWxlY3Rpb25TdGFydCB8fCAhdGhpcy5zZWxlY3Rpb25FbmQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGFydFJvdyA9IE1hdGgubWluKHRoaXMuc2VsZWN0aW9uU3RhcnQuc2VxSW5kZXgsIHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4KTtcbiAgICAgICAgY29uc3QgZW5kUm93ID0gTWF0aC5tYXgodGhpcy5zZWxlY3Rpb25TdGFydC5zZXFJbmRleCwgdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXgpO1xuICAgICAgICBjb25zdCBzdGFydENvbCA9IE1hdGgubWluKHRoaXMuc2VsZWN0aW9uU3RhcnQucG9zLCB0aGlzLnNlbGVjdGlvbkVuZC5wb3MpO1xuICAgICAgICAvLyBTdG9yZSB0aGUgb3JpZ2luYWwgc2VsZWN0aW9uIHRvIHByZXNlcnZlIGl0IGFmdGVyIGluc2VydGlvblxuICAgICAgICBjb25zdCBvcmlnaW5hbFNlbGVjdGlvblN0YXJ0ID0geyAuLi50aGlzLnNlbGVjdGlvblN0YXJ0IH07XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsU2VsZWN0aW9uRW5kID0geyAuLi50aGlzLnNlbGVjdGlvbkVuZCB9O1xuICAgICAgICAvLyBJbnNlcnQgY2hhcmFjdGVyIGF0IHRoZSBzdGFydCBwb3NpdGlvbiBhbmQgc2hpZnQgZXZlcnl0aGluZyByaWdodFxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRSb3c7IGkgPD0gZW5kUm93OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU2VxdWVuY2UgPSB0aGlzLnNlcXVlbmNlc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1NlcXVlbmNlID0gb3JpZ2luYWxTZXF1ZW5jZS5zbGljZSgwLCBzdGFydENvbCkgKyBjaGFyICsgb3JpZ2luYWxTZXF1ZW5jZS5zbGljZShzdGFydENvbCk7XG4gICAgICAgICAgICB0aGlzLnNlcXVlbmNlc1tpXSA9IG5ld1NlcXVlbmNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWF4U2VxdWVuY2VMZW5ndGggPSBNYXRoLm1heCguLi50aGlzLnNlcXVlbmNlcy5tYXAocyA9PiBzLmxlbmd0aCkpO1xuICAgICAgICAvLyBBZGp1c3Qgc2VsZWN0aW9uIHRvIGFjY291bnQgZm9yIHRoZSBpbnNlcnRlZCBjaGFyYWN0ZXJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHtcbiAgICAgICAgICAgIHNlcUluZGV4OiBvcmlnaW5hbFNlbGVjdGlvblN0YXJ0LnNlcUluZGV4LFxuICAgICAgICAgICAgcG9zOiBvcmlnaW5hbFNlbGVjdGlvblN0YXJ0LnBvcyArIDFcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSB7XG4gICAgICAgICAgICBzZXFJbmRleDogb3JpZ2luYWxTZWxlY3Rpb25FbmQuc2VxSW5kZXgsXG4gICAgICAgICAgICBwb3M6IG9yaWdpbmFsU2VsZWN0aW9uRW5kLnBvcyArIDFcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgfVxuICAgIGVuc3VyZVNlbGVjdGlvbigpIHtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBzZWxlY3Rpb24gaWYgbm90IGFscmVhZHkgc2V0IChmb3Iga2V5Ym9hcmQgbmF2aWdhdGlvbiB3aXRob3V0IG1vdXNlIGNsaWNrKVxuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uU3RhcnQgJiYgdGhpcy5zZXF1ZW5jZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHsgc2VxSW5kZXg6IDAsIHBvczogMCB9O1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSB7IC4uLnRoaXMuc2VsZWN0aW9uU3RhcnQgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbktleURvd24oZXZlbnQpIHtcbiAgICAgICAgLy8gRW5zdXJlIHdlIGhhdmUgYSB2YWxpZCBzZWxlY3Rpb24gZm9yIGtleWJvYXJkIG5hdmlnYXRpb25cbiAgICAgICAgdGhpcy5lbnN1cmVTZWxlY3Rpb24oKTtcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvblN0YXJ0KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjJykge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRUZXh0ID0gdGhpcy5nZXRTZWxlY3RlZFRleHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHNlbGVjdGVkVGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC5rZXkudG9Mb3dlckNhc2UoKSA9PT0gJ3YnKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLnJlYWRUZXh0KCkudGhlbih0ZXh0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHQgJiYgdGhpcy5zZWxlY3Rpb25TdGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBzZXFJbmRleCB9ID0gdGhpcy5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gTWF0aC5taW4odGhpcy5zZWxlY3Rpb25TdGFydC5wb3MsIHRoaXMuc2VsZWN0aW9uRW5kLnBvcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmQgPSBNYXRoLm1heCh0aGlzLnNlbGVjdGlvblN0YXJ0LnBvcywgdGhpcy5zZWxlY3Rpb25FbmQucG9zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU2VxdWVuY2UgPSB0aGlzLnNlcXVlbmNlc1tzZXFJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdTZXF1ZW5jZSA9IG9yaWdpbmFsU2VxdWVuY2Uuc2xpY2UoMCwgc3RhcnQpICsgdGV4dCArIG9yaWdpbmFsU2VxdWVuY2Uuc2xpY2UoZW5kICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcXVlbmNlc1tzZXFJbmRleF0gPSBuZXdTZXF1ZW5jZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSB7IHNlcUluZGV4LCBwb3M6IHN0YXJ0ICsgdGV4dC5sZW5ndGggfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gdGhpcy5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF4U2VxdWVuY2VMZW5ndGggPSBNYXRoLm1heCguLi50aGlzLnNlcXVlbmNlcy5tYXAocyA9PiBzLmxlbmd0aCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzZXFJbmRleCwgcG9zIH0gPSB0aGlzLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICBjb25zdCBpdXBhY0NoYXJhY3RlcnMgPSAnQUNHVFVSWVNXS01CREhWTi0nO1xuICAgICAgICBpZiAoaXVwYWNDaGFyYWN0ZXJzLmluY2x1ZGVzKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGlvblN0YXJ0ICYmIHRoaXMuc2VsZWN0aW9uRW5kICYmICh0aGlzLnNlbGVjdGlvblN0YXJ0LnBvcyAhPT0gdGhpcy5zZWxlY3Rpb25FbmQucG9zIHx8IHRoaXMuc2VsZWN0aW9uU3RhcnQuc2VxSW5kZXggIT09IHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4KSkgeyAvLyBDaGVjayBpZiBhbnkgc2VsZWN0aW9uIGV4aXN0c1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsbFNlbGVjdGlvbihldmVudC5rZXkudG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluc2VydENoYXJhY3RlcihldmVudC5rZXkudG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnICcpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyBTcGFjZWJhcjogSW5zZXJ0IGRhc2ggYW5kIHNoaWZ0IGNoYXJhY3RlcnMgKGluc2VydCBhY3Rpb24pXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb25TdGFydCAmJiB0aGlzLnNlbGVjdGlvbkVuZCAmJiAodGhpcy5zZWxlY3Rpb25TdGFydC5wb3MgIT09IHRoaXMuc2VsZWN0aW9uRW5kLnBvcyB8fCB0aGlzLnNlbGVjdGlvblN0YXJ0LnNlcUluZGV4ICE9PSB0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCkpIHtcbiAgICAgICAgICAgICAgICAvLyBNdWx0aS1jZWxsIHNlbGVjdGlvbjogaW5zZXJ0IGF0IHN0YXJ0IGFuZCBzaGlmdCBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICB0aGlzLmluc2VydENoYXJhY3RlcldpdGhTaGlmdCgnLScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gU2luZ2xlIGN1cnNvcjogcmVndWxhciBpbnNlcnRcbiAgICAgICAgICAgICAgICB0aGlzLmluc2VydENoYXJhY3RlcignLScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1BvcyA9IHRoaXMuZmluZFByZXZpb3VzV29yZChzZXFJbmRleCwgcG9zKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0geyBzZXFJbmRleCwgcG9zOiBuZXdQb3MgfTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IHRoaXMuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIC8vIEVuc3VyZSBzZWxlY3Rpb25FbmQgaXMgaW5pdGlhbGl6ZWQgaWYgbm90IGFscmVhZHlcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uRW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0geyAuLi50aGlzLnNlbGVjdGlvblN0YXJ0IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEV4dGVuZCBzZWxlY3Rpb24gbGVmdFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbkVuZC5wb3MgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kLnBvcy0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXgtLTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQucG9zID0gdGhpcy5zZXF1ZW5jZXNbdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXhdLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBNb3ZlIGN1cnNvciBsZWZ0LCBjbGVhciBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICBpZiAocG9zID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0geyBzZXFJbmRleCwgcG9zOiBwb3MgLSAxIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlcUluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0geyBzZXFJbmRleDogc2VxSW5kZXggLSAxLCBwb3M6IHRoaXMuc2VxdWVuY2VzW3NlcUluZGV4IC0gMV0ubGVuZ3RoIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gdGhpcy5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQb3MgPSB0aGlzLmZpbmROZXh0V29yZChzZXFJbmRleCwgcG9zKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0geyBzZXFJbmRleCwgcG9zOiBuZXdQb3MgfTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IHRoaXMuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIC8vIEVuc3VyZSBzZWxlY3Rpb25FbmQgaXMgaW5pdGlhbGl6ZWQgaWYgbm90IGFscmVhZHlcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uRW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0geyAuLi50aGlzLnNlbGVjdGlvblN0YXJ0IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEV4dGVuZCBzZWxlY3Rpb24gcmlnaHRcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb25FbmQucG9zIDwgdGhpcy5zZXF1ZW5jZXNbdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXhdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZC5wb3MrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXggPCB0aGlzLnNlcXVlbmNlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kLnBvcyA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTW92ZSBjdXJzb3IgcmlnaHQsIGNsZWFyIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgIGlmIChwb3MgPCB0aGlzLnNlcXVlbmNlc1tzZXFJbmRleF0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSB7IHNlcUluZGV4LCBwb3M6IHBvcyArIDEgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc2VxSW5kZXggPCB0aGlzLnNlcXVlbmNlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSB7IHNlcUluZGV4OiBzZXFJbmRleCArIDEsIHBvczogMCB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IHRoaXMuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChldmVudC5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChldmVudC5jdHJsS2V5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHsgc2VxSW5kZXg6IDAsIHBvczogcG9zIH07XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSB0aGlzLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAvLyBFbnN1cmUgc2VsZWN0aW9uRW5kIGlzIGluaXRpYWxpemVkIGlmIG5vdCBhbHJlYWR5XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvbkVuZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IHsgLi4udGhpcy5zZWxlY3Rpb25TdGFydCB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBFeHRlbmQgc2VsZWN0aW9uIHVwXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleC0tO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZC5wb3MgPSBNYXRoLm1pbih0aGlzLnNlbGVjdGlvbkVuZC5wb3MsIHRoaXMuc2VxdWVuY2VzW3RoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4XS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1vdmUgY3Vyc29yIHVwLCBjbGVhciBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICBpZiAoc2VxSW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSB7IHNlcUluZGV4OiBzZXFJbmRleCAtIDEsIHBvczogTWF0aC5taW4ocG9zLCB0aGlzLnNlcXVlbmNlc1tzZXFJbmRleCAtIDFdLmxlbmd0aCkgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSB7IHNlcUluZGV4OiAwLCBwb3M6IDAgfTsgLy8gTW92ZSB0byBzdGFydCBvZiBmaXJzdCBzZXF1ZW5jZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IHRoaXMuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0geyBzZXFJbmRleDogdGhpcy5zZXF1ZW5jZXMubGVuZ3RoIC0gMSwgcG9zOiBwb3MgfTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IHRoaXMuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIC8vIEVuc3VyZSBzZWxlY3Rpb25FbmQgaXMgaW5pdGlhbGl6ZWQgaWYgbm90IGFscmVhZHlcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uRW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0geyAuLi50aGlzLnNlbGVjdGlvblN0YXJ0IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEV4dGVuZCBzZWxlY3Rpb24gZG93blxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCA8IHRoaXMuc2VxdWVuY2VzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQucG9zID0gTWF0aC5taW4odGhpcy5zZWxlY3Rpb25FbmQucG9zLCB0aGlzLnNlcXVlbmNlc1t0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleF0ubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBNb3ZlIGN1cnNvciBkb3duLCBjbGVhciBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICBpZiAoc2VxSW5kZXggPCB0aGlzLnNlcXVlbmNlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSB7IHNlcUluZGV4OiBzZXFJbmRleCArIDEsIHBvczogTWF0aC5taW4ocG9zLCB0aGlzLnNlcXVlbmNlc1tzZXFJbmRleCArIDFdLmxlbmd0aCkgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RTZXFJbmRleCA9IHRoaXMuc2VxdWVuY2VzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSB7IHNlcUluZGV4OiBsYXN0U2VxSW5kZXgsIHBvczogdGhpcy5zZXF1ZW5jZXNbbGFzdFNlcUluZGV4XS5sZW5ndGggfTsgLy8gTW92ZSB0byBlbmQgb2YgbGFzdCBzZXF1ZW5jZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IHRoaXMuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChldmVudC5rZXkgPT09ICdCYWNrc3BhY2UnKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5kZWxldGVDaGFyYWN0ZXIodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnRGVsZXRlJykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlQ2hhcmFjdGVyKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmaW5kTmV4dFdvcmQoc2VxSW5kZXgsIHBvcykge1xuICAgICAgICBjb25zdCBzZXF1ZW5jZSA9IHRoaXMuc2VxdWVuY2VzW3NlcUluZGV4XTtcbiAgICAgICAgbGV0IGluV29yZCA9ICF0aGlzLmlzR2FwKHNlcXVlbmNlW3Bvc10pO1xuICAgICAgICBmb3IgKGxldCBpID0gcG9zOyBpIDwgc2VxdWVuY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpbldvcmQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0dhcChzZXF1ZW5jZVtpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5Xb3JkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzR2FwKHNlcXVlbmNlW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlcXVlbmNlLmxlbmd0aDtcbiAgICB9XG4gICAgZmluZFByZXZpb3VzV29yZChzZXFJbmRleCwgcG9zKSB7XG4gICAgICAgIGNvbnN0IHNlcXVlbmNlID0gdGhpcy5zZXF1ZW5jZXNbc2VxSW5kZXhdO1xuICAgICAgICBsZXQgaW5Xb3JkID0gcG9zID4gMCAmJiAhdGhpcy5pc0dhcChzZXF1ZW5jZVtwb3MgLSAxXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSBwb3MgLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgaWYgKGluV29yZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzR2FwKHNlcXVlbmNlW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaSArIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzR2FwKHNlcXVlbmNlW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICBpbldvcmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaXNHYXAoY2hhcikge1xuICAgICAgICByZXR1cm4gY2hhciA9PT0gJy0nO1xuICAgIH1cbiAgICBvbldoZWVsKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsWCArPSBldmVudC5kZWx0YVg7XG4gICAgICAgIHRoaXMuc2Nyb2xsWSArPSBldmVudC5kZWx0YVk7XG4gICAgICAgIGNvbnN0IG1heFNjcm9sbFggPSB0aGlzLm1heFNlcXVlbmNlTGVuZ3RoICogdGhpcy5ibG9ja1dpZHRoIC0gdGhpcy5zZXF1ZW5jZUNhbnZhcy53aWR0aDtcbiAgICAgICAgY29uc3QgbWF4U2Nyb2xsWSA9IHRoaXMuc2VxdWVuY2VzLmxlbmd0aCAqIHRoaXMuYmxvY2tIZWlnaHQgLSB0aGlzLnNlcXVlbmNlQ2FudmFzLmhlaWdodDtcbiAgICAgICAgdGhpcy5zY3JvbGxYID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5zY3JvbGxYLCBtYXhTY3JvbGxYKSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsWSA9IE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMuc2Nyb2xsWSwgbWF4U2Nyb2xsWSkpO1xuICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICB9XG4gICAgcmVxdWVzdFJlZHJhdygpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSZWRyYXdTY2hlZHVsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzUmVkcmF3U2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICAgICAgdGhpcy5pc1JlZHJhd1NjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNOdWNsZW90aWRlU2VsZWN0ZWQoc2VxSW5kZXgsIHBvcykge1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uU3RhcnQgfHwgIXRoaXMuc2VsZWN0aW9uRW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnRSb3cgPSBNYXRoLm1pbih0aGlzLnNlbGVjdGlvblN0YXJ0LnNlcUluZGV4LCB0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCk7XG4gICAgICAgIGNvbnN0IGVuZFJvdyA9IE1hdGgubWF4KHRoaXMuc2VsZWN0aW9uU3RhcnQuc2VxSW5kZXgsIHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4KTtcbiAgICAgICAgY29uc3Qgc3RhcnRDb2wgPSBNYXRoLm1pbih0aGlzLnNlbGVjdGlvblN0YXJ0LnBvcywgdGhpcy5zZWxlY3Rpb25FbmQucG9zKTtcbiAgICAgICAgY29uc3QgZW5kQ29sID0gTWF0aC5tYXgodGhpcy5zZWxlY3Rpb25TdGFydC5wb3MsIHRoaXMuc2VsZWN0aW9uRW5kLnBvcyk7XG4gICAgICAgIHJldHVybiBzZXFJbmRleCA+PSBzdGFydFJvdyAmJiBzZXFJbmRleCA8PSBlbmRSb3cgJiYgcG9zID49IHN0YXJ0Q29sICYmIHBvcyA8PSBlbmRDb2w7XG4gICAgfVxuICAgIGlzU2VhcmNoUmVzdWx0KHNlcUluZGV4LCBwb3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNlYXJjaFJlc3VsdHMgfHwgIXRoaXMuc2VhcmNoUmVzdWx0c1tzZXFJbmRleF0gfHwgdGhpcy5zZWFyY2hRdWVyeUxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3Qgc3RhcnRJbmRleCBvZiB0aGlzLnNlYXJjaFJlc3VsdHNbc2VxSW5kZXhdKSB7XG4gICAgICAgICAgICBpZiAocG9zID49IHN0YXJ0SW5kZXggJiYgcG9zIDwgc3RhcnRJbmRleCArIHRoaXMuc2VhcmNoUXVlcnlMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuZHJhd1NlcXVlbmNlcygpO1xuICAgICAgICB0aGlzLmRyYXdOYW1lcygpO1xuICAgICAgICB0aGlzLmRyYXdSdWxlcigpO1xuICAgICAgICB0aGlzLmRyYXdTY3JvbGxiYXJzKCk7XG4gICAgfVxuICAgIGRyYXdTY3JvbGxiYXJzKCkge1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLnNlcUN0eDtcbiAgICAgICAgY29uc3QgY2FudmFzV2lkdGggPSB0aGlzLnNlcXVlbmNlQ2FudmFzLndpZHRoO1xuICAgICAgICBjb25zdCBjYW52YXNIZWlnaHQgPSB0aGlzLnNlcXVlbmNlQ2FudmFzLmhlaWdodDtcbiAgICAgICAgLy8gSG9yaXpvbnRhbCBTY3JvbGxiYXJcbiAgICAgICAgY29uc3QgY29udGVudFdpZHRoID0gdGhpcy5tYXhTZXF1ZW5jZUxlbmd0aCAqIHRoaXMuYmxvY2tXaWR0aDtcbiAgICAgICAgaWYgKGNvbnRlbnRXaWR0aCA+IGNhbnZhc1dpZHRoKSB7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxiYXJUcmFja1dpZHRoID0gY2FudmFzV2lkdGggLSB0aGlzLnNjcm9sbGJhcldpZHRoOyAvLyBMZWF2ZSBzcGFjZSBmb3IgdmVydGljYWwgc2Nyb2xsYmFyXG4gICAgICAgICAgICBjb25zdCBzY3JvbGxiYXJUaHVtYldpZHRoID0gTWF0aC5tYXgoNTAsIHNjcm9sbGJhclRyYWNrV2lkdGggKiAoY2FudmFzV2lkdGggLyBjb250ZW50V2lkdGgpKTtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGJhclRodW1iWCA9ICh0aGlzLnNjcm9sbFggLyAoY29udGVudFdpZHRoIC0gY2FudmFzV2lkdGgpKSAqIChzY3JvbGxiYXJUcmFja1dpZHRoIC0gc2Nyb2xsYmFyVGh1bWJXaWR0aCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5zY3JvbGxiYXJUcmFja0NvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIGNhbnZhc0hlaWdodCAtIHRoaXMuc2Nyb2xsYmFyV2lkdGgsIHNjcm9sbGJhclRyYWNrV2lkdGgsIHRoaXMuc2Nyb2xsYmFyV2lkdGgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2Nyb2xsYmFyQ29sb3I7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3Qoc2Nyb2xsYmFyVGh1bWJYLCBjYW52YXNIZWlnaHQgLSB0aGlzLnNjcm9sbGJhcldpZHRoLCBzY3JvbGxiYXJUaHVtYldpZHRoLCB0aGlzLnNjcm9sbGJhcldpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBWZXJ0aWNhbCBTY3JvbGxiYXJcbiAgICAgICAgY29uc3QgY29udGVudEhlaWdodCA9IHRoaXMuc2VxdWVuY2VzLmxlbmd0aCAqIHRoaXMuYmxvY2tIZWlnaHQ7XG4gICAgICAgIGlmIChjb250ZW50SGVpZ2h0ID4gY2FudmFzSGVpZ2h0KSB7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxiYXJUcmFja0hlaWdodCA9IGNhbnZhc0hlaWdodCAtIHRoaXMuc2Nyb2xsYmFyV2lkdGg7IC8vIExlYXZlIHNwYWNlIGZvciBob3Jpem9udGFsIHNjcm9sbGJhclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYmFyVGh1bWJIZWlnaHQgPSBNYXRoLm1heCg1MCwgc2Nyb2xsYmFyVHJhY2tIZWlnaHQgKiAoY2FudmFzSGVpZ2h0IC8gY29udGVudEhlaWdodCkpO1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYmFyVGh1bWJZID0gKHRoaXMuc2Nyb2xsWSAvIChjb250ZW50SGVpZ2h0IC0gY2FudmFzSGVpZ2h0KSkgKiAoc2Nyb2xsYmFyVHJhY2tIZWlnaHQgLSBzY3JvbGxiYXJUaHVtYkhlaWdodCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5zY3JvbGxiYXJUcmFja0NvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KGNhbnZhc1dpZHRoIC0gdGhpcy5zY3JvbGxiYXJXaWR0aCwgMCwgdGhpcy5zY3JvbGxiYXJXaWR0aCwgc2Nyb2xsYmFyVHJhY2tIZWlnaHQpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2Nyb2xsYmFyQ29sb3I7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoY2FudmFzV2lkdGggLSB0aGlzLnNjcm9sbGJhcldpZHRoLCBzY3JvbGxiYXJUaHVtYlksIHRoaXMuc2Nyb2xsYmFyV2lkdGgsIHNjcm9sbGJhclRodW1iSGVpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkcmF3U2VxdWVuY2VzKCkge1xuICAgICAgICB0aGlzLnNlcUN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5zZXF1ZW5jZUNhbnZhcy53aWR0aCwgdGhpcy5zZXF1ZW5jZUNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBjb25zdCBzdGFydFJvdyA9IE1hdGguZmxvb3IodGhpcy5zY3JvbGxZIC8gdGhpcy5ibG9ja0hlaWdodCk7XG4gICAgICAgIGNvbnN0IGVuZFJvdyA9IE1hdGgubWluKHRoaXMuc2VxdWVuY2VzLmxlbmd0aCwgc3RhcnRSb3cgKyBNYXRoLmNlaWwodGhpcy5zZXF1ZW5jZUNhbnZhcy5oZWlnaHQgLyB0aGlzLmJsb2NrSGVpZ2h0KSk7XG4gICAgICAgIGNvbnN0IHN0YXJ0Q29sID0gTWF0aC5mbG9vcih0aGlzLnNjcm9sbFggLyB0aGlzLmJsb2NrV2lkdGgpO1xuICAgICAgICBjb25zdCBlbmRDb2wgPSBNYXRoLm1pbih0aGlzLm1heFNlcXVlbmNlTGVuZ3RoLCBzdGFydENvbCArIE1hdGguY2VpbCh0aGlzLnNlcXVlbmNlQ2FudmFzLndpZHRoIC8gdGhpcy5ibG9ja1dpZHRoKSk7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydFJvdzsgaSA8IGVuZFJvdzsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzZXF1ZW5jZSA9IHRoaXMuc2VxdWVuY2VzW2ldO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IHN0YXJ0Q29sOyBqIDwgZW5kQ29sOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gaiAqIHRoaXMuYmxvY2tXaWR0aCAtIHRoaXMuc2Nyb2xsWDtcbiAgICAgICAgICAgICAgICBjb25zdCB5ID0gaSAqIHRoaXMuYmxvY2tIZWlnaHQgLSB0aGlzLnNjcm9sbFk7XG4gICAgICAgICAgICAgICAgY29uc3QgbnVjbGVvdGlkZSA9IHNlcXVlbmNlW2pdIHx8ICcnO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXJUb0RyYXcgPSB0aGlzLmRpc3BsYXlNb2RlID09PSAnbnVjbGVvdGlkZScgPyBudWNsZW90aWRlIDogdGhpcy50cmFuc2xhdGVkU2VxdWVuY2VzW2ldW2pdIHx8ICcnO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yTWFwID0gdGhpcy5kaXNwbGF5TW9kZSA9PT0gJ251Y2xlb3RpZGUnID8gdGhpcy5jb2xvcnMgOiB0aGlzLmFtaW5vQWNpZENvbG9ycztcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvckluZm8gPSBjb2xvck1hcFtjaGFyVG9EcmF3LnRvVXBwZXJDYXNlKCldIHx8IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicgfTsgLy8gRGVmYXVsdCB0byBibGFjayB0ZXh0IG9uIHdoaXRlIGJhY2tncm91bmRcbiAgICAgICAgICAgICAgICB0aGlzLnNlcUN0eC5maWxsU3R5bGUgPSBjb2xvckluZm8uYmFja2dyb3VuZDtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcUN0eC5maWxsUmVjdCh4LCB5LCB0aGlzLmJsb2NrV2lkdGgsIHRoaXMuYmxvY2tIZWlnaHQpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VxQ3R4LnN0cm9rZVN0eWxlID0gJyNEREREREQnO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VxQ3R4LnN0cm9rZVJlY3QoeCwgeSwgdGhpcy5ibG9ja1dpZHRoLCB0aGlzLmJsb2NrSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAvLyBIaWdobGlnaHQgc2VsZWN0ZWQgc2VxdWVuY2UgbmFtZXMgKGVudGlyZSByb3cpXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRTZXF1ZW5jZU5hbWVzLmhhcyhpKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcUN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAyNTUsIDAsIDAuMSknOyAvLyBMaWdodCBncmVlbiBvdmVybGF5IGZvciBzZWxlY3RlZCByb3dzXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VxQ3R4LmZpbGxSZWN0KHgsIHksIHRoaXMuYmxvY2tXaWR0aCwgdGhpcy5ibG9ja0hlaWdodCk7IC8vIEFwcGx5IHRvIGVhY2ggYmxvY2sgaW4gdGhlIHJvd1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NlYXJjaFJlc3VsdChpLCBqKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcUN0eC5maWxsU3R5bGUgPSAncmdiYSgyNTUsIDI1NSwgMCwgMC41KSc7IC8vIFNlbWktdHJhbnNwYXJlbnQgeWVsbG93IGZvciBzZWFyY2ggcmVzdWx0c1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcUN0eC5maWxsUmVjdCh4LCB5LCB0aGlzLmJsb2NrV2lkdGgsIHRoaXMuYmxvY2tIZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc051Y2xlb3RpZGVTZWxlY3RlZChpLCBqKSkgeyAvLyBUaGlzIG1ldGhvZCBuYW1lIGlzIG5vdyBtaXNsZWFkaW5nLCBzaG91bGQgYmUgaXNDaGFyU2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXFDdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwgMCwgMjU1LCAwLjMpJzsgLy8gU2VtaS10cmFuc3BhcmVudCBibHVlIG92ZXJsYXkgZm9yIGNlbGwgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VxQ3R4LmZpbGxSZWN0KHgsIHksIHRoaXMuYmxvY2tXaWR0aCwgdGhpcy5ibG9ja0hlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VxQ3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcUN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcUN0eC5zdHJva2VSZWN0KHgsIHksIHRoaXMuYmxvY2tXaWR0aCwgdGhpcy5ibG9ja0hlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2VxQ3R4LmZpbGxTdHlsZSA9IGNvbG9ySW5mby5mb3JlZ3JvdW5kOyAvLyBVc2UgZm9yZWdyb3VuZCBjb2xvciBmcm9tIHNjaGVtZVxuICAgICAgICAgICAgICAgIHRoaXMuc2VxQ3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VxQ3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VxQ3R4LmZpbGxUZXh0KGNoYXJUb0RyYXcsIHggKyB0aGlzLmJsb2NrV2lkdGggLyAyLCB5ICsgdGhpcy5ibG9ja0hlaWdodCAvIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGRyYXdOYW1lcygpIHtcbiAgICAgICAgdGhpcy5uYW1lc0N0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5uYW1lc0NhbnZhcy53aWR0aCwgdGhpcy5uYW1lc0NhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLm5hbWVzQ3R4LmZvbnQgPSAnMTRweCBzYW5zLXNlcmlmJztcbiAgICAgICAgdGhpcy5uYW1lc0N0eC50ZXh0QWxpZ24gPSAnbGVmdCc7XG4gICAgICAgIHRoaXMubmFtZXNDdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgICAgIGNvbnN0IHN0YXJ0Um93ID0gTWF0aC5mbG9vcih0aGlzLnNjcm9sbFkgLyB0aGlzLmJsb2NrSGVpZ2h0KTtcbiAgICAgICAgY29uc3QgZW5kUm93ID0gTWF0aC5taW4odGhpcy5zZXF1ZW5jZXMubGVuZ3RoLCBzdGFydFJvdyArIE1hdGguY2VpbCh0aGlzLm5hbWVzQ2FudmFzLmhlaWdodCAvIHRoaXMuYmxvY2tIZWlnaHQpKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0Um93OyBpIDwgZW5kUm93OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBpICogdGhpcy5ibG9ja0hlaWdodCAtIHRoaXMuc2Nyb2xsWTsgLy8gVG9wIG9mIHRoZSBibG9ja1xuICAgICAgICAgICAgY29uc3QgdGV4dFkgPSB5ICsgdGhpcy5ibG9ja0hlaWdodCAvIDI7IC8vIE1pZGRsZSBmb3IgdGV4dFxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRTZXF1ZW5jZU5hbWVzLmhhcyhpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubmFtZXNDdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwgMCwgMjU1LCAwLjEpJzsgLy8gTGlnaHQgYmx1ZSBiYWNrZ3JvdW5kIGZvciBzZWxlY3RlZCBuYW1lc1xuICAgICAgICAgICAgICAgIHRoaXMubmFtZXNDdHguZmlsbFJlY3QoMCwgeSwgdGhpcy5uYW1lc0NhbnZhcy53aWR0aCwgdGhpcy5ibG9ja0hlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5hbWVzQ3R4LmZpbGxTdHlsZSA9ICcjMDAwMDAwJzsgLy8gQmxhY2sgdGV4dFxuICAgICAgICAgICAgdGhpcy5uYW1lc0N0eC5maWxsVGV4dCh0aGlzLm5hbWVzW2ldLCA1LCB0ZXh0WSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZHJhd1J1bGVyKCkge1xuICAgICAgICB0aGlzLnJ1bGVyQ3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnJ1bGVyQ2FudmFzLndpZHRoLCB0aGlzLnJ1bGVyQ2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMucnVsZXJDdHguZm9udCA9ICcxMnB4IHNhbnMtc2VyaWYnO1xuICAgICAgICB0aGlzLnJ1bGVyQ3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgICAgICB0aGlzLnJ1bGVyQ3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgICAgICBjb25zdCBzdGFydENvbCA9IE1hdGguZmxvb3IodGhpcy5zY3JvbGxYIC8gdGhpcy5ibG9ja1dpZHRoKTtcbiAgICAgICAgY29uc3QgZW5kQ29sID0gTWF0aC5taW4odGhpcy5tYXhTZXF1ZW5jZUxlbmd0aCwgc3RhcnRDb2wgKyBNYXRoLmNlaWwodGhpcy5ydWxlckNhbnZhcy53aWR0aCAvIHRoaXMuYmxvY2tXaWR0aCkpO1xuICAgICAgICBmb3IgKGxldCBqID0gc3RhcnRDb2w7IGogPCBlbmRDb2w7IGorKykge1xuICAgICAgICAgICAgaWYgKGogJSAzID09PSAwKSB7IC8vIERyYXcgbGFiZWwgZXZlcnkgNSBibG9ja3NcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gaiAqIHRoaXMuYmxvY2tXaWR0aCAtIHRoaXMuc2Nyb2xsWCArIHRoaXMuYmxvY2tXaWR0aCAvIDI7XG4gICAgICAgICAgICAgICAgdGhpcy5ydWxlckN0eC5maWxsU3R5bGUgPSAnIzAwMDAwMCc7XG4gICAgICAgICAgICAgICAgdGhpcy5ydWxlckN0eC5maWxsVGV4dChTdHJpbmcoaiArIDEpLCB4LCB0aGlzLnJ1bGVyQ2FudmFzLmhlaWdodCAvIDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIG9uTmFtZXNDYW52YXNNb3VzZURvd24oZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMubmFtZXNDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgICAgIGNvbnN0IHNlcUluZGV4ID0gTWF0aC5mbG9vcigoeSArIHRoaXMuc2Nyb2xsWSkgLyB0aGlzLmJsb2NrSGVpZ2h0KTtcbiAgICAgICAgaWYgKHNlcUluZGV4ID49IDAgJiYgc2VxSW5kZXggPCB0aGlzLm5hbWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkgeyAvLyBDdHJsL0NtZCBjbGljayB0byB0b2dnbGUgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRTZXF1ZW5jZU5hbWVzLmhhcyhzZXFJbmRleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFNlcXVlbmNlTmFtZXMuZGVsZXRlKHNlcUluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTZXF1ZW5jZU5hbWVzLmFkZChzZXFJbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQuc2hpZnRLZXkpIHsgLy8gU2hpZnQgY2xpY2sgdG8gc2VsZWN0IGEgcmFuZ2VcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFNlcXVlbmNlTmFtZXMuc2l6ZSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlyc3RTZWxlY3RlZCA9IE1hdGgubWluKC4uLkFycmF5LmZyb20odGhpcy5zZWxlY3RlZFNlcXVlbmNlTmFtZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBNYXRoLm1pbihmaXJzdFNlbGVjdGVkLCBzZXFJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZCA9IE1hdGgubWF4KGZpcnN0U2VsZWN0ZWQsIHNlcUluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDw9IGVuZDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU2VxdWVuY2VOYW1lcy5hZGQoaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTZXF1ZW5jZU5hbWVzLmFkZChzZXFJbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7IC8vIFJlZ3VsYXIgY2xpY2sgdG8gc2VsZWN0IG9ubHkgdGhpcyBpdGVtXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFNlcXVlbmNlTmFtZXMuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU2VxdWVuY2VOYW1lcy5hZGQoc2VxSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwidmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIjtcbnZhciB3ZWJwYWNrUXVldWVzID0gaGFzU3ltYm9sID8gU3ltYm9sKFwid2VicGFjayBxdWV1ZXNcIikgOiBcIl9fd2VicGFja19xdWV1ZXNfX1wiO1xudmFyIHdlYnBhY2tFeHBvcnRzID0gaGFzU3ltYm9sID8gU3ltYm9sKFwid2VicGFjayBleHBvcnRzXCIpIDogXCJfX3dlYnBhY2tfZXhwb3J0c19fXCI7XG52YXIgd2VicGFja0Vycm9yID0gaGFzU3ltYm9sID8gU3ltYm9sKFwid2VicGFjayBlcnJvclwiKSA6IFwiX193ZWJwYWNrX2Vycm9yX19cIjtcblxuXG52YXIgcmVzb2x2ZVF1ZXVlID0gKHF1ZXVlKSA9PiB7XG5cdGlmKHF1ZXVlICYmIHF1ZXVlLmQgPCAxKSB7XG5cdFx0cXVldWUuZCA9IDE7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0pKTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSA/IGZuLnIrKyA6IGZuKCkpKTtcblx0fVxufVxudmFyIHdyYXBEZXBzID0gKGRlcHMpID0+IChkZXBzLm1hcCgoZGVwKSA9PiB7XG5cdGlmKGRlcCAhPT0gbnVsbCAmJiB0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKSB7XG5cblx0XHRpZihkZXBbd2VicGFja1F1ZXVlc10pIHJldHVybiBkZXA7XG5cdFx0aWYoZGVwLnRoZW4pIHtcblx0XHRcdHZhciBxdWV1ZSA9IFtdO1xuXHRcdFx0cXVldWUuZCA9IDA7XG5cdFx0XHRkZXAudGhlbigocikgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0V4cG9ydHNdID0gcjtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0sIChlKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXJyb3JdID0gZTtcblx0XHRcdFx0cmVzb2x2ZVF1ZXVlKHF1ZXVlKTtcblx0XHRcdH0pO1xuXHRcdFx0dmFyIG9iaiA9IHt9O1xuXG5cdFx0XHRvYmpbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChmbihxdWV1ZSkpO1xuXHRcdFx0cmV0dXJuIG9iajtcblx0XHR9XG5cdH1cblx0dmFyIHJldCA9IHt9O1xuXHRyZXRbd2VicGFja1F1ZXVlc10gPSB4ID0+IHt9O1xuXHRyZXRbd2VicGFja0V4cG9ydHNdID0gZGVwO1xuXHRyZXR1cm4gcmV0O1xufSkpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5hID0gKG1vZHVsZSwgYm9keSwgaGFzQXdhaXQpID0+IHtcblx0dmFyIHF1ZXVlO1xuXHRoYXNBd2FpdCAmJiAoKHF1ZXVlID0gW10pLmQgPSAtMSk7XG5cdHZhciBkZXBRdWV1ZXMgPSBuZXcgU2V0KCk7XG5cdHZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG5cdHZhciBjdXJyZW50RGVwcztcblx0dmFyIG91dGVyUmVzb2x2ZTtcblx0dmFyIHJlamVjdDtcblx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqKSA9PiB7XG5cdFx0cmVqZWN0ID0gcmVqO1xuXHRcdG91dGVyUmVzb2x2ZSA9IHJlc29sdmU7XG5cdH0pO1xuXHRwcm9taXNlW3dlYnBhY2tFeHBvcnRzXSA9IGV4cG9ydHM7XG5cdHByb21pc2Vbd2VicGFja1F1ZXVlc10gPSAoZm4pID0+IChxdWV1ZSAmJiBmbihxdWV1ZSksIGRlcFF1ZXVlcy5mb3JFYWNoKGZuKSwgcHJvbWlzZVtcImNhdGNoXCJdKHggPT4ge30pKTtcblx0bW9kdWxlLmV4cG9ydHMgPSBwcm9taXNlO1xuXHR2YXIgaGFuZGxlID0gKGRlcHMpID0+IHtcblx0XHRjdXJyZW50RGVwcyA9IHdyYXBEZXBzKGRlcHMpO1xuXHRcdHZhciBmbjtcblx0XHR2YXIgZ2V0UmVzdWx0ID0gKCkgPT4gKGN1cnJlbnREZXBzLm1hcCgoZCkgPT4ge1xuXG5cdFx0XHRpZihkW3dlYnBhY2tFcnJvcl0pIHRocm93IGRbd2VicGFja0Vycm9yXTtcblx0XHRcdHJldHVybiBkW3dlYnBhY2tFeHBvcnRzXTtcblx0XHR9KSlcblx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0XHRmbiA9ICgpID0+IChyZXNvbHZlKGdldFJlc3VsdCkpO1xuXHRcdFx0Zm4uciA9IDA7XG5cdFx0XHR2YXIgZm5RdWV1ZSA9IChxKSA9PiAocSAhPT0gcXVldWUgJiYgIWRlcFF1ZXVlcy5oYXMocSkgJiYgKGRlcFF1ZXVlcy5hZGQocSksIHEgJiYgIXEuZCAmJiAoZm4ucisrLCBxLnB1c2goZm4pKSkpO1xuXHRcdFx0Y3VycmVudERlcHMubWFwKChkZXApID0+IChkZXBbd2VicGFja1F1ZXVlc10oZm5RdWV1ZSkpKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZm4uciA/IHByb21pc2UgOiBnZXRSZXN1bHQoKTtcblx0fVxuXHR2YXIgZG9uZSA9IChlcnIpID0+ICgoZXJyID8gcmVqZWN0KHByb21pc2Vbd2VicGFja0Vycm9yXSA9IGVycikgOiBvdXRlclJlc29sdmUoZXhwb3J0cykpLCByZXNvbHZlUXVldWUocXVldWUpKVxuXHRib2R5KGhhbmRsZSwgZG9uZSk7XG5cdHF1ZXVlICYmIHF1ZXVlLmQgPCAwICYmIChxdWV1ZS5kID0gMCk7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18udiA9IChleHBvcnRzLCB3YXNtTW9kdWxlSWQsIHdhc21Nb2R1bGVIYXNoLCBpbXBvcnRzT2JqKSA9PiB7XG5cblx0dmFyIHJlcSA9IGZldGNoKF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyB3YXNtTW9kdWxlSGFzaCArIFwiLm1vZHVsZS53YXNtXCIpO1xuXHR2YXIgZmFsbGJhY2sgPSAoKSA9PiAocmVxXG5cdFx0LnRoZW4oKHgpID0+ICh4LmFycmF5QnVmZmVyKCkpKVxuXHRcdC50aGVuKChieXRlcykgPT4gKFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlKGJ5dGVzLCBpbXBvcnRzT2JqKSkpXG5cdFx0LnRoZW4oKHJlcykgPT4gKE9iamVjdC5hc3NpZ24oZXhwb3J0cywgcmVzLmluc3RhbmNlLmV4cG9ydHMpKSkpO1xuXHRyZXR1cm4gcmVxLnRoZW4oKHJlcykgPT4ge1xuXHRcdGlmICh0eXBlb2YgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcgPT09IFwiZnVuY3Rpb25cIikge1xuXG5cdFx0XHRyZXR1cm4gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcocmVzLCBpbXBvcnRzT2JqKVxuXHRcdFx0XHQudGhlbihcblx0XHRcdFx0XHQocmVzKSA9PiAoT2JqZWN0LmFzc2lnbihleHBvcnRzLCByZXMuaW5zdGFuY2UuZXhwb3J0cykpLFxuXHRcdFx0XHRcdChlKSA9PiB7XG5cdFx0XHRcdFx0XHRpZihyZXMuaGVhZGVycy5nZXQoXCJDb250ZW50LVR5cGVcIikgIT09IFwiYXBwbGljYXRpb24vd2FzbVwiKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUud2FybihcImBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZ2AgZmFpbGVkIGJlY2F1c2UgeW91ciBzZXJ2ZXIgZG9lcyBub3Qgc2VydmUgd2FzbSB3aXRoIGBhcHBsaWNhdGlvbi93YXNtYCBNSU1FIHR5cGUuIEZhbGxpbmcgYmFjayB0byBgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVgIHdoaWNoIGlzIHNsb3dlci4gT3JpZ2luYWwgZXJyb3I6XFxuXCIsIGUpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsbGJhY2soKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRocm93IGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsbGJhY2soKTtcblx0fSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvXmJsb2I6LywgXCJcIikucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnbW9kdWxlJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3d3dy9tYWluLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9