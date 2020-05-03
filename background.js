chrome.history.onVisited.addListener(function(result) {
    chrome.storage.local.get('patterns', function(value) {
        let patterns = value.patterns.split(/\n/);
        for (let i in patterns) {
            let pattern = patterns[i];
            let re = new RegExp(pattern);
            if (re.test(result.url)) {
                chrome.history.deleteUrl({
                    'url': result.url
                });
                break;
            }
        }
    })
});