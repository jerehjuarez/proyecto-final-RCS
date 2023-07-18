import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';

function NavbarComponent() {
  return (
    <>
       {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="container">
          <Container fluid>
          <NavLink to="/"><img className="logo-app rounded-circle" src="../../img/logo-app.png" alt="logo de la app" /></NavLink>
            <Navbar.Toggle className='bg-light' aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end">
              <Offcanvas.Header className='navbar-toggle' closeButton>
                <Offcanvas.Title className='ms-3 ms-lg-0' id={`offcanvasNavbarLabel-expand-${expand}`}>
                <NavLink to="/"><img className="logo-app rounded-circle" src="../../img/logo-app.png" alt="logo de la app" /></NavLink>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='navbar-toggle-links'>
                <Nav className="justify-content-end flex-grow-1 align-items-center">
                    <NavLink to="/" className=' link fw-medium m-3 p-2 link-underline link-underline-opacity-0 text-white'><i className="bi bi-house-door-fill"></i> Inicio</NavLink>
                    <NavLink to="/about" className='fw-medium m-3 p-1 link-underline link-underline-opacity-0 text-white'>Nosotros</NavLink>
                    <NavLink to="/contact" className='fw-medium m-3 p-1 link-underline link-underline-opacity-0 text-white'>Contacto</NavLink>
                    <NavLink to="/login" className='fw-medium m-3 loging link-underline link-underline-opacity-0 text-white'>Iniciar sesión</NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))} 
    </>)
}

export default NavbarComponent