"use client";
import React from "react";
import { useEffect, useState } from 'react';



const SobreNosotros = () => {
  const imageURL = "img/fondo-sobre-Nosotros.webp";
  const imageURLMobile = "/img/fondo-sobre-Nosotros-mobile.webp";
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
    <section
      
      className="h-[475px] bg-cover bg-center flex p-5 w-auto "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >

      <div className="flex flex-col justify-center">
        <div className="h-96">
          <p className="text-5xl md:text-7xl text-center font-medula text-white">
            Sobre Nosotros
          </p>
          <div className="p-3 flex ">
            <div className="bg-black">
              <div className=" lg:mx-10 xl:mx-16 2xl:mx-32 3xl:mx-48 text-justify text-[14px] sm:text-[16px] xl:text-[18px] rounded-xl bg-white bg-opacity-10 p-4 lg:p-7 text-white">

              <p>En un pequeño rincón de Ramos mejia, nació Otra Ronda, una barra de tragos para eventos que llegó para revolucionar el mundo de la coctelería. Nuestro viaje comenzó hace poco, pero desde el primer momento supimos que estábamos destinados a algo grande.</p>

              <p>Con pasión y dedicación, cada cóctel que preparamos en Otra Ronda cuenta una historia única. Cada sorbo es una experiencia, cada combinación una aventura para el paladar. Nuestro objetivo es deleitar a cada cliente, sorprenderlos con sabores innovadores y hacer que cada evento sea inolvidable.</p>

              <p className="hidden sm:flex">En Otra Ronda, la emoción se mezcla con la creatividad en cada vaso que servimos. Cada detalle está cuidadosamente pensado para brindar una experiencia sensorial única. Nos enorgullecemos de nuestra atención al cliente y de la calidad de nuestros tragos.</p>

              <p className="hidden 2xl:flex">Únete a nosotros en este emocionante viaje a través de los sabores y las emociones. En Otra Ronda, cada noche es una celebración, cada cóctel es una historia por descubrir. ¡Bienvenidos a Otra Ronda, donde la magia de la coctelería cobra vida!</p>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros