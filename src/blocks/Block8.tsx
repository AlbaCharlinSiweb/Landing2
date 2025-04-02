function Block8() {
    return (
      <div className="w-full px-4 mt-16">
        <div className="flex flex-col items-center justify-center mx-auto w-full max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Novedades en Siweb</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <a href="https://capital.es/premios-capital-2024/siweb-premio-capital-2024-a-mejor-proyecto-de-transformacion-digital/102563/" target="_blank" rel="noopener noreferrer">
            <div className="relative h-64 rounded-lg shadow-lg overflow-hidden group">
              <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ 
                backgroundImage: 'url("../src/assets/PremioSiweb.jpg")',
                backgroundPosition: 'center center',
                backgroundSize: 'cover'
              }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-blue-900/10"></div>
              <div className="relative h-full p-8 flex flex-col justify-end text-white z-10">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <h3 className="text-xl font-bold">Premio Capital 2024</h3>
                </div>
                <p className="text-lg">
                  Mejor Proyecto de transformación digital
                </p>
              </div>
            </div>
            </a>

            <a href="https://rccelta.es/club/actualidad/siweb-planificacion-integral-web-nuevo-patrocinador-oficial-del-rc-celta/" target="_blank" rel="noopener noreferrer">
            <div className="relative h-64 rounded-lg shadow-lg overflow-hidden group">
              <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ 
                backgroundImage: 'url("../src/assets/Celta.jpg")',
                backgroundPosition: 'center center',
                backgroundSize: 'cover'
              }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-blue-900/10"></div>
              <div className="relative h-full p-8 flex flex-col justify-end text-white z-10">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-xl font-bold">Nuevo Patrocinio</h3>
                </div>
                <p className="text-lg">
                  Siweb, nuevo patrocinador oficial del RC Celta
                </p>
              </div>
            </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Block8;