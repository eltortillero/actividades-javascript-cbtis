import React, {Fragment} from 'react';

function Hola() {
    let saludo = "variable saludo"
    return(
        <Fragment>
            <h2>Primero componente Hola {1+1}</h2>
            <p>Segundo texto</p>
        </Fragment>
    )
}

export default Hola