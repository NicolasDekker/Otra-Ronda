"use client"
import React from 'react'
import Navbar from '@/Components/Navbar'
import Home from '@/Components/Home'
import Servicios from '@/Components/Servicios'
import SobreNosotros from '@/Components/SobreNosotros'
import Marcas from '@/Components/Marcas'
import TickerSobreNos from '@/Components/TickerSobreNos'
import Contacto from '@/Components/Contacto'
import Footer from '@/Components/Footer'
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
      <TickerSobreNos />
      <Contacto />
      <Footer /> 
    </div>
  );
}

export default homePage