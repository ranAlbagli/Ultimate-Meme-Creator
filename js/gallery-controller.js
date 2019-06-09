"use strict"

function onInit() {
    createKeyWords();
    renderImages();
    renderKeyWords();

}


function renderImages() {
    
    var imgs = getImgsForDisplay();
    var strHtml = '';
    for (var i = 0; i < imgs.length; i++) {
        var img=imgs[i];
        strHtml+= `<div class="item">
                   <div class="hexagon">
                    <a class="gallery-item" href="canvas-editor.html" onclick= "onSaveImg(${img.id})" >
                    <img src="./meme-imgs/${img.id}.jpg" alt=""></a>
                </div>
                </div>`
    }    
    var elGallery = document.querySelector('.container');
    elGallery.innerHTML = strHtml;
}

function renderKeyWords(){
    var currKeyWords=getKeyWords();
    var strHtml=''
    for (var currKey in currKeyWords) {
        var currValue = currKeyWords[currKey];
        var wordSize=currValue*15 +'px';
        strHtml+=`<li  onclick="onSetFilterByKeyword('${currKey}')"  style="font-size:${wordSize}">${currKey} </li>`
    }
    document.querySelector('.key-words-list').innerHTML=strHtml;
}



function onSaveImg(elImgIdx){
    saveImg(elImgIdx)
}

function onSetFilter(elTxt) {
    var text=elTxt.value    
    setFilter(text);
    renderImages();  
}

function onSetFilterByKeyword(txt)
{
    setFilter(txt);
    renderImages();  

}

function runScript(ev){
    if (ev.which == 13 || ev.keyCode == 13) {
        ev.preventDefault();
        onSearch()
    }
};



function onChangeColor(color) {
    changeColor(color);
}

function onSearch(){
   var elWord= document.querySelector('input[type="text"]').value
   setNewSearchwWord(elWord)
   document.querySelector('input[type="text"]').value=''  
   renderKeyWords();
}


function onContact() {
    var userSubject = document.querySelector('.user-subject').value;
    var userMsg = document.querySelector('.user-msg').value;
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=albagli.ran@gmail.com&su=${userSubject}&body=${userMsg}`, '_blank')
}
