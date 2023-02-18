import { useEffect, useRef, useState } from "react";
import MenuCard from "./menuCard";
import MenuItems from "../data/menuInfo.json";
import "../styles/menu.css";
import { IMenuCard } from "../types/menuCard.type";

function App() {

    const cardsContainer = useRef<HTMLDivElement>(null)
    useEffect(() => {
        cardsContainer.current?.addEventListener("mousemove", handleOnMouseMove)
    }, [])

    const handleOnMouseMove = (e: MouseEvent) => {
        console.log("mouse moved!")
        for (const card of document.getElementsByClassName("home-card")) {
            const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
            (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
        };
    }

    return (
        <div ref={cardsContainer} className='cards-container w-[calc(100vw)] xl:w-auto grid grid-cols-1 xl:grid-cols-2
         gap-4 h-[95vh] lg:h-[90vh] xl:h-[82vh] m-auto justify-items-center overflow-auto xl:overflow-hidden'>
            {
                MenuItems.map((item: IMenuCard) => {
                    return <MenuCard card={item} key={item.id}></MenuCard>
                })
            }
        </div>
    )
}

export default App
