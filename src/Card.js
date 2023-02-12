import CardForm from "./components/CardForm";
import HeroSection from "./components/HeroSection";
import ItemCard from "./components/ItemCard";
import Navbar from "./components/NavBar";

function Card(){
 return(
   <div>
    <Navbar/>
    <HeroSection />
    <ItemCard/>
    <CardForm/>
    </div>
 );   
}

export default Card; 