import react, {fragment} from 'react'
function hola (){
    let saludo = 'variable saludo'
    return (
        <div>
<h2> primer componente hola {saludo} </h2>
<p> segundo texto </p>
        </div>
    )
}
export default hola