import React from "react";

const Bienvenida = (props) => {
    console.log(props)
    const {nombre} = props
    return(
        <div>
<h2>Bienvenido {nombre}</h2>
        </div>
    )
}

export default Bienvenida