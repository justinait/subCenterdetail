import React, { useState, useEffect, useRef } from 'react';
import './After.css';
import capot from '/images/beforeafter/capot.jpeg'

function After() {

  const after = [
    { name: "Restauración y limpieza de motor", before: "/images/beforeafter/motor.jpeg", after: "/images/beforeafter/motorafter.jpeg" },
    { name: "Limpieza y desinfección de tapicería", before: "/images/beforeafter/before3ia.jpeg", after: "/images/beforeafter/after3ia2.jpeg", className: 'verticalBox' },
    { name: "Pulido de faro y protección polímeros", before: "/images/beforeafter/farolbeforeia.jpeg", after: "/images/beforeafter/farolia.jpeg" }
  ];

  const [isInView, setIsInView] = useState(false);
  const workRef = useRef(null); // Referencia para el ID "work"

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting); // Verifica si está en vista
      },
      { threshold: 0.5 } // Comienza la animación cuando el 50% de la sección está visible
    );
    {console.log(isInView)}

    if (workRef.current) {
      observer.observe(workRef.current);
    }

    return () => {
      if (workRef.current) {
        observer.unobserve(workRef.current);
      }
    };
  }, []);

  return (
    <div className='afterContainer' id='work' ref={workRef}>
      <h2>Nuestro trabajo</h2>
      <p className='afterSubtitle'>ANTES / DESPUÉS</p>

      <div className="imagesContainerMapAfter">
        {after.map((e, i) => (
          <div className={`imageContainerAfter ${e.className ? e.className : ''} ${i === 2 ? 'thirdBoxAfter' : ''}`} key={i}>
            <div className="image before" style={{ backgroundImage: `url(${e.before})` }}></div>
            <div className={`image after ${isInView ? 'loopAnimation' : ''}`} style={{ backgroundImage: `url(${e.after})` }}></div>
            <p className='beforeAfterText'>{e.name}</p>
          </div>
        ))}
        <div className='imageContainerAfter'>
          <img src={capot} alt="" className='imageCapot' />
          <p className='capotText'>Pulido y recuperación de color. Revestimiento cerámico y protección de la pintura.</p>
        </div>
      </div>
    </div>
  );
}

export default After;