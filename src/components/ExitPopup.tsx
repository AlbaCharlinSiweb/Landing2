import { useState, useEffect } from 'react';

interface ExitPopupProps {
  onClose: () => void;
  isClosing: boolean;
}

const ExitPopup = ({ onClose, isClosing }: ExitPopupProps) => {
  const [showForm, setShowForm] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Pequeño retraso para que la animación funcione correctamente
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Esperamos a que termine la animación antes de llamar a onClose
    setTimeout(() => {
      onClose();
    }, 500); // 500ms es la duración de la animación
  };

  const handleCallClick = () => {
    setShowForm(true);
    const formSection = document.getElementById('formulario_contacto');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-500 ${
      isClosing ? 'opacity-0' : 'opacity-100'
    }`}>
      <div 
        className={`bg-white/90 backdrop-blur-sm rounded-lg p-8 max-w-md w-full mx-4 relative shadow-2xl transform transition-all duration-500 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          ¿Te gustaría recibir más información sobre el Bono Digital?
        </h2>

        <p className="text-gray-600 mb-6">
          Te ayudamos a conseguir tu Bono Digital SIN IVA, con servicios totalmente gratuitos para tu negocio.
        </p>

        <p className="text-gray-600 mb-8">
          Si quieres más información, podemos llamarte e informarte sin compromiso.
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={handleCallClick}
            className="w-full bg-gradient-to-r from-emerald-600 to-cyan-500 text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300"
          >
            ¡Te llamamos Gratis!
          </button>

          <button
            onClick={handleClose}
            className="w-full bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-300"
          >
            No, gracias
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitPopup; 