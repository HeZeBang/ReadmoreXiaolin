// ==UserScript==
// @name         ReadmoreXiaolin
// @version      2024-09-03
// @description  Remove readmore @ xiaolincoding
// @author       ZAMBAR
// @match        https://xiaolincoding.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const blockResourceURL = /^https?:\/\/cdn\.xiaolincoding\.com\/readmore\.js/;

    window.addEventListener('beforescriptexecute', function(e) {
        let src = e.target.src;
        if (blockResourceURL.test(src)) {
            e.preventDefault();
            e.stopPropagation();
            e.target.remove();
        }

    }, true);
})();