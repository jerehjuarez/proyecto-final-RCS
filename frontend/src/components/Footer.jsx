import imgGithub from '../images/github-icon.svg';
import imgLinkedin from '../images/linkedin-icon.svg';

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
        <div className='members-item' key={e.memberName}>
            <p className=''>{e.memberName}</p>
            <div className='linksProfile-container'>
                <a href={e.linkGithub} target='_blanck'><img className='w-25' src={imgGithub} alt={e.altGithubIcon} /></a>
                <a href={e.linkLinkedin} target='_blanck'><img className='w-25' src={imgLinkedin} alt={e.altLinkedinIcon} /></a>
            </div>
        </div>
    )

  return (
    <div className='footer-container'>
        {element} 
        <div className=''>
            <a href="#">Nosotros</a>
            <a href="#">Contacto</a>
        </div>
        <p className='text-center m-0 p-2'>&copy; Copyright Group 4 - 2023</p>
    </div>
  )
}

export default Footer