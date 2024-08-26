
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6  w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-2">Contactez-nous</h2>
            <p className="mb-1">Adresse : C2HX+5G9,Foreke-Dschang</p>
            <p className="mb-1">Téléphone : +237 676 58 46 20</p>
            <p>Email :  <a href="mailto:contact@example.com" className="text-blue-300 hover:underline">contact@maligah.com</a></p>
          </div>
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-2">Liens Utiles</h2>
            <p className="list-none">
              <li><a href="/" className="text-blue-300 hover:underline no-underline">Accueil</a></li>
              <li><a href="/about" className="text-blue-300 hover:underline no-underline">À propos</a></li>
              <li><a href="/contact" className="text-blue-300 hover:underline no-underline">Contactez-nous</a></li>
              <li><a href="/privacy" className="text-blue-300 hover:underline no-underline">Politique de Confidentialité</a></li>
            </p>
          </div>
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-2">Suivez-nous</h2>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/IPTFuniv" target="_blank" className="text-blue-300 hover:underline">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.043c5.524 0 10 4.476 10 10s-4.476 10-10 10-10-4.476-10-10 4.476-10 10-10zm0-2.043c-6.046 0-11 4.954-11 11s4.954 11 11 11 11-4.954 11-11-4.954-11-11-11zm5.978 6.057h-2.367c-1.475 0-2.343.721-2.343 2.093v2.785h4.564l-.595 3.48h-3.969v8.896h-3.574v-8.896h-2.306v-3.48h2.306v-2.497c0-2.728 1.676-4.13 4.113-4.13z"></path>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" className="text-blue-300 hover:underline">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 2.977c-.825.369-1.71.62-2.635.732 1.017-.608 1.797-1.568 2.163-2.717-.951.564-2.006.975-3.127 1.2-.896-.956-2.17-1.55-3.578-1.55-2.7 0-4.9 2.206-4.9 4.92 0 .39.045.767.129 1.134-4.08-.205-7.688-2.153-10.11-5.1-.423.723-.664 1.56-.664 2.455 0 1.693.861 3.188 2.17 4.062-.8-.026-1.553-.245-2.207-.612v.061c0 2.373 1.685 4.356 3.918 4.807-.41.113-.844.174-1.293.174-.317 0-.626-.031-.928-.09.626 1.94 2.438 3.354 4.58 3.392-1.676 1.311-3.78 2.094-6.068 2.094-.394 0-.779-.023-1.163-.069 2.166 1.389 4.738 2.197 7.526 2.197 9.027 0 13.973-7.49 13.973-13.973 0-.213-.004-.425-.012-.637.959-.693 1.788-1.56 2.448-2.548z"></path>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" className="text-blue-300 hover:underline">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.23 0h-20.46c-1.437 0-2.63 1.19-2.63 2.652v18.697c0 1.462 1.192 2.652 2.63 2.652h20.46c1.437 0 2.63-1.19 2.63-2.652v-18.697c0-1.462-1.193-2.652-2.63-2.652zm-14.17 20.674h-3.362v-11.12h3.362v11.12zm-1.68-12.596c-1.065 0-1.96-.889-1.96-1.986 0-1.104.895-1.986 1.96-1.986 1.066 0 1.96.882 1.96 1.986 0 1.097-.894 1.986-1.96 1.986zm13.234 12.596h-3.362v-5.742c0-1.369-.027-3.135-1.915-3.135-1.915 0-2.209 1.5-2.209 3.055v5.822h-3.361v-11.12h3.233v1.523h.046c.451-.854 1.555-1.755 3.201-1.755 3.422 0 4.065 2.254 4.065 5.183v6.17z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <p>&copy; 2024 Institut Prive des Technologies de la Falaise. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
