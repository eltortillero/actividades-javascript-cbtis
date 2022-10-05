var ourDog = {
    "Nombre": "Sammy",
    "patas": 4,
    "cola": 1,
    "amigos" : ["nadie"],
    "ladrido": "guaf-guaf"
};
delete ourDog.ladrido;
var myDog = {
    "Nombre": "Rudy",
    "patas": 4,
    "cola": 1,
    "amigos": ["todos los perros del barrio"],
    "ladrido": "wrof-wrof"
};
delete myDog.cola;
console.log(ourDog);
console.log(myDog);