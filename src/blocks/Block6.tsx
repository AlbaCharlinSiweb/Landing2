function Block6() {
    return (
      <div className="flex flex-col items-center justify-center mt-16 w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Lo que dicen nuestros clientes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 mr-2">
                {'★'.repeat(5)}
              </div>
              <span className="text-gray-600">Google Review</span>
            </div>
            <p className="text-gray-700 mb-4">
              "Excelente atención y profesionalidad. Me han ayudado con la gestión del Kit Digital y todo ha sido muy fácil. Totalmente recomendable."
            </p>
            <a 
              href="https://g.co/kgs/p5s5yJX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-600 hover:text-cyan-700 font-medium"
            >
              Ver en Google →
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 mr-2">
                {'★'.repeat(5)}
              </div>
              <span className="text-gray-600">Google Review</span>
            </div>
            <p className="text-gray-700 mb-4">
              "Gran equipo de profesionales. Han hecho un trabajo excepcional con mi proyecto del Kit Digital. Muy satisfecho con los resultados."
            </p>
            <a 
              href="https://g.co/kgs/7VqnUjb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-600 hover:text-cyan-700 font-medium"
            >
              Ver en Google →
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 mr-2">
                {'★'.repeat(5)}
              </div>
              <span className="text-gray-600">Google Review</span>
            </div>
            <p className="text-gray-700 mb-4">
              "Servicio impecable. Me han guiado en todo el proceso del Kit Digital y han superado mis expectativas. Los recomiendo al 100%."
            </p>
            <br />
            <a 
              href="https://g.co/kgs/HXqjmyj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-600 hover:text-cyan-700 font-medium"
            >
              Ver en Google →
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Block6;