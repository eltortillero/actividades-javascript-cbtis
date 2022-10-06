import React,{useState} from 'react'
import {auth} from '../firebaseconf'


const Login = () => {
const[email, setEmail] = useState('')
const[contra, setContra] = useState('')
const[msgError,setMsgError]=useState (null)

const RegistrarUsuario= (e) =>{
    e.preventDefault()

       auth.createUserWithEmailAndContrasenia (email,contra )
      .then(r => alert('Usuario registrado correctamente'))

    .catch (e =>{


      if (e.code == 'auth/invalid-email'){
        setMsgError('Email Incorrecto')
      }
      if(e.code == 'auth/weak-password '){
        setMsgError('La contraseña debe de tener 6 caracteres o mas')
      }
    })
}

const LoginUsuario = () =>{
    auth.signInWithEmailAndPassword(email,contra)
    .then ((r) => console.log(r))
    .catch((err)=>{
        console.log(err)
    })
}

    return(
        <div className='row mt-5'>
            <div className="col"></div>
            <div className="col">
                <form onSubmit={RegistrarUsuario} className='form-group'>
                   <input 
                   onChange={(e)=>{setEmail(e.target.value)}}
                   className='form-control'
                   placeholder='Email: '
                   type= "email"/>
                   <input
                    onChange={(e)=>{setContra(e.target.value)}}
                   className='form-control mt-4'
                   placeholder='Contraseña:'
                   type= "password"/>
                   <input 
                   className='btn btn-dark btn-block mt -4'
                   value='Registrar Usuario'
                   type="submit"/>
                </form>
               <button
               onClick={LoginUsuario}
                className= 'btn btn-success btn block'
                >
                Iniciar Sesion
               </button>

                {
                    msgerror != null  ?
                    (
                        <div>
                            {msgerror}
                        </div>
                    )
                    :
                    (
                        <span></span>
                    )
                }
            </div>
            <div className="col"></div>

        </div>
    )
}
export default Login