import React from 'react';
import Image from "next/image";
import Ticker from 'framer-motion-ticker';

const image1 = '/img/image-home-mobile.jpg';

function TickerSobreNos() {
    const images = [ image1 ];
    return (
        <div >
            <Ticker duration={5} >
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