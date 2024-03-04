import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Servicios from '../components/Servicios'
import SobreNosotros from '../components/SobreNosotros'
import Contacto from '../components/Contacto'
import Footer from '../components/Footer'

const homePage = () => {
  return (
    <div>
      <title>Otra Ron'da</title>
        <Navbar />
        <Home />
        <Servicios />
        <Contacto />
        <SobreNosotros />
        <Footer /> 
    </div>
  );
}

export default homePage