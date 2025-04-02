function Block6() {
    return (
      <div className="w-full px-4 mt-16">
        <div className="flex flex-col items-center justify-center mx-auto w-full max-w-6xl">
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
              "Han diseñado mi tienda online, en concreto Patricia. Y no puedo estar más satisfecha. Todo ha sido muy fluido, sencillo y profesional. 
              Ha quedado mejor de lo que podía esperar. Tienen un trato cercano y resuelven todas tus dudas ayudándote en todo el proceso. 
              Muchas gracias por todo!"
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
                "Trabajar con Liliana del equipo de Siweb ha sido un auténtico placer. Ofrece un servicio y una asistencia de primera categoría. 
                Se tomó el tiempo necesario para comprender nuestras necesidades y desarrollaron una solución a medida que superó nuestras expectativas. 
                Una atención excepcional."
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
                "Estoy encantada con la realización de mi página web ,gracias a Patricia Campelo que me guió muy bien y supo plasmar la idea qué yo 
                tenía para la web de mi joyería, ha quedado elegante, práctica y duradera en el tiempo,Gracias Patricia‼"
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
      </div>
    );
  }
  
  export default Block6;