import React from 'react'
import './After.css'

function After() {
  const after = [
    {before: "/images/beforeafter/before1.jpg", after: "/images/beforeafter/after3.jpg"},
    {before: "/images/beforeafter/before2.jpg", after: "/images/beforeafter/after3.jpg"},
    {before: "/images/beforeafter/before3.jpg", after: "/images/beforeafter/after3.jpg"}
  ]
  return (
    <div className='afterContainer'>
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