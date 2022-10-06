import React, {useState} from 'react'
import {auth} from '../firebaseconfig'

const login = () => {
const [email, setEmail] = useState('')
const [pass, setPass] = useState ('')
const RegistrarUsuario = () => {
    e.preventDefault()
    try{
        auth.createUserWithEmailAndPassword(email, pass)
        alert('uasuario registrado')
    }catch (e){
        console.log(e.code)
    }
}

    return (
        <div>
            <form onSubmit={RegistrarUsuario}> 
                <input
                onChange={()=>{setEmail(e.target.email)}}
                    placeholder='introduce el email'
                    type="text" />
                <input
                onChange={()=>{setPass(e.target.pass)}}
                placeholder='introduce la contraseña'
                    type="password" />
                    <input 
                    value='registrar usuario'
                    type="submit"/>
            </form>
        </div>
    )
}
export default login