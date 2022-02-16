"use strict"


function *g1(){
    console.log('hello');
    yield 'Yeild 1 Ran..';
    console.log('world');
    yield 'Yield 2 Ran...';
    return 'returned...';
}

var g = g1();

// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);

for(let val of g){
    console.log(val);
}