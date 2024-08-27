// src/components/DepartmentForm.jsx
import React, { useState } from 'react';
interface props{ onClose:()=>void;}

const DepartmentForm = ({ onClose }:props) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Remplacez l'URL par l'endpoint de votre API pour enregistrer un département
    const response = await fetch('/api/departments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description }),
    });

    if (response.ok) {
      alert('Département ajouté avec succès !');
      setName('');
      setDescription('');
      onClose(); // Ferme le formulaire
    } else {
      alert('Erreur lors de l\'ajout du département.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Ajouter un Département</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Nom</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>
         
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Ajouter</button>
          <button type="button" onClick={onClose} className="ml-4 bg-gray-300 text-gray-800 px-4 py-2 rounded-md">Annuler</button>
        </form>
      </div>
    </div>
  );
};

export default DepartmentForm;
