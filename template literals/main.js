"use strict"

let name= 'john';


function makeUpperCase(word){
    return word.toUpperCase();
}

let template = `<h1>${makeUpperCase('hello')}, ${name}</h1>
<p>this is template page in javascript</p>`;
document.getElementById('template').innerHTML = template;