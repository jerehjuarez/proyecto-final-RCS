import imgGithub from '../images/github-icon.svg';
import imgLinkedin from '../images/linkedin-icon.svg';
import { NavLink } from 'react-router-dom';

function Footer() {
    const members = [
        {   
            memberName: "Belén Gómez",
            linkGithub: "https://github.com/belugomez",
            linkLinkedin: "https://www.linkedin.com/in/beléngómez",
            altGithubIcon: "Logo del icono de GitHub",
            altLinkedinIcon: "Logo del icono de LinkedIn",
        },
        {   
            memberName: "Franco Nieva",
            linkGithub: "https://github.com/francojnieva",
            linkLinkedin: "https://www.linkedin.com/in/francojnieva/",
            altGithubIcon: "Logo del icono de GitHub",
            altLinkedinIcon: "Logo del icono de LinkedIn",
        }
    ]

    const element = members.map(e =>
        <div className='members-item my-2' key={e.memberName}>
            <p className='mb-1'>{e.memberName}</p>
            <div className='linksProfile-container mb-3'>
                <a href={e.linkGithub} className='me-1' target='_blanck'><img src={imgGithub} alt={e.altGithubIcon} /></a>
                <a href={e.linkLinkedin} target='_blanck'><img src={imgLinkedin} alt={e.altLinkedinIcon} /></a>
            </div>
        </div>
    )

  return (
    <footer className='footer-container px-4 px-lg-5 text-white'>
        <div className='d-flex flex-column align-items-start flex-lg-row align-items-lg-center  justify-content-lg-around'>
            <div className='mt-3'>
                <NavLink to="/"><img className="logo-app rounded-circle" src="../../img/logo-app.png" alt="logo de la app"/></NavLink>
            </div>
            <div className='linksPage d-flex flex-column my-3 fw-medium'>
                <NavLink to="/" className=' my-2 link-underline link-underline-opacity-0'><i className="bi bi-house-door-fill"></i> Inicio</NavLink>
                <NavLink to="/about" className='my-2 link-underline link-underline-opacity-0'>Nosotros</NavLink>
                <NavLink to="/contact" className='my-2 link-underline link-underline-opacity-0'>Contacto</NavLink>
            </div>
            <div className='mt-3'>
                {element} 
            </div>
        </div>
        <p className='text-center p-2'>&copy; Copyright Group 4 - 2023</p>
    </footer>
  )
}

export default Footer