import { useEffect, useRef, useState } from "react";
import HomeCard from "../components/homeCard";
import MenuItems from "../data/menuInfo.json";
import "../styles/menu.css";
import { HomeCardI } from "../types/homeCard.type";

function App() {

    const cardsContainer = useRef<HTMLDivElement>(null)
    useEffect(() => {
        cardsContainer.current?.addEventListener("mousemove", handleOnMouseMove)
    }, [])

    const handleOnMouseMove = (e: MouseEvent) => {
        for (const card of document.getElementsByClassName("home-card")) {
            const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
            (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
        };
    }

    return (
        <div ref={cardsContainer} className='cards-container w-[calc(100vw)] xl:w-auto grid grid-cols-1 xl:grid-cols-2 gap-4 h-[95vh] xl:h-[82vh] m-auto justify-items-center overflow-auto xl:overflow-hidden'>
            {
                MenuItems.map((item: HomeCardI) => {
                    return <HomeCard card={item} key={item.id}></HomeCard>
                })
            }
        </div>
    )
}

export default App
