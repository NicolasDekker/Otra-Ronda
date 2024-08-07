"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const CardNovedades = ({ id, titulo, imagen, descripcion }) => {
    return (
        <>
            <Head>
                <title>{titulo}</title>
                <meta name="description" content={descripcion} />
            </Head>
            <section id={id} className="flex flex-row justify-center p-5">
                <div className="flex flex-col justify-between rounded-xl px-4 hover:border-2 hover:border-yellow-500 w-[400px] h-[650px] bg-white bg-opacity-5">
                    <div>
                        <section className="flex justify-between flex-row text-white">
                            <div className="font-medula">
                                <h2 className="py-5 pl-5 text-3xl">{titulo}</h2>
                            </div>
                        </section>
                        <section className="h-32 my-auto">
                            <div className="flex justify-center">
                                <Image
                                    src={imagen}
                                    width={150}
                                    height={150}
                                    alt="Logo-Footer"
                                    className=""
                                />
                            </div>
                        </section>
                        <section className="">
                            <div className="text-lg pt-5 pl-5">
                                {descripcion}
                            </div>
                        </section>
                    </div>
                    <div className="flex justify-center pb-4">
                        
                            <a href={`/novedades/id/${id}`} className="text-otra_ronda_yellow bg-black rounded-xl p-2 m-2 w-32 duration-500 hover:bg-otra_ronda_yellow hover:text-black text-[16px] md:text-[17px] border-2 border-yellow-500 hover:font-bold">
                                Ver más
                            </a>
                        
                    </div>
                </div>
            </section>
        </>
    );
}

export default CardNovedades;
