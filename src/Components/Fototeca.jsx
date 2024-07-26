"use client";
import React from "react";
import CardGaleria from './CardGaleria';
import Image from "next/image";
import data from '../data/galeria.json';
import { useState, useEffect } from 'react';
import { swiffyslider } from 'swiffy-slider';
import "swiffy-slider/css";

function Fototeca() {
    const galeriaData = data.galeria;
    const [itemShowClass, setItemShowClass] = useState("slider-item-show4");

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 720) {
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
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.swiffyslider = swiffyslider;
            window.swiffyslider.init()
        }
    }, []);

    return (
        <>
            <section className='flex flex-col justify-center bg-black'>
                <div>
                    <h2 className="text-white text-5xl md:text-7xl font-medula text-center pt-8">Galeria</h2>
                </div>
                <div className={`swiffy-slider ${itemShowClass} 
                                slider-nav-round 
                                slider-nav-dark
                                slider-nav-autohide
                                slider-item-nogap 
                                slider-indicators-round  
                                slider-nav-animation  `}>
                    <ul className="slider-container">
                        {galeriaData.map((galeria) => (
                            <li key={galeria.id} className="slide-visible px-5">
                                <div  className='m-12 flex justify-center'>
                                    <CardGaleria
                                        imagen={galeria.imagen}
                                    />
                                </div>
                            </li>

                        ))}
                    </ul>
                    <button type="button" className="bg-white slider-nav" aria-label="Go left"></button>
                    <button type="button" className="slider-nav slider-nav-next" aria-label="Go left"></button>

                    <div className=" bg-white rounded-lg w-96 mx-auto bg-opacity-5 ">
                        <div className="my-auto slider-indicators !static mt-2">
                          <button className="active" aria-label="Go to slide"></button>
                          <button aria-label="Go to slide"></button>
                          <button aria-label="Go to slide"></button>
                          <button aria-label="Go to slide"></button>
                          <button aria-label="Go to slide"></button>
                          <button aria-label="Go to slide"></button>
                          <button aria-label="Go to slide"></button>
                          <button aria-label="Go to slide"></button>
                          <button aria-label="Go to slide"></button>
                          <button aria-label="Go to slide"></button>
                          <button aria-label="Go to slide"></button>
                          <button aria-label="Go to slide"></button>
                          <button aria-label="Go to slide"></button>
                          <button aria-label="Go to slide"></button>
                          <button aria-label="Go to slide"></button>
                          <button aria-label="Go to slide"></button>
                          <button aria-label="Go to slide"></button>
                        </div>
                        
                    </div>
                </div>
            </section >

        </>
  )
}

export default Fototeca







/* "use client";
import React from "react";
import Image from "next/image";

function Fototeca() {
  return (
    <div className="flex flex-col py-8">
      <a className="text-5xl mb-10 md:text-7xl text-center font-medula text-white">Galería</a>
      <div className="w-[100%] flex flex-row justify-center">
        <section className="flex items-center">
          <div className="pr-20">
            <Image
              src="/img/img-fototeca-6.jpeg"
              className="rounded-3xl m-5"
              width={250}
              height={250}
              alt="Logo-Footer"
            />
            <Image
              src="/img/img-fototeca-5.jpeg"
              className="rounded-3xl m-5"
              width={250}
              height={150}
              alt="Logo-Footer"
            />
          </div>
        </section>
        <section className="pr-20 flex items-center">
          <div>
            <Image
              src="/img/img-fototeca-4.jpeg"
              className="rounded-3xl m-5"
              width={220}
              height={220}
              alt="Logo-Footer"
            />
            <Image
              src="/img/img-fototeca.jpeg"
              className="rounded-3xl m-5"
              width={220}
              height={220}
              alt="Logo-Footer"
            />
            
          </div>
        </section>
        <section className="flex items-center">
          <div>
            <Image
              src="/img/img-fototeca-2.jpeg"
              className="rounded-3xl m-5"
              width={190}
              height={190}
              alt="Logo-Footer"
            />
            <Image
              src="/img/img-fototeca-3.jpeg"
              className="rounded-3xl m-5"
              width={190}
              height={190}
              alt="Logo-Footer"
            />
          </div>
        </section>
        <section className="pl-20 flex items-center">
          <div>
            <Image
              src="/img/otraronda-49.jpg"
              className="rounded-3xl m-5"
              width={190}
              height={200}
              alt="Logo-Footer"
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Fototeca */