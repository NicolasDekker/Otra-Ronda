import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Marcas = () => {
    const [scrollX, setScrollX] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Incrementa la posición del carrusel hacia la derecha
            setScrollX((prevScrollX) => prevScrollX + 1);
        }, 10000); // Intervalo de tiempo en milisegundos

        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, []);
    return (
        <section className="h-64 border-4">
            <motion.div
                className="flex p-10 overflow-hidden relative justify-between"
                style={{
                    x: -scrollX, // Aplica la animación de desplazamiento horizontal
                    transition: "none", // Desactiva la transición predeterminada
                }}
            >
                <div className="w-36 my-auto">
                    <Image
                        src="/img/logo-fernet-1.png"
                        className=""
                        width={250}
                        height={250}
                        alt="Logo-Footer"
                    />
                </div>
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
        </section>
    );
};

export default Marcas