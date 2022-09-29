const Persona = {
    nombre: 'Nicolas',
    edad: 17,
    vivo: true,
    amigo:{
        nombreAmigo:'Alex'
    }
}

const {nombre, edad} = Persona
console.log(nombre)
console.log(edad)
const {nombreAmigo} = Persona.amigo
console.log(nombreAmigo)