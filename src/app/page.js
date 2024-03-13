"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Servicios from '../components/Servicios'
import SobreNosotros from '../components/SobreNosotros'
import Marcas from '../components/Marcas'
import Contacto from '../components/Contacto'
import Footer from '../components/Footer'
import { LiaCocktailSolid } from "react-icons/lia";
import './App.css';

const homePage = () => {

  return (
    <div>
      <title>Otra Ron'da</title>
      <Navbar />
      <Home />
      <Servicios />
      <Marcas />
      <SobreNosotros />
      
      <Contacto />
      <Footer /> 
    </div>
  );
}

export default homePage