import React, {Fragment,useState} from 'react'

const Listado = () => {

    const [numero,setNumeros] = useState([1,2,3,4,5,6])
    return(
        <Fragment>
            <ul>
                {
                    numero.map ((item, index) =>
                    <li key={item} >
                        {item} - {index}
                    </li>
                    )
                }
            </ul>
        </Fragment>
    )
}

export default Listado