function save_options() {
    var patterns = document.getElementById('patterns').value;
    chrome.storage.local.set({
        patterns: patterns
    }, function() {
        var status = document.getElementById('status');
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