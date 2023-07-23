import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <main>
      <section className='section-intro text-center container'>
        <h1 className='py-3'>Haz más, olvida menos.</h1>
        <p className='text-white-50 pb-3 fw-medium fs-5'>Organiza tu vida y alcanza tus metas con nuestra App To-Do.</p>
        <div className='my-4'>
          <Link to="/login"className='fw-medium loging text-white'>Iniciar sesión</Link>
        </div>
      </section>
      <section className='text-center container-img1 py-5'>
        <img src="../src/images/img1.svg" alt="imagen ilustrativa" />
      </section>
      <section className='text-center container'>
        <p className='text-white-50 fs-4'>¿Te cuesta recordar todas tus tareas y responsabilidades diarias?</p>
        <p className='text-white-50 fs-5'> No te preocupes, App To-Do está aquí para ayudarte a mantener todo bajo control y lograr tus metas sin estrés. Con nuestra sencilla y eficiente aplicación, podrás crear listas de tareas y nunca más olvidar una tarea importante. ¡Descubre cómo podemos ayudarte a ser más productivo y organizado en tu día a día!</p>
      </section>
      <section className='text-center features container'>
        <article className='d-flex flex-column flex-lg-row align-items-lg-center'>
          <div>
            <h2 className='py-2 '>Intuitiva y Fácil de Usar</h2>
            <p className='text-white-50 fs-5'>Nuestra app se diseñó para que puedas empezar a usarla sin complicaciones desde el primer momento.</p>
          </div>
          <section className='text-center container-img2 py-5'>
            <img src="../src/images/img2.svg" alt="imagen ilustrativa" />
          </section>
        </article>
        <article className='d-flex flex-column flex-lg-row align-items-lg-center flex-lg-row-reverse'>
          <div>
            <h2 className='py-2'>Marca Tareas Completadas</h2>
            <p className='text-white-50 fs-5'>Tacha las tareas realizadas y mantén una visión clara de tu progreso.</p>
          </div>
          <section className='text-center container-img3 py-5'>
            <img src="../src/images/img3.svg" alt="imagen ilustrativa" />
          </section>
        </article>
      </section>
      <section className='text-center text-white back-img-container p-5'>
          <p className='fs-4'>Experimenta la comodidad de tener tus tareas siempre al alcance de tu mano.</p>
          <p className='fs-4'><Link to="/register" className='link-underline link-underline-opacity-0'><span className='register-text'>Regístrate</span></Link> y empieza a aumentar tu productividad.</p>
      </section>

    </main>
  )
}

export default Home