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
    <div className='d-flex justify-content-center align-items-center'>
        { loading ? (
          <div className='d-flex justify-content-center align-items-center vh-100'>
                <Spinner animation="grow" variant='info' className='m-2' />
                <Spinner animation="grow" variant='info' className='m-2' />
                <Spinner animation="grow" variant='info' className='m-2' />
          </div>
        ) : (
            <div className='form-container text-white'>
                <h1 className='mb-4'>Iniciar sesión</h1>
                <form onSubmit={handleSubmit} >
                    <div className='mb-4'>
                        <input type="email" placeholder='Ingrese su email' autoComplete='off' name='email' className='form-control rounded'onChange={(e) => {setEmail(e.target.value), setErrorDate(""), setValidation("")}} />
                    </div>
                    <div className='mb-4'>
                        <input type="password" placeholder='Ingrese su contraseña' autoComplete='off' name='email' className='form-control rounded' onChange={(e) => {setPassword(e.target.value), setErrorDate(""), setValidation("")}}/>
                    </div>
                    {validation && <p className="text-white rounded text-center mb-3 p-2 bg-danger">{ validation }</p>}
                    {errorDate && <p className="text-white rounded text-center mb-3 p-2 bg-danger">{ errorDate }</p>}
                    <div className='text-center mt-2'>
                        <button type='submit' className='loging text-white w-50'>Iniciar sesión</button>
                    </div>
                </form>
            <p className='mb-0 mt-4 text-center'>¿No tienes una cuenta?</p>
            <div className='text-center mt-3'>
                <Link to="/register" className='loging text-white w-50'>Registrarme</Link>
            </div>
        </div>
        )}
    </div>
  )
}

export default Login