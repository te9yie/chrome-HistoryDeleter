function save_options() {
    let patterns = document.getElementById('patterns').value;
    chrome.storage.local.set({
        patterns: patterns
    }, function() {
        let status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 1500);
    });
}

function restore_options() {
    chrome.storage.local.get({
        patterns: ''
    },  function(items) {
        document.getElementById('patterns').value = items.patterns;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
