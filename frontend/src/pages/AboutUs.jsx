
function AboutUs() {
    const members = [
        {   
            memberName: "Belén Gómez",
            description:"Me gusta salir de mi zona de confort actualmente trabajo en una empresa como administrativa y estoy con un nuevo desafío estudiando programación web",
            img:"",
            
        },
        {   
            memberName: "Franco Nieva",
            description:"Estudiante en Rolling Code School en el curso de Full Stack Developer MERN Responsable, disciplinado, empático, me gusta trabajar en equipo y aprender de los demás.",
            img:"",
        }
    ]

    const element = members.map(e =>
        <div className= "mb-5"key={e.memberName}>
          <div className="card mb-5 bg-dark text-white">
               <div className="circle"></div>
               <div className="circle"></div>
               <div className="card-inner p-3"> 
                  <h1>{e.memberName}</h1>
                  <p className="fs-5">{e.description}</p>
               </div>
          </div>
        </div>
    ) 
    return(<div className="d-flex flex-column align-items-center m-5 flex-lg-row justify-content-lg-around">{element}</div>)
}

    export default AboutUs