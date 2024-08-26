import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLoginClick = () => {
    window.location.href = '/login';
  };

  return (
    <nav className="bg-primary3 fixed top-0 w-full z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">
              <img src='src/assets/images/LOGO2.png' className='h-12 w-12'/>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-lien no-underline hover:text-yellow px-3 py-2 rounded-md text-sm font-bold">
                Accueil
              </Link>
              <Link to="/about" className="text-lien no-underline hover:text-yellow px-3 py-2 rounded-md text-sm font-bold">
                À propos de
              </Link>
              <Link to="/contact" className="text-lien no-underline hover:text-yellow px-3 py-2 rounded-md text-sm font-bold">
                Contactez-nous
              </Link>
              <button className="text-white bg-blue-500 hover:bg-mydark px-4 py-2 rounded-md focus:outline-none"  onClick={handleLoginClick}>
                Connexion
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary4 hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  className={`${isOpen ? 'hidden' : 'inline-flex'}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
                <path
                  className={`${isOpen ? 'inline-flex' : 'hidden'}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-lien no-underline hover:text-yellow block px-3 py-2 rounded-md text-base font-bold">
              Accueil
            </Link>
            <Link to="/about" className="text-lien no-underline hover:text-yellow block px-3 py-2 rounded-md text-base font-bold">
              À propos de
            </Link>
            <Link to="/contact" className="text-lien no-underline hover:text-yellow block px-3 py-2 rounded-md text-base font-bold">
              Contactez-nous
            </Link>
            <button
              className="text-white bg-blue-500 hover:bg-mydark  px-4 py-2 rounded-md focus:outline-none"
            >
              Connexion
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
