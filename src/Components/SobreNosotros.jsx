"use client";
import React from "react";
import Image from "next/image";


const SobreNosotros = () => {
  
  return (
    <div class="swiffy-slider slider-item-show2 slider-item-reveal slider-nav-outside slider-nav-round slider-nav-visible slider-indicators-outside slider-indicators-round slider-indicators-dark slider-nav-animation slider-nav-animation-fadein slider-item-first-visible">
    <ul class="slider-container py-4">
        <li class="slide-visible">
            <div class="card shadow h-100">
                <div class="ratio ratio-16x9">
                <Image
                        src="/img/otra-1.jpg"
                        className=""
                        width={250}
                        height={250}
                        alt="Logo-Footer"
                    />
                </div>
            </div>
        </li>
        <li class="slide-visible">
            <div class="card shadow h-100">
                <div class="ratio ratio-16x9">
                <Image
                        src="/img/otra-1.jpg"
                        className=""
                        width={250}
                        height={250}
                        alt="Logo-Footer"
                    />
                </div>
                <div class="card-body p-3 p-xl-5">
                    <h3 class="card-title h5">Tranquil locations far away</h3>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </li>
        <li>
            <div class="card shadow h-100">
                <div class="ratio ratio-16x9">
                <Image
                        src="/img/otra-1.jpg"
                        className=""
                        width={250}
                        height={250}
                        alt="Logo-Footer"
                    />
                </div>
                <div class="card-body p-3 p-xl-5">
                    <h3 class="card-title h5">Road trip in the wilderness</h3>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </li>
        <li>
            <div class="card shadow h-100">
                <div class="ratio ratio-16x9">
                <Image
                        src="/img/otra-1.jpg"
                        className=""
                        width={250}
                        height={250}
                        alt="Logo-Footer"
                    />
                </div>
                <div class="card-body  p-3 p-xl-5">
                    <h3 class="card-title h5">To the hidden lake side</h3>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </li>
        <li>
            <div class="card shadow h-100">
                <div class="ratio ratio-16x9">
                <Image
                        src="/img/otra-1.jpg"
                        className=""
                        width={250}
                        height={250}
                        alt="Logo-Footer"
                    />
                </div>
                <div class="card-body  p-3 p-xl-5">
                    <h3 class="card-title h5">Up, up, up in the Air</h3>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </li>
        <li>
            <div class="card shadow h-100">
                <div class="ratio ratio-16x9">
                <Image
                        src="/img/otra-1.jpg"
                        className=""
                        width={250}
                        height={250}
                        alt="Logo-Footer"
                    />
                </div>
                <div class="card-body  p-3 p-xl-5">
                    <h3 class="card-title h5">A climbers birds view</h3>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </li>
    </ul>

    <button type="button" class="slider-nav" aria-label="Go left"></button>
    <button type="button" class="slider-nav slider-nav-next" aria-label="Go left"></button>

    <div class="slider-indicators">
        <button class="active" aria-label="Go to slide"></button>
        <button aria-label="Go to slide"></button>
        <button aria-label="Go to slide"></button>
        <button aria-label="Go to slide"></button>
        <button aria-label="Go to slide"></button>
    </div>
</div>
  );
};

export default SobreNosotros