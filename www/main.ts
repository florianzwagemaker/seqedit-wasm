import { SequenceViewer } from './sequence-viewer';
import { parse_fasta, reverse_complement, translate } from '../pkg/seqedit_wasm';

async function main() {

    const sequenceCanvas = document.getElementById('sequence-canvas') as HTMLCanvasElement;
    const namesCanvas = document.getElementById('names-canvas') as HTMLCanvasElement;
    const rulerCanvas = document.getElementById('ruler-canvas') as HTMLCanvasElement;
    const viewer = new SequenceViewer(sequenceCanvas, namesCanvas, rulerCanvas);

    const urlInput = document.getElementById('url-input') as HTMLInputElement;
    const loadButton = document.getElementById('load-button') as HTMLButtonElement;
    const revCompButton = document.getElementById('revcomp-button') as HTMLButtonElement;
    const translateButton = document.getElementById('translate-button') as HTMLButtonElement;
    const frame1Button = document.getElementById('frame1-button') as HTMLButtonElement;
    const frame2Button = document.getElementById('frame2-button') as HTMLButtonElement;
    const frame3Button = document.getElementById('frame3-button') as HTMLButtonElement;
    const nucleotideModeButton = document.getElementById('nucleotide-mode-button') as HTMLButtonElement;

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

    translateButton.addEventListener('click', () => {
        const selected = viewer.getSelectedSequence();
        if (selected) {
            const translatedSequence = translate(selected.sequence, 1); // Default to frame 1
            viewer.setTranslatedSequences([translatedSequence], 1); // Assuming single sequence for now
        } else {
            alert('Please select a sequence to translate.');
        }
    });

    frame1Button.addEventListener('click', () => {
        const selected = viewer.getSelectedSequence();
        if (selected) {
            const translatedSequence = translate(selected.sequence, 1);
            viewer.setTranslatedSequences([translatedSequence], 1);
        } else {
            alert('Please select a sequence to translate.');
        }
    });

    frame2Button.addEventListener('click', () => {
        const selected = viewer.getSelectedSequence();
        if (selected) {
            const translatedSequence = translate(selected.sequence, 2);
            viewer.setTranslatedSequences([translatedSequence], 2);
        } else {
            alert('Please select a sequence to translate.');
        }
    });

    frame3Button.addEventListener('click', () => {
        const selected = viewer.getSelectedSequence();
        if (selected) {
            const translatedSequence = translate(selected.sequence, 3);
            viewer.setTranslatedSequences([translatedSequence], 3);
        } else {
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