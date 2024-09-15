"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import { BsTelephone } from "react-icons/bs";
import { BiDrink } from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // menu cerrado
  const [scrolled, setScrolled] = useState(false); // controla el desplazamiento

  const handleClick = () => {
    setIsOpen(!isOpen) // valor opuesto
  }

  const handleMenuItemClick = () => {
    setIsOpen(false); // cerrar menú cuando se hace clic en un elemento del menú
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
      if (isOpen && isScrolled) {
        setIsOpen(false); // Cierra el menú cuando se hace scroll
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);



  return (
    <div className="border-b-[3px] border-yellow-500">
      <nav className="container h-[100px] max-w-full z-10 bg-black ">
        <motion.div
          className="flex flex-row h-[100px] justify-between "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >

          <div id="logo" className="flex items-center pl-6 md:pl-10">
            <Link href="/">
              <Image
                src="/img/logo-otra-ronda.webp"
                className="yellow-500"
                width={150}
                height={150}
                alt="Logo-Footer"
              />
            </Link>
          </div>
          <div className={` ${!isOpen ? 'md:static md:h-auto hidden z-0' : 'absolute inset-y-20 bottom-[45%] md:p-0 block z-50'} ${scrolled ? 'bg-transparent' : 'bg-black'} text-otra_ronda_yellow md:flex w-full md:w-auto md:pb-0 md:mt-0 pr-6`}
          >
            <ul className=" w-full leading-4 text-[16px] md:text-[17px] font-medula md:flex md:px-4 md:items-center ">

              {/* SERVICIOS */}
              <li
                className="w-full p-3 py-4 mt-2  md:text-base md:w-auto md:border-0 flex"
                onClick={handleMenuItemClick}
              >
                <BiDrink className="mb-1 md:mb-0 mr-1 text-2xl md:text-[22px] lg:text-2xl" />
                <Link href="/servicios" className="" >
                  <p className="hover:underline text-[22px] md:text-[19px] lg:text-[22px] decoration-[3px] pt-1 md:pt-0">Servicios</p>
                </Link>

              </li>

              {/* NOSOTROS */}
              <li
                className="w-full p-3 py-4 mt-2 md:text-base md:w-auto md:border-0 flex"
                onClick={handleMenuItemClick}
              >
                <IoPeopleOutline className="mb-1 md:mb-0 mr-1 text-2xl md:text-[22px] lg:text-2xl" />
                <Link href="/nosotros" className="">
                  <p className="hover:underline text-[22px] md:text-[19px] lg:text-[22px] decoration-[3px] pt-1 md:pt-0">Nosotros</p>
                </Link>
              </li>

              {/* CONTACTO */}
              <li
                className="w-full p-3 py-4 mt-2 md:text-base md:w-auto md:border-0 flex"
                onClick={handleMenuItemClick}
              >
                <BsTelephone className="mb-1 md:mb-0 mr-1 text-2xl md:text-[22px]" />
                <Link href="/contacto" className="" >
                  <p className="hover:underline text-[22px] md:text-[19px] lg:text-[22px] decoration-[3px] pt-1 md:pt-0">Contacto</p>
                </Link>

              </li>
              {/* NOVEDADES */}
              <li
                className="w-full p-3 py-4 mt-2 md:text-base md:w-auto md:border-0 flex"
                onClick={handleMenuItemClick}
              >
                <FaRegNewspaper className="mb-1 md:mb-0 mr-1 text-2xl md:text-[22px]" />
                <Link href="/novedades" className="" >
                  <p className="hover:underline text-[22px] md:text-[19px] lg:text-[22px] decoration-[3px] pt-1 md:pt-0">Novedades</p>
                </Link>

              </li>


            </ul>

          </div>
          <div className="flex  my-auto md:hidden text-3xl pr-6">
            <button className="mx-auto" onClick={handleClick}>
              {isOpen ? <IoClose className="text-otra_ronda_yellow mx-auto" /> : <IoMenu className="text-otra_ronda_yellow  mx-auto" />}
            </button>
          </div>
        </motion.div>
      </nav>
    </div>

  )
}

export default Navbar

