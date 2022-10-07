import React,{useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth} from '../firebaseconfig'

const Menu = () => {
  const historial = useHistory()
const [usuario, setUsuario] = useState(null)
useEffect( () =>{
  auth.onAuthStateChanged ((user) =>{
    if(user){
      setUsuario(user.email)
      console.log(user.email)
    }
  })
}, [])

const CerrarSesion = () =>{
  auth.signOut()
  setUsuario(null)
  historial.push('/')
}

  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-darj bg-dark'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to='/'>Inicio</Link>
          </li>
          <li>
            <Link className='nav-link' to='/login'>Login</Link>
          </li>
          <li>
            <Link className='nav-link' to='/admin'>Admin</Link>
          </li>
        </ul>
        {

          usuario ?
          (
            <button 
            onClick={}
            className='btn btn-danger'>Cerrar sesion</button>
          )
          :
          (
            <span></span>
          )
        }
      </nav>
    </div>
  )
}

export default Menu