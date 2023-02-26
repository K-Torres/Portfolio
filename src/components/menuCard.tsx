import anime from "animejs/lib/anime.es"
import { IMenuCard } from "../types/menuCard.type";
import { Page } from "../types/page.type";
import { PageNameContext } from "../context/page.context";
import '../styles/homeCard.css'
import { useContext, useState } from "react";

interface MenuCardProps {
    card: IMenuCard
}

const MenuCard = (props: MenuCardProps) => {

    console.log(props)
    const { setPage } = useContext(PageNameContext);

    const handleMouseEnterOrLeave = (mouseEntered: boolean) => {
        if (!mouseEntered) {
            anime.remove(`${".hover-target" + props.card.id}`)
            anime({
                targets: `${".hover-target" + props.card.id}`,
                translateY: 130,
                duration: 500,
                easing: 'easeInOutQuad',
                opacity: '0',
            });
            return
        }
        anime.remove(`${".hover-target" + props.card.id}`)
        anime({
            targets: `${".hover-target" + props.card.id}`,
            translateY: -130,
            duration: 500,
            easing: 'easeInOutSine',
            opacity: '1'
        });
    }

    const handlePageChange = () => {
        setPage(props.card.tittle as Page)
    }

    return <div onClick={handlePageChange} onMouseLeave={() => handleMouseEnterOrLeave(false)} onMouseEnter={() => handleMouseEnterOrLeave(true)}
        className="home-card bg-[rgba(255,255,255,0.1)] w-10/12 lg:w-3/4 xl:w-[490px] h-full xl:h-[46vh] 2xl:h-[38vh] rounded-2xl before:z-30
         relative hover:cursor-pointer hover:before:opacity-100">
        <div className="card-content rounded-2xl py-4 xl:py-0 xl:absolute inset-[1px] bg-[#171717] border-inherit m-[2px] z-20">
            <div className="flex flex-wrap justify-center">
                <div className="w-2/3 px-4">
                    <picture>
                        <source media="(min-width:650px)" srcSet={props.card.biggerimgPath} />
                        <img src={props.card.imgPath}
                            alt={props.card.tittle} className="image shadow w-full rounded-lg grayscale h-auto align-middle border-none mt-4" />
                    </picture>
                </div>
            </div>

            <div className={`px-8 lg:px-10 mt-2 xl:mt-2 2xl:mt-3 flex flex-col xl:relative ${props.card.id === 1 ? "pb-6" : ""} `}>
                <p className="text-white text-lg md:text-4xl lg:text-xl font-bold "> {props.card.tittle}</p>
                <p className={`text-muted font-medium mt-2 text-sm md:text-lg hidden xl:block xl:absolute xl:-bottom-48
                   xl:opacity-0 ${'hover-target' + props.card.id}`}> {props.card.subTittle}</p>
                <p className={`text-muted font-medium mt-1 text-sm md:text-lg xl:hidden`}> {props.card.subTittle}</p>
            </div>
        </div>
    </div>  
}

export default MenuCard