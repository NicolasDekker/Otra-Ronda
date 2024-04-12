import React from 'react';
import Image from "next/image";
import Ticker from 'framer-motion-ticker';

const image1 = '/img/logo-fernet.png';
const image2 = '/img/logo-Gancia.png';
const image3 = '/img/logo-malibu.png';
const image4 = '/img/logo-vodka.png';
const image5 = '/img/logo-havana.jpeg';
const image6 = '/img/logo-gin.png';
const image7 = '/img/logo-coca.webp';
const image8 = '/img/logo-sprite.png';
const image9 = '/img/logo-schweppes.png';


function Marcas() {
    const images = [ image1, image2, image3, image4, image5, image6, image7, image8, image9 ];
    return (
        <div id="nosotros">
            <Ticker duration={15} direction={-1}>
                {images.map((item, index) => (
                    <div  key={index} className=" w-16 md:w-32 mx-5 md:mx-20 my-auto py-8">
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