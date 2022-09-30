import react, {Fragment, useState} from 'react'
 const contador = () => {
    const [numero, setNumero] = useState(0)
    const Aumnetar = () =>{
        setNumero(numero + 1)
    }
    const Reducir = () => {
        setNumero(numero - 1)
    }
    return (
        <Fragment>
<h2>cantidad del contador :{numero} </h2>
<button onClick={Aumentar}> Aumentar</button>
<button onClick={Reducir}>Reducir</button>
        </Fragment>
    )
}
export default contador 