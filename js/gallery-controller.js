"use strict"

function onInit() {
    renderImages();

}


function renderImages() {
    
    var imgs = getImgsForDisplay();
    // var imgs= getImages();
    var strHtml = '';
    for (var i = 0; i < imgs.length; i++) {
        var img=imgs[i];
        strHtml+= `<a href="canvas-editor.html" onclick= "onSaveImg(${img.id})" >
                    <img src="../meme-imgs/${img.id}.jpg" alt=""></a>`
    }    
    var elGallery = document.querySelector('.imgs-container');
    elGallery.innerHTML = strHtml;
}



function onSaveImg(elImgIdx){
    saveImg(elImgIdx)
}

function onSetFilter(elTxt) {
    var text=elTxt.value
    setFilter(text);
    renderImages();
   
}
