"use client";
import React from "react";
import Image from "next/image";


const CardGaleria = ({ imagen }) => {
    return (
        <>
            <section className="flex flex-row justify-center p-5 ">
                <div className="">
                    <Image
                        src={imagen}
                        width={300}
                        height={350}
                        alt="Logo-Footer"
                        className="rounded-xl"
                    />
                </div>
            </section>
        </>
    )
}

export default CardGaleria

