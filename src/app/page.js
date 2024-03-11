"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Servicios from '../components/Servicios'
import SobreNosotros from '../components/SobreNosotros'
import Contacto from '../components/Contacto'
import Footer from '../components/Footer'
import { LiaCocktailSolid } from "react-icons/lia";
import './App.css';

const homePage = () => {

  /* const handleMouseMove = (e) => {
    const customCursor = document.getElementById('customCursor');
    customCursor.style.left = `${e.pageX}px`;
    customCursor.style.top = `${e.pageY}px`;
  }; */
  return (
    <div /* onMouseMove={handleMouseMove} */>
      <title>Otra Ron'da</title>
      <Navbar />
      <Home />
      <Servicios />
      <SobreNosotros />
      <Contacto />
      <Footer /> 
      
      {/* Cursor personalizado */}
      {/* <div id="customCursor" className="absolute z-50 pointer-events-none ">
        <LiaCocktailSolid className="text-yellow-500 w-6 h-6" />
      </div> */}
    </div>
  );
}

export default homePage