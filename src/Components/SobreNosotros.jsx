"use client";
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { swiffyslider } from 'swiffy-slider';
import "swiffy-slider/css";
import './sobre.css';




const SobreNosotros = () => {
  const [itemShowClass, setItemShowClass] = useState("slider-item-show4");

  useEffect(() => {    
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 990) {
        setItemShowClass("slider-item-show2");
      } else if (screenWidth >= 990 && screenWidth < 1280) {
        setItemShowClass("slider-item-show2");
      } else if (screenWidth >= 1024 && screenWidth < 1920) {
        setItemShowClass("slider-item-show3");
      } else {
        setItemShowClass("slider-item-show4");
      }
    };
    handleResize();    
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  useEffect(()=>{
    if(typeof window !== 'undefined'){
      window.swiffyslider = swiffyslider;
      window.swiffyslider.init()
    }
  }, []);

  return (
    <section id="servicios" className="bg-bgc_service px-5 h-[70vh] flex flex-col justify-center">
      
      <div className="flex flex-row">
        <div className="text-justify p-6 flex flex-col w-[50%]">
        <p className="text-[40px] text-center text-white font-semibold font-montserrat mb-[5%]">
          Sobre Nosotros
        </p>
        <div className="">
          <p>"En Otra Ron`da, nuestra historia comenzó con una pasión compartida por la coctelería y el deseo de brindar experiencias memorables en eventos especiales. Lo que empezó como un sueño entre amigos se convirtió en una realidad vibrante y exitosa. Desde nuestros humildes inicios, nos hemos dedicado a perfeccionar cada detalle, desde la calidad de nuestros tragos hasta la atención al cliente.
          Con el tiempo, hemos ganado una reputación por ofrecer no solo tragos deliciosos, sino también un servicio excepcional. Cada evento es una oportunidad para compartir nuestra pasión y alegría con nuestros clientes, creando recuerdos que perdurarán mucho después de que el último trago haya sido servido.
          En Otra Ron`da, no solo hacemos tragos; creamos momentos inolvidables…
          </p>
        </div>
      </div>
        
        <div className={`swiffy-slider ${itemShowClass} slider-nav-round slider-nav-visible slider-indicators-outside slider-indicators-round slider-indicators-dark slider-nav-animation slider-nav-animation-fadein slider-item-first-visible`}>
          <ul className="slider-container py-4 ml-20 flex flex-row">
                <li id="slide1" className="">
                  <Image
                    src="/img/otra-1.jpg"
                    className="yellow-500"
                    width={150}
                    height={150}
                    alt="Logo-Footer"
                    loading="lazy"
                  />
              </li>
              <li id="slide2" className="">
                <Image
                    src="/img/otra-1.jpg"
                    className="yellow-500"
                    width={150}
                    height={150}
                    alt="Logo-Footer"
                    loading="lazy"
                  />
              </li>
              <li id="slide3" className="">
                <Image
                    src="/img/otra-1.jpg"
                    className="yellow-500"
                    width={150}
                    height={150}
                    alt="Logo-Footer"
                    loading="lazy"
                  />
              </li>
              <li id="slide4" className="">
                <Image
                    src="/img/otra-1.jpg"
                    className="yellow-500"
                    width={150}
                    height={150}
                    alt="Logo-Footer"
                    loading="lazy"
                  />
              </li>
              <li id="slide5" className="">
                <Image
                    src="/img/otra-1.jpg"
                    className="yellow-500"
                    width={150}
                    height={150}
                    alt="Logo-Footer"
                    loading="lazy"
                  />
              </li>
              <li id="slide6" className="">
                <Image
                    src="/img/otra-1.jpg"
                    className="yellow-500"
                    width={150}
                    height={150}
                    alt="Logo-Footer"
                    loading="lazy"
                  />
              </li>
              <li id="slide7" className="">
                <Image
                    src="/img/otra-1.jpg"
                    className="yellow-500"
                    width={150}
                    height={150}
                    alt="Logo-Footer"
                    loading="lazy"
                  />
              </li>
              
          </ul>
          <button type="button" className="slider-nav" aria-label="Go left"></button>
          <button type="button" className="slider-nav slider-nav-next" aria-label="Go left"></button>
          <div className="slider-indicators !static mt-5">
            <button className="active" aria-label="Go to slide"></button>
            <button aria-label="Go to slide"></button>
            <button aria-label="Go to slide"></button>
            <button aria-label="Go to slide"></button>
            <button aria-label="Go to slide"></button>
          </div>
        </div>
      </div>
        
    </section>
  );
};

export default SobreNosotros