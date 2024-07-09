"use client";
import React from "react";
import Image from "next/image";

function Fototeca() {
  return (
    <div className="flex flex-col py-8">
      <a className="text-5xl mb-10 md:text-7xl text-center font-medula text-white">Galería</a>
      <div className="w-[100%] flex flex-row justify-center">
        <section className="flex items-center">
          <div className="pr-20">
            <Image
              src="/img/img-fototeca-6.jpeg"
              className="rounded-3xl m-5"
              width={250}
              height={250}
              alt="Logo-Footer"
            />
            <Image
              src="/img/img-fototeca-5.jpeg"
              className="rounded-3xl m-5"
              width={250}
              height={150}
              alt="Logo-Footer"
            />
          </div>
        </section>
        <section className="pr-20 flex items-center">
          <div>
            <Image
              src="/img/img-fototeca-4.jpeg"
              className="rounded-3xl m-5"
              width={220}
              height={220}
              alt="Logo-Footer"
            />
            <Image
              src="/img/img-fototeca.jpeg"
              className="rounded-3xl m-5"
              width={220}
              height={220}
              alt="Logo-Footer"
            />
            
          </div>
        </section>
        <section className="flex items-center">
          <div>
            <Image
              src="/img/img-fototeca-2.jpeg"
              className="rounded-3xl m-5"
              width={190}
              height={190}
              alt="Logo-Footer"
            />
            <Image
              src="/img/img-fototeca-3.jpeg"
              className="rounded-3xl m-5"
              width={190}
              height={190}
              alt="Logo-Footer"
            />
          </div>
        </section>
        <section className="pl-20 flex items-center">
          <div>
            <Image
              src="/img/otraronda-49.jpg"
              className="rounded-3xl m-5"
              width={190}
              height={200}
              alt="Logo-Footer"
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Fototeca