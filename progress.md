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
*   Enable the loading of a fasta through the URL by providing a &input-fasta={fasta url} parameter

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

### Text Editing

*   'space' key inserts '-' symbol and shifts characters to the right, also for multi-row selections.
*   'delete' and 'backspace' keys delete characters and shifts characters to the left, also for multi-row selections.
*   Implemented keyboard selection (Shift + arrow keys) for extending selection.
*   Implemented keyboard navigation (Ctrl + arrow keys) for word/block jumps.

### Sequence Manipulations

*   **Reverse Complement:**
    *   Rust implementation updated to correctly handle 'U' and other characters.
    *   Implemented selection of multiple sequence names by clicking (with Ctrl/Shift modifiers) and applying reverse complement via the 'Reverse Complement' button.
    *   Visual highlighting of selected names in the names canvas and corresponding rows in the sequence viewer is also implemented.
*   **Translation:**
    *   Buttons for changing reading frame (Frame 1, Frame 2, Frame 3) and switching to nucleotide mode are added to the UI.
    *   Event listeners are set up to call the `translate` function and `setTranslatedSequences`/`setNucleotideMode` methods.
    *   The entire viewer is switched to translated amino-acids.

### Sequence and Metadata Revision Creation

*   Implement loading a hidden metadata file through a URL parameter.
*   Implement sending the edited data to a loculus instance as a revision.

**Important Note:** The current implementation for sending revisions uses a placeholder for authentication. This functionality requires a full authentication implementation and extensive validation and verification before it can be considered complete and secure.

## Features that need improvement

* When selecting multiple sequences and making an edit, the selection is forgotten. This should not be the case as it disrupts the user's workflow. It is very possible that the user wants to make multiple edits in a row to the selected sequences/columns.
* Selecting multiple positions by holding shift and using the keyboard arrows works only after I explicitly click on a cell/position first with my mouse. If i already am navigating the grid with my keyboard and then want to make a multiple selection by holding shift, then this currently does not work.
* The current search functionality is not working. Neither searching for a nucleotide motif nor for a specific sequence name works, and there are no highlights displayed (or any visual feedback)

## Next Steps (Remaining MVP Features)

*   Implement undo/redo functionality. (this needs to be possible with ctrl + z/y)
*   Implement search functionality.
*   Use browser's localStorage to save work in progress.