import React from 'react'
import './After.css'

function After() {
  const after = [
    {before: "/images/beforeafter/motor.jpeg", after: "/images/beforeafter/motorafter.jpeg"},
    {before: "/images/beforeafter/farolbeforeia.jpeg", after: "/images/beforeafter/farolia.jpeg"},
    {before: "/images/beforeafter/before3ia.jpeg", after: "/images/beforeafter/after3ia.jpeg", className: 'higher'}
  ]
  return (
    <div className='afterContainer' id='work'>
      <h2>Nuestro trabajo</h2>

      <div className="imagesContainerMapAfter">
        {after.map((e, i) => (
          <div className="imageContainerAfter" key={i}>
            <div className="image before" style={{ backgroundImage: `url(${e.before})` }}></div>
            <div className="image after" style={{ backgroundImage: `url(${e.after})` }}></div>
            <p className='beforeAfterText'>ANTES / DESPUÉS</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default After