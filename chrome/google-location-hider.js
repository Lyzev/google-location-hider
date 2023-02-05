chrome.storage.local.get(["Enabled"], result => {
    if (result["Enabled"]) {
        document.getElementById("footcnt")?.remove()
    }
})
