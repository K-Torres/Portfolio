import { useContext } from 'react';
import BubblesBg from "./components/bubblesBackground";
import Menu from "./components/menu";
import { PageNameContext } from "./context/page.context";
import { ENUM_PAGES } from "./types/pagesEnum.type";

function App() {
  const {page, setPage} = useContext(PageNameContext);
  console.log(page)

  return (
    <div className="App overflow-hidden font-sans bg-[#141414] min-h-screen flex justify-center place-content-center relative">
      <BubblesBg></BubblesBg>
      <Menu></Menu>
      <>{ENUM_PAGES[page]}</>
    </div>
  )
}

export default App
