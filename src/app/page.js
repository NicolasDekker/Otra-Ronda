"use client"
import React from 'react'
import Navbar from '@/Components/Navbar'
import Home from '@/Components/Home'
import Fototeca from '@/Components/Fototeca'
import TickerSobreNos from '@/Components/TickerSobreNos'
import Footer from '@/Components/Footer'
import './App.css';

const homePage = () => {

  return (
    <div>
      <title>Otra Ron'da</title>
      <Navbar />
      <Home />
      <TickerSobreNos />
      <Fototeca />
      <Footer /> 
    </div>
  );
}

export default homePage