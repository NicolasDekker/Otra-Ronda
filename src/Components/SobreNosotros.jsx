"use client";
import React from "react";
import Image from "next/image";
import Ticker from 'framer-motion-ticker';


const image1 = '/img/image-home-mobile.jpg';

const SobreNosotros = () => {
  const images = [image1];
  return (
    <section id="nosotros" className=" px-5 h-auto">
      <div className="flex flex-col justify-center">
        <div className="p-6 h-96">
          <p className="md:text-6xl text-center text-white">
            Sobre Nosotros
          </p>
          <div className="p-6 flex ">
            <p className="mx-2 md:mx-48 text-justify">"En Otra Ron`da, nuestra historia comenzó con una pasión compartida por la coctelería y el deseo de brindar experiencias memorables en eventos especiales. Lo que empezó como un sueño entre amigos se convirtió en una realidad vibrante y exitosa. Desde nuestros humildes inicios, nos hemos dedicado a perfeccionar cada detalle, desde la calidad de nuestros tragos hasta la atención al cliente.
              Con el tiempo, hemos ganado una reputación por ofrecer no solo tragos deliciosos, sino también un servicio excepcional. Cada evento es una oportunidad para compartir nuestra pasión y alegría con nuestros clientes, creando recuerdos que perdurarán mucho después de que el último trago haya sido servido.
              En Otra Ron`da, no solo hacemos tragos; creamos momentos inolvidables…"
            </p>
          </div>
        </div>
        <div >
            <Ticker duration={5}>
                {images.map((item, index) => (
                    <div  key={index} className="w-20 md:w-56 mx-8 my-auto py-10">
                        <Image
                        src={item}
                        alt={`Image ${index}`}
                        width={250}
                        height={250}
                        style={{
                            backgroundColor: item,
                            display: 'flex',
                            justifyContent:'space-between',
                        }}
                    />
                    </div>
                    
                ))}
            </Ticker>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros