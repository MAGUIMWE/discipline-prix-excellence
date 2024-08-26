import React from 'react';

const ProposPage: React.FC = () => {
  return (
    <section className="bg-primary2 text-black py-12 px-4 md:px-12 lg:px-24">
      {/* Présentation du Promoteur */}
      <div className="flex flex-col md:flex-row items-center mb-12">
        <img
          src="src/assets/images/images - Copie.jpeg"
          alt="Promoteur de l'Institut"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mb-4 md:mb-0 md:mr-8"
        />
  
      
        <div>
        
          <h2 className="text-2xl md:text-4xl font-bold mb-2">M. NKEMNI Micheal</h2>
          <p className="text-base md:text-lg lg:text-xl">
            Le promoteur de notre institut est un leader visionnaire avec une passion pour l'éducation
            et le développement des jeunes talents. Son engagement à promouvoir l'excellence académique
            et la discipline a été le pilier de notre institution.
          </p>
        </div>
        
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img src="src/assets/images/IMAGE.jpg" alt="Notre Institut" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-semibold mb-4">Notre Mission</h2>
            <p className="text-base mb-4">
              Notre institut se consacre à l'excellence académique et à la gestion rigoureuse des processus disciplinaires et des prix d'excellence. Nous visons à créer un environnement éducatif stimulant où chaque étudiant peut atteindre son potentiel maximal.
            </p>
            <p className="text-base">
              Grâce à notre équipe dévouée et à nos ressources modernes, nous offrons une gestion transparente et efficace des prix académiques, favorisant ainsi un parcours éducatif enrichissant pour tous nos étudiants.
            </p>
          </div>
        </div>
       
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
        <img src="src/assets/images/téléchargement.jpeg" alt="discipline" className='h-50 w-50'  />
        <img src="src/assets/images/vue-face-du-livre-empile-casquette-academique-verres_23-2148756616.avif" alt="" className='h-25 w-25' />

        </div>


      {/* Description du Projet */}
      <div className="mb-12">
        <h3 className="text-xl md:text-3xl font-bold mb-4 text-center text-yellow-400">Notre Projet</h3>
        <p className="text-base md:text-lg lg:text-xl">
          Notre projet vise à créer une plateforme innovante qui facilite la gestion de la discipline et des prix
          académiques au sein de notre institut. Grâce à cette plateforme, nous assurons une transparence totale
          et une gestion efficace des étudiants, des infractions, et des récompenses académiques.
        </p>
      </div>

      {/* Partenaires */}
      <div>
        <h3 className="text-xl md:text-3xl font-bold text-center mb-4 text-yellow-400">Nos Partenaires</h3>
        <div className="flex flex-wrap justify-between">
          <img
            src="src/assets/images/Logo_Afriland.png"
            alt="Logo du Partenaire 1"
            className="w-24 h-24 md:w-32 md:h-32 object-contain mb-4"
          />
          <img
            src="src/assets/images/logo v_cam-1200w.png"
            alt="src/assets/images/LOGO-FINEC-2.jpeg"
            className="w-24 h-24 md:w-32 md:h-32 object-contain mb-4"
          />
          <img
            src="src/assets/images/logo.png"
            alt="Logo du Partenaire 3"
            className="w-24 h-24 md:w-32 md:h-32 object-contain mb-4"
          />
           <img
            src="src/assets/images/images (1).png"
            alt="Logo du Partenaire 3"
            className="w-24 h-24 md:w-32 md:h-32 object-contain mb-4"
          />
           <img
            src="src/assets/images/IMG_20240821_102737.jpg"
            alt="Logo du Partenaire 3"
            className="w-24 h-24 md:w-32 md:h-32 object-contain mb-4"
          />
           <img
            src="src/assets/images/LOGO-FINEC-2.jpeg"
            alt="Logo du Partenaire 3"
            className="w-24 h-24 md:w-32 md:h-32 object-contain mb-4"
          />
        </div>
      </div>
    </section>
  );
};

export default ProposPage;
