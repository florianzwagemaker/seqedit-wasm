This document outlines the basic minimum viable product (MVP) requirements for the SeqEdit WASM project. The goal of this MVP is to provide a functional and user-friendly web-based interface for editing and manipulating nucleotide sequences in a browser environment.

By leveraging existing (pre-)compiled WebAssembly binaries from Biowasm for key components of the application, the to-develop code boils down to the following primary aspects:
* A Rust-based sequence editor
* A Typescript-based frontend that connects the user input to WASM-operations
* A virtual-filesystem connector that connects one WebAssembly process to another for chained processes.

## Minimum viable product details

### File handling:

* Load and parse single or multiple sequences from a FASTA file through a URL.
* Use the browser’s localStorage to save work in progress and to leverage session management.

### Sequence viewer & editor:

* A scrollable view (horizontal and vertical scroll) capable up-to hundreds of (long) sequences without noticeable UI freezes.
* Standard text-editing features such as selecting, copying, pasting, deleting, changing, and inserting of the IUPAC nucleotide-alphabet characters.
* Color-coded nucleotide blocks, with the same color scheme as used in AliView.
* Display of sequence names and position rules within the webview.

### Sequence manipulations

* Switch the entire viewer to translated amino-acids and provide a set of buttons to change the reading-frame for highlighting
* Reverse complement a selected sequence

### Searching functions

* Find a sequence-name, motif or subsequence using plain text.

### User interface layout

* the user interface follows the basic layout and design as pictured in user-interface-draft.png
* Buttons for downloading, or saving the sequences can be ommitted
* The view for phylogenies is not included in the MVP.
* The view for metadata is not included in the MVP.
* Phylogeny features are not included in the MVP.