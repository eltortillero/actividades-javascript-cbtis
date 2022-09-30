import React, {Fragment} from "react";

function hola(){
    let saludo = 'variable saludo'
    return(
        <Fragment>
        <h2>primer componente hola {saludo}</h2>
        <p>segundo texto</p>
        </Fragment>
    )
}

export default hola