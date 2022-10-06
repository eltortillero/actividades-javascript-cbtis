import React, {useState} from 'react'
import uniqid from 'uniqid'

const Listadodenombres = () => {

    const [nombre, setNombre] = useState('')
    const [listanombres, setListanombres] = useState([])

    const addNombre = (e)=>{
        e.preventDefault()
        const nuevoNombre = {
            id:uniqid(),
            tituloNombre:nombre 
        }
        setListanombres([...listanombres,nuevoNombre])
        setNombre('')
    }
    const deleteNombre = () =>{
        const nuevaArray = tareas.filter( item => item.id !== id)
        setListanombres(nuevaArray)
    }

    return (
        <div>
            <h2>Aplicación CRUD basica</h2>
            <div className="row">
                <div className="col">
                    <h2>Listado de nombres</h2>
                    <ul className="list-group">
                        {
                            listadenombres.map( item =>
                                <li key="{item.id}" className="list-group-item">{item.tituloNombre}
                                {item.tituloNombre}
                                <button 
                                className="btn btn-danger float-right"
                                onClick={ () => {deleteNombre(item.id)} } 
                                
                                >
                                    BORRAR
                                </button>
                                
                                </li>
                                )
                        }
                    </ul>
                </div>
                <div className="col">
                    <h2>Formulario para añadir nombres</h2>
                    <form onSubmit={(e)=> addNombre(e)} className="form-group">
                        <input 
                        onChange={(e)=>{setNombre(e.target.value)}} 
                        className="form-control mb-3" type="text" 
                        placeholder="Introduce el nombre"
                        value={nombre}
                        />
                        <input className="btn btn-info btn block" type="submit" value="Registrar nombre"/>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Listadodenombres