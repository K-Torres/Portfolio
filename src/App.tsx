import './App.css'
import HomeCard from "./components/homeCard";

function App() {

  return (
    <div className="App font-sans bg-[#0b0a09] min-h-screen flex justify-center place-content-center">
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-4 h-[95vh] xl:h-[90vh] m-auto justify-items-center overflow-auto xl:overflow-hidden'>
        <HomeCard showImage={true} number={1}></HomeCard>
        <HomeCard showImage={false} number={2}></HomeCard>
        <HomeCard showImage={false} number={3}></HomeCard>
        <HomeCard showImage={false} number={4}></HomeCard>
      </div>
    </div>
  )
}

export default App
