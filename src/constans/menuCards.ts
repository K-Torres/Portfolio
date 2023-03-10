import AboutPath from "../assets/images/menuCards/about.webp";
import AboutBiggerPath from "../assets/images/menuCards/about_640.webp";
import ContactPath from "../assets/images/menuCards/contact.webp";
import ContactBiggerPath from "../assets/images/menuCards/contact_640.webp";
import ProfesionalPath from "../assets/images/menuCards/profesional-profile.webp";
import ProfesionalBiggerPath from "../assets/images/menuCards/profesional-profile_640.webp";
import ProjectsPath from "../assets/images/menuCards/projects.webp";
import ProjectsBiggerPath from "../assets/images/menuCards/projects_640.webp";

export const MENU_CARDS = [
    {
        id: 1,
        tittle: "About",
        subTittle: "Hi! I'm Johan Torres, a frontend developer based in Medellín, Colombia. I love... yes, you guessed it, I love coding. 😊",
        imgPath: AboutPath,
        biggerimgPath: AboutBiggerPath
    },
    {
        id: 2,
        tittle: "Profesional profile",
        subTittle: "Here I'll show you my work experience and certificates. 📜",
        imgPath: ProfesionalPath,
        biggerimgPath: ProfesionalBiggerPath
    },
    {
        id: 3,
        tittle: "Projects",
        subTittle: "Some of the projects I work on in my spare time. Do you want to see them? 👀",
        imgPath: ProjectsPath ,
        biggerimgPath: ProjectsBiggerPath
    },
    {
        id: 4,
        tittle: "Contact",
        subTittle: "If you want to tell me something. I'll be waiting for your mail. 📧",
        imgPath: ContactPath,
        biggerimgPath: ContactBiggerPath
    }
]
