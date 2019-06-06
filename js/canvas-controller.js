
let canvas
let ctx

function init(){
  var imgId= onLoadImg();  
  

      console.log('here');
      canvas = document.querySelector('#my-canvas');
      ctx = canvas.getContext("2d");
      var img = new Image()
       img.src = `<img src="../meme-imgs/${1}.jpg" alt=""> `     
      console.log(img);  
      ctx.drawImage(img, 10, 10, canvas.height, canvas.width);
    
  
}




