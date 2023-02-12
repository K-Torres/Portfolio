import "../styles/bubblesBackground.css";

const BubblesBg = () => {
    function randomNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    return <>
        {Array.from(Array(50), (_, index) => {
            return <span style={{ "--left-var": `${index * 2}%`, "--time-var": `${125 / randomNumber(5, 30)}s` } as React.CSSProperties} className="w-7 h-7 my-0 mx-2 rounded-full bg-" key={index}></span>
        })}
    </>
}

export default BubblesBg