// ==UserScript==
// @name         Bot for yandex
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @grant        none
// ==/UserScript==

let keywords = ['Гобой','Как звучит флейта', 'Кларнет'];
let keyword = keywords[getRandom(0,keywords.length)];
let button = document.querySelectorAll(".button_theme_websearch")[0];

if (button != undefined){
    text.value = keyword;
    button.click();
} else {
    let links = document.links;

    for(let i = 0; i < links.length; i++){
        if(links[i].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai") != -1){
            console.log("ссылка найдена " + links[i]);
            links[i].click();
            break;
        }
    }
}

function getRandom(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}