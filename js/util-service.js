"use strict"

function saveToStorage(key, value) {
    var strValue = JSON.stringify(value);
    localStorage.setItem(key, strValue);
}
function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}


function output(str, regex) {

    // outputToLog(str, regex);
    var el = document.querySelector('pre');
    
    el.innerHTML =
      str.replace(regex, function (strMatch) {
        return `<span>${strMatch}</span>`
      });
  
  }