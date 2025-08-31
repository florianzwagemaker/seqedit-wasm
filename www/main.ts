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
    const saveRevisionButton = document.getElementById('save-revision-button') as HTMLButtonElement;

    let isTranslated = false;
    let currentFrame = 1;
    let metadata: { header: string[], rows: string[][], originalText: string } | null = null;
    let groupId: string | null = null;

    const urlParams = new URLSearchParams(window.location.search);
    const fastaUrl = urlParams.get('input-fasta');
    const metadataUrl = urlParams.get('metadata-url');
    const organism = urlParams.get('organism');

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

    async function loadMetadata(url: string) {
        if (!url) return;

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
            } else {
                alert('Could not find groupId in metadata file.');
            }

        } catch (error) {
            console.error('Error loading or parsing metadata file:', error);
            alert('Failed to load metadata. See console for details.');
        }
    }

    // Placeholder for Keycloak authentication
    async function getAuthToken(): Promise<string> {
        // In a real implementation, this would involve a redirect to Keycloak,
        // handling the callback, and storing the token.
        // For now, we'll use a placeholder.
        return "your-placeholder-auth-token";
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
        const convertedResults = searchResults.map(res => Array.from(res));
        viewer.setSearchResults(convertedResults, query.length);
    });

    saveRevisionButton.addEventListener('click', async () => {
        const returnUrl = urlParams.get('return-url');
        if (!returnUrl) {
            alert('No return-url specified.');
            return;
        }

        if (!organism) {
            alert('No organism specified in URL.');
            return;
        }

        if (!metadata || !groupId) {
            alert('Metadata not loaded or groupId not found.');
            return;
        }

        const authToken = await getAuthToken();
        if (!authToken) {
            alert('Authentication failed.');
            return;
        }

        const sequences = viewer.getSequences();
        const names = viewer.getSequenceNames();
        const fastaContent = names.map((name: string, i: number) => `>${name}\n${sequences[i]}`).join('\n');
        const fastaFile = new File([fastaContent], "sequences.fasta", { type: "text/plain" });
        const metadataFile = new File([metadata.originalText], "metadata.tsv", { type: "text/tab-separated-values" });

        const formData = new FormData();
        formData.append('sequenceFile', fastaFile);
        formData.append('metadataFile', metadataFile);

        const revisionUrl = `${returnUrl}/${organism}/revise?groupId=${groupId}&dataUseTermsType=OPEN`;

        try {
            const response = await fetch(revisionUrl, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                },
                body: formData,
            });

            if (response.ok) {
                alert('Revision saved successfully!');
                const responseData = await response.json();
                console.log('Success response:', responseData);
            } else {
                const errorText = await response.text();
                alert(`Error saving revision: ${response.status} ${response.statusText}\n${errorText}`);
                console.error('Error response:', errorText);
            }
        } catch (error) {
            console.error('Error saving revision:', error);
            alert('Failed to save revision. See console for details.');
        }
    });

    document.getElementById('frame1-button')!.addEventListener('click', () => translateAll(1));
    document.getElementById('frame2-button')!.addEventListener('click', () => translateAll(2));
    document.getElementById('frame3-button')!.addEventListener('click', () => translateAll(3));

    if (fastaUrl) {
        urlInput.value = fastaUrl;
        loadSequences();
    }

    if (metadataUrl) {
        loadMetadata(metadataUrl);
    }
}

main();
