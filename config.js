
let streamingFiles = [],
    streamingId = 'Solo Leveling',
    postId = '2787061011751067902',
    maxEpisode = '12';

function loadHistory() {
    const savedData = localStorage.getItem(streamingId);
    if (savedData) {
        const parsed = JSON.parse(savedData);
        streamingFiles = parsed.streamingFiles || [];
        postId = parsed.postId || '';
        maxEpisode = parsed.maxEpisode || '12';
        
        // Update config form with loaded values
        document.getElementById('streaming-id').value = streamingId;
        document.getElementById('post-id').value = postId;
        document.getElementById('max-episode').value = maxEpisode;
        
        renderEpisodes();
        updateOutput();
    }
}

function saveHistory() {
    const dataToSave = {
        streamingFiles,
        postId,
        maxEpisode,
        lastUpdated: new Date().toISOString()
    };
    localStorage.setItem(streamingId, JSON.stringify(dataToSave));
}

// Add this function to your scripts
function updateConfig() {
    streamingId = document.getElementById('streaming-id').value;
    postId = document.getElementById('post-id').value;
    maxEpisode = document.getElementById('max-episode').value;
    
    document.getElementById('streaming-title').textContent = streamingId;
    saveHistory();
    updateOutput();
}
