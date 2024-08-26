
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert('Message envoyé !');
    setFormData({ name: '', email: '', message: '' }); 
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contactez-nous</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Informations de Contact</h3>
            <p className="mb-4"><strong>Email :</strong> contact@maligah.com</p>
            <p className="mb-4"><strong>Téléphone :</strong>  +237 676 58 46 20</p>
            <p><strong>Adresse :</strong> C2HX+5G9,Foreke-Dschang</p>
          </div>
          <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Envoyez-nous un message</h3>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                rows={4}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
