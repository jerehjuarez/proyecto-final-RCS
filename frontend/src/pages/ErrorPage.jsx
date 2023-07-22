import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='page-error-container'>
    
      {/*<h1 className='text-center'>404</h1>*/}
      <div class="loader">
  <p className="text-center text-white">
  <span className="letter letter1">4</span>
  <span className="letter letter2">0</span>
  <span className="letter letter3">4</span>
  </p>
</div>
      <h2 className='text-center fs-3'>Página no encontrada</h2>
      <div className='text-center'>
      <Link to="/" className='btn btn-primary m-3'>Ir al Inicio <i className="bi bi-house-door-fill"></i></Link>
      </div>
  </div>
  )
}

export default ErrorPage