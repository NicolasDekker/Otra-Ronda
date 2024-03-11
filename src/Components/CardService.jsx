"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const CardService = ({ titulo1, titulo2, trago1, descripcion1, trago2, descripcion2, trago3, descripcion3, trago4, descripcion4, trago5, descripcion5, trago6, descripcion6, trago7, descripcion7, trago8, descripcion8, bebida1, bebida2, bebida3 }) => {
    return (
        <section className=" flex justify-center p-5" >
            <div className=" rounded-xl hover:border-2 duration-100 hover:border-yellow-500 w-80 md:w-auto h-auto md:h-[800px] pb-4 bg-black bg-opacity-60">
                <section className="flex justify-between flex-row text-white">
                    <div className="w-[50%]">
                        <h2 className="pt-5 pl-5 text-7xl">{titulo1}</h2>
                        <h3 className="pl-7 text-3xl">{titulo2}</h3>
                    </div>
                    
                    
                </section>
                <h4 className="text-center text-3xl pt-5">Cócteles</h4>
                <div className="pt-5 flex">
                    <ul className="pl-4 w-[50%]">
                        <li className="text-[14px]">{trago1}</li>
                        <li className="text-white text-[12px]">{descripcion1}</li>
                        <li className="text-[14px]">{trago2}</li>
                        <li className="text-white text-[12px]">{descripcion2}</li>
                        <li className="text-[14px]">{trago3}</li>
                        <li className="text-white text-[12px]">{descripcion3}</li>
                        <li className="text-[14px]">{trago4}</li>
                        <li className="text-white text-[12px]">{descripcion4}</li>
                        <li className="text-[14px]">{trago5}</li>
                        <li className="text-white text-[12px]">{descripcion5}</li>
                    </ul>
                    <ul className=" pl-4 w-[50%] pr-2">
                        <li className="text-[14px]">{trago6}</li>
                        <li className="text-white text-[12px]">{descripcion6}</li>
                        <li className="text-[14px]">{trago7}</li>
                        <li className="text-white text-[12px]">{descripcion7}</li>
                        <li className="text-[14px]">{trago8}</li>
                        <li className="text-white text-[12px]">{descripcion8}</li>
                    </ul>
                </div>
                <h4 className="pt-5 text-center text-3xl">Sin Alcohol</h4>
                <ul className="text-white text-center text-[14px]">
                    <li className="">{bebida1}</li>
                    <li className="">{bebida2}</li>
                    <li className="">{bebida3}</li>
                </ul>
                <section className="flex pt-10">
                    <div className="flex w-[50%] justify-center">
                        <Image
                            src="/img/1 otra-ronda.png"
                            className="yellow-500"
                            width={150}
                            height={150}
                            alt="Logo-Footer"
                        />
                    </div>
                    <div className="w-[50%] flex justify-center">
                        <button className="text-otra_ronda_yellow bg-black rounded-xl p-2 mt-4 m-2 w-32  hover:bg-otra_ronda_yellow hover:text-black  text-[16px] md:text-[17px] border-2 border-yellow-500">
                            <Link 
                                href="https://wa.me/5491154867763?text=Hola%2C%20%C2%BFC%C3%B3mo%20est%C3%A1s%3F%20Quisiera%20consultar%20por..."
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
    )
}

export default CardService

