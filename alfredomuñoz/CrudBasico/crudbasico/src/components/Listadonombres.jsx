import React, { useState } from "react";
import uniqid from 'uniqid'

const Listadonombres = () =>{

const [nombre, setNombre] = useState('')
const [listanombres, setListanombres] = useState([])
const [modificacion, setModificacion] = useState(false)
const [id, setId] = useState('')
const [error, setError] = useState(null)


const addNombre = (e)=>{
    e.preventDefault()
    if(!nombre.trim()){
        setError('el campo nombre esta vacio')
        return
    }
    const nuevoNombre = {
        id:uniqid(),
        tituloNombre:nombre
    }
    setListanombres([...listanombres,nuevoNombre])
    setNombre('')
    setError(null)
}
const deleteNombre = (id) =>{
    const nuevaArray = listanombres.filter( item => item.id !== id)
    setListanombres(nuevaArray)
}
const editar = (item) =>{
    setModificacion(true)
    setNombre(item.tituloNombre)
    setId(item.id)

}
const editarNombre = (e) =>{
    e.preventdefault()
    const NuevoArray = listanombres.map( item => item.id === id ? {id:item.id, tituloNombre:nombre}: item)
    setListanombres(NuevoArray)
}

    return(
        <div>
            <h2>Aplicacion de Crud Basica</h2>
            <div className="row">
                <div className="col">
                    <h2>Listado de nombres</h2>
                    <ul className="list-group">
                        {
                            listanombres.map( item =>
                                <li key="{item.id}"
                                 className="list-group-item">
                                    {item.tituloNombre}
                                    <button
                                    className="btn btn-info float-right"
                                    onClick={ () => {editar(item)}}
                                    >
                                        EDITAR
                                    </button>
                                    <button
                                    className="btn btn-danger float-right"
                                    onClick={ () => {deleteNombre(item.id)}}
                                    >
                                        BORRAR
                                    </button>
                                    </li>
                                )
                        }
                    </ul>
                </div>
                <div className="col">
                    <h2>formulario para añadir nombres</h2>
                    <form onSubmit={modificacion ? editar : addNombre} className="form-group">
                        <input onChange={(e)=>{setNombre(e.target.value)}}
                         className="form-control mb-3"
                          type="text"
                          placeholder="Introduce el nombre" 
                          value={nombre}
                          />
                        <input
                         className="btn btn-info btn-block" 
                         type="submit" 
                         value={modificacion ? 'EDITAR NOMBRE' : 'REGISTRAR NOMBRE'}
                        />
                    </form>
                    {
                        error != null ? (
                            <div className="alert alert-danger">
                                {error}
                            </div>
                        ):
                        (
                            <div></div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Listadonombres 
/* Alfredo Muñoz */