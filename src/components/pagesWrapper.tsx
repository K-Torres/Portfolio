
import { useContext } from 'react';
import { PageNameContext } from "../context/page.context";
import { ENUM_PAGES } from "../types/pagesEnum.type";

const EnumPages = () => {
    const { page } = useContext(PageNameContext);

    return (
        <>
            {ENUM_PAGES[page]}
        </>
    )
}

export default EnumPages