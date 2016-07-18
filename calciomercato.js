// ==UserScript==
// @name         Calciomercato adblock
// @namespace    http://bytecode.guru/
// @version      1.2.1
// @description  Remove annoying anti adblock content
// @author       https://github.com/bytecodeguru
// @updateUrl    https://raw.githubusercontent.com/bytecodeguru/uscript/master/calciomercato.js
// @include      http://www.calciomercato.com/*
// @grant        none
// ==/UserScript==

(function() {
    for (i = 1; i <= 9; i++) {
        var blockingElement = document.querySelector('[id^="' + i + '"]');
        if (blockingElement !== null) {
            document.getElementById(blockingElement.id).style.display = 'none';
        }
    }
    $("div:contains('plugin')").hide();
})();
