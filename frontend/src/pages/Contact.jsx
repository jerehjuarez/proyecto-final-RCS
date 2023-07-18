import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    mensaje: '',
    opcion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes hacer algo con los datos del formulario, como enviarlos a un servidor

    // Reinicia el formulario
    setFormData({
      nombre: '',
      apellido: '',
      email: '',
      mensaje: '',
      opcion: '',
    });
  };

  return (
    <form className= "contact-form"onSubmit={handleSubmit}>
       <div>
    <h1 className='text-center'>Formulario de Contacto</h1>
  </div>
      <div>
        <label className='contact-form label' htmlFor="nombre">Nombre:</label>
        <input className='contact-form input'
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className='contact-form label'htmlFor="apellido">Apellido:</label>
        <input className='contact-form input'
          type="text"
          id="apellido"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className='contact-form label'htmlFor="email">Correo Electrónico:</label>
        <input className='contact-form input'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className='contact-form label'htmlFor="mensaje">Mensaje:</label>
        <textarea className= "contact-form textarea"
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
        />
      </div>

      <button className='contact-form button' type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;




/*

import React from 'react'

function Contact() {
  return (
    <div>
    <h1 className='text-center'>Formulario de Contacto</h1>
  </div>
  )
}

export default Contact */