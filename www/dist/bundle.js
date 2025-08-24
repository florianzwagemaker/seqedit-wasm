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
module.exports = __webpack_require__.v(exports, module.id, "3a5e523b1e36721d5e40", {
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
        viewer.setSearchResults(searchResults);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ1Y7QUFDaUI7QUFDdEQsbUVBQWMsQ0FBQyxrREFBSTtBQUNuQixtRUFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSnJCO0FBQ087QUFDUDtBQUNBOzs7QUFHQTs7QUFFQSxvREFBb0QsOEJBQThCOztBQUVsRjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxXQUFXLGNBQWM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM09tRDtBQUNzQztBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw0REFBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyw4REFBVztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MscUVBQWtCO0FBQzFEO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHlEQUF5RCw0REFBUztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQseURBQU07QUFDekQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RDtBQUNBO0FBQ0EsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0QsZUFBZSw4Q0FBOEM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQyxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsYUFBYTtBQUM1QztBQUNBLHNFQUFzRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLCtCQUErQixhQUFhO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsYUFBYTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGFBQWE7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGFBQWE7QUFDNUM7QUFDQTtBQUNBLG1DQUFtQyxhQUFhO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFdBQVc7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZ0JBQWdCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLGtMQUFrTDtBQUNsTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0EsNENBQTRDLHVCQUF1QjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsb0VBQW9FO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIscUJBQXFCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFFBQVE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQztBQUNBLG1DQUFtQyxZQUFZO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsZ0RBQWdEO0FBQzFIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRTtBQUNwRSxtRkFBbUY7QUFDbkY7QUFDQSx1REFBdUQ7QUFDdkQsb0VBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQywyREFBMkQ7QUFDM0Qsb0RBQW9EO0FBQ3BEO0FBQ0Esa0VBQWtFO0FBQ2xFO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxVQUFVO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDOXJCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTs7O1dBR0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLENBQUM7V0FDRDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0Esc0dBQXNHO1dBQ3RHO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQ3hFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRixFOzs7OztXQ3hCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7VUVsQkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXFlZGl0LXdhc20vLi9wa2cvc2VxZWRpdF93YXNtLmpzIiwid2VicGFjazovL3NlcWVkaXQtd2FzbS8uL3BrZy9zZXFlZGl0X3dhc21fYmcuanMiLCJ3ZWJwYWNrOi8vc2VxZWRpdC13YXNtLy4vd3d3L21haW4udHMiLCJ3ZWJwYWNrOi8vc2VxZWRpdC13YXNtLy4vd3d3L3NlcXVlbmNlLXZpZXdlci50cyIsIndlYnBhY2s6Ly9zZXFlZGl0LXdhc20vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2VxZWRpdC13YXNtL3dlYnBhY2svcnVudGltZS9hc3luYyBtb2R1bGUiLCJ3ZWJwYWNrOi8vc2VxZWRpdC13YXNtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zZXFlZGl0LXdhc20vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zZXFlZGl0LXdhc20vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zZXFlZGl0LXdhc20vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zZXFlZGl0LXdhc20vd2VicGFjay9ydW50aW1lL3dhc20gbG9hZGluZyIsIndlYnBhY2s6Ly9zZXFlZGl0LXdhc20vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc2VxZWRpdC13YXNtL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vc2VxZWRpdC13YXNtL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9zZXFlZGl0LXdhc20vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHdhc20gZnJvbSBcIi4vc2VxZWRpdF93YXNtX2JnLndhc21cIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NlcWVkaXRfd2FzbV9iZy5qc1wiO1xuaW1wb3J0IHsgX193Ymdfc2V0X3dhc20gfSBmcm9tIFwiLi9zZXFlZGl0X3dhc21fYmcuanNcIjtcbl9fd2JnX3NldF93YXNtKHdhc20pO1xud2FzbS5fX3diaW5kZ2VuX3N0YXJ0KCk7XG4iLCJsZXQgd2FzbTtcbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19zZXRfd2FzbSh2YWwpIHtcbiAgICB3YXNtID0gdmFsO1xufVxuXG5cbmNvbnN0IGxUZXh0RGVjb2RlciA9IHR5cGVvZiBUZXh0RGVjb2RlciA9PT0gJ3VuZGVmaW5lZCcgPyAoMCwgbW9kdWxlLnJlcXVpcmUpKCd1dGlsJykuVGV4dERlY29kZXIgOiBUZXh0RGVjb2RlcjtcblxubGV0IGNhY2hlZFRleHREZWNvZGVyID0gbmV3IGxUZXh0RGVjb2RlcigndXRmLTgnLCB7IGlnbm9yZUJPTTogdHJ1ZSwgZmF0YWw6IHRydWUgfSk7XG5cbmNhY2hlZFRleHREZWNvZGVyLmRlY29kZSgpO1xuXG5sZXQgY2FjaGVkVWludDhBcnJheU1lbW9yeTAgPSBudWxsO1xuXG5mdW5jdGlvbiBnZXRVaW50OEFycmF5TWVtb3J5MCgpIHtcbiAgICBpZiAoY2FjaGVkVWludDhBcnJheU1lbW9yeTAgPT09IG51bGwgfHwgY2FjaGVkVWludDhBcnJheU1lbW9yeTAuYnl0ZUxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjYWNoZWRVaW50OEFycmF5TWVtb3J5MCA9IG5ldyBVaW50OEFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWRVaW50OEFycmF5TWVtb3J5MDtcbn1cblxuZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbVdhc20wKHB0ciwgbGVuKSB7XG4gICAgcHRyID0gcHRyID4+PiAwO1xuICAgIHJldHVybiBjYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoZ2V0VWludDhBcnJheU1lbW9yeTAoKS5zdWJhcnJheShwdHIsIHB0ciArIGxlbikpO1xufVxuXG5sZXQgV0FTTV9WRUNUT1JfTEVOID0gMDtcblxuY29uc3QgbFRleHRFbmNvZGVyID0gdHlwZW9mIFRleHRFbmNvZGVyID09PSAndW5kZWZpbmVkJyA/ICgwLCBtb2R1bGUucmVxdWlyZSkoJ3V0aWwnKS5UZXh0RW5jb2RlciA6IFRleHRFbmNvZGVyO1xuXG5sZXQgY2FjaGVkVGV4dEVuY29kZXIgPSBuZXcgbFRleHRFbmNvZGVyKCd1dGYtOCcpO1xuXG5jb25zdCBlbmNvZGVTdHJpbmcgPSAodHlwZW9mIGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8gPT09ICdmdW5jdGlvbidcbiAgICA/IGZ1bmN0aW9uIChhcmcsIHZpZXcpIHtcbiAgICByZXR1cm4gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlSW50byhhcmcsIHZpZXcpO1xufVxuICAgIDogZnVuY3Rpb24gKGFyZywgdmlldykge1xuICAgIGNvbnN0IGJ1ZiA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZShhcmcpO1xuICAgIHZpZXcuc2V0KGJ1Zik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVhZDogYXJnLmxlbmd0aCxcbiAgICAgICAgd3JpdHRlbjogYnVmLmxlbmd0aFxuICAgIH07XG59KTtcblxuZnVuY3Rpb24gcGFzc1N0cmluZ1RvV2FzbTAoYXJnLCBtYWxsb2MsIHJlYWxsb2MpIHtcblxuICAgIGlmIChyZWFsbG9jID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgYnVmID0gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlKGFyZyk7XG4gICAgICAgIGNvbnN0IHB0ciA9IG1hbGxvYyhidWYubGVuZ3RoLCAxKSA+Pj4gMDtcbiAgICAgICAgZ2V0VWludDhBcnJheU1lbW9yeTAoKS5zdWJhcnJheShwdHIsIHB0ciArIGJ1Zi5sZW5ndGgpLnNldChidWYpO1xuICAgICAgICBXQVNNX1ZFQ1RPUl9MRU4gPSBidWYubGVuZ3RoO1xuICAgICAgICByZXR1cm4gcHRyO1xuICAgIH1cblxuICAgIGxldCBsZW4gPSBhcmcubGVuZ3RoO1xuICAgIGxldCBwdHIgPSBtYWxsb2MobGVuLCAxKSA+Pj4gMDtcblxuICAgIGNvbnN0IG1lbSA9IGdldFVpbnQ4QXJyYXlNZW1vcnkwKCk7XG5cbiAgICBsZXQgb2Zmc2V0ID0gMDtcblxuICAgIGZvciAoOyBvZmZzZXQgPCBsZW47IG9mZnNldCsrKSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBhcmcuY2hhckNvZGVBdChvZmZzZXQpO1xuICAgICAgICBpZiAoY29kZSA+IDB4N0YpIGJyZWFrO1xuICAgICAgICBtZW1bcHRyICsgb2Zmc2V0XSA9IGNvZGU7XG4gICAgfVxuXG4gICAgaWYgKG9mZnNldCAhPT0gbGVuKSB7XG4gICAgICAgIGlmIChvZmZzZXQgIT09IDApIHtcbiAgICAgICAgICAgIGFyZyA9IGFyZy5zbGljZShvZmZzZXQpO1xuICAgICAgICB9XG4gICAgICAgIHB0ciA9IHJlYWxsb2MocHRyLCBsZW4sIGxlbiA9IG9mZnNldCArIGFyZy5sZW5ndGggKiAzLCAxKSA+Pj4gMDtcbiAgICAgICAgY29uc3QgdmlldyA9IGdldFVpbnQ4QXJyYXlNZW1vcnkwKCkuc3ViYXJyYXkocHRyICsgb2Zmc2V0LCBwdHIgKyBsZW4pO1xuICAgICAgICBjb25zdCByZXQgPSBlbmNvZGVTdHJpbmcoYXJnLCB2aWV3KTtcblxuICAgICAgICBvZmZzZXQgKz0gcmV0LndyaXR0ZW47XG4gICAgICAgIHB0ciA9IHJlYWxsb2MocHRyLCBsZW4sIG9mZnNldCwgMSkgPj4+IDA7XG4gICAgfVxuXG4gICAgV0FTTV9WRUNUT1JfTEVOID0gb2Zmc2V0O1xuICAgIHJldHVybiBwdHI7XG59XG5cbmxldCBjYWNoZWRVaW50MzJBcnJheU1lbW9yeTAgPSBudWxsO1xuXG5mdW5jdGlvbiBnZXRVaW50MzJBcnJheU1lbW9yeTAoKSB7XG4gICAgaWYgKGNhY2hlZFVpbnQzMkFycmF5TWVtb3J5MCA9PT0gbnVsbCB8fCBjYWNoZWRVaW50MzJBcnJheU1lbW9yeTAuYnl0ZUxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjYWNoZWRVaW50MzJBcnJheU1lbW9yeTAgPSBuZXcgVWludDMyQXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZFVpbnQzMkFycmF5TWVtb3J5MDtcbn1cblxuZnVuY3Rpb24gZ2V0QXJyYXlVMzJGcm9tV2FzbTAocHRyLCBsZW4pIHtcbiAgICBwdHIgPSBwdHIgPj4+IDA7XG4gICAgcmV0dXJuIGdldFVpbnQzMkFycmF5TWVtb3J5MCgpLnN1YmFycmF5KHB0ciAvIDQsIHB0ciAvIDQgKyBsZW4pO1xufVxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VxdWVuY2VcbiAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeVxuICogQHJldHVybnMge1VpbnQzMkFycmF5fVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoKHNlcXVlbmNlLCBxdWVyeSkge1xuICAgIGNvbnN0IHB0cjAgPSBwYXNzU3RyaW5nVG9XYXNtMChzZXF1ZW5jZSwgd2FzbS5fX3diaW5kZ2VuX21hbGxvYywgd2FzbS5fX3diaW5kZ2VuX3JlYWxsb2MpO1xuICAgIGNvbnN0IGxlbjAgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgY29uc3QgcHRyMSA9IHBhc3NTdHJpbmdUb1dhc20wKHF1ZXJ5LCB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jLCB3YXNtLl9fd2JpbmRnZW5fcmVhbGxvYyk7XG4gICAgY29uc3QgbGVuMSA9IFdBU01fVkVDVE9SX0xFTjtcbiAgICBjb25zdCByZXQgPSB3YXNtLnNlYXJjaChwdHIwLCBsZW4wLCBwdHIxLCBsZW4xKTtcbiAgICB2YXIgdjMgPSBnZXRBcnJheVUzMkZyb21XYXNtMChyZXRbMF0sIHJldFsxXSkuc2xpY2UoKTtcbiAgICB3YXNtLl9fd2JpbmRnZW5fZnJlZShyZXRbMF0sIHJldFsxXSAqIDQsIDQpO1xuICAgIHJldHVybiB2Mztcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VxdWVuY2VcbiAqIEBwYXJhbSB7bnVtYmVyfSBmcmFtZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZShzZXF1ZW5jZSwgZnJhbWUpIHtcbiAgICBsZXQgZGVmZXJyZWQyXzA7XG4gICAgbGV0IGRlZmVycmVkMl8xO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHB0cjAgPSBwYXNzU3RyaW5nVG9XYXNtMChzZXF1ZW5jZSwgd2FzbS5fX3diaW5kZ2VuX21hbGxvYywgd2FzbS5fX3diaW5kZ2VuX3JlYWxsb2MpO1xuICAgICAgICBjb25zdCBsZW4wID0gV0FTTV9WRUNUT1JfTEVOO1xuICAgICAgICBjb25zdCByZXQgPSB3YXNtLnRyYW5zbGF0ZShwdHIwLCBsZW4wLCBmcmFtZSk7XG4gICAgICAgIGRlZmVycmVkMl8wID0gcmV0WzBdO1xuICAgICAgICBkZWZlcnJlZDJfMSA9IHJldFsxXTtcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZ0Zyb21XYXNtMChyZXRbMF0sIHJldFsxXSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgd2FzbS5fX3diaW5kZ2VuX2ZyZWUoZGVmZXJyZWQyXzAsIGRlZmVycmVkMl8xLCAxKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRha2VGcm9tRXh0ZXJucmVmVGFibGUwKGlkeCkge1xuICAgIGNvbnN0IHZhbHVlID0gd2FzbS5fX3diaW5kZ2VuX2V4cG9ydF8wLmdldChpZHgpO1xuICAgIHdhc20uX19leHRlcm5yZWZfdGFibGVfZGVhbGxvYyhpZHgpO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGFcbiAqIEByZXR1cm5zIHthbnl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZV9mYXN0YShkYXRhKSB7XG4gICAgY29uc3QgcHRyMCA9IHBhc3NTdHJpbmdUb1dhc20wKGRhdGEsIHdhc20uX193YmluZGdlbl9tYWxsb2MsIHdhc20uX193YmluZGdlbl9yZWFsbG9jKTtcbiAgICBjb25zdCBsZW4wID0gV0FTTV9WRUNUT1JfTEVOO1xuICAgIGNvbnN0IHJldCA9IHdhc20ucGFyc2VfZmFzdGEocHRyMCwgbGVuMCk7XG4gICAgaWYgKHJldFsyXSkge1xuICAgICAgICB0aHJvdyB0YWtlRnJvbUV4dGVybnJlZlRhYmxlMChyZXRbMV0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFrZUZyb21FeHRlcm5yZWZUYWJsZTAocmV0WzBdKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VxdWVuY2VcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXZlcnNlX2NvbXBsZW1lbnQoc2VxdWVuY2UpIHtcbiAgICBsZXQgZGVmZXJyZWQyXzA7XG4gICAgbGV0IGRlZmVycmVkMl8xO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHB0cjAgPSBwYXNzU3RyaW5nVG9XYXNtMChzZXF1ZW5jZSwgd2FzbS5fX3diaW5kZ2VuX21hbGxvYywgd2FzbS5fX3diaW5kZ2VuX3JlYWxsb2MpO1xuICAgICAgICBjb25zdCBsZW4wID0gV0FTTV9WRUNUT1JfTEVOO1xuICAgICAgICBjb25zdCByZXQgPSB3YXNtLnJldmVyc2VfY29tcGxlbWVudChwdHIwLCBsZW4wKTtcbiAgICAgICAgZGVmZXJyZWQyXzAgPSByZXRbMF07XG4gICAgICAgIGRlZmVycmVkMl8xID0gcmV0WzFdO1xuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nRnJvbVdhc20wKHJldFswXSwgcmV0WzFdKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgICB3YXNtLl9fd2JpbmRnZW5fZnJlZShkZWZlcnJlZDJfMCwgZGVmZXJyZWQyXzEsIDEpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAZW51bSB7MCB8IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDcgfCA4IHwgOSB8IDEwIHwgMTEgfCAxMiB8IDEzIHwgMTQgfCAxNSB8IDE2IHwgMTcgfCAxOCB8IDE5IHwgMjAgfCAyMX1cbiAqL1xuZXhwb3J0IGNvbnN0IEFtaW5vQWNpZCA9IE9iamVjdC5mcmVlemUoe1xuICAgIEFsYTogMCwgXCIwXCI6IFwiQWxhXCIsXG4gICAgQXJnOiAxLCBcIjFcIjogXCJBcmdcIixcbiAgICBBc246IDIsIFwiMlwiOiBcIkFzblwiLFxuICAgIEFzcDogMywgXCIzXCI6IFwiQXNwXCIsXG4gICAgQ3lzOiA0LCBcIjRcIjogXCJDeXNcIixcbiAgICBHbG46IDUsIFwiNVwiOiBcIkdsblwiLFxuICAgIEdsdTogNiwgXCI2XCI6IFwiR2x1XCIsXG4gICAgR2x5OiA3LCBcIjdcIjogXCJHbHlcIixcbiAgICBIaXM6IDgsIFwiOFwiOiBcIkhpc1wiLFxuICAgIElsZTogOSwgXCI5XCI6IFwiSWxlXCIsXG4gICAgTGV1OiAxMCwgXCIxMFwiOiBcIkxldVwiLFxuICAgIEx5czogMTEsIFwiMTFcIjogXCJMeXNcIixcbiAgICBNZXQ6IDEyLCBcIjEyXCI6IFwiTWV0XCIsXG4gICAgUGhlOiAxMywgXCIxM1wiOiBcIlBoZVwiLFxuICAgIFBybzogMTQsIFwiMTRcIjogXCJQcm9cIixcbiAgICBTZXI6IDE1LCBcIjE1XCI6IFwiU2VyXCIsXG4gICAgVGhyOiAxNiwgXCIxNlwiOiBcIlRoclwiLFxuICAgIFRycDogMTcsIFwiMTdcIjogXCJUcnBcIixcbiAgICBUeXI6IDE4LCBcIjE4XCI6IFwiVHlyXCIsXG4gICAgVmFsOiAxOSwgXCIxOVwiOiBcIlZhbFwiLFxuICAgIFN0b3A6IDIwLCBcIjIwXCI6IFwiU3RvcFwiLFxuICAgIFVua25vd246IDIxLCBcIjIxXCI6IFwiVW5rbm93blwiLFxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19uZXdfNDA1ZTIyZjM5MDU3NmNlMigpIHtcbiAgICBjb25zdCByZXQgPSBuZXcgT2JqZWN0KCk7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19uZXdfNzhmZWIxMDhiNjQ3MjcxMygpIHtcbiAgICBjb25zdCByZXQgPSBuZXcgQXJyYXkoKTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3NldF8zNzgzNzAyM2YzZDc0MGU4KGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICBhcmcwW2FyZzEgPj4+IDBdID0gYXJnMjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19zZXRfM2ZkYTNiYWMwNzM5M2RlNChhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgYXJnMFthcmcxXSA9IGFyZzI7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9pbml0X2V4dGVybnJlZl90YWJsZSgpIHtcbiAgICBjb25zdCB0YWJsZSA9IHdhc20uX193YmluZGdlbl9leHBvcnRfMDtcbiAgICBjb25zdCBvZmZzZXQgPSB0YWJsZS5ncm93KDQpO1xuICAgIHRhYmxlLnNldCgwLCB1bmRlZmluZWQpO1xuICAgIHRhYmxlLnNldChvZmZzZXQgKyAwLCB1bmRlZmluZWQpO1xuICAgIHRhYmxlLnNldChvZmZzZXQgKyAxLCBudWxsKTtcbiAgICB0YWJsZS5zZXQob2Zmc2V0ICsgMiwgdHJ1ZSk7XG4gICAgdGFibGUuc2V0KG9mZnNldCArIDMsIGZhbHNlKTtcbiAgICA7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9zdHJpbmdfbmV3KGFyZzAsIGFyZzEpIHtcbiAgICBjb25zdCByZXQgPSBnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSk7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX3Rocm93KGFyZzAsIGFyZzEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpKTtcbn07XG5cbiIsImltcG9ydCB7IFNlcXVlbmNlVmlld2VyIH0gZnJvbSAnLi9zZXF1ZW5jZS12aWV3ZXInO1xuaW1wb3J0IHsgcGFyc2VfZmFzdGEsIHJldmVyc2VfY29tcGxlbWVudCwgdHJhbnNsYXRlLCBzZWFyY2ggfSBmcm9tICcuLi9wa2cvc2VxZWRpdF93YXNtJztcbmFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XG4gICAgY29uc3Qgc2VxdWVuY2VDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VxdWVuY2UtY2FudmFzJyk7XG4gICAgY29uc3QgbmFtZXNDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZXMtY2FudmFzJyk7XG4gICAgY29uc3QgcnVsZXJDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncnVsZXItY2FudmFzJyk7XG4gICAgY29uc3Qgdmlld2VyID0gbmV3IFNlcXVlbmNlVmlld2VyKHNlcXVlbmNlQ2FudmFzLCBuYW1lc0NhbnZhcywgcnVsZXJDYW52YXMpO1xuICAgIGNvbnN0IHVybElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VybC1pbnB1dCcpO1xuICAgIGNvbnN0IGxvYWRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZC1idXR0b24nKTtcbiAgICBjb25zdCByZXZDb21wQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JldmNvbXAtYnV0dG9uJyk7XG4gICAgY29uc3QgdHJhbnNsYXRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zbGF0ZS1idXR0b24nKTtcbiAgICBjb25zdCBmcmFtZUJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnJhbWUtYnV0dG9ucycpO1xuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1pbnB1dCcpO1xuICAgIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYnV0dG9uJyk7XG4gICAgbGV0IGlzVHJhbnNsYXRlZCA9IGZhbHNlO1xuICAgIGxldCBjdXJyZW50RnJhbWUgPSAxO1xuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRTZXF1ZW5jZXMoKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHVybElucHV0LnZhbHVlO1xuICAgICAgICBpZiAoIXVybClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgICAgICAgIGNvbnN0IGZhc3RhID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgY29uc3Qgc2VxdWVuY2VzRGF0YSA9IHBhcnNlX2Zhc3RhKGZhc3RhKTtcbiAgICAgICAgICAgIGNvbnN0IG5hbWVzID0gc2VxdWVuY2VzRGF0YS5tYXAocyA9PiBzLmlkKTtcbiAgICAgICAgICAgIGNvbnN0IHNlcXVlbmNlcyA9IHNlcXVlbmNlc0RhdGEubWFwKHMgPT4gcy5yZXNpZHVlcyk7XG4gICAgICAgICAgICB2aWV3ZXIuc2V0U2VxdWVuY2VzKG5hbWVzLCBzZXF1ZW5jZXMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBvciBwYXJzaW5nIEZBU1RBIGZpbGU6JywgZXJyb3IpO1xuICAgICAgICAgICAgYWxlcnQoJ0ZhaWxlZCB0byBsb2FkIHNlcXVlbmNlcy4gU2VlIGNvbnNvbGUgZm9yIGRldGFpbHMuJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9hZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRTZXF1ZW5jZXMpO1xuICAgIHJldkNvbXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kaWNlcyA9IHZpZXdlci5nZXRTZWxlY3RlZFNlcXVlbmNlSW5kaWNlcygpO1xuICAgICAgICBpZiAoc2VsZWN0ZWRJbmRpY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNlbGVjdGVkSW5kaWNlcy5mb3JFYWNoKHNlcUluZGV4ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFNlcXVlbmNlID0gdmlld2VyLmdldFNlcXVlbmNlcygpW3NlcUluZGV4XTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXZDb21wU2VxdWVuY2UgPSByZXZlcnNlX2NvbXBsZW1lbnQob3JpZ2luYWxTZXF1ZW5jZSk7XG4gICAgICAgICAgICAgICAgdmlld2VyLnVwZGF0ZVNlcXVlbmNlKHNlcUluZGV4LCByZXZDb21wU2VxdWVuY2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2aWV3ZXIuY2xlYXJTZWxlY3RlZFNlcXVlbmNlTmFtZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KCdQbGVhc2Ugc2VsZWN0IG9uZSBvciBtb3JlIHNlcXVlbmNlcyB0byByZXZlcnNlIGNvbXBsZW1lbnQuJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVBbGwoZnJhbWUpIHtcbiAgICAgICAgY29uc3Qgc2VxdWVuY2VzID0gdmlld2VyLmdldFNlcXVlbmNlcygpO1xuICAgICAgICBjb25zdCB0cmFuc2xhdGVkU2VxdWVuY2VzID0gc2VxdWVuY2VzLm1hcChzZXEgPT4gdHJhbnNsYXRlKHNlcSwgZnJhbWUpKTtcbiAgICAgICAgdmlld2VyLnNldFRyYW5zbGF0ZWRTZXF1ZW5jZXModHJhbnNsYXRlZFNlcXVlbmNlcywgZnJhbWUpO1xuICAgICAgICBjdXJyZW50RnJhbWUgPSBmcmFtZTtcbiAgICAgICAgaXNUcmFuc2xhdGVkID0gdHJ1ZTtcbiAgICAgICAgdHJhbnNsYXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ051Y2xlb3RpZGUgTW9kZSc7XG4gICAgICAgIGZyYW1lQnV0dG9ucy5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG4gICAgfVxuICAgIHRyYW5zbGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RyYW5zbGF0ZSBidXR0b24gY2xpY2tlZCcsIGlzVHJhbnNsYXRlZCk7XG4gICAgICAgIGlmIChpc1RyYW5zbGF0ZWQpIHtcbiAgICAgICAgICAgIHZpZXdlci5zZXROdWNsZW90aWRlTW9kZSgpO1xuICAgICAgICAgICAgaXNUcmFuc2xhdGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0cmFuc2xhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnVHJhbnNsYXRlJztcbiAgICAgICAgICAgIGZyYW1lQnV0dG9ucy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdHJhbnNsYXRlQWxsKGN1cnJlbnRGcmFtZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBzZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoSW5wdXQudmFsdWU7XG4gICAgICAgIGlmICghcXVlcnkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHNlcXVlbmNlcyA9IHZpZXdlci5nZXRTZXF1ZW5jZXMoKTtcbiAgICAgICAgY29uc3Qgc2VhcmNoUmVzdWx0cyA9IHNlcXVlbmNlcy5tYXAoc2VxID0+IHNlYXJjaChzZXEsIHF1ZXJ5KSk7XG4gICAgICAgIHZpZXdlci5zZXRTZWFyY2hSZXN1bHRzKHNlYXJjaFJlc3VsdHMpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmFtZTEtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0cmFuc2xhdGVBbGwoMSkpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmFtZTItYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0cmFuc2xhdGVBbGwoMikpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmFtZTMtYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0cmFuc2xhdGVBbGwoMykpO1xuICAgIC8vIExvYWQgZGVmYXVsdCBzZXF1ZW5jZXMgb24gcGFnZSBsb2FkXG4gICAgbG9hZFNlcXVlbmNlcygpO1xufVxubWFpbigpO1xuIiwiZXhwb3J0IGNsYXNzIFNlcXVlbmNlVmlld2VyIHtcbiAgICBzZXF1ZW5jZUNhbnZhcztcbiAgICBuYW1lc0NhbnZhcztcbiAgICBydWxlckNhbnZhcztcbiAgICBzZXFDdHg7XG4gICAgbmFtZXNDdHg7XG4gICAgcnVsZXJDdHg7XG4gICAgc2VxdWVuY2VzID0gW107XG4gICAgbmFtZXMgPSBbXTtcbiAgICBzZWxlY3RlZFNlcXVlbmNlTmFtZXMgPSBuZXcgU2V0KCk7XG4gICAgY29sb3JzID0ge1xuICAgICAgICAnQSc6IHsgZm9yZWdyb3VuZDogJyMwMTgwMDEnLCBiYWNrZ3JvdW5kOiAnIzVBREM1QScgfSwgLy8gR3JlZW4gZm9yZWdyb3VuZCwgbGlnaHQgZ3JlZW4gYmFja2dyb3VuZFxuICAgICAgICAnQyc6IHsgZm9yZWdyb3VuZDogJyMwMTAxRkYnLCBiYWNrZ3JvdW5kOiAnIzY0NjRGQScgfSwgLy8gQmx1ZSBmb3JlZ3JvdW5kLCBsaWdodCBibHVlIGJhY2tncm91bmRcbiAgICAgICAgJ0cnOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyM1QTVBNUEnIH0sIC8vIEJsYWNrIGZvcmVncm91bmQsIGRhcmsgZ3JheSBiYWNrZ3JvdW5kXG4gICAgICAgICdUJzogeyBmb3JlZ3JvdW5kOiAnI0ZGMDEwMScsIGJhY2tncm91bmQ6ICcjRjU4MjgyJyB9LCAvLyBSZWQgZm9yZWdyb3VuZCwgbGlnaHQgcmVkIGJhY2tncm91bmRcbiAgICAgICAgJ1UnOiB7IGZvcmVncm91bmQ6ICcjRkYwMTAxJywgYmFja2dyb3VuZDogJyNGNTgyODInIH0sIC8vIFNhbWUgYXMgVFxuICAgICAgICAnUic6IHsgZm9yZWdyb3VuZDogJyNGRjAwRkYnLCBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicgfSwgLy8gTWFnZW50YSBmb3JlZ3JvdW5kLCB3aGl0ZSBiYWNrZ3JvdW5kXG4gICAgICAgICdZJzogeyBmb3JlZ3JvdW5kOiAnI0ZGMDBGRicsIGJhY2tncm91bmQ6ICcjRkZGRkZGJyB9LFxuICAgICAgICAnUyc6IHsgZm9yZWdyb3VuZDogJyNGRjAwRkYnLCBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicgfSxcbiAgICAgICAgJ1cnOiB7IGZvcmVncm91bmQ6ICcjRkYwMEZGJywgYmFja2dyb3VuZDogJyNGRkZGRkYnIH0sXG4gICAgICAgICdLJzogeyBmb3JlZ3JvdW5kOiAnI0ZGMDBGRicsIGJhY2tncm91bmQ6ICcjRkZGRkZGJyB9LFxuICAgICAgICAnTSc6IHsgZm9yZWdyb3VuZDogJyNGRjAwRkYnLCBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicgfSxcbiAgICAgICAgJ0InOiB7IGZvcmVncm91bmQ6ICcjRkYwMEZGJywgYmFja2dyb3VuZDogJyNGRkZGRkYnIH0sXG4gICAgICAgICdEJzogeyBmb3JlZ3JvdW5kOiAnI0ZGMDBGRicsIGJhY2tncm91bmQ6ICcjRkZGRkZGJyB9LFxuICAgICAgICAnSCc6IHsgZm9yZWdyb3VuZDogJyNGRjAwRkYnLCBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicgfSxcbiAgICAgICAgJ1YnOiB7IGZvcmVncm91bmQ6ICcjRkYwMEZGJywgYmFja2dyb3VuZDogJyNGRkZGRkYnIH0sXG4gICAgICAgICdOJzogeyBmb3JlZ3JvdW5kOiAnI0ZGMDBGRicsIGJhY2tncm91bmQ6ICcjRkZGRkZGJyB9LCAvLyBNYWdlbnRhIGZvcmVncm91bmQsIHdoaXRlIGJhY2tncm91bmRcbiAgICAgICAgJy0nOiB7IGZvcmVncm91bmQ6ICcjODA4MDgwJywgYmFja2dyb3VuZDogJyNGQUZBRkEnIH0sIC8vIERhcmsgZ3JheSBmb3JlZ3JvdW5kLCBsaWdodCBncmF5IGJhY2tncm91bmQgKEdBUClcbiAgICB9O1xuICAgIGFtaW5vQWNpZENvbG9ycyA9IHtcbiAgICAgICAgJ0EnOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyMyNzZFQjcnIH0sXG4gICAgICAgICdDJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjRTY4MDgwJyB9LFxuICAgICAgICAnRCc6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnI0NDNERDQycgfSxcbiAgICAgICAgJ0UnOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyM5ODQwOTcnIH0sXG4gICAgICAgICdGJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjMTk4MEU2JyB9LFxuICAgICAgICAnRyc6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnI0U2OTk0RCcgfSxcbiAgICAgICAgJ0gnOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyMxOUIzQjMnIH0sXG4gICAgICAgICdJJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjNEU5QkYzJyB9LFxuICAgICAgICAnSyc6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnI0U2MzMxOScgfSxcbiAgICAgICAgJ0wnOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyM3OEE2RDUnIH0sXG4gICAgICAgICdNJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjMEY1NDlCJyB9LFxuICAgICAgICAnTic6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnIzE5Q0MxOScgfSxcbiAgICAgICAgJ1AnOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyNDQ0NDMDAnIH0sXG4gICAgICAgICdRJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjNUNFRDVDJyB9LFxuICAgICAgICAnUic6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnI0Y2NDQyQycgfSxcbiAgICAgICAgJ1MnOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyMwMjk2MDInIH0sXG4gICAgICAgICdUJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjNDVDOTQ1JyB9LFxuICAgICAgICAnVic6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnIzA0N0RGOScgfSxcbiAgICAgICAgJ1cnOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyMwMzU1QTknIH0sXG4gICAgICAgICdZJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjMTRDNkM4JyB9LFxuICAgICAgICAnKic6IHsgZm9yZWdyb3VuZDogJyMwMEZGRkYnLCBiYWNrZ3JvdW5kOiAnIzY5Njk2OScgfSwgLy8gU1RPUCBjb2RvbiAoZGFya0dyYXkpXG4gICAgICAgICctJzogeyBmb3JlZ3JvdW5kOiAnI0E5QTlBOScsIGJhY2tncm91bmQ6ICcjRTZFNkU2JyB9LCAvLyBHQVAgKGRhcmtHcmF5LCAyMzAsMjMwLDIzMClcbiAgICAgICAgJ1gnOiB7IGZvcmVncm91bmQ6ICcjMDBGRkZGJywgYmFja2dyb3VuZDogJyNGRkZGRkYnIH0sIC8vIFVua25vd24gKGN5YW4sIHdoaXRlKVxuICAgIH07XG4gICAgYmxvY2tXaWR0aCA9IDIwO1xuICAgIGJsb2NrSGVpZ2h0ID0gMjA7XG4gICAgc2Nyb2xsWCA9IDA7XG4gICAgc2Nyb2xsWSA9IDA7XG4gICAgbWF4U2VxdWVuY2VMZW5ndGggPSAwO1xuICAgIGlzUmVkcmF3U2NoZWR1bGVkID0gZmFsc2U7XG4gICAgc2VsZWN0aW9uU3RhcnQgPSBudWxsO1xuICAgIHNlbGVjdGlvbkVuZCA9IG51bGw7XG4gICAgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgIGlzRHJhZ2dpbmdIU2Nyb2xsYmFyID0gZmFsc2U7XG4gICAgaXNEcmFnZ2luZ1ZTY3JvbGxiYXIgPSBmYWxzZTtcbiAgICBsYXN0TW91c2VYID0gMDtcbiAgICBsYXN0TW91c2VZID0gMDtcbiAgICBzY3JvbGxiYXJXaWR0aCA9IDEwO1xuICAgIHNjcm9sbGJhckNvbG9yID0gJyM4ODgnO1xuICAgIHNjcm9sbGJhclRyYWNrQ29sb3IgPSAnI2YxZjFmMSc7XG4gICAgZGlzcGxheU1vZGUgPSAnbnVjbGVvdGlkZSc7XG4gICAgdHJhbnNsYXRlZFNlcXVlbmNlcyA9IFtdO1xuICAgIGN1cnJlbnRSZWFkaW5nRnJhbWUgPSAxO1xuICAgIGNvbnN0cnVjdG9yKHNlcXVlbmNlQ2FudmFzLCBuYW1lc0NhbnZhcywgcnVsZXJDYW52YXMpIHtcbiAgICAgICAgdGhpcy5zZXF1ZW5jZUNhbnZhcyA9IHNlcXVlbmNlQ2FudmFzO1xuICAgICAgICB0aGlzLm5hbWVzQ2FudmFzID0gbmFtZXNDYW52YXM7XG4gICAgICAgIHRoaXMucnVsZXJDYW52YXMgPSBydWxlckNhbnZhcztcbiAgICAgICAgdGhpcy5zZXFDdHggPSBzZXF1ZW5jZUNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLm5hbWVzQ3R4ID0gbmFtZXNDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5ydWxlckN0eCA9IHJ1bGVyQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMuc2VxdWVuY2VDYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLm9uV2hlZWwuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMubmFtZXNDYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLm9uV2hlZWwuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMubmFtZXNDYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk5hbWVzQ2FudmFzTW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnNlcXVlbmNlQ2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuc2VxdWVuY2VDYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5zZXF1ZW5jZUNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMucmVzaXplQ2FudmFzKCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZUNhbnZhcy5iaW5kKHRoaXMpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgc2V0U2VxdWVuY2VzKG5hbWVzLCBzZXF1ZW5jZXMpIHtcbiAgICAgICAgdGhpcy5uYW1lcyA9IG5hbWVzO1xuICAgICAgICB0aGlzLnNlcXVlbmNlcyA9IHNlcXVlbmNlcztcbiAgICAgICAgdGhpcy5tYXhTZXF1ZW5jZUxlbmd0aCA9IE1hdGgubWF4KC4uLnNlcXVlbmNlcy5tYXAocyA9PiBzLmxlbmd0aCkpO1xuICAgICAgICB0aGlzLnNjcm9sbFggPSAwO1xuICAgICAgICB0aGlzLnNjcm9sbFkgPSAwO1xuICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSBudWxsO1xuICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICB9XG4gICAgZ2V0U2VsZWN0ZWRTZXF1ZW5jZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvblN0YXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2VxSW5kZXg6IHRoaXMuc2VsZWN0aW9uU3RhcnQuc2VxSW5kZXgsXG4gICAgICAgICAgICBzZXF1ZW5jZTogdGhpcy5zZXF1ZW5jZXNbdGhpcy5zZWxlY3Rpb25TdGFydC5zZXFJbmRleF1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgdXBkYXRlU2VxdWVuY2Uoc2VxSW5kZXgsIG5ld1NlcXVlbmNlKSB7XG4gICAgICAgIHRoaXMuc2VxdWVuY2VzW3NlcUluZGV4XSA9IG5ld1NlcXVlbmNlO1xuICAgICAgICB0aGlzLm1heFNlcXVlbmNlTGVuZ3RoID0gTWF0aC5tYXgoLi4udGhpcy5zZXF1ZW5jZXMubWFwKHMgPT4gcy5sZW5ndGgpKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgfVxuICAgIGdldFNlcXVlbmNlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VxdWVuY2VzO1xuICAgIH1cbiAgICBnZXRTZWxlY3RlZFNlcXVlbmNlSW5kaWNlcygpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5zZWxlY3RlZFNlcXVlbmNlTmFtZXMpO1xuICAgIH1cbiAgICBjbGVhclNlbGVjdGVkU2VxdWVuY2VOYW1lcygpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFNlcXVlbmNlTmFtZXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgfVxuICAgIHNldFRyYW5zbGF0ZWRTZXF1ZW5jZXMoc2VxdWVuY2VzLCBmcmFtZSkge1xuICAgICAgICB0aGlzLnRyYW5zbGF0ZWRTZXF1ZW5jZXMgPSBzZXF1ZW5jZXM7XG4gICAgICAgIHRoaXMuY3VycmVudFJlYWRpbmdGcmFtZSA9IGZyYW1lO1xuICAgICAgICB0aGlzLmRpc3BsYXlNb2RlID0gJ2FtaW5vYWNpZCc7XG4gICAgICAgIHRoaXMuc2Nyb2xsWCA9IDA7XG4gICAgICAgIHRoaXMuc2Nyb2xsWSA9IDA7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IG51bGw7XG4gICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgIH1cbiAgICBzZXROdWNsZW90aWRlTW9kZSgpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5TW9kZSA9ICdudWNsZW90aWRlJztcbiAgICAgICAgdGhpcy5zY3JvbGxYID0gMDtcbiAgICAgICAgdGhpcy5zY3JvbGxZID0gMDtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IG51bGw7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgfVxuICAgIHJlc2l6ZUNhbnZhcygpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5zZXF1ZW5jZUNhbnZhcy5wYXJlbnRFbGVtZW50O1xuICAgICAgICB0aGlzLnNlcXVlbmNlQ2FudmFzLndpZHRoID0gcGFyZW50LmNsaWVudFdpZHRoO1xuICAgICAgICB0aGlzLnNlcXVlbmNlQ2FudmFzLmhlaWdodCA9IHBhcmVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGNvbnN0IG5hbWVzUGFyZW50ID0gdGhpcy5uYW1lc0NhbnZhcy5wYXJlbnRFbGVtZW50O1xuICAgICAgICB0aGlzLm5hbWVzQ2FudmFzLndpZHRoID0gbmFtZXNQYXJlbnQuY2xpZW50V2lkdGg7XG4gICAgICAgIHRoaXMubmFtZXNDYW52YXMuaGVpZ2h0ID0gbmFtZXNQYXJlbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICBjb25zdCBydWxlclBhcmVudCA9IHRoaXMucnVsZXJDYW52YXMucGFyZW50RWxlbWVudDtcbiAgICAgICAgdGhpcy5ydWxlckNhbnZhcy53aWR0aCA9IHJ1bGVyUGFyZW50LmNsaWVudFdpZHRoO1xuICAgICAgICB0aGlzLnJ1bGVyQ2FudmFzLmhlaWdodCA9IDIwO1xuICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICB9XG4gICAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuc2VxdWVuY2VDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xuICAgICAgICAvLyBDaGVjayBmb3IgaG9yaXpvbnRhbCBzY3JvbGxiYXIgY2xpY2tcbiAgICAgICAgY29uc3QgY29udGVudFdpZHRoID0gdGhpcy5tYXhTZXF1ZW5jZUxlbmd0aCAqIHRoaXMuYmxvY2tXaWR0aDtcbiAgICAgICAgY29uc3QgY2FudmFzV2lkdGggPSB0aGlzLnNlcXVlbmNlQ2FudmFzLndpZHRoO1xuICAgICAgICBjb25zdCBjYW52YXNIZWlnaHQgPSB0aGlzLnNlcXVlbmNlQ2FudmFzLmhlaWdodDtcbiAgICAgICAgaWYgKGNvbnRlbnRXaWR0aCA+IGNhbnZhc1dpZHRoICYmIHkgPj0gY2FudmFzSGVpZ2h0IC0gdGhpcy5zY3JvbGxiYXJXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy5pc0RyYWdnaW5nSFNjcm9sbGJhciA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxhc3RNb3VzZVggPSB4O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIGZvciB2ZXJ0aWNhbCBzY3JvbGxiYXIgY2xpY2tcbiAgICAgICAgY29uc3QgY29udGVudEhlaWdodCA9IHRoaXMuc2VxdWVuY2VzLmxlbmd0aCAqIHRoaXMuYmxvY2tIZWlnaHQ7XG4gICAgICAgIGlmIChjb250ZW50SGVpZ2h0ID4gY2FudmFzSGVpZ2h0ICYmIHggPj0gY2FudmFzV2lkdGggLSB0aGlzLnNjcm9sbGJhcldpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmdWU2Nyb2xsYmFyID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGFzdE1vdXNlWSA9IHk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgc2VxSW5kZXggPSBNYXRoLmZsb29yKCh5ICsgdGhpcy5zY3JvbGxZKSAvIHRoaXMuYmxvY2tIZWlnaHQpO1xuICAgICAgICBjb25zdCBwb3MgPSBNYXRoLmZsb29yKCh4ICsgdGhpcy5zY3JvbGxYKSAvIHRoaXMuYmxvY2tXaWR0aCk7XG4gICAgICAgIGlmIChzZXFJbmRleCA+PSAwICYmIHNlcUluZGV4IDwgdGhpcy5zZXF1ZW5jZXMubGVuZ3RoICYmIHBvcyA+PSAwICYmIHBvcyA8IHRoaXMuc2VxdWVuY2VzW3NlcUluZGV4XS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSB7IHNlcUluZGV4LCBwb3MgfTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0geyBzZXFJbmRleCwgcG9zIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICB9XG4gICAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMuc2VxdWVuY2VDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xuICAgICAgICBpZiAodGhpcy5pc0RyYWdnaW5nSFNjcm9sbGJhcikge1xuICAgICAgICAgICAgY29uc3QgY29udGVudFdpZHRoID0gdGhpcy5tYXhTZXF1ZW5jZUxlbmd0aCAqIHRoaXMuYmxvY2tXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhc1dpZHRoID0gdGhpcy5zZXF1ZW5jZUNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGJhclRyYWNrV2lkdGggPSBjYW52YXNXaWR0aCAtIHRoaXMuc2Nyb2xsYmFyV2lkdGg7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxiYXJUaHVtYldpZHRoID0gTWF0aC5tYXgoNTAsIHNjcm9sbGJhclRyYWNrV2lkdGggKiAoY2FudmFzV2lkdGggLyBjb250ZW50V2lkdGgpKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhWCA9IHggLSB0aGlzLmxhc3RNb3VzZVg7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxSYXRpbyA9IChjb250ZW50V2lkdGggLSBjYW52YXNXaWR0aCkgLyAoc2Nyb2xsYmFyVHJhY2tXaWR0aCAtIHNjcm9sbGJhclRodW1iV2lkdGgpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxYICs9IGRlbHRhWCAqIHNjcm9sbFJhdGlvO1xuICAgICAgICAgICAgdGhpcy5sYXN0TW91c2VYID0geDtcbiAgICAgICAgICAgIGNvbnN0IG1heFNjcm9sbFggPSBjb250ZW50V2lkdGggLSBjYW52YXNXaWR0aDtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsWCA9IE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMuc2Nyb2xsWCwgbWF4U2Nyb2xsWCkpO1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2luZ1ZTY3JvbGxiYXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSB0aGlzLnNlcXVlbmNlcy5sZW5ndGggKiB0aGlzLmJsb2NrSGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gdGhpcy5zZXF1ZW5jZUNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxiYXJUcmFja0hlaWdodCA9IGNhbnZhc0hlaWdodCAtIHRoaXMuc2Nyb2xsYmFyV2lkdGg7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxiYXJUaHVtYkhlaWdodCA9IE1hdGgubWF4KDUwLCBzY3JvbGxiYXJUcmFja0hlaWdodCAqIChjYW52YXNIZWlnaHQgLyBjb250ZW50SGVpZ2h0KSk7XG4gICAgICAgICAgICBjb25zdCBkZWx0YVkgPSB5IC0gdGhpcy5sYXN0TW91c2VZO1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsUmF0aW8gPSAoY29udGVudEhlaWdodCAtIGNhbnZhc0hlaWdodCkgLyAoc2Nyb2xsYmFyVHJhY2tIZWlnaHQgLSBzY3JvbGxiYXJUaHVtYkhlaWdodCk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFkgKz0gZGVsdGFZICogc2Nyb2xsUmF0aW87XG4gICAgICAgICAgICB0aGlzLmxhc3RNb3VzZVkgPSB5O1xuICAgICAgICAgICAgY29uc3QgbWF4U2Nyb2xsWSA9IGNvbnRlbnRIZWlnaHQgLSBjYW52YXNIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFkgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLnNjcm9sbFksIG1heFNjcm9sbFkpKTtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pc0RyYWdnaW5nIHx8ICF0aGlzLnNlbGVjdGlvblN0YXJ0KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBzZXFJbmRleCA9IE1hdGguZmxvb3IoKHkgKyB0aGlzLnNjcm9sbFkpIC8gdGhpcy5ibG9ja0hlaWdodCk7XG4gICAgICAgIGNvbnN0IHBvcyA9IE1hdGguZmxvb3IoKHggKyB0aGlzLnNjcm9sbFgpIC8gdGhpcy5ibG9ja1dpZHRoKTtcbiAgICAgICAgLy8gQWxsb3cgc2VsZWN0aW9uIGFjcm9zcyBtdWx0aXBsZSBzZXF1ZW5jZXNcbiAgICAgICAgaWYgKHNlcUluZGV4ID49IDAgJiYgc2VxSW5kZXggPCB0aGlzLnNlcXVlbmNlcy5sZW5ndGggJiYgcG9zID49IDAgJiYgcG9zIDw9IHRoaXMuc2VxdWVuY2VzW3NlcUluZGV4XS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0geyBzZXFJbmRleCwgcG9zIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgfVxuICAgIG9uTW91c2VVcChldmVudCkge1xuICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nSFNjcm9sbGJhciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRHJhZ2dpbmdWU2Nyb2xsYmFyID0gZmFsc2U7XG4gICAgfVxuICAgIGdldFNlbGVjdGVkVGV4dCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvblN0YXJ0IHx8ICF0aGlzLnNlbGVjdGlvbkVuZCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0Um93ID0gTWF0aC5taW4odGhpcy5zZWxlY3Rpb25TdGFydC5zZXFJbmRleCwgdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXgpO1xuICAgICAgICBjb25zdCBlbmRSb3cgPSBNYXRoLm1heCh0aGlzLnNlbGVjdGlvblN0YXJ0LnNlcUluZGV4LCB0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCk7XG4gICAgICAgIGNvbnN0IHN0YXJ0Q29sID0gTWF0aC5taW4odGhpcy5zZWxlY3Rpb25TdGFydC5wb3MsIHRoaXMuc2VsZWN0aW9uRW5kLnBvcyk7XG4gICAgICAgIGNvbnN0IGVuZENvbCA9IE1hdGgubWF4KHRoaXMuc2VsZWN0aW9uU3RhcnQucG9zLCB0aGlzLnNlbGVjdGlvbkVuZC5wb3MpO1xuICAgICAgICBsZXQgc2VsZWN0ZWRUZXh0ID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydFJvdzsgaSA8PSBlbmRSb3c7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc2VxdWVuY2UgPSB0aGlzLnNlcXVlbmNlc1tpXTtcbiAgICAgICAgICAgIHNlbGVjdGVkVGV4dCArPSBzZXF1ZW5jZS5zdWJzdHJpbmcoc3RhcnRDb2wsIGVuZENvbCArIDEpOyAvLyArMSBiZWNhdXNlIHN1YnN0cmluZyBlbmQgaXMgZXhjbHVzaXZlXG4gICAgICAgICAgICBpZiAoaSA8IGVuZFJvdykge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkVGV4dCArPSAnXFxuJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRUZXh0O1xuICAgIH1cbiAgICBkZWxldGVTZWxlY3RlZFJhbmdlKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uU3RhcnQgfHwgIXRoaXMuc2VsZWN0aW9uRW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGFydFJvdyA9IE1hdGgubWluKHRoaXMuc2VsZWN0aW9uU3RhcnQuc2VxSW5kZXgsIHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4KTtcbiAgICAgICAgY29uc3QgZW5kUm93ID0gTWF0aC5tYXgodGhpcy5zZWxlY3Rpb25TdGFydC5zZXFJbmRleCwgdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXgpO1xuICAgICAgICBjb25zdCBzdGFydENvbCA9IE1hdGgubWluKHRoaXMuc2VsZWN0aW9uU3RhcnQucG9zLCB0aGlzLnNlbGVjdGlvbkVuZC5wb3MpO1xuICAgICAgICBjb25zdCBlbmRDb2wgPSBNYXRoLm1heCh0aGlzLnNlbGVjdGlvblN0YXJ0LnBvcywgdGhpcy5zZWxlY3Rpb25FbmQucG9zKTtcbiAgICAgICAgY29uc3QgbmV3Q3Vyc29yUG9zID0geyBzZXFJbmRleDogc3RhcnRSb3csIHBvczogc3RhcnRDb2wgfTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0Um93OyBpIDw9IGVuZFJvdzsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFNlcXVlbmNlID0gdGhpcy5zZXF1ZW5jZXNbaV07XG4gICAgICAgICAgICBjb25zdCBuZXdTZXF1ZW5jZSA9IG9yaWdpbmFsU2VxdWVuY2Uuc2xpY2UoMCwgc3RhcnRDb2wpICsgb3JpZ2luYWxTZXF1ZW5jZS5zbGljZShlbmRDb2wgKyAxKTtcbiAgICAgICAgICAgIHRoaXMuc2VxdWVuY2VzW2ldID0gbmV3U2VxdWVuY2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXhTZXF1ZW5jZUxlbmd0aCA9IE1hdGgubWF4KC4uLnRoaXMuc2VxdWVuY2VzLm1hcChzID0+IHMubGVuZ3RoKSk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSBudWxsOyAvLyBDbGVhciBzZWxlY3Rpb25cbiAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSBudWxsO1xuICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICAgICAgcmV0dXJuIG5ld0N1cnNvclBvcztcbiAgICB9XG4gICAgZGVsZXRlQ2hhcmFjdGVyKGlzQmFja3NwYWNlKSB7XG4gICAgICAgIGlmICghdGhpcy5zZWxlY3Rpb25TdGFydCB8fCAhdGhpcy5zZWxlY3Rpb25FbmQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGFydFJvdyA9IE1hdGgubWluKHRoaXMuc2VsZWN0aW9uU3RhcnQuc2VxSW5kZXgsIHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4KTtcbiAgICAgICAgY29uc3QgZW5kUm93ID0gTWF0aC5tYXgodGhpcy5zZWxlY3Rpb25TdGFydC5zZXFJbmRleCwgdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXgpO1xuICAgICAgICBsZXQgc3RhcnRDb2wgPSBNYXRoLm1pbih0aGlzLnNlbGVjdGlvblN0YXJ0LnBvcywgdGhpcy5zZWxlY3Rpb25FbmQucG9zKTtcbiAgICAgICAgaWYgKGlzQmFja3NwYWNlKSB7XG4gICAgICAgICAgICBpZiAoc3RhcnRDb2wgPiAwKSB7XG4gICAgICAgICAgICAgICAgc3RhcnRDb2wtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRSb3c7IGkgPD0gZW5kUm93OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU2VxdWVuY2UgPSB0aGlzLnNlcXVlbmNlc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1NlcXVlbmNlID0gb3JpZ2luYWxTZXF1ZW5jZS5zbGljZSgwLCBzdGFydENvbCkgKyBvcmlnaW5hbFNlcXVlbmNlLnNsaWNlKHN0YXJ0Q29sICsgMSk7XG4gICAgICAgICAgICB0aGlzLnNlcXVlbmNlc1tpXSA9IG5ld1NlcXVlbmNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWF4U2VxdWVuY2VMZW5ndGggPSBNYXRoLm1heCguLi50aGlzLnNlcXVlbmNlcy5tYXAocyA9PiBzLmxlbmd0aCkpO1xuICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0geyBzZXFJbmRleDogc3RhcnRSb3csIHBvczogc3RhcnRDb2wgfTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSB0aGlzLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICB9XG4gICAgaW5zZXJ0Q2hhcmFjdGVyKGNoYXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvblN0YXJ0IHx8ICF0aGlzLnNlbGVjdGlvbkVuZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0Um93ID0gTWF0aC5taW4odGhpcy5zZWxlY3Rpb25TdGFydC5zZXFJbmRleCwgdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXgpO1xuICAgICAgICBjb25zdCBlbmRSb3cgPSBNYXRoLm1heCh0aGlzLnNlbGVjdGlvblN0YXJ0LnNlcUluZGV4LCB0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCk7XG4gICAgICAgIGNvbnN0IHN0YXJ0Q29sID0gTWF0aC5taW4odGhpcy5zZWxlY3Rpb25TdGFydC5wb3MsIHRoaXMuc2VsZWN0aW9uRW5kLnBvcyk7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydFJvdzsgaSA8PSBlbmRSb3c7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxTZXF1ZW5jZSA9IHRoaXMuc2VxdWVuY2VzW2ldO1xuICAgICAgICAgICAgY29uc3QgbmV3U2VxdWVuY2UgPSBvcmlnaW5hbFNlcXVlbmNlLnNsaWNlKDAsIHN0YXJ0Q29sKSArIGNoYXIgKyBvcmlnaW5hbFNlcXVlbmNlLnNsaWNlKHN0YXJ0Q29sKTtcbiAgICAgICAgICAgIHRoaXMuc2VxdWVuY2VzW2ldID0gbmV3U2VxdWVuY2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXhTZXF1ZW5jZUxlbmd0aCA9IE1hdGgubWF4KC4uLnRoaXMuc2VxdWVuY2VzLm1hcChzID0+IHMubGVuZ3RoKSk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSB7IHNlcUluZGV4OiBzdGFydFJvdywgcG9zOiBzdGFydENvbCArIDEgfTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSB0aGlzLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICB9XG4gICAgZmlsbFNlbGVjdGlvbihjaGFyKSB7XG4gICAgICAgIGlmICghdGhpcy5zZWxlY3Rpb25TdGFydCB8fCAhdGhpcy5zZWxlY3Rpb25FbmQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGFydFJvdyA9IE1hdGgubWluKHRoaXMuc2VsZWN0aW9uU3RhcnQuc2VxSW5kZXgsIHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4KTtcbiAgICAgICAgY29uc3QgZW5kUm93ID0gTWF0aC5tYXgodGhpcy5zZWxlY3Rpb25TdGFydC5zZXFJbmRleCwgdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXgpO1xuICAgICAgICBjb25zdCBzdGFydENvbCA9IE1hdGgubWluKHRoaXMuc2VsZWN0aW9uU3RhcnQucG9zLCB0aGlzLnNlbGVjdGlvbkVuZC5wb3MpO1xuICAgICAgICBjb25zdCBlbmRDb2wgPSBNYXRoLm1heCh0aGlzLnNlbGVjdGlvblN0YXJ0LnBvcywgdGhpcy5zZWxlY3Rpb25FbmQucG9zKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0Um93OyBpIDw9IGVuZFJvdzsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFNlcXVlbmNlID0gdGhpcy5zZXF1ZW5jZXNbaV07XG4gICAgICAgICAgICBsZXQgbmV3U2VxdWVuY2VBcnJheSA9IG9yaWdpbmFsU2VxdWVuY2Uuc3BsaXQoJycpO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IHN0YXJ0Q29sOyBqIDw9IGVuZENvbDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGogPCBuZXdTZXF1ZW5jZUFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdTZXF1ZW5jZUFycmF5W2pdID0gY2hhcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNlcXVlbmNlc1tpXSA9IG5ld1NlcXVlbmNlQXJyYXkuam9pbignJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXhTZXF1ZW5jZUxlbmd0aCA9IE1hdGgubWF4KC4uLnRoaXMuc2VxdWVuY2VzLm1hcChzID0+IHMubGVuZ3RoKSk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSBudWxsOyAvLyBDbGVhciBzZWxlY3Rpb25cbiAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSBudWxsO1xuICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICB9XG4gICAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5zZWxlY3Rpb25TdGFydClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpID09PSAnYycpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVGV4dCA9IHRoaXMuZ2V0U2VsZWN0ZWRUZXh0KCk7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChzZWxlY3RlZFRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5LnRvTG93ZXJDYXNlKCkgPT09ICd2Jykge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC5yZWFkVGV4dCgpLnRoZW4odGV4dCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0ICYmIHRoaXMuc2VsZWN0aW9uU3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgc2VxSW5kZXggfSA9IHRoaXMuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IE1hdGgubWluKHRoaXMuc2VsZWN0aW9uU3RhcnQucG9zLCB0aGlzLnNlbGVjdGlvbkVuZC5wb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5kID0gTWF0aC5tYXgodGhpcy5zZWxlY3Rpb25TdGFydC5wb3MsIHRoaXMuc2VsZWN0aW9uRW5kLnBvcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFNlcXVlbmNlID0gdGhpcy5zZXF1ZW5jZXNbc2VxSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U2VxdWVuY2UgPSBvcmlnaW5hbFNlcXVlbmNlLnNsaWNlKDAsIHN0YXJ0KSArIHRleHQgKyBvcmlnaW5hbFNlcXVlbmNlLnNsaWNlKGVuZCArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXF1ZW5jZXNbc2VxSW5kZXhdID0gbmV3U2VxdWVuY2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0geyBzZXFJbmRleCwgcG9zOiBzdGFydCArIHRleHQubGVuZ3RoIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IHRoaXMuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1heFNlcXVlbmNlTGVuZ3RoID0gTWF0aC5tYXgoLi4udGhpcy5zZXF1ZW5jZXMubWFwKHMgPT4gcy5sZW5ndGgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc2VxSW5kZXgsIHBvcyB9ID0gdGhpcy5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgY29uc3QgaXVwYWNDaGFyYWN0ZXJzID0gJ0FDR1RVUllTV0tNQkRIVk4tJztcbiAgICAgICAgaWYgKGl1cGFjQ2hhcmFjdGVycy5pbmNsdWRlcyhldmVudC5rZXkudG9VcHBlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb25TdGFydCAmJiB0aGlzLnNlbGVjdGlvbkVuZCAmJiAodGhpcy5zZWxlY3Rpb25TdGFydC5wb3MgIT09IHRoaXMuc2VsZWN0aW9uRW5kLnBvcyB8fCB0aGlzLnNlbGVjdGlvblN0YXJ0LnNlcUluZGV4ICE9PSB0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCkpIHsgLy8gQ2hlY2sgaWYgYW55IHNlbGVjdGlvbiBleGlzdHNcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxTZWxlY3Rpb24oZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRDaGFyYWN0ZXIoZXZlbnQua2V5LnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJyAnKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5pbnNlcnRDaGFyYWN0ZXIoJy0nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChldmVudC5rZXkgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQb3MgPSB0aGlzLmZpbmRQcmV2aW91c1dvcmQoc2VxSW5kZXgsIHBvcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHsgc2VxSW5kZXgsIHBvczogbmV3UG9zIH07XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSB0aGlzLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAvLyBFeHRlbmQgc2VsZWN0aW9uIGxlZnRcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb25FbmQucG9zID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZC5wb3MtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4LS07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kLnBvcyA9IHRoaXMuc2VxdWVuY2VzW3RoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4XS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTW92ZSBjdXJzb3IgbGVmdCwgY2xlYXIgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgaWYgKHBvcyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHsgc2VxSW5kZXgsIHBvczogcG9zIC0gMSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzZXFJbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHsgc2VxSW5kZXg6IHNlcUluZGV4IC0gMSwgcG9zOiB0aGlzLnNlcXVlbmNlc1tzZXFJbmRleCAtIDFdLmxlbmd0aCB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IHRoaXMuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChldmVudC5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChldmVudC5jdHJsS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UG9zID0gdGhpcy5maW5kTmV4dFdvcmQoc2VxSW5kZXgsIHBvcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHsgc2VxSW5kZXgsIHBvczogbmV3UG9zIH07XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSB0aGlzLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAvLyBFeHRlbmQgc2VsZWN0aW9uIHJpZ2h0XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uRW5kLnBvcyA8IHRoaXMuc2VxdWVuY2VzW3NlcUluZGV4XS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQucG9zKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4IDwgdGhpcy5zZXF1ZW5jZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZC5wb3MgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1vdmUgY3Vyc29yIHJpZ2h0LCBjbGVhciBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICBpZiAocG9zIDwgdGhpcy5zZXF1ZW5jZXNbc2VxSW5kZXhdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0geyBzZXFJbmRleCwgcG9zOiBwb3MgKyAxIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlcUluZGV4IDwgdGhpcy5zZXF1ZW5jZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0geyBzZXFJbmRleDogc2VxSW5kZXggKyAxLCBwb3M6IDAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSB0aGlzLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSB7IHNlcUluZGV4OiAwLCBwb3M6IHBvcyB9O1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gdGhpcy5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgLy8gRXh0ZW5kIHNlbGVjdGlvbiB1cFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXgtLTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQucG9zID0gTWF0aC5taW4odGhpcy5zZWxlY3Rpb25FbmQucG9zLCB0aGlzLnNlcXVlbmNlc1t0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleF0ubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBNb3ZlIGN1cnNvciB1cCwgY2xlYXIgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgaWYgKHNlcUluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0geyBzZXFJbmRleDogc2VxSW5kZXggLSAxLCBwb3M6IE1hdGgubWluKHBvcywgdGhpcy5zZXF1ZW5jZXNbc2VxSW5kZXggLSAxXS5sZW5ndGgpIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0geyBzZXFJbmRleDogMCwgcG9zOiAwIH07IC8vIE1vdmUgdG8gc3RhcnQgb2YgZmlyc3Qgc2VxdWVuY2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSB0aGlzLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChldmVudC5jdHJsS2V5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHsgc2VxSW5kZXg6IHRoaXMuc2VxdWVuY2VzLmxlbmd0aCAtIDEsIHBvczogcG9zIH07XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSB0aGlzLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAvLyBFeHRlbmQgc2VsZWN0aW9uIGRvd25cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXggPCB0aGlzLnNlcXVlbmNlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4Kys7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kLnBvcyA9IE1hdGgubWluKHRoaXMuc2VsZWN0aW9uRW5kLnBvcywgdGhpcy5zZXF1ZW5jZXNbdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXhdLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTW92ZSBjdXJzb3IgZG93biwgY2xlYXIgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgaWYgKHNlcUluZGV4IDwgdGhpcy5zZXF1ZW5jZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0geyBzZXFJbmRleDogc2VxSW5kZXggKyAxLCBwb3M6IE1hdGgubWluKHBvcywgdGhpcy5zZXF1ZW5jZXNbc2VxSW5kZXggKyAxXS5sZW5ndGgpIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0U2VxSW5kZXggPSB0aGlzLnNlcXVlbmNlcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0geyBzZXFJbmRleDogbGFzdFNlcUluZGV4LCBwb3M6IHRoaXMuc2VxdWVuY2VzW2xhc3RTZXFJbmRleF0ubGVuZ3RoIH07IC8vIE1vdmUgdG8gZW5kIG9mIGxhc3Qgc2VxdWVuY2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSB0aGlzLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnQmFja3NwYWNlJykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlQ2hhcmFjdGVyKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ0RlbGV0ZScpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUNoYXJhY3RlcihmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmluZE5leHRXb3JkKHNlcUluZGV4LCBwb3MpIHtcbiAgICAgICAgY29uc3Qgc2VxdWVuY2UgPSB0aGlzLnNlcXVlbmNlc1tzZXFJbmRleF07XG4gICAgICAgIGxldCBpbldvcmQgPSAhdGhpcy5pc0dhcChzZXF1ZW5jZVtwb3NdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHBvczsgaSA8IHNlcXVlbmNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaW5Xb3JkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNHYXAoc2VxdWVuY2VbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGluV29yZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0dhcChzZXF1ZW5jZVtpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXF1ZW5jZS5sZW5ndGg7XG4gICAgfVxuICAgIGZpbmRQcmV2aW91c1dvcmQoc2VxSW5kZXgsIHBvcykge1xuICAgICAgICBjb25zdCBzZXF1ZW5jZSA9IHRoaXMuc2VxdWVuY2VzW3NlcUluZGV4XTtcbiAgICAgICAgbGV0IGluV29yZCA9IHBvcyA+IDAgJiYgIXRoaXMuaXNHYXAoc2VxdWVuY2VbcG9zIC0gMV0pO1xuICAgICAgICBmb3IgKGxldCBpID0gcG9zIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGlmIChpbldvcmQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0dhcChzZXF1ZW5jZVtpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkgKyAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0dhcChzZXF1ZW5jZVtpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5Xb3JkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGlzR2FwKGNoYXIpIHtcbiAgICAgICAgcmV0dXJuIGNoYXIgPT09ICctJztcbiAgICB9XG4gICAgb25XaGVlbChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNjcm9sbFggKz0gZXZlbnQuZGVsdGFYO1xuICAgICAgICB0aGlzLnNjcm9sbFkgKz0gZXZlbnQuZGVsdGFZO1xuICAgICAgICBjb25zdCBtYXhTY3JvbGxYID0gdGhpcy5tYXhTZXF1ZW5jZUxlbmd0aCAqIHRoaXMuYmxvY2tXaWR0aCAtIHRoaXMuc2VxdWVuY2VDYW52YXMud2lkdGg7XG4gICAgICAgIGNvbnN0IG1heFNjcm9sbFkgPSB0aGlzLnNlcXVlbmNlcy5sZW5ndGggKiB0aGlzLmJsb2NrSGVpZ2h0IC0gdGhpcy5zZXF1ZW5jZUNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuc2Nyb2xsWCA9IE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMuc2Nyb2xsWCwgbWF4U2Nyb2xsWCkpO1xuICAgICAgICB0aGlzLnNjcm9sbFkgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLnNjcm9sbFksIG1heFNjcm9sbFkpKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgfVxuICAgIHJlcXVlc3RSZWRyYXcoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUmVkcmF3U2NoZWR1bGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1JlZHJhd1NjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgICAgIHRoaXMuaXNSZWRyYXdTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlzTnVjbGVvdGlkZVNlbGVjdGVkKHNlcUluZGV4LCBwb3MpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvblN0YXJ0IHx8ICF0aGlzLnNlbGVjdGlvbkVuZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0Um93ID0gTWF0aC5taW4odGhpcy5zZWxlY3Rpb25TdGFydC5zZXFJbmRleCwgdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXgpO1xuICAgICAgICBjb25zdCBlbmRSb3cgPSBNYXRoLm1heCh0aGlzLnNlbGVjdGlvblN0YXJ0LnNlcUluZGV4LCB0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCk7XG4gICAgICAgIGNvbnN0IHN0YXJ0Q29sID0gTWF0aC5taW4odGhpcy5zZWxlY3Rpb25TdGFydC5wb3MsIHRoaXMuc2VsZWN0aW9uRW5kLnBvcyk7XG4gICAgICAgIGNvbnN0IGVuZENvbCA9IE1hdGgubWF4KHRoaXMuc2VsZWN0aW9uU3RhcnQucG9zLCB0aGlzLnNlbGVjdGlvbkVuZC5wb3MpO1xuICAgICAgICByZXR1cm4gc2VxSW5kZXggPj0gc3RhcnRSb3cgJiYgc2VxSW5kZXggPD0gZW5kUm93ICYmIHBvcyA+PSBzdGFydENvbCAmJiBwb3MgPD0gZW5kQ29sO1xuICAgIH1cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmRyYXdTZXF1ZW5jZXMoKTtcbiAgICAgICAgdGhpcy5kcmF3TmFtZXMoKTtcbiAgICAgICAgdGhpcy5kcmF3UnVsZXIoKTtcbiAgICAgICAgdGhpcy5kcmF3U2Nyb2xsYmFycygpO1xuICAgIH1cbiAgICBkcmF3U2Nyb2xsYmFycygpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5zZXFDdHg7XG4gICAgICAgIGNvbnN0IGNhbnZhc1dpZHRoID0gdGhpcy5zZXF1ZW5jZUNhbnZhcy53aWR0aDtcbiAgICAgICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gdGhpcy5zZXF1ZW5jZUNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIC8vIEhvcml6b250YWwgU2Nyb2xsYmFyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IHRoaXMubWF4U2VxdWVuY2VMZW5ndGggKiB0aGlzLmJsb2NrV2lkdGg7XG4gICAgICAgIGlmIChjb250ZW50V2lkdGggPiBjYW52YXNXaWR0aCkge1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYmFyVHJhY2tXaWR0aCA9IGNhbnZhc1dpZHRoIC0gdGhpcy5zY3JvbGxiYXJXaWR0aDsgLy8gTGVhdmUgc3BhY2UgZm9yIHZlcnRpY2FsIHNjcm9sbGJhclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYmFyVGh1bWJXaWR0aCA9IE1hdGgubWF4KDUwLCBzY3JvbGxiYXJUcmFja1dpZHRoICogKGNhbnZhc1dpZHRoIC8gY29udGVudFdpZHRoKSk7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxiYXJUaHVtYlggPSAodGhpcy5zY3JvbGxYIC8gKGNvbnRlbnRXaWR0aCAtIGNhbnZhc1dpZHRoKSkgKiAoc2Nyb2xsYmFyVHJhY2tXaWR0aCAtIHNjcm9sbGJhclRodW1iV2lkdGgpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2Nyb2xsYmFyVHJhY2tDb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCBjYW52YXNIZWlnaHQgLSB0aGlzLnNjcm9sbGJhcldpZHRoLCBzY3JvbGxiYXJUcmFja1dpZHRoLCB0aGlzLnNjcm9sbGJhcldpZHRoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLnNjcm9sbGJhckNvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KHNjcm9sbGJhclRodW1iWCwgY2FudmFzSGVpZ2h0IC0gdGhpcy5zY3JvbGxiYXJXaWR0aCwgc2Nyb2xsYmFyVGh1bWJXaWR0aCwgdGhpcy5zY3JvbGxiYXJXaWR0aCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVmVydGljYWwgU2Nyb2xsYmFyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSB0aGlzLnNlcXVlbmNlcy5sZW5ndGggKiB0aGlzLmJsb2NrSGVpZ2h0O1xuICAgICAgICBpZiAoY29udGVudEhlaWdodCA+IGNhbnZhc0hlaWdodCkge1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYmFyVHJhY2tIZWlnaHQgPSBjYW52YXNIZWlnaHQgLSB0aGlzLnNjcm9sbGJhcldpZHRoOyAvLyBMZWF2ZSBzcGFjZSBmb3IgaG9yaXpvbnRhbCBzY3JvbGxiYXJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGJhclRodW1iSGVpZ2h0ID0gTWF0aC5tYXgoNTAsIHNjcm9sbGJhclRyYWNrSGVpZ2h0ICogKGNhbnZhc0hlaWdodCAvIGNvbnRlbnRIZWlnaHQpKTtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGJhclRodW1iWSA9ICh0aGlzLnNjcm9sbFkgLyAoY29udGVudEhlaWdodCAtIGNhbnZhc0hlaWdodCkpICogKHNjcm9sbGJhclRyYWNrSGVpZ2h0IC0gc2Nyb2xsYmFyVGh1bWJIZWlnaHQpO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2Nyb2xsYmFyVHJhY2tDb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdChjYW52YXNXaWR0aCAtIHRoaXMuc2Nyb2xsYmFyV2lkdGgsIDAsIHRoaXMuc2Nyb2xsYmFyV2lkdGgsIHNjcm9sbGJhclRyYWNrSGVpZ2h0KTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLnNjcm9sbGJhckNvbG9yO1xuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KGNhbnZhc1dpZHRoIC0gdGhpcy5zY3JvbGxiYXJXaWR0aCwgc2Nyb2xsYmFyVGh1bWJZLCB0aGlzLnNjcm9sbGJhcldpZHRoLCBzY3JvbGxiYXJUaHVtYkhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZHJhd1NlcXVlbmNlcygpIHtcbiAgICAgICAgdGhpcy5zZXFDdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuc2VxdWVuY2VDYW52YXMud2lkdGgsIHRoaXMuc2VxdWVuY2VDYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgY29uc3Qgc3RhcnRSb3cgPSBNYXRoLmZsb29yKHRoaXMuc2Nyb2xsWSAvIHRoaXMuYmxvY2tIZWlnaHQpO1xuICAgICAgICBjb25zdCBlbmRSb3cgPSBNYXRoLm1pbih0aGlzLnNlcXVlbmNlcy5sZW5ndGgsIHN0YXJ0Um93ICsgTWF0aC5jZWlsKHRoaXMuc2VxdWVuY2VDYW52YXMuaGVpZ2h0IC8gdGhpcy5ibG9ja0hlaWdodCkpO1xuICAgICAgICBjb25zdCBzdGFydENvbCA9IE1hdGguZmxvb3IodGhpcy5zY3JvbGxYIC8gdGhpcy5ibG9ja1dpZHRoKTtcbiAgICAgICAgY29uc3QgZW5kQ29sID0gTWF0aC5taW4odGhpcy5tYXhTZXF1ZW5jZUxlbmd0aCwgc3RhcnRDb2wgKyBNYXRoLmNlaWwodGhpcy5zZXF1ZW5jZUNhbnZhcy53aWR0aCAvIHRoaXMuYmxvY2tXaWR0aCkpO1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRSb3c7IGkgPCBlbmRSb3c7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc2VxdWVuY2UgPSB0aGlzLnNlcXVlbmNlc1tpXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBzdGFydENvbDsgaiA8IGVuZENvbDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IGogKiB0aGlzLmJsb2NrV2lkdGggLSB0aGlzLnNjcm9sbFg7XG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IGkgKiB0aGlzLmJsb2NrSGVpZ2h0IC0gdGhpcy5zY3JvbGxZO1xuICAgICAgICAgICAgICAgIGNvbnN0IG51Y2xlb3RpZGUgPSBzZXF1ZW5jZVtqXSB8fCAnJztcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFyVG9EcmF3ID0gdGhpcy5kaXNwbGF5TW9kZSA9PT0gJ251Y2xlb3RpZGUnID8gbnVjbGVvdGlkZSA6IHRoaXMudHJhbnNsYXRlZFNlcXVlbmNlc1tpXVtqXSB8fCAnJztcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvck1hcCA9IHRoaXMuZGlzcGxheU1vZGUgPT09ICdudWNsZW90aWRlJyA/IHRoaXMuY29sb3JzIDogdGhpcy5hbWlub0FjaWRDb2xvcnM7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3JJbmZvID0gY29sb3JNYXBbY2hhclRvRHJhdy50b1VwcGVyQ2FzZSgpXSB8fCB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyNGRkZGRkYnIH07IC8vIERlZmF1bHQgdG8gYmxhY2sgdGV4dCBvbiB3aGl0ZSBiYWNrZ3JvdW5kXG4gICAgICAgICAgICAgICAgdGhpcy5zZXFDdHguZmlsbFN0eWxlID0gY29sb3JJbmZvLmJhY2tncm91bmQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXFDdHguZmlsbFJlY3QoeCwgeSwgdGhpcy5ibG9ja1dpZHRoLCB0aGlzLmJsb2NrSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcUN0eC5zdHJva2VTdHlsZSA9ICcjREREREREJztcbiAgICAgICAgICAgICAgICB0aGlzLnNlcUN0eC5zdHJva2VSZWN0KHgsIHksIHRoaXMuYmxvY2tXaWR0aCwgdGhpcy5ibG9ja0hlaWdodCk7XG4gICAgICAgICAgICAgICAgLy8gSGlnaGxpZ2h0IHNlbGVjdGVkIHNlcXVlbmNlIG5hbWVzIChlbnRpcmUgcm93KVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkU2VxdWVuY2VOYW1lcy5oYXMoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXFDdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwgMjU1LCAwLCAwLjEpJzsgLy8gTGlnaHQgZ3JlZW4gb3ZlcmxheSBmb3Igc2VsZWN0ZWQgcm93c1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcUN0eC5maWxsUmVjdCh4LCB5LCB0aGlzLmJsb2NrV2lkdGgsIHRoaXMuYmxvY2tIZWlnaHQpOyAvLyBBcHBseSB0byBlYWNoIGJsb2NrIGluIHRoZSByb3dcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNOdWNsZW90aWRlU2VsZWN0ZWQoaSwgaikpIHsgLy8gVGhpcyBtZXRob2QgbmFtZSBpcyBub3cgbWlzbGVhZGluZywgc2hvdWxkIGJlIGlzQ2hhclNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VxQ3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDI1NSwgMC4zKSc7IC8vIFNlbWktdHJhbnNwYXJlbnQgYmx1ZSBvdmVybGF5IGZvciBjZWxsIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcUN0eC5maWxsUmVjdCh4LCB5LCB0aGlzLmJsb2NrV2lkdGgsIHRoaXMuYmxvY2tIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcUN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXFDdHgubGluZVdpZHRoID0gMjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXFDdHguc3Ryb2tlUmVjdCh4LCB5LCB0aGlzLmJsb2NrV2lkdGgsIHRoaXMuYmxvY2tIZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNlcUN0eC5maWxsU3R5bGUgPSBjb2xvckluZm8uZm9yZWdyb3VuZDsgLy8gVXNlIGZvcmVncm91bmQgY29sb3IgZnJvbSBzY2hlbWVcbiAgICAgICAgICAgICAgICB0aGlzLnNlcUN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICAgICAgICAgICAgICB0aGlzLnNlcUN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICAgICAgICAgICAgICB0aGlzLnNlcUN0eC5maWxsVGV4dChjaGFyVG9EcmF3LCB4ICsgdGhpcy5ibG9ja1dpZHRoIC8gMiwgeSArIHRoaXMuYmxvY2tIZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBkcmF3TmFtZXMoKSB7XG4gICAgICAgIHRoaXMubmFtZXNDdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMubmFtZXNDYW52YXMud2lkdGgsIHRoaXMubmFtZXNDYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5uYW1lc0N0eC5mb250ID0gJzE0cHggc2Fucy1zZXJpZic7XG4gICAgICAgIHRoaXMubmFtZXNDdHgudGV4dEFsaWduID0gJ2xlZnQnO1xuICAgICAgICB0aGlzLm5hbWVzQ3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgICAgICBjb25zdCBzdGFydFJvdyA9IE1hdGguZmxvb3IodGhpcy5zY3JvbGxZIC8gdGhpcy5ibG9ja0hlaWdodCk7XG4gICAgICAgIGNvbnN0IGVuZFJvdyA9IE1hdGgubWluKHRoaXMuc2VxdWVuY2VzLmxlbmd0aCwgc3RhcnRSb3cgKyBNYXRoLmNlaWwodGhpcy5uYW1lc0NhbnZhcy5oZWlnaHQgLyB0aGlzLmJsb2NrSGVpZ2h0KSk7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydFJvdzsgaSA8IGVuZFJvdzsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB5ID0gaSAqIHRoaXMuYmxvY2tIZWlnaHQgLSB0aGlzLnNjcm9sbFk7IC8vIFRvcCBvZiB0aGUgYmxvY2tcbiAgICAgICAgICAgIGNvbnN0IHRleHRZID0geSArIHRoaXMuYmxvY2tIZWlnaHQgLyAyOyAvLyBNaWRkbGUgZm9yIHRleHRcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkU2VxdWVuY2VOYW1lcy5oYXMoaSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWVzQ3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDI1NSwgMC4xKSc7IC8vIExpZ2h0IGJsdWUgYmFja2dyb3VuZCBmb3Igc2VsZWN0ZWQgbmFtZXNcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWVzQ3R4LmZpbGxSZWN0KDAsIHksIHRoaXMubmFtZXNDYW52YXMud2lkdGgsIHRoaXMuYmxvY2tIZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5uYW1lc0N0eC5maWxsU3R5bGUgPSAnIzAwMDAwMCc7IC8vIEJsYWNrIHRleHRcbiAgICAgICAgICAgIHRoaXMubmFtZXNDdHguZmlsbFRleHQodGhpcy5uYW1lc1tpXSwgNSwgdGV4dFkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRyYXdSdWxlcigpIHtcbiAgICAgICAgdGhpcy5ydWxlckN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5ydWxlckNhbnZhcy53aWR0aCwgdGhpcy5ydWxlckNhbnZhcy5oZWlnaHQpO1xuICAgICAgICB0aGlzLnJ1bGVyQ3R4LmZvbnQgPSAnMTJweCBzYW5zLXNlcmlmJztcbiAgICAgICAgdGhpcy5ydWxlckN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICAgICAgdGhpcy5ydWxlckN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICAgICAgY29uc3Qgc3RhcnRDb2wgPSBNYXRoLmZsb29yKHRoaXMuc2Nyb2xsWCAvIHRoaXMuYmxvY2tXaWR0aCk7XG4gICAgICAgIGNvbnN0IGVuZENvbCA9IE1hdGgubWluKHRoaXMubWF4U2VxdWVuY2VMZW5ndGgsIHN0YXJ0Q29sICsgTWF0aC5jZWlsKHRoaXMucnVsZXJDYW52YXMud2lkdGggLyB0aGlzLmJsb2NrV2lkdGgpKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IHN0YXJ0Q29sOyBqIDwgZW5kQ29sOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChqICUgNSA9PT0gMCkgeyAvLyBEcmF3IGxhYmVsIGV2ZXJ5IDUgYmxvY2tzXG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IGogKiB0aGlzLmJsb2NrV2lkdGggLSB0aGlzLnNjcm9sbFggKyB0aGlzLmJsb2NrV2lkdGggLyAyO1xuICAgICAgICAgICAgICAgIHRoaXMucnVsZXJDdHguZmlsbFN0eWxlID0gJyMwMDAwMDAnO1xuICAgICAgICAgICAgICAgIHRoaXMucnVsZXJDdHguZmlsbFRleHQoU3RyaW5nKGogKyAxKSwgeCwgdGhpcy5ydWxlckNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBvbk5hbWVzQ2FudmFzTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLm5hbWVzQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCB5ID0gZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wO1xuICAgICAgICBjb25zdCBzZXFJbmRleCA9IE1hdGguZmxvb3IoKHkgKyB0aGlzLnNjcm9sbFkpIC8gdGhpcy5ibG9ja0hlaWdodCk7XG4gICAgICAgIGlmIChzZXFJbmRleCA+PSAwICYmIHNlcUluZGV4IDwgdGhpcy5uYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpIHsgLy8gQ3RybC9DbWQgY2xpY2sgdG8gdG9nZ2xlIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkU2VxdWVuY2VOYW1lcy5oYXMoc2VxSW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTZXF1ZW5jZU5hbWVzLmRlbGV0ZShzZXFJbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU2VxdWVuY2VOYW1lcy5hZGQoc2VxSW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7IC8vIFNoaWZ0IGNsaWNrIHRvIHNlbGVjdCBhIHJhbmdlXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRTZXF1ZW5jZU5hbWVzLnNpemUgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0U2VsZWN0ZWQgPSBNYXRoLm1pbiguLi5BcnJheS5mcm9tKHRoaXMuc2VsZWN0ZWRTZXF1ZW5jZU5hbWVzKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gTWF0aC5taW4oZmlyc3RTZWxlY3RlZCwgc2VxSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmQgPSBNYXRoLm1heChmaXJzdFNlbGVjdGVkLCBzZXFJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFNlcXVlbmNlTmFtZXMuYWRkKGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU2VxdWVuY2VOYW1lcy5hZGQoc2VxSW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgeyAvLyBSZWd1bGFyIGNsaWNrIHRvIHNlbGVjdCBvbmx5IHRoaXMgaXRlbVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTZXF1ZW5jZU5hbWVzLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFNlcXVlbmNlTmFtZXMuYWRkKHNlcUluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsInZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCI7XG52YXIgd2VicGFja1F1ZXVlcyA9IGhhc1N5bWJvbCA/IFN5bWJvbChcIndlYnBhY2sgcXVldWVzXCIpIDogXCJfX3dlYnBhY2tfcXVldWVzX19cIjtcbnZhciB3ZWJwYWNrRXhwb3J0cyA9IGhhc1N5bWJvbCA/IFN5bWJvbChcIndlYnBhY2sgZXhwb3J0c1wiKSA6IFwiX193ZWJwYWNrX2V4cG9ydHNfX1wiO1xudmFyIHdlYnBhY2tFcnJvciA9IGhhc1N5bWJvbCA/IFN5bWJvbChcIndlYnBhY2sgZXJyb3JcIikgOiBcIl9fd2VicGFja19lcnJvcl9fXCI7XG5cblxudmFyIHJlc29sdmVRdWV1ZSA9IChxdWV1ZSkgPT4ge1xuXHRpZihxdWV1ZSAmJiBxdWV1ZS5kIDwgMSkge1xuXHRcdHF1ZXVlLmQgPSAxO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tKSk7XG5cdFx0cXVldWUuZm9yRWFjaCgoZm4pID0+IChmbi5yLS0gPyBmbi5yKysgOiBmbigpKSk7XG5cdH1cbn1cbnZhciB3cmFwRGVwcyA9IChkZXBzKSA9PiAoZGVwcy5tYXAoKGRlcCkgPT4ge1xuXHRpZihkZXAgIT09IG51bGwgJiYgdHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIikge1xuXG5cdFx0aWYoZGVwW3dlYnBhY2tRdWV1ZXNdKSByZXR1cm4gZGVwO1xuXHRcdGlmKGRlcC50aGVuKSB7XG5cdFx0XHR2YXIgcXVldWUgPSBbXTtcblx0XHRcdHF1ZXVlLmQgPSAwO1xuXHRcdFx0ZGVwLnRoZW4oKHIpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFeHBvcnRzXSA9IHI7XG5cdFx0XHRcdHJlc29sdmVRdWV1ZShxdWV1ZSk7XG5cdFx0XHR9LCAoZSkgPT4ge1xuXHRcdFx0XHRvYmpbd2VicGFja0Vycm9yXSA9IGU7XG5cdFx0XHRcdHJlc29sdmVRdWV1ZShxdWV1ZSk7XG5cdFx0XHR9KTtcblx0XHRcdHZhciBvYmogPSB7fTtcblxuXHRcdFx0b2JqW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAoZm4ocXVldWUpKTtcblx0XHRcdHJldHVybiBvYmo7XG5cdFx0fVxuXHR9XG5cdHZhciByZXQgPSB7fTtcblx0cmV0W3dlYnBhY2tRdWV1ZXNdID0geCA9PiB7fTtcblx0cmV0W3dlYnBhY2tFeHBvcnRzXSA9IGRlcDtcblx0cmV0dXJuIHJldDtcbn0pKTtcbl9fd2VicGFja19yZXF1aXJlX18uYSA9IChtb2R1bGUsIGJvZHksIGhhc0F3YWl0KSA9PiB7XG5cdHZhciBxdWV1ZTtcblx0aGFzQXdhaXQgJiYgKChxdWV1ZSA9IFtdKS5kID0gLTEpO1xuXHR2YXIgZGVwUXVldWVzID0gbmV3IFNldCgpO1xuXHR2YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuXHR2YXIgY3VycmVudERlcHM7XG5cdHZhciBvdXRlclJlc29sdmU7XG5cdHZhciByZWplY3Q7XG5cdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlaikgPT4ge1xuXHRcdHJlamVjdCA9IHJlajtcblx0XHRvdXRlclJlc29sdmUgPSByZXNvbHZlO1xuXHR9KTtcblx0cHJvbWlzZVt3ZWJwYWNrRXhwb3J0c10gPSBleHBvcnRzO1xuXHRwcm9taXNlW3dlYnBhY2tRdWV1ZXNdID0gKGZuKSA9PiAocXVldWUgJiYgZm4ocXVldWUpLCBkZXBRdWV1ZXMuZm9yRWFjaChmbiksIHByb21pc2VbXCJjYXRjaFwiXSh4ID0+IHt9KSk7XG5cdG1vZHVsZS5leHBvcnRzID0gcHJvbWlzZTtcblx0dmFyIGhhbmRsZSA9IChkZXBzKSA9PiB7XG5cdFx0Y3VycmVudERlcHMgPSB3cmFwRGVwcyhkZXBzKTtcblx0XHR2YXIgZm47XG5cdFx0dmFyIGdldFJlc3VsdCA9ICgpID0+IChjdXJyZW50RGVwcy5tYXAoKGQpID0+IHtcblxuXHRcdFx0aWYoZFt3ZWJwYWNrRXJyb3JdKSB0aHJvdyBkW3dlYnBhY2tFcnJvcl07XG5cdFx0XHRyZXR1cm4gZFt3ZWJwYWNrRXhwb3J0c107XG5cdFx0fSkpXG5cdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHRcdFx0Zm4gPSAoKSA9PiAocmVzb2x2ZShnZXRSZXN1bHQpKTtcblx0XHRcdGZuLnIgPSAwO1xuXHRcdFx0dmFyIGZuUXVldWUgPSAocSkgPT4gKHEgIT09IHF1ZXVlICYmICFkZXBRdWV1ZXMuaGFzKHEpICYmIChkZXBRdWV1ZXMuYWRkKHEpLCBxICYmICFxLmQgJiYgKGZuLnIrKywgcS5wdXNoKGZuKSkpKTtcblx0XHRcdGN1cnJlbnREZXBzLm1hcCgoZGVwKSA9PiAoZGVwW3dlYnBhY2tRdWV1ZXNdKGZuUXVldWUpKSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGZuLnIgPyBwcm9taXNlIDogZ2V0UmVzdWx0KCk7XG5cdH1cblx0dmFyIGRvbmUgPSAoZXJyKSA9PiAoKGVyciA/IHJlamVjdChwcm9taXNlW3dlYnBhY2tFcnJvcl0gPSBlcnIpIDogb3V0ZXJSZXNvbHZlKGV4cG9ydHMpKSwgcmVzb2x2ZVF1ZXVlKHF1ZXVlKSlcblx0Ym9keShoYW5kbGUsIGRvbmUpO1xuXHRxdWV1ZSAmJiBxdWV1ZS5kIDwgMCAmJiAocXVldWUuZCA9IDApO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnYgPSAoZXhwb3J0cywgd2FzbU1vZHVsZUlkLCB3YXNtTW9kdWxlSGFzaCwgaW1wb3J0c09iaikgPT4ge1xuXG5cdHZhciByZXEgPSBmZXRjaChfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgd2FzbU1vZHVsZUhhc2ggKyBcIi5tb2R1bGUud2FzbVwiKTtcblx0dmFyIGZhbGxiYWNrID0gKCkgPT4gKHJlcVxuXHRcdC50aGVuKCh4KSA9PiAoeC5hcnJheUJ1ZmZlcigpKSlcblx0XHQudGhlbigoYnl0ZXMpID0+IChXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShieXRlcywgaW1wb3J0c09iaikpKVxuXHRcdC50aGVuKChyZXMpID0+IChPYmplY3QuYXNzaWduKGV4cG9ydHMsIHJlcy5pbnN0YW5jZS5leHBvcnRzKSkpKTtcblx0cmV0dXJuIHJlcS50aGVuKChyZXMpID0+IHtcblx0XHRpZiAodHlwZW9mIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nID09PSBcImZ1bmN0aW9uXCIpIHtcblxuXHRcdFx0cmV0dXJuIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKHJlcywgaW1wb3J0c09iailcblx0XHRcdFx0LnRoZW4oXG5cdFx0XHRcdFx0KHJlcykgPT4gKE9iamVjdC5hc3NpZ24oZXhwb3J0cywgcmVzLmluc3RhbmNlLmV4cG9ydHMpKSxcblx0XHRcdFx0XHQoZSkgPT4ge1xuXHRcdFx0XHRcdFx0aWYocmVzLmhlYWRlcnMuZ2V0KFwiQ29udGVudC1UeXBlXCIpICE9PSBcImFwcGxpY2F0aW9uL3dhc21cIikge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLndhcm4oXCJgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmdgIGZhaWxlZCBiZWNhdXNlIHlvdXIgc2VydmVyIGRvZXMgbm90IHNlcnZlIHdhc20gd2l0aCBgYXBwbGljYXRpb24vd2FzbWAgTUlNRSB0eXBlLiBGYWxsaW5nIGJhY2sgdG8gYFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlYCB3aGljaCBpcyBzbG93ZXIuIE9yaWdpbmFsIGVycm9yOlxcblwiLCBlKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbGxiYWNrKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0aHJvdyBlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbGxiYWNrKCk7XG5cdH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoL15ibG9iOi8sIFwiXCIpLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ21vZHVsZScgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi93d3cvbWFpbi50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==