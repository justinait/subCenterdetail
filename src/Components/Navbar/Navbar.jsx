import React, { useEffect, useState } from 'react'
import logo from '/isologo.png'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {

  const [show, setShow] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [activeSection, setActiveSection] = useState(null);

  const updateWindowSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowSize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', updateWindowSize);
      window.addEventListener('scroll', handleScroll);
    };
  }, []);


  const secciones = [
    { nombre: 'INICIO', id: 'inicio', className: 'tabletOff' },
    { nombre: 'SERVICIOS', id: 'servicios', className: ''},
    { nombre: 'CENTER DETAIL', id: 'porque', className: ''},
    { nombre: 'NUESTROS TRABAJOS', id: 'work', className: ''},
    { nombre: 'CONTACTO', id: 'contacto', className: ''}
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = section.offsetTop - 8 * window.innerHeight / 100; // Resta 10vh
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };
  
  const handleScroll = () => {
    secciones.forEach((seccion) => {
      const section = document.getElementById(seccion.id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top - 11 * window.innerHeight / 100 <= 0 && rect.bottom >= 0) {
          setActiveSection(seccion.id);
        }
      }
    });
  };

  const handleClick =(seccion)=> {
    setShow(false);
    scrollToSection(seccion)
  }
  const navbar = (<div className='dropdown'>
    {secciones.map((seccion) => (
      <p className={` ${seccion.className} ${seccion.id === activeSection ? 'active' : ''}`} key={seccion.id} onClick={() => handleClick(seccion.id)}  >
        {seccion.nombre}
      </p>
    ))}
  </div>)

  return (
    <div className='navbarContainer'>
      <a href='/'>
        <img src={logo} alt="" className='logo' onClick={()=>scrollToSection('inicio')}/>
      </a>

      {width < 1200 ? (
        <>
          <MenuIcon className='burgerMenu' onClick={() => setShow(!show)}/>
          {show && navbar}
        </>
      ) : (
        <>{navbar}</>
      )}

    </div>
  )
}

export default Navbar