//Ejercicio 
//const prompt = require('prompt-sync')();

var nombreProducto = "Celular";
var precioProducto =  350;

function precioTotal( precio, nombreProducto ){
    var resultado = 0;
    if (precio <= 399){
        console.log("Factura ")
        console.log("Costo del " + nombreProducto + " es: " + precio)
        console.log( "Costo de envio: $100")
        resultado = precio + 100;
        console.log( "El total a pagar es: " + resultado);
    }
    else if (precio > 399){
        resultado = precio
        console.log( "El total a pagar es: " + resultado);
    }
}
precioTotal( precioProducto, nombreProducto)

//Ambito
function ambitoVar(){
    const i = 1;
    if ( i == 1){
        var variableVar = "Ambito de variable ";
    }
    console.log( variableVar );
}
ambitoVar();

//Declaracion let

let nombre = "Nicolas";
nombre = "Andres";
console.log(nombre);

function ambitoLet(){
    const i = 1
    if ( i == 1 ){
        let variableLet = "Ambito de variable-let";
        console.log( variableLet );
    }    
}
ambitoLet();

var mensaje = "Texto";

function mensajeFuncion(){
    var mensaje = "Texto2";
    console.log( mensaje )
}
console.log(mensaje);
mensajeFuncion();
console.log(mensaje);