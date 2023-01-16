// ==UserScript==
// @name         Google Location Hider
// @version      1.0.0
// @description  Removes the footer of the Google page that would otherwise show your location.
// @author       Lyzev
// @match       *://*.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==
document.getElementById("footcnt").remove()