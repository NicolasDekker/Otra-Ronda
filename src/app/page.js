import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Productos from '../components/Productos'
import SobreNosotros from '../components/SobreNosotros'
import Contacto from '../components/Contacto'
import Mapa from '../components/Mapa'
import Footer from '../components/Footer'

const homePage = () => {
  return (
    <div>
      <title>Otra Ron'da</title>
        <Navbar />
        <Home />
        <Productos />
        <Contacto />
        <SobreNosotros />
        <Mapa />
        <Footer /> 
    </div>
  );
}

export default homePage