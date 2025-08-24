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

/***/ "./www/main.ts":
/*!*********************!*\
  !*** ./www/main.ts ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sequence_viewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sequence-viewer */ "./www/sequence-viewer.ts");
/* harmony import */ var _pkg_seqedit_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pkg/seqedit_wasm */ "./pkg/seqedit_wasm.js");
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
    let isTranslated = false;
    let currentFrame = 1;
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
        const searchResults = sequences.map(seq => (0,_pkg_seqedit_wasm__WEBPACK_IMPORTED_MODULE_1__.search)(seq, query));
        const convertedResults = searchResults.map(res => Array.from(res));
        viewer.setSearchResults(convertedResults, query.length);
    });
    document.getElementById('frame1-button').addEventListener('click', () => translateAll(1));
    document.getElementById('frame2-button').addEventListener('click', () => translateAll(2));
    document.getElementById('frame3-button').addEventListener('click', () => translateAll(3));
    // Load default sequences on page load
    loadSequences();
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
        this.sequenceCanvas.addEventListener('wheel', this.onWheel.bind(this));
        this.namesCanvas.addEventListener('wheel', this.onWheel.bind(this));
        this.namesCanvas.addEventListener('mousedown', this.onNamesCanvasMouseDown.bind(this));
        this.sequenceCanvas.addEventListener('mousedown', this.onMouseDown.bind(this));
        this.sequenceCanvas.addEventListener('mousemove', this.onMouseMove.bind(this));
        this.sequenceCanvas.addEventListener('mouseup', this.onMouseUp.bind(this));
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
    getSelectedSequenceIndices() {
        return Array.from(this.selectedSequenceNames);
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
    deleteSelectedRange() {
        if (!this.selectionStart || !this.selectionEnd) {
            return null;
        }
        const startRow = Math.min(this.selectionStart.seqIndex, this.selectionEnd.seqIndex);
        const endRow = Math.max(this.selectionStart.seqIndex, this.selectionEnd.seqIndex);
        const startCol = Math.min(this.selectionStart.pos, this.selectionEnd.pos);
        const endCol = Math.max(this.selectionStart.pos, this.selectionEnd.pos);
        const newCursorPos = { seqIndex: startRow, pos: startCol };
        for (let i = startRow; i <= endRow; i++) {
            const originalSequence = this.sequences[i];
            const newSequence = originalSequence.slice(0, startCol) + originalSequence.slice(endCol + 1);
            this.sequences[i] = newSequence;
        }
        this.maxSequenceLength = Math.max(...this.sequences.map(s => s.length));
        this.selectionStart = null; // Clear selection
        this.selectionEnd = null;
        this.requestRedraw();
        return newCursorPos;
    }
    deleteCharacter(isBackspace) {
        if (!this.selectionStart || !this.selectionEnd) {
            return;
        }
        const startRow = Math.min(this.selectionStart.seqIndex, this.selectionEnd.seqIndex);
        const endRow = Math.max(this.selectionStart.seqIndex, this.selectionEnd.seqIndex);
        let startCol = Math.min(this.selectionStart.pos, this.selectionEnd.pos);
        if (isBackspace) {
            if (startCol > 0) {
                startCol--;
            }
        }
        for (let i = startRow; i <= endRow; i++) {
            const originalSequence = this.sequences[i];
            const newSequence = originalSequence.slice(0, startCol) + originalSequence.slice(startCol + 1);
            this.sequences[i] = newSequence;
        }
        this.maxSequenceLength = Math.max(...this.sequences.map(s => s.length));
        this.selectionStart = { seqIndex: startRow, pos: startCol };
        this.selectionEnd = this.selectionStart;
        this.requestRedraw();
    }
    insertCharacter(char) {
        if (!this.selectionStart || !this.selectionEnd) {
            return;
        }
        const startRow = Math.min(this.selectionStart.seqIndex, this.selectionEnd.seqIndex);
        const endRow = Math.max(this.selectionStart.seqIndex, this.selectionEnd.seqIndex);
        const startCol = Math.min(this.selectionStart.pos, this.selectionEnd.pos);
        for (let i = startRow; i <= endRow; i++) {
            const originalSequence = this.sequences[i];
            const newSequence = originalSequence.slice(0, startCol) + char + originalSequence.slice(startCol);
            this.sequences[i] = newSequence;
        }
        this.maxSequenceLength = Math.max(...this.sequences.map(s => s.length));
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
        this.selectionStart = null; // Clear selection
        this.selectionEnd = null;
        this.requestRedraw();
    }
    onKeyDown(event) {
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
            this.insertCharacter('-');
        }
        else if (event.key === 'ArrowLeft') {
            event.preventDefault();
            if (event.ctrlKey) {
                const newPos = this.findPreviousWord(seqIndex, pos);
                this.selectionStart = { seqIndex, pos: newPos };
                this.selectionEnd = this.selectionStart;
            }
            else if (event.shiftKey) {
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
                // Extend selection right
                if (this.selectionEnd.pos < this.sequences[seqIndex].length) {
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
            if (j % 5 === 0) { // Draw label every 5 blocks
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQseURBQU07QUFDekQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdEO0FBQ0E7QUFDQSxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQyxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0YsRTs7Ozs7V0N4QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7O1VFbEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VxZWRpdC13YXNtLy4vcGtnL3NlcWVkaXRfd2FzbS5qcyIsIndlYnBhY2s6Ly9zZXFlZGl0LXdhc20vLi9wa2cvc2VxZWRpdF93YXNtX2JnLmpzIiwid2VicGFjazovL3NlcWVkaXQtd2FzbS8uL3d3dy9tYWluLnRzIiwid2VicGFjazovL3NlcWVkaXQtd2FzbS8uL3d3dy9zZXF1ZW5jZS12aWV3ZXIudHMiLCJ3ZWJwYWNrOi8vc2VxZWRpdC13YXNtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NlcWVkaXQtd2FzbS93ZWJwYWNrL3J1bnRpbWUvYXN5bmMgbW9kdWxlIiwid2VicGFjazovL3NlcWVkaXQtd2FzbS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2VxZWRpdC13YXNtL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vc2VxZWRpdC13YXNtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2VxZWRpdC13YXNtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2VxZWRpdC13YXNtL3dlYnBhY2svcnVudGltZS93YXNtIGxvYWRpbmciLCJ3ZWJwYWNrOi8vc2VxZWRpdC13YXNtL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3NlcWVkaXQtd2FzbS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3NlcWVkaXQtd2FzbS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vc2VxZWRpdC13YXNtL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB3YXNtIGZyb20gXCIuL3NlcWVkaXRfd2FzbV9iZy53YXNtXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9zZXFlZGl0X3dhc21fYmcuanNcIjtcbmltcG9ydCB7IF9fd2JnX3NldF93YXNtIH0gZnJvbSBcIi4vc2VxZWRpdF93YXNtX2JnLmpzXCI7XG5fX3diZ19zZXRfd2FzbSh3YXNtKTtcbndhc20uX193YmluZGdlbl9zdGFydCgpO1xuIiwibGV0IHdhc207XG5leHBvcnQgZnVuY3Rpb24gX193Ymdfc2V0X3dhc20odmFsKSB7XG4gICAgd2FzbSA9IHZhbDtcbn1cblxuXG5jb25zdCBsVGV4dERlY29kZXIgPSB0eXBlb2YgVGV4dERlY29kZXIgPT09ICd1bmRlZmluZWQnID8gKDAsIG1vZHVsZS5yZXF1aXJlKSgndXRpbCcpLlRleHREZWNvZGVyIDogVGV4dERlY29kZXI7XG5cbmxldCBjYWNoZWRUZXh0RGVjb2RlciA9IG5ldyBsVGV4dERlY29kZXIoJ3V0Zi04JywgeyBpZ25vcmVCT006IHRydWUsIGZhdGFsOiB0cnVlIH0pO1xuXG5jYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoKTtcblxubGV0IGNhY2hlZFVpbnQ4QXJyYXlNZW1vcnkwID0gbnVsbDtcblxuZnVuY3Rpb24gZ2V0VWludDhBcnJheU1lbW9yeTAoKSB7XG4gICAgaWYgKGNhY2hlZFVpbnQ4QXJyYXlNZW1vcnkwID09PSBudWxsIHx8IGNhY2hlZFVpbnQ4QXJyYXlNZW1vcnkwLmJ5dGVMZW5ndGggPT09IDApIHtcbiAgICAgICAgY2FjaGVkVWludDhBcnJheU1lbW9yeTAgPSBuZXcgVWludDhBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVkVWludDhBcnJheU1lbW9yeTA7XG59XG5cbmZ1bmN0aW9uIGdldFN0cmluZ0Zyb21XYXNtMChwdHIsIGxlbikge1xuICAgIHB0ciA9IHB0ciA+Pj4gMDtcbiAgICByZXR1cm4gY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKGdldFVpbnQ4QXJyYXlNZW1vcnkwKCkuc3ViYXJyYXkocHRyLCBwdHIgKyBsZW4pKTtcbn1cblxubGV0IFdBU01fVkVDVE9SX0xFTiA9IDA7XG5cbmNvbnN0IGxUZXh0RW5jb2RlciA9IHR5cGVvZiBUZXh0RW5jb2RlciA9PT0gJ3VuZGVmaW5lZCcgPyAoMCwgbW9kdWxlLnJlcXVpcmUpKCd1dGlsJykuVGV4dEVuY29kZXIgOiBUZXh0RW5jb2RlcjtcblxubGV0IGNhY2hlZFRleHRFbmNvZGVyID0gbmV3IGxUZXh0RW5jb2RlcigndXRmLTgnKTtcblxuY29uc3QgZW5jb2RlU3RyaW5nID0gKHR5cGVvZiBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGVJbnRvID09PSAnZnVuY3Rpb24nXG4gICAgPyBmdW5jdGlvbiAoYXJnLCB2aWV3KSB7XG4gICAgcmV0dXJuIGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8oYXJnLCB2aWV3KTtcbn1cbiAgICA6IGZ1bmN0aW9uIChhcmcsIHZpZXcpIHtcbiAgICBjb25zdCBidWYgPSBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGUoYXJnKTtcbiAgICB2aWV3LnNldChidWYpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlYWQ6IGFyZy5sZW5ndGgsXG4gICAgICAgIHdyaXR0ZW46IGJ1Zi5sZW5ndGhcbiAgICB9O1xufSk7XG5cbmZ1bmN0aW9uIHBhc3NTdHJpbmdUb1dhc20wKGFyZywgbWFsbG9jLCByZWFsbG9jKSB7XG5cbiAgICBpZiAocmVhbGxvYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGJ1ZiA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZShhcmcpO1xuICAgICAgICBjb25zdCBwdHIgPSBtYWxsb2MoYnVmLmxlbmd0aCwgMSkgPj4+IDA7XG4gICAgICAgIGdldFVpbnQ4QXJyYXlNZW1vcnkwKCkuc3ViYXJyYXkocHRyLCBwdHIgKyBidWYubGVuZ3RoKS5zZXQoYnVmKTtcbiAgICAgICAgV0FTTV9WRUNUT1JfTEVOID0gYnVmLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHB0cjtcbiAgICB9XG5cbiAgICBsZXQgbGVuID0gYXJnLmxlbmd0aDtcbiAgICBsZXQgcHRyID0gbWFsbG9jKGxlbiwgMSkgPj4+IDA7XG5cbiAgICBjb25zdCBtZW0gPSBnZXRVaW50OEFycmF5TWVtb3J5MCgpO1xuXG4gICAgbGV0IG9mZnNldCA9IDA7XG5cbiAgICBmb3IgKDsgb2Zmc2V0IDwgbGVuOyBvZmZzZXQrKykge1xuICAgICAgICBjb25zdCBjb2RlID0gYXJnLmNoYXJDb2RlQXQob2Zmc2V0KTtcbiAgICAgICAgaWYgKGNvZGUgPiAweDdGKSBicmVhaztcbiAgICAgICAgbWVtW3B0ciArIG9mZnNldF0gPSBjb2RlO1xuICAgIH1cblxuICAgIGlmIChvZmZzZXQgIT09IGxlbikge1xuICAgICAgICBpZiAob2Zmc2V0ICE9PSAwKSB7XG4gICAgICAgICAgICBhcmcgPSBhcmcuc2xpY2Uob2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgICBwdHIgPSByZWFsbG9jKHB0ciwgbGVuLCBsZW4gPSBvZmZzZXQgKyBhcmcubGVuZ3RoICogMywgMSkgPj4+IDA7XG4gICAgICAgIGNvbnN0IHZpZXcgPSBnZXRVaW50OEFycmF5TWVtb3J5MCgpLnN1YmFycmF5KHB0ciArIG9mZnNldCwgcHRyICsgbGVuKTtcbiAgICAgICAgY29uc3QgcmV0ID0gZW5jb2RlU3RyaW5nKGFyZywgdmlldyk7XG5cbiAgICAgICAgb2Zmc2V0ICs9IHJldC53cml0dGVuO1xuICAgICAgICBwdHIgPSByZWFsbG9jKHB0ciwgbGVuLCBvZmZzZXQsIDEpID4+PiAwO1xuICAgIH1cblxuICAgIFdBU01fVkVDVE9SX0xFTiA9IG9mZnNldDtcbiAgICByZXR1cm4gcHRyO1xufVxuXG5sZXQgY2FjaGVkVWludDMyQXJyYXlNZW1vcnkwID0gbnVsbDtcblxuZnVuY3Rpb24gZ2V0VWludDMyQXJyYXlNZW1vcnkwKCkge1xuICAgIGlmIChjYWNoZWRVaW50MzJBcnJheU1lbW9yeTAgPT09IG51bGwgfHwgY2FjaGVkVWludDMyQXJyYXlNZW1vcnkwLmJ5dGVMZW5ndGggPT09IDApIHtcbiAgICAgICAgY2FjaGVkVWludDMyQXJyYXlNZW1vcnkwID0gbmV3IFVpbnQzMkFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWRVaW50MzJBcnJheU1lbW9yeTA7XG59XG5cbmZ1bmN0aW9uIGdldEFycmF5VTMyRnJvbVdhc20wKHB0ciwgbGVuKSB7XG4gICAgcHRyID0gcHRyID4+PiAwO1xuICAgIHJldHVybiBnZXRVaW50MzJBcnJheU1lbW9yeTAoKS5zdWJhcnJheShwdHIgLyA0LCBwdHIgLyA0ICsgbGVuKTtcbn1cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlcXVlbmNlXG4gKiBAcGFyYW0ge3N0cmluZ30gcXVlcnlcbiAqIEByZXR1cm5zIHtVaW50MzJBcnJheX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaChzZXF1ZW5jZSwgcXVlcnkpIHtcbiAgICBjb25zdCBwdHIwID0gcGFzc1N0cmluZ1RvV2FzbTAoc2VxdWVuY2UsIHdhc20uX193YmluZGdlbl9tYWxsb2MsIHdhc20uX193YmluZGdlbl9yZWFsbG9jKTtcbiAgICBjb25zdCBsZW4wID0gV0FTTV9WRUNUT1JfTEVOO1xuICAgIGNvbnN0IHB0cjEgPSBwYXNzU3RyaW5nVG9XYXNtMChxdWVyeSwgd2FzbS5fX3diaW5kZ2VuX21hbGxvYywgd2FzbS5fX3diaW5kZ2VuX3JlYWxsb2MpO1xuICAgIGNvbnN0IGxlbjEgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgY29uc3QgcmV0ID0gd2FzbS5zZWFyY2gocHRyMCwgbGVuMCwgcHRyMSwgbGVuMSk7XG4gICAgdmFyIHYzID0gZ2V0QXJyYXlVMzJGcm9tV2FzbTAocmV0WzBdLCByZXRbMV0pLnNsaWNlKCk7XG4gICAgd2FzbS5fX3diaW5kZ2VuX2ZyZWUocmV0WzBdLCByZXRbMV0gKiA0LCA0KTtcbiAgICByZXR1cm4gdjM7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlcXVlbmNlXG4gKiBAcGFyYW0ge251bWJlcn0gZnJhbWVcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGUoc2VxdWVuY2UsIGZyYW1lKSB7XG4gICAgbGV0IGRlZmVycmVkMl8wO1xuICAgIGxldCBkZWZlcnJlZDJfMTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBwdHIwID0gcGFzc1N0cmluZ1RvV2FzbTAoc2VxdWVuY2UsIHdhc20uX193YmluZGdlbl9tYWxsb2MsIHdhc20uX193YmluZGdlbl9yZWFsbG9jKTtcbiAgICAgICAgY29uc3QgbGVuMCA9IFdBU01fVkVDVE9SX0xFTjtcbiAgICAgICAgY29uc3QgcmV0ID0gd2FzbS50cmFuc2xhdGUocHRyMCwgbGVuMCwgZnJhbWUpO1xuICAgICAgICBkZWZlcnJlZDJfMCA9IHJldFswXTtcbiAgICAgICAgZGVmZXJyZWQyXzEgPSByZXRbMV07XG4gICAgICAgIHJldHVybiBnZXRTdHJpbmdGcm9tV2FzbTAocmV0WzBdLCByZXRbMV0pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICAgIHdhc20uX193YmluZGdlbl9mcmVlKGRlZmVycmVkMl8wLCBkZWZlcnJlZDJfMSwgMSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0YWtlRnJvbUV4dGVybnJlZlRhYmxlMChpZHgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHdhc20uX193YmluZGdlbl9leHBvcnRfMC5nZXQoaWR4KTtcbiAgICB3YXNtLl9fZXh0ZXJucmVmX3RhYmxlX2RlYWxsb2MoaWR4KTtcbiAgICByZXR1cm4gdmFsdWU7XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhXG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VfZmFzdGEoZGF0YSkge1xuICAgIGNvbnN0IHB0cjAgPSBwYXNzU3RyaW5nVG9XYXNtMChkYXRhLCB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jLCB3YXNtLl9fd2JpbmRnZW5fcmVhbGxvYyk7XG4gICAgY29uc3QgbGVuMCA9IFdBU01fVkVDVE9SX0xFTjtcbiAgICBjb25zdCByZXQgPSB3YXNtLnBhcnNlX2Zhc3RhKHB0cjAsIGxlbjApO1xuICAgIGlmIChyZXRbMl0pIHtcbiAgICAgICAgdGhyb3cgdGFrZUZyb21FeHRlcm5yZWZUYWJsZTAocmV0WzFdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRha2VGcm9tRXh0ZXJucmVmVGFibGUwKHJldFswXSk7XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlcXVlbmNlXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmV2ZXJzZV9jb21wbGVtZW50KHNlcXVlbmNlKSB7XG4gICAgbGV0IGRlZmVycmVkMl8wO1xuICAgIGxldCBkZWZlcnJlZDJfMTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBwdHIwID0gcGFzc1N0cmluZ1RvV2FzbTAoc2VxdWVuY2UsIHdhc20uX193YmluZGdlbl9tYWxsb2MsIHdhc20uX193YmluZGdlbl9yZWFsbG9jKTtcbiAgICAgICAgY29uc3QgbGVuMCA9IFdBU01fVkVDVE9SX0xFTjtcbiAgICAgICAgY29uc3QgcmV0ID0gd2FzbS5yZXZlcnNlX2NvbXBsZW1lbnQocHRyMCwgbGVuMCk7XG4gICAgICAgIGRlZmVycmVkMl8wID0gcmV0WzBdO1xuICAgICAgICBkZWZlcnJlZDJfMSA9IHJldFsxXTtcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZ0Zyb21XYXNtMChyZXRbMF0sIHJldFsxXSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgd2FzbS5fX3diaW5kZ2VuX2ZyZWUoZGVmZXJyZWQyXzAsIGRlZmVycmVkMl8xLCAxKTtcbiAgICB9XG59XG5cbi8qKlxuICogQGVudW0gezAgfCAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDkgfCAxMCB8IDExIHwgMTIgfCAxMyB8IDE0IHwgMTUgfCAxNiB8IDE3IHwgMTggfCAxOSB8IDIwIHwgMjF9XG4gKi9cbmV4cG9ydCBjb25zdCBBbWlub0FjaWQgPSBPYmplY3QuZnJlZXplKHtcbiAgICBBbGE6IDAsIFwiMFwiOiBcIkFsYVwiLFxuICAgIEFyZzogMSwgXCIxXCI6IFwiQXJnXCIsXG4gICAgQXNuOiAyLCBcIjJcIjogXCJBc25cIixcbiAgICBBc3A6IDMsIFwiM1wiOiBcIkFzcFwiLFxuICAgIEN5czogNCwgXCI0XCI6IFwiQ3lzXCIsXG4gICAgR2xuOiA1LCBcIjVcIjogXCJHbG5cIixcbiAgICBHbHU6IDYsIFwiNlwiOiBcIkdsdVwiLFxuICAgIEdseTogNywgXCI3XCI6IFwiR2x5XCIsXG4gICAgSGlzOiA4LCBcIjhcIjogXCJIaXNcIixcbiAgICBJbGU6IDksIFwiOVwiOiBcIklsZVwiLFxuICAgIExldTogMTAsIFwiMTBcIjogXCJMZXVcIixcbiAgICBMeXM6IDExLCBcIjExXCI6IFwiTHlzXCIsXG4gICAgTWV0OiAxMiwgXCIxMlwiOiBcIk1ldFwiLFxuICAgIFBoZTogMTMsIFwiMTNcIjogXCJQaGVcIixcbiAgICBQcm86IDE0LCBcIjE0XCI6IFwiUHJvXCIsXG4gICAgU2VyOiAxNSwgXCIxNVwiOiBcIlNlclwiLFxuICAgIFRocjogMTYsIFwiMTZcIjogXCJUaHJcIixcbiAgICBUcnA6IDE3LCBcIjE3XCI6IFwiVHJwXCIsXG4gICAgVHlyOiAxOCwgXCIxOFwiOiBcIlR5clwiLFxuICAgIFZhbDogMTksIFwiMTlcIjogXCJWYWxcIixcbiAgICBTdG9wOiAyMCwgXCIyMFwiOiBcIlN0b3BcIixcbiAgICBVbmtub3duOiAyMSwgXCIyMVwiOiBcIlVua25vd25cIixcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbmV3XzQwNWUyMmYzOTA1NzZjZTIoKSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IE9iamVjdCgpO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbmV3Xzc4ZmViMTA4YjY0NzI3MTMoKSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IEFycmF5KCk7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19zZXRfMzc4MzcwMjNmM2Q3NDBlOChhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgYXJnMFthcmcxID4+PiAwXSA9IGFyZzI7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfc2V0XzNmZGEzYmFjMDczOTNkZTQoYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIGFyZzBbYXJnMV0gPSBhcmcyO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5faW5pdF9leHRlcm5yZWZfdGFibGUoKSB7XG4gICAgY29uc3QgdGFibGUgPSB3YXNtLl9fd2JpbmRnZW5fZXhwb3J0XzA7XG4gICAgY29uc3Qgb2Zmc2V0ID0gdGFibGUuZ3Jvdyg0KTtcbiAgICB0YWJsZS5zZXQoMCwgdW5kZWZpbmVkKTtcbiAgICB0YWJsZS5zZXQob2Zmc2V0ICsgMCwgdW5kZWZpbmVkKTtcbiAgICB0YWJsZS5zZXQob2Zmc2V0ICsgMSwgbnVsbCk7XG4gICAgdGFibGUuc2V0KG9mZnNldCArIDIsIHRydWUpO1xuICAgIHRhYmxlLnNldChvZmZzZXQgKyAzLCBmYWxzZSk7XG4gICAgO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fc3RyaW5nX25ldyhhcmcwLCBhcmcxKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl90aHJvdyhhcmcwLCBhcmcxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGdldFN0cmluZ0Zyb21XYXNtMChhcmcwLCBhcmcxKSk7XG59O1xuXG4iLCJpbXBvcnQgeyBTZXF1ZW5jZVZpZXdlciB9IGZyb20gJy4vc2VxdWVuY2Utdmlld2VyJztcbmltcG9ydCB7IHBhcnNlX2Zhc3RhLCByZXZlcnNlX2NvbXBsZW1lbnQsIHRyYW5zbGF0ZSwgc2VhcmNoIH0gZnJvbSAnLi4vcGtnL3NlcWVkaXRfd2FzbSc7XG5hc3luYyBmdW5jdGlvbiBtYWluKCkge1xuICAgIGNvbnN0IHNlcXVlbmNlQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlcXVlbmNlLWNhbnZhcycpO1xuICAgIGNvbnN0IG5hbWVzQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWVzLWNhbnZhcycpO1xuICAgIGNvbnN0IHJ1bGVyQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3J1bGVyLWNhbnZhcycpO1xuICAgIGNvbnN0IHZpZXdlciA9IG5ldyBTZXF1ZW5jZVZpZXdlcihzZXF1ZW5jZUNhbnZhcywgbmFtZXNDYW52YXMsIHJ1bGVyQ2FudmFzKTtcbiAgICBjb25zdCB1cmxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cmwtaW5wdXQnKTtcbiAgICBjb25zdCBsb2FkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWQtYnV0dG9uJyk7XG4gICAgY29uc3QgcmV2Q29tcEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXZjb21wLWJ1dHRvbicpO1xuICAgIGNvbnN0IHRyYW5zbGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2xhdGUtYnV0dG9uJyk7XG4gICAgY29uc3QgZnJhbWVCdXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZyYW1lLWJ1dHRvbnMnKTtcbiAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtaW5wdXQnKTtcbiAgICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJ1dHRvbicpO1xuICAgIGxldCBpc1RyYW5zbGF0ZWQgPSBmYWxzZTtcbiAgICBsZXQgY3VycmVudEZyYW1lID0gMTtcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkU2VxdWVuY2VzKCkge1xuICAgICAgICBjb25zdCB1cmwgPSB1cmxJbnB1dC52YWx1ZTtcbiAgICAgICAgaWYgKCF1cmwpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICAgICAgICBjb25zdCBmYXN0YSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHNlcXVlbmNlc0RhdGEgPSBwYXJzZV9mYXN0YShmYXN0YSk7XG4gICAgICAgICAgICBjb25zdCBuYW1lcyA9IHNlcXVlbmNlc0RhdGEubWFwKHMgPT4gcy5pZCk7XG4gICAgICAgICAgICBjb25zdCBzZXF1ZW5jZXMgPSBzZXF1ZW5jZXNEYXRhLm1hcChzID0+IHMucmVzaWR1ZXMpO1xuICAgICAgICAgICAgdmlld2VyLnNldFNlcXVlbmNlcyhuYW1lcywgc2VxdWVuY2VzKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgb3IgcGFyc2luZyBGQVNUQSBmaWxlOicsIGVycm9yKTtcbiAgICAgICAgICAgIGFsZXJ0KCdGYWlsZWQgdG8gbG9hZCBzZXF1ZW5jZXMuIFNlZSBjb25zb2xlIGZvciBkZXRhaWxzLicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxvYWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkU2VxdWVuY2VzKTtcbiAgICByZXZDb21wQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RlZEluZGljZXMgPSB2aWV3ZXIuZ2V0U2VsZWN0ZWRTZXF1ZW5jZUluZGljZXMoKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkSW5kaWNlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZWxlY3RlZEluZGljZXMuZm9yRWFjaChzZXFJbmRleCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTZXF1ZW5jZSA9IHZpZXdlci5nZXRTZXF1ZW5jZXMoKVtzZXFJbmRleF07XG4gICAgICAgICAgICAgICAgY29uc3QgcmV2Q29tcFNlcXVlbmNlID0gcmV2ZXJzZV9jb21wbGVtZW50KG9yaWdpbmFsU2VxdWVuY2UpO1xuICAgICAgICAgICAgICAgIHZpZXdlci51cGRhdGVTZXF1ZW5jZShzZXFJbmRleCwgcmV2Q29tcFNlcXVlbmNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmlld2VyLmNsZWFyU2VsZWN0ZWRTZXF1ZW5jZU5hbWVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIHNlbGVjdCBvbmUgb3IgbW9yZSBzZXF1ZW5jZXMgdG8gcmV2ZXJzZSBjb21wbGVtZW50LicpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlQWxsKGZyYW1lKSB7XG4gICAgICAgIGNvbnN0IHNlcXVlbmNlcyA9IHZpZXdlci5nZXRTZXF1ZW5jZXMoKTtcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlZFNlcXVlbmNlcyA9IHNlcXVlbmNlcy5tYXAoc2VxID0+IHRyYW5zbGF0ZShzZXEsIGZyYW1lKSk7XG4gICAgICAgIHZpZXdlci5zZXRUcmFuc2xhdGVkU2VxdWVuY2VzKHRyYW5zbGF0ZWRTZXF1ZW5jZXMsIGZyYW1lKTtcbiAgICAgICAgY3VycmVudEZyYW1lID0gZnJhbWU7XG4gICAgICAgIGlzVHJhbnNsYXRlZCA9IHRydWU7XG4gICAgICAgIHRyYW5zbGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdOdWNsZW90aWRlIE1vZGUnO1xuICAgICAgICBmcmFtZUJ1dHRvbnMuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgIH1cbiAgICB0cmFuc2xhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0cmFuc2xhdGUgYnV0dG9uIGNsaWNrZWQnLCBpc1RyYW5zbGF0ZWQpO1xuICAgICAgICBpZiAoaXNUcmFuc2xhdGVkKSB7XG4gICAgICAgICAgICB2aWV3ZXIuc2V0TnVjbGVvdGlkZU1vZGUoKTtcbiAgICAgICAgICAgIGlzVHJhbnNsYXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdHJhbnNsYXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1RyYW5zbGF0ZSc7XG4gICAgICAgICAgICBmcmFtZUJ1dHRvbnMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRyYW5zbGF0ZUFsbChjdXJyZW50RnJhbWUpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaElucHV0LnZhbHVlO1xuICAgICAgICBpZiAoIXF1ZXJ5KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBzZXF1ZW5jZXMgPSB2aWV3ZXIuZ2V0U2VxdWVuY2VzKCk7XG4gICAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdHMgPSBzZXF1ZW5jZXMubWFwKHNlcSA9PiBzZWFyY2goc2VxLCBxdWVyeSkpO1xuICAgICAgICBjb25zdCBjb252ZXJ0ZWRSZXN1bHRzID0gc2VhcmNoUmVzdWx0cy5tYXAocmVzID0+IEFycmF5LmZyb20ocmVzKSk7XG4gICAgICAgIHZpZXdlci5zZXRTZWFyY2hSZXN1bHRzKGNvbnZlcnRlZFJlc3VsdHMsIHF1ZXJ5Lmxlbmd0aCk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZyYW1lMS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRyYW5zbGF0ZUFsbCgxKSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZyYW1lMi1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRyYW5zbGF0ZUFsbCgyKSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZyYW1lMy1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRyYW5zbGF0ZUFsbCgzKSk7XG4gICAgLy8gTG9hZCBkZWZhdWx0IHNlcXVlbmNlcyBvbiBwYWdlIGxvYWRcbiAgICBsb2FkU2VxdWVuY2VzKCk7XG59XG5tYWluKCk7XG4iLCJleHBvcnQgY2xhc3MgU2VxdWVuY2VWaWV3ZXIge1xuICAgIHNlcXVlbmNlQ2FudmFzO1xuICAgIG5hbWVzQ2FudmFzO1xuICAgIHJ1bGVyQ2FudmFzO1xuICAgIHNlcUN0eDtcbiAgICBuYW1lc0N0eDtcbiAgICBydWxlckN0eDtcbiAgICBzZXF1ZW5jZXMgPSBbXTtcbiAgICBuYW1lcyA9IFtdO1xuICAgIHNlbGVjdGVkU2VxdWVuY2VOYW1lcyA9IG5ldyBTZXQoKTtcbiAgICBjb2xvcnMgPSB7XG4gICAgICAgICdBJzogeyBmb3JlZ3JvdW5kOiAnIzAxODAwMScsIGJhY2tncm91bmQ6ICcjNUFEQzVBJyB9LCAvLyBHcmVlbiBmb3JlZ3JvdW5kLCBsaWdodCBncmVlbiBiYWNrZ3JvdW5kXG4gICAgICAgICdDJzogeyBmb3JlZ3JvdW5kOiAnIzAxMDFGRicsIGJhY2tncm91bmQ6ICcjNjQ2NEZBJyB9LCAvLyBCbHVlIGZvcmVncm91bmQsIGxpZ2h0IGJsdWUgYmFja2dyb3VuZFxuICAgICAgICAnRyc6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnIzVBNUE1QScgfSwgLy8gQmxhY2sgZm9yZWdyb3VuZCwgZGFyayBncmF5IGJhY2tncm91bmRcbiAgICAgICAgJ1QnOiB7IGZvcmVncm91bmQ6ICcjRkYwMTAxJywgYmFja2dyb3VuZDogJyNGNTgyODInIH0sIC8vIFJlZCBmb3JlZ3JvdW5kLCBsaWdodCByZWQgYmFja2dyb3VuZFxuICAgICAgICAnVSc6IHsgZm9yZWdyb3VuZDogJyNGRjAxMDEnLCBiYWNrZ3JvdW5kOiAnI0Y1ODI4MicgfSwgLy8gU2FtZSBhcyBUXG4gICAgICAgICdSJzogeyBmb3JlZ3JvdW5kOiAnI0ZGMDBGRicsIGJhY2tncm91bmQ6ICcjRkZGRkZGJyB9LCAvLyBNYWdlbnRhIGZvcmVncm91bmQsIHdoaXRlIGJhY2tncm91bmRcbiAgICAgICAgJ1knOiB7IGZvcmVncm91bmQ6ICcjRkYwMEZGJywgYmFja2dyb3VuZDogJyNGRkZGRkYnIH0sXG4gICAgICAgICdTJzogeyBmb3JlZ3JvdW5kOiAnI0ZGMDBGRicsIGJhY2tncm91bmQ6ICcjRkZGRkZGJyB9LFxuICAgICAgICAnVyc6IHsgZm9yZWdyb3VuZDogJyNGRjAwRkYnLCBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicgfSxcbiAgICAgICAgJ0snOiB7IGZvcmVncm91bmQ6ICcjRkYwMEZGJywgYmFja2dyb3VuZDogJyNGRkZGRkYnIH0sXG4gICAgICAgICdNJzogeyBmb3JlZ3JvdW5kOiAnI0ZGMDBGRicsIGJhY2tncm91bmQ6ICcjRkZGRkZGJyB9LFxuICAgICAgICAnQic6IHsgZm9yZWdyb3VuZDogJyNGRjAwRkYnLCBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicgfSxcbiAgICAgICAgJ0QnOiB7IGZvcmVncm91bmQ6ICcjRkYwMEZGJywgYmFja2dyb3VuZDogJyNGRkZGRkYnIH0sXG4gICAgICAgICdIJzogeyBmb3JlZ3JvdW5kOiAnI0ZGMDBGRicsIGJhY2tncm91bmQ6ICcjRkZGRkZGJyB9LFxuICAgICAgICAnVic6IHsgZm9yZWdyb3VuZDogJyNGRjAwRkYnLCBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicgfSxcbiAgICAgICAgJ04nOiB7IGZvcmVncm91bmQ6ICcjRkYwMEZGJywgYmFja2dyb3VuZDogJyNGRkZGRkYnIH0sIC8vIE1hZ2VudGEgZm9yZWdyb3VuZCwgd2hpdGUgYmFja2dyb3VuZFxuICAgICAgICAnLSc6IHsgZm9yZWdyb3VuZDogJyM4MDgwODAnLCBiYWNrZ3JvdW5kOiAnI0ZBRkFGQScgfSwgLy8gRGFyayBncmF5IGZvcmVncm91bmQsIGxpZ2h0IGdyYXkgYmFja2dyb3VuZCAoR0FQKVxuICAgIH07XG4gICAgYW1pbm9BY2lkQ29sb3JzID0ge1xuICAgICAgICAnQSc6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnIzI3NkVCNycgfSxcbiAgICAgICAgJ0MnOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyNFNjgwODAnIH0sXG4gICAgICAgICdEJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjQ0M0RENDJyB9LFxuICAgICAgICAnRSc6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnIzk4NDA5NycgfSxcbiAgICAgICAgJ0YnOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyMxOTgwRTYnIH0sXG4gICAgICAgICdHJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjRTY5OTREJyB9LFxuICAgICAgICAnSCc6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnIzE5QjNCMycgfSxcbiAgICAgICAgJ0knOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyM0RTlCRjMnIH0sXG4gICAgICAgICdLJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjRTYzMzE5JyB9LFxuICAgICAgICAnTCc6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnIzc4QTZENScgfSxcbiAgICAgICAgJ00nOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyMwRjU0OUInIH0sXG4gICAgICAgICdOJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjMTlDQzE5JyB9LFxuICAgICAgICAnUCc6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnI0NDQ0MwMCcgfSxcbiAgICAgICAgJ1EnOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyM1Q0VENUMnIH0sXG4gICAgICAgICdSJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjRjY0NDJDJyB9LFxuICAgICAgICAnUyc6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnIzAyOTYwMicgfSxcbiAgICAgICAgJ1QnOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyM0NUM5NDUnIH0sXG4gICAgICAgICdWJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjMDQ3REY5JyB9LFxuICAgICAgICAnVyc6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnIzAzNTVBOScgfSxcbiAgICAgICAgJ1knOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyMxNEM2QzgnIH0sXG4gICAgICAgICcqJzogeyBmb3JlZ3JvdW5kOiAnIzAwRkZGRicsIGJhY2tncm91bmQ6ICcjNjk2OTY5JyB9LCAvLyBTVE9QIGNvZG9uIChkYXJrR3JheSlcbiAgICAgICAgJy0nOiB7IGZvcmVncm91bmQ6ICcjQTlBOUE5JywgYmFja2dyb3VuZDogJyNFNkU2RTYnIH0sIC8vIEdBUCAoZGFya0dyYXksIDIzMCwyMzAsMjMwKVxuICAgICAgICAnWCc6IHsgZm9yZWdyb3VuZDogJyMwMEZGRkYnLCBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicgfSwgLy8gVW5rbm93biAoY3lhbiwgd2hpdGUpXG4gICAgfTtcbiAgICBibG9ja1dpZHRoID0gMjA7XG4gICAgYmxvY2tIZWlnaHQgPSAyMDtcbiAgICBzY3JvbGxYID0gMDtcbiAgICBzY3JvbGxZID0gMDtcbiAgICBtYXhTZXF1ZW5jZUxlbmd0aCA9IDA7XG4gICAgaXNSZWRyYXdTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICBzZWxlY3Rpb25TdGFydCA9IG51bGw7XG4gICAgc2VsZWN0aW9uRW5kID0gbnVsbDtcbiAgICBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgaXNEcmFnZ2luZ0hTY3JvbGxiYXIgPSBmYWxzZTtcbiAgICBpc0RyYWdnaW5nVlNjcm9sbGJhciA9IGZhbHNlO1xuICAgIGxhc3RNb3VzZVggPSAwO1xuICAgIGxhc3RNb3VzZVkgPSAwO1xuICAgIHNjcm9sbGJhcldpZHRoID0gMTA7XG4gICAgc2Nyb2xsYmFyQ29sb3IgPSAnIzg4OCc7XG4gICAgc2Nyb2xsYmFyVHJhY2tDb2xvciA9ICcjZjFmMWYxJztcbiAgICBkaXNwbGF5TW9kZSA9ICdudWNsZW90aWRlJztcbiAgICB0cmFuc2xhdGVkU2VxdWVuY2VzID0gW107XG4gICAgY3VycmVudFJlYWRpbmdGcmFtZSA9IDE7XG4gICAgc2VhcmNoUmVzdWx0cyA9IFtdO1xuICAgIHNlYXJjaFF1ZXJ5TGVuZ3RoID0gMDtcbiAgICBjb25zdHJ1Y3RvcihzZXF1ZW5jZUNhbnZhcywgbmFtZXNDYW52YXMsIHJ1bGVyQ2FudmFzKSB7XG4gICAgICAgIHRoaXMuc2VxdWVuY2VDYW52YXMgPSBzZXF1ZW5jZUNhbnZhcztcbiAgICAgICAgdGhpcy5uYW1lc0NhbnZhcyA9IG5hbWVzQ2FudmFzO1xuICAgICAgICB0aGlzLnJ1bGVyQ2FudmFzID0gcnVsZXJDYW52YXM7XG4gICAgICAgIHRoaXMuc2VxQ3R4ID0gc2VxdWVuY2VDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5uYW1lc0N0eCA9IG5hbWVzQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMucnVsZXJDdHggPSBydWxlckNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLnNlcXVlbmNlQ2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5vbldoZWVsLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLm5hbWVzQ2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5vbldoZWVsLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLm5hbWVzQ2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25OYW1lc0NhbnZhc01vdXNlRG93bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5zZXF1ZW5jZUNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnNlcXVlbmNlQ2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuc2VxdWVuY2VDYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnJlc2l6ZUNhbnZhcygpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemVDYW52YXMuYmluZCh0aGlzKSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24uYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHNhdmVTdGF0ZSgpIHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgICAgICBuYW1lczogdGhpcy5uYW1lcyxcbiAgICAgICAgICAgIHNlcXVlbmNlczogdGhpcy5zZXF1ZW5jZXNcbiAgICAgICAgfTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlcWVkaXQtc3RhdGUnLCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xuICAgIH1cbiAgICBzZXRTZXF1ZW5jZXMobmFtZXMsIHNlcXVlbmNlcykge1xuICAgICAgICB0aGlzLm5hbWVzID0gbmFtZXM7XG4gICAgICAgIHRoaXMuc2VxdWVuY2VzID0gc2VxdWVuY2VzO1xuICAgICAgICB0aGlzLm1heFNlcXVlbmNlTGVuZ3RoID0gTWF0aC5tYXgoLi4uc2VxdWVuY2VzLm1hcChzID0+IHMubGVuZ3RoKSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsWCA9IDA7XG4gICAgICAgIHRoaXMuc2Nyb2xsWSA9IDA7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IG51bGw7XG4gICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgIH1cbiAgICBnZXRTZWxlY3RlZFNlcXVlbmNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uU3RhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZXFJbmRleDogdGhpcy5zZWxlY3Rpb25TdGFydC5zZXFJbmRleCxcbiAgICAgICAgICAgIHNlcXVlbmNlOiB0aGlzLnNlcXVlbmNlc1t0aGlzLnNlbGVjdGlvblN0YXJ0LnNlcUluZGV4XVxuICAgICAgICB9O1xuICAgIH1cbiAgICB1cGRhdGVTZXF1ZW5jZShzZXFJbmRleCwgbmV3U2VxdWVuY2UpIHtcbiAgICAgICAgdGhpcy5zZXF1ZW5jZXNbc2VxSW5kZXhdID0gbmV3U2VxdWVuY2U7XG4gICAgICAgIHRoaXMubWF4U2VxdWVuY2VMZW5ndGggPSBNYXRoLm1heCguLi50aGlzLnNlcXVlbmNlcy5tYXAocyA9PiBzLmxlbmd0aCkpO1xuICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICB9XG4gICAgZ2V0U2VxdWVuY2VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXF1ZW5jZXM7XG4gICAgfVxuICAgIGdldFNlbGVjdGVkU2VxdWVuY2VJbmRpY2VzKCkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnNlbGVjdGVkU2VxdWVuY2VOYW1lcyk7XG4gICAgfVxuICAgIGNsZWFyU2VsZWN0ZWRTZXF1ZW5jZU5hbWVzKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkU2VxdWVuY2VOYW1lcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICB9XG4gICAgc2V0VHJhbnNsYXRlZFNlcXVlbmNlcyhzZXF1ZW5jZXMsIGZyYW1lKSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlZFNlcXVlbmNlcyA9IHNlcXVlbmNlcztcbiAgICAgICAgdGhpcy5jdXJyZW50UmVhZGluZ0ZyYW1lID0gZnJhbWU7XG4gICAgICAgIHRoaXMuZGlzcGxheU1vZGUgPSAnYW1pbm9hY2lkJztcbiAgICAgICAgdGhpcy5zY3JvbGxYID0gMDtcbiAgICAgICAgdGhpcy5zY3JvbGxZID0gMDtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IG51bGw7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgfVxuICAgIHNldE51Y2xlb3RpZGVNb2RlKCkge1xuICAgICAgICB0aGlzLmRpc3BsYXlNb2RlID0gJ251Y2xlb3RpZGUnO1xuICAgICAgICB0aGlzLnNjcm9sbFggPSAwO1xuICAgICAgICB0aGlzLnNjcm9sbFkgPSAwO1xuICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSBudWxsO1xuICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICB9XG4gICAgc2V0U2VhcmNoUmVzdWx0cyhyZXN1bHRzLCBxdWVyeUxlbmd0aCkge1xuICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSByZXN1bHRzO1xuICAgICAgICB0aGlzLnNlYXJjaFF1ZXJ5TGVuZ3RoID0gcXVlcnlMZW5ndGg7XG4gICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgIH1cbiAgICByZXNpemVDYW52YXMoKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuc2VxdWVuY2VDYW52YXMucGFyZW50RWxlbWVudDtcbiAgICAgICAgdGhpcy5zZXF1ZW5jZUNhbnZhcy53aWR0aCA9IHBhcmVudC5jbGllbnRXaWR0aDtcbiAgICAgICAgdGhpcy5zZXF1ZW5jZUNhbnZhcy5oZWlnaHQgPSBwYXJlbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICBjb25zdCBuYW1lc1BhcmVudCA9IHRoaXMubmFtZXNDYW52YXMucGFyZW50RWxlbWVudDtcbiAgICAgICAgdGhpcy5uYW1lc0NhbnZhcy53aWR0aCA9IG5hbWVzUGFyZW50LmNsaWVudFdpZHRoO1xuICAgICAgICB0aGlzLm5hbWVzQ2FudmFzLmhlaWdodCA9IG5hbWVzUGFyZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgY29uc3QgcnVsZXJQYXJlbnQgPSB0aGlzLnJ1bGVyQ2FudmFzLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHRoaXMucnVsZXJDYW52YXMud2lkdGggPSBydWxlclBhcmVudC5jbGllbnRXaWR0aDtcbiAgICAgICAgdGhpcy5ydWxlckNhbnZhcy5oZWlnaHQgPSAyMDtcbiAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgfVxuICAgIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLnNlcXVlbmNlQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICAgICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcbiAgICAgICAgLy8gQ2hlY2sgZm9yIGhvcml6b250YWwgc2Nyb2xsYmFyIGNsaWNrXG4gICAgICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IHRoaXMubWF4U2VxdWVuY2VMZW5ndGggKiB0aGlzLmJsb2NrV2lkdGg7XG4gICAgICAgIGNvbnN0IGNhbnZhc1dpZHRoID0gdGhpcy5zZXF1ZW5jZUNhbnZhcy53aWR0aDtcbiAgICAgICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gdGhpcy5zZXF1ZW5jZUNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIGlmIChjb250ZW50V2lkdGggPiBjYW52YXNXaWR0aCAmJiB5ID49IGNhbnZhc0hlaWdodCAtIHRoaXMuc2Nyb2xsYmFyV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuaXNEcmFnZ2luZ0hTY3JvbGxiYXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sYXN0TW91c2VYID0geDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBmb3IgdmVydGljYWwgc2Nyb2xsYmFyIGNsaWNrXG4gICAgICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSB0aGlzLnNlcXVlbmNlcy5sZW5ndGggKiB0aGlzLmJsb2NrSGVpZ2h0O1xuICAgICAgICBpZiAoY29udGVudEhlaWdodCA+IGNhbnZhc0hlaWdodCAmJiB4ID49IGNhbnZhc1dpZHRoIC0gdGhpcy5zY3JvbGxiYXJXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy5pc0RyYWdnaW5nVlNjcm9sbGJhciA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxhc3RNb3VzZVkgPSB5O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgICAgIGNvbnN0IHNlcUluZGV4ID0gTWF0aC5mbG9vcigoeSArIHRoaXMuc2Nyb2xsWSkgLyB0aGlzLmJsb2NrSGVpZ2h0KTtcbiAgICAgICAgY29uc3QgcG9zID0gTWF0aC5mbG9vcigoeCArIHRoaXMuc2Nyb2xsWCkgLyB0aGlzLmJsb2NrV2lkdGgpO1xuICAgICAgICBpZiAoc2VxSW5kZXggPj0gMCAmJiBzZXFJbmRleCA8IHRoaXMuc2VxdWVuY2VzLmxlbmd0aCAmJiBwb3MgPj0gMCAmJiBwb3MgPCB0aGlzLnNlcXVlbmNlc1tzZXFJbmRleF0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0geyBzZXFJbmRleCwgcG9zIH07XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IHsgc2VxSW5kZXgsIHBvcyB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgfVxuICAgIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLnNlcXVlbmNlQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICAgICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcbiAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2luZ0hTY3JvbGxiYXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IHRoaXMubWF4U2VxdWVuY2VMZW5ndGggKiB0aGlzLmJsb2NrV2lkdGg7XG4gICAgICAgICAgICBjb25zdCBjYW52YXNXaWR0aCA9IHRoaXMuc2VxdWVuY2VDYW52YXMud2lkdGg7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxiYXJUcmFja1dpZHRoID0gY2FudmFzV2lkdGggLSB0aGlzLnNjcm9sbGJhcldpZHRoO1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYmFyVGh1bWJXaWR0aCA9IE1hdGgubWF4KDUwLCBzY3JvbGxiYXJUcmFja1dpZHRoICogKGNhbnZhc1dpZHRoIC8gY29udGVudFdpZHRoKSk7XG4gICAgICAgICAgICBjb25zdCBkZWx0YVggPSB4IC0gdGhpcy5sYXN0TW91c2VYO1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsUmF0aW8gPSAoY29udGVudFdpZHRoIC0gY2FudmFzV2lkdGgpIC8gKHNjcm9sbGJhclRyYWNrV2lkdGggLSBzY3JvbGxiYXJUaHVtYldpZHRoKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsWCArPSBkZWx0YVggKiBzY3JvbGxSYXRpbztcbiAgICAgICAgICAgIHRoaXMubGFzdE1vdXNlWCA9IHg7XG4gICAgICAgICAgICBjb25zdCBtYXhTY3JvbGxYID0gY29udGVudFdpZHRoIC0gY2FudmFzV2lkdGg7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFggPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLnNjcm9sbFgsIG1heFNjcm9sbFgpKTtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzRHJhZ2dpbmdWU2Nyb2xsYmFyKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gdGhpcy5zZXF1ZW5jZXMubGVuZ3RoICogdGhpcy5ibG9ja0hlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9IHRoaXMuc2VxdWVuY2VDYW52YXMuaGVpZ2h0O1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYmFyVHJhY2tIZWlnaHQgPSBjYW52YXNIZWlnaHQgLSB0aGlzLnNjcm9sbGJhcldpZHRoO1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYmFyVGh1bWJIZWlnaHQgPSBNYXRoLm1heCg1MCwgc2Nyb2xsYmFyVHJhY2tIZWlnaHQgKiAoY2FudmFzSGVpZ2h0IC8gY29udGVudEhlaWdodCkpO1xuICAgICAgICAgICAgY29uc3QgZGVsdGFZID0geSAtIHRoaXMubGFzdE1vdXNlWTtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFJhdGlvID0gKGNvbnRlbnRIZWlnaHQgLSBjYW52YXNIZWlnaHQpIC8gKHNjcm9sbGJhclRyYWNrSGVpZ2h0IC0gc2Nyb2xsYmFyVGh1bWJIZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxZICs9IGRlbHRhWSAqIHNjcm9sbFJhdGlvO1xuICAgICAgICAgICAgdGhpcy5sYXN0TW91c2VZID0geTtcbiAgICAgICAgICAgIGNvbnN0IG1heFNjcm9sbFkgPSBjb250ZW50SGVpZ2h0IC0gY2FudmFzSGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxZID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5zY3JvbGxZLCBtYXhTY3JvbGxZKSk7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXNEcmFnZ2luZyB8fCAhdGhpcy5zZWxlY3Rpb25TdGFydClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3Qgc2VxSW5kZXggPSBNYXRoLmZsb29yKCh5ICsgdGhpcy5zY3JvbGxZKSAvIHRoaXMuYmxvY2tIZWlnaHQpO1xuICAgICAgICBjb25zdCBwb3MgPSBNYXRoLmZsb29yKCh4ICsgdGhpcy5zY3JvbGxYKSAvIHRoaXMuYmxvY2tXaWR0aCk7XG4gICAgICAgIC8vIEFsbG93IHNlbGVjdGlvbiBhY3Jvc3MgbXVsdGlwbGUgc2VxdWVuY2VzXG4gICAgICAgIGlmIChzZXFJbmRleCA+PSAwICYmIHNlcUluZGV4IDwgdGhpcy5zZXF1ZW5jZXMubGVuZ3RoICYmIHBvcyA+PSAwICYmIHBvcyA8PSB0aGlzLnNlcXVlbmNlc1tzZXFJbmRleF0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IHsgc2VxSW5kZXgsIHBvcyB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgIH1cbiAgICBvbk1vdXNlVXAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZ0hTY3JvbGxiYXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nVlNjcm9sbGJhciA9IGZhbHNlO1xuICAgIH1cbiAgICBnZXRTZWxlY3RlZFRleHQoKSB7XG4gICAgICAgIGlmICghdGhpcy5zZWxlY3Rpb25TdGFydCB8fCAhdGhpcy5zZWxlY3Rpb25FbmQpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGFydFJvdyA9IE1hdGgubWluKHRoaXMuc2VsZWN0aW9uU3RhcnQuc2VxSW5kZXgsIHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4KTtcbiAgICAgICAgY29uc3QgZW5kUm93ID0gTWF0aC5tYXgodGhpcy5zZWxlY3Rpb25TdGFydC5zZXFJbmRleCwgdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXgpO1xuICAgICAgICBjb25zdCBzdGFydENvbCA9IE1hdGgubWluKHRoaXMuc2VsZWN0aW9uU3RhcnQucG9zLCB0aGlzLnNlbGVjdGlvbkVuZC5wb3MpO1xuICAgICAgICBjb25zdCBlbmRDb2wgPSBNYXRoLm1heCh0aGlzLnNlbGVjdGlvblN0YXJ0LnBvcywgdGhpcy5zZWxlY3Rpb25FbmQucG9zKTtcbiAgICAgICAgbGV0IHNlbGVjdGVkVGV4dCA9ICcnO1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRSb3c7IGkgPD0gZW5kUm93OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNlcXVlbmNlID0gdGhpcy5zZXF1ZW5jZXNbaV07XG4gICAgICAgICAgICBzZWxlY3RlZFRleHQgKz0gc2VxdWVuY2Uuc3Vic3RyaW5nKHN0YXJ0Q29sLCBlbmRDb2wgKyAxKTsgLy8gKzEgYmVjYXVzZSBzdWJzdHJpbmcgZW5kIGlzIGV4Y2x1c2l2ZVxuICAgICAgICAgICAgaWYgKGkgPCBlbmRSb3cpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRleHQgKz0gJ1xcbic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkVGV4dDtcbiAgICB9XG4gICAgZGVsZXRlU2VsZWN0ZWRSYW5nZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvblN0YXJ0IHx8ICF0aGlzLnNlbGVjdGlvbkVuZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnRSb3cgPSBNYXRoLm1pbih0aGlzLnNlbGVjdGlvblN0YXJ0LnNlcUluZGV4LCB0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCk7XG4gICAgICAgIGNvbnN0IGVuZFJvdyA9IE1hdGgubWF4KHRoaXMuc2VsZWN0aW9uU3RhcnQuc2VxSW5kZXgsIHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4KTtcbiAgICAgICAgY29uc3Qgc3RhcnRDb2wgPSBNYXRoLm1pbih0aGlzLnNlbGVjdGlvblN0YXJ0LnBvcywgdGhpcy5zZWxlY3Rpb25FbmQucG9zKTtcbiAgICAgICAgY29uc3QgZW5kQ29sID0gTWF0aC5tYXgodGhpcy5zZWxlY3Rpb25TdGFydC5wb3MsIHRoaXMuc2VsZWN0aW9uRW5kLnBvcyk7XG4gICAgICAgIGNvbnN0IG5ld0N1cnNvclBvcyA9IHsgc2VxSW5kZXg6IHN0YXJ0Um93LCBwb3M6IHN0YXJ0Q29sIH07XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydFJvdzsgaSA8PSBlbmRSb3c7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTZXF1ZW5jZSA9IHRoaXMuc2VxdWVuY2VzW2ldO1xuICAgICAgICAgICAgY29uc3QgbmV3U2VxdWVuY2UgPSBvcmlnaW5hbFNlcXVlbmNlLnNsaWNlKDAsIHN0YXJ0Q29sKSArIG9yaWdpbmFsU2VxdWVuY2Uuc2xpY2UoZW5kQ29sICsgMSk7XG4gICAgICAgICAgICB0aGlzLnNlcXVlbmNlc1tpXSA9IG5ld1NlcXVlbmNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWF4U2VxdWVuY2VMZW5ndGggPSBNYXRoLm1heCguLi50aGlzLnNlcXVlbmNlcy5tYXAocyA9PiBzLmxlbmd0aCkpO1xuICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0gbnVsbDsgLy8gQ2xlYXIgc2VsZWN0aW9uXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgICAgIHJldHVybiBuZXdDdXJzb3JQb3M7XG4gICAgfVxuICAgIGRlbGV0ZUNoYXJhY3Rlcihpc0JhY2tzcGFjZSkge1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uU3RhcnQgfHwgIXRoaXMuc2VsZWN0aW9uRW5kKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnRSb3cgPSBNYXRoLm1pbih0aGlzLnNlbGVjdGlvblN0YXJ0LnNlcUluZGV4LCB0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCk7XG4gICAgICAgIGNvbnN0IGVuZFJvdyA9IE1hdGgubWF4KHRoaXMuc2VsZWN0aW9uU3RhcnQuc2VxSW5kZXgsIHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4KTtcbiAgICAgICAgbGV0IHN0YXJ0Q29sID0gTWF0aC5taW4odGhpcy5zZWxlY3Rpb25TdGFydC5wb3MsIHRoaXMuc2VsZWN0aW9uRW5kLnBvcyk7XG4gICAgICAgIGlmIChpc0JhY2tzcGFjZSkge1xuICAgICAgICAgICAgaWYgKHN0YXJ0Q29sID4gMCkge1xuICAgICAgICAgICAgICAgIHN0YXJ0Q29sLS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0Um93OyBpIDw9IGVuZFJvdzsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFNlcXVlbmNlID0gdGhpcy5zZXF1ZW5jZXNbaV07XG4gICAgICAgICAgICBjb25zdCBuZXdTZXF1ZW5jZSA9IG9yaWdpbmFsU2VxdWVuY2Uuc2xpY2UoMCwgc3RhcnRDb2wpICsgb3JpZ2luYWxTZXF1ZW5jZS5zbGljZShzdGFydENvbCArIDEpO1xuICAgICAgICAgICAgdGhpcy5zZXF1ZW5jZXNbaV0gPSBuZXdTZXF1ZW5jZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1heFNlcXVlbmNlTGVuZ3RoID0gTWF0aC5tYXgoLi4udGhpcy5zZXF1ZW5jZXMubWFwKHMgPT4gcy5sZW5ndGgpKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHsgc2VxSW5kZXg6IHN0YXJ0Um93LCBwb3M6IHN0YXJ0Q29sIH07XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gdGhpcy5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgfVxuICAgIGluc2VydENoYXJhY3RlcihjaGFyKSB7XG4gICAgICAgIGlmICghdGhpcy5zZWxlY3Rpb25TdGFydCB8fCAhdGhpcy5zZWxlY3Rpb25FbmQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGFydFJvdyA9IE1hdGgubWluKHRoaXMuc2VsZWN0aW9uU3RhcnQuc2VxSW5kZXgsIHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4KTtcbiAgICAgICAgY29uc3QgZW5kUm93ID0gTWF0aC5tYXgodGhpcy5zZWxlY3Rpb25TdGFydC5zZXFJbmRleCwgdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXgpO1xuICAgICAgICBjb25zdCBzdGFydENvbCA9IE1hdGgubWluKHRoaXMuc2VsZWN0aW9uU3RhcnQucG9zLCB0aGlzLnNlbGVjdGlvbkVuZC5wb3MpO1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRSb3c7IGkgPD0gZW5kUm93OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU2VxdWVuY2UgPSB0aGlzLnNlcXVlbmNlc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1NlcXVlbmNlID0gb3JpZ2luYWxTZXF1ZW5jZS5zbGljZSgwLCBzdGFydENvbCkgKyBjaGFyICsgb3JpZ2luYWxTZXF1ZW5jZS5zbGljZShzdGFydENvbCk7XG4gICAgICAgICAgICB0aGlzLnNlcXVlbmNlc1tpXSA9IG5ld1NlcXVlbmNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWF4U2VxdWVuY2VMZW5ndGggPSBNYXRoLm1heCguLi50aGlzLnNlcXVlbmNlcy5tYXAocyA9PiBzLmxlbmd0aCkpO1xuICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0geyBzZXFJbmRleDogc3RhcnRSb3csIHBvczogc3RhcnRDb2wgKyAxIH07XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gdGhpcy5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgfVxuICAgIGZpbGxTZWxlY3Rpb24oY2hhcikge1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uU3RhcnQgfHwgIXRoaXMuc2VsZWN0aW9uRW5kKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnRSb3cgPSBNYXRoLm1pbih0aGlzLnNlbGVjdGlvblN0YXJ0LnNlcUluZGV4LCB0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCk7XG4gICAgICAgIGNvbnN0IGVuZFJvdyA9IE1hdGgubWF4KHRoaXMuc2VsZWN0aW9uU3RhcnQuc2VxSW5kZXgsIHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4KTtcbiAgICAgICAgY29uc3Qgc3RhcnRDb2wgPSBNYXRoLm1pbih0aGlzLnNlbGVjdGlvblN0YXJ0LnBvcywgdGhpcy5zZWxlY3Rpb25FbmQucG9zKTtcbiAgICAgICAgY29uc3QgZW5kQ29sID0gTWF0aC5tYXgodGhpcy5zZWxlY3Rpb25TdGFydC5wb3MsIHRoaXMuc2VsZWN0aW9uRW5kLnBvcyk7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydFJvdzsgaSA8PSBlbmRSb3c7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTZXF1ZW5jZSA9IHRoaXMuc2VxdWVuY2VzW2ldO1xuICAgICAgICAgICAgbGV0IG5ld1NlcXVlbmNlQXJyYXkgPSBvcmlnaW5hbFNlcXVlbmNlLnNwbGl0KCcnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBzdGFydENvbDsgaiA8PSBlbmRDb2w7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChqIDwgbmV3U2VxdWVuY2VBcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3U2VxdWVuY2VBcnJheVtqXSA9IGNoYXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXF1ZW5jZXNbaV0gPSBuZXdTZXF1ZW5jZUFycmF5LmpvaW4oJycpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWF4U2VxdWVuY2VMZW5ndGggPSBNYXRoLm1heCguLi50aGlzLnNlcXVlbmNlcy5tYXAocyA9PiBzLmxlbmd0aCkpO1xuICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0gbnVsbDsgLy8gQ2xlYXIgc2VsZWN0aW9uXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgfVxuICAgIG9uS2V5RG93bihldmVudCkge1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uU3RhcnQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2MnKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZFRleHQgPSB0aGlzLmdldFNlbGVjdGVkVGV4dCgpO1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZFRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoc2VsZWN0ZWRUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpID09PSAndicpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQucmVhZFRleHQoKS50aGVuKHRleHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGV4dCAmJiB0aGlzLnNlbGVjdGlvblN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHNlcUluZGV4IH0gPSB0aGlzLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBNYXRoLm1pbih0aGlzLnNlbGVjdGlvblN0YXJ0LnBvcywgdGhpcy5zZWxlY3Rpb25FbmQucG9zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZCA9IE1hdGgubWF4KHRoaXMuc2VsZWN0aW9uU3RhcnQucG9zLCB0aGlzLnNlbGVjdGlvbkVuZC5wb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTZXF1ZW5jZSA9IHRoaXMuc2VxdWVuY2VzW3NlcUluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NlcXVlbmNlID0gb3JpZ2luYWxTZXF1ZW5jZS5zbGljZSgwLCBzdGFydCkgKyB0ZXh0ICsgb3JpZ2luYWxTZXF1ZW5jZS5zbGljZShlbmQgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VxdWVuY2VzW3NlcUluZGV4XSA9IG5ld1NlcXVlbmNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHsgc2VxSW5kZXgsIHBvczogc3RhcnQgKyB0ZXh0Lmxlbmd0aCB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSB0aGlzLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXhTZXF1ZW5jZUxlbmd0aCA9IE1hdGgubWF4KC4uLnRoaXMuc2VxdWVuY2VzLm1hcChzID0+IHMubGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHNlcUluZGV4LCBwb3MgfSA9IHRoaXMuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgIGNvbnN0IGl1cGFjQ2hhcmFjdGVycyA9ICdBQ0dUVVJZU1dLTUJESFZOLSc7XG4gICAgICAgIGlmIChpdXBhY0NoYXJhY3RlcnMuaW5jbHVkZXMoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uU3RhcnQgJiYgdGhpcy5zZWxlY3Rpb25FbmQgJiYgKHRoaXMuc2VsZWN0aW9uU3RhcnQucG9zICE9PSB0aGlzLnNlbGVjdGlvbkVuZC5wb3MgfHwgdGhpcy5zZWxlY3Rpb25TdGFydC5zZXFJbmRleCAhPT0gdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXgpKSB7IC8vIENoZWNrIGlmIGFueSBzZWxlY3Rpb24gZXhpc3RzXG4gICAgICAgICAgICAgICAgdGhpcy5maWxsU2VsZWN0aW9uKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0Q2hhcmFjdGVyKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChldmVudC5rZXkgPT09ICcgJykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0Q2hhcmFjdGVyKCctJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dMZWZ0Jykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChldmVudC5jdHJsS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UG9zID0gdGhpcy5maW5kUHJldmlvdXNXb3JkKHNlcUluZGV4LCBwb3MpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSB7IHNlcUluZGV4LCBwb3M6IG5ld1BvcyB9O1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gdGhpcy5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgLy8gRXh0ZW5kIHNlbGVjdGlvbiBsZWZ0XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uRW5kLnBvcyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQucG9zLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleC0tO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZC5wb3MgPSB0aGlzLnNlcXVlbmNlc1t0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleF0ubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1vdmUgY3Vyc29yIGxlZnQsIGNsZWFyIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgIGlmIChwb3MgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSB7IHNlcUluZGV4LCBwb3M6IHBvcyAtIDEgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc2VxSW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSB7IHNlcUluZGV4OiBzZXFJbmRleCAtIDEsIHBvczogdGhpcy5zZXF1ZW5jZXNbc2VxSW5kZXggLSAxXS5sZW5ndGggfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSB0aGlzLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dSaWdodCcpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1BvcyA9IHRoaXMuZmluZE5leHRXb3JkKHNlcUluZGV4LCBwb3MpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSB7IHNlcUluZGV4LCBwb3M6IG5ld1BvcyB9O1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gdGhpcy5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgLy8gRXh0ZW5kIHNlbGVjdGlvbiByaWdodFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbkVuZC5wb3MgPCB0aGlzLnNlcXVlbmNlc1tzZXFJbmRleF0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kLnBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCA8IHRoaXMuc2VxdWVuY2VzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQucG9zID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBNb3ZlIGN1cnNvciByaWdodCwgY2xlYXIgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgaWYgKHBvcyA8IHRoaXMuc2VxdWVuY2VzW3NlcUluZGV4XS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHsgc2VxSW5kZXgsIHBvczogcG9zICsgMSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzZXFJbmRleCA8IHRoaXMuc2VxdWVuY2VzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHsgc2VxSW5kZXg6IHNlcUluZGV4ICsgMSwgcG9zOiAwIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gdGhpcy5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0geyBzZXFJbmRleDogMCwgcG9zOiBwb3MgfTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IHRoaXMuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIC8vIEV4dGVuZCBzZWxlY3Rpb24gdXBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4LS07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kLnBvcyA9IE1hdGgubWluKHRoaXMuc2VsZWN0aW9uRW5kLnBvcywgdGhpcy5zZXF1ZW5jZXNbdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXhdLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTW92ZSBjdXJzb3IgdXAsIGNsZWFyIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgIGlmIChzZXFJbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHsgc2VxSW5kZXg6IHNlcUluZGV4IC0gMSwgcG9zOiBNYXRoLm1pbihwb3MsIHRoaXMuc2VxdWVuY2VzW3NlcUluZGV4IC0gMV0ubGVuZ3RoKSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHsgc2VxSW5kZXg6IDAsIHBvczogMCB9OyAvLyBNb3ZlIHRvIHN0YXJ0IG9mIGZpcnN0IHNlcXVlbmNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gdGhpcy5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSB7IHNlcUluZGV4OiB0aGlzLnNlcXVlbmNlcy5sZW5ndGggLSAxLCBwb3M6IHBvcyB9O1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gdGhpcy5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgLy8gRXh0ZW5kIHNlbGVjdGlvbiBkb3duXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4IDwgdGhpcy5zZXF1ZW5jZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZC5wb3MgPSBNYXRoLm1pbih0aGlzLnNlbGVjdGlvbkVuZC5wb3MsIHRoaXMuc2VxdWVuY2VzW3RoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4XS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1vdmUgY3Vyc29yIGRvd24sIGNsZWFyIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgIGlmIChzZXFJbmRleCA8IHRoaXMuc2VxdWVuY2VzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHsgc2VxSW5kZXg6IHNlcUluZGV4ICsgMSwgcG9zOiBNYXRoLm1pbihwb3MsIHRoaXMuc2VxdWVuY2VzW3NlcUluZGV4ICsgMV0ubGVuZ3RoKSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdFNlcUluZGV4ID0gdGhpcy5zZXF1ZW5jZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHsgc2VxSW5kZXg6IGxhc3RTZXFJbmRleCwgcG9zOiB0aGlzLnNlcXVlbmNlc1tsYXN0U2VxSW5kZXhdLmxlbmd0aCB9OyAvLyBNb3ZlIHRvIGVuZCBvZiBsYXN0IHNlcXVlbmNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gdGhpcy5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ0JhY2tzcGFjZScpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUNoYXJhY3Rlcih0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChldmVudC5rZXkgPT09ICdEZWxldGUnKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5kZWxldGVDaGFyYWN0ZXIoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZpbmROZXh0V29yZChzZXFJbmRleCwgcG9zKSB7XG4gICAgICAgIGNvbnN0IHNlcXVlbmNlID0gdGhpcy5zZXF1ZW5jZXNbc2VxSW5kZXhdO1xuICAgICAgICBsZXQgaW5Xb3JkID0gIXRoaXMuaXNHYXAoc2VxdWVuY2VbcG9zXSk7XG4gICAgICAgIGZvciAobGV0IGkgPSBwb3M7IGkgPCBzZXF1ZW5jZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGluV29yZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzR2FwKHNlcXVlbmNlW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICBpbldvcmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNHYXAoc2VxdWVuY2VbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VxdWVuY2UubGVuZ3RoO1xuICAgIH1cbiAgICBmaW5kUHJldmlvdXNXb3JkKHNlcUluZGV4LCBwb3MpIHtcbiAgICAgICAgY29uc3Qgc2VxdWVuY2UgPSB0aGlzLnNlcXVlbmNlc1tzZXFJbmRleF07XG4gICAgICAgIGxldCBpbldvcmQgPSBwb3MgPiAwICYmICF0aGlzLmlzR2FwKHNlcXVlbmNlW3BvcyAtIDFdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHBvcyAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBpZiAoaW5Xb3JkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNHYXAoc2VxdWVuY2VbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpICsgMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNHYXAoc2VxdWVuY2VbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGluV29yZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpc0dhcChjaGFyKSB7XG4gICAgICAgIHJldHVybiBjaGFyID09PSAnLSc7XG4gICAgfVxuICAgIG9uV2hlZWwoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zY3JvbGxYICs9IGV2ZW50LmRlbHRhWDtcbiAgICAgICAgdGhpcy5zY3JvbGxZICs9IGV2ZW50LmRlbHRhWTtcbiAgICAgICAgY29uc3QgbWF4U2Nyb2xsWCA9IHRoaXMubWF4U2VxdWVuY2VMZW5ndGggKiB0aGlzLmJsb2NrV2lkdGggLSB0aGlzLnNlcXVlbmNlQ2FudmFzLndpZHRoO1xuICAgICAgICBjb25zdCBtYXhTY3JvbGxZID0gdGhpcy5zZXF1ZW5jZXMubGVuZ3RoICogdGhpcy5ibG9ja0hlaWdodCAtIHRoaXMuc2VxdWVuY2VDYW52YXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLnNjcm9sbFggPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLnNjcm9sbFgsIG1heFNjcm9sbFgpKTtcbiAgICAgICAgdGhpcy5zY3JvbGxZID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5zY3JvbGxZLCBtYXhTY3JvbGxZKSk7XG4gICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgIH1cbiAgICByZXF1ZXN0UmVkcmF3KCkge1xuICAgICAgICBpZiAodGhpcy5pc1JlZHJhd1NjaGVkdWxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNSZWRyYXdTY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgICAgICB0aGlzLmlzUmVkcmF3U2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc051Y2xlb3RpZGVTZWxlY3RlZChzZXFJbmRleCwgcG9zKSB7XG4gICAgICAgIGlmICghdGhpcy5zZWxlY3Rpb25TdGFydCB8fCAhdGhpcy5zZWxlY3Rpb25FbmQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGFydFJvdyA9IE1hdGgubWluKHRoaXMuc2VsZWN0aW9uU3RhcnQuc2VxSW5kZXgsIHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4KTtcbiAgICAgICAgY29uc3QgZW5kUm93ID0gTWF0aC5tYXgodGhpcy5zZWxlY3Rpb25TdGFydC5zZXFJbmRleCwgdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXgpO1xuICAgICAgICBjb25zdCBzdGFydENvbCA9IE1hdGgubWluKHRoaXMuc2VsZWN0aW9uU3RhcnQucG9zLCB0aGlzLnNlbGVjdGlvbkVuZC5wb3MpO1xuICAgICAgICBjb25zdCBlbmRDb2wgPSBNYXRoLm1heCh0aGlzLnNlbGVjdGlvblN0YXJ0LnBvcywgdGhpcy5zZWxlY3Rpb25FbmQucG9zKTtcbiAgICAgICAgcmV0dXJuIHNlcUluZGV4ID49IHN0YXJ0Um93ICYmIHNlcUluZGV4IDw9IGVuZFJvdyAmJiBwb3MgPj0gc3RhcnRDb2wgJiYgcG9zIDw9IGVuZENvbDtcbiAgICB9XG4gICAgaXNTZWFyY2hSZXN1bHQoc2VxSW5kZXgsIHBvcykge1xuICAgICAgICBpZiAoIXRoaXMuc2VhcmNoUmVzdWx0cyB8fCAhdGhpcy5zZWFyY2hSZXN1bHRzW3NlcUluZGV4XSB8fCB0aGlzLnNlYXJjaFF1ZXJ5TGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBzdGFydEluZGV4IG9mIHRoaXMuc2VhcmNoUmVzdWx0c1tzZXFJbmRleF0pIHtcbiAgICAgICAgICAgIGlmIChwb3MgPj0gc3RhcnRJbmRleCAmJiBwb3MgPCBzdGFydEluZGV4ICsgdGhpcy5zZWFyY2hRdWVyeUxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5kcmF3U2VxdWVuY2VzKCk7XG4gICAgICAgIHRoaXMuZHJhd05hbWVzKCk7XG4gICAgICAgIHRoaXMuZHJhd1J1bGVyKCk7XG4gICAgICAgIHRoaXMuZHJhd1Njcm9sbGJhcnMoKTtcbiAgICB9XG4gICAgZHJhd1Njcm9sbGJhcnMoKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuc2VxQ3R4O1xuICAgICAgICBjb25zdCBjYW52YXNXaWR0aCA9IHRoaXMuc2VxdWVuY2VDYW52YXMud2lkdGg7XG4gICAgICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9IHRoaXMuc2VxdWVuY2VDYW52YXMuaGVpZ2h0O1xuICAgICAgICAvLyBIb3Jpem9udGFsIFNjcm9sbGJhclxuICAgICAgICBjb25zdCBjb250ZW50V2lkdGggPSB0aGlzLm1heFNlcXVlbmNlTGVuZ3RoICogdGhpcy5ibG9ja1dpZHRoO1xuICAgICAgICBpZiAoY29udGVudFdpZHRoID4gY2FudmFzV2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGJhclRyYWNrV2lkdGggPSBjYW52YXNXaWR0aCAtIHRoaXMuc2Nyb2xsYmFyV2lkdGg7IC8vIExlYXZlIHNwYWNlIGZvciB2ZXJ0aWNhbCBzY3JvbGxiYXJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGJhclRodW1iV2lkdGggPSBNYXRoLm1heCg1MCwgc2Nyb2xsYmFyVHJhY2tXaWR0aCAqIChjYW52YXNXaWR0aCAvIGNvbnRlbnRXaWR0aCkpO1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYmFyVGh1bWJYID0gKHRoaXMuc2Nyb2xsWCAvIChjb250ZW50V2lkdGggLSBjYW52YXNXaWR0aCkpICogKHNjcm9sbGJhclRyYWNrV2lkdGggLSBzY3JvbGxiYXJUaHVtYldpZHRoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLnNjcm9sbGJhclRyYWNrQ29sb3I7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgY2FudmFzSGVpZ2h0IC0gdGhpcy5zY3JvbGxiYXJXaWR0aCwgc2Nyb2xsYmFyVHJhY2tXaWR0aCwgdGhpcy5zY3JvbGxiYXJXaWR0aCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5zY3JvbGxiYXJDb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdChzY3JvbGxiYXJUaHVtYlgsIGNhbnZhc0hlaWdodCAtIHRoaXMuc2Nyb2xsYmFyV2lkdGgsIHNjcm9sbGJhclRodW1iV2lkdGgsIHRoaXMuc2Nyb2xsYmFyV2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFZlcnRpY2FsIFNjcm9sbGJhclxuICAgICAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gdGhpcy5zZXF1ZW5jZXMubGVuZ3RoICogdGhpcy5ibG9ja0hlaWdodDtcbiAgICAgICAgaWYgKGNvbnRlbnRIZWlnaHQgPiBjYW52YXNIZWlnaHQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGJhclRyYWNrSGVpZ2h0ID0gY2FudmFzSGVpZ2h0IC0gdGhpcy5zY3JvbGxiYXJXaWR0aDsgLy8gTGVhdmUgc3BhY2UgZm9yIGhvcml6b250YWwgc2Nyb2xsYmFyXG4gICAgICAgICAgICBjb25zdCBzY3JvbGxiYXJUaHVtYkhlaWdodCA9IE1hdGgubWF4KDUwLCBzY3JvbGxiYXJUcmFja0hlaWdodCAqIChjYW52YXNIZWlnaHQgLyBjb250ZW50SGVpZ2h0KSk7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxiYXJUaHVtYlkgPSAodGhpcy5zY3JvbGxZIC8gKGNvbnRlbnRIZWlnaHQgLSBjYW52YXNIZWlnaHQpKSAqIChzY3JvbGxiYXJUcmFja0hlaWdodCAtIHNjcm9sbGJhclRodW1iSGVpZ2h0KTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLnNjcm9sbGJhclRyYWNrQ29sb3I7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoY2FudmFzV2lkdGggLSB0aGlzLnNjcm9sbGJhcldpZHRoLCAwLCB0aGlzLnNjcm9sbGJhcldpZHRoLCBzY3JvbGxiYXJUcmFja0hlaWdodCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5zY3JvbGxiYXJDb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdChjYW52YXNXaWR0aCAtIHRoaXMuc2Nyb2xsYmFyV2lkdGgsIHNjcm9sbGJhclRodW1iWSwgdGhpcy5zY3JvbGxiYXJXaWR0aCwgc2Nyb2xsYmFyVGh1bWJIZWlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRyYXdTZXF1ZW5jZXMoKSB7XG4gICAgICAgIHRoaXMuc2VxQ3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnNlcXVlbmNlQ2FudmFzLndpZHRoLCB0aGlzLnNlcXVlbmNlQ2FudmFzLmhlaWdodCk7XG4gICAgICAgIGNvbnN0IHN0YXJ0Um93ID0gTWF0aC5mbG9vcih0aGlzLnNjcm9sbFkgLyB0aGlzLmJsb2NrSGVpZ2h0KTtcbiAgICAgICAgY29uc3QgZW5kUm93ID0gTWF0aC5taW4odGhpcy5zZXF1ZW5jZXMubGVuZ3RoLCBzdGFydFJvdyArIE1hdGguY2VpbCh0aGlzLnNlcXVlbmNlQ2FudmFzLmhlaWdodCAvIHRoaXMuYmxvY2tIZWlnaHQpKTtcbiAgICAgICAgY29uc3Qgc3RhcnRDb2wgPSBNYXRoLmZsb29yKHRoaXMuc2Nyb2xsWCAvIHRoaXMuYmxvY2tXaWR0aCk7XG4gICAgICAgIGNvbnN0IGVuZENvbCA9IE1hdGgubWluKHRoaXMubWF4U2VxdWVuY2VMZW5ndGgsIHN0YXJ0Q29sICsgTWF0aC5jZWlsKHRoaXMuc2VxdWVuY2VDYW52YXMud2lkdGggLyB0aGlzLmJsb2NrV2lkdGgpKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0Um93OyBpIDwgZW5kUm93OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNlcXVlbmNlID0gdGhpcy5zZXF1ZW5jZXNbaV07XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gc3RhcnRDb2w7IGogPCBlbmRDb2w7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBqICogdGhpcy5ibG9ja1dpZHRoIC0gdGhpcy5zY3JvbGxYO1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBpICogdGhpcy5ibG9ja0hlaWdodCAtIHRoaXMuc2Nyb2xsWTtcbiAgICAgICAgICAgICAgICBjb25zdCBudWNsZW90aWRlID0gc2VxdWVuY2Vbal0gfHwgJyc7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hhclRvRHJhdyA9IHRoaXMuZGlzcGxheU1vZGUgPT09ICdudWNsZW90aWRlJyA/IG51Y2xlb3RpZGUgOiB0aGlzLnRyYW5zbGF0ZWRTZXF1ZW5jZXNbaV1bal0gfHwgJyc7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3JNYXAgPSB0aGlzLmRpc3BsYXlNb2RlID09PSAnbnVjbGVvdGlkZScgPyB0aGlzLmNvbG9ycyA6IHRoaXMuYW1pbm9BY2lkQ29sb3JzO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9ySW5mbyA9IGNvbG9yTWFwW2NoYXJUb0RyYXcudG9VcHBlckNhc2UoKV0gfHwgeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjRkZGRkZGJyB9OyAvLyBEZWZhdWx0IHRvIGJsYWNrIHRleHQgb24gd2hpdGUgYmFja2dyb3VuZFxuICAgICAgICAgICAgICAgIHRoaXMuc2VxQ3R4LmZpbGxTdHlsZSA9IGNvbG9ySW5mby5iYWNrZ3JvdW5kO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VxQ3R4LmZpbGxSZWN0KHgsIHksIHRoaXMuYmxvY2tXaWR0aCwgdGhpcy5ibG9ja0hlaWdodCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXFDdHguc3Ryb2tlU3R5bGUgPSAnI0RERERERCc7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXFDdHguc3Ryb2tlUmVjdCh4LCB5LCB0aGlzLmJsb2NrV2lkdGgsIHRoaXMuYmxvY2tIZWlnaHQpO1xuICAgICAgICAgICAgICAgIC8vIEhpZ2hsaWdodCBzZWxlY3RlZCBzZXF1ZW5jZSBuYW1lcyAoZW50aXJlIHJvdylcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFNlcXVlbmNlTmFtZXMuaGFzKGkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VxQ3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDI1NSwgMCwgMC4xKSc7IC8vIExpZ2h0IGdyZWVuIG92ZXJsYXkgZm9yIHNlbGVjdGVkIHJvd3NcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXFDdHguZmlsbFJlY3QoeCwgeSwgdGhpcy5ibG9ja1dpZHRoLCB0aGlzLmJsb2NrSGVpZ2h0KTsgLy8gQXBwbHkgdG8gZWFjaCBibG9jayBpbiB0aGUgcm93XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTnVjbGVvdGlkZVNlbGVjdGVkKGksIGopKSB7IC8vIFRoaXMgbWV0aG9kIG5hbWUgaXMgbm93IG1pc2xlYWRpbmcsIHNob3VsZCBiZSBpc0NoYXJTZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcUN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAyNTUsIDAuMyknOyAvLyBTZW1pLXRyYW5zcGFyZW50IGJsdWUgb3ZlcmxheSBmb3IgY2VsbCBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXFDdHguZmlsbFJlY3QoeCwgeSwgdGhpcy5ibG9ja1dpZHRoLCB0aGlzLmJsb2NrSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXFDdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VxQ3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VxQ3R4LnN0cm9rZVJlY3QoeCwgeSwgdGhpcy5ibG9ja1dpZHRoLCB0aGlzLmJsb2NrSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXFDdHguZmlsbFN0eWxlID0gY29sb3JJbmZvLmZvcmVncm91bmQ7IC8vIFVzZSBmb3JlZ3JvdW5kIGNvbG9yIGZyb20gc2NoZW1lXG4gICAgICAgICAgICAgICAgdGhpcy5zZXFDdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXFDdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXFDdHguZmlsbFRleHQoY2hhclRvRHJhdywgeCArIHRoaXMuYmxvY2tXaWR0aCAvIDIsIHkgKyB0aGlzLmJsb2NrSGVpZ2h0IC8gMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZHJhd05hbWVzKCkge1xuICAgICAgICB0aGlzLm5hbWVzQ3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLm5hbWVzQ2FudmFzLndpZHRoLCB0aGlzLm5hbWVzQ2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMubmFtZXNDdHguZm9udCA9ICcxNHB4IHNhbnMtc2VyaWYnO1xuICAgICAgICB0aGlzLm5hbWVzQ3R4LnRleHRBbGlnbiA9ICdsZWZ0JztcbiAgICAgICAgdGhpcy5uYW1lc0N0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICAgICAgY29uc3Qgc3RhcnRSb3cgPSBNYXRoLmZsb29yKHRoaXMuc2Nyb2xsWSAvIHRoaXMuYmxvY2tIZWlnaHQpO1xuICAgICAgICBjb25zdCBlbmRSb3cgPSBNYXRoLm1pbih0aGlzLnNlcXVlbmNlcy5sZW5ndGgsIHN0YXJ0Um93ICsgTWF0aC5jZWlsKHRoaXMubmFtZXNDYW52YXMuaGVpZ2h0IC8gdGhpcy5ibG9ja0hlaWdodCkpO1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRSb3c7IGkgPCBlbmRSb3c7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgeSA9IGkgKiB0aGlzLmJsb2NrSGVpZ2h0IC0gdGhpcy5zY3JvbGxZOyAvLyBUb3Agb2YgdGhlIGJsb2NrXG4gICAgICAgICAgICBjb25zdCB0ZXh0WSA9IHkgKyB0aGlzLmJsb2NrSGVpZ2h0IC8gMjsgLy8gTWlkZGxlIGZvciB0ZXh0XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFNlcXVlbmNlTmFtZXMuaGFzKGkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lc0N0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAyNTUsIDAuMSknOyAvLyBMaWdodCBibHVlIGJhY2tncm91bmQgZm9yIHNlbGVjdGVkIG5hbWVzXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lc0N0eC5maWxsUmVjdCgwLCB5LCB0aGlzLm5hbWVzQ2FudmFzLndpZHRoLCB0aGlzLmJsb2NrSGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubmFtZXNDdHguZmlsbFN0eWxlID0gJyMwMDAwMDAnOyAvLyBCbGFjayB0ZXh0XG4gICAgICAgICAgICB0aGlzLm5hbWVzQ3R4LmZpbGxUZXh0KHRoaXMubmFtZXNbaV0sIDUsIHRleHRZKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkcmF3UnVsZXIoKSB7XG4gICAgICAgIHRoaXMucnVsZXJDdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMucnVsZXJDYW52YXMud2lkdGgsIHRoaXMucnVsZXJDYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5ydWxlckN0eC5mb250ID0gJzEycHggc2Fucy1zZXJpZic7XG4gICAgICAgIHRoaXMucnVsZXJDdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICAgIHRoaXMucnVsZXJDdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgICAgIGNvbnN0IHN0YXJ0Q29sID0gTWF0aC5mbG9vcih0aGlzLnNjcm9sbFggLyB0aGlzLmJsb2NrV2lkdGgpO1xuICAgICAgICBjb25zdCBlbmRDb2wgPSBNYXRoLm1pbih0aGlzLm1heFNlcXVlbmNlTGVuZ3RoLCBzdGFydENvbCArIE1hdGguY2VpbCh0aGlzLnJ1bGVyQ2FudmFzLndpZHRoIC8gdGhpcy5ibG9ja1dpZHRoKSk7XG4gICAgICAgIGZvciAobGV0IGogPSBzdGFydENvbDsgaiA8IGVuZENvbDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoaiAlIDUgPT09IDApIHsgLy8gRHJhdyBsYWJlbCBldmVyeSA1IGJsb2Nrc1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBqICogdGhpcy5ibG9ja1dpZHRoIC0gdGhpcy5zY3JvbGxYICsgdGhpcy5ibG9ja1dpZHRoIC8gMjtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bGVyQ3R4LmZpbGxTdHlsZSA9ICcjMDAwMDAwJztcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bGVyQ3R4LmZpbGxUZXh0KFN0cmluZyhqICsgMSksIHgsIHRoaXMucnVsZXJDYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25OYW1lc0NhbnZhc01vdXNlRG93bihldmVudCkge1xuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5uYW1lc0NhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcbiAgICAgICAgY29uc3Qgc2VxSW5kZXggPSBNYXRoLmZsb29yKCh5ICsgdGhpcy5zY3JvbGxZKSAvIHRoaXMuYmxvY2tIZWlnaHQpO1xuICAgICAgICBpZiAoc2VxSW5kZXggPj0gMCAmJiBzZXFJbmRleCA8IHRoaXMubmFtZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSB7IC8vIEN0cmwvQ21kIGNsaWNrIHRvIHRvZ2dsZSBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFNlcXVlbmNlTmFtZXMuaGFzKHNlcUluZGV4KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU2VxdWVuY2VOYW1lcy5kZWxldGUoc2VxSW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFNlcXVlbmNlTmFtZXMuYWRkKHNlcUluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChldmVudC5zaGlmdEtleSkgeyAvLyBTaGlmdCBjbGljayB0byBzZWxlY3QgYSByYW5nZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkU2VxdWVuY2VOYW1lcy5zaXplID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXJzdFNlbGVjdGVkID0gTWF0aC5taW4oLi4uQXJyYXkuZnJvbSh0aGlzLnNlbGVjdGVkU2VxdWVuY2VOYW1lcykpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IE1hdGgubWluKGZpcnN0U2VsZWN0ZWQsIHNlcUluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5kID0gTWF0aC5tYXgoZmlyc3RTZWxlY3RlZCwgc2VxSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTZXF1ZW5jZU5hbWVzLmFkZChpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFNlcXVlbmNlTmFtZXMuYWRkKHNlcUluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHsgLy8gUmVndWxhciBjbGljayB0byBzZWxlY3Qgb25seSB0aGlzIGl0ZW1cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU2VxdWVuY2VOYW1lcy5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTZXF1ZW5jZU5hbWVzLmFkZChzZXFJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJ2YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiO1xudmFyIHdlYnBhY2tRdWV1ZXMgPSBoYXNTeW1ib2wgPyBTeW1ib2woXCJ3ZWJwYWNrIHF1ZXVlc1wiKSA6IFwiX193ZWJwYWNrX3F1ZXVlc19fXCI7XG52YXIgd2VicGFja0V4cG9ydHMgPSBoYXNTeW1ib2wgPyBTeW1ib2woXCJ3ZWJwYWNrIGV4cG9ydHNcIikgOiBcIl9fd2VicGFja19leHBvcnRzX19cIjtcbnZhciB3ZWJwYWNrRXJyb3IgPSBoYXNTeW1ib2wgPyBTeW1ib2woXCJ3ZWJwYWNrIGVycm9yXCIpIDogXCJfX3dlYnBhY2tfZXJyb3JfX1wiO1xuXG5cbnZhciByZXNvbHZlUXVldWUgPSAocXVldWUpID0+IHtcblx0aWYocXVldWUgJiYgcXVldWUuZCA8IDEpIHtcblx0XHRxdWV1ZS5kID0gMTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSkpO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tID8gZm4ucisrIDogZm4oKSkpO1xuXHR9XG59XG52YXIgd3JhcERlcHMgPSAoZGVwcykgPT4gKGRlcHMubWFwKChkZXApID0+IHtcblx0aWYoZGVwICE9PSBudWxsICYmIHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpIHtcblxuXHRcdGlmKGRlcFt3ZWJwYWNrUXVldWVzXSkgcmV0dXJuIGRlcDtcblx0XHRpZihkZXAudGhlbikge1xuXHRcdFx0dmFyIHF1ZXVlID0gW107XG5cdFx0XHRxdWV1ZS5kID0gMDtcblx0XHRcdGRlcC50aGVuKChyKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXhwb3J0c10gPSByO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSwgKGUpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFcnJvcl0gPSBlO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSk7XG5cdFx0XHR2YXIgb2JqID0ge307XG5cblx0XHRcdG9ialt3ZWJwYWNrUXVldWVzXSA9IChmbikgPT4gKGZuKHF1ZXVlKSk7XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0fVxuXHR2YXIgcmV0ID0ge307XG5cdHJldFt3ZWJwYWNrUXVldWVzXSA9IHggPT4ge307XG5cdHJldFt3ZWJwYWNrRXhwb3J0c10gPSBkZXA7XG5cdHJldHVybiByZXQ7XG59KSk7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmEgPSAobW9kdWxlLCBib2R5LCBoYXNBd2FpdCkgPT4ge1xuXHR2YXIgcXVldWU7XG5cdGhhc0F3YWl0ICYmICgocXVldWUgPSBbXSkuZCA9IC0xKTtcblx0dmFyIGRlcFF1ZXVlcyA9IG5ldyBTZXQoKTtcblx0dmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cztcblx0dmFyIGN1cnJlbnREZXBzO1xuXHR2YXIgb3V0ZXJSZXNvbHZlO1xuXHR2YXIgcmVqZWN0O1xuXHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWopID0+IHtcblx0XHRyZWplY3QgPSByZWo7XG5cdFx0b3V0ZXJSZXNvbHZlID0gcmVzb2x2ZTtcblx0fSk7XG5cdHByb21pc2Vbd2VicGFja0V4cG9ydHNdID0gZXhwb3J0cztcblx0cHJvbWlzZVt3ZWJwYWNrUXVldWVzXSA9IChmbikgPT4gKHF1ZXVlICYmIGZuKHF1ZXVlKSwgZGVwUXVldWVzLmZvckVhY2goZm4pLCBwcm9taXNlW1wiY2F0Y2hcIl0oeCA9PiB7fSkpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IHByb21pc2U7XG5cdHZhciBoYW5kbGUgPSAoZGVwcykgPT4ge1xuXHRcdGN1cnJlbnREZXBzID0gd3JhcERlcHMoZGVwcyk7XG5cdFx0dmFyIGZuO1xuXHRcdHZhciBnZXRSZXN1bHQgPSAoKSA9PiAoY3VycmVudERlcHMubWFwKChkKSA9PiB7XG5cblx0XHRcdGlmKGRbd2VicGFja0Vycm9yXSkgdGhyb3cgZFt3ZWJwYWNrRXJyb3JdO1xuXHRcdFx0cmV0dXJuIGRbd2VicGFja0V4cG9ydHNdO1xuXHRcdH0pKVxuXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdGZuID0gKCkgPT4gKHJlc29sdmUoZ2V0UmVzdWx0KSk7XG5cdFx0XHRmbi5yID0gMDtcblx0XHRcdHZhciBmblF1ZXVlID0gKHEpID0+IChxICE9PSBxdWV1ZSAmJiAhZGVwUXVldWVzLmhhcyhxKSAmJiAoZGVwUXVldWVzLmFkZChxKSwgcSAmJiAhcS5kICYmIChmbi5yKyssIHEucHVzaChmbikpKSk7XG5cdFx0XHRjdXJyZW50RGVwcy5tYXAoKGRlcCkgPT4gKGRlcFt3ZWJwYWNrUXVldWVzXShmblF1ZXVlKSkpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBmbi5yID8gcHJvbWlzZSA6IGdldFJlc3VsdCgpO1xuXHR9XG5cdHZhciBkb25lID0gKGVycikgPT4gKChlcnIgPyByZWplY3QocHJvbWlzZVt3ZWJwYWNrRXJyb3JdID0gZXJyKSA6IG91dGVyUmVzb2x2ZShleHBvcnRzKSksIHJlc29sdmVRdWV1ZShxdWV1ZSkpXG5cdGJvZHkoaGFuZGxlLCBkb25lKTtcblx0cXVldWUgJiYgcXVldWUuZCA8IDAgJiYgKHF1ZXVlLmQgPSAwKTtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy52ID0gKGV4cG9ydHMsIHdhc21Nb2R1bGVJZCwgd2FzbU1vZHVsZUhhc2gsIGltcG9ydHNPYmopID0+IHtcblxuXHR2YXIgcmVxID0gZmV0Y2goX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIHdhc21Nb2R1bGVIYXNoICsgXCIubW9kdWxlLndhc21cIik7XG5cdHZhciBmYWxsYmFjayA9ICgpID0+IChyZXFcblx0XHQudGhlbigoeCkgPT4gKHguYXJyYXlCdWZmZXIoKSkpXG5cdFx0LnRoZW4oKGJ5dGVzKSA9PiAoV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoYnl0ZXMsIGltcG9ydHNPYmopKSlcblx0XHQudGhlbigocmVzKSA9PiAoT2JqZWN0LmFzc2lnbihleHBvcnRzLCByZXMuaW5zdGFuY2UuZXhwb3J0cykpKSk7XG5cdHJldHVybiByZXEudGhlbigocmVzKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyA9PT0gXCJmdW5jdGlvblwiKSB7XG5cblx0XHRcdHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyhyZXMsIGltcG9ydHNPYmopXG5cdFx0XHRcdC50aGVuKFxuXHRcdFx0XHRcdChyZXMpID0+IChPYmplY3QuYXNzaWduKGV4cG9ydHMsIHJlcy5pbnN0YW5jZS5leHBvcnRzKSksXG5cdFx0XHRcdFx0KGUpID0+IHtcblx0XHRcdFx0XHRcdGlmKHJlcy5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKSAhPT0gXCJhcHBsaWNhdGlvbi93YXNtXCIpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS53YXJuKFwiYFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nYCBmYWlsZWQgYmVjYXVzZSB5b3VyIHNlcnZlciBkb2VzIG5vdCBzZXJ2ZSB3YXNtIHdpdGggYGFwcGxpY2F0aW9uL3dhc21gIE1JTUUgdHlwZS4gRmFsbGluZyBiYWNrIHRvIGBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZWAgd2hpY2ggaXMgc2xvd2VyLiBPcmlnaW5hbCBlcnJvcjpcXG5cIiwgZSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxsYmFjaygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dGhyb3cgZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxsYmFjaygpO1xuXHR9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC9eYmxvYjovLCBcIlwiKS5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdtb2R1bGUnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vd3d3L21haW4udHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=