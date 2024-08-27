// src/pages/Departments.jsx
import React, { useState } from 'react';
import DepartmentForm from '../compoments/departementForm';


const Departments:React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Gestion des Départements</h1>
      
      <button 
        onClick={() => setShowForm(true)} 
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4">
        Ajouter un Département
      </button>

      {showForm && <DepartmentForm onClose={() => setShowForm(false)} />}

      <div className="flex flex-col md:flex-row items-center mt-4">
        <img src="department-management.jpg" alt="Gestion des Départements" className="w-full md:w-1/2 h-auto rounded-lg shadow-md" />
        <div className="md:ml-6 mt-4 md:mt-0">
          <p className="text-gray-700 text-lg">
            La gestion des départements permet d'organiser les différentes unités au sein de votre organisation. Vous pouvez créer, modifier, et supprimer des départements, ainsi que gérer les membres affiliés à chaque département.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Actions possibles sur un département</h2>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Créer un nouveau département</li>
          <li>Modifier les informations d'un département existant</li>
          <li>Supprimer un département</li>
          <li>Ajouter ou retirer des membres d'un département</li>
          <li>Gérer les projets et activités associés à un département</li>
        </ul>
      </div>
    </div>
  );
}

export default Departments;
