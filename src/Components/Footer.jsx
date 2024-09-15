import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { TbBrandFacebook } from "react-icons/tb";

const Footer = () => {
  return (
    <footer>
      <div id="contenedor" className="bg-black h-20 flex justify-between border-t-[3px] border-yellow-500">
        <div id="logo" className="pl-6 md:pl-10 flex my-auto">
          <Link href="/">
            <Image
              src="/img/logo-otra-ronda.webp"
              width={150}
              height={150}
              alt="Logo-Footer"
            />
          </Link>
        </div>

        <div id="social_media_i" className="flex flex-row pr-6 md:pr-10 my-auto">
          <div id="i_facebook">
            <Link target='_blank' rel="noopener noreferrer" href={'https://www.facebook.com/profile.php?id=61563097708878&mibextid=LQQJ4d'}>
              <TbBrandFacebook className="text-5xl mr-4 md:mr-8 text-otra_ronda_yellow hover:text-blue-500  duration-500" />
            </Link>
          </div>
          <div id="i_instagram">
            <Link target='_blank' rel="noopener noreferrer" href={'https://www.instagram.com/otraronda.ok/'}>
              <FaInstagram className="text-5xl mr-4 text-otra_ronda_yellow hover:text-red-600  duration-500" />
            </Link>
          </div>
        </div>

      </div>
      <div className=' pt-3 bg-black flex flex-col md:justify-center md:flex-row text-sm font-medula'>
        <p className='text-white text-center font-swiss'>Otra Ron´da - Todos los derechos reservados.</p>
        <Link target='_blank' rel="noopener noreferrer" href={"https://github.com/NicolasDekker"}>
          <p className='text-white text-center font-swiss ml-1 hover:font-bold '>Realizado por: Nicolas Dekker</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer