"use client";
import React from "react";
import { useEffect, useState } from 'react';
import Image from "next/image";
import Ticker from 'framer-motion-ticker';
/* import { LuBeer } from "react-icons/lu";
import { PiChampagne } from "react-icons/pi";
import { LiaCocktailSolid } from "react-icons/lia";
import { GiWineBottle } from "react-icons/gi";
import { LiaGlassCheersSolid } from "react-icons/lia";
import { LiaWineGlassAltSolid } from "react-icons/lia";
import { LiaGlassWhiskeySolid } from "react-icons/lia"; */


const SobreNosotros = () => {
  const imageURL = "img/fondo-sobre-Nosotros.png";
  const imageURLMobile = "/img/fondo-sobre-Nosotros-mobile.png";
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
      id="nosotros"
      className="h-[475px] bg-cover bg-center flex p-5 w-[100vw] "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >

      <div className="flex flex-col justify-center">
        <div className="p- h-96">
          <p className="text-4xl md:text-6xl text-center  text-white">
            Sobre Nosotros
          </p>
          <div className="p-6 flex ">
            <p className="mx-2 md:mx-20 lg:mx-48 text-justify text-[13px] sm:text-base">"En Otra Ron`da, nuestra historia comenzó con una pasión compartida por la coctelería y el deseo de brindar experiencias memorables en eventos especiales. Lo que empezó como un sueño entre amigos se convirtió en una realidad vibrante y exitosa. Desde nuestros humildes inicios, nos hemos dedicado a perfeccionar cada detalle, desde la calidad de nuestros tragos hasta la atención al cliente.
              Con el tiempo, hemos ganado una reputación por ofrecer no solo tragos deliciosos, sino también un servicio excepcional. Cada evento es una oportunidad para compartir nuestra pasión y alegría con nuestros clientes, creando recuerdos que perdurarán mucho después de que el último trago haya sido servido.
              En Otra Ron`da, no solo hacemos tragos; creamos momentos inolvidables…"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros

/*   < div >
  <Ticker duration={5}>
    {images.map((item, index) => (
      <div key={index} className="w-20 md:w-56 mx-8 my-auto py-10">
        <Image
          src={item}
          alt={`Image ${index}`}
          width={250}
          height={250}
          style={{
            backgroundColor: item,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        />
      </div>

    ))}
  </Ticker>
        </ > */