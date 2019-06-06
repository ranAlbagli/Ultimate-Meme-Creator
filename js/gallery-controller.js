"use strict"

function onInit() {
    renderImages();

}


function renderImages() {
    var strHtml = '';
    for (var i = 0; i < gImgs.length; i++) {
        var img=gImgs[i];
        strHtml += `<img src="../meme-imgs/${img.id}.jpg" onclick= "onSaveImg(${img.id})" >`;
    }    
    var elGallery = document.querySelector('.imgs-container');
    elGallery.innerHTML = strHtml;
}



function onSaveImg(elImgIdx){
    saveImg(elImgIdx)
}