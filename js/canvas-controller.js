
let canvas;
let ctx;
let gTxtSize = 10;
let gTxt = '';


function init() {    
    createCanvas()
}


 function createCanvas(){
    var imgId = onLoadImg();
    canvas = document.querySelector('#my-canvas');
    ctx = canvas.getContext("2d");
    var img = new Image()
    img.src = `meme-imgs/${imgId}.jpg`
    img.onload = function () {
    ctx.drawImage(img, 0, 0, canvas.height, canvas.width);

    }
 }
function onDrawText(elText) {   
    // var text = elText.value;
    gTxt = elText.value;

    ctx.font = "30px impac";
// console.log(gTxt);


    ctx.fillStyle = gColor;
    // ctx.fillText(text, 160, 50);
    ctx.fillText(gTxt, 160, 50);


    // ctx.fillText(text, canvas.height, canvas.width);
//   return text;
}

function editTxtSize(elSize){
    gTxtSize = elSize.value;
    ctx.font = gTxtSize + 'px ' + ' ' + ' Impact';
    ctx.fillText(gTxt, 160, 50);


   

}



function downloadCanvas(elLink) {
    var data = canvas.toDataURL();
    elLink.href = data;

}

function increaseFontSize(){
}

function onLoadImg() {
    return loadFromStorage('img')
}

function onClearCanvas() {
    clearCanvas();
}