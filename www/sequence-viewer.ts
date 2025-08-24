export class SequenceViewer {
    private sequenceCanvas: HTMLCanvasElement;
    private namesCanvas: HTMLCanvasElement;
    private rulerCanvas: HTMLCanvasElement;
    private seqCtx: CanvasRenderingContext2D;
    private namesCtx: CanvasRenderingContext2D;
    private rulerCtx: CanvasRenderingContext2D;

    private sequences: string[] = [];
    private names: string[] = [];
    private selectedSequenceNames: Set<number> = new Set();
    private colors: { [key: string]: { foreground: string, background: string } } = {
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

    private aminoAcidColors: { [key: string]: { foreground: string, background: string } } = {
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

    private blockWidth = 20;
    private blockHeight = 20;
    private scrollX = 0;
    private scrollY = 0;
    private maxSequenceLength = 0;
    private isRedrawScheduled = false;
    private selectionStart: { seqIndex: number, pos: number } | null = null;
    private selectionEnd: { seqIndex: number, pos: number } | null = null;
    private isDragging = false;
    private isDraggingHScrollbar = false;
    private isDraggingVScrollbar = false;
    private lastMouseX = 0;
    private lastMouseY = 0;
    private scrollbarWidth = 10;
    private scrollbarColor = '#888';
    private scrollbarTrackColor = '#f1f1f1';
    private displayMode: 'nucleotide' | 'aminoacid' = 'nucleotide';
    private translatedSequences: string[] = [];
    private currentReadingFrame = 1;

    constructor(sequenceCanvas: HTMLCanvasElement, namesCanvas: HTMLCanvasElement, rulerCanvas: HTMLCanvasElement) {
        this.sequenceCanvas = sequenceCanvas;
        this.namesCanvas = namesCanvas;
        this.rulerCanvas = rulerCanvas;
        this.seqCtx = sequenceCanvas.getContext('2d')!;
        this.namesCtx = namesCanvas.getContext('2d')!;
        this.rulerCtx = rulerCanvas.getContext('2d')!;

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

    public setSequences(names: string[], sequences: string[]) {
        this.names = names;
        this.sequences = sequences;
        this.maxSequenceLength = Math.max(...sequences.map(s => s.length));
        this.scrollX = 0;
        this.scrollY = 0;
        this.selectionStart = null;
        this.selectionEnd = null;
        this.requestRedraw();
    }

    public getSelectedSequence(): { seqIndex: number, sequence: string } | null {
        if (!this.selectionStart) {
            return null;
        }
        return {
            seqIndex: this.selectionStart.seqIndex,
            sequence: this.sequences[this.selectionStart.seqIndex]
        };
    }

    public updateSequence(seqIndex: number, newSequence: string) {
        this.sequences[seqIndex] = newSequence;
        this.maxSequenceLength = Math.max(...this.sequences.map(s => s.length));
        this.requestRedraw();
    }

    public getSequences(): string[] {
        return this.sequences;
    }

    public getSelectedSequenceIndices(): number[] {
        return Array.from(this.selectedSequenceNames);
    }

    public clearSelectedSequenceNames() {
        this.selectedSequenceNames.clear();
        this.requestRedraw();
    }

    public setTranslatedSequences(sequences: string[], frame: number) {
        this.translatedSequences = sequences;
        this.currentReadingFrame = frame;
        this.displayMode = 'aminoacid';
        this.scrollX = 0;
        this.scrollY = 0;
        this.selectionStart = null;
        this.selectionEnd = null;
        this.requestRedraw();
    }

    public setNucleotideMode() {
        this.displayMode = 'nucleotide';
        this.scrollX = 0;
        this.scrollY = 0;
        this.selectionStart = null;
        this.selectionEnd = null;
        this.requestRedraw();
    }

    private resizeCanvas() {
        const parent = this.sequenceCanvas.parentElement!;
        this.sequenceCanvas.width = parent.clientWidth;
        this.sequenceCanvas.height = parent.clientHeight;

        const namesParent = this.namesCanvas.parentElement!;
        this.namesCanvas.width = namesParent.clientWidth;
        this.namesCanvas.height = namesParent.clientHeight;

        const rulerParent = this.rulerCanvas.parentElement!;
        this.rulerCanvas.width = rulerParent.clientWidth;
        this.rulerCanvas.height = 20;

        this.requestRedraw();
    }

    private onMouseDown(event: MouseEvent) {
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
        } else {
            this.selectionStart = null;
            this.selectionEnd = null;
        }

        this.requestRedraw();
    }

    private onMouseMove(event: MouseEvent) {
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

        if (!this.isDragging || !this.selectionStart) return;

        const seqIndex = Math.floor((y + this.scrollY) / this.blockHeight);
        const pos = Math.floor((x + this.scrollX) / this.blockWidth);

        // Allow selection across multiple sequences
        if (seqIndex >= 0 && seqIndex < this.sequences.length && pos >= 0 && pos <= this.sequences[seqIndex].length) {
            this.selectionEnd = { seqIndex, pos };
        }

        this.requestRedraw();
    }

    private onMouseUp(event: MouseEvent) {
        this.isDragging = false;
        this.isDraggingHScrollbar = false;
        this.isDraggingVScrollbar = false;
    }

    private getSelectedText(): string {
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

    private deleteSelectedRange(): { seqIndex: number, pos: number } | null {
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

    private deleteCharacter(isBackspace: boolean) {
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

    private insertCharacter(char: string) {
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

    private fillSelection(char: string) {
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

    private onKeyDown(event: KeyboardEvent) {
        if (!this.selectionStart) return;

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
                        const start = Math.min(this.selectionStart.pos, this.selectionEnd!.pos);
                        const end = Math.max(this.selectionStart.pos, this.selectionEnd!.pos);

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
            } else {
                this.insertCharacter(event.key.toUpperCase());
            }
        } else if (event.key === ' ') {
            event.preventDefault();
            this.insertCharacter('-');
        } else if (event.key === 'ArrowLeft') {
            event.preventDefault();
            if (event.ctrlKey) {
                const newPos = this.findPreviousWord(seqIndex, pos);
                this.selectionStart = { seqIndex, pos: newPos };
                this.selectionEnd = this.selectionStart;
            } else if (event.shiftKey) {
                // Extend selection left
                if (this.selectionEnd!.pos > 0) {
                    this.selectionEnd!.pos--;
                } else if (this.selectionEnd!.seqIndex > 0) {
                    this.selectionEnd!.seqIndex--;
                    this.selectionEnd!.pos = this.sequences[this.selectionEnd!.seqIndex].length;
                }
            } else {
                // Move cursor left, clear selection
                if (pos > 0) {
                    this.selectionStart = { seqIndex, pos: pos - 1 };
                } else if (seqIndex > 0) {
                    this.selectionStart = { seqIndex: seqIndex - 1, pos: this.sequences[seqIndex - 1].length };
                }
                this.selectionEnd = this.selectionStart;
            }
            this.requestRedraw();
        } else if (event.key === 'ArrowRight') {
            event.preventDefault();
            if (event.ctrlKey) {
                const newPos = this.findNextWord(seqIndex, pos);
                this.selectionStart = { seqIndex, pos: newPos };
                this.selectionEnd = this.selectionStart;
            } else if (event.shiftKey) {
                // Extend selection right
                if (this.selectionEnd!.pos < this.sequences[seqIndex].length) {
                    this.selectionEnd!.pos++;
                } else if (this.selectionEnd!.seqIndex < this.sequences.length - 1) {
                    this.selectionEnd!.seqIndex++;
                    this.selectionEnd!.pos = 0;
                }
            } else {
                // Move cursor right, clear selection
                if (pos < this.sequences[seqIndex].length) {
                    this.selectionStart = { seqIndex, pos: pos + 1 };
                } else if (seqIndex < this.sequences.length - 1) {
                    this.selectionStart = { seqIndex: seqIndex + 1, pos: 0 };
                }
                this.selectionEnd = this.selectionStart;
            }
            this.requestRedraw();
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            if (event.ctrlKey) {
                this.selectionStart = { seqIndex: 0, pos: pos };
                this.selectionEnd = this.selectionStart;
            } else if (event.shiftKey) {
                // Extend selection up
                if (this.selectionEnd!.seqIndex > 0) {
                    this.selectionEnd!.seqIndex--;
                    this.selectionEnd!.pos = Math.min(this.selectionEnd!.pos, this.sequences[this.selectionEnd!.seqIndex].length);
                }
            } else {
                // Move cursor up, clear selection
                if (seqIndex > 0) {
                    this.selectionStart = { seqIndex: seqIndex - 1, pos: Math.min(pos, this.sequences[seqIndex - 1].length) };
                } else {
                    this.selectionStart = { seqIndex: 0, pos: 0 }; // Move to start of first sequence
                }
                this.selectionEnd = this.selectionStart;
            }
            this.requestRedraw();
        } else if (event.key === 'ArrowDown') {
            event.preventDefault();
            if (event.ctrlKey) {
                this.selectionStart = { seqIndex: this.sequences.length - 1, pos: pos };
                this.selectionEnd = this.selectionStart;
            } else if (event.shiftKey) {
                // Extend selection down
                if (this.selectionEnd!.seqIndex < this.sequences.length - 1) {
                    this.selectionEnd!.seqIndex++;
                    this.selectionEnd!.pos = Math.min(this.selectionEnd!.pos, this.sequences[this.selectionEnd!.seqIndex].length);
                }
            } else {
                // Move cursor down, clear selection
                if (seqIndex < this.sequences.length - 1) {
                    this.selectionStart = { seqIndex: seqIndex + 1, pos: Math.min(pos, this.sequences[seqIndex + 1].length) };
                } else {
                    const lastSeqIndex = this.sequences.length - 1;
                    this.selectionStart = { seqIndex: lastSeqIndex, pos: this.sequences[lastSeqIndex].length }; // Move to end of last sequence
                }
                this.selectionEnd = this.selectionStart;
            }
            this.requestRedraw();
        } else if (event.key === 'Backspace') {
            event.preventDefault();
            this.deleteCharacter(true);
        } else if (event.key === 'Delete') {
            event.preventDefault();
            this.deleteCharacter(false);
        }
    }

    private findNextWord(seqIndex: number, pos: number): number {
        const sequence = this.sequences[seqIndex];
        let inWord = !this.isGap(sequence[pos]);

        for (let i = pos; i < sequence.length; i++) {
            if (inWord) {
                if (this.isGap(sequence[i])) {
                    inWord = false;
                }
            } else {
                if (!this.isGap(sequence[i])) {
                    return i;
                }
            }
        }
        return sequence.length;
    }

    private findPreviousWord(seqIndex: number, pos: number): number {
        const sequence = this.sequences[seqIndex];
        let inWord = pos > 0 && !this.isGap(sequence[pos - 1]);

        for (let i = pos - 1; i >= 0; i--) {
            if (inWord) {
                if (this.isGap(sequence[i])) {
                    return i + 1;
                }
            } else {
                if (!this.isGap(sequence[i])) {
                    inWord = true;
                }
            }
        }
        return 0;
    }

    private isGap(char: string): boolean {
        return char === '-';
    }

    private onWheel(event: WheelEvent) {
        event.preventDefault();
        this.scrollX += event.deltaX;
        this.scrollY += event.deltaY;

        const maxScrollX = this.maxSequenceLength * this.blockWidth - this.sequenceCanvas.width;
        const maxScrollY = this.sequences.length * this.blockHeight - this.sequenceCanvas.height;
        this.scrollX = Math.max(0, Math.min(this.scrollX, maxScrollX));
        this.scrollY = Math.max(0, Math.min(this.scrollY, maxScrollY));

        this.requestRedraw();
    }

    private requestRedraw() {
        if (this.isRedrawScheduled) {
            return;
        }
        this.isRedrawScheduled = true;
        requestAnimationFrame(() => {
            this.draw();
            this.isRedrawScheduled = false;
        });
    }

    private isNucleotideSelected(seqIndex: number, pos: number): boolean {
        if (!this.selectionStart || !this.selectionEnd) {
            return false;
        }

        const startRow = Math.min(this.selectionStart.seqIndex, this.selectionEnd.seqIndex);
        const endRow = Math.max(this.selectionStart.seqIndex, this.selectionEnd.seqIndex);
        const startCol = Math.min(this.selectionStart.pos, this.selectionEnd.pos);
        const endCol = Math.max(this.selectionStart.pos, this.selectionEnd.pos);

        return seqIndex >= startRow && seqIndex <= endRow && pos >= startCol && pos <= endCol;
    }

    private draw() {
        this.drawSequences();
        this.drawNames();
        this.drawRuler();
        this.drawScrollbars();
    }

    private drawScrollbars() {
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

    private drawSequences() {
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

    private drawNames() {
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

    private drawRuler() {
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

    private onNamesCanvasMouseDown(event: MouseEvent) {
        const rect = this.namesCanvas.getBoundingClientRect();
        const y = event.clientY - rect.top;

        const seqIndex = Math.floor((y + this.scrollY) / this.blockHeight);

        if (seqIndex >= 0 && seqIndex < this.names.length) {
            if (event.ctrlKey || event.metaKey) { // Ctrl/Cmd click to toggle selection
                if (this.selectedSequenceNames.has(seqIndex)) {
                    this.selectedSequenceNames.delete(seqIndex);
                } else {
                    this.selectedSequenceNames.add(seqIndex);
                }
            } else if (event.shiftKey) { // Shift click to select a range
                if (this.selectedSequenceNames.size > 0) {
                    const firstSelected = Math.min(...Array.from(this.selectedSequenceNames));
                    const start = Math.min(firstSelected, seqIndex);
                    const end = Math.max(firstSelected, seqIndex);
                    for (let i = start; i <= end; i++) {
                        this.selectedSequenceNames.add(i);
                    }
                } else {
                    this.selectedSequenceNames.add(seqIndex);
                }
            } else { // Regular click to select only this item
                this.selectedSequenceNames.clear();
                this.selectedSequenceNames.add(seqIndex);
            }
            this.requestRedraw();
        }
    }
}