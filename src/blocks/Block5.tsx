function Block5() {
    return (
      <div className='flex flex-col items-center justify-center mt-16 w-full max-w-4xl mx-auto bg-blue-200 rounded-lg shadow-lg p-10 text-blue-800'>
        <h2 className="text-3xl font-bold mb-6 text-center">
          ¡Los fondos son limitados! Solicita tu bono digital ahora y asegura tu subvención.
        </h2>
        
        <p className="text-xl mb-8 text-center">
          ¿Quieres más información sobre nuestros servicios? Déjanos tu número y te llamamos gratis.
        </p>

        <div className="w-full max-w-md">
          <form className="space-y-4">
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-black">
                Introduce tu número de teléfono
              </label>
              <input
                type="number"
                id="phone"
                className="w-full px-4 py-3 bg-white border border-blue-300 rounded-lg text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Teléfono"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-600 text-white hover:bg-cyan-700 font-medium py-3 px-6 rounded-lg transition-colors duration-300 text-lg transform hover:scale-105"
            >
              Te Llamamos Gratis
            </button>
          </form>

          <p className="mt-6 text-sm text-center">
            Un asesor te llamará para ayudarte a entender cómo aprovechar el Bono Digital y los servicios gratuitos disponibles.
          </p>
        </div>
      </div>
    );
  }
  
  export default Block5;