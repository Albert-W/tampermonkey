// ==UserScript==
// @name         Shanbay display
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  try to take over the world!
// @author       You
// @match        https://web.shanbay.com/wordsweb/
// @grant        none
// ==/UserScript==

// 在小结界面隐藏结果，按enter显示
(function () {
    'use strict';

    // 得到总结页的中文解释并切换显示    
    var toggleTable = function () {
        var item = document.querySelectorAll('td.StudySummaryItem_content__3j9YG');
        
        for (let i = 0; i < item.length; i++) {            
            if(item[i].style.display === "none"){
                item[i].style.display = "block";
            } else {
                item[i].style.display = "none";
            }

        }
    };

    // get the list of wrong item and repeatly pronounce it; 
    var i = 0;
    var pronounce = function(){
        var wrongItems = document.querySelectorAll('.wrong');
        if (wrongItems.length != 0){
            if(i>=wrongItems.length ){
                i=0;
            }
            wrongItems[i].querySelector('img').click();
            i=i+1;
        } 
    }

    // 得到例句， 并循环发音
    var j = 0 ;
    var pronounceExam = function(){
        var examItems = document.querySelectorAll('.BayTrans_example__1kVZI');
        if (examItems.length != 0){
            // 防止刚进入时j过大，导致越界
            if(j>=examItems.length){
                j = 0;
            }
            examItems[j].querySelector('img').click();
            j=j+1;
        }
    }

    //添加键盘事件
    document.body.addEventListener('keydown',event => {
        switch (event.key){
            case 'Enter':
                toggleTable();
                // toggiecndf();
                break;
            case 'p':
                // pronounce the word.
                pronounce();
                break;
            case 'e':
                // pronunce the example.
                pronounceExam();
                break;    
        }
    }
    )
    //当DOM树改变时触发，适合处理异步网页
    // 初始化配置
    document.body.addEventListener("DOMSubtreeModified",function(){
        // var cndf = document.querySelector('.cndf>span');
        // if(cndf){
        // cndf.style.display = "none";
        // }
        var item = document.querySelectorAll('td.StudySummaryItem_content__3j9YG');
        for (let i = 0; i < item.length; i++) {
            item[i].style.display = "none";
        }
    },false)

})();