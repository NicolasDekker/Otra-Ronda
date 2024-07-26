"use client"
import CardNovedades from './CardNovedades';
import data from '../data/news.json';
import { useState, useEffect } from 'react';
import { swiffyslider } from 'swiffy-slider';
import "swiffy-slider/css";

const Novedades = () => {
    const novedadesData = data.novedades;
    const [itemShowClass, setItemShowClass] = useState("slider-item-show4");

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 720) {
                setItemShowClass("slider-item-show2");
            } else if (screenWidth >= 990 && screenWidth < 1100) {
                setItemShowClass("slider-item-show2");
            } else {
                setItemShowClass("slider-item-show3");
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
                    <h2 className="text-white text-5xl md:text-7xl font-medula text-center pt-8">Novedades</h2>
                </div>
                <div className={`swiffy-slider ${itemShowClass} 
                                slider-nav-round 
                                slider-nav-dark
                                slider-nav-autohide
                                slider-item-nogap 
                                slider-indicators-round  
                                slider-nav-animation  `}>
                    <ul className="slider-container">
                        {novedadesData.map((novedades, index) => (
                            <li className="slide-visible px-5">
                                <div key={index} className='m-12 flex justify-center'>
                                    <CardNovedades
                                        titulo={novedades.titulo}
                                        imagen={novedades.imagen}
                                        descripcion={novedades.descripcion}
                                    />
                                </div>
                            </li>

                        ))}
                    </ul>
                    <button type="button" className="bg-white slider-nav" aria-label="Go left"></button>
                    <button type="button" className="slider-nav slider-nav-next" aria-label="Go left"></button>

                    <div className="slider-indicators !static mt-2">
                        <button className="active" aria-label="Go to slide"></button>
                        <button aria-label="Go to slide"></button>
                        <button aria-label="Go to slide"></button>
                        <button aria-label="Go to slide"></button>
                        <button aria-label="Go to slide"></button>
                    </div>
                </div>
            </section >

        </>
    )
}

export default Novedades




/* import React from 'react'
import Image from "next/image";
import data from "../data/news.json";

import CardNovedades from "./CardNovedades";

function Novedades() {
    const novedadesData = data.novedades;
    return (
        <div className='h-auto flex flex-col items-center p-5 w-auto pb-8 '>
            <div>
                <h2 className="text-center mt-8 text-5xl md:text-7xl font-medula">Novedades</h2>
                <div className="flex flex-col md:flex-row">
                    {novedadesData.map((novedades, index) => (
                        <div key={index} className="w-full flex flex-row ">
                            <CardNovedades
                                titulo={novedades.titulo}
                                imagen={novedades.imagen}
                                descripcion={novedades.descripcion}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Novedades */