"use strict"


// var myArray =[11,22,56,87,96,45,11];
// let mySet = new Set(myArray);

// mySet.add('100');
// mySet.add({a:1 , b:2});
// mySet.delete(56);

// mySet.add('100');
// mySet.add('200');
// //console.log(mySet.size);

// // mySet.forEach(function(val){
// //     console.log(val);
// // });

// // let myMap = new Map([['a1','hello'],['b2','goodbye']]);
// // myMap.set('c3','foo');
// // myMap.delete('a1');

// // console.log(myMap.size);

// let carWeakSet = new WeakSet();
// let car1= {
//     make: 'honda',
//     model: 'civic'
// }
// carWeakSet.add(car1);
// let car2= {
//     make: 'maruthi',
//     model: 'civic'
// }
// carWeakSet.add(car2);
// let car3= {
//     make: 'hyndai',
//     model: 'civic'
// }
// carWeakSet.add(car3);

// carWeakSet.delete(car2);

// console.log(carWeakSet);

let carWeakMap = new WeakMap();

let key1={
    id:1
}

let car1= {
         make: 'honda',
        model: 'civic'
     }
     let key2={
        id:2
    }
    
    let car2= {
             make: 'maruthi',
            model: 'civic'
         }
    

carWeakMap.set(key1,car1);
carWeakMap.set(key2,car2);

carWeakMap.delete(key2,car2)
console.log(carWeakMap);