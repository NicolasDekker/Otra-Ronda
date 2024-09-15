"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/navigation";

const CardNovedades = ({ id, titulo, imagen, descripcion }) => {

    const router = useRouter();

    const highlightWord = (text, word1, word2, word3, word4, word5, ) => {
        let newText = text;

        if (word1) {
            newText = newText.replace(new RegExp(`(${word1})`, 'gi'), '<span style="text-transform: uppercase; font-weight: bold;">$1</span>');
        }
        if (word2) {
            newText = newText.replace(new RegExp(`(${word2})`, 'gi'), '<span style="text-transform: uppercase; font-weight: bold;">$1</span>');
        }
        if (word3) {
            newText = newText.replace(new RegExp(`(${word3})`, 'gi'), '<span style="text-transform: uppercase; font-weight: bold;">$1</span>');
        }
        if (word4) {
            newText = newText.replace(new RegExp(`(${word4})`, 'gi'), '<span style="text-transform: uppercase; font-weight: bold;">$1</span>');
        }
        if (word5) {
            newText = newText.replace(new RegExp(`(${word5})`, 'gi'), '<span style="text-transform: uppercase; font-weight: bold;">$1</span>');
        }

        return newText;
    };
    return (
        <>
            <Head>
                <title>{titulo}</title>
                <meta name="description" content={descripcion} />
            </Head>
            <section id={id} className="flex flex-row justify-center p-5">
                <div className="flex flex-col justify-between rounded-xl px-4 hover:border-2 hover:border-yellow-500 w-[300px] md:w-[400px] h-[700px] bg-white bg-opacity-5">
                    <div>
                        <section className="flex justify-between flex-row text-white">
                            <div className="font-medula">
                                <h2 className="py-5 pl-5 text-[25px] text-otra_ronda_yellow">{titulo}</h2>
                            </div>
                        </section>
                        <section className="my-auto">
                            <div className="flex justify-center h-44">
                                <Image
                                    src={imagen}
                                    width={300}
                                    height={150}
                                    alt="Logo-Footer"
                                    className=""
                                />
                            </div>
                        </section>
                        <section className="">
                            <div className=" text-justify md:text-lg" dangerouslySetInnerHTML={{ __html: highlightWord(descripcion, 'barras para XV', 'barras para fiestas', 'barra para eventos empresariales', 'barra de tragos para eventos', 'barra de tragos para casamientos') }}></div>
                        </section>
                    </div>
                    <div className="flex justify-center pb-4">
                        <button
                            onClick={() => {
                                router.push(`/novedades/${id}`);
                            }}
                        >
                            <div className="text-otra_ronda_yellow bg-black rounded-xl p-2 m-2 w-32 duration-500 hover:bg-otra_ronda_yellow hover:text-black text-[16px] md:text-[17px] border-2 border-yellow-500 hover:font-bold">
                                Ver más
                            </div>
                        </button>

                    </div>
                </div>
            </section>
        </>
    );
}

export default CardNovedades;
