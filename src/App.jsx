// --------- FXNALITY ---------
// import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// --------- PAGES ---------
// import HomePage from './Pages/HomePage/HomePage.jsx';
// --------- COMPONENTS ---------
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CultureCards from "./components/CultureCards/CultureCards.jsx"
// --------- STYLES ---------
import './App.scss'
import Carousel2Card from './components/Carousel2Card/Carousel2Card.jsx';

function App() {

  return (
    <>
      <Header />
      {/* <BrowserRouter> */}
      {/* <Routes> */}
      {/* <Route path="/" element={<HomePage />} /> */}
      <Carousel2Card />
      <CultureCards />
      {/* </Routes> */}
      {/* </BrowserRouter> */}
      <Footer />

    </>
  )
}

export default App
