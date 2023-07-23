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
            required
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
            required
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
            required
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
            required
            autoComplete='off'
          />
        </div>
        <div className='text-center'>
          <button className='contact-form loging text-white' type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;


