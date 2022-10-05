import React, {useState} from 'react'

const Formulario = () => {

    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')

    const validar = (event) =>{
        event.preventDefault()
        console.log('pulsado el boton')
        if(!nombre.trim()){
            console.log('El nombre está vacío')
            return
        }
        event.preventDefault()
        console.log('pulsado el boton')
        if(!edad.trim()){
            console.log('La edad está vacío')
            return 
    }

    return (

        <div className="container">
            <form onSubmit={validar} className="form-group"> </form>
            <form className="form-group">
                <input placeholder='Indroduce el nombre' 
                className="form-control mb-3" 
                type="text"
                onChange={ (e) => {setNombre (e.target.value) }}
                />
                <input placeholder='Introduce la edad' 
                className="form-control mb-3" 
                type="text"/>
                <input className="btn btn-info btn-block mb-3" 
                type="submit"
                onChange={ (e) => {setEdad (e.target.value)}}
                />
            </form>

        </div>
    )
}
}
export default Formulario