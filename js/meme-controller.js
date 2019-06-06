"use strict"

function onInit(){
    renderImages();


}


function renderImages(){
let strHtml= '';

strHtml = gImgs[0].url;
// strHtml = gImgs[1].url;



document.querySelector('img').src=strHtml;



}