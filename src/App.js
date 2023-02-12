import { BrowserRouter, Route, Routes } from "react-router-dom";
import Account from "./Account";
import Card from "./Card";
import Getstarted from "./container/Getstarted";
import Login from "./container/Login";
import Signup from "./container/Signup";
import Home from "./Home";

export default function App() {
  return (
  <BrowserRouter>
  <Routes>
     <Route path="/" element={<Getstarted />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} /> 
    <Route path="/home" element={<Home />} />
     <Route path="/card" element={<Card />} />
     <Route path="/account" element={<Account />} />      
  </Routes>


</BrowserRouter>
  )   
}