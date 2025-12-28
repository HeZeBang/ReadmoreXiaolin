// ==UserScript==
// @name         ReadmoreXiaolin
// @version      2025-12-28
// @description  Remove readmore @ xiaolincoding
// @author       ZAMBAR
// @match        https://xiaolincoding.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const TARGET = "https://qiniu.techgrow.cn/readmore/dist/readmore.js";

    // Patch script.src setter
    const scriptProto = HTMLScriptElement.prototype;
    const origSetter = scriptProto.__lookupSetter__('src');
    Object.defineProperty(scriptProto, 'src', {
        set(url) {
            if (url === TARGET) {
                console.warn("[TM Blocked Early] Script src:", url);
                return;
            }
            return origSetter.call(this, url);
        }
    });

    // Block script.createElement + setAttribute
    const origSetAttr = scriptProto.setAttribute;
    scriptProto.setAttribute = function(name, value) {
        if (name === "src" && value === TARGET) {
            console.warn("[TM Blocked Early] Script setAttribute:", value);
            return;
        }
        return origSetAttr.apply(this, arguments);
    };
})();
