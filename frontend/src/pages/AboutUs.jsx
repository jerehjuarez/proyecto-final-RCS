import React, { useState, useEffect } from "react"
import axios from "axios"

function AboutUs() {
    
    const [aboutData, setAboutData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/about-us")
        
        .then((response) => {
            // console.log("Datos recibidos del backend:", response.data);
            setAboutData(response.data);
        })
          .catch((error) => console.error("Error al obtener los datos:", error))
    }, [])


    return (
        <div className="d-flex flex-column align-items-center m-5 flex-lg-row justify-content-lg-around">
            {aboutData.map((data) => (
            <div className= "mb-5" key={data._id}>
                <div className="card mb-5 bg-dark text-white">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner p-3"> 
                        <div className="phone-container d-flex justify-content-center">
                            <img className="w-75 rounded-circle" src={`http://localhost:3000/images/${data.imagen}`} alt={`foto de perfil de ${data.name}`} title={data.name} />
                        </div>
                        <h1>{data.name}</h1>
                        <p>{data.description}</p>
                    </div>
                </div>
            </div>))}
        </div>
    )
}


export default AboutUs