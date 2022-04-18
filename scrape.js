'use strict';

function getNext(){
    var doc = document.querySelector("#site").textContent, out = [];
    for (var i = 0; i < doc.length; i++){
        out.push(doc[i].textContent)
    }
    return result;

}

page.evaluate(getNext);
