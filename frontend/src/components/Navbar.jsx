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
          <NavLink to="/" className="link-underline link-underline-opacity-0">Logo</NavLink>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className='ms-3 ms-lg-0' id={`offcanvasNavbarLabel-expand-${expand}`}>
                <NavLink to="/" className="link-underline link-underline-opacity-0">Logo</NavLink>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1">
                    <NavLink to="/" className='fw-medium m-3 link-underline link-underline-opacity-0'><i className="bi bi-house-door-fill"></i> Inicio</NavLink>
                    <NavLink to="/about" className='fw-medium m-3 link-underline link-underline-opacity-0'>Nosotros</NavLink>
                    <NavLink to="/contact" className='fw-medium m-3 link-underline link-underline-opacity-0'>Contacto</NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))} 
    </>)
}

export default NavbarComponent