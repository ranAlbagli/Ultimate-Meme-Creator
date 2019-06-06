"use strict"

function onInit() {
    renderImages();

}


function renderImages() {
    var strHtml = '';
    for (var i = 0; i < gImgs.length; i++) {
        var img=gImgs[i];
        strHtml += `<img src="../meme-imgs/${img.id}.jpg" onclick= "onSaveImg(this)" >`;
    }
    console.log(strHtml);
    
    var elGallery = document.querySelector('.imgs-container');
    elGallery.innerHTML = strHtml;
}



function onSaveImg(elImg){
    onSaveImg(elImg.id)
}