const obtenterusuario = async () => {
    try{
fetch('https://jsonplaceholder.typicode.com/todos/1')
const respuesta = await fetch(' ')
const datos = await respuesta.json()
console.log(datos)
    }catch(e){
        console.log(e)
    }
}
obtenterusuario()
