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
        },
        {   
            memberName: "Pablo Díaz",
            linkGithub: "https://github.com/Dizpab",
            linkLinkedin: "https://www.linkedin.com/in/pablo-diaz-7737a4a3",
            altGithubIcon: "Logo del icono de GitHub",
            altLinkedinIcon: "Logo del icono de LinkedIn",
        },
        {   
            memberName: "Daniela Artaza",
            linkGithub: "",
            linkLinkedin: "",
            altGithubIcon: "Logo del icono de GitHub",
            altLinkedinIcon: "Logo del icono de LinkedIn",
        },
        {   
            memberName: "Jeremias Juarez",
            linkGithub: "https://github.com/jerehjuarez",
            linkLinkedin: "",
            altGithubIcon: "Logo del icono de GitHub",
            altLinkedinIcon: "Logo del icono de LinkedIn",
        }
    ]

    const element = members.map(e =>
        <div className='members-item my-2' key={e.memberName}>
            <p className='mb-1 fw-medium'>{e.memberName}</p>
            <div className='linksProfile-container mb-3 text-lg-center'>
                <a href={e.linkGithub} className='me-1' target='_blanck'><img src={imgGithub} alt={e.altGithubIcon} /></a>
                <a href={e.linkLinkedin} target='_blanck'><img src={imgLinkedin} alt={e.altLinkedinIcon} /></a>
            </div>
        </div>
    )

  return (
    <footer className='footer-container px-4 px-lg-5 text-white'>
        <div className='d-flex flex-column align-items-start flex-lg-row align-items-lg-center  justify-content-lg-between'>
            <div className='linksPage d-flex flex-column my-3 fw-medium'>
                <NavLink to="/" className='fw-medium my-2 link-underline link-underline-opacity-0'><i className="bi bi-house-door-fill"></i> Inicio</NavLink>
                <NavLink to="/about" className='fw-medium my-2 link-underline link-underline-opacity-0'>Nosotros</NavLink>
                <NavLink to="/contact" className='fw-medium my-2 link-underline link-underline-opacity-0'>Contacto</NavLink>
                <NavLink to="/login" className='fw-medium my-2 link-underline link-underline-opacity-0'>Iniciar sesión</NavLink>
            </div>
            {element} 
        </div>
        <p className='text-center p-2'>&copy; Copyright Group 4 - 2023</p>
    </footer>
  )
}

export default Footer