"use client";
import React from "react";
import { useEffect, useState } from 'react';
import Image from "next/image";
import CardService from "./CardService";
import data from "../data/services.json";
import Link from "next/link";

const Servicios = () => {
  const serviciosData = data.servicios;


  return (
    <section
      id="servicios"
      className="h-auto flex flex-col items-center p-5 w-auto pb-8 bg-bg_otra_ronda_servicios"
    >
      <h2 className="text-center mt-8 text-5xl md:text-7xl font-medula">Servicios de Barra</h2>
      <div className="flex flex-col md:mt-16 md:flex-row md:flex-wrap">
        {serviciosData.map((servicio, index) => (
          <div key={index} className="w-full md:w-1/2 xl:w-1/4">
            <CardService
              backgroundImageService={servicio.backgroundImageService}
              titulo1={servicio.titulo1}
              titulo2={servicio.titulo2}
              titulo3={servicio.titulo3}
              trago1={servicio.trago1}
              descripcion1={servicio.descripcion1}
              trago2={servicio.trago2}
              descripcion2={servicio.descripcion2}
              trago3={servicio.trago3}
              descripcion3={servicio.descripcion3}
              trago4={servicio.trago4}
              descripcion4={servicio.descripcion4}
              trago5={servicio.trago5}
              descripcion5={servicio.descripcion5}
              trago6={servicio.trago6}
              descripcion6={servicio.descripcion6}
              trago7={servicio.trago7}
              descripcion7={servicio.descripcion7}
              trago8={servicio.trago8}
              descripcion8={servicio.descripcion8}
              trago9={servicio.trago9}
              descripcion9={servicio.descripcion9}
              trago10={servicio.trago10}
              descripcion10={servicio.descripcion10}
              bebida1={servicio.bebida1}
              bebida2={servicio.bebida2}
              bebida3={servicio.bebida3}
              bebida4={servicio.bebida4}
              bebida5={servicio.bebida5}
              bebida6={servicio.bebida6}
              bebida7={servicio.bebida7}
              Tituloautor={servicio.Tituloautor}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row md:mt-8 ">
        <div className="">
          <section className=" flex justify-center p-5" >
            <div className=" rounded-xl hover:border-2 hover:border-yellow-500 md:w-auto w-80 auto pb-4 bg-white bg-opacity-5">
              <section className="flex justify-between flex-row text-white">
                <div className="w-[50%]">
                  <h2 className="pt-5 pl-5 text-7xl"></h2>
                  <h3 className="pl-7 text-3xl"></h3>
                </div>
              </section>
              <h4 className="text-center text-4xl text-yellow-500 font-medula">Barra Reducida</h4>
              <section className="pt-5 flex flex-col  md:flex-row text-start text-3xl text-yellow-500">
                <div className="flex flex-col">
                  <p className="text-3xl ml-36 font-medula">Cocteles</p>
                  <div className="flex flex-col md:flex-row">
                    <div className=" pb-3 px-5">
                      <ul className="text-white text-[15px]">
                        <li className="h-5">- Fernet con Coca-Cola</li>
                        <li className="h-5">- Garibaldi</li>
                        <li className="h-5">- Campari con pomelo</li>
                      </ul>
                    </div>
                    <div className="pb-3 px-5">{/* 
                <p className="text-2xl font-medula">Tragos Tropicales</p> */}
                      <ul className="text-white text-[15px]">
                        <li className="h-5">- Gin Tonic</li>
                        <li className="h-5">- Caipirinha</li>
                        <li className="h-5">- Caipirinha de Maracuya</li>

                      </ul>
                    </div>
                  </div>

                </div>

                <div className="pb-8 px-5">
                  <p className="text-2xl font-medula">SIN ALCOHOL</p>
                  <ul className="text-white text-[15px]">
                    <li className="h-5">- Limonada</li>
                    <li className="h-5">- Jugo de Naranja</li>
                    <li className="h-5">- Agua Mineral</li>
                  </ul>
                </div>
              </section>
              <section className="flex pt-10">
                <div className="flex w-[50%] justify-center">
                  <Image
                    src="/img/logo-otra-ronda.webp"
                    className="yellow-500"
                    width={150}
                    height={150}
                    alt="Logo-Footer"
                  />
                </div>
                <div className="w-[50%] flex justify-center">
                  <button className="text-otra_ronda_yellow bg-black rounded-xl p-2 mt-4 m-2 w-32 duration-500 hover:bg-otra_ronda_yellow hover:text-black  text-[16px] md:text-[17px] border-2 border-yellow-500 hover:font-bold">
                    <Link
                      href="https://wa.me/5491164131218?text=Hola%2C%20%C2%BFC%C3%B3mo%20est%C3%A1s%3F%20Quisiera%20consultar%20por..."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Consultas
                    </Link>
                  </button>
                </div>
              </section>

            </div>
          </section>
        </div>

        <div className="">
          <section className=" flex justify-center p-5" >
            <div className=" rounded-xl hover:border-2 hover:border-yellow-500 md:w-auto w-80 h-auto  pb-4 bg-white bg-opacity-5">
              <section className="flex justify-between flex-row text-white">
                <div className="w-[50%]">
                  <h2 className="pt-5 pl-5 text-7xl"></h2>
                  <h3 className="pl-7 text-3xl"></h3>
                </div>
              </section>
              <h4 className="text-center text-4xl text-yellow-500 font-medula">Suma un EXTRA de Distinción</h4>
              <section className="pt-5 flex flex-col  md:flex-row text-start text-3xl text-yellow-500">
                <div className="pb-3 px-5">
                  <p className="text-3xl font-medula">Gaseosas</p>
                  <ul className="text-white text-[15px]">
                    <li className="h-5">- Coca-Cola</li>
                    <li className="h-5">- Sprite</li>
                    <li className="h-5">- Agua Mineral</li>
                    <li className="h-5">- Schweppes Tónica</li>
                  </ul>
                </div>
                <div className="pb-3 px-5">
                  <p className="text-3xl font-medula">Champagne</p>
                  <ul className="text-white text-[15px]">
                    <li className="h-5">- Champagne espumante</li>
                    <li className="h-5"> + copas de servicio </li>
                  </ul>
                </div>
                <div className="pb-3 px-5">
                  <p className="text-3xl font-medula">Cervezas</p>
                  <ul className="text-white text-[15px]">
                    <li className="h-5">- Consultar Variedad</li>
                  </ul>
                </div>
              </section>
              <section className="flex pt-10">
                <div className="flex w-[50%] justify-center">
                  <Image
                    src="/img/logo-otra-ronda.webp"
                    className="yellow-500"
                    width={150}
                    height={150}
                    alt="Logo-Footer"
                  />
                </div>
                <div className="w-[50%] flex justify-center">
                  <button className="text-otra_ronda_yellow bg-black rounded-xl p-2 mt-4 m-2 w-32 duration-500 hover:bg-otra_ronda_yellow hover:text-black  text-[16px] md:text-[17px] border-2 border-yellow-500 hover:font-bold">
                    <Link
                      href="https://wa.me/5491164131218?text=Hola%2C%20%C2%BFC%C3%B3mo%20est%C3%A1s%3F%20Quisiera%20consultar%20por..."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Consultas
                    </Link>
                  </button>
                </div>
              </section>

            </div>
          </section>
        </div>
      </div>
      <ul className="mx-20 text-center md:text-left list-disc text-lg  md:text-xl text-white">
        <li>SI YA CONTRATASTE NUESTROS SERVICIOS, EN UN PROXIMO EVENTO TENES UN 10% OFF.</li>
      </ul>
    </section>
  );
};

export default Servicios