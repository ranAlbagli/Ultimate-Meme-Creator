"use strict"

function onInit(){
    renderImages();


}


function renderImages(){
    var strHtml = '';
    for (var i = 0; i < gImgs.length; i++) {
    strHtml += '<tr>';
    for (var j = 0; j < 3; j++) {
        strHtml += `<td>  <img src="${gImgs[i].url}" alt=""> </td>`;
    }
    strHtml += '</tr>';
}
var elGallery = document.querySelector('.gallery');
elGallery.innerHTML = strHtml;

}



