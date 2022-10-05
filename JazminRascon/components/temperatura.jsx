import React, {useState} from 'react'

const Temperatura = () => {

    const [temperatura, setTemperatura] = useState(19)
    const Subir = () =>{
        setTemperatura(temperatura + 1)
    }
    const Bajar = () =>{
        setTemperatura(temperatura - 1)
    }

    return(
        <div>
            <h2>La temperatura es: {temperatura}</h2>
            <p>
                {
                    temperatura > 21 ? 'Hace mucha caloo' : 'ta frio'
                }
            </p>
            <button onClick={Subir}>Aumentar temperatura</button>
            <button onClick={Bajar}>Reducir temperatura</button>
        </div>

    )
}
export default Temperatura