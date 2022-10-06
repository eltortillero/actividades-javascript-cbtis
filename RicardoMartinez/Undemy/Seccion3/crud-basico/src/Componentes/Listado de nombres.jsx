import React, {useState} from 'react'
import uniqid from 'uniqid'

const Listadodenombres = () => {

    const [nombre, setNombre] = useState('')
    const [listanombres, setListanombres] = useState([])
    const [modoEdicion, setModoedicion] = useState(false)
    const [id, setId] = useState('')
    const [error, setError] = useState(null)

    const addNombre = (e)=>{
        e.preventDefault()
        if(!nombre.trim()){
            setError('No se ha escrito ningun nombre')
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
    const deleteNombre = () =>{
        const nuevoArray = listanombres.filter(item => item.id !==id)
        setListanombres(nuevoArray)
    }
    const editar = (item) => {
        setModoedicion(true)
        setNombre(item.titulonombre)
        setId(item.id)
    }
    const editarNombre = (e) =>{
        e.preventDefault()
        const NewArray = listanombres.map(item => item.id === id ? {id:item.id, tituloNombre:nombre}: item)
        setListanombres(NewArray)
        setModoedicion(false)
        setNombre('')
    }

    return(
        <div>
            <h2>Aplicacion de crud basico</h2>
            <div className='row'>
                <div className='col'>
                    <h2>Listado de nombres</h2>
                    <ul className='list-group'>
                        {
                            listanombres.map( item =>
                               
                                <li key='{item.id}' className='list-group-item'>{item.tituloNombre}
                                <button  className='btn btn-danger float-right' onClick={ () => {deleteNombre(item.id)}}>BORRAR</button>
                                <button  className='btn btn-info float-right' onClick={ () => {editar(item)}}>EDITAR</button>
                                </li>
                                )
                        }
                    </ul>
                </div>
                <div className='col'>
                    <h2>Formulario para añadir nombres</h2>
                    <form onSubmit={modoEdicion ? editarNombre : addNombre} className='form-group'>
                        <input 
                        onChange={(e)=>{setNombre(e.target.value)}} 
                        className='form-control mt-3' type="text" 
                        placeholder='Introduce el nombre'
                        value={nombre} 
                        />
                        <input className= 'btn btn-info btn-block' type="submit" value={modoEdicion ? 'EDITAR NOMBRE' : 'REGISTRAR NOMBRE'} />
                    </form>
                    {
                        error != null ? (
                            <div className='alert alert-danger'>
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

export default Listadodenombres 