//Arreglo vacio
let scores = new Array();
//arreglo con cantidad de elementos
let scores1 = Array(10);
//arreglo con elementos
let scores2 = new Array(9,10,8,7,6);
//Array con []
let colors = ['red', 'green', 'blue'];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]); 

let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];

console.log(mountains[0]); // 'Everest'
console.log(mountains[1]); // 'Fuji'
console.log(mountains[2]); // 'Nanga Parbat'
console.log(mountains.length);

let mountains2 = ['Everest', 'Fuji', 'Popocatepetl'];
mountains[2] = 'K2';
console.log(mountains2);

//Agregar elementos al final del arreglo
let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
seas.push('Red Sea');
console.log(seas); 

//agregar un elemento al inicio del arreglo
let seas2 = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
seas2.unshift('Red Sea');
console.log(seas2);

//Dejar solo el ultimo elemento del arreglo
let seas3 = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
const lastElement = seas3.pop();
console.log(lastElement); 

//Dejar solo el primer elemento del arreglo
let seas4 = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
const firstElement = seas4.shift();
console.log(firstElement);

//encontrar un elemento en un arreglo
let seas5 = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
let index = seas5.indexOf('North Sea');
console.log(index); // 2