import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

function Signup() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const [validation, setValidation] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!email || !password) return setValidation('Por favor, complete todos los campos.')
            
        if (password.length < 10 ) return setValidation('La contraseña debe tener al menos 10 caracteres');

        axios.post("http://localhost:3000/register", { name, email, password })
        .then( result => {console.log(result)
            navigate("/login")
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='d-flex justify-content-center align-items-center'>
        <div className='form-container text-white'>
            <h1 className='mb-4'>Registro</h1>
            <form onSubmit={handleSubmit} >
                <div className='mb-4'>
                    <input type="text" placeholder='Ingrese su nombre' autoComplete='off' name='email' className='form-control rounded' onChange={(e) => {setName(e.target.value), setValidation("")}} />
                </div>
                <div className='mb-4'>
                    <input type="email" placeholder='Ingrese su email' autoComplete='off' name='email' className='form-control rounded'onChange={(e) => {setEmail(e.target.value), setValidation("")}} />
                </div>
                <div className='mb-4'>
                    <input type="password" placeholder='Ingrese su contraseña' autoComplete='off' name='email' className='form-control rounded' onChange={(e) => {setPassword(e.target.value), setValidation("")}}/>
                </div>
            {validation && <p className="text-white rounded text-center mb-3 p-2 bg-danger">{ validation }</p>}
                <div className='text-center mt-2'>
                    <button type='submit' className='loging text-white w-50'>Registrarme</button>
                </div>
            </form>
            <p className='mb-0 mt-4 text-center'>¿Ya tienes una cuenta?</p>
            <div className='text-center mt-3' >
                <Link to="/login" className='loging text-white w-50'>Iniciar sesión</Link>
            </div>
        </div>
    </div>
  )
}

export default Signup