// ==UserScript==
// @name         Google Location Hider
// @version      1.0.1
// @description  Removes the footer of the Google page that would otherwise show your location.
// @author       Lyzev
// @match       *://*.google.com/*
// @icon         https://github.com/Lyzev/google-location-hider/raw/master/assets/img/icon-128x128.png
// @grant        none
// ==/UserScript==
document.getElementById("footcnt")?.remove()
