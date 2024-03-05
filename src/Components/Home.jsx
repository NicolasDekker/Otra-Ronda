"use client";
import React from "react";
import { useEffect, useState } from 'react';

const Home = () => {
  const imageURL = "img/bg-home/image-4.jpg";
  const imageURLMobile = "/img/bg-home/image-12.jpg";
  const [backgroundImage, setBackgroundImage] = useState(imageURL);

  useEffect(() => {
    const handleResize = () => {
      setBackgroundImage(window.innerWidth <= 767 ? imageURLMobile : imageURL);
    };
    
    window.addEventListener('resize', handleResize);    
    handleResize();    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [imageURL, imageURLMobile]);

  return (
    <div
      id="home"
      className="h-screen bg-cover bg-center flex items-center p-5 w-auto "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="flex flex-col items-center ">
      
        <div className="flex flex-col items-center text-white">
          <h1 className="text-yellow-200 font-porsche text-6xl mb-10 md:mt-20 text-center 3xl:text-8xl">Otra Ron'da</h1></div>
          <p className="text-yellow-200 text-center sm:px-16 md:px-32 md:text-2xl 2xl:w-3/4 3xl:w-1/2 mt-32 md:mt-8 lg:w-2/3 text-xl font-swiss">
          Shipplog es una empresa que se originó con el propósito de brindar soporte a otras empresas locales en el rubro logístico y de aprovisionamiento. Contamos con una infraestructura moderna y tecnológica, que nos permite optimizar los procesos y reducir los costos operativos de tu empresa.
          </p> 
      </div>
    </div>
  );
};
{/* <div className="relative text-yellow-500 flex justify-center h-[820px]">
      <h1 className="absolute top-48 left-0 right-0 z-10 text-center text-4xl font-bold mt-8">Título Aquí</h1>
      <Image
        src="/img/otra-1.jpg"
        width={600}
        height={820}
        alt="Logo-Footer"
      />
      <video ref={videoRef} autoPlay muted className="w-[full] h-auto pl-14 pr-14" onEnded={handleVideoEnd}>
        <source src="/videos/Otra-Ronda-Home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Image
        src="/img/otra-2.jpg"
        width={600}
        height={820}
        alt="Logo-Footer"
      />
    </div> */}

export default Home