"use client";
import React from "react";
import Image from "next/image";
import Head from "next/head";


const CardNovedades = ({ titulo, imagen, descripcion }) => {
    return (
    <>
        <Head>
            <title>{titulo}</title>
            <meta name="description" content={descripcion} />
        </Head>
        <section className="flex flex-row justify-center p-5" >
            <div className=" rounded-xl hover:border-2 hover:border-yellow-500 w-80  h-auto  pb-4 bg-white bg-opacity-5">
                <section className="flex justify-between flex-row text-white">
                    <div className=" font-medula">
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
        </section>
    </>
    )
}

export default CardNovedades

