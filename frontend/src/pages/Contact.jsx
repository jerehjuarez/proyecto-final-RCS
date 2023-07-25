import React, { useState } from 'react';
import axios from "axios"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    mensaje: '',
    opcion: '',
  })

  const [formError, setFormError] = useState('')
  const [formMessage, setFormMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.nombre || !formData.apellido || !formData.email || !formData.mensaje) {
      setFormError('Todos los campos son obligatorios.')
      setFormMessage('')
      return
    }

    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!emailPattern.test(formData.email)) {
      setFormError('El formato del correo electrónico no es válido.')
      setFormMessage('')
      return
    }

    try {
      await axios.post('http://localhost:3000/contact', formData)
      setFormError('')
      setFormMessage('Datos enviados correctamente.')
      setFormData({
        nombre: '',
        apellido: '',
        email: '',
        mensaje: '',
      })

      setTimeout(() => {
        setFormMessage('')
      }, 2000)

    } catch (error) {
      // console.error('Error al guardar los datos:', error)
      setFormError('Ha ocurrido un error al enviar los datos.')
      setFormMessage('')
    }
  }

  return (
    <div className='container-form d-flex flex-column align-items-center justify-content-center'>
      <form className="my-5 form"onSubmit={handleSubmit}>
        <div>
          <h1 className='text-center text-white mb-4'>Formulario de Contacto</h1>
        </div>
        <div>
          <input className='input mb-3 p-2 rounded border-0'
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder='Nombre'
            autoComplete='off'
          />
        </div>
        <div>
          <input className='mb-3 p-2 rounded border-0'
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            placeholder='Apellido'
            autoComplete='off'
          />
        </div>
        <div>
          <input className='mb-3 p-2 rounded border-0'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Correo electrónico'
            autoComplete='off'
          />
        </div>
        <div>
          <textarea className="mb-3 p-2 rounded border-0"
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder='Mensaje'
            rows="5"
            autoComplete='off'
          />
        </div>
        {formError && <p className="text-center p-2 rounded text-white bg-danger">{formError}</p>}
        {formMessage && <p className="text-center p-2 rounded text-white bg-success">{formMessage}</p>}
        <div className='text-center'>
          <button className='contact-form loging text-white' type="submit">Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm;


