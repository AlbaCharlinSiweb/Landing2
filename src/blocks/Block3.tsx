function Block3() {
    return (
      <div className="w-full bg-gray-200 mt-10">
        <div className="w-full px-4">
          <div className="flex flex-col items-center justify-center mx-auto w-full max-w-6xl py-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">¿Qué es el Bono Digital?</h2>
            
            <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl">
              El Bono Digital te permite acceder a servicios esenciales para digitalizar tu negocio sin coste adicional y sin IVA. Recibe subvención para obtener sitios web, equipos informáticos y gestión de redes sociales.
            </p>

            <div className="w-full">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Beneficios clave:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-emerald-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h4 className="font-semibold text-cyan-600 mb-2">Sin IVA</h4>
                  <p className="text-gray-700">Todo lo que recibes es completamente gratuito, ya que el IVA está exento para tu empresa.</p>
                </div>
                
                <div className="p-6 bg-emerald-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h4 className="font-semibold text-cyan-600 mb-2">Servicios incluidos</h4>
                  <p className="text-gray-700">Creación de páginas web, equipos informáticos, y gestión de redes sociales.</p>
                </div>
                
                <div className="p-6 bg-emerald-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h4 className="font-semibold text-cyan-600 mb-2">Ayuda directa</h4>
                  <p className="text-gray-700">Asesoramiento personalizado para aprovechar al máximo la subvención.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Block3;