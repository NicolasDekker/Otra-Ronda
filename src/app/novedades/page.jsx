"use client"
import React from 'react'
import Navbar from '@/Components/Navbar'
import Novedades from '@/Components/Novedades'
import Footer from '@/Components/Footer'
import { useRouter } from 'next/navigation'

const novedades = () => {
  const router = useRouter();
    return (
      <div>
        <title>Otra Ron'da</title>
        <Navbar />
        <Novedades router={router}/>
        <Footer /> 
    </div>
    );
  }
  
  export default novedades