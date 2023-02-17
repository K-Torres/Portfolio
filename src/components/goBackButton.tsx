import { useContext } from "react";
import { PageNameContext } from "../context/page.context";
import { Page } from "../types/page.type";

const GoBackButton = () => {

    const { page, setPage } = useContext(PageNameContext);

    const handlePageChange = () => {
        setPage("Menu")
    }

    if (page === "Menu") return

    return <button onClick={handlePageChange} className="z-50 flex flex-row absolute top-20 left-2 bg-transparent py-1 px-4 border-2 
    rounded-full border-white gap-2 items-center rotate-[271deg] transition-all duration-1000 ease-out hover:bg-gray-600 hover:scale-105">
        <p className="text-white font-semibold">Go back</p>
        <div className="w-4 h-4 fill-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
        </div>
    </button>
}

export default GoBackButton