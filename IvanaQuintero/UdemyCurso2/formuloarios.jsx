import react, {useState} from 'react'
const formulario = () => {
const [nombre, setNombre] = useState ('')
const [edad, setEdad ] = useState ('')


    return (
        <div>
            <form>
            <input
             placeholder ="introduce el nombre"
             type ="text"/>
             onChange={(e)  => {setNombre (e.target.value)}}
            <input
             placeholder = "introduce la edad"
             type ="text"/>
             onChange={(e)  => {setEdad (e.target.value)}}
            <input
             type ="submit"/>

            </form>
        </div>
    )
}
export default formulario