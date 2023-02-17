import React, { createContext, SetStateAction, useState, Dispatch } from 'react';
import { Page } from "../types/page.type";

interface IPageContext {
    page: Page;
    setPage: Dispatch<SetStateAction<Page>>;
}

export const PageNameContext = createContext<IPageContext>({ page: "Menu", setPage: () => { } });

interface Props {
    children: React.ReactNode;
}

export const PageNameProvider: React.FC<Props> = ({ children }) => {
    const [page, setPage] = useState<Page>("Menu")

    return (
        <PageNameContext.Provider value={{ page: page, setPage: setPage }}>
            {children}
        </PageNameContext.Provider>
    );
};