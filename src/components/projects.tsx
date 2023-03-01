import { useState } from "react";
import { PROJECTS } from "../constans/projects";

const Projects = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <Carousel></Carousel>
        </div>
    );
};

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translateValue, setTranslateValue] = useState(0);

    const nextSlide = () => {
        if (currentIndex === PROJECTS.length - 1) {
            setCurrentIndex(0);
            setTranslateValue(0);
        } else {
            setCurrentIndex(currentIndex + 1);
            setTranslateValue(translateValue - 100);
        }
    };

    const prevSlide = () => {
        if (currentIndex === 0) {
            setCurrentIndex(PROJECTS.length - 1);
            setTranslateValue(-100 * (PROJECTS.length - 1));
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
                {PROJECTS.map((project, index) => (
                    <>
                        <img
                            key={index}
                            className="bg-cover bg-no-repeat w-full h-[75vh] object-cover flex-shrink-0 z-10 opacity-100 hover:opacity-40 transition duration-300 ease-in-out"
                            style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                            src={project.biggerimgPath}
                        />

                        <div className={`absolute w-full top-[10%] -translate-y-1/2 cursor-pointer`} style={{ right: `-${(index) * 100}%` }}>
                            <div className="w-3/4 m-auto">
                                <p className="text-white font-bold text-2xl text-center z-0">
                                    {project.name}
                                </p>
                            </div>
                        </div>
                        <div className={`absolute w-full top-[calc(100%-74px)] cursor-pointer z-20`} style={{ right: `-${(index) * 100}%` }}>
                            <div className="flex justify-center gap-5">
                                <a href={project.gitbubRepoUrl} target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                                        <path fill="#f5f5f5" d="M12 0a12 12 0 0 0-3.819 23.4c.6.1.819-.262.819-.581 0-.288-.012-1.051-.012-2.062-3.006.651-3.637-1.45-3.637-1.45a2.864 2.864 0 0 0-1.2-1.575c-.975-.662.075-.649.075-.649a2.266 2.266 0 0 1 1.65 1.113 2.313 2.313 0 0 0 3.144.9 2.326 2.326 0 0 1 .687-1.425c-2.406-.275-4.938-1.203-4.938-5.35a4.194 4.194 0 0 1 1.125-2.925 3.901 3.901 0 0 1 .105-2.875s.912-.292 2.988 1.113a10.366 10.366 0 0 1 5.475 0c2.076-1.405 2.988-1.113 2.988-1.113a3.901 3.901 0 0 1 .105 2.875 4.194 4.194 0 0 1 1.125 2.925c0 4.156-2.538 5.075-4.95 5.35a2.626 2.626 0 0 1 .75 2.05c0 1.475-.012 2.663-.012 3.013 0 .325.212.7.825.575A12 12 0 0 0 12 0z" />
                                    </svg>
                                </a>
                                <a href={project.webUrl} target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                                        <path fill="#f5f5f5" d="M432 48H208c-17.7 0-32 14.3-32 32V96H128V80c0-44.2 35.8-80 80-80H432c44.2 0 80 35.8 80 80V304c0 44.2-35.8 80-80 80H416V336h16c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32zM48 448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V256H48V448zM64 128H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64z" />
                                    </svg>
                                </a>
                            </div>


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
