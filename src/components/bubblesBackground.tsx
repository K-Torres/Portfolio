import "../styles/bubblesBackground.css";

const BubblesBg = () => {
    function randomNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    return <>
        <div className="block xl:hidden">
            {Array.from(Array(15), (_, index) => {
                return <span style={{ "--left-var": `${index * 6.6}%`, "--time-var": `${125 / randomNumber(5, 30)}s` } as React.CSSProperties} className="w-7 h-7 my-0 mx-2 rounded-full " key={index}></span>
            })}
        </div>
        <div className="hidden xl:block">
            {Array.from(Array(51), (_, index) => {
                return <span style={{ "--left-var": `${index * 2}%`, "--time-var": `${125 / randomNumber(5, 30)}s` } as React.CSSProperties} className="w-7 h-7 my-0 mx-2 rounded-full " key={index}></span>
            })}
        </div>
    </>
}

export default BubblesBg