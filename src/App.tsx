import BubblesBg from "./components/bubblesBackground";
import PagesWrapper from "./components/pagesWrapper";
import GoBackButton from "./components/goBackButton";

function App() {

  return (
    <div className="App overflow-hidden font-sans bg-[#141414] min-h-screen flex justify-center place-content-center relative">
      <GoBackButton></GoBackButton>
      <BubblesBg></BubblesBg>
      <PagesWrapper></PagesWrapper>
    </div>
  )
}

export default App
