import React, {useState} from "react";
import uniqid from 'uniqid';

const Listadonombres = () => {
    const [nombre, setNombre] = useState('');
    const [listanombres, setListadoNombres] = useState([])
    const [modoEdicion, setModoEdicion] = useState(false)
    const [id, setId] = useState('')

    const addNombre =(e)=>{
        e.preventDefault()
        const nuevoNombre = {
            id:uniqid(),
            tituloNombre:nombre
        }
        setListadoNombres([...listanombres, nuevoNombre])
        setNombre('');       
    }
    const deleteNombre = (id) => {
        const nuevaArray = listanombres.filter(item => item.id !== id);
        setListadoNombres(nuevaArray);
    }
    const editar = (item) => {
        setModoEdicion(true)
        setNombre(item.tituloNombre)
        setId(item.id)
    }
    const editarNombre = (e) =>{
        e.preventDefault()
        const NuevoArray = listanombres.map( item => item.id === id ? {id:id, tituloNombre:nombre}: item)
        setListadoNombres(NuevoArray)
    }

    return(
        <div>
            <h2>Aplicacion Crud Basica</h2>
            <div className="row">
                <div className="col">
                    <h2>Listado de nombres</h2>
                    <ul className="list-group">
                        {
                            listanombres.map( item =>
                                <li key="{item.id}" className="list-group-item">{item.tituloNombre}
                                <button className="btn btn-danger float-right"
                                onClick={() => {deleteNombre(item.id)}}>
                                    BORRAR
                                    </button>
                                    <button className="btn btn-info float-right"
                                onClick={() => {editar(item)}}>
                                    EDITAR
                                    </button>
                                </li>
                                )
                        }
                    </ul>
                </div>
                <div className="col">
                    <h2>Formulario para añadir nombres</h2>
                    <form onSubmit={modoEdicion ? editarNombre : addNombre} className="form-group">
                        <input onChange={(e)=>{setNombre(e.target.value)}} className="form-control mb-3" type="text" placeholder="introduce el nombre" value={nombre}/>
                        <input className="btn btn-info btn-block" 
                        type="submit" 
                        value={modoEdicion ? 'Editar Nombre':'Registrar nombre'}
                        />
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Listadonombres