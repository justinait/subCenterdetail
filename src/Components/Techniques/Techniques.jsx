import React, { useEffect, useRef, useState } from 'react'
import './Techniques.css'

function Techniques() {

    const services = [
        { 
            name: 'VINILO', 
            image: '/images/vinilo.jpg', 
            text: 'Personalizá el color o diseño de tu vehículo con vinilo de alta calidad.' 
        },
        { 
            name: 'PPF', 
            image: '/images/ppf.jpg', 
            text: 'Protegé la pintura con nuestro film de protección PPF.' 
        },
        { 
            name: 'LAVADO', 
            image: '/images/wash.jpg', 
            text: 'Lavado completo para mantener tu auto impecable.' 
        },
        { 
            name: 'RESTAURACIÓN DE PINTURA', 
            image: '/images/pintura.jpg', 
            text: 'Recuperá el brillo y corregí imperfecciones de la pintura.' 
        },
        { 
            name: 'PULIDA DE LLANTAS', 
            image: '/images/pulidadellantas.jpg', 
            text: 'Pulido especializado para que tus llantas luzcan como nuevas.' 
        },
        { 
            name: 'INTERIOR DETALLADO', 
            image: '/images/interior.jpg', 
            text: 'Limpieza detallada del interior de tu vehículo.' 
        },
        // { 
        //     name: 'REVESTIMIENTO CERÁMICO', 
        //     image: '/images/revestimiento.png', 
        //     text: 'Protección duradera contra el sol y clima con revestimiento cerámico.' 
        // },
        { 
            name: 'LIMPIEZA DE MOTOR', 
            image: '/images/motor.jpg', 
            text: 'Limpieza profunda para mejorar el rendimiento del motor.' 
        }
    ];
    
    
    const containerRef = useRef(null);
    let isDown = false;
    let startX;
    let scrollLeft;

    // limpieza de motor
    // limpieza de carroceria
    // renovador de plasticos exteriores
    // brillo de cristales
    // aspirado profesional
    // limpieza de conductos de aire y calefaccion

    useEffect(() => {
        const container = containerRef.current;

        const handleMouseDown = (e) => {
            isDown = true;
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        };

        const handleMouseLeave = () => {
            isDown = false;
        };

        const handleMouseUp = () => {
            isDown = false;
        };

        const handleMouseMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 3; // Multiplica para aumentar la velocidad de desplazamiento
            container.scrollLeft = scrollLeft - walk;
        };

        container.addEventListener('mousedown', handleMouseDown);
        container.addEventListener('mouseleave', handleMouseLeave);
        container.addEventListener('mouseup', handleMouseUp);
        container.addEventListener('mousemove', handleMouseMove);

        return () => {
            container.removeEventListener('mousedown', handleMouseDown);
            container.removeEventListener('mouseleave', handleMouseLeave);
            container.removeEventListener('mouseup', handleMouseUp);
            container.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className='techniquesContainer' id='formacion'>

            <h2>NUESTROS SERVICIOS</h2>

            <div ref={containerRef} className='techniquesBoxsContainer'>
                {
                    services.map((e, i)=> (
                        <div key={i} className='techniqueBox'>
                            <img src={e.image} alt="" />
                            <div className='techniqueInfoBox'>
                                <h5>{e.name}</h5>
                                <p className='techniquesText'>{e.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Techniques