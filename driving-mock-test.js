// ==UserScript==
// @name         Shortcut for Driving Mock Test
// @namespace    http://tampermonkey.net/
// @version      0.0.2
// @description  The script will automatically click on the answers of the questions for the driving mock test
// @author       You
// @match        http://theory-tester.com/questions/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
    'use strict';

    //添加键盘事件
    document.body.addEventListener('keydown',event => {
        var options = document.querySelectorAll("li.options-single label"); // Query all the <label> elements under <li> elements with class "options-single"
        var next = document.querySelector("span.icon-right-open")
        var save = document.querySelector("button#save")  

        switch (event.key){

            case '1': // 
                options[0].click()
                break;
            case '2': //
                options[1].click();
                break;    
            case '3': //
                options[2].click();
                break;
            case '4': //
                options[3].click();
                break;
            case 'f': //
                next.click();
                break;    
            case 's': // next one
                save.click();
                break; 

        }
    }
    )

})();