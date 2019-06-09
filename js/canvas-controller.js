
let canvas;
let gCtx;
// let gTxtSize = 56;
// let gTxt = '';




function init() {    
    gMeme = createMeme()
    createCanvas()
    console.log(gMeme);
    renderTxtsEditor()
}



function renderTxtsEditor() {
    var strHtml = gMeme.txts.map(function (txt, idx) {
        return `

                  <p>


                    <input type="text" data-property="line" placeholder="${txt.line}" oninput="editTxt(this,${idx})">
                    <i class="fas fa-text-height"></i> <input type="range" value="${txt.size}"  min="10" step="2" data-property="size" oninput="editTxt(this ,${idx})">
                    <input type="color" value="${txt.color}" data-property="color" oninput="editTxt(this,${idx})">
                    Font: 
                    <select data-property="font" oninput="editTxt(this,${idx})">
                    <option value="${txt.font}">${txt.font}</option>
                    <option value="Arial">Arial</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Helvetica">Helvetica</option>
                    <option value="Verdana">Verdana</option>
                     <option value="Tahoma">Tahoma</option>
                    <option value="Geneva">Geneva</option>
                    </select>
                    </p>
                    <br>

        
        `
    })
        .join(' ');

    document.querySelector('.choice-wrapper').innerHTML = strHtml;

}

function editTxt(elinput, txtIdx) {
    var property = elinput.dataset.property;  // using data-* attributes
    var value;
    switch (elinput.type) {
        case 'select-one':
            value = elinput.options[elinput.selectedIndex].value;
            break;
        case 'checkbox':
            value = elinput.checked;
            break;
        default: // text, number
            value = elinput.value;
            break;
    }
    gMeme.txts[txtIdx][property] = value;


    createCanvas();
}


 function createCanvas(){
    var imgId = onLoadImg();
    canvas = document.querySelector('#my-canvas');
    gCtx = canvas.getContext("2d");
    var img = new Image()
    img.src = `meme-imgs/${imgId}.jpg`
    img.onload = function () {
        gCtx.drawImage(img, 0, 0, canvas.height, canvas.width);

        gMeme.txts.forEach(function (txt) {
            drawTxt(txt);
        });
 }
}


function drawTxt(txt) {
    // console.log(txt);
    // console.log(gCtx);
    
    
    gCtx.font = txt.size + 'px' + ' ' + txt.font;
    gCtx.textAlign = txt.align;
    gCtx.fillStyle = txt.color;


    gCtx.fillText(txt.line, txt.x, txt.y);
}


// function editTxtSize(elSize){
//     gTxtSize = elSize.value;
//     ctx.font = gTxtSize + 'px ' + ' ' + ' Impact';
//     ctx.fillText(gTxt, 160, 50);

// }



function onChangeFont(elementName) {
    currentElement = elementName;
    switch (currentElement) {
        case 'Arial':
            gCtx.font = gTxtSize + 'px ' + ' ' + ' Arial';
            gCtx.fillText(gTxt, 160, 150);
            break;
        case 'Times New Roman':
            gCtx.font = gTxtSize + 'px ' + ' ' + 'Times New Roman';
            gCtx.fillText(gTxt, 160, 150);  
                      break;
        case 'Helvetica':
            gCtx.font = gTxtSize + 'px ' + ' ' + ' Helvetica';
            gCtx.fillText(gTxt, 160, 150);
            break;
        case 'Verdana':
            gCtx.font = gTxtSize + 'px ' + ' ' + ' Verdana';
            gCtx.fillText(gTxt, 160, 150);
            break;
        case 'Tahoma':
            gCtx.font = gTxtSize + 'px ' + ' ' + ' Verdana';
            gCtx.fillText(gTxt, 160, 150);
            break;
        case 'Geneva':
            gCtx.font = gTxtSize + 'px ' + ' ' + ' Verdana';
            gCtx.fillText(gTxt, 160, 150);
            break;
    }
}







function downloadCanvas(elLink) {
    var data = canvas.toDataURL();
    elLink.href = data;

}



function onLoadImg() {
    return loadFromStorage('img')
}

function onClearCanvas() {
    clearCanvas();
}

function onSetLang(lang) {
    setLang(lang);
    if (lang === 'he') document.body.classList.add('rtl');
    else document.body.classList.remove('rtl');
    // renderBooks()
    doTrans();
}





// upload

function renderCanvas(img) {
    canvas.width = img.width;
    canvas.height = img.height;
    gCtx.drawImage(img, 0, 0);
}


function onFileInputChange(ev) {
    handleImageFromInput(ev, renderCanvas)
}
