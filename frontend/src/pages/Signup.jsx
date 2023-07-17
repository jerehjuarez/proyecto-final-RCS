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
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h1>Registro</h1>
            <form onSubmit={handleSubmit} >
                <div className='mb-3'>
                    <label htmlFor="email">Nombre</label>
                    <input type="text" placeholder='Ingrese su nombre' autoComplete='off' name='email' className='form-control rounded-0' onChange={(e) => {setName(e.target.value), setValidation("")}} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Ingrese su email' autoComplete='off' name='email' className='form-control rounded-0'onChange={(e) => {setEmail(e.target.value), setValidation("")}} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="email">Contraseña</label>
                    <input type="password" placeholder='Ingrese su contraseña' autoComplete='off' name='email' className='form-control rounded-0' onChange={(e) => {setPassword(e.target.value), setValidation("")}}/>
                </div>
                <button type='submit' className='btn btn-success border w-100'>Registrarme</button>
            </form>
            {validation && <p className="text-danger">{ validation }</p>}
            <p>¿Ya tienes una cuenta?</p>
            <Link to="/login" className='btn btn-default border w-100 bg-light'>Iniciar sesión</Link>
        </div>
    </div>
  )
}

export default Signup