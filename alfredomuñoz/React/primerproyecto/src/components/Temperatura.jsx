import React, { useState } from "react";

const Temperatura = () =>{
    
    const [temperatura, setTemperatura] = useState(19)
    const Subir = () =>{
        setTemperatura(temperatura + 1)
    }
    const Bajar = () =>{
        setTemperatura(temperatura - 1)
    }

    return (
        <div className="container">
            <h2>La temperatura es: {temperatura}</h2>
            <p>
                {
                    temperatura > 21 ? 'hace calorcito' : 'hace fresquito'
                }
            </p>
            <button className="btn btn-succes btn-block" onClick={Subir}>Aumentar Temperatura</button>
            <button className="btn btn-succes btn-block" onClick={Bajar}>Reducir Temperatura</button>
        </div>
    )
}

export default Temperatura