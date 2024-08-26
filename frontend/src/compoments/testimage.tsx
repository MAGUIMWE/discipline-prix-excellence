import { useState } from "react";
import { useNavigate } from "react-router-dom";



const MyComponent: React.FC = () =>{
  const [isOpen, setIsOpen] = useState(false);
      const navigate = useNavigate();
    
      const handleMenuToggle = () => {
        setIsOpen(!isOpen);
      };
    
      const handleLoginClick = () => {
        setIsOpen(false); // Ferme le menu après avoir cliqué sur le bouton
        navigate('/login'); // Redirige vers la page de connexion
      };
  return (

  
      
        <nav className="navbar">
          <button onClick={handleMenuToggle}>
            {isOpen ? 'Fermer' : 'Ouvrir'} Menu
          </button>
          {isOpen && (
            <div className="menu">
              <a href="/about" onClick={() => setIsOpen(false)}>À propos</a>
              <a href="/contact" onClick={() => setIsOpen(false)}>Contactez-nous</a>
              <button onClick={handleLoginClick}>Connexion</button>
            </div>
           
          )}
        </nav>
      );
    };
    
    
     
    
    
 
export default MyComponent;
