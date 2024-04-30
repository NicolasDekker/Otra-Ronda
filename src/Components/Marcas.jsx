import React from 'react';
import Image from "next/image";
import Ticker from 'framer-motion-ticker';

const image1 = '/img/logo-fernet.webp';
const image2 = '/img/logo-Gancia.webp';
const image3 = '/img/logo-malibu.webp';
const image4 = '/img/logo-vodka.webp';
const image5 = '/img/logo-havana.webp';
const image6 = '/img/logo-gin.webp';
const image7 = '/img/logo-coca.webp';
const image8 = '/img/logo-sprite.webp';
const image9 = '/img/logo-schweppes.webp';


function Marcas() {
    const images = [ image1, image2, image3, image4, image5, image6, image7, image8, image9 ];
    return (
        <div id="nosotros" className='bg-yellow-100'>
            <Ticker duration={15} direction={-1}>
                {images.map((item, index) => (
                    <div  key={index} className=" w-16 md:w-[101px] mx-5 md:mx-20 my-auto py-8">
                        <Image
                        src={item}
                        alt={`Image ${index}`}
                        width={250}
                        height={250}
                        style={{
                            backgroundColor: item,
                            display: 'flex',
                            justifyContent:'space-between',
                        }}
                    />
                    </div>
                    
                ))}
            </Ticker>
        </div>
    );
}
export default Marcas;