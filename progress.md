# Project Progress

This document tracks the progress of the seqedit-wasm project.

## Completed Tasks

### Project Setup

*   Set up the basic project structure with Rust and TypeScript.
*   Configured `wasm-pack` to build the Rust code to WebAssembly.
*   Configured `webpack` to bundle the TypeScript code.
*   Set up a `webpack-dev-server` for development.

### File Handling

*   Implemented loading a FASTA file from a URL.
*   Implemented parsing of FASTA files using a Rust function exposed to WebAssembly.

### Sequence Viewer

*   Implemented a basic sequence viewer using a canvas.
*   The viewer displays sequences with color-coded nucleotides.
*   The viewer can handle a large number of sequences.
*   The viewer can handle long sequences by capping the canvas width and allowing horizontal scrolling.
*   The viewer displays the nucleotide letters inside each block.
*   Display sequence names and a position ruler.
*   Implemented virtual scrolling for the sequence viewer to handle very long sequences efficiently.
*   Implemented standard text-editing features (selecting, copying, pasting, deleting, changing, and inserting).
*   Implemented custom scrollbars for the sequence viewer.
*   Implemented keyboard navigation (arrow keys) for the sequence viewer.
*   Implemented grid-like multi-row/multi-column selections
*   Improved visibility of selections.
*   Implemented AliView-like nucleotide color scheme (foreground and background).
*   Implemented AliView-like amino acid color scheme (foreground and background).

## In Progress / Needs Refinement

*   **Refine text-editing behavior:**
    *   'space' key inserts '-' symbol leading to all other nucleotides shifting right: The space key now inserts '-' and shifts characters, but further refinement might be needed based on user expectations.
    *   Implement keyboard selection (Shift/Ctrl + arrow keys): Shift + arrow keys for extending selection is implemented. Ctrl + arrow keys for word/block jumps is not yet implemented.
    *   Apply modifications to larger selections (e.g., 'space' inserts '-' in all selected cells): Implemented.

*   **Refine Reverse Complement feature:**
    *   Fix bug where reverse complement is incorrect: Rust implementation updated to correctly handle 'U' and other characters.
    *   Change trigger to clicking on sequence name for entire sequence reverse complement: Implemented selection of multiple sequence names by clicking (with Ctrl/Shift modifiers) and applying reverse complement via the 'Reverse Complement' button. Visual highlighting of selected names in the names canvas and corresponding rows in the sequence viewer is also implemented.

*   **Implement sequence manipulations (translation):**
    *   Buttons for changing reading frame (Frame 1, Frame 2, Frame 3) and switching to nucleotide mode are added to the UI.
    *   Event listeners are set up to call the `translate` function and `setTranslatedSequences`/`setNucleotideMode` methods.
    *   **Functionality needs debugging/verification as per user feedback.**

## Next Steps (Remaining MVP Features)

*   Implement search functionality.
*   Use browser's localStorage to save work in progress.
