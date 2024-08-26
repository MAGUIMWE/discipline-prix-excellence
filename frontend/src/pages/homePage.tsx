
import ProposPage from "./proposPage";
import HeroSection from "../compoments/heroSections/HeroSection";
import Accuiel from "../compoments/accuiel";
import ContactPage from "./contactPage";


const HomePage:React.FC=()=>{
  return (
    <div>
      <HeroSection/>
      <Accuiel/>
      <ProposPage/>
      <ContactPage/>
    </div>
  )
}
  

export default HomePage;
