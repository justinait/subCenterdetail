import React, { useEffect, useState } from 'react'
import './Home.css'
import logo from '/logowhite.png'

function Home() {
  const [activeHero, setActiveHero] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  
  useEffect(() => {
    let interval;

    const updateHero = () => {
      if (window.innerWidth < 1200) {
        setIsMobile(true);
        interval = setInterval(() => {
          setActiveHero((prevHero) => (prevHero === 0 ? 1 : 0)); // Alterna entre los dos heroContainers
        }, 4000); // Cambia cada 4 segundos
      } else {
        setIsMobile(false);
        clearInterval(interval); // Detener alternancia en desktop
        setActiveHero(1); // Fija el segundo contenido en pantallas grandes
      }
    };

    updateHero(); // Llama a la función cuando se monta el componente
    window.addEventListener('resize', updateHero); // Escucha cambios en el tamaño de la ventana

    return () => {
      clearInterval(interval); // Limpia el intervalo al desmontar
      window.removeEventListener('resize', updateHero); // Limpia el listener cuando se desmonta el componente
    };
  }, []);

  return (
    <div id='inicio'>
      <div className={`heroContainer ${activeHero === 0 ? 'firstHero' : ''}`}>
        <h1>
          {activeHero === 0 ? (
            <>
              Visita el mejor <br /><strong>servicio de detailing</strong> <br />  en Palma de Mallorca</>
          ) : (
            <>Realza el brillo de tu auto con nuestro <strong> servicio de detailing </strong> en Palma de Mallorca</>
          )}
        </h1>
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
{/* "Lleva tu auto a otro nivel con nuestro exclusivo detailing."
"Realza el brillo de tu auto con nuestro servicio de detailing."
"El lujo y el detalle que tu auto merece, en manos de profesionales." */}