import anime from "animejs/lib/anime.es"
import '../styles/homeCard.css'

interface HomeCardProps {
    showImage: boolean,
    number: number
}

const HomeCard = (props: HomeCardProps) => {
    const handleMouseEnterOrLeave = (mouseEntered: boolean) => {
        if (!mouseEntered) {
            anime.remove(`${".hover-target" + props.number}`)
            anime({
                targets: `${".hover-target" + props.number}`,
                translateY: 130,
                duration: 500,
                easing: 'easeInOutQuad',
                opacity: '0'
            });
            return
        }
        anime.remove(`${".hover-target" + props.number}`)
        anime({
            targets: `${".hover-target" + props.number}`,
            translateY: -130,
            duration: 500,
            easing: 'easeInOutSine',
            opacity: '1'
        });
    }

    return <div onMouseLeave={() => handleMouseEnterOrLeave(false)} onMouseEnter={() => handleMouseEnterOrLeave(true)}
        className="home-card bg-[rgba(255,255,255,0.1)] w-10/12 lg:w-3/4 xl:w-[490px] h-full xl:h-[40vh] rounded-2xl before:z-30
         relative hover:cursor-pointer hover:before:opacity-100">
        <div className="card-content rounded-2xl absolute inset-[1px] bg-[#171717] border-inherit m-[2px] z-20">
            <div className="flex flex-wrap justify-center">
                <div className="w-1/3 lg:w-1/4 xl:w-1/3 px-4">
                    <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
                        alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none mt-8" />
                </div>
            </div>

            <div className="px-8 lg:px-16 mt-5 xl:mt-12 xl:relative">
                <p className="text-white text-lg md:text-4xl lg:text-2xl font-bold "> Who am I?</p>
                <p className={`text-muted font-medium mt-2 text-sm md:text-lg xl:absolute xl:-bottom-56 xl:opacity-0 ${'hover-target' + props.number}`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
        </div>
    </div>
}

export default HomeCard