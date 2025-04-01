interface Block1Props {
  handleClick: () => void;
}

function Block1({ handleClick }: Block1Props) {
  return (
    <div className="w-full bg-gradient-to-br from-emerald-600 to-blue-500 border border-gray-200 shadow-lg">
    <div className="max-w-6xl mx-auto p-6">
        <h5 className="mb-2 text-3xl font-bold tracking-tight text-white">¡Transforma tu Negocio con el Bono Digital SIN IVA! Todo Gratis para ti.</h5>
        <p className="mb-3 font-normal text-white">Gestionamos tu subvención del Kit Digital en Canarias. Cubrimos servicios clave como creación de página web, tienda online, redes sociales y un ordenador.</p>
        <div className="flex justify-center w-full">
        <button onClick={handleClick} className="inline-flex items-center px-5 py-3 text-sm font-medium text-center bg-green-200 rounded-lg hover:bg-green-500 transform hover:scale-105 transition-all duration-300 focus:ring-4 focus:outline-none focus:ring-green-300">
            Alta Kit Digital
        </button>
        </div>
    </div>
    </div>
  );
}

export default Block1;
