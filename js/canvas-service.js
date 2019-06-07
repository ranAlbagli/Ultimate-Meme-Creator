'use strict'

let gColor;
var gMeme;

function createMeme(){

 gMeme = {
   selectedImgId: id,
   txts: [
      {
         line: 'I never eat Falafel',
         size: 30,
         align: 'left',
         color: 'white',
         font: 'impact'
      }
   ]
}
}

function changeColor(color) {
   gColor = color;
   console.log(gColor);
}

function getMeme(){
   return gMeme;
}
