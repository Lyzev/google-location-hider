const setting = "Enabled"

const toggle = document.querySelector(`#${setting}`)

chrome.storage.local.get([setting], result => {
    if (result[setting] !== undefined) {
        toggle.checked = result[setting]
    } else {
        toggle.checked = true
    }
})

toggle.addEventListener("change", event => {
    const isChecked = event.target.checked
    chrome.storage.local.set({[setting]: isChecked})
})