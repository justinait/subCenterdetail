import React from 'react'
import './Contact.css'
import ig from '/ig.png'
import mail from '/mail.png'
import wsp from '/wsp.png'

function Contact() {
  return (
    <div className='contactContainer'  id='contacto'>
      <h2>Contacto</h2>
      
      <p className='contactSubtitle'>No esperes más. Transforma tu auto.</p>
      <p className='contactText'>Estamos disponibles para cualquier consulta, <br className='tabletOn'/> no dudes en comunicarte con nosotros</p>

      <div className='contactContainerBox'>

        <div>
          <img src={ig} alt="INSTAGRAM" className='contactIconMail' />
          <p>@centerdetailpalma</p>
        </div>
        <div>
          <img src={mail} alt="CORREO" className='contactIconMail'/>
          <a href="mailto:centerdetailmallorca@gmail.com"  target="_blank" rel="noopener noreferrer" className='contactContainerP' style={{color: 'black', textDecoration: 'none'}}>centerdetailmallorca@gmail.com</a>
        </div>
        <div>
          <img src={wsp} alt="WHATSAPP" className='contactIconMail'/>
          <a className='contactContainerP' target='_blank' href='https://wa.link/rk36bo' rel="noopener noreferrer">+34 660 48 51 29</a>
        </div>
      </div>

      <p className='justina'>Powered by <a className='contactText' target='_blank' rel="noopener noreferrer" href="https://www.imjustwebs.com/"><strong > I'mJustWebs</strong></a></p>
    </div>
  )
}

export default Contact