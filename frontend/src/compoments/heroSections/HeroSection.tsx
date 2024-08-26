
import { FaAward } from 'react-icons/fa';


const HeroSection: React.FC = () => {
  return (
    <section
      className="bg-cover bg-center h-screen flex items-center opacity-8"
      style={{ backgroundImage: "url('src/assets/images/IMAGE.jpg')" }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Texte de bienvenue à gauche */}
        <div className="text-left md:w-1/2">
          <h1 className="text-2xl md:text-4xl font-bold text-primary4">
          Bienvenue sur notre Plateforme de Gestion de Discipline et des Recompenses Academique
          </h1>
          <p className="mt-6 text-lg md:text-xl  text-black font-bold">
          Découvrez notre projet de gestion de la discipline et des prix d'excellence académique, conçu pour améliorer l'expérience éducative et récompenser les meilleurs.
          </p>
        </div>

        {/* Icônes à droite */}
        <div className="mt-8 md:mt-0 md:w-1/2 flex flex-col items-center">
          <div className="flex space-x-8">
            {/* Icône Excellence */}
            <div className="text-center">
              <FaAward className="h-20 w-20 text-yellow mx-auto" />
             
            </div>
            <div className="text-center">
            <FaAward className="h-20 w-20 text-yellow mx-auto" />
            </div>
            {/* Icône Discipline */}
            <div className="text-center">
            <FaAward className="h-20 w-20 text-yellow mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
