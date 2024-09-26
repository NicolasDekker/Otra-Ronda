"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import data from "../../../data/news.json";
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import { useEffect, useState } from "react";
import Link from "next/link";

const Detalle = () => {
    const params = useParams();
    const { id } = params;

    const [detail, setDetail] = useState(null);

    useEffect(() => {
        if (id) {
            setDetail(data.novedades.find((item) => item.id === id));
        }
    }, [id]);

    const highlightWordsInParagraph = (paragraph, wordsToHighlight) => {
        let highlightedText = paragraph;
        wordsToHighlight.forEach((word) => {
            const regex = new RegExp(`(${word})`, 'gi');
            highlightedText = highlightedText.replace(regex, '<span style="text-transform: uppercase; font-weight: bold;">$1</span>');
        });
        return highlightedText;
    };

    const highlightWord = (text, word1, word2, word3, word4, word5) => {
        if (!text) {
            return ''; // Si el texto es undefined, retornar un string vacío
        }

        let newText = text;

        if (word1) {
            const regex = new RegExp(`(${word1})`, 'gi');
            newText = newText.replace(regex, '<span style="text-transform: uppercase; font-weight: bold;">$1</span>');
        }
        if (word2) {
            const regex = new RegExp(`(${word2})`, 'gi');
            newText = newText.replace(regex, '<span style="text-transform: uppercase; font-weight: bold;">$1</span>');
        }
        if (word3) {
            const regex = new RegExp(`(${word3})`, 'gi');
            newText = newText.replace(regex, '<span style="text-transform: uppercase; font-weight: bold;">$1</span>');
        }
        if (word4) {
            const regex = new RegExp(`(${word4})`, 'gi');
            newText = newText.replace(regex, '<span style="text-transform: uppercase; font-weight: bold;">$1</span>');
        }
        if (word5) {
            const regex = new RegExp(`(${word5})`, 'gi');
            newText = newText.replace(regex, '<span style="text-transform: uppercase; font-weight: bold;">$1</span>');
        }

        return newText;

    };


    /*md:w-[80%] md:mx-auto*/
    return (
        <div className="bg-black">
            <Navbar />
            <section className="h-auto bg-black">
                <div className="text-center my-8 text-otra_ronda_yellow text-[25px]  md:text-[40px] font-medula font-bold"> {detail?.titulo}</div>
                <div className='mx-auto border-t-[3px] w-[70%] md:w-[60%] rounded-xl border-gray-400'> </div>
                <div className="flex flex-col mx-auto w-[95%]">
                    <h2 className="mx-5 text-justify mt-8" dangerouslySetInnerHTML={{ __html: highlightWord(detail?.descripcion, 'barras para XV', 'barras para fiestas', 'barra para eventos empresariales', 'barra de tragos para eventos', 'barra de tragos para casamientos') }}></h2>
                    <section className="md:flex md:flex-row">
                        <div className="mx-20 sm:mx-44 md:mx-0">
                            <Image
                                src={detail?.imagen2}
                                width={250}
                                height={250}
                                alt="Logo-Footer"
                                className="pt-20"
                            />
                        </div>
                            <section className="md:flex md:flex-col  md:w-[80%]">
                                <div className="text-center pb-10 pt-8 text-[30px] lg:text-[40px]"> {detail?.titulo2}</div>
                                <h2 className="mx-5 text-justify mb-10">
                                    {detail?.descripcion2.map((paragraph, index) => (
                                        <p key={index} className="mb-4" dangerouslySetInnerHTML={{ __html: highlightWordsInParagraph(paragraph, ['barras para XV', 'barras para fiestas', 'barra para eventos empresariales', 'barra de tragos para eventos', 'barra de tragos para casamientos']) }}></p>
                                    ))}
                                </h2>
                                <button className="mx-auto flex justify-center px-2 mb-8 text-otra_ronda_yellow bg-black rounded-xl p-2 mt-4 m-2 w-32 duration-500 hover:bg-otra_ronda_yellow hover:text-black  text-[16px] md:text-[17px] border-2 border-yellow-500 hover:font-bold">
                                    <Link
                                        href="https://wa.me/5491164131218?text=Hola%2C%20%C2%BFC%C3%B3mo%20est%C3%A1s%3F%20Quisiera%20consultar%20por..."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Consultanos
                                    </Link>
                                </button>
                            </section>

                    </section>

                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Detalle;
