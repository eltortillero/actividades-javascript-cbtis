import React, { useState } from 'react'
import App from '../App'

const Formulario = () => {
  const [nombre, setNombre] = useState('')
  const [edad, setEdad] = useState('')

  const Validar = (event) =>{
    event.preventDefault()
    console.log('Pulsado el boton')
    if(!nombre.trim()){
        console.log('Porfavor llenar el espacio')
            return
    }
    if(!edad.trim()){
        console.log('Porfavor llenar el espacio')
            return
    }
  }
  
  
  
    return(
    <div>
        <form onSubmit={Validar} className='form-group'>
            <input 
            placeholder='Introduce tu nombre' 
            className='form-control mb-3' 
            type="text" 
            onChange={(e) =>{setNombre(e.target.value)}}/>
            <input 
            placeholder='Introduce tu edad' 
            className='form-control mb-3' 
            type="text" 
            onChange={((e) =>{setEdad(e.target.value)} )}
            />
            <input 
            className='btn btn-info btn-block' 
            type="submit" />
        </form>
    </div>
  )
}
export default Formulario