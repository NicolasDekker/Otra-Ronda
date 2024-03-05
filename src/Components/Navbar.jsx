"use client"
import Image from "next/image";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";

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



  return (
    <nav className={`container h-[100px] max-w-full z-10 ${scrolled ? 'bg-transparent ' : ''} ${scrolled ? 'fixed top-0' : ''}`}>
      <div className="flex flex-row h-[100px] justify-between ">

        <div id="logo" className="flex items-center pl-6 md:pl-10">
          <Link href="#home">
          <Image
              src="/img/1 otra-ronda.png"
              className="yellow-500"
              width={150}
              height={150}
              alt="Logo-Footer"
            />
          </Link>
        </div>
        <div className={` ${!isOpen ? 'md:static md:h-auto hidden z-0' : 'absolute inset-y-20 bottom-[50%] md:p-0 block z-50'} ${scrolled ? 'bg-transparent' : 'bg-black'} text-otra_ronda_yellow md:flex w-full md:w-auto md:pb-0 md:mt-0 pr-6`}
        >
          <ul className=" w-full leading-4 text-[16px] md:text-[17px] font-montserrat md:flex md:px-4 md:items-center">


            {/* HOME */}
            <li 
              className="w-full p-3 py-4 mt-2 md:text-base md:w-auto md:border-0"
              onClick={handleMenuItemClick}
            >
              <Link href="#home" >
                <p className="hover:underline decoration-[3px]">Home</p>
              </Link>
            </li>

            {/* SERVICIOS */}
            <li 
              className="w-full p-3 py-4 mt-2  md:text-base md:w-auto md:border-0"
              onClick={handleMenuItemClick}
            >
              <Link href="#servicios" className="" >
                <p className="hover:underline decoration-[3px]">Servicios</p>
              </Link>

            </li>

            {/* CONTACTO */}
            <li 
              className="w-full p-3 py-4 mt-2 md:text-base md:w-auto md:border-0"
              onClick={handleMenuItemClick}
            >
              <Link href="#contacto" className="" >
                <p className="hover:underline decoration-[3px]">Contacto</p>
              </Link>

            </li>

            {/* NOSOTROS */}
            <li 
              className="w-full p-3 py-4 mt-2 md:text-base md:w-auto md:border-0"
              onClick={handleMenuItemClick}
            >
              <Link href="#nosotros" className="md:hover:border-b-4">
                <p className="hover:underline decoration-[3px]">Nosotros</p>
              </Link>
            </li>
          </ul>
          
        </div>
        <div className="flex  my-auto md:hidden text-3xl pr-6">
          <button className="mx-auto" onClick={handleClick}>
          {isOpen ? <IoClose className="text-otra_ronda_yellow mx-auto" /> : <IoMenu className="text-otra_ronda_yellow  mx-auto" />}
          </button>
        </div>
      </div>
    </nav>

  )
}

export default Navbar

/* PRODUCTOS 
<li 
className="w-full p-3 py-4 mt-2 md:text-base md:w-auto md:border-0"
onClick={handleMenuItemClick}
>
<Link href="#productos" className="" >
  <p className="hover:underline decoration-[3px]">Productos</p>
</Link>

</li> */