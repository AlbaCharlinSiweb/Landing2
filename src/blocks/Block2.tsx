function Block2() {
  return (
    <div className="w-full px-4 mt-20 mb-10">
      <div className='flex flex-col md:flex-row overflow-hidden rounded-lg shadow-lg mx-auto w-full max-w-6xl'>
          <div className="flex-1 p-8 bg-blue-200 flex items-center justify-center">
            <p className="text-lg text-gray-700 max-w-md">
                ¿Prefieres que te llamemos? Déjanos tu número y te contactaremos para explicarte cómo aprovechar el Bono Digital.
            </p>
          </div>
          
          <div className="flex-1 p-8 bg-gray-100">
            <form className="max-w-sm mx-auto">
              <div className="mb-5">
                <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900">
                  Introduce tu número de teléfono
                </label>
                <input 
                  type="number" 
                  id="number" 
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-400 block w-full p-2.5" 
                  placeholder="Teléfono" 
                  required 
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-cyan-600 text-white hover:bg-blue-700 font-medium py-3 px-6 rounded-lg transition-colors duration-300 text-lg transform hover:scale-105"
              >
                Te Llamamos Gratis
              </button>
            </form>
          </div>
        </div>
    </div>
  );
}

export default Block2;
