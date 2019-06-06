
let canvas
let ctx

function init(){
console.log('hey');


}


window.onload = function () {
    canvas = document.querySelector('#my-canvas');
    ctx = canvas.getContext("2d");
    var img = document.querySelector('img');
    ctx.drawImage(img, 0, 0, canvas.height, canvas.width);
    
}




