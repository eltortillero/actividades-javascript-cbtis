import React from 'react'

 const Bienvenida =(props)=> {
  console.log(props)
  const {nombre, edad, apellido} = props;
    return (
    <div><h2>Bienvenido {props.nombre}</h2></div>
  )
}
export default Bienvenida;