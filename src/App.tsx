import './App.css'
import { useState, useEffect, useRef } from 'react'
import ExitPopup from './components/ExitPopup'
import Navbar from './blocks/Navbar';
import Block1 from './blocks/Block1';
import Block2 from './blocks/Block2';
import Block3 from './blocks/Block3';
import Footer from './blocks/Footer';
import Block4 from './blocks/Block4';
import Block5 from './blocks/Block5';
import Block6 from './blocks/Block6';
import Block7 from './blocks/Block7';
import Block8 from './blocks/Block8';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);
  const throttleTimeout = useRef<number | null>(null);

  useEffect(() => {
    // Mostrar el popup después de 30 segundos
    const timeoutId = setTimeout(() => {
      if (!hasShownPopup) {
        setShowPopup(true);
        setHasShownPopup(true);
      }
    }, 30000);

    // Detectar intención de salida
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownPopup) {
        setShowPopup(true);
        setHasShownPopup(true);
      }
    };

    // Función para limitar la frecuencia de ejecución (throttle)
    const throttle = (callback: Function, delay: number) => {
      if (throttleTimeout.current === null) {
        throttleTimeout.current = window.setTimeout(() => {
          callback();
          throttleTimeout.current = null;
        }, delay);
      }
    };

    // Detectar cuando el ratón se acerca a la parte superior
    const handleMouseMove = (e: MouseEvent) => {
      throttle(() => {
        if (e.clientY <= 20 && !hasShownPopup && !showPopup) {
          console.log('Mostrando popup por movimiento de ratón en parte superior', e.clientY);
          setShowPopup(true);
          setHasShownPopup(true);
        }
      }, 200);
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timeoutId);
      if (throttleTimeout.current) {
        clearTimeout(throttleTimeout.current);
      }
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hasShownPopup, showPopup]);

  const handleClosePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowPopup(false);
      setIsClosing(false);
    }, 500);
  };

  const handleClick = () => {
    const formulario = document.getElementById('formulario_contacto');
    formulario?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="flex flex-col justify-center items-center">
      {showPopup && <ExitPopup onClose={handleClosePopup} isClosing={isClosing} />}
      
      <Navbar />
      <Block1 handleClick={handleClick} />
      <Block2 />
      <Block3 />
      <Block4 handleClick={handleClick} />
      <Block5 />
      <Block6 />
      <Block7 />
      <Block8 />
      <Footer />
    </div>
  )
}

export default App
