import HeroSection from "./components/HeroSection";
import Items from "./components/Items";
import Navbar from "./components/NavBar";

function Home(){
 return(
   <div>
    <Navbar/>
    <HeroSection />
    <Items/>
    </div>
 );   
}

export default Home; 