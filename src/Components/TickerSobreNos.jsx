import React from 'react';
import Image from "next/image";
import Ticker from 'framer-motion-ticker';

const image1 = '/img/catalogo-tragos-1.jpg';
const image2 = '/img/catalogo-tragos-2.jpg';
const image3 = '/img/catalogo-tragos-3.jpg';
const image4 = '/img/catalogo-tragos-4.jpg';
const image5 = '/img/catalogo-tragos-5.jpg';
const image6 = '/img/catalogo-tragos-6.jpg';
const image7 = '/img/catalogo-tragos-7.jpg';
const image8 = '/img/catalogo-tragos-8.jpg';
const image9 = '/img/catalogo-tragos-9.jpg';
const image10 = '/img/catalogo-tragos-10.jpg';
const image11 = '/img/catalogo-tragos-11.jpg';
const image12 = '/img/catalogo-tragos-12.jpg';
const image13 = '/img/catalogo-tragos-13.jpg';
const image14 = '/img/catalogo-tragos-14.jpg';
const image15 = '/img/catalogo-tragos-15.jpg';
const image16 = '/img/catalogo-tragos-16.jpg';
const image17 = '/img/catalogo-tragos-17.jpg';
const image18 = '/img/catalogo-tragos-18.jpg';
const image19 = '/img/catalogo-tragos-19.jpg';
const image20 = '/img/catalogo-tragos-20.jpg';

function TickerSobreNos() {
    const images = [ image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20];
    return (
        <div >
            <Ticker duration={25} direction={1} >
                {images.map((item, index) => (
                    <div key={index} className="w-20 md:w-40 mx-8 my-auto py-8">
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