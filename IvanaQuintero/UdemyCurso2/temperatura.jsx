import react, {useState} from 'react'
const temperaura = ()=>{
    const [temperatura, setTemperatura] = useState (19)
const subir = () => {
setTemperatura (temperatura + 1)
}
const bajar = () => {
    setTemperatura (temperatura - 1)
    }
    return(
        <div>
<h2> la temperatura es: </h2>
<p>
    {
        temperatura > 21 ? 'hace calorcito' : 'hace fresquito'
    }
</p>
<button onClick={subir}> aumentar temperaura</button> 
<botton onClick= {bajar}> reducir temperatura</botton>

        </div>
    )
}
export default temperatura