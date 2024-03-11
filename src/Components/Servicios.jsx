"use client";
import React from "react";
import Image from "next/image";
import CardService from "./CardService";
import data from "../data/services.json";

const Servicios = () => {
  const serviciosData = data.servicios;

  return (
    <section id="servicios" className="h-auto bg-gray-500 text-otra_ronda_yellow pb-20">
      <h2 className="text-center pt-20 text-6xl">Servicos</h2>
      <div className="flex flex-col md:mt-16 md:flex-row">
        {serviciosData.map((servicio, index) => (
          <div key={index} className="md:w-1/2">
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
              bebida1={servicio.bebida1}
              bebida2={servicio.bebida2}
              bebida3={servicio.bebida3}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicios