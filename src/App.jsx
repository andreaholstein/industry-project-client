/// --------- FXNALITY ---------
// import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// --------- PAGES ---------
// import HomePage from './Pages/HomePage/HomePage.jsx';
// --------- COMPONENTS ---------
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CultureCards from "./components/CultureCards/CultureCards.jsx"
import Hero from './components/Hero/Hero.jsx';
import LearnMore from './components/LearnMore/LearnMore.jsx'
// --------- STYLES ---------
import './App.scss'
// import Carousel2Card from './components/Carousel2Card/Carousel2Card.jsx';



function App() {

  return (
    
    <>
        <Header />
      {/* <BrowserRouter> */}
      {/* <Routes> */}
      {/* <Route path="/" element={<HomePage />} /> */}
      <Hero /> 
      {/* <Carousel2Card /> */}
      <CultureCards />
      <LearnMore />
      {/* </Routes> */}
      {/* </BrowserRouter> */}
      <Footer />
      
     

    </>
  )
}

export default App
