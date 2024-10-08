import React, { useEffect, useRef } from 'react'
import './Techniques.css'

function Techniques() {

    const services = [
        { 
            name: 'VINILO', 
            image: '/images/vinilo.webp', 
            text: 'Personalizá el color o diseño de tu vehículo con vinilo de alta calidad.' 
        },
        { 
            name: 'COATING CERÁMICO', 
            image: '/images/coating.webp', 
            text: 'Crea una capa dura y duradera que protege la pintura y proporciona un brillo profundo.' 
        },
        { 
            name: 'LAVADO', 
            image: '/images/washClose.webp', 
            text: 'Lavado completo para mantener tu auto impecable.' 
        },
        { 
            name: 'RESTAURACIÓN DE PINTURA', 
            image: '/images/pintura.webp', 
            text: 'Recuperación del brillo y corrección de imperfecciones de la pintura.' 
        },
        { 
            name: 'PULIDA DE LLANTAS', 
            image: '/images/pulidadellantas.webp', 
            text: 'Pulido especializado para que tus llantas luzcan como nuevas.' 
        },
        { 
            name: 'INTERIOR DETALLADO', 
            image: '/images/interior.webp', 
            text: 'Limpieza detallada del interior de tu vehículo.' 
        },
        { 
            name: 'LIMPIEZA DE MOTOR', 
            image: '/images/motor.webp', 
            text: 'Limpieza profunda para mejorar el rendimiento del motor.' 
        },
        { 
            name: 'PROTECCIÓN DE FAROS (POLÍMEROS)', 
            image: '/images/cristales.webp', 
            text: 'Devolvé la claridad y transparencia a los cristales de tu vehículo.' 
        },
        { 
            name: 'PULIDO Y CERA', 
            image: '/images/pulirhero.webp', 
            text: 'Pulido profesional y aplicación de cera para proteger y realzar el brillo.' 
        }
    ];
    
    // renovador de plasticos exteriores
    // limpieza de conductos de aire y calefaccion
    
    const containerRef = useRef(null);
    let isDown = false;
    let startX;
    let scrollLeft;

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
        <div className='techniquesContainer' id='servicios'>

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