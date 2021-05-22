// ==UserScript==
// @name         voscreen keyboard
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  best way to practise English.
// @author       You
// @match        https://www.voscreen.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    //添加键盘事件
    document.body.addEventListener('keydown',event => {
        var sub = document.querySelector(".c-player-subtitle-question")
        var a = document.querySelectorAll("div.c-player-answer.o-player__answer")  
        var d = document.querySelector('.c-player-next.o-player__next')
        var r = document.querySelector('.c-player-play.o-player__play')
        var v = document.querySelector('.o-player__like-container')

        switch (event.key){

            case 'e': // show options
                sub.click()
                break;
            case 'a': // choose 1st
                a[0].click();
                break;    
            case 's': // choose 2nd
                a[1].click();
                break;    
            case 'd': // next one
                d.click();
                break;
            case 'r': //replay
                r.click();
                break;  
            case 'v': // mark as like or dislike
                v.click();
                break;     

        }
    }
    )


})();