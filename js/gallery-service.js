"use strict"

var gImgs;
var gFilterBy; 
var gCurrImg;

var gKeywords;

var gImgs = [
    { id: 1, keywords: ['shout'] },
    { id: 2, keywords: ['sing'] },
    { id: 3, keywords: ['trump'] },
    { id: 4, keywords: ['puppies'] },
    { id: 5, keywords: ['baby'] },
    { id: 6, keywords: ['baby'] },
    { id: 7, keywords: ['cat'] },
    { id: 8, keywords: ['listen'] },
    { id: 9, keywords: ['baby'] },
    { id: 10, keywords: ['pointing'] },
    { id: 11, keywords: ['imagine'] },
    { id: 12, keywords: ['peace'] },
    { id: 13, keywords: ['dance'] },
    { id: 14, keywords: ['trump'] },
    { id: 15, keywords: ['baby'] },
    { id: 16, keywords: ['dog'] },
    { id: 17, keywords: ['obama'] },
    { id: 18, keywords: ['awkward'] },
    { id: 19, keywords: ['chears'] },
    { id: 20, keywords: ['matrix'] },
    { id: 21, keywords: ['peace'] },
    { id: 22, keywords: ['shout'] },
    { id: 23, keywords: ['awkward'] },
    { id: 24, keywords: ['peace'] },
    { id: 25, keywords: ['pointing'] },


];


function createKeyWords(){
     gKeywords=loadKeyWords();
     if(!gKeywords){
        gKeywords = { 'baby': 3, 'peace': 1 , 'trump':1 , 'shout':1}
     }
}

function saveImg(imgId){

    saveToStorage('img',imgId)
    // window.location.href = "canvas-editor.html";
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
    else gKeywords[word]++;
    saveKeyWords()
    
}

function getKeyWords(){
    return gKeywords;
}

function saveKeyWords(){
    saveToStorage('keyWords',gKeywords)
}

function loadKeyWords(){
    return loadFromStorage('keyWords')
}