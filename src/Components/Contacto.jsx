"use client";
import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import data from "../data/services.json";
import 'react-toastify/dist/ReactToastify.css';
import './contacto.css';

const Contacto = () => {
  const imageURL = "img/image-contacto.jpg";
  const imageURLMobile = "img/image-contacto-mobile.jpg";
  const form = useRef();
  const [backgroundImage, setBackgroundImage] = useState(imageURL);
  // const [servicios, setServicios] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});
  const [errorAPI, setErrorAPI] = useState(false);

  const servicios = data.servicios;

  useEffect(() => {
    const handleResize = () => {
      setBackgroundImage(window.innerWidth <= 768 ? imageURLMobile : imageURL);
    };
    
    window.addEventListener('resize', handleResize);    
    handleResize();    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [imageURL, imageURLMobile]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorsField = {}
    let regExpName = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/;
    let regeExpEmail = /^[\w-.]+@[\w-_]+(\.[a-zA-Z]{2,4}){1,2}$/gm;
    let regExpTel = /^\+?(\d{1,4})?[-\s]?\(?\d{1,}\)?[-\s]?\d+[-\s]?\d+$/;

    const nombreCompleto = form.current.nombre.value + " " + form.current.apellido.value
    const email = form.current.mail.value
    const mensaje = form.current.mensaje.value
    const tel = form.current.tel.value

    if (!nombreCompleto.trim()) {
      errorsField.nombreCompleto = "Debe ingresar nombre y apellido";
    } else if (!form.current.nombre.value.trim()) {
      errorsField.nombreCompleto = "Debe ingresar un nombre";
    } else if (!form.current.apellido.value.trim()) {
      errorsField.nombreCompleto = "Debe ingresar un apellido";
    } else if (!regExpName.test(nombreCompleto)) {
      errorsField.nombreCompleto = "El nombre completo debe contener letras y/o espacios";
    }
     
    if (!regeExpEmail.test(email)) {
      errorsField.mail = "Debe ingresar un mail válido"
    }

    if (tel && !regExpTel.test(tel)) {
      errorsField.tel = "Debe ingresar un teléfono válido"
    }
  
    console.log(errorsField)
    console.log(Object.keys(errorsField))

    if (Object.keys(errorsField).length > 0) {
      console.log("paso")
      setValidationErrors(errorsField);
      return;
    }

    console.log(form.current)
    const bodyMail = {
      nombre: nombreCompleto,
      mail: email,
      tel: tel,
      servicio: form.current.servicio.value,
      mensaje: mensaje
    }

    // enviar mail
    try {
      const response = fetch("https://formsubmit.co/ajax/dekkernicolas@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(bodyMail),
      });

      setErrorAPI(false)

    } catch (error) {
      console.log(error)
      setErrorAPI(true)
      return;
    }

    console.log(errorAPI);
    if (errorAPI) {
      toast.error('Ocurrió un error, inténtelo más tarde', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })

      setErrorAPI(false);

    } else {
      toast.success('Gracias por contactarnos', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      // Reiniciar el formulario y los errores después del envío exitoso
      e.target.reset();
      setValidationErrors({});
    }
    
  }

  return (
    <div>

      <div
        id="contacto"
        className="h-[100vh] bg-cover bg-center flex items-center p-5"
        style={{                            
          backgroundImage: `url(${backgroundImage})`,
          
        }}
      >
        <div className="hidden lg:block lg:w-[50%] md:block md:w-[50%] ">
          
        </div>

          <div className="bg-otra_ronda_grey_bg bg-opacity-40 w-full lg:w-[50%] md:w-[50%] p-2 rounded-2xl border-2 border-otra_ronda_yellow h-auto font-lato text-black">
            <form ref={form} onSubmit={handleSubmit} className="flex flex-col items-center justify-center p-2">
              <h1 className="text-otra_ronda_yellow text-[35px] md:text-[40px] uppercase font-medula font-bold">Contactanos</h1>

              <div className="pt-4 w-full md:p-4">
                <p className="text-otra_ronda_yellow md:text-center font-bold text-[16px] md:text-[17px] font-medula">Nombre completo *</p>
                <div className="flex w-full justify-between pt-2">
                <input className="form w-2/5 md:w-[40%] rounded-md p-1 text-[14px] md:text-[16px] bg-black text-otra_ronda_yellow" type="text" id="nombre" placeholder="Nombre" name="nombre" />
                  <input className="form w-2/5 md:w-[40%] rounded-md p-1 text-[14px] md:text-[16px] bg-black text-otra_ronda_yellow" type="text" id="apellido" placeholder="Apellido" name="apellido" />
                </div>
                {validationErrors.nombreCompleto && (
                  <div className="text-red-400 font-bold text-center">
                    {validationErrors.nombreCompleto}
                  </div>
                )}
              </div>

              <div className="pt-4 w-full md:p-4">
                <p className="text-otra_ronda_yellow md:text-center font-bold text-[16px] md:text-[17px] font-medula">Email *</p>
                <div className="flex w-full justify-center pt-2">
                  <input className="form w-full  rounded-md p-1 text-[14px] md:text-[16px] bg-black text-otra_ronda_yellow" type="text" id="mail" placeholder="Ingrese mail donde desea ser contactado" name="mail" />
                </div>
                {validationErrors.mail && (
                  <div className="text-red-400 font-bold text-center">
                    {validationErrors.mail}
                  </div>
                )}
              </div>

              <div className="pt-4 w-full md:p-4">
                <p className="text-otra_ronda_yellow md:text-center font-bold text-[16px] md:text-[17px] font-medula">Teléfono</p>
                <div className="flex w-full justify-center pt-2">
                  <input className="form w-full  rounded-md p-1 text-[14px] md:text-[16px] bg-black text-otra_ronda_yellow" type="text" id="tel" placeholder="Ingrese número de teléfono" name="tel" />
                </div>
                {validationErrors.tel && (
                  <div className="text-red-400 font-bold text-center">
                    {validationErrors.tel}
                  </div>
                )}
              </div>

              <div className="pt-4 w-full md:p-4">
                <p className="text-otra_ronda_yellow md:text-center font-bold text-[16px] md:text-[17px] font-medula">¿Por cuál servicio nos contacta?</p>
                <div className="flex w-full justify-center pt-2">
                  <select 
                    name="servicio" 
                    id="servicio" 
                    defaultValue="Elige una opción" 
                    className="form rounded-md p-1 w-full text-[14px] md:text-[16px] bg-black text-white"
                    onChange={(e) => {
                      e.target.style.color = e.target.value === "Elige una opción" ? "white" : "yellow";
                    }}
                    >
                      <option  value="Elige una opción" disabled hidden className="">Elige una opción</option>
                    {servicios.map(servicio => (
                      <option key={servicio.id} value={servicio.categoria}>
                        {servicio.categoria}
                      </option>
                    ))}                  
                  </select>

                </div>
              </div>

              <div className="pt-4 w-full md:p-4">
                <p className="text-otra_ronda_yellow md:text-center text-[16px] md:text-[17px]  font-bold font-medula">Mensaje</p>
                <div className="flex w-full justify-center pt-2">
                  <textarea className="form w-full rounded-md p-1 text-[14px] md:text-[16px] bg-black text-otra_ronda_yellow" type="text" color='white' id="mensaje" placeholder="Ingrese su consulta" name="mensaje" />
                </div>
                {validationErrors.mensaje && (
                  <div className="text-red-400 font-bold text-center">
                    {validationErrors.mensaje}
                  </div>
                )}
              </div>

              <button
                type="submit" 
                className="text-otra_ronda_yellow bg-black z-10 rounded-xl p-2 mt-4 m-2 w-64 md:w-72 lg:w-96 hover:bg-otra_ronda_yellow hover:text-black font-montserrat font-bold text-[16px] md:text-[17px]"
              >
                Enviar consulta
                </button>
            </form>

            {Object.keys(validationErrors).length == 0 && <ToastContainer />}
          </div>

        <a
        href="https://wa.me/5491154867763?text=Hola%2C%20%C2%BFC%C3%B3mo%20est%C3%A1s%3F%20Quisiera%20consultar%20por..."
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/img/whatsapp_logo.svg"
          loading="lazy"
          alt="WhatsApp Logo"
          className="fixed bottom-32 right-4 md:right-12 z-50 w-14 md:w-16 h-auto"
        ></img>
      </a>

      </div>
    </div>
  );
};

export default Contacto