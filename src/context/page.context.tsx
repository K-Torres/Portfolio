import React, { createContext, SetStateAction, useState, Dispatch } from 'react';

interface IPageContext {
    page: string;
    setPage: Dispatch<SetStateAction<string>>;
  }

export const PageNameContext = createContext<IPageContext>({page: "Menu", setPage: () => {}});

interface Props {
    children: React.ReactNode;
}

export const PageNameProvider: React.FC<Props> = ({ children }) => {
    const [page, setPage] = useState<string>("Menu")
    
  return (
    <PageNameContext.Provider value={{page: page, setPage: setPage}}>
      {children}
    </PageNameContext.Provider>
  );
};