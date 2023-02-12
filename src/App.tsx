import { useEffect, useRef } from "react"
import HomeCard from "./components/homeCard";
import BubblesBg from "./components/bubblesBackground";
import { Link, BrowserRouter } from "react-router-dom";
import "./styles/App.css";

function App() {

  const cardsContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    cardsContainer.current?.addEventListener("mousemove", handleOnMouseMove)
  }, [])

  const handleOnMouseMove = (e: MouseEvent) => {
    const rect = cardsContainer.current?.getBoundingClientRect()

    for (const card of document.getElementsByClassName("home-card")) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
      (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
    };
  }

  return (
    <div className="App overflow-hidden font-sans bg-[#141414] min-h-screen flex justify-center place-content-center relative">
      <BubblesBg></BubblesBg>
      <div ref={cardsContainer} className='cards-container grid grid-cols-1 xl:grid-cols-2 gap-4 h-[95vh] xl:h-[82vh] m-auto justify-items-center overflow-auto xl:overflow-hidden'>
        <BrowserRouter>
            <HomeCard showImage={true} number={1}></HomeCard>
            <HomeCard showImage={false} number={2}></HomeCard>
            <HomeCard showImage={false} number={3}></HomeCard>
            <HomeCard showImage={false} number={4}></HomeCard>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
