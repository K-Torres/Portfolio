import { useState } from "react"
import '../styles/projects.css';

const Projects = () => {
    return <div className="w-full flex justify-center items-center">
        <Carousel></Carousel>
    </div>
}

const Carousel = () => {
    const images = ["", "", ""]
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
        <div className="relative overflow-hidden w-2/4 rounded-3xl">
            <div className="first absolute w-full h-full bg-purple-900 z-50 bottom-1/2 -left-1/2"></div>
            <div
                className="flex w-full rounded-3xl"
                style={{
                    transform: `translateX(${translateValue}%)`,
                    transition: "transform ease-out 0.45s"
                }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        className="bg-cover bg-no-repeat w-full h-[75vh] flex-shrink-0 "
                        src="/src/assets/images/project1.png"
                    />
                ))}
            </div>
            <button className="absolute top-1/2 -translate-y-1/2 left-0 cursor-pointer" onClick={prevSlide}>
                <svg className="w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                </svg>
            </button>
            <button className="absolute top-1/2 -translate-y-1/2 right-0 cursor-pointer" onClick={nextSlide}>
                <svg className="w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                </svg>
            </button>
        </div>
    );
};

export default Projects