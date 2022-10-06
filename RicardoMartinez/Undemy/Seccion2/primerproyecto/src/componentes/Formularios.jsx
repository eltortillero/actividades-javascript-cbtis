import React, {useState} from 'react'

const Formulario = () => {

    const [nombre,setNombre] = useState('')
    const [edad, setEdad] = useState('')

    const validar = (event) =>{
        event.preventDefault()
        console.log('Pulsado el boton')
        if (!nombre.trim()){
            console.log('El nombre esta vacio')
            return
        }
        if (!edad.trim()){
            console.log('La edad esta vacia')
            return
        }
    }
    return(
        <div className='container'>
            <form onSubmit={validar} className='form-group'>
                <input
                 placeholder = 'Introduce el nombre' 
                 className='form-control mb-3' 
                 type="text"
                 onChange = {(e) => {setNombre(e.target.value)}} 
                 />
                <input 
                placeholder = 'Introduce la edad' 
                className='form-control mb-3' 
                type="text"
                onChange = {(e) => {setEdad(e.target.value)}} 
                />
                <input className='btn btn-info btn-block mb-3' type="submit" />
            </form>
        </div>
    )
}

export default Formulario;