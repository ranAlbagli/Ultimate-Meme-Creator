'use strict'

let gColor;
var gMeme;
let currentElement = null;

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



function clearCanvas() {
   // ctx.fillStyle = 'white'
   // ctx.fillRect(0, 0, gCanvas.width, gCanvas.height)

   // ctx.fillText('', 160, 50);

   createCanvas()
   

}


// function getTxtSize(elSize) {
//    gTxtSize = elSize.value;
//    return gTxtSize;
// }


// function changeCurrentFont(element){
//    currentElement = element;
//    return currentElement

// }