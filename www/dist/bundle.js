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
module.exports = __webpack_require__.v(exports, module.id, "b6e8f6da63afdb5d5753", {
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
    const frame1Button = document.getElementById('frame1-button');
    const frame2Button = document.getElementById('frame2-button');
    const frame3Button = document.getElementById('frame3-button');
    const nucleotideModeButton = document.getElementById('nucleotide-mode-button');
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
    translateButton.addEventListener('click', () => {
        const selected = viewer.getSelectedSequence();
        if (selected) {
            const translatedSequence = (0,_pkg_seqedit_wasm__WEBPACK_IMPORTED_MODULE_1__.translate)(selected.sequence, 1); // Default to frame 1
            viewer.setTranslatedSequences([translatedSequence], 1); // Assuming single sequence for now
        }
        else {
            alert('Please select a sequence to translate.');
        }
    });
    frame1Button.addEventListener('click', () => {
        const selected = viewer.getSelectedSequence();
        if (selected) {
            const translatedSequence = (0,_pkg_seqedit_wasm__WEBPACK_IMPORTED_MODULE_1__.translate)(selected.sequence, 1);
            viewer.setTranslatedSequences([translatedSequence], 1);
        }
        else {
            alert('Please select a sequence to translate.');
        }
    });
    frame2Button.addEventListener('click', () => {
        const selected = viewer.getSelectedSequence();
        if (selected) {
            const translatedSequence = (0,_pkg_seqedit_wasm__WEBPACK_IMPORTED_MODULE_1__.translate)(selected.sequence, 2);
            viewer.setTranslatedSequences([translatedSequence], 2);
        }
        else {
            alert('Please select a sequence to translate.');
        }
    });
    frame3Button.addEventListener('click', () => {
        const selected = viewer.getSelectedSequence();
        if (selected) {
            const translatedSequence = (0,_pkg_seqedit_wasm__WEBPACK_IMPORTED_MODULE_1__.translate)(selected.sequence, 3);
            viewer.setTranslatedSequences([translatedSequence], 3);
        }
        else {
            alert('Please select a sequence to translate.');
        }
    });
    nucleotideModeButton.addEventListener('click', () => {
        viewer.setNucleotideMode();
    });
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
            const originalSequence = this.sequences[seqIndex];
            let newSequence = '';
            let newPos = pos;
            if (this.selectionStart && this.selectionEnd) { // Check if any selection exists
                this.fillSelection(event.key.toUpperCase());
                return; // Exit after filling selection
            }
            else {
                // No selection, just insert
                newSequence = originalSequence.slice(0, pos) + event.key.toUpperCase() + originalSequence.slice(pos);
                newPos = pos + 1;
            }
            this.sequences[seqIndex] = newSequence;
            this.selectionStart = { seqIndex, pos: newPos };
            this.selectionEnd = this.selectionStart;
            this.maxSequenceLength = Math.max(...this.sequences.map(s => s.length));
            this.requestRedraw();
        }
        else if (event.key === ' ') {
            event.preventDefault();
            const originalSequence = this.sequences[seqIndex];
            let newSequence = '';
            let newPos = pos;
            if (this.selectionStart && this.selectionEnd) { // Check if any selection exists
                this.fillSelection('-');
                return; // Exit after filling selection
            }
            else {
                // No selection, just insert
                newSequence = originalSequence.slice(0, pos) + '-' + originalSequence.slice(pos);
                newPos = pos + 1;
            }
            this.sequences[seqIndex] = newSequence;
            this.selectionStart = { seqIndex, pos: newPos };
            this.selectionEnd = this.selectionStart;
            this.maxSequenceLength = Math.max(...this.sequences.map(s => s.length));
            this.requestRedraw();
        }
        else if (event.key === 'ArrowLeft') {
            event.preventDefault();
            if (event.shiftKey) {
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
            const currentSequenceLength = this.sequences[seqIndex].length;
            if (event.shiftKey) {
                // Extend selection right
                if (this.selectionEnd.pos < currentSequenceLength) {
                    this.selectionEnd.pos++;
                }
                else if (this.selectionEnd.seqIndex < this.sequences.length - 1) {
                    this.selectionEnd.seqIndex++;
                    this.selectionEnd.pos = 0;
                }
            }
            else {
                // Move cursor right, clear selection
                if (pos < currentSequenceLength) {
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
            if (event.shiftKey) {
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
            if (event.shiftKey) {
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
            if (pos > 0) {
                const originalSequence = this.sequences[seqIndex];
                const newSequence = originalSequence.slice(0, pos - 1) + originalSequence.slice(pos);
                this.sequences[seqIndex] = newSequence;
                this.selectionStart.pos--;
                this.selectionEnd = this.selectionStart;
                this.maxSequenceLength = Math.max(...this.sequences.map(s => s.length));
                this.requestRedraw();
            }
        }
        else if (event.key === 'Delete') {
            event.preventDefault();
            const originalSequence = this.sequences[seqIndex];
            const newSequence = originalSequence.slice(0, pos) + originalSequence.slice(pos + 1);
            this.sequences[seqIndex] = newSequence;
            this.maxSequenceLength = Math.max(...this.sequences.map(s => s.length));
            this.requestRedraw();
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDVjtBQUNpQjtBQUN0RCxtRUFBYyxDQUFDLGtEQUFJO0FBQ25CLG1FQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pyQjtBQUNPO0FBQ1A7QUFDQTs7O0FBR0E7O0FBRUEsb0RBQW9ELDhCQUE4Qjs7QUFFbEY7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsV0FBVyxjQUFjO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TW1EO0FBQzhCO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDREQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyw4REFBVztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MscUVBQWtCO0FBQzFEO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLDREQUFTLHdCQUF3QjtBQUN4RSxvRUFBb0U7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLDREQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLDREQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLDREQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Rk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdELGVBQWUsOENBQThDO0FBQzdEO0FBQ0E7QUFDQSxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLDhDQUE4QztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixhQUFhO0FBQzVDO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsK0JBQStCLGFBQWE7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsYUFBYTtBQUM1QztBQUNBO0FBQ0EsbUNBQW1DLGFBQWE7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsV0FBVztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixnQkFBZ0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBLDRDQUE0Qyx1QkFBdUI7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsb0VBQW9FO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkVBQTZFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQztBQUNBLG1DQUFtQyxZQUFZO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsZ0RBQWdEO0FBQzFIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRTtBQUNwRSxtRkFBbUY7QUFDbkY7QUFDQSx1REFBdUQ7QUFDdkQsb0VBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQywyREFBMkQ7QUFDM0Qsb0RBQW9EO0FBQ3BEO0FBQ0Esa0VBQWtFO0FBQ2xFO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxVQUFVO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDeG9CQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTs7O1dBR0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLENBQUM7V0FDRDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0Esc0dBQXNHO1dBQ3RHO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQ3hFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRixFOzs7OztXQ3hCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7VUVsQkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXFlZGl0LXdhc20vLi9wa2cvc2VxZWRpdF93YXNtLmpzIiwid2VicGFjazovL3NlcWVkaXQtd2FzbS8uL3BrZy9zZXFlZGl0X3dhc21fYmcuanMiLCJ3ZWJwYWNrOi8vc2VxZWRpdC13YXNtLy4vd3d3L21haW4udHMiLCJ3ZWJwYWNrOi8vc2VxZWRpdC13YXNtLy4vd3d3L3NlcXVlbmNlLXZpZXdlci50cyIsIndlYnBhY2s6Ly9zZXFlZGl0LXdhc20vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2VxZWRpdC13YXNtL3dlYnBhY2svcnVudGltZS9hc3luYyBtb2R1bGUiLCJ3ZWJwYWNrOi8vc2VxZWRpdC13YXNtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zZXFlZGl0LXdhc20vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zZXFlZGl0LXdhc20vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zZXFlZGl0LXdhc20vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zZXFlZGl0LXdhc20vd2VicGFjay9ydW50aW1lL3dhc20gbG9hZGluZyIsIndlYnBhY2s6Ly9zZXFlZGl0LXdhc20vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc2VxZWRpdC13YXNtL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vc2VxZWRpdC13YXNtL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9zZXFlZGl0LXdhc20vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHdhc20gZnJvbSBcIi4vc2VxZWRpdF93YXNtX2JnLndhc21cIjtcbmV4cG9ydCAqIGZyb20gXCIuL3NlcWVkaXRfd2FzbV9iZy5qc1wiO1xuaW1wb3J0IHsgX193Ymdfc2V0X3dhc20gfSBmcm9tIFwiLi9zZXFlZGl0X3dhc21fYmcuanNcIjtcbl9fd2JnX3NldF93YXNtKHdhc20pO1xud2FzbS5fX3diaW5kZ2VuX3N0YXJ0KCk7XG4iLCJsZXQgd2FzbTtcbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19zZXRfd2FzbSh2YWwpIHtcbiAgICB3YXNtID0gdmFsO1xufVxuXG5cbmNvbnN0IGxUZXh0RGVjb2RlciA9IHR5cGVvZiBUZXh0RGVjb2RlciA9PT0gJ3VuZGVmaW5lZCcgPyAoMCwgbW9kdWxlLnJlcXVpcmUpKCd1dGlsJykuVGV4dERlY29kZXIgOiBUZXh0RGVjb2RlcjtcblxubGV0IGNhY2hlZFRleHREZWNvZGVyID0gbmV3IGxUZXh0RGVjb2RlcigndXRmLTgnLCB7IGlnbm9yZUJPTTogdHJ1ZSwgZmF0YWw6IHRydWUgfSk7XG5cbmNhY2hlZFRleHREZWNvZGVyLmRlY29kZSgpO1xuXG5sZXQgY2FjaGVkVWludDhBcnJheU1lbW9yeTAgPSBudWxsO1xuXG5mdW5jdGlvbiBnZXRVaW50OEFycmF5TWVtb3J5MCgpIHtcbiAgICBpZiAoY2FjaGVkVWludDhBcnJheU1lbW9yeTAgPT09IG51bGwgfHwgY2FjaGVkVWludDhBcnJheU1lbW9yeTAuYnl0ZUxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjYWNoZWRVaW50OEFycmF5TWVtb3J5MCA9IG5ldyBVaW50OEFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWRVaW50OEFycmF5TWVtb3J5MDtcbn1cblxuZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbVdhc20wKHB0ciwgbGVuKSB7XG4gICAgcHRyID0gcHRyID4+PiAwO1xuICAgIHJldHVybiBjYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoZ2V0VWludDhBcnJheU1lbW9yeTAoKS5zdWJhcnJheShwdHIsIHB0ciArIGxlbikpO1xufVxuXG5sZXQgV0FTTV9WRUNUT1JfTEVOID0gMDtcblxuY29uc3QgbFRleHRFbmNvZGVyID0gdHlwZW9mIFRleHRFbmNvZGVyID09PSAndW5kZWZpbmVkJyA/ICgwLCBtb2R1bGUucmVxdWlyZSkoJ3V0aWwnKS5UZXh0RW5jb2RlciA6IFRleHRFbmNvZGVyO1xuXG5sZXQgY2FjaGVkVGV4dEVuY29kZXIgPSBuZXcgbFRleHRFbmNvZGVyKCd1dGYtOCcpO1xuXG5jb25zdCBlbmNvZGVTdHJpbmcgPSAodHlwZW9mIGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8gPT09ICdmdW5jdGlvbidcbiAgICA/IGZ1bmN0aW9uIChhcmcsIHZpZXcpIHtcbiAgICByZXR1cm4gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlSW50byhhcmcsIHZpZXcpO1xufVxuICAgIDogZnVuY3Rpb24gKGFyZywgdmlldykge1xuICAgIGNvbnN0IGJ1ZiA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZShhcmcpO1xuICAgIHZpZXcuc2V0KGJ1Zik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVhZDogYXJnLmxlbmd0aCxcbiAgICAgICAgd3JpdHRlbjogYnVmLmxlbmd0aFxuICAgIH07XG59KTtcblxuZnVuY3Rpb24gcGFzc1N0cmluZ1RvV2FzbTAoYXJnLCBtYWxsb2MsIHJlYWxsb2MpIHtcblxuICAgIGlmIChyZWFsbG9jID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgYnVmID0gY2FjaGVkVGV4dEVuY29kZXIuZW5jb2RlKGFyZyk7XG4gICAgICAgIGNvbnN0IHB0ciA9IG1hbGxvYyhidWYubGVuZ3RoLCAxKSA+Pj4gMDtcbiAgICAgICAgZ2V0VWludDhBcnJheU1lbW9yeTAoKS5zdWJhcnJheShwdHIsIHB0ciArIGJ1Zi5sZW5ndGgpLnNldChidWYpO1xuICAgICAgICBXQVNNX1ZFQ1RPUl9MRU4gPSBidWYubGVuZ3RoO1xuICAgICAgICByZXR1cm4gcHRyO1xuICAgIH1cblxuICAgIGxldCBsZW4gPSBhcmcubGVuZ3RoO1xuICAgIGxldCBwdHIgPSBtYWxsb2MobGVuLCAxKSA+Pj4gMDtcblxuICAgIGNvbnN0IG1lbSA9IGdldFVpbnQ4QXJyYXlNZW1vcnkwKCk7XG5cbiAgICBsZXQgb2Zmc2V0ID0gMDtcblxuICAgIGZvciAoOyBvZmZzZXQgPCBsZW47IG9mZnNldCsrKSB7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBhcmcuY2hhckNvZGVBdChvZmZzZXQpO1xuICAgICAgICBpZiAoY29kZSA+IDB4N0YpIGJyZWFrO1xuICAgICAgICBtZW1bcHRyICsgb2Zmc2V0XSA9IGNvZGU7XG4gICAgfVxuXG4gICAgaWYgKG9mZnNldCAhPT0gbGVuKSB7XG4gICAgICAgIGlmIChvZmZzZXQgIT09IDApIHtcbiAgICAgICAgICAgIGFyZyA9IGFyZy5zbGljZShvZmZzZXQpO1xuICAgICAgICB9XG4gICAgICAgIHB0ciA9IHJlYWxsb2MocHRyLCBsZW4sIGxlbiA9IG9mZnNldCArIGFyZy5sZW5ndGggKiAzLCAxKSA+Pj4gMDtcbiAgICAgICAgY29uc3QgdmlldyA9IGdldFVpbnQ4QXJyYXlNZW1vcnkwKCkuc3ViYXJyYXkocHRyICsgb2Zmc2V0LCBwdHIgKyBsZW4pO1xuICAgICAgICBjb25zdCByZXQgPSBlbmNvZGVTdHJpbmcoYXJnLCB2aWV3KTtcblxuICAgICAgICBvZmZzZXQgKz0gcmV0LndyaXR0ZW47XG4gICAgICAgIHB0ciA9IHJlYWxsb2MocHRyLCBsZW4sIG9mZnNldCwgMSkgPj4+IDA7XG4gICAgfVxuXG4gICAgV0FTTV9WRUNUT1JfTEVOID0gb2Zmc2V0O1xuICAgIHJldHVybiBwdHI7XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZXF1ZW5jZVxuICogQHBhcmFtIHtudW1iZXJ9IGZyYW1lXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlKHNlcXVlbmNlLCBmcmFtZSkge1xuICAgIGxldCBkZWZlcnJlZDJfMDtcbiAgICBsZXQgZGVmZXJyZWQyXzE7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcHRyMCA9IHBhc3NTdHJpbmdUb1dhc20wKHNlcXVlbmNlLCB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jLCB3YXNtLl9fd2JpbmRnZW5fcmVhbGxvYyk7XG4gICAgICAgIGNvbnN0IGxlbjAgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgICAgIGNvbnN0IHJldCA9IHdhc20udHJhbnNsYXRlKHB0cjAsIGxlbjAsIGZyYW1lKTtcbiAgICAgICAgZGVmZXJyZWQyXzAgPSByZXRbMF07XG4gICAgICAgIGRlZmVycmVkMl8xID0gcmV0WzFdO1xuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nRnJvbVdhc20wKHJldFswXSwgcmV0WzFdKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgICB3YXNtLl9fd2JpbmRnZW5fZnJlZShkZWZlcnJlZDJfMCwgZGVmZXJyZWQyXzEsIDEpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gdGFrZUZyb21FeHRlcm5yZWZUYWJsZTAoaWR4KSB7XG4gICAgY29uc3QgdmFsdWUgPSB3YXNtLl9fd2JpbmRnZW5fZXhwb3J0XzAuZ2V0KGlkeCk7XG4gICAgd2FzbS5fX2V4dGVybnJlZl90YWJsZV9kZWFsbG9jKGlkeCk7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0YVxuICogQHJldHVybnMge2FueX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlX2Zhc3RhKGRhdGEpIHtcbiAgICBjb25zdCBwdHIwID0gcGFzc1N0cmluZ1RvV2FzbTAoZGF0YSwgd2FzbS5fX3diaW5kZ2VuX21hbGxvYywgd2FzbS5fX3diaW5kZ2VuX3JlYWxsb2MpO1xuICAgIGNvbnN0IGxlbjAgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgY29uc3QgcmV0ID0gd2FzbS5wYXJzZV9mYXN0YShwdHIwLCBsZW4wKTtcbiAgICBpZiAocmV0WzJdKSB7XG4gICAgICAgIHRocm93IHRha2VGcm9tRXh0ZXJucmVmVGFibGUwKHJldFsxXSk7XG4gICAgfVxuICAgIHJldHVybiB0YWtlRnJvbUV4dGVybnJlZlRhYmxlMChyZXRbMF0pO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZXF1ZW5jZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJldmVyc2VfY29tcGxlbWVudChzZXF1ZW5jZSkge1xuICAgIGxldCBkZWZlcnJlZDJfMDtcbiAgICBsZXQgZGVmZXJyZWQyXzE7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcHRyMCA9IHBhc3NTdHJpbmdUb1dhc20wKHNlcXVlbmNlLCB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jLCB3YXNtLl9fd2JpbmRnZW5fcmVhbGxvYyk7XG4gICAgICAgIGNvbnN0IGxlbjAgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgICAgIGNvbnN0IHJldCA9IHdhc20ucmV2ZXJzZV9jb21wbGVtZW50KHB0cjAsIGxlbjApO1xuICAgICAgICBkZWZlcnJlZDJfMCA9IHJldFswXTtcbiAgICAgICAgZGVmZXJyZWQyXzEgPSByZXRbMV07XG4gICAgICAgIHJldHVybiBnZXRTdHJpbmdGcm9tV2FzbTAocmV0WzBdLCByZXRbMV0pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICAgIHdhc20uX193YmluZGdlbl9mcmVlKGRlZmVycmVkMl8wLCBkZWZlcnJlZDJfMSwgMSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBlbnVtIHswIHwgMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5IHwgMTAgfCAxMSB8IDEyIHwgMTMgfCAxNCB8IDE1IHwgMTYgfCAxNyB8IDE4IHwgMTkgfCAyMCB8IDIxfVxuICovXG5leHBvcnQgY29uc3QgQW1pbm9BY2lkID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgQWxhOiAwLCBcIjBcIjogXCJBbGFcIixcbiAgICBBcmc6IDEsIFwiMVwiOiBcIkFyZ1wiLFxuICAgIEFzbjogMiwgXCIyXCI6IFwiQXNuXCIsXG4gICAgQXNwOiAzLCBcIjNcIjogXCJBc3BcIixcbiAgICBDeXM6IDQsIFwiNFwiOiBcIkN5c1wiLFxuICAgIEdsbjogNSwgXCI1XCI6IFwiR2xuXCIsXG4gICAgR2x1OiA2LCBcIjZcIjogXCJHbHVcIixcbiAgICBHbHk6IDcsIFwiN1wiOiBcIkdseVwiLFxuICAgIEhpczogOCwgXCI4XCI6IFwiSGlzXCIsXG4gICAgSWxlOiA5LCBcIjlcIjogXCJJbGVcIixcbiAgICBMZXU6IDEwLCBcIjEwXCI6IFwiTGV1XCIsXG4gICAgTHlzOiAxMSwgXCIxMVwiOiBcIkx5c1wiLFxuICAgIE1ldDogMTIsIFwiMTJcIjogXCJNZXRcIixcbiAgICBQaGU6IDEzLCBcIjEzXCI6IFwiUGhlXCIsXG4gICAgUHJvOiAxNCwgXCIxNFwiOiBcIlByb1wiLFxuICAgIFNlcjogMTUsIFwiMTVcIjogXCJTZXJcIixcbiAgICBUaHI6IDE2LCBcIjE2XCI6IFwiVGhyXCIsXG4gICAgVHJwOiAxNywgXCIxN1wiOiBcIlRycFwiLFxuICAgIFR5cjogMTgsIFwiMThcIjogXCJUeXJcIixcbiAgICBWYWw6IDE5LCBcIjE5XCI6IFwiVmFsXCIsXG4gICAgU3RvcDogMjAsIFwiMjBcIjogXCJTdG9wXCIsXG4gICAgVW5rbm93bjogMjEsIFwiMjFcIjogXCJVbmtub3duXCIsXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX25ld180MDVlMjJmMzkwNTc2Y2UyKCkge1xuICAgIGNvbnN0IHJldCA9IG5ldyBPYmplY3QoKTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX25ld183OGZlYjEwOGI2NDcyNzEzKCkge1xuICAgIGNvbnN0IHJldCA9IG5ldyBBcnJheSgpO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfc2V0XzM3ODM3MDIzZjNkNzQwZTgoYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIGFyZzBbYXJnMSA+Pj4gMF0gPSBhcmcyO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3NldF8zZmRhM2JhYzA3MzkzZGU0KGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICBhcmcwW2FyZzFdID0gYXJnMjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX2luaXRfZXh0ZXJucmVmX3RhYmxlKCkge1xuICAgIGNvbnN0IHRhYmxlID0gd2FzbS5fX3diaW5kZ2VuX2V4cG9ydF8wO1xuICAgIGNvbnN0IG9mZnNldCA9IHRhYmxlLmdyb3coNCk7XG4gICAgdGFibGUuc2V0KDAsIHVuZGVmaW5lZCk7XG4gICAgdGFibGUuc2V0KG9mZnNldCArIDAsIHVuZGVmaW5lZCk7XG4gICAgdGFibGUuc2V0KG9mZnNldCArIDEsIG51bGwpO1xuICAgIHRhYmxlLnNldChvZmZzZXQgKyAyLCB0cnVlKTtcbiAgICB0YWJsZS5zZXQob2Zmc2V0ICsgMywgZmFsc2UpO1xuICAgIDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX3N0cmluZ19uZXcoYXJnMCwgYXJnMSkge1xuICAgIGNvbnN0IHJldCA9IGdldFN0cmluZ0Zyb21XYXNtMChhcmcwLCBhcmcxKTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fdGhyb3coYXJnMCwgYXJnMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSkpO1xufTtcblxuIiwiaW1wb3J0IHsgU2VxdWVuY2VWaWV3ZXIgfSBmcm9tICcuL3NlcXVlbmNlLXZpZXdlcic7XG5pbXBvcnQgeyBwYXJzZV9mYXN0YSwgcmV2ZXJzZV9jb21wbGVtZW50LCB0cmFuc2xhdGUgfSBmcm9tICcuLi9wa2cvc2VxZWRpdF93YXNtJztcbmFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XG4gICAgY29uc3Qgc2VxdWVuY2VDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VxdWVuY2UtY2FudmFzJyk7XG4gICAgY29uc3QgbmFtZXNDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZXMtY2FudmFzJyk7XG4gICAgY29uc3QgcnVsZXJDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncnVsZXItY2FudmFzJyk7XG4gICAgY29uc3Qgdmlld2VyID0gbmV3IFNlcXVlbmNlVmlld2VyKHNlcXVlbmNlQ2FudmFzLCBuYW1lc0NhbnZhcywgcnVsZXJDYW52YXMpO1xuICAgIGNvbnN0IHVybElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VybC1pbnB1dCcpO1xuICAgIGNvbnN0IGxvYWRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZC1idXR0b24nKTtcbiAgICBjb25zdCByZXZDb21wQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JldmNvbXAtYnV0dG9uJyk7XG4gICAgY29uc3QgdHJhbnNsYXRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyYW5zbGF0ZS1idXR0b24nKTtcbiAgICBjb25zdCBmcmFtZTFCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnJhbWUxLWJ1dHRvbicpO1xuICAgIGNvbnN0IGZyYW1lMkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmFtZTItYnV0dG9uJyk7XG4gICAgY29uc3QgZnJhbWUzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZyYW1lMy1idXR0b24nKTtcbiAgICBjb25zdCBudWNsZW90aWRlTW9kZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdudWNsZW90aWRlLW1vZGUtYnV0dG9uJyk7XG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZFNlcXVlbmNlcygpIHtcbiAgICAgICAgY29uc3QgdXJsID0gdXJsSW5wdXQudmFsdWU7XG4gICAgICAgIGlmICghdXJsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICAgICAgY29uc3QgZmFzdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICBjb25zdCBzZXF1ZW5jZXNEYXRhID0gcGFyc2VfZmFzdGEoZmFzdGEpO1xuICAgICAgICAgICAgY29uc3QgbmFtZXMgPSBzZXF1ZW5jZXNEYXRhLm1hcChzID0+IHMuaWQpO1xuICAgICAgICAgICAgY29uc3Qgc2VxdWVuY2VzID0gc2VxdWVuY2VzRGF0YS5tYXAocyA9PiBzLnJlc2lkdWVzKTtcbiAgICAgICAgICAgIHZpZXdlci5zZXRTZXF1ZW5jZXMobmFtZXMsIHNlcXVlbmNlcyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIG9yIHBhcnNpbmcgRkFTVEEgZmlsZTonLCBlcnJvcik7XG4gICAgICAgICAgICBhbGVydCgnRmFpbGVkIHRvIGxvYWQgc2VxdWVuY2VzLiBTZWUgY29uc29sZSBmb3IgZGV0YWlscy4nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsb2FkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZFNlcXVlbmNlcyk7XG4gICAgcmV2Q29tcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRpY2VzID0gdmlld2VyLmdldFNlbGVjdGVkU2VxdWVuY2VJbmRpY2VzKCk7XG4gICAgICAgIGlmIChzZWxlY3RlZEluZGljZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2VsZWN0ZWRJbmRpY2VzLmZvckVhY2goc2VxSW5kZXggPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU2VxdWVuY2UgPSB2aWV3ZXIuZ2V0U2VxdWVuY2VzKClbc2VxSW5kZXhdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJldkNvbXBTZXF1ZW5jZSA9IHJldmVyc2VfY29tcGxlbWVudChvcmlnaW5hbFNlcXVlbmNlKTtcbiAgICAgICAgICAgICAgICB2aWV3ZXIudXBkYXRlU2VxdWVuY2Uoc2VxSW5kZXgsIHJldkNvbXBTZXF1ZW5jZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZpZXdlci5jbGVhclNlbGVjdGVkU2VxdWVuY2VOYW1lcygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBzZWxlY3Qgb25lIG9yIG1vcmUgc2VxdWVuY2VzIHRvIHJldmVyc2UgY29tcGxlbWVudC4nKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHRyYW5zbGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB2aWV3ZXIuZ2V0U2VsZWN0ZWRTZXF1ZW5jZSgpO1xuICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRTZXF1ZW5jZSA9IHRyYW5zbGF0ZShzZWxlY3RlZC5zZXF1ZW5jZSwgMSk7IC8vIERlZmF1bHQgdG8gZnJhbWUgMVxuICAgICAgICAgICAgdmlld2VyLnNldFRyYW5zbGF0ZWRTZXF1ZW5jZXMoW3RyYW5zbGF0ZWRTZXF1ZW5jZV0sIDEpOyAvLyBBc3N1bWluZyBzaW5nbGUgc2VxdWVuY2UgZm9yIG5vd1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBzZWxlY3QgYSBzZXF1ZW5jZSB0byB0cmFuc2xhdGUuJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBmcmFtZTFCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdmlld2VyLmdldFNlbGVjdGVkU2VxdWVuY2UoKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2xhdGVkU2VxdWVuY2UgPSB0cmFuc2xhdGUoc2VsZWN0ZWQuc2VxdWVuY2UsIDEpO1xuICAgICAgICAgICAgdmlld2VyLnNldFRyYW5zbGF0ZWRTZXF1ZW5jZXMoW3RyYW5zbGF0ZWRTZXF1ZW5jZV0sIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBzZWxlY3QgYSBzZXF1ZW5jZSB0byB0cmFuc2xhdGUuJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBmcmFtZTJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdmlld2VyLmdldFNlbGVjdGVkU2VxdWVuY2UoKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2xhdGVkU2VxdWVuY2UgPSB0cmFuc2xhdGUoc2VsZWN0ZWQuc2VxdWVuY2UsIDIpO1xuICAgICAgICAgICAgdmlld2VyLnNldFRyYW5zbGF0ZWRTZXF1ZW5jZXMoW3RyYW5zbGF0ZWRTZXF1ZW5jZV0sIDIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBzZWxlY3QgYSBzZXF1ZW5jZSB0byB0cmFuc2xhdGUuJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBmcmFtZTNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdmlld2VyLmdldFNlbGVjdGVkU2VxdWVuY2UoKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2xhdGVkU2VxdWVuY2UgPSB0cmFuc2xhdGUoc2VsZWN0ZWQuc2VxdWVuY2UsIDMpO1xuICAgICAgICAgICAgdmlld2VyLnNldFRyYW5zbGF0ZWRTZXF1ZW5jZXMoW3RyYW5zbGF0ZWRTZXF1ZW5jZV0sIDMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBzZWxlY3QgYSBzZXF1ZW5jZSB0byB0cmFuc2xhdGUuJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBudWNsZW90aWRlTW9kZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdmlld2VyLnNldE51Y2xlb3RpZGVNb2RlKCk7XG4gICAgfSk7XG4gICAgLy8gTG9hZCBkZWZhdWx0IHNlcXVlbmNlcyBvbiBwYWdlIGxvYWRcbiAgICBsb2FkU2VxdWVuY2VzKCk7XG59XG5tYWluKCk7XG4iLCJleHBvcnQgY2xhc3MgU2VxdWVuY2VWaWV3ZXIge1xuICAgIHNlcXVlbmNlQ2FudmFzO1xuICAgIG5hbWVzQ2FudmFzO1xuICAgIHJ1bGVyQ2FudmFzO1xuICAgIHNlcUN0eDtcbiAgICBuYW1lc0N0eDtcbiAgICBydWxlckN0eDtcbiAgICBzZXF1ZW5jZXMgPSBbXTtcbiAgICBuYW1lcyA9IFtdO1xuICAgIHNlbGVjdGVkU2VxdWVuY2VOYW1lcyA9IG5ldyBTZXQoKTtcbiAgICBjb2xvcnMgPSB7XG4gICAgICAgICdBJzogeyBmb3JlZ3JvdW5kOiAnIzAxODAwMScsIGJhY2tncm91bmQ6ICcjNUFEQzVBJyB9LCAvLyBHcmVlbiBmb3JlZ3JvdW5kLCBsaWdodCBncmVlbiBiYWNrZ3JvdW5kXG4gICAgICAgICdDJzogeyBmb3JlZ3JvdW5kOiAnIzAxMDFGRicsIGJhY2tncm91bmQ6ICcjNjQ2NEZBJyB9LCAvLyBCbHVlIGZvcmVncm91bmQsIGxpZ2h0IGJsdWUgYmFja2dyb3VuZFxuICAgICAgICAnRyc6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnIzVBNUE1QScgfSwgLy8gQmxhY2sgZm9yZWdyb3VuZCwgZGFyayBncmF5IGJhY2tncm91bmRcbiAgICAgICAgJ1QnOiB7IGZvcmVncm91bmQ6ICcjRkYwMTAxJywgYmFja2dyb3VuZDogJyNGNTgyODInIH0sIC8vIFJlZCBmb3JlZ3JvdW5kLCBsaWdodCByZWQgYmFja2dyb3VuZFxuICAgICAgICAnVSc6IHsgZm9yZWdyb3VuZDogJyNGRjAxMDEnLCBiYWNrZ3JvdW5kOiAnI0Y1ODI4MicgfSwgLy8gU2FtZSBhcyBUXG4gICAgICAgICdSJzogeyBmb3JlZ3JvdW5kOiAnI0ZGMDBGRicsIGJhY2tncm91bmQ6ICcjRkZGRkZGJyB9LCAvLyBNYWdlbnRhIGZvcmVncm91bmQsIHdoaXRlIGJhY2tncm91bmRcbiAgICAgICAgJ1knOiB7IGZvcmVncm91bmQ6ICcjRkYwMEZGJywgYmFja2dyb3VuZDogJyNGRkZGRkYnIH0sXG4gICAgICAgICdTJzogeyBmb3JlZ3JvdW5kOiAnI0ZGMDBGRicsIGJhY2tncm91bmQ6ICcjRkZGRkZGJyB9LFxuICAgICAgICAnVyc6IHsgZm9yZWdyb3VuZDogJyNGRjAwRkYnLCBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicgfSxcbiAgICAgICAgJ0snOiB7IGZvcmVncm91bmQ6ICcjRkYwMEZGJywgYmFja2dyb3VuZDogJyNGRkZGRkYnIH0sXG4gICAgICAgICdNJzogeyBmb3JlZ3JvdW5kOiAnI0ZGMDBGRicsIGJhY2tncm91bmQ6ICcjRkZGRkZGJyB9LFxuICAgICAgICAnQic6IHsgZm9yZWdyb3VuZDogJyNGRjAwRkYnLCBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicgfSxcbiAgICAgICAgJ0QnOiB7IGZvcmVncm91bmQ6ICcjRkYwMEZGJywgYmFja2dyb3VuZDogJyNGRkZGRkYnIH0sXG4gICAgICAgICdIJzogeyBmb3JlZ3JvdW5kOiAnI0ZGMDBGRicsIGJhY2tncm91bmQ6ICcjRkZGRkZGJyB9LFxuICAgICAgICAnVic6IHsgZm9yZWdyb3VuZDogJyNGRjAwRkYnLCBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicgfSxcbiAgICAgICAgJ04nOiB7IGZvcmVncm91bmQ6ICcjRkYwMEZGJywgYmFja2dyb3VuZDogJyNGRkZGRkYnIH0sIC8vIE1hZ2VudGEgZm9yZWdyb3VuZCwgd2hpdGUgYmFja2dyb3VuZFxuICAgICAgICAnLSc6IHsgZm9yZWdyb3VuZDogJyM4MDgwODAnLCBiYWNrZ3JvdW5kOiAnI0ZBRkFGQScgfSwgLy8gRGFyayBncmF5IGZvcmVncm91bmQsIGxpZ2h0IGdyYXkgYmFja2dyb3VuZCAoR0FQKVxuICAgIH07XG4gICAgYW1pbm9BY2lkQ29sb3JzID0ge1xuICAgICAgICAnQSc6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnIzI3NkVCNycgfSxcbiAgICAgICAgJ0MnOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyNFNjgwODAnIH0sXG4gICAgICAgICdEJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjQ0M0RENDJyB9LFxuICAgICAgICAnRSc6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnIzk4NDA5NycgfSxcbiAgICAgICAgJ0YnOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyMxOTgwRTYnIH0sXG4gICAgICAgICdHJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjRTY5OTREJyB9LFxuICAgICAgICAnSCc6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnIzE5QjNCMycgfSxcbiAgICAgICAgJ0knOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyM0RTlCRjMnIH0sXG4gICAgICAgICdLJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjRTYzMzE5JyB9LFxuICAgICAgICAnTCc6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnIzc4QTZENScgfSxcbiAgICAgICAgJ00nOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyMwRjU0OUInIH0sXG4gICAgICAgICdOJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjMTlDQzE5JyB9LFxuICAgICAgICAnUCc6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnI0NDQ0MwMCcgfSxcbiAgICAgICAgJ1EnOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyM1Q0VENUMnIH0sXG4gICAgICAgICdSJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjRjY0NDJDJyB9LFxuICAgICAgICAnUyc6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnIzAyOTYwMicgfSxcbiAgICAgICAgJ1QnOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyM0NUM5NDUnIH0sXG4gICAgICAgICdWJzogeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjMDQ3REY5JyB9LFxuICAgICAgICAnVyc6IHsgZm9yZWdyb3VuZDogJyMwMDAwMDAnLCBiYWNrZ3JvdW5kOiAnIzAzNTVBOScgfSxcbiAgICAgICAgJ1knOiB7IGZvcmVncm91bmQ6ICcjMDAwMDAwJywgYmFja2dyb3VuZDogJyMxNEM2QzgnIH0sXG4gICAgICAgICcqJzogeyBmb3JlZ3JvdW5kOiAnIzAwRkZGRicsIGJhY2tncm91bmQ6ICcjNjk2OTY5JyB9LCAvLyBTVE9QIGNvZG9uIChkYXJrR3JheSlcbiAgICAgICAgJy0nOiB7IGZvcmVncm91bmQ6ICcjQTlBOUE5JywgYmFja2dyb3VuZDogJyNFNkU2RTYnIH0sIC8vIEdBUCAoZGFya0dyYXksIDIzMCwyMzAsMjMwKVxuICAgICAgICAnWCc6IHsgZm9yZWdyb3VuZDogJyMwMEZGRkYnLCBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicgfSwgLy8gVW5rbm93biAoY3lhbiwgd2hpdGUpXG4gICAgfTtcbiAgICBibG9ja1dpZHRoID0gMjA7XG4gICAgYmxvY2tIZWlnaHQgPSAyMDtcbiAgICBzY3JvbGxYID0gMDtcbiAgICBzY3JvbGxZID0gMDtcbiAgICBtYXhTZXF1ZW5jZUxlbmd0aCA9IDA7XG4gICAgaXNSZWRyYXdTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICBzZWxlY3Rpb25TdGFydCA9IG51bGw7XG4gICAgc2VsZWN0aW9uRW5kID0gbnVsbDtcbiAgICBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgaXNEcmFnZ2luZ0hTY3JvbGxiYXIgPSBmYWxzZTtcbiAgICBpc0RyYWdnaW5nVlNjcm9sbGJhciA9IGZhbHNlO1xuICAgIGxhc3RNb3VzZVggPSAwO1xuICAgIGxhc3RNb3VzZVkgPSAwO1xuICAgIHNjcm9sbGJhcldpZHRoID0gMTA7XG4gICAgc2Nyb2xsYmFyQ29sb3IgPSAnIzg4OCc7XG4gICAgc2Nyb2xsYmFyVHJhY2tDb2xvciA9ICcjZjFmMWYxJztcbiAgICBkaXNwbGF5TW9kZSA9ICdudWNsZW90aWRlJztcbiAgICB0cmFuc2xhdGVkU2VxdWVuY2VzID0gW107XG4gICAgY3VycmVudFJlYWRpbmdGcmFtZSA9IDE7XG4gICAgY29uc3RydWN0b3Ioc2VxdWVuY2VDYW52YXMsIG5hbWVzQ2FudmFzLCBydWxlckNhbnZhcykge1xuICAgICAgICB0aGlzLnNlcXVlbmNlQ2FudmFzID0gc2VxdWVuY2VDYW52YXM7XG4gICAgICAgIHRoaXMubmFtZXNDYW52YXMgPSBuYW1lc0NhbnZhcztcbiAgICAgICAgdGhpcy5ydWxlckNhbnZhcyA9IHJ1bGVyQ2FudmFzO1xuICAgICAgICB0aGlzLnNlcUN0eCA9IHNlcXVlbmNlQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHRoaXMubmFtZXNDdHggPSBuYW1lc0NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICB0aGlzLnJ1bGVyQ3R4ID0gcnVsZXJDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgdGhpcy5zZXF1ZW5jZUNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMub25XaGVlbC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5uYW1lc0NhbnZhcy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMub25XaGVlbC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5uYW1lc0NhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uTmFtZXNDYW52YXNNb3VzZURvd24uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuc2VxdWVuY2VDYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5zZXF1ZW5jZUNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnNlcXVlbmNlQ2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5yZXNpemVDYW52YXMoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplQ2FudmFzLmJpbmQodGhpcykpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBzZXRTZXF1ZW5jZXMobmFtZXMsIHNlcXVlbmNlcykge1xuICAgICAgICB0aGlzLm5hbWVzID0gbmFtZXM7XG4gICAgICAgIHRoaXMuc2VxdWVuY2VzID0gc2VxdWVuY2VzO1xuICAgICAgICB0aGlzLm1heFNlcXVlbmNlTGVuZ3RoID0gTWF0aC5tYXgoLi4uc2VxdWVuY2VzLm1hcChzID0+IHMubGVuZ3RoKSk7XG4gICAgICAgIHRoaXMuc2Nyb2xsWCA9IDA7XG4gICAgICAgIHRoaXMuc2Nyb2xsWSA9IDA7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IG51bGw7XG4gICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgIH1cbiAgICBnZXRTZWxlY3RlZFNlcXVlbmNlKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uU3RhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZXFJbmRleDogdGhpcy5zZWxlY3Rpb25TdGFydC5zZXFJbmRleCxcbiAgICAgICAgICAgIHNlcXVlbmNlOiB0aGlzLnNlcXVlbmNlc1t0aGlzLnNlbGVjdGlvblN0YXJ0LnNlcUluZGV4XVxuICAgICAgICB9O1xuICAgIH1cbiAgICB1cGRhdGVTZXF1ZW5jZShzZXFJbmRleCwgbmV3U2VxdWVuY2UpIHtcbiAgICAgICAgdGhpcy5zZXF1ZW5jZXNbc2VxSW5kZXhdID0gbmV3U2VxdWVuY2U7XG4gICAgICAgIHRoaXMubWF4U2VxdWVuY2VMZW5ndGggPSBNYXRoLm1heCguLi50aGlzLnNlcXVlbmNlcy5tYXAocyA9PiBzLmxlbmd0aCkpO1xuICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICB9XG4gICAgZ2V0U2VxdWVuY2VzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXF1ZW5jZXM7XG4gICAgfVxuICAgIGdldFNlbGVjdGVkU2VxdWVuY2VJbmRpY2VzKCkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnNlbGVjdGVkU2VxdWVuY2VOYW1lcyk7XG4gICAgfVxuICAgIGNsZWFyU2VsZWN0ZWRTZXF1ZW5jZU5hbWVzKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkU2VxdWVuY2VOYW1lcy5jbGVhcigpO1xuICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICB9XG4gICAgc2V0VHJhbnNsYXRlZFNlcXVlbmNlcyhzZXF1ZW5jZXMsIGZyYW1lKSB7XG4gICAgICAgIHRoaXMudHJhbnNsYXRlZFNlcXVlbmNlcyA9IHNlcXVlbmNlcztcbiAgICAgICAgdGhpcy5jdXJyZW50UmVhZGluZ0ZyYW1lID0gZnJhbWU7XG4gICAgICAgIHRoaXMuZGlzcGxheU1vZGUgPSAnYW1pbm9hY2lkJztcbiAgICAgICAgdGhpcy5zY3JvbGxYID0gMDtcbiAgICAgICAgdGhpcy5zY3JvbGxZID0gMDtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IG51bGw7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgfVxuICAgIHNldE51Y2xlb3RpZGVNb2RlKCkge1xuICAgICAgICB0aGlzLmRpc3BsYXlNb2RlID0gJ251Y2xlb3RpZGUnO1xuICAgICAgICB0aGlzLnNjcm9sbFggPSAwO1xuICAgICAgICB0aGlzLnNjcm9sbFkgPSAwO1xuICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSBudWxsO1xuICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICB9XG4gICAgcmVzaXplQ2FudmFzKCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLnNlcXVlbmNlQ2FudmFzLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc2VxdWVuY2VDYW52YXMud2lkdGggPSBwYXJlbnQuY2xpZW50V2lkdGg7XG4gICAgICAgIHRoaXMuc2VxdWVuY2VDYW52YXMuaGVpZ2h0ID0gcGFyZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgY29uc3QgbmFtZXNQYXJlbnQgPSB0aGlzLm5hbWVzQ2FudmFzLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHRoaXMubmFtZXNDYW52YXMud2lkdGggPSBuYW1lc1BhcmVudC5jbGllbnRXaWR0aDtcbiAgICAgICAgdGhpcy5uYW1lc0NhbnZhcy5oZWlnaHQgPSBuYW1lc1BhcmVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGNvbnN0IHJ1bGVyUGFyZW50ID0gdGhpcy5ydWxlckNhbnZhcy5wYXJlbnRFbGVtZW50O1xuICAgICAgICB0aGlzLnJ1bGVyQ2FudmFzLndpZHRoID0gcnVsZXJQYXJlbnQuY2xpZW50V2lkdGg7XG4gICAgICAgIHRoaXMucnVsZXJDYW52YXMuaGVpZ2h0ID0gMjA7XG4gICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgIH1cbiAgICBvbk1vdXNlRG93bihldmVudCkge1xuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5zZXF1ZW5jZUNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgICAgIC8vIENoZWNrIGZvciBob3Jpem9udGFsIHNjcm9sbGJhciBjbGlja1xuICAgICAgICBjb25zdCBjb250ZW50V2lkdGggPSB0aGlzLm1heFNlcXVlbmNlTGVuZ3RoICogdGhpcy5ibG9ja1dpZHRoO1xuICAgICAgICBjb25zdCBjYW52YXNXaWR0aCA9IHRoaXMuc2VxdWVuY2VDYW52YXMud2lkdGg7XG4gICAgICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9IHRoaXMuc2VxdWVuY2VDYW52YXMuaGVpZ2h0O1xuICAgICAgICBpZiAoY29udGVudFdpZHRoID4gY2FudmFzV2lkdGggJiYgeSA+PSBjYW52YXNIZWlnaHQgLSB0aGlzLnNjcm9sbGJhcldpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmdIU2Nyb2xsYmFyID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGFzdE1vdXNlWCA9IHg7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgZm9yIHZlcnRpY2FsIHNjcm9sbGJhciBjbGlja1xuICAgICAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gdGhpcy5zZXF1ZW5jZXMubGVuZ3RoICogdGhpcy5ibG9ja0hlaWdodDtcbiAgICAgICAgaWYgKGNvbnRlbnRIZWlnaHQgPiBjYW52YXNIZWlnaHQgJiYgeCA+PSBjYW52YXNXaWR0aCAtIHRoaXMuc2Nyb2xsYmFyV2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuaXNEcmFnZ2luZ1ZTY3JvbGxiYXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sYXN0TW91c2VZID0geTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICBjb25zdCBzZXFJbmRleCA9IE1hdGguZmxvb3IoKHkgKyB0aGlzLnNjcm9sbFkpIC8gdGhpcy5ibG9ja0hlaWdodCk7XG4gICAgICAgIGNvbnN0IHBvcyA9IE1hdGguZmxvb3IoKHggKyB0aGlzLnNjcm9sbFgpIC8gdGhpcy5ibG9ja1dpZHRoKTtcbiAgICAgICAgaWYgKHNlcUluZGV4ID49IDAgJiYgc2VxSW5kZXggPCB0aGlzLnNlcXVlbmNlcy5sZW5ndGggJiYgcG9zID49IDAgJiYgcG9zIDwgdGhpcy5zZXF1ZW5jZXNbc2VxSW5kZXhdLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHsgc2VxSW5kZXgsIHBvcyB9O1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSB7IHNlcUluZGV4LCBwb3MgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgIH1cbiAgICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5zZXF1ZW5jZUNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgICAgIGlmICh0aGlzLmlzRHJhZ2dpbmdIU2Nyb2xsYmFyKSB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50V2lkdGggPSB0aGlzLm1heFNlcXVlbmNlTGVuZ3RoICogdGhpcy5ibG9ja1dpZHRoO1xuICAgICAgICAgICAgY29uc3QgY2FudmFzV2lkdGggPSB0aGlzLnNlcXVlbmNlQ2FudmFzLndpZHRoO1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYmFyVHJhY2tXaWR0aCA9IGNhbnZhc1dpZHRoIC0gdGhpcy5zY3JvbGxiYXJXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGJhclRodW1iV2lkdGggPSBNYXRoLm1heCg1MCwgc2Nyb2xsYmFyVHJhY2tXaWR0aCAqIChjYW52YXNXaWR0aCAvIGNvbnRlbnRXaWR0aCkpO1xuICAgICAgICAgICAgY29uc3QgZGVsdGFYID0geCAtIHRoaXMubGFzdE1vdXNlWDtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFJhdGlvID0gKGNvbnRlbnRXaWR0aCAtIGNhbnZhc1dpZHRoKSAvIChzY3JvbGxiYXJUcmFja1dpZHRoIC0gc2Nyb2xsYmFyVGh1bWJXaWR0aCk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFggKz0gZGVsdGFYICogc2Nyb2xsUmF0aW87XG4gICAgICAgICAgICB0aGlzLmxhc3RNb3VzZVggPSB4O1xuICAgICAgICAgICAgY29uc3QgbWF4U2Nyb2xsWCA9IGNvbnRlbnRXaWR0aCAtIGNhbnZhc1dpZHRoO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxYID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5zY3JvbGxYLCBtYXhTY3JvbGxYKSk7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0RyYWdnaW5nVlNjcm9sbGJhcikge1xuICAgICAgICAgICAgY29uc3QgY29udGVudEhlaWdodCA9IHRoaXMuc2VxdWVuY2VzLmxlbmd0aCAqIHRoaXMuYmxvY2tIZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBjYW52YXNIZWlnaHQgPSB0aGlzLnNlcXVlbmNlQ2FudmFzLmhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGJhclRyYWNrSGVpZ2h0ID0gY2FudmFzSGVpZ2h0IC0gdGhpcy5zY3JvbGxiYXJXaWR0aDtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGJhclRodW1iSGVpZ2h0ID0gTWF0aC5tYXgoNTAsIHNjcm9sbGJhclRyYWNrSGVpZ2h0ICogKGNhbnZhc0hlaWdodCAvIGNvbnRlbnRIZWlnaHQpKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhWSA9IHkgLSB0aGlzLmxhc3RNb3VzZVk7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxSYXRpbyA9IChjb250ZW50SGVpZ2h0IC0gY2FudmFzSGVpZ2h0KSAvIChzY3JvbGxiYXJUcmFja0hlaWdodCAtIHNjcm9sbGJhclRodW1iSGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsWSArPSBkZWx0YVkgKiBzY3JvbGxSYXRpbztcbiAgICAgICAgICAgIHRoaXMubGFzdE1vdXNlWSA9IHk7XG4gICAgICAgICAgICBjb25zdCBtYXhTY3JvbGxZID0gY29udGVudEhlaWdodCAtIGNhbnZhc0hlaWdodDtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsWSA9IE1hdGgubWF4KDAsIE1hdGgubWluKHRoaXMuc2Nyb2xsWSwgbWF4U2Nyb2xsWSkpO1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmlzRHJhZ2dpbmcgfHwgIXRoaXMuc2VsZWN0aW9uU3RhcnQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHNlcUluZGV4ID0gTWF0aC5mbG9vcigoeSArIHRoaXMuc2Nyb2xsWSkgLyB0aGlzLmJsb2NrSGVpZ2h0KTtcbiAgICAgICAgY29uc3QgcG9zID0gTWF0aC5mbG9vcigoeCArIHRoaXMuc2Nyb2xsWCkgLyB0aGlzLmJsb2NrV2lkdGgpO1xuICAgICAgICAvLyBBbGxvdyBzZWxlY3Rpb24gYWNyb3NzIG11bHRpcGxlIHNlcXVlbmNlc1xuICAgICAgICBpZiAoc2VxSW5kZXggPj0gMCAmJiBzZXFJbmRleCA8IHRoaXMuc2VxdWVuY2VzLmxlbmd0aCAmJiBwb3MgPj0gMCAmJiBwb3MgPD0gdGhpcy5zZXF1ZW5jZXNbc2VxSW5kZXhdLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSB7IHNlcUluZGV4LCBwb3MgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICB9XG4gICAgb25Nb3VzZVVwKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRHJhZ2dpbmdIU2Nyb2xsYmFyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZ1ZTY3JvbGxiYXIgPSBmYWxzZTtcbiAgICB9XG4gICAgZ2V0U2VsZWN0ZWRUZXh0KCkge1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0aW9uU3RhcnQgfHwgIXRoaXMuc2VsZWN0aW9uRW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RhcnRSb3cgPSBNYXRoLm1pbih0aGlzLnNlbGVjdGlvblN0YXJ0LnNlcUluZGV4LCB0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCk7XG4gICAgICAgIGNvbnN0IGVuZFJvdyA9IE1hdGgubWF4KHRoaXMuc2VsZWN0aW9uU3RhcnQuc2VxSW5kZXgsIHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4KTtcbiAgICAgICAgY29uc3Qgc3RhcnRDb2wgPSBNYXRoLm1pbih0aGlzLnNlbGVjdGlvblN0YXJ0LnBvcywgdGhpcy5zZWxlY3Rpb25FbmQucG9zKTtcbiAgICAgICAgY29uc3QgZW5kQ29sID0gTWF0aC5tYXgodGhpcy5zZWxlY3Rpb25TdGFydC5wb3MsIHRoaXMuc2VsZWN0aW9uRW5kLnBvcyk7XG4gICAgICAgIGxldCBzZWxlY3RlZFRleHQgPSAnJztcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0Um93OyBpIDw9IGVuZFJvdzsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzZXF1ZW5jZSA9IHRoaXMuc2VxdWVuY2VzW2ldO1xuICAgICAgICAgICAgc2VsZWN0ZWRUZXh0ICs9IHNlcXVlbmNlLnN1YnN0cmluZyhzdGFydENvbCwgZW5kQ29sICsgMSk7IC8vICsxIGJlY2F1c2Ugc3Vic3RyaW5nIGVuZCBpcyBleGNsdXNpdmVcbiAgICAgICAgICAgIGlmIChpIDwgZW5kUm93KSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUZXh0ICs9ICdcXG4nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3RlZFRleHQ7XG4gICAgfVxuICAgIGRlbGV0ZVNlbGVjdGVkUmFuZ2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5zZWxlY3Rpb25TdGFydCB8fCAhdGhpcy5zZWxlY3Rpb25FbmQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0Um93ID0gTWF0aC5taW4odGhpcy5zZWxlY3Rpb25TdGFydC5zZXFJbmRleCwgdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXgpO1xuICAgICAgICBjb25zdCBlbmRSb3cgPSBNYXRoLm1heCh0aGlzLnNlbGVjdGlvblN0YXJ0LnNlcUluZGV4LCB0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCk7XG4gICAgICAgIGNvbnN0IHN0YXJ0Q29sID0gTWF0aC5taW4odGhpcy5zZWxlY3Rpb25TdGFydC5wb3MsIHRoaXMuc2VsZWN0aW9uRW5kLnBvcyk7XG4gICAgICAgIGNvbnN0IGVuZENvbCA9IE1hdGgubWF4KHRoaXMuc2VsZWN0aW9uU3RhcnQucG9zLCB0aGlzLnNlbGVjdGlvbkVuZC5wb3MpO1xuICAgICAgICBjb25zdCBuZXdDdXJzb3JQb3MgPSB7IHNlcUluZGV4OiBzdGFydFJvdywgcG9zOiBzdGFydENvbCB9O1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRSb3c7IGkgPD0gZW5kUm93OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU2VxdWVuY2UgPSB0aGlzLnNlcXVlbmNlc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1NlcXVlbmNlID0gb3JpZ2luYWxTZXF1ZW5jZS5zbGljZSgwLCBzdGFydENvbCkgKyBvcmlnaW5hbFNlcXVlbmNlLnNsaWNlKGVuZENvbCArIDEpO1xuICAgICAgICAgICAgdGhpcy5zZXF1ZW5jZXNbaV0gPSBuZXdTZXF1ZW5jZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1heFNlcXVlbmNlTGVuZ3RoID0gTWF0aC5tYXgoLi4udGhpcy5zZXF1ZW5jZXMubWFwKHMgPT4gcy5sZW5ndGgpKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IG51bGw7IC8vIENsZWFyIHNlbGVjdGlvblxuICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IG51bGw7XG4gICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgICAgICByZXR1cm4gbmV3Q3Vyc29yUG9zO1xuICAgIH1cbiAgICBmaWxsU2VsZWN0aW9uKGNoYXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvblN0YXJ0IHx8ICF0aGlzLnNlbGVjdGlvbkVuZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0Um93ID0gTWF0aC5taW4odGhpcy5zZWxlY3Rpb25TdGFydC5zZXFJbmRleCwgdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXgpO1xuICAgICAgICBjb25zdCBlbmRSb3cgPSBNYXRoLm1heCh0aGlzLnNlbGVjdGlvblN0YXJ0LnNlcUluZGV4LCB0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCk7XG4gICAgICAgIGNvbnN0IHN0YXJ0Q29sID0gTWF0aC5taW4odGhpcy5zZWxlY3Rpb25TdGFydC5wb3MsIHRoaXMuc2VsZWN0aW9uRW5kLnBvcyk7XG4gICAgICAgIGNvbnN0IGVuZENvbCA9IE1hdGgubWF4KHRoaXMuc2VsZWN0aW9uU3RhcnQucG9zLCB0aGlzLnNlbGVjdGlvbkVuZC5wb3MpO1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRSb3c7IGkgPD0gZW5kUm93OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU2VxdWVuY2UgPSB0aGlzLnNlcXVlbmNlc1tpXTtcbiAgICAgICAgICAgIGxldCBuZXdTZXF1ZW5jZUFycmF5ID0gb3JpZ2luYWxTZXF1ZW5jZS5zcGxpdCgnJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gc3RhcnRDb2w7IGogPD0gZW5kQ29sOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaiA8IG5ld1NlcXVlbmNlQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1NlcXVlbmNlQXJyYXlbal0gPSBjaGFyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2VxdWVuY2VzW2ldID0gbmV3U2VxdWVuY2VBcnJheS5qb2luKCcnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1heFNlcXVlbmNlTGVuZ3RoID0gTWF0aC5tYXgoLi4udGhpcy5zZXF1ZW5jZXMubWFwKHMgPT4gcy5sZW5ndGgpKTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IG51bGw7IC8vIENsZWFyIHNlbGVjdGlvblxuICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IG51bGw7XG4gICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgIH1cbiAgICBvbktleURvd24oZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvblN0YXJ0KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjJykge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRUZXh0ID0gdGhpcy5nZXRTZWxlY3RlZFRleHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHNlbGVjdGVkVGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC5rZXkudG9Mb3dlckNhc2UoKSA9PT0gJ3YnKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLnJlYWRUZXh0KCkudGhlbih0ZXh0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHQgJiYgdGhpcy5zZWxlY3Rpb25TdGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBzZXFJbmRleCB9ID0gdGhpcy5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gTWF0aC5taW4odGhpcy5zZWxlY3Rpb25TdGFydC5wb3MsIHRoaXMuc2VsZWN0aW9uRW5kLnBvcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmQgPSBNYXRoLm1heCh0aGlzLnNlbGVjdGlvblN0YXJ0LnBvcywgdGhpcy5zZWxlY3Rpb25FbmQucG9zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU2VxdWVuY2UgPSB0aGlzLnNlcXVlbmNlc1tzZXFJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdTZXF1ZW5jZSA9IG9yaWdpbmFsU2VxdWVuY2Uuc2xpY2UoMCwgc3RhcnQpICsgdGV4dCArIG9yaWdpbmFsU2VxdWVuY2Uuc2xpY2UoZW5kICsgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcXVlbmNlc1tzZXFJbmRleF0gPSBuZXdTZXF1ZW5jZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSB7IHNlcUluZGV4LCBwb3M6IHN0YXJ0ICsgdGV4dC5sZW5ndGggfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gdGhpcy5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF4U2VxdWVuY2VMZW5ndGggPSBNYXRoLm1heCguLi50aGlzLnNlcXVlbmNlcy5tYXAocyA9PiBzLmxlbmd0aCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBzZXFJbmRleCwgcG9zIH0gPSB0aGlzLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICBjb25zdCBpdXBhY0NoYXJhY3RlcnMgPSAnQUNHVFVSWVNXS01CREhWTi0nO1xuICAgICAgICBpZiAoaXVwYWNDaGFyYWN0ZXJzLmluY2x1ZGVzKGV2ZW50LmtleS50b1VwcGVyQ2FzZSgpKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU2VxdWVuY2UgPSB0aGlzLnNlcXVlbmNlc1tzZXFJbmRleF07XG4gICAgICAgICAgICBsZXQgbmV3U2VxdWVuY2UgPSAnJztcbiAgICAgICAgICAgIGxldCBuZXdQb3MgPSBwb3M7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb25TdGFydCAmJiB0aGlzLnNlbGVjdGlvbkVuZCkgeyAvLyBDaGVjayBpZiBhbnkgc2VsZWN0aW9uIGV4aXN0c1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsbFNlbGVjdGlvbihldmVudC5rZXkudG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBFeGl0IGFmdGVyIGZpbGxpbmcgc2VsZWN0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBObyBzZWxlY3Rpb24sIGp1c3QgaW5zZXJ0XG4gICAgICAgICAgICAgICAgbmV3U2VxdWVuY2UgPSBvcmlnaW5hbFNlcXVlbmNlLnNsaWNlKDAsIHBvcykgKyBldmVudC5rZXkudG9VcHBlckNhc2UoKSArIG9yaWdpbmFsU2VxdWVuY2Uuc2xpY2UocG9zKTtcbiAgICAgICAgICAgICAgICBuZXdQb3MgPSBwb3MgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXF1ZW5jZXNbc2VxSW5kZXhdID0gbmV3U2VxdWVuY2U7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0geyBzZXFJbmRleCwgcG9zOiBuZXdQb3MgfTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gdGhpcy5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICAgIHRoaXMubWF4U2VxdWVuY2VMZW5ndGggPSBNYXRoLm1heCguLi50aGlzLnNlcXVlbmNlcy5tYXAocyA9PiBzLmxlbmd0aCkpO1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnICcpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFNlcXVlbmNlID0gdGhpcy5zZXF1ZW5jZXNbc2VxSW5kZXhdO1xuICAgICAgICAgICAgbGV0IG5ld1NlcXVlbmNlID0gJyc7XG4gICAgICAgICAgICBsZXQgbmV3UG9zID0gcG9zO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uU3RhcnQgJiYgdGhpcy5zZWxlY3Rpb25FbmQpIHsgLy8gQ2hlY2sgaWYgYW55IHNlbGVjdGlvbiBleGlzdHNcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxTZWxlY3Rpb24oJy0nKTtcbiAgICAgICAgICAgICAgICByZXR1cm47IC8vIEV4aXQgYWZ0ZXIgZmlsbGluZyBzZWxlY3Rpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE5vIHNlbGVjdGlvbiwganVzdCBpbnNlcnRcbiAgICAgICAgICAgICAgICBuZXdTZXF1ZW5jZSA9IG9yaWdpbmFsU2VxdWVuY2Uuc2xpY2UoMCwgcG9zKSArICctJyArIG9yaWdpbmFsU2VxdWVuY2Uuc2xpY2UocG9zKTtcbiAgICAgICAgICAgICAgICBuZXdQb3MgPSBwb3MgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXF1ZW5jZXNbc2VxSW5kZXhdID0gbmV3U2VxdWVuY2U7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0geyBzZXFJbmRleCwgcG9zOiBuZXdQb3MgfTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gdGhpcy5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICAgIHRoaXMubWF4U2VxdWVuY2VMZW5ndGggPSBNYXRoLm1heCguLi50aGlzLnNlcXVlbmNlcy5tYXAocyA9PiBzLmxlbmd0aCkpO1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dMZWZ0Jykge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIC8vIEV4dGVuZCBzZWxlY3Rpb24gbGVmdFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGlvbkVuZC5wb3MgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kLnBvcy0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXgtLTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQucG9zID0gdGhpcy5zZXF1ZW5jZXNbdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXhdLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBNb3ZlIGN1cnNvciBsZWZ0LCBjbGVhciBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICBpZiAocG9zID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0geyBzZXFJbmRleCwgcG9zOiBwb3MgLSAxIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlcUluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0geyBzZXFJbmRleDogc2VxSW5kZXggLSAxLCBwb3M6IHRoaXMuc2VxdWVuY2VzW3NlcUluZGV4IC0gMV0ubGVuZ3RoIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gdGhpcy5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFNlcXVlbmNlTGVuZ3RoID0gdGhpcy5zZXF1ZW5jZXNbc2VxSW5kZXhdLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIC8vIEV4dGVuZCBzZWxlY3Rpb24gcmlnaHRcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb25FbmQucG9zIDwgY3VycmVudFNlcXVlbmNlTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kLnBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCA8IHRoaXMuc2VxdWVuY2VzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXgrKztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQucG9zID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBNb3ZlIGN1cnNvciByaWdodCwgY2xlYXIgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgaWYgKHBvcyA8IGN1cnJlbnRTZXF1ZW5jZUxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0geyBzZXFJbmRleCwgcG9zOiBwb3MgKyAxIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlcUluZGV4IDwgdGhpcy5zZXF1ZW5jZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0geyBzZXFJbmRleDogc2VxSW5kZXggKyAxLCBwb3M6IDAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSB0aGlzLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0UmVkcmF3KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAvLyBFeHRlbmQgc2VsZWN0aW9uIHVwXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleC0tO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZC5wb3MgPSBNYXRoLm1pbih0aGlzLnNlbGVjdGlvbkVuZC5wb3MsIHRoaXMuc2VxdWVuY2VzW3RoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4XS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1vdmUgY3Vyc29yIHVwLCBjbGVhciBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICBpZiAoc2VxSW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSB7IHNlcUluZGV4OiBzZXFJbmRleCAtIDEsIHBvczogTWF0aC5taW4ocG9zLCB0aGlzLnNlcXVlbmNlc1tzZXFJbmRleCAtIDFdLmxlbmd0aCkgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSB7IHNlcUluZGV4OiAwLCBwb3M6IDAgfTsgLy8gTW92ZSB0byBzdGFydCBvZiBmaXJzdCBzZXF1ZW5jZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZCA9IHRoaXMuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICAgICAgLy8gRXh0ZW5kIHNlbGVjdGlvbiBkb3duXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4IDwgdGhpcy5zZXF1ZW5jZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZC5zZXFJbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkVuZC5wb3MgPSBNYXRoLm1pbih0aGlzLnNlbGVjdGlvbkVuZC5wb3MsIHRoaXMuc2VxdWVuY2VzW3RoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4XS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1vdmUgY3Vyc29yIGRvd24sIGNsZWFyIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgIGlmIChzZXFJbmRleCA8IHRoaXMuc2VxdWVuY2VzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHsgc2VxSW5kZXg6IHNlcUluZGV4ICsgMSwgcG9zOiBNYXRoLm1pbihwb3MsIHRoaXMuc2VxdWVuY2VzW3NlcUluZGV4ICsgMV0ubGVuZ3RoKSB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdFNlcUluZGV4ID0gdGhpcy5zZXF1ZW5jZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHsgc2VxSW5kZXg6IGxhc3RTZXFJbmRleCwgcG9zOiB0aGlzLnNlcXVlbmNlc1tsYXN0U2VxSW5kZXhdLmxlbmd0aCB9OyAvLyBNb3ZlIHRvIGVuZCBvZiBsYXN0IHNlcXVlbmNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uRW5kID0gdGhpcy5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ0JhY2tzcGFjZScpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAocG9zID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsU2VxdWVuY2UgPSB0aGlzLnNlcXVlbmNlc1tzZXFJbmRleF07XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3U2VxdWVuY2UgPSBvcmlnaW5hbFNlcXVlbmNlLnNsaWNlKDAsIHBvcyAtIDEpICsgb3JpZ2luYWxTZXF1ZW5jZS5zbGljZShwb3MpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VxdWVuY2VzW3NlcUluZGV4XSA9IG5ld1NlcXVlbmNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQucG9zLS07XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25FbmQgPSB0aGlzLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgICAgIHRoaXMubWF4U2VxdWVuY2VMZW5ndGggPSBNYXRoLm1heCguLi50aGlzLnNlcXVlbmNlcy5tYXAocyA9PiBzLmxlbmd0aCkpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ0RlbGV0ZScpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbFNlcXVlbmNlID0gdGhpcy5zZXF1ZW5jZXNbc2VxSW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgbmV3U2VxdWVuY2UgPSBvcmlnaW5hbFNlcXVlbmNlLnNsaWNlKDAsIHBvcykgKyBvcmlnaW5hbFNlcXVlbmNlLnNsaWNlKHBvcyArIDEpO1xuICAgICAgICAgICAgdGhpcy5zZXF1ZW5jZXNbc2VxSW5kZXhdID0gbmV3U2VxdWVuY2U7XG4gICAgICAgICAgICB0aGlzLm1heFNlcXVlbmNlTGVuZ3RoID0gTWF0aC5tYXgoLi4udGhpcy5zZXF1ZW5jZXMubWFwKHMgPT4gcy5sZW5ndGgpKTtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uV2hlZWwoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zY3JvbGxYICs9IGV2ZW50LmRlbHRhWDtcbiAgICAgICAgdGhpcy5zY3JvbGxZICs9IGV2ZW50LmRlbHRhWTtcbiAgICAgICAgY29uc3QgbWF4U2Nyb2xsWCA9IHRoaXMubWF4U2VxdWVuY2VMZW5ndGggKiB0aGlzLmJsb2NrV2lkdGggLSB0aGlzLnNlcXVlbmNlQ2FudmFzLndpZHRoO1xuICAgICAgICBjb25zdCBtYXhTY3JvbGxZID0gdGhpcy5zZXF1ZW5jZXMubGVuZ3RoICogdGhpcy5ibG9ja0hlaWdodCAtIHRoaXMuc2VxdWVuY2VDYW52YXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLnNjcm9sbFggPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLnNjcm9sbFgsIG1heFNjcm9sbFgpKTtcbiAgICAgICAgdGhpcy5zY3JvbGxZID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5zY3JvbGxZLCBtYXhTY3JvbGxZKSk7XG4gICAgICAgIHRoaXMucmVxdWVzdFJlZHJhdygpO1xuICAgIH1cbiAgICByZXF1ZXN0UmVkcmF3KCkge1xuICAgICAgICBpZiAodGhpcy5pc1JlZHJhd1NjaGVkdWxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNSZWRyYXdTY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kcmF3KCk7XG4gICAgICAgICAgICB0aGlzLmlzUmVkcmF3U2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc051Y2xlb3RpZGVTZWxlY3RlZChzZXFJbmRleCwgcG9zKSB7XG4gICAgICAgIGlmICghdGhpcy5zZWxlY3Rpb25TdGFydCB8fCAhdGhpcy5zZWxlY3Rpb25FbmQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGFydFJvdyA9IE1hdGgubWluKHRoaXMuc2VsZWN0aW9uU3RhcnQuc2VxSW5kZXgsIHRoaXMuc2VsZWN0aW9uRW5kLnNlcUluZGV4KTtcbiAgICAgICAgY29uc3QgZW5kUm93ID0gTWF0aC5tYXgodGhpcy5zZWxlY3Rpb25TdGFydC5zZXFJbmRleCwgdGhpcy5zZWxlY3Rpb25FbmQuc2VxSW5kZXgpO1xuICAgICAgICBjb25zdCBzdGFydENvbCA9IE1hdGgubWluKHRoaXMuc2VsZWN0aW9uU3RhcnQucG9zLCB0aGlzLnNlbGVjdGlvbkVuZC5wb3MpO1xuICAgICAgICBjb25zdCBlbmRDb2wgPSBNYXRoLm1heCh0aGlzLnNlbGVjdGlvblN0YXJ0LnBvcywgdGhpcy5zZWxlY3Rpb25FbmQucG9zKTtcbiAgICAgICAgcmV0dXJuIHNlcUluZGV4ID49IHN0YXJ0Um93ICYmIHNlcUluZGV4IDw9IGVuZFJvdyAmJiBwb3MgPj0gc3RhcnRDb2wgJiYgcG9zIDw9IGVuZENvbDtcbiAgICB9XG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5kcmF3U2VxdWVuY2VzKCk7XG4gICAgICAgIHRoaXMuZHJhd05hbWVzKCk7XG4gICAgICAgIHRoaXMuZHJhd1J1bGVyKCk7XG4gICAgICAgIHRoaXMuZHJhd1Njcm9sbGJhcnMoKTtcbiAgICB9XG4gICAgZHJhd1Njcm9sbGJhcnMoKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuc2VxQ3R4O1xuICAgICAgICBjb25zdCBjYW52YXNXaWR0aCA9IHRoaXMuc2VxdWVuY2VDYW52YXMud2lkdGg7XG4gICAgICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9IHRoaXMuc2VxdWVuY2VDYW52YXMuaGVpZ2h0O1xuICAgICAgICAvLyBIb3Jpem9udGFsIFNjcm9sbGJhclxuICAgICAgICBjb25zdCBjb250ZW50V2lkdGggPSB0aGlzLm1heFNlcXVlbmNlTGVuZ3RoICogdGhpcy5ibG9ja1dpZHRoO1xuICAgICAgICBpZiAoY29udGVudFdpZHRoID4gY2FudmFzV2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGJhclRyYWNrV2lkdGggPSBjYW52YXNXaWR0aCAtIHRoaXMuc2Nyb2xsYmFyV2lkdGg7IC8vIExlYXZlIHNwYWNlIGZvciB2ZXJ0aWNhbCBzY3JvbGxiYXJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGJhclRodW1iV2lkdGggPSBNYXRoLm1heCg1MCwgc2Nyb2xsYmFyVHJhY2tXaWR0aCAqIChjYW52YXNXaWR0aCAvIGNvbnRlbnRXaWR0aCkpO1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsYmFyVGh1bWJYID0gKHRoaXMuc2Nyb2xsWCAvIChjb250ZW50V2lkdGggLSBjYW52YXNXaWR0aCkpICogKHNjcm9sbGJhclRyYWNrV2lkdGggLSBzY3JvbGxiYXJUaHVtYldpZHRoKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLnNjcm9sbGJhclRyYWNrQ29sb3I7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgY2FudmFzSGVpZ2h0IC0gdGhpcy5zY3JvbGxiYXJXaWR0aCwgc2Nyb2xsYmFyVHJhY2tXaWR0aCwgdGhpcy5zY3JvbGxiYXJXaWR0aCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5zY3JvbGxiYXJDb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdChzY3JvbGxiYXJUaHVtYlgsIGNhbnZhc0hlaWdodCAtIHRoaXMuc2Nyb2xsYmFyV2lkdGgsIHNjcm9sbGJhclRodW1iV2lkdGgsIHRoaXMuc2Nyb2xsYmFyV2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFZlcnRpY2FsIFNjcm9sbGJhclxuICAgICAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gdGhpcy5zZXF1ZW5jZXMubGVuZ3RoICogdGhpcy5ibG9ja0hlaWdodDtcbiAgICAgICAgaWYgKGNvbnRlbnRIZWlnaHQgPiBjYW52YXNIZWlnaHQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGJhclRyYWNrSGVpZ2h0ID0gY2FudmFzSGVpZ2h0IC0gdGhpcy5zY3JvbGxiYXJXaWR0aDsgLy8gTGVhdmUgc3BhY2UgZm9yIGhvcml6b250YWwgc2Nyb2xsYmFyXG4gICAgICAgICAgICBjb25zdCBzY3JvbGxiYXJUaHVtYkhlaWdodCA9IE1hdGgubWF4KDUwLCBzY3JvbGxiYXJUcmFja0hlaWdodCAqIChjYW52YXNIZWlnaHQgLyBjb250ZW50SGVpZ2h0KSk7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxiYXJUaHVtYlkgPSAodGhpcy5zY3JvbGxZIC8gKGNvbnRlbnRIZWlnaHQgLSBjYW52YXNIZWlnaHQpKSAqIChzY3JvbGxiYXJUcmFja0hlaWdodCAtIHNjcm9sbGJhclRodW1iSGVpZ2h0KTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLnNjcm9sbGJhclRyYWNrQ29sb3I7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoY2FudmFzV2lkdGggLSB0aGlzLnNjcm9sbGJhcldpZHRoLCAwLCB0aGlzLnNjcm9sbGJhcldpZHRoLCBzY3JvbGxiYXJUcmFja0hlaWdodCk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5zY3JvbGxiYXJDb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdChjYW52YXNXaWR0aCAtIHRoaXMuc2Nyb2xsYmFyV2lkdGgsIHNjcm9sbGJhclRodW1iWSwgdGhpcy5zY3JvbGxiYXJXaWR0aCwgc2Nyb2xsYmFyVGh1bWJIZWlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRyYXdTZXF1ZW5jZXMoKSB7XG4gICAgICAgIHRoaXMuc2VxQ3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLnNlcXVlbmNlQ2FudmFzLndpZHRoLCB0aGlzLnNlcXVlbmNlQ2FudmFzLmhlaWdodCk7XG4gICAgICAgIGNvbnN0IHN0YXJ0Um93ID0gTWF0aC5mbG9vcih0aGlzLnNjcm9sbFkgLyB0aGlzLmJsb2NrSGVpZ2h0KTtcbiAgICAgICAgY29uc3QgZW5kUm93ID0gTWF0aC5taW4odGhpcy5zZXF1ZW5jZXMubGVuZ3RoLCBzdGFydFJvdyArIE1hdGguY2VpbCh0aGlzLnNlcXVlbmNlQ2FudmFzLmhlaWdodCAvIHRoaXMuYmxvY2tIZWlnaHQpKTtcbiAgICAgICAgY29uc3Qgc3RhcnRDb2wgPSBNYXRoLmZsb29yKHRoaXMuc2Nyb2xsWCAvIHRoaXMuYmxvY2tXaWR0aCk7XG4gICAgICAgIGNvbnN0IGVuZENvbCA9IE1hdGgubWluKHRoaXMubWF4U2VxdWVuY2VMZW5ndGgsIHN0YXJ0Q29sICsgTWF0aC5jZWlsKHRoaXMuc2VxdWVuY2VDYW52YXMud2lkdGggLyB0aGlzLmJsb2NrV2lkdGgpKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0Um93OyBpIDwgZW5kUm93OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNlcXVlbmNlID0gdGhpcy5zZXF1ZW5jZXNbaV07XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gc3RhcnRDb2w7IGogPCBlbmRDb2w7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBqICogdGhpcy5ibG9ja1dpZHRoIC0gdGhpcy5zY3JvbGxYO1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBpICogdGhpcy5ibG9ja0hlaWdodCAtIHRoaXMuc2Nyb2xsWTtcbiAgICAgICAgICAgICAgICBjb25zdCBudWNsZW90aWRlID0gc2VxdWVuY2Vbal0gfHwgJyc7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hhclRvRHJhdyA9IHRoaXMuZGlzcGxheU1vZGUgPT09ICdudWNsZW90aWRlJyA/IG51Y2xlb3RpZGUgOiB0aGlzLnRyYW5zbGF0ZWRTZXF1ZW5jZXNbaV1bal0gfHwgJyc7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3JNYXAgPSB0aGlzLmRpc3BsYXlNb2RlID09PSAnbnVjbGVvdGlkZScgPyB0aGlzLmNvbG9ycyA6IHRoaXMuYW1pbm9BY2lkQ29sb3JzO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9ySW5mbyA9IGNvbG9yTWFwW2NoYXJUb0RyYXcudG9VcHBlckNhc2UoKV0gfHwgeyBmb3JlZ3JvdW5kOiAnIzAwMDAwMCcsIGJhY2tncm91bmQ6ICcjRkZGRkZGJyB9OyAvLyBEZWZhdWx0IHRvIGJsYWNrIHRleHQgb24gd2hpdGUgYmFja2dyb3VuZFxuICAgICAgICAgICAgICAgIHRoaXMuc2VxQ3R4LmZpbGxTdHlsZSA9IGNvbG9ySW5mby5iYWNrZ3JvdW5kO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VxQ3R4LmZpbGxSZWN0KHgsIHksIHRoaXMuYmxvY2tXaWR0aCwgdGhpcy5ibG9ja0hlaWdodCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXFDdHguc3Ryb2tlU3R5bGUgPSAnI0RERERERCc7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXFDdHguc3Ryb2tlUmVjdCh4LCB5LCB0aGlzLmJsb2NrV2lkdGgsIHRoaXMuYmxvY2tIZWlnaHQpO1xuICAgICAgICAgICAgICAgIC8vIEhpZ2hsaWdodCBzZWxlY3RlZCBzZXF1ZW5jZSBuYW1lcyAoZW50aXJlIHJvdylcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFNlcXVlbmNlTmFtZXMuaGFzKGkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VxQ3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDI1NSwgMCwgMC4xKSc7IC8vIExpZ2h0IGdyZWVuIG92ZXJsYXkgZm9yIHNlbGVjdGVkIHJvd3NcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXFDdHguZmlsbFJlY3QoeCwgeSwgdGhpcy5ibG9ja1dpZHRoLCB0aGlzLmJsb2NrSGVpZ2h0KTsgLy8gQXBwbHkgdG8gZWFjaCBibG9jayBpbiB0aGUgcm93XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTnVjbGVvdGlkZVNlbGVjdGVkKGksIGopKSB7IC8vIFRoaXMgbWV0aG9kIG5hbWUgaXMgbm93IG1pc2xlYWRpbmcsIHNob3VsZCBiZSBpc0NoYXJTZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcUN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAyNTUsIDAuMyknOyAvLyBTZW1pLXRyYW5zcGFyZW50IGJsdWUgb3ZlcmxheSBmb3IgY2VsbCBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXFDdHguZmlsbFJlY3QoeCwgeSwgdGhpcy5ibG9ja1dpZHRoLCB0aGlzLmJsb2NrSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXFDdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VxQ3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VxQ3R4LnN0cm9rZVJlY3QoeCwgeSwgdGhpcy5ibG9ja1dpZHRoLCB0aGlzLmJsb2NrSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXFDdHguZmlsbFN0eWxlID0gY29sb3JJbmZvLmZvcmVncm91bmQ7IC8vIFVzZSBmb3JlZ3JvdW5kIGNvbG9yIGZyb20gc2NoZW1lXG4gICAgICAgICAgICAgICAgdGhpcy5zZXFDdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXFDdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXFDdHguZmlsbFRleHQoY2hhclRvRHJhdywgeCArIHRoaXMuYmxvY2tXaWR0aCAvIDIsIHkgKyB0aGlzLmJsb2NrSGVpZ2h0IC8gMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZHJhd05hbWVzKCkge1xuICAgICAgICB0aGlzLm5hbWVzQ3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLm5hbWVzQ2FudmFzLndpZHRoLCB0aGlzLm5hbWVzQ2FudmFzLmhlaWdodCk7XG4gICAgICAgIHRoaXMubmFtZXNDdHguZm9udCA9ICcxNHB4IHNhbnMtc2VyaWYnO1xuICAgICAgICB0aGlzLm5hbWVzQ3R4LnRleHRBbGlnbiA9ICdsZWZ0JztcbiAgICAgICAgdGhpcy5uYW1lc0N0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICAgICAgY29uc3Qgc3RhcnRSb3cgPSBNYXRoLmZsb29yKHRoaXMuc2Nyb2xsWSAvIHRoaXMuYmxvY2tIZWlnaHQpO1xuICAgICAgICBjb25zdCBlbmRSb3cgPSBNYXRoLm1pbih0aGlzLnNlcXVlbmNlcy5sZW5ndGgsIHN0YXJ0Um93ICsgTWF0aC5jZWlsKHRoaXMubmFtZXNDYW52YXMuaGVpZ2h0IC8gdGhpcy5ibG9ja0hlaWdodCkpO1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRSb3c7IGkgPCBlbmRSb3c7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgeSA9IGkgKiB0aGlzLmJsb2NrSGVpZ2h0IC0gdGhpcy5zY3JvbGxZOyAvLyBUb3Agb2YgdGhlIGJsb2NrXG4gICAgICAgICAgICBjb25zdCB0ZXh0WSA9IHkgKyB0aGlzLmJsb2NrSGVpZ2h0IC8gMjsgLy8gTWlkZGxlIGZvciB0ZXh0XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFNlcXVlbmNlTmFtZXMuaGFzKGkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lc0N0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAyNTUsIDAuMSknOyAvLyBMaWdodCBibHVlIGJhY2tncm91bmQgZm9yIHNlbGVjdGVkIG5hbWVzXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lc0N0eC5maWxsUmVjdCgwLCB5LCB0aGlzLm5hbWVzQ2FudmFzLndpZHRoLCB0aGlzLmJsb2NrSGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubmFtZXNDdHguZmlsbFN0eWxlID0gJyMwMDAwMDAnOyAvLyBCbGFjayB0ZXh0XG4gICAgICAgICAgICB0aGlzLm5hbWVzQ3R4LmZpbGxUZXh0KHRoaXMubmFtZXNbaV0sIDUsIHRleHRZKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkcmF3UnVsZXIoKSB7XG4gICAgICAgIHRoaXMucnVsZXJDdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMucnVsZXJDYW52YXMud2lkdGgsIHRoaXMucnVsZXJDYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5ydWxlckN0eC5mb250ID0gJzEycHggc2Fucy1zZXJpZic7XG4gICAgICAgIHRoaXMucnVsZXJDdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICAgIHRoaXMucnVsZXJDdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgICAgIGNvbnN0IHN0YXJ0Q29sID0gTWF0aC5mbG9vcih0aGlzLnNjcm9sbFggLyB0aGlzLmJsb2NrV2lkdGgpO1xuICAgICAgICBjb25zdCBlbmRDb2wgPSBNYXRoLm1pbih0aGlzLm1heFNlcXVlbmNlTGVuZ3RoLCBzdGFydENvbCArIE1hdGguY2VpbCh0aGlzLnJ1bGVyQ2FudmFzLndpZHRoIC8gdGhpcy5ibG9ja1dpZHRoKSk7XG4gICAgICAgIGZvciAobGV0IGogPSBzdGFydENvbDsgaiA8IGVuZENvbDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoaiAlIDUgPT09IDApIHsgLy8gRHJhdyBsYWJlbCBldmVyeSA1IGJsb2Nrc1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBqICogdGhpcy5ibG9ja1dpZHRoIC0gdGhpcy5zY3JvbGxYICsgdGhpcy5ibG9ja1dpZHRoIC8gMjtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bGVyQ3R4LmZpbGxTdHlsZSA9ICcjMDAwMDAwJztcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bGVyQ3R4LmZpbGxUZXh0KFN0cmluZyhqICsgMSksIHgsIHRoaXMucnVsZXJDYW52YXMuaGVpZ2h0IC8gMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25OYW1lc0NhbnZhc01vdXNlRG93bihldmVudCkge1xuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5uYW1lc0NhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcbiAgICAgICAgY29uc3Qgc2VxSW5kZXggPSBNYXRoLmZsb29yKCh5ICsgdGhpcy5zY3JvbGxZKSAvIHRoaXMuYmxvY2tIZWlnaHQpO1xuICAgICAgICBpZiAoc2VxSW5kZXggPj0gMCAmJiBzZXFJbmRleCA8IHRoaXMubmFtZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSB7IC8vIEN0cmwvQ21kIGNsaWNrIHRvIHRvZ2dsZSBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFNlcXVlbmNlTmFtZXMuaGFzKHNlcUluZGV4KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU2VxdWVuY2VOYW1lcy5kZWxldGUoc2VxSW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFNlcXVlbmNlTmFtZXMuYWRkKHNlcUluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChldmVudC5zaGlmdEtleSkgeyAvLyBTaGlmdCBjbGljayB0byBzZWxlY3QgYSByYW5nZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkU2VxdWVuY2VOYW1lcy5zaXplID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXJzdFNlbGVjdGVkID0gTWF0aC5taW4oLi4uQXJyYXkuZnJvbSh0aGlzLnNlbGVjdGVkU2VxdWVuY2VOYW1lcykpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IE1hdGgubWluKGZpcnN0U2VsZWN0ZWQsIHNlcUluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5kID0gTWF0aC5tYXgoZmlyc3RTZWxlY3RlZCwgc2VxSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPD0gZW5kOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTZXF1ZW5jZU5hbWVzLmFkZChpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFNlcXVlbmNlTmFtZXMuYWRkKHNlcUluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHsgLy8gUmVndWxhciBjbGljayB0byBzZWxlY3Qgb25seSB0aGlzIGl0ZW1cbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU2VxdWVuY2VOYW1lcy5jbGVhcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTZXF1ZW5jZU5hbWVzLmFkZChzZXFJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RSZWRyYXcoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJ2YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiO1xudmFyIHdlYnBhY2tRdWV1ZXMgPSBoYXNTeW1ib2wgPyBTeW1ib2woXCJ3ZWJwYWNrIHF1ZXVlc1wiKSA6IFwiX193ZWJwYWNrX3F1ZXVlc19fXCI7XG52YXIgd2VicGFja0V4cG9ydHMgPSBoYXNTeW1ib2wgPyBTeW1ib2woXCJ3ZWJwYWNrIGV4cG9ydHNcIikgOiBcIl9fd2VicGFja19leHBvcnRzX19cIjtcbnZhciB3ZWJwYWNrRXJyb3IgPSBoYXNTeW1ib2wgPyBTeW1ib2woXCJ3ZWJwYWNrIGVycm9yXCIpIDogXCJfX3dlYnBhY2tfZXJyb3JfX1wiO1xuXG5cbnZhciByZXNvbHZlUXVldWUgPSAocXVldWUpID0+IHtcblx0aWYocXVldWUgJiYgcXVldWUuZCA8IDEpIHtcblx0XHRxdWV1ZS5kID0gMTtcblx0XHRxdWV1ZS5mb3JFYWNoKChmbikgPT4gKGZuLnItLSkpO1xuXHRcdHF1ZXVlLmZvckVhY2goKGZuKSA9PiAoZm4uci0tID8gZm4ucisrIDogZm4oKSkpO1xuXHR9XG59XG52YXIgd3JhcERlcHMgPSAoZGVwcykgPT4gKGRlcHMubWFwKChkZXApID0+IHtcblx0aWYoZGVwICE9PSBudWxsICYmIHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpIHtcblxuXHRcdGlmKGRlcFt3ZWJwYWNrUXVldWVzXSkgcmV0dXJuIGRlcDtcblx0XHRpZihkZXAudGhlbikge1xuXHRcdFx0dmFyIHF1ZXVlID0gW107XG5cdFx0XHRxdWV1ZS5kID0gMDtcblx0XHRcdGRlcC50aGVuKChyKSA9PiB7XG5cdFx0XHRcdG9ialt3ZWJwYWNrRXhwb3J0c10gPSByO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSwgKGUpID0+IHtcblx0XHRcdFx0b2JqW3dlYnBhY2tFcnJvcl0gPSBlO1xuXHRcdFx0XHRyZXNvbHZlUXVldWUocXVldWUpO1xuXHRcdFx0fSk7XG5cdFx0XHR2YXIgb2JqID0ge307XG5cblx0XHRcdG9ialt3ZWJwYWNrUXVldWVzXSA9IChmbikgPT4gKGZuKHF1ZXVlKSk7XG5cdFx0XHRyZXR1cm4gb2JqO1xuXHRcdH1cblx0fVxuXHR2YXIgcmV0ID0ge307XG5cdHJldFt3ZWJwYWNrUXVldWVzXSA9IHggPT4ge307XG5cdHJldFt3ZWJwYWNrRXhwb3J0c10gPSBkZXA7XG5cdHJldHVybiByZXQ7XG59KSk7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmEgPSAobW9kdWxlLCBib2R5LCBoYXNBd2FpdCkgPT4ge1xuXHR2YXIgcXVldWU7XG5cdGhhc0F3YWl0ICYmICgocXVldWUgPSBbXSkuZCA9IC0xKTtcblx0dmFyIGRlcFF1ZXVlcyA9IG5ldyBTZXQoKTtcblx0dmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cztcblx0dmFyIGN1cnJlbnREZXBzO1xuXHR2YXIgb3V0ZXJSZXNvbHZlO1xuXHR2YXIgcmVqZWN0O1xuXHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWopID0+IHtcblx0XHRyZWplY3QgPSByZWo7XG5cdFx0b3V0ZXJSZXNvbHZlID0gcmVzb2x2ZTtcblx0fSk7XG5cdHByb21pc2Vbd2VicGFja0V4cG9ydHNdID0gZXhwb3J0cztcblx0cHJvbWlzZVt3ZWJwYWNrUXVldWVzXSA9IChmbikgPT4gKHF1ZXVlICYmIGZuKHF1ZXVlKSwgZGVwUXVldWVzLmZvckVhY2goZm4pLCBwcm9taXNlW1wiY2F0Y2hcIl0oeCA9PiB7fSkpO1xuXHRtb2R1bGUuZXhwb3J0cyA9IHByb21pc2U7XG5cdHZhciBoYW5kbGUgPSAoZGVwcykgPT4ge1xuXHRcdGN1cnJlbnREZXBzID0gd3JhcERlcHMoZGVwcyk7XG5cdFx0dmFyIGZuO1xuXHRcdHZhciBnZXRSZXN1bHQgPSAoKSA9PiAoY3VycmVudERlcHMubWFwKChkKSA9PiB7XG5cblx0XHRcdGlmKGRbd2VicGFja0Vycm9yXSkgdGhyb3cgZFt3ZWJwYWNrRXJyb3JdO1xuXHRcdFx0cmV0dXJuIGRbd2VicGFja0V4cG9ydHNdO1xuXHRcdH0pKVxuXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRcdGZuID0gKCkgPT4gKHJlc29sdmUoZ2V0UmVzdWx0KSk7XG5cdFx0XHRmbi5yID0gMDtcblx0XHRcdHZhciBmblF1ZXVlID0gKHEpID0+IChxICE9PSBxdWV1ZSAmJiAhZGVwUXVldWVzLmhhcyhxKSAmJiAoZGVwUXVldWVzLmFkZChxKSwgcSAmJiAhcS5kICYmIChmbi5yKyssIHEucHVzaChmbikpKSk7XG5cdFx0XHRjdXJyZW50RGVwcy5tYXAoKGRlcCkgPT4gKGRlcFt3ZWJwYWNrUXVldWVzXShmblF1ZXVlKSkpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBmbi5yID8gcHJvbWlzZSA6IGdldFJlc3VsdCgpO1xuXHR9XG5cdHZhciBkb25lID0gKGVycikgPT4gKChlcnIgPyByZWplY3QocHJvbWlzZVt3ZWJwYWNrRXJyb3JdID0gZXJyKSA6IG91dGVyUmVzb2x2ZShleHBvcnRzKSksIHJlc29sdmVRdWV1ZShxdWV1ZSkpXG5cdGJvZHkoaGFuZGxlLCBkb25lKTtcblx0cXVldWUgJiYgcXVldWUuZCA8IDAgJiYgKHF1ZXVlLmQgPSAwKTtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy52ID0gKGV4cG9ydHMsIHdhc21Nb2R1bGVJZCwgd2FzbU1vZHVsZUhhc2gsIGltcG9ydHNPYmopID0+IHtcblxuXHR2YXIgcmVxID0gZmV0Y2goX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIHdhc21Nb2R1bGVIYXNoICsgXCIubW9kdWxlLndhc21cIik7XG5cdHZhciBmYWxsYmFjayA9ICgpID0+IChyZXFcblx0XHQudGhlbigoeCkgPT4gKHguYXJyYXlCdWZmZXIoKSkpXG5cdFx0LnRoZW4oKGJ5dGVzKSA9PiAoV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoYnl0ZXMsIGltcG9ydHNPYmopKSlcblx0XHQudGhlbigocmVzKSA9PiAoT2JqZWN0LmFzc2lnbihleHBvcnRzLCByZXMuaW5zdGFuY2UuZXhwb3J0cykpKSk7XG5cdHJldHVybiByZXEudGhlbigocmVzKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyA9PT0gXCJmdW5jdGlvblwiKSB7XG5cblx0XHRcdHJldHVybiBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyhyZXMsIGltcG9ydHNPYmopXG5cdFx0XHRcdC50aGVuKFxuXHRcdFx0XHRcdChyZXMpID0+IChPYmplY3QuYXNzaWduKGV4cG9ydHMsIHJlcy5pbnN0YW5jZS5leHBvcnRzKSksXG5cdFx0XHRcdFx0KGUpID0+IHtcblx0XHRcdFx0XHRcdGlmKHJlcy5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKSAhPT0gXCJhcHBsaWNhdGlvbi93YXNtXCIpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS53YXJuKFwiYFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nYCBmYWlsZWQgYmVjYXVzZSB5b3VyIHNlcnZlciBkb2VzIG5vdCBzZXJ2ZSB3YXNtIHdpdGggYGFwcGxpY2F0aW9uL3dhc21gIE1JTUUgdHlwZS4gRmFsbGluZyBiYWNrIHRvIGBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZWAgd2hpY2ggaXMgc2xvd2VyLiBPcmlnaW5hbCBlcnJvcjpcXG5cIiwgZSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxsYmFjaygpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dGhyb3cgZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxsYmFjaygpO1xuXHR9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC9eYmxvYjovLCBcIlwiKS5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdtb2R1bGUnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vd3d3L21haW4udHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=