import React, {useState, useEffect} from 'react'

const Base = () => {
    const[nombre, setNombre ] = useState ('Celic')
useEffect(()=> {
setTimeout(() =>{
setNombre('Ximena')

},2000)

})



    return (
        <div>
<h1>Pagina de Base Ruta</h1>
{nombre}
        </div>
    )
}
export default Base