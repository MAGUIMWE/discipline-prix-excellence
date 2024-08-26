import { FaUser, FaBalanceScale, FaAward, FaGraduationCap, FaBuilding } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdWarning, MdBlock } from "react-icons/md";

const Accuiel: React.FC = () =>{

    return(
      <section className="features-section py-12 bg-green-50">
    <div className="container mx-auto px-6">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="feature-item bg-white p-6 rounded-lg shadow-md">
          <FaUser  className="text-9xl text-blue-500 mb-4"/>
    
            <h3 className="text-xl font-semibold mt-4"></h3>
            <p className="mt-2 text-gray-600">Administrez les comptes des utilisateurs, leurs rôles et leurs permissions dans le système.</p>
            <a href="" className="text-lien hover:underline mt-4 inline-block">En savoir plus</a>
          </div>
      </div>
    </div>
  </section>
  
  
    )
  }
  export default Accuiel;