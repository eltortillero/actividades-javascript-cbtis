import React from 'react'
import Bienvenida from './components3/Bienvenida'

const Bienvenida = (props) => {
    console.log(props)
    const {nombre} = props
    return (
        <div>
           <h2>Bienvenida {nombre}</h2>

        </div>
    )
}
export default Bienvenida