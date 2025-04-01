

function Block7() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const data = {
      nombre: formData.get('nombre_completo'),
      cif: formData.get('cif_empresa'),
      localizacion: formData.get('localizacion_empresa'),
      contacto: formData.get('persona_contacto'),
      telefono: formData.get('telefono_movil'),
      email: formData.get('email_contacto')
    };

    console.log(data);
    
  }
    return (
      <div id="formulario_contacto" className="flex flex-col items-center justify-center mt-16 w-full max-w-6xl bg-gradient-to-br from-blue-100 to-emerald-100 rounded-lg shadow-lg p-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          ¿Quieres que solicitemos hoy tu Bono Digital? Déjanos tus datos y te contactamos sin compromiso.
        </h2>

        <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="nombre_completo" className="block mb-2 text-sm font-medium text-gray-900">
                Nombre y Apellidos
              </label>
              <input
                type="text"
                id="nombre_completo"
                name="nombre_completo"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="cif_empresa" className="block mb-2 text-sm font-medium text-gray-900">
                CIF
              </label>
              <input
                type="text"
                id="cif_empresa"
                name="cif_empresa"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="localizacion_empresa" className="block mb-2 text-sm font-medium text-gray-900">
                Localización de la empresa
              </label>
              <select
                id="localizacion_empresa"
                name="localizacion_empresa"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="peninsula">Península</option>
                <option value="canarias">Islas Canarias</option>
              </select>
            </div>

            <div>
              <label htmlFor="persona_contacto" className="block mb-2 text-sm font-medium text-gray-900">
                Persona de contacto
              </label>
              <input
                type="text"
                id="persona_contacto"
                name="persona_contacto"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="telefono_movil" className="block mb-2 text-sm font-medium text-gray-900">
                Teléfono móvil
              </label>
              <input
                type="number"
                id="telefono_movil"
                name="telefono_movil"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="email_contacto" className="block mb-2 text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                type="email"
                id="email_contacto"
                name="email_contacto"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-blue-400 text-white font-medium rounded-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300 text-lg"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    );
  }
  
  export default Block7;