"use strict"

var gImgs;
var gFilterBy; 
var gCurrImg;

var gKeywords = { 'happy': 0, 'funny': 0 , 'sad':0 , 'smart':0}

var gImgs = [
    { id: 1, keywords: ['sad '] },
    { id: 2, keywords: ['sad'] },
    { id: 3, keywords: ['sady'] },
    { id: 4, keywords: ['happy ran'] },
    { id: 5, keywords: ['happy'] },
    { id: 6, keywords: ['happy'] },
    { id: 7, keywords: ['happy'] },
    { id: 8, keywords: ['happy'] },
    { id: 9, keywords: ['happy'] },
    { id: 10, keywords: ['happy'] },
    { id: 11, keywords: ['happy'] },
    { id: 12, keywords: ['sad'] },
    { id: 13, keywords: ['alon'] },
    { id: 14, keywords: ['alyd'] },
    { id: 15, keywords: ['happy'] },
    { id: 16, keywords: ['happy'] },
    { id: 17, keywords: ['happy'] },
    { id: 18, keywords: ['happy'] },
    { id: 19, keywords: ['happy'] },
    { id: 20, keywords: ['happy'] },
    { id: 21, keywords: ['happy'] },
    { id: 22, keywords: ['happy'] },
    { id: 23, keywords: ['happy'] },
    { id: 24, keywords: ['happy'] },
    { id: 25, keywords: ['happy'] },


];




function saveImg(imgId){

    saveToStorage('img',imgId)
    window.location.href = "canvas-editor.html";
}

function getImages(){

    return gImgs;
}

function setFilter(txt){
    gFilterBy=txt;
}

function getImgsForDisplay() {    
    if (!gFilterBy) return gImgs;
    var myRe = new RegExp('^'+`${gFilterBy}`, 'i');
    var filterImages= gImgs.filter(function (img){
        return myRe.exec(img.keywords);
    })
    return filterImages;
}

function setNewSearchwWord(word){
    if(!gKeywords[word]) gKeywords[word]=1;
    else gKeywords[word]++
}

function getKeyWords(){
    return gKeywords;
}