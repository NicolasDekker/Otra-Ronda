"use client";
import React, { useRef } from "react";
import Image from "next/image";


const Home = () => {
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setTimeout(() => {
      videoRef.current.play();
    }, 3000); // 3000 milisegundos = 3 segundos
  };
  
  return (
    <div className="relative text-yellow-500 flex justify-center h-[820px]">
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
    </div>
  );
};

export default Home