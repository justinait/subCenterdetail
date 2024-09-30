import React from 'react'
import './Home.css'
import logo from '/logowhite.png'

function Home() {
  return (
    <div>
      <div className='heroContainer'>
        <h1>Dejá tu auto en buenas manos</h1>
        <img src={logo} alt="" className='heroLogo' />
      </div>
      <div className='heroFooter'>
        <p className='heroFooterStrong'>Limpieza profesional y precisión.</p>
        <p className='heroFooterP'>Tu vehículo en su mejor versión</p>
      </div>
    </div>
  )
}

export default Home