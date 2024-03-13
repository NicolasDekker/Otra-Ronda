"use client";
import React from "react";
import { useEffect, useState } from 'react';
import { motion } from "framer-motion"

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
      <motion.div 
        className="flex flex-col items-center "
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
      
        <div className="flex flex-col items-center text-white">
          <h1 className="text-yellow-200 font-porsche text-6xl mb-10 md:mt-20 text-center 3xl:text-8xl">Otra Ron'da</h1>
        </div>
          <p className="text-yellow-200 text-center sm:px-16 md:px-32 md:text-2xl 2xl:w-3/4 3xl:w-1/2 mt-32 md:mt-8 lg:w-2/3 text-xl font-swiss">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quae sunt iusto ut quia minus animi ducimus asperiores voluptates, dolor tempore hic non aspernatur, vitae enim officia voluptas aut veritatis!
          </p> 
      </motion.div>
    </div>
  );
};


export default Home