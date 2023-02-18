import "../styles/profesional-profile.css";

const ProfesionalProfile = () => {
    return <div className="w-full xl:w-1/2 z-10 max-h-screen scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-300">
        <div className="w-full flex justify-center gap-8 ">
            <div className="text-white flex flex-col align-middle w-3/4 text-md lg:text-lg">
                <h1 className="text-2xl xl:text-3xl 2xl:text-5xl font-extralight mt-4 2xl:mt-1 text-center"> SOFTWARE DEVELOPER </h1>
                <p className="underline-text w-auto self-center text-2xl font-medium mt-8 relative italic">Experience</p>
                <div className="flex flex-col md:flex-row justify-between mt-6 text-muted">
                    <p className="my-3 flex gap-1 "><p className="font-semibold text-white">Full-Stack Developer </p> - Double V Partners</p>
                    <p>Sep 2021 – Present</p>
                </div>

                <ul className="list-disc text-muted mx-5 my-3">
                    <li>
                        Worked on the front-end development in cross-functional teams on web applications developed on
                        micro-services architectural base
                    </li>
                    <li>
                        Led a 5 people cross functional team to develop a Next.js web application using kml files and
                        geolocation
                    </li>
                    <li>
                        Worked directly with clients to create an identity recognize algorithm in affi.net Backoffice website
                    </li>
                    <li>
                        Collaborated with product team members to implement new feature developments
                    </li>
                    <li>
                        Optimization, debugging and implementation of unit tests using Jest and husky hooks
                    </li>
                </ul>
                <hr></hr>
                <div className="flex flex-col md:flex-row justify-between mt-6 text-muted">
                    <p className="my-3 flex gap-1 "><p className="font-semibold text-white">Frontend Developer </p> - Mentor360</p>
                    <p>Sep 2021 – Present</p>
                </div>

                <ul className="list-disc text-muted mx-5 my-3">
                    <li>
                        Optimized, debugged and implemented unit tests using Jest and husky hooks for an ICBF web app
                    </li>
                    <li>
                        Carried out quality assurance tests to discover errors and optimize usability
                    </li>
                    <li>
                        Cooperate with designers to create clean interfaces
                    </li>
                </ul>
                <hr></hr>
                <div className="flex flex-col md:flex-row justify-between mt-6 text-muted">
                    <p className="my-3 flex gap-1 "><p className="font-semibold text-white">Frontend Developer </p> -  Be on Dev </p>
                    <p>Sep 2021 – Present</p>
                </div>

                <ul className="list-disc text-muted mx-5 my-3">
                    <li>
                        Developed responsive web applications using Angular, Serverless and aws

                    </li>
                    <li>
                        Identified improvements to the platform, including UI and UX details

                    </li>
                    <li>
                        Collaborated with product team members to implement new feature developments
                    </li>
                </ul>
                <p className="underline-text w-auto self-center text-2xl font-medium mt-2 relative italic">Skills - Certifications</p>

                <p className="text-muted mx-5 my-3">
                    React JS, Angular, Typescript, Redux, Node, Python, Bootstrap, Tailwind, Jira, TDD
                </p>

                <p className="text-muted mx-5 my-3">
                    <p className="text-white inline">Certifications: </p>
                    Algorithms complexity and Big O Notation,
                    SOLID Principles and Clean
                    Code,
                    Testing React with Jest and React Testing
                    Library,
                    Angular Expert Course,
                    Professional Scrum Course
                </p>
            </div>
        </div>
    </div>
}

export default ProfesionalProfile