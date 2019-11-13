// ==UserScript==
// @name         Shanbay display
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://web.shanbay.com/wordsweb/
// @grant        none
// ==/UserScript==

// 在小结界面隐藏结果，按enter显示
(function () {
    'use strict';


    var toggiecndf = function (){
        var cndf = document.querySelector('.cndf>span');
        if(cndf){
            if(cndf.style.display === "none"){
                cndf.style.display = "block";
            } else {
                cndf.style.display = "none";
            }
        }
    }
        
    var toggiedifi = function () {
        var definition = document.querySelectorAll('td.definition>div');
        
        for (let i = 0; i < definition.length; i++) {
            if(definition[i].style.display === "none"){
                definition[i].style.display = "block";

            } else {
                // definition[i].hidden = null; //invalid; 
                // definition[i].removeAttribute("hidden");
                definition[i].style.display = "none";
            }
            //style.visibility = "hidden";
            //display = "none";
        }
    };
    //添加键盘事件
    document.body.addEventListener('keydown',event => {
        switch (event.key){
            case 'Enter':
                toggiedifi();
                toggiecndf();
                break;
        }
    }
    )
    //当DOM树改变时触发，适合处理异步网页
    document.body.addEventListener("DOMSubtreeModified",function(){
        var cndf = document.querySelector('.cndf>span');
        if(cndf){
        cndf.style.display = "none";
        }
        var definition = document.querySelectorAll('td.definition>div');
        for (let i = 0; i < definition.length; i++) {
            definition[i].style.display = "none";
        }
    },false)



})();