"use client";
import React from "react";
import { useEffect, useState } from 'react';
import { motion } from "framer-motion"

const Home = () => {
  const imageURL = "img/image-home-2.png";
  const imageURLTablet = "img/image-home.jpg";
  const imageURLMobile = "/img/image-home-mobile.jpg";
  const [backgroundImage, setBackgroundImage] = useState(imageURL);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setBackgroundImage(imageURLMobile);
      } else if (window.innerWidth <= 1023) {
        setBackgroundImage(imageURLTablet);
      } else {
        setBackgroundImage(imageURL);
      }
    };
    
    window.addEventListener('resize', handleResize);    
    handleResize();    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [imageURL, imageURLMobile, imageURLTablet]);

  return (
    <div
      id="home"
      className="h-screen md:h-[1150px] bg-cover bg-center flex items-center p-5 w-auto "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <motion.div 
        className="flex flex-col items-center lg:justify-end lg:pb-96 lg:pl-96 xl:pl-[550px] 2xl:pl-[750px]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
      
        <div className="flex flex-col items-center text-white ">
          <h1 className="rounded-xl bg-black bg-opacity-50 lg:bg-opacity-0 flex text-yellow-500 text-6xl xl:text-8xl text-center font-medula">Otra Ron'da</h1>
        </div>
          <p className="rounded-xl bg-black bg-opacity-50 lg:bg-opacity-0 text-yellow-500 text-justify sm:px-16 md:px-32 lg:px-20 md:text-2xl mt-16 lg:w-[90%] 2xl:w-[80%] 3xl:w-[70%] text-xl py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quae sunt iusto ut quia minus animi ducimus asperiores voluptates, dolor tempore hic non aspernatur, vitae enim officia voluptas aut veritatis!
          </p> 
      </motion.div>
    </div>
  );
};


export default Home