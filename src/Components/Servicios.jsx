"use client";
import React from "react";
import Image from "next/image";


const Servicios = () => {
  
  return (
    <div id="servicios" className=" h-auto md:h-[800px] lg:h-[950px] bg-bg_otra_ronda_servicios text-otra_ronda_yellow">
      <h2 className="text-center pt-20 text-6xl">Servicos</h2>
      <div className="flex flex-col md:mt-16 md:flex-row">
        <div className="w-[200px] h-[200px] md:mt-0 md:mb-0 mt-10 mb-32 md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] mx-auto">
          <Image
          src="/servicios/image-serv-2.jpg"
          className="yellow-500"
          width={1000}
          height={1000}
          alt="img-servicios"
        />
        </div>

        <div className="w-[200px] h-[200px] md:mt-0 md:mb-0 mt-10 mb-32 md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] mx-auto">
          <Image
          src="/servicios/image-serv-1.jpg"
          className="yellow-500"
          width={1000}
          height={1000}
          alt="img-servicios"
        />
        </div>
      </div>
    </div>
  );
};

export default Servicios