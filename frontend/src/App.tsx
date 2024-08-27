import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './compoments/Navbar';
import Accueil from './pages/homePage';
import ProposPage from './pages/proposPage';
import Footer from './compoments/footer';
import ContactPage from './pages/contactPage';
import Departmentss from './pages/departement';




const App: React.FC = () => {
  return (
    <Router>
      <Navbar/>
     
      
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<ProposPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/departements' element={<Departmentss/>}/>
       
        
      </Routes>
      <Footer/>

    </Router>
  );
};

export default App;
