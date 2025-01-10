// --------- FXNALITY ---------
// import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// --------- PAGES ---------
// import HomePage from './Pages/HomePage/HomePage.jsx';
// --------- COMPONENTS ---------
// import Header from "./components/Header/Header.jsx";
// import Footer from "./components/Footer/Footer.jsx";
// --------- STYLES ---------

import './App.scss'

function App() {

  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
      <Hero />
      <LearnMore />
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
         
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  )
}

export default App
