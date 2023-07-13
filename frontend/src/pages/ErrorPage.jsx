import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
      <h1 className='text-center'>404</h1>
      <h2 className='text-center fs-3'>Página no encontrada</h2>
      <div className='text-center'>
      <Link to="/" className='btn btn-primary m-3'>Ir al Inicio <i className="bi bi-house-door-fill"></i></Link>
      </div>
  </div>
  )
}

export default ErrorPage