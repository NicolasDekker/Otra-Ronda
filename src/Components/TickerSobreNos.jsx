import React from 'react';
import Image from "next/image";
import Ticker from 'framer-motion-ticker';

const image1 = '/img/catalogo-tragos-1.webp';
const image2 = '/img/catalogo-tragos-2.webp';
const image3 = '/img/catalogo-tragos-3.webp';
const image4 = '/img/catalogo-tragos-4.webp';
const image5 = '/img/catalogo-tragos-5.webp';
const image6 = '/img/catalogo-tragos-6.webp';
const image7 = '/img/catalogo-tragos-7.webp';
const image8 = '/img/catalogo-tragos-8.webp';
const image9 = '/img/catalogo-tragos-9.webp';
const image10 = '/img/catalogo-tragos-10.webp';
const image11 = '/img/catalogo-tragos-11.webp';

function TickerSobreNos() {
    const images = [ image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,  image11];
    return (
        <div className='bg-yellow-100'>
            <Ticker duration={20} direction={1} >
                {images.map((item, index) => (
                    <div key={index} className="w-20 md:w-36 mx-5 md:mx-14 my-auto py-4">
                        <Image
                            src={item}
                            alt={`Image ${index}`}
                            width={250}
                            height={250}
                            style={{
                                backgroundColor: item,
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        />
                    </div>

                ))}
            </Ticker>
        </div>
    );
}
export default TickerSobreNos;