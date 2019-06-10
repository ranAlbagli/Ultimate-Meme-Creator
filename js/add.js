

var img = new Image();
img.onload = function () {
    ctx.drawImage(img, 0, 0);
}
img.src = "http://upload.wikimedia.org/wikipedia/commons/d/d2/Svg_example_square.svg";