"use strict"

function onInit() {
    renderImages();

}


function renderImages() {
    var strHtml = '';
    for (var i = 0; i < gImgs.length; i++) {
        var img=gImgs[i];
        strHtml+= `<a href="canvas-editor.html" onclick= "onSaveImg(${img.id})" >
                    <img src="meme-imgs/${img.id}.jpg" alt=""></a>`
    }    
    var elGallery = document.querySelector('.imgs-container');
    elGallery.innerHTML = strHtml;
}



function onSaveImg(elImgIdx){
    saveImg(elImgIdx)
}


