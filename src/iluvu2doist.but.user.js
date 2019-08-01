// ==UserScript==
// @name         I love you, Todoist, but leave my arrow keys alone!
// @namespace    http://exiclick.com
// @version      0.1
// @description  Disables some Todoist shortcuts (ctrl+arrows) to allow fast text editing.
// @author       Ishmaeel
// @match        https://*.todoist.com/app*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    document.addEventListener('keydown', filterKeyUp, true);

    function filterKeyUp(e) {
        if (e.ctrlKey) {
            if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
                e.cancelBubble = true;
            }
        }
    }
})();