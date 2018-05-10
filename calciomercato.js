// ==UserScript==
// @name         Calciomercato adblock
// @namespace    http://bytecode.guru/
// @version      1.4.0
// @description  Remove annoying anti adblock content
// @author       https://github.com/bytecodeguru
// @updateUrl    https://raw.githubusercontent.com/bytecodeguru/uscript/master/calciomercato.js
// @match        *://www.calciomercato.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

function hideBlockingElement() {
    for (var i = 0; i <= 9; i++) {
      var blockingElement = document.querySelector('[id^="' + i + '"]');
      if (blockingElement !== null) {
        document.getElementById(blockingElement.id).style.display = 'none';
      }
    }
    $("div:contains('plugin')").hide();
}

(function() {
    window.setInterval(hideBlockingElement, 1000);
})();
