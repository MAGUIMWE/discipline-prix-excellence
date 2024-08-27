import { useEffect, useState } from "react";
import { Activite } from "../types/activites/activite.type";
import { fetchActivite } from "../api/activite.api";

const Accuiel: React.FC = () =>{
  const [activites,setActivite]=useState<Activite[]>([])
    
  useEffect(()=>{
      const getActivite = async () => {
          try {
              const reponse= await fetchActivite()
              setActivite(reponse);
          } catch (error) {
              console.error('Erreur de recuperation des departements:',error);
              
          }
      } 
      getActivite()
  },[])



    return(
      <section className="features-section py-12 bg-green-50">
        <div className="container mx-auto px-6">
        <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activites.map(activite=>(
          
            <div key={activite.id} className="feature-item bg-white p-6 rounded-lg shadow-md">
            <img src= {activite.icon} alt={activite.titre} className="h-[30%] w-[30%] flex justify-center  items-center"/>
      
              <h3 className="text-xl font-semibold mt-4"> {activite.titre}</h3>
              <p className="mt-2 text-gray-600">{activite.description}</p>
              <a href="/departements" className="text-blue-500 hover:underline mt-4 inline-block no-underline">En savoir plus</a>
            </div>
            ))}
        </div>
          
        </div>
      </section>
  
  
    )
  }
  export default Accuiel;