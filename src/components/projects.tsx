import { useState } from "react";

const Projects = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <Carousel></Carousel>
        </div>
    );
};

const Carousel = () => {
    const images = ["", "", ""];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translateValue, setTranslateValue] = useState(0);

    const nextSlide = () => {
        if (currentIndex === images.length - 1) {
            setCurrentIndex(0);
            setTranslateValue(0);
        } else {
            setCurrentIndex(currentIndex + 1);
            setTranslateValue(translateValue - 100);
        }
    };

    const prevSlide = () => {
        if (currentIndex === 0) {
            setCurrentIndex(images.length - 1);
            setTranslateValue(-100 * (images.length - 1));
        } else {
            setCurrentIndex(currentIndex - 1);
            setTranslateValue(translateValue + 100);
        }
    };

    return (
        <div className="relative overflow-hidden w-[90vw] lg:w-2/4 rounded-3xl">
            <div
                className="flex w-full rounded-3xl"
                style={{
                    transform: `translateX(${translateValue}%)`,
                    transition: "transform ease-out 0.45s",
                }}
            >
                {images.map((image, index) => (
                    <>
                        <img
                            key={index}
                            className="bg-cover bg-no-repeat w-full h-[75vh] flex-shrink-0 cursor-pointer z-10 opacity-100 hover:opacity-40 transition duration-300 ease-in-out"
                            style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                            src="/src/assets/images/project12.png"
                        />
                        <div className={`absolute w-full top-1/2 -translate-y-1/2 cursor-pointer`} style={{ right: `-${(index) * 100}%` }}>
                            <div className="w-3/4 m-auto">
                                <p className="text-white font-light text-2xl text-center z-0">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, iusto
                                    fugiat. Error nobis libero{" "}
                                </p>
                            </div>
                        </div>
                        <div className={`absolute w-full top-[calc(100%-74px)] cursor-pointer z-20`} style={{ right: `-${(index) * 100}%` }}>
                            <a className="flex justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24">
                                    <path fill="#f5f5f5" d="M12 0a12 12 0 0 0-3.819 23.4c.6.1.819-.262.819-.581 0-.288-.012-1.051-.012-2.062-3.006.651-3.637-1.45-3.637-1.45a2.864 2.864 0 0 0-1.2-1.575c-.975-.662.075-.649.075-.649a2.266 2.266 0 0 1 1.65 1.113 2.313 2.313 0 0 0 3.144.9 2.326 2.326 0 0 1 .687-1.425c-2.406-.275-4.938-1.203-4.938-5.35a4.194 4.194 0 0 1 1.125-2.925 3.901 3.901 0 0 1 .105-2.875s.912-.292 2.988 1.113a10.366 10.366 0 0 1 5.475 0c2.076-1.405 2.988-1.113 2.988-1.113a3.901 3.901 0 0 1 .105 2.875 4.194 4.194 0 0 1 1.125 2.925c0 4.156-2.538 5.075-4.95 5.35a2.626 2.626 0 0 1 .75 2.05c0 1.475-.012 2.663-.012 3.013 0 .325.212.7.825.575A12 12 0 0 0 12 0z" />
                                </svg>

                            </a>
                        </div>
                    </>
                ))}

            </div>
            <button
                className="absolute top-1/2 -translate-y-1/2 left-0 cursor-pointer"
                onClick={prevSlide}
            >
                <svg
                    className="w-12"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                </svg>
            </button>
            <button
                className="absolute top-1/2 -translate-y-1/2 right-0 cursor-pointer"
                onClick={nextSlide}
            >
                <svg
                    className="w-12"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                </svg>
            </button>
        </div>
    );
};

export default Projects;
