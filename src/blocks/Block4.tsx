interface Block4Props {
  handleClick: () => void;
}

function Block4({ handleClick }: Block4Props) {
    return (
      <div className='flex flex-col items-center justify-center mt-10 w-full max-w-7xl'>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Servicios que Puedes Obtener con tu Bono Digital (¡Todo GRATIS!)</h2>
        
        <p className="text-lg text-gray-700 mb-8 text-center">
          Con tu Bono Digital, podrás disfrutar de los siguientes servicios completamente gratis para tu negocio:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          <div className="flex flex-col bg-gradient-to-br from-emerald-500 to-blue-400 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-xl font-bold mb-4">Creación de Páginas Web</h3>
            <p className="flex-grow mb-6">Desarrollamos una página web profesional para tu negocio, sin pagar IVA.</p>
            <button onClick={handleClick} className="w-full bg-white text-cyan-600 hover:bg-gray-100 font-medium py-2 px-4 rounded-lg transition-colors duration-300">
              Solicita tu Página Web Ahora
            </button>
          </div>

          <div className="flex flex-col bg-gradient-to-br from-emerald-500 to-blue-400 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-xl font-bold mb-4">Creación de Tiendas online</h3>
            <p className="flex-grow mb-6">Tu tienda online profesional para vender en toda España, sin pagar IVA.</p>
            <button onClick={handleClick} className="w-full bg-white text-cyan-600 hover:bg-gray-100 font-medium py-2 px-4 rounded-lg transition-colors duration-300">
              Solicita tu Tienda Online
            </button>
          </div>

          <div className="flex flex-col bg-gradient-to-br from-emerald-500 to-blue-400 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-xl font-bold mb-4">Gestión de Redes Sociales</h3>
            <p className="flex-grow mb-6">Conecta con tu público. Gestionamos tus redes sociales de manera profesional.</p>
            <button onClick={handleClick} className="w-full bg-white text-cyan-600 hover:bg-gray-100 font-medium py-2 px-4 rounded-lg transition-colors duration-300">
              Empieza con Redes Sociales
            </button>
          </div>

          <div className="flex flex-col bg-gradient-to-br from-emerald-500 to-blue-400 rounded-lg shadow-lg p-6 text-white">
            <h3 className="text-xl font-bold mb-4">Equipos Informáticos</h3>
            <p className="flex-grow mb-6">Renueva tus equipos informáticos sin coste adicional.</p>
            <button onClick={handleClick} className="w-full bg-white text-cyan-600 hover:bg-gray-100 font-medium py-2 px-4 rounded-lg transition-colors duration-300">
              Solicita Equipamiento Informático
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Block4;