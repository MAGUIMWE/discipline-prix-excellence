import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          En savoir plus sur notre projet
        </h2>
        <p className="text-lg mb-8 text-center">
          Notre plateforme de gestion de la discipline et des prix d'excellence académique est conçue pour améliorer l'expérience éducative.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-2xl font-semibold mb-4">Suivi de la Discipline</h3>
            <p>
              Gérez les comportements des étudiants de manière transparente et équitable grâce à notre tableau de bord intuitif.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-2xl font-semibold mb-4">Récompenses Académiques</h3>
            <p>
              Attribuez des prix aux étudiants qui se distinguent par leurs performances académiques.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-2xl font-semibold mb-4">Rapports et Statistiques</h3>
            <p>
              Générez des rapports détaillés sur les performances et les comportements des étudiants pour suivre leurs progrès.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
