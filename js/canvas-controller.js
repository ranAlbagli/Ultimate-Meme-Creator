
let canvas;
let ctx;


function init() {
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
    var text = elText.value;
    ctx.font = "30px Arial";
    ctx.fillStyle = gColor;
    ctx.fillText(text, 160, 50);
    // ctx.fillText(text, canvas.height, canvas.width);

}

function downloadCanvas(elLink) {
    const data = gCanvas.toDataURL();
    elLink.href = data;

}

function increaseFontSize(){
}

function onLoadImg() {
    return loadFromStorage('img')
}