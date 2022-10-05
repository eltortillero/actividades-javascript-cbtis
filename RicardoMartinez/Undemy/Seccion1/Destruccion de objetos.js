const Persona = {
    nombre: "Ricardo",
    edad: 17,
    casado: false,
    hijo:{
        nombrehijo: "Noexiste"
    }
}
const {nombre, edad} = Persona
console.log(nombre)
console.log(edad)
const {nombrehijo} = Persona.hijo
console.log