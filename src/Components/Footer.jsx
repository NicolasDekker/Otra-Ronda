import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";

const Footer = () => {
  return (
    <footer>
      <div id="contenedor" className="bg-black h-20 flex justify-between">
        <div id="logo" className="pl-6 md:pl-10">
          <Link href="#home">
            <Image
              src="/img/logo-otra-ronda.png"
              width={150}
              height={150}
              alt="Logo-Footer"
            />
          </Link>
        </div>

        <div id="social_media_i" className="flex flex-row pr-6 md:pr-10 my-auto">
          <div id="i_facebook">
            <Link target='_blank' rel="noopener noreferrer" href={'https://www.facebook.com/CromatikPinturerias'}>
              <LuFacebook className="text-4xl mr-3 text-otra_ronda_yellow hover: hover:text-blue-500 duration-500" />
            </Link>
          </div>

          <div id="i_instagram">
            <Link target='_blank' rel="noopener noreferrer" href={'https://www.instagram.com/otraronda.ok/'}>
              <FaInstagram className="text-4xl mr-3 text-otra_ronda_yellow hover:text-red-600  duration-500" />
            </Link>
          </div>
        </div>

      </div>
      <div className=' pt-3 bg-black flex flex-col md:justify-center md:flex-row text-sm'>
        <p className='text-white text-center font-swiss'>Otra Ron´da - Todos los derechos reservados.</p>
        <Link target='_blank' rel="noopener noreferrer" href={"https://www.aprin.com.ar/"}>
          <p className='text-white text-center font-swiss ml-1 hover:font-bold '>Realizado por: APRIN</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer