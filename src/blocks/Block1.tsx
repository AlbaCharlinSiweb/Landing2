interface Block1Props {
  handleClick: () => void;
}

function Block1({ handleClick }: Block1Props) {
  return (
    <div className="w-full bg-gradient-to-br from-emerald-600 to-blue-500 border border-gray-200 shadow-lg pt-5 pb-5">
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <svg className="w-10 h-10 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h5 className="text-3xl font-bold tracking-tight text-white">¡Transforma tu Negocio con el Bono Digital SIN IVA!</h5>
            </div>
            <h2 className="text-xl font-semibold text-white mb-4">Todo Gratis para ti.</h2>
            
            <div className="mb-6">
              <p className="mb-3 font-normal text-white flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Gestionamos tu subvención del Kit Digital en Canarias.
              </p>
              <p className="mb-3 font-normal text-white flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Creación de página web profesional y tienda online.
              </p>
              <p className="mb-3 font-normal text-white flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Gestión profesional de redes sociales.
              </p>
              <p className="mb-3 font-normal text-white flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Equipos informáticos sin coste adicional.
              </p>
            </div>
          </div>
          
          <div className="md:ml-8 mt-6 md:mt-0">
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-white/30">
              <div className="flex items-center mb-4">
                <svg className="w-7 h-7 text-green-200 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="text-xl font-bold text-white">¡Actúa Ahora!</h3>
              </div>
              <p className="text-white mb-4">Fondos limitados. Solicita tu Bono Digital hoy y asegura tu subvención sin coste.</p>
              <button 
                onClick={handleClick} 
                className="w-full flex items-center justify-center px-5 py-3 text-sm font-medium text-center bg-green-200 text-emerald-800 rounded-lg hover:bg-green-500 hover:text-white transform hover:scale-105 transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-green-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Alta Kit Digital
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Block1;
