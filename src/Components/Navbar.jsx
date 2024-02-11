"use client"
import Image from "next/image";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // menu cerrado
  const [isDisplayed, setIsDisplayed] = useState(false); // menu desplegado

  const handleClick = () => {
    setIsOpen(!isOpen) // valor opuesto
  }


  return (
    <nav className="container bg-c_cromatik h-[100px] max-w-full ">
      <div className="bg-c_cromatik flex flex-row h-[100px] justify-between ">

        <div id="logo" className="flex items-center">
          <Link href="#home">
          <Image
              src="/img/1 otra-ronda.png"
              width={150}
              height={150}
              alt="Logo-Footer"
            />
          </Link>
        </div>
        <div className={` ${!isOpen ? 'md:static md:h-auto hidden z-0' : 'absolute inset-y-20 bottom-[40%] md:p-0 block z-50'} bg-c_cromatik text-yellow-500 md:flex w-full md:w-auto md:pb-0 md:mt-0`}
        >
          <ul className=" w-full leading-4 text-[16px] md:text-[17px] font-montserrat md:flex md:px-4 md:items-center">


            {/* HOME */}
            <li className="w-full p-3 py-4 mt-2 md:text-base md:w-auto md:border-0"
            >
              <Link href="#home" >
                <p className="hover:underline decoration-[3px]">Home</p>
              </Link>
            </li>

            {/* SERVICIOS */}
            <li className="w-full p-3 py-4 mt-2  md:text-base md:w-auto md:border-0">
              <Link href="#servicios" className="" >
                <p className="hover:underline decoration-[3px]">Servicios</p>
              </Link>

            </li>

            {/* PRODUCTOS */}
            <li className="w-full p-3 py-4 mt-2 md:text-base md:w-auto md:border-0">
              <Link href="#productos" className="" >
                <p className="hover:underline decoration-[3px]">Productos</p>
              </Link>

            </li>

            {/* CONTACTO */}
            <li className="w-full p-3 py-4 mt-2 md:text-base md:w-auto md:border-0">
              <Link href="#contacto" className="" >
                <p className="hover:underline decoration-[3px]">Contacto</p>
              </Link>

            </li>

            {/* NOSOTROS */}
            <li className="w-full p-3 py-4 mt-2 md:text-base md:w-auto md:border-0">
              <Link href="#nosotros" className="md:hover:border-b-4">
                <p className="hover:underline decoration-[3px]">Nosotros</p>
              </Link>
            </li>
          </ul>
          
        </div>
        <div className="flex  my-auto md:hidden text-3xl pr-6">
          <button className="mx-auto" onClick={handleClick}>
          {isOpen ? <IoClose className="text-yellow-500 mx-auto" /> : <IoMenu className="text-yellow-500  mx-auto" />}
          </button>
        </div>
      </div>
    </nav>

  )
}

export default Navbar