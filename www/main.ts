import { SequenceViewer } from './sequence-viewer';
import { parse_fasta, reverse_complement, translate, search } from '../pkg/seqedit_wasm';
import { AuthManager, parseAuthConfig, createAuthManagerFromStorage } from './auth';
import { AppStateManager } from './app-state';

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
    const logoutButton = document.getElementById('logout-button') as HTMLButtonElement;

    let isTranslated = false;
    let currentFrame = 1;
    let metadata: { header: string[], rows: string[][], originalText: string } | null = null;
    let groupId: string | null = null;
    let authManager: AuthManager | null = null;
    let searchResults: { results: number[][], queryLength: number } | undefined;
    let stateWasRestored = false;

    let urlParams = new URLSearchParams(window.location.search);
    let fastaUrl = urlParams.get('input-fasta');
    let metadataUrl = urlParams.get('metadata-url');
    let organism = urlParams.get('organism');

    // Debug: Log the current URL to see what we're getting back from Keycloak
    console.log('Page loaded with URL:', window.location.href);
    console.log('URL search params:', window.location.search);

    // Initialize authentication first
    const authConfig = parseAuthConfig();
    if (authConfig) {
        authManager = new AuthManager(authConfig);
    } else {
        // Try to create from stored config (e.g., during OAuth callback)
        authManager = createAuthManagerFromStorage();
    }

    // Check if we have OAuth callback parameters (code/state)
    const currentUrlParams = new URLSearchParams(window.location.search);
    const hasOAuthCallback = currentUrlParams.has('code') && currentUrlParams.has('state');
    
    console.log('OAuth callback parameters present:', hasOAuthCallback);
    console.log('Is returning from auth:', AppStateManager.isReturningFromAuth());
    console.log('AuthManager exists:', authManager ? 'YES' : 'NO');

    // Handle OAuth callback FIRST if present, regardless of state restoration status
    let callbackHandled = false;
    if (authManager && hasOAuthCallback) {
        console.log('Processing OAuth callback...');
        try {
            callbackHandled = await authManager.handleCallback();
            if (callbackHandled) {
                console.log('Authentication callback handled successfully');
                // Check authentication status immediately after callback
                const isAuthenticated = await authManager.isAuthenticated();
                console.log('Authentication status after callback:', isAuthenticated);
            } else {
                console.log('OAuth callback processing failed');
            }
        } catch (error) {
            console.error('Error processing OAuth callback:', error);
        }
    } else if (hasOAuthCallback && !authManager) {
        console.error('OAuth callback detected but AuthManager is not available!');
    }

    // Check if we're returning from authentication and restore state
    // ONLY do this AFTER processing the OAuth callback
    let shouldContinueSave = false;
    if (AppStateManager.isReturningFromAuth()) {
        console.log('Restoring state after authentication');
        const savedState = AppStateManager.restoreStateAfterAuth();
        if (savedState) {
            console.log('Restoring application state after authentication');
            stateWasRestored = true;
            
            // Restore URL parameters AFTER handling OAuth callback
            AppStateManager.restoreUrlParams(savedState.urlParams);
            
            // Update local variables with restored parameters
            urlParams = new URLSearchParams(window.location.search);
            fastaUrl = urlParams.get('input-fasta');
            metadataUrl = urlParams.get('metadata-url');
            organism = urlParams.get('organism');
            
            // Restore application state
            isTranslated = savedState.sequences.isTranslated;
            currentFrame = savedState.sequences.currentFrame;
            metadata = savedState.metadata;
            groupId = savedState.metadata?.groupId || null;
            searchResults = savedState.searchResults;
            
            // Restore sequences in the viewer
            viewer.setSequences(savedState.sequences.names, savedState.sequences.sequences);
            
            // Restore translated state if applicable
            if (savedState.sequences.isTranslated && savedState.sequences.translatedSequences) {
                viewer.setTranslatedSequences(savedState.sequences.translatedSequences, savedState.sequences.currentFrame);
                translateButton.textContent = 'Nucleotide Mode';
                frameButtons.style.display = 'inline-block';
            }
            
            // Restore search results if applicable
            if (savedState.searchResults) {
                viewer.setSearchResults(savedState.searchResults.results, savedState.searchResults.queryLength);
            }
            
            // Check if we should continue with saving revision after authentication
            shouldContinueSave = savedState.shouldContinueSaveRevision || false;
            console.log('Should continue save after auth:', shouldContinueSave);
        }
    }

    // Finalize authentication setup
    if (authManager) {
        // Update save revision button based on auth status
        await updateSaveButtonState();
        
        // If we should continue saving and we're now authenticated, do it
        if (shouldContinueSave) {
            const isAuth = await authManager.isAuthenticated();
            console.log('Checking authentication status after callback:', isAuth);
            if (isAuth) {
                console.log('Continuing with save revision after successful authentication...');
                setTimeout(() => {
                    saveRevisionButton.click();
                }, 100);
            } else {
                console.log('Authentication failed, not continuing with save revision');
            }
        }
    } else {
        // No auth config, disable save revision button
        saveRevisionButton.disabled = true;
        saveRevisionButton.textContent = 'Save Revision (No Auth)';
    }

    async function updateSaveButtonState() {
        if (!authManager) return;

        const isAuth = await authManager.isAuthenticated();
        if (isAuth) {
            saveRevisionButton.disabled = false;
            saveRevisionButton.textContent = 'Save as Revision';
            logoutButton.style.display = 'inline-block';
        } else {
            saveRevisionButton.disabled = false;
            saveRevisionButton.textContent = 'Login & Save Revision';
            logoutButton.style.display = 'none';
        }
    }

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

    async function getAuthToken(): Promise<string | null> {
        if (!authManager) {
            console.error('No authentication manager configured');
            return null;
        }

        return await authManager.getValidToken();
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
        const searchResultsData = sequences.map(seq => search(seq, query));
        const convertedResults = searchResultsData.map(res => Array.from(res));
        viewer.setSearchResults(convertedResults, query.length);
        
        // Store search results for state management
        searchResults = { results: convertedResults, queryLength: query.length };
    });

    saveRevisionButton.addEventListener('click', async () => {
        console.log('Save revision button clicked');
        
        if (!authManager) {
            console.error('No authentication manager configured');
            alert('No authentication configured.');
            return;
        }

        const returnUrl = urlParams.get('return-url');
        if (!returnUrl) {
            console.error('No return-url specified in URL params');
            alert('No return-url specified.');
            return;
        }
        console.log('Return URL:', returnUrl);

        if (!organism) {
            console.error('No organism specified in URL params');
            alert('No organism specified in URL.');
            return;
        }
        console.log('Organism:', organism);

        if (!metadata || !groupId) {
            console.error('Metadata or groupId not available', { metadata: !!metadata, groupId });
            alert('Metadata not loaded or groupId not found.');
            return;
        }
        console.log('Metadata loaded, groupId:', groupId);

        // Check if user is authenticated, if not, initiate auth flow
        const isAuth = await authManager.isAuthenticated();
        console.log('User authenticated:', isAuth);
        
        if (!isAuth) {
            alert('Please refresh the page to authenticate first.');
            return;
        }

        // User is authenticated, proceed with saving revision
        console.log('User is authenticated, proceeding with revision save...');
        const authToken = await getAuthToken();
        if (!authToken) {
            console.error('Failed to get authentication token');
            alert('Failed to get authentication token.');
            return;
        }
        console.log('Auth token obtained successfully');

        const sequences = viewer.getSequences();
        const names = viewer.getSequenceNames();
        console.log('Sequences to save:', names.length, 'sequences');
        console.log('Original sequence names:', names);

        // Start from parsed header/rows so we can modify columns programmatically
        let workingHeader = [...metadata.header];
        let workingRows = metadata.rows.map(r => [...r]);

        // Remove submissionId column if present
        const submissionIdIndex = workingHeader.indexOf('submissionId');
        if (submissionIdIndex !== -1) {
            console.log('Removing submissionId column from metadata');
            workingHeader = workingHeader.filter((_, idx) => idx !== submissionIdIndex);
            workingRows = workingRows.map(row => row.filter((_, idx) => idx !== submissionIdIndex));
        } else {
            console.log('No submissionId column found in metadata; using original metadata');
        }

        // Ensure there is an "Id" column that corresponds to the accession ID (sequence name).
        // If "Id" doesn't exist, prepend it. If it exists, overwrite its values with accession IDs when possible.
        const idIndex = workingHeader.indexOf('Id');
        if (idIndex === -1) {
            console.log('Adding Id column to metadata (will prepend as first column)');
            workingHeader = ['id', ...workingHeader];
            workingRows = workingRows.map((row, idx) => {
                const accession = names[idx] ?? '';
                return [accession, ...row];
            });
        } else {
            console.log('Id column exists in metadata; updating values to match accession IDs where possible');
            workingRows = workingRows.map((row, idx) => {
                const newRow = [...row];
                newRow[idIndex] = names[idx] ?? newRow[idIndex] ?? '';
                return newRow;
            });
        }

        // If there are more sequences than metadata rows, append rows with Id only (best-effort)
        if (names.length > workingRows.length) {
            console.warn('More sequences than metadata rows; appending additional metadata rows with Id only for unmatched sequences');
            for (let i = workingRows.length; i < names.length; i++) {
                const newRow = new Array(workingHeader.length).fill('');
                newRow[workingHeader.indexOf('Id')] = names[i];
                workingRows.push(newRow);
            }
        }

        // Compose modified metadata text
        const modifiedMetadataText = [workingHeader.join('\t'), ...workingRows.map(r => r.join('\t'))].join('\n');
        console.log('Modified metadata preview:', modifiedMetadataText.substring(0, 500) + '...');

        // Remove dashes from sequences before uploading
        const cleanedSequences = sequences.map(seq => seq.replace(/-/g, ''));
        // Keep original sequence names (do not remap to submissionId)
        const fastaContent = names.map((name: string, i: number) => `>${name}\n${cleanedSequences[i]}`).join('\n');
        console.log('FASTA content preview:', fastaContent.substring(0, 200) + '...');

        const fastaFile = new File([fastaContent], "sequences.fasta", { type: "text/plain" });
        const metadataFile = new File([modifiedMetadataText], "metadata.tsv", { type: "text/tab-separated-values" });

        const formData = new FormData();
        formData.append('sequenceFile', fastaFile);
        formData.append('metadataFile', metadataFile);

        const revisionUrl = `${returnUrl.replace(/\/$/, '')}/${organism}/revise?groupId=${groupId}&dataUseTermsType=OPEN`;
        console.log('Making API call to:', revisionUrl);

        try {
            saveRevisionButton.disabled = true;
            saveRevisionButton.textContent = 'Saving...';

            console.log('Sending POST request to Loculus...');
            const response = await fetch(revisionUrl, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                },
                body: formData,
            });

            console.log('Received response:', response.status, response.statusText);

            if (response.ok) {
                alert('Revision saved successfully!');
                const responseData = await response.json();
                console.log('Success response:', responseData);
            } else if (response.status === 401) {
                // Token might be expired, try to refresh and retry once
                console.log('Unauthorized, attempting to refresh token...');
                const newToken = await authManager.refreshToken();
                if (newToken) {
                    console.log('Token refreshed, retrying request...');
                    // Retry with new token
                    const retryResponse = await fetch(revisionUrl, {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${newToken}`,
                        },
                        body: formData,
                    });

                    console.log('Retry response:', retryResponse.status, retryResponse.statusText);

                    if (retryResponse.ok) {
                        alert('Revision saved successfully!');
                        const responseData = await retryResponse.json();
                        console.log('Success response:', responseData);
                    } else {
                        const errorText = await retryResponse.text();
                        alert(`Error saving revision: ${retryResponse.status} ${retryResponse.statusText}\n${errorText}`);
                        console.error('Error response:', errorText);
                    }
                } else {
                    alert('Authentication expired. Please refresh the page and try again.');
                    await authManager.clearStoredAuth();
                    await updateSaveButtonState();
                }
            } else {
                const errorText = await response.text();
                alert(`Error saving revision: ${response.status} ${response.statusText}\n${errorText}`);
                console.error('Error response:', errorText);
            }
        } catch (error) {
            console.error('Error saving revision:', error);
            alert('Failed to save revision. See console for details.');
        } finally {
            saveRevisionButton.disabled = false;
            await updateSaveButtonState();
        }
    });

    document.getElementById('frame1-button')!.addEventListener('click', () => translateAll(1));
    document.getElementById('frame2-button')!.addEventListener('click', () => translateAll(2));
    document.getElementById('frame3-button')!.addEventListener('click', () => translateAll(3));

    // Authentication-first flow: Check if we need authentication and do it early
    async function checkAndInitiateAuthenticationIfNeeded() {
        if (!authManager) {
            return; // No auth config
        }

        const isAuthenticated = await authManager.isAuthenticated();
        if (!isAuthenticated && !AppStateManager.isReturningFromAuth()) {
            console.log('Authentication required - will initiate after loading content...');
            return false; // Don't initiate auth yet, load content first
        }
        
        return false; // No auth needed or already authenticated
    }

    // Load sequences and metadata first, then check auth
    async function loadContentAndCheckAuth() {
        // Load sequences if URL is provided and we haven't restored state
        if (fastaUrl && !stateWasRestored) {
            urlInput.value = fastaUrl;
            await loadSequences();
        }

        // Load metadata if URL is provided and we haven't restored state  
        if (metadataUrl && !stateWasRestored) {
            await loadMetadata(metadataUrl);
        }

        // Now check authentication after content is loaded
        if (authManager) {
            const isAuthenticated = await authManager.isAuthenticated();
            if (!isAuthenticated && !AppStateManager.isReturningFromAuth()) {
                console.log('Content loaded, now initiating authentication...');
                
                // Save current application state before authentication (now with loaded content)
                const sequences = viewer.getSequences();
                const names = viewer.getSequenceNames();
                
                AppStateManager.saveStateBeforeAuth(
                    urlParams,
                    { names, sequences },
                    isTranslated,
                    currentFrame,
                    isTranslated ? viewer.getTranslatedSequences() : undefined,
                    metadata,
                    groupId,
                    searchResults,
                    false // Don't continue with save revision after auth
                );
                
                await authManager.initiateAuth();
                return; // Will redirect
            }
        }
    }

    logoutButton.addEventListener('click', async () => {
        if (authManager) {
            await authManager.logout(true);
        }
    });

    // Load content first, then handle authentication
    await loadContentAndCheckAuth();
}

main();
