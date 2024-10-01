import React from 'react'
import './About.css'

function About() {
  return (
    <div className='puntosClaveContainer' id='claves'>
        
        <h2>¿Por Qué<br /> Center Detail?</h2>

        {/* <div> */}
            <div className='puntosClaveCircle'>
                <h4 className='puntosClaveNumber'>01.</h4>
                <p className='puntosClaveText'>Cuidamos cada detalle, desde la limpieza minuciosa hasta la selección de los materiales de wrapping, 
                    para garantizar un servicio de excelencia en el mundo del detailing.
                </p>
            </div>
            <div className='puntoClaveCircleShadow'>            </div>
            
            <div className='puntosClaveCircle'>
                <h4 className='puntosClaveNumber'>02.</h4>
                <p className='puntosClaveText'>Las envolturas de vinilo transforman vehículos y los convierten en auténticas obras de arte. 
                    Nuestro equipo combina creatividad y habilidad técnica para crear diseños únicos que destacan en cada calle y carretera.
                </p>
            </div>
            <div className='puntoClaveCircleShadow'>            </div>

            <div className='puntosClaveCircle'>
                <h4 className='puntosClaveNumber'>03.</h4>
                <p className='puntosClaveText'>Combinamos belleza y protección en cada servicio. Realzamos la apariencia de los vehículos y 
                    los protegemos de los elementos, asegurando que se mantengan en óptimas condiciones por más tiempo.
                </p>
            </div>
            <div className='puntoClaveCircleShadow'>            </div>
        {/* </div> */}
    </div>
  )
}

export default About