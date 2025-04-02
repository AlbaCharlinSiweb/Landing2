function Navbar() {
  return (
    <div className="w-full bg-white shadow-md">
      <div className="w-full px-4">
        <div className="flex items-center justify-between mx-auto w-full max-w-6xl py-4">
          {/* Logo en la izquierda */}
          <div className="flex items-center">
            <img 
              src="../src/assets/Siweb.jpg" 
              alt="Logo Siweb" 
              className="h-15"
            />
          </div>
          
          {/* Número de teléfono en la derecha */}
          <div className="flex items-center">
            <div className="mr-2 hidden md:flex">
              <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500 hidden md:block">Llámanos ahora</p>
              <a 
                href="tel:+34828670848" 
                className="font-bold text-cyan-600 hover:text-cyan-700 transition-colors"
              >
                828 670 848
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar; 