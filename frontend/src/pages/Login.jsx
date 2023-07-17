import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';

function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [errorDate, setErrorDate] = useState();
    const [validation, setValidation] = useState();


    const handleSubmit = (e) => {
        e.preventDefault()

        if (!email || !password) {
            setValidation('Por favor, complete todos los campos.');
            return;
        }

        axios.post("http://localhost:3000/login", { email, password })
        .then( result => {console.log(result)
            if (result.data === "Exitoso") {
                setLoading(true)
                setTimeout(() => {
                    navigate("/toDoList")
                }, 1400) 
            } else {
                setErrorDate('Los datos no son correctos')
            }
        })
        .catch(err => console.log(err))
    }

    return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
        { loading ? (
          <div className='d-flex justify-content-center align-items-center'>
                <Spinner animation="grow" variant='primary' className='m-2' />
                <Spinner animation="grow" variant='primary' className='m-2' />
                <Spinner animation="grow" variant='primary' className='m-2' />
          </div>
        ) : (
            <div className='bg-white p-3 rounded w-25'>
            <h1>Iniciar sesión</h1>
            <form onSubmit={handleSubmit} >
                <div className='mb-3'>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Ingrese su email' autoComplete='off' name='email' className='form-control rounded-0'onChange={(e) => {setEmail(e.target.value), setErrorDate(""), setValidation("")}} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="email">Contraseña</label>
                    <input type="password" placeholder='Ingrese su contraseña' autoComplete='off' name='email' className='form-control rounded-0' onChange={(e) => {setPassword(e.target.value), setErrorDate(""), setValidation("")}}/>
                </div>
                <button type='submit' className='btn btn-success border w-100'>Iniciar sesión</button>
            </form>
            {validation && <p className="text-danger">{ validation }</p>}
            {errorDate && <p className="text-danger">{ errorDate }</p>}
            <p>¿No tienes una cuenta?</p>
            <Link to="/register" className='btn btn-default border w-100 bg-light'>Registrarme</Link>
        </div>
        )}
    </div>
  )
}

export default Login