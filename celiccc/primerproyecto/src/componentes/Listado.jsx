import React,{Fragment, useSate} from 'react'

const  Listado = () => {
const[numeros, setNumeros]= useState([1,2,3,4,5,6])

    return (
        <Fragment>
<ul>
    {
        numeros.map ((item,index) =>
        <li key ={index}>
            {item} - {index}
        </li>
        )
    }
</ul>
        </Fragment>
    )
}

export default Listado