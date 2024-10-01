import React from 'react'
import './Contact.css'
import ig from '/ig.png'
import mail from '/mail.png'

function Contact() {
  return (
    <div className='contactContainer'  id='contacto'>
      <h2>Contacto</h2>
      
      <p className='contactSubtitle'>¿Listo para dar el siguiente paso?</p>
      <p className='contactText'>Estamos disponibles para cualquier consulta, <br className='tabletOn'/> no dudes en comunicarte con nosotros</p>

      <div className='contactContainerBox'>

        <div>
          <img src={ig} alt="INSTAGRAM" className='contactIconMail' />
          <p>@centerdetail</p>
        </div>
        <div>
          <img src={mail} alt="CORREO" className='contactIconMail'/>
          <a href="F.centerdetail@gmail.com" className='contactContainerP' style={{color: 'black', textDecoration: 'none'}}>F.centerdetail@gmail.com</a>
        </div>
      </div>
    </div>
  )
}

export default Contact