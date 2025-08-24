import { SequenceViewer } from './sequence-viewer';
import { parse_fasta, reverse_complement, translate, search } from '../pkg/seqedit_wasm';

async function main() {

    const sequenceCanvas = document.getElementById('sequence-canvas') as HTMLCanvasElement;
    const namesCanvas = document.getElementById('names-canvas') as HTMLCanvasElement;
    const rulerCanvas = document.getElementById('ruler-canvas') as HTMLCanvasElement;
    const viewer = new SequenceViewer(sequenceCanvas, namesCanvas, rulerCanvas);

    const urlInput = document.getElementById('url-input') as HTMLInputElement;
    const loadButton = document.getElementById('load-button') as HTMLButtonElement;
    const revCompButton = document.getElementById('revcomp-button') as HTMLButtonElement;
    const translateButton = document.getElementById('translate-button') as HTMLButtonElement;
    const frameButtons = document.getElementById('frame-buttons') as HTMLDivElement;
    const searchInput = document.getElementById('search-input') as HTMLInputElement;
    const searchButton = document.getElementById('search-button') as HTMLButtonElement;

    let isTranslated = false;
    let currentFrame = 1;

    async function loadSequences() {
        const url = urlInput.value;
        if (!url) return;

        try {
            const response = await fetch(url);
            const fasta = await response.text();
            const sequencesData: { id: string, residues: string }[] = parse_fasta(fasta);
            const names = sequencesData.map(s => s.id);
            const sequences = sequencesData.map(s => s.residues);
            viewer.setSequences(names, sequences);
        } catch (error) {
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
                const revCompSequence = reverse_complement(originalSequence);
                viewer.updateSequence(seqIndex, revCompSequence);
            });
            viewer.clearSelectedSequenceNames();
        } else {
            alert('Please select one or more sequences to reverse complement.');
        }
    });

    function translateAll(frame: number) {
        const sequences = viewer.getSequences();
        const translatedSequences = sequences.map(seq => translate(seq, frame));
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
        } else {
            translateAll(currentFrame);
        }
    });

    searchButton.addEventListener('click', () => {
        const query = searchInput.value;
        if (!query) return;

        const sequences = viewer.getSequences();
        const searchResults = sequences.map(seq => search(seq, query));
        viewer.setSearchResults(searchResults);
    });

    document.getElementById('frame1-button')!.addEventListener('click', () => translateAll(1));
    document.getElementById('frame2-button')!.addEventListener('click', () => translateAll(2));
    document.getElementById('frame3-button')!.addEventListener('click', () => translateAll(3));

    // Load default sequences on page load
    loadSequences();
}

main();