"use strict"

function onInit() {
    renderImages();
    renderKeyWords();

}


function renderImages() {
    
    var imgs = getImgsForDisplay();
    var strHtml = '';
    for (var i = 0; i < imgs.length; i++) {
        var img=imgs[i];
        strHtml+= `<a href="canvas-editor.html" onclick= "onSaveImg(${img.id})" >
                    <img src="./meme-imgs/${img.id}.jpg" alt=""></a>`
    }    
    var elGallery = document.querySelector('.imgs-container');
    elGallery.innerHTML = strHtml;
}

function renderKeyWords(){
    var currKeyWords=getKeyWords();
    displayWords(currKeyWords)
}



function onSaveImg(elImgIdx){
    saveImg(elImgIdx)
}

function onSetFilter(elTxt) {
    var text=elTxt.value
    setFilter(text);
    renderImages();
   
}

function onChangeColor(color) {
    changeColor(color);
}

function onSearch(){
   var elWord= document.querySelector('input[type="text"]').value
   setNewSearchwWord(elWord)
   document.querySelector('input[type="text"]').value=''  
   renderKeyWords();
}

function displayWords(arr){
    
    var strHtml=''
    for (var currKey in arr) {
        strHtml+='<li>'
        var currValue = arr[currKey];
        strHtml+=`${currKey} </li>`
    }
    document.querySelector('.key-words-list').innerHTML=strHtml;
    
}

