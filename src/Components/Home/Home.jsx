import React from 'react'
import './Home.css'
import logo from '/logowhite.png'

function Home() {
  return (
    <div id='inicio'>
      <div className='heroContainer firstHero'>
        <h1>Visita el mejor <br /> <strong>servicio de detailing</strong> <br /> en Palma de Mallorca</h1>
        <img src={logo} alt="" className='heroLogo' />
      </div>
      {/* <div className='heroContainer'>
        <h3>Realza el brillo de tu auto con nuestro <strong>servicio de detailing</strong> en Palma de Mallorca</h3>
        <img src={logo} alt="" className='heroLogo' />
      </div> */}
      <div className='heroFooter'>
        <p className='heroFooterStrong'>Limpieza profesional y precisión.</p>
        <p className='heroFooterP'>Tu vehículo en su mejor versión</p>
      </div>
    </div>
  )
}

export default Home
{/* "Lleva tu auto a otro nivel con nuestro exclusivo detailing."
"Realza el brillo de tu auto con nuestro servicio de detailing."
"El lujo y el detalle que tu auto merece, en manos de profesionales." */}