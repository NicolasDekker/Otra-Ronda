import React from 'react'
import CardMarcas from "./CardMarcas";
import data from "../data/marcas.json";

const Marcas = () => {
    const marcasData = data.marcas;
    return (
        <div className='absolute left-0 flex gap-4'>
            {marcasData.map((marcas, index) => (
                <div key={index}>
                    <CardMarcas 
                        imagen={marcas.imagen}
                    />
                </div>
                
            ))}
        </div>
    )
}

export default Marcas





















/* import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useCycle } from "framer-motion";

const Marcas = () => {
    const [cycle, setCycle] = useCycle(0, 1);
    const [scrollX, setScrollX] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        const container = document.querySelector(".marcas-container");

        if (container) {
            setContainerWidth(container.offsetWidth);
        }

        const interval = setInterval(() => {
            setScrollX((prevScrollX) => {
                if (prevScrollX >= containerWidth) {
                    setCycle();
                    return 0;
                } else {
                    return prevScrollX + 1;
                }
            });
        }, 1); // Intervalo de tiempo ajustado según tus necesidades

        return () => clearInterval(interval);
    }, [containerWidth, cycle]);

    return (
        <section className="w-full h-64">
            <div className="marcas-container p-10 overflow-hidden relative">
                <motion.div
                    className="flex flex-row justify-between"
                    style={{
                        x: -scrollX, // Aplica la animación de desplazamiento horizontal
                        transition: "none", // Desactiva la transición predeterminada
                    }}
                >
                    <motion.div 
                        className="w-36 my-auto"
                        initial={{ opacity: cycle === 0 ? 1 : 0 }}
                        animate={{ opacity: cycle === 0 ? 1 : 0 }}
                    >
                        <Image
                            src="/img/logo-fernet-1.png"
                            className=""
                            width={250}
                            height={250}
                            alt="Logo-Footer"
                        />
                    </motion.div>
                    <div className="w-36 my-auto">
                        <Image
                            src="/img/logo-gancia-1.png"
                            className=""
                            width={300}
                            height={300}
                            alt="Logo-Footer"
                        />
                    </div>
                    <div className="w-32 my-auto">
                        <Image
                            src="/img/logo-malibu-1.png"
                            className=""
                            width={250}
                            height={250}
                            alt="Logo-Footer"
                        />
                    </div>
                    <div className="w-32 my-auto">
                        <Image
                            src="/img/logo-vodka-1.png"
                            className=""
                            width={250}
                            height={250}
                            alt="Logo-Footer"
                        />
                    </div>
                    <div className="w-32 my-auto">
                        <Image
                            src="/img/logo-havana-3.jpeg"
                            className=""
                            width={250}
                            height={250}
                            alt="Logo-Footer"
                        />
                    </div>
                    <div className="w-32 my-auto">
                        <Image
                            src="/img/logo-gin.png"
                            className=""
                            width={250}
                            height={150}
                            alt="Logo-Footer"
                        />
                    </div>
                    <div className="w-32 my-auto">
                        <Image
                            src="/img/logo-coca-1.webp"
                            className=""
                            width={250}
                            height={250}
                            alt="Logo-Footer"
                        />
                    </div>
                    <div className="w-32 my-auto">
                        <Image
                            src="/img/logo-sprite-1.png"
                            className=""
                            width={250}
                            height={250}
                            alt="Logo-Footer"
                        />
                    </div>
                    <div className="w-32 my-auto">
                        <Image
                            src="/img/logo-schweppes-1.png"
                            className=""
                            width={250}
                            height={250}
                            alt="Logo-Footer"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Marcas */