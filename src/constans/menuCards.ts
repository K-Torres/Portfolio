import AboutPath from "../assets/images/about.webp";
import AboutBiggerPath from "../assets/images/about_640.webp";
import ContactPath from "../assets/images/contact.webp";
import ContactBiggerPath from "../assets/images/contact_640.webp";
import ProfesionalPath from "../assets/images/profesional-profile.webp";
import ProfesionalBiggerPath from "../assets/images/profesional-profile_640.webp";
import ProjectsPath from "../assets/images/projects.webp";
import ProjectsBiggerPath from "../assets/images/projects_640.webp";

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
        subTittle: "Here I'll show you my experience and certificates. Simply click here. 👆",
        imgPath: ContactPath,
        biggerimgPath: ContactBiggerPath
    },
    {
        id: 3,
        tittle: "Projects",
        subTittle: "Some of the projects I work on in my spare time. Do you want to see them? 👀",
        imgPath: ProfesionalPath,
        biggerimgPath: ProfesionalBiggerPath
    },
    {
        id: 4,
        tittle: "Contact",
        subTittle: "If you want to tell me something. I'll be waiting for your mail. 📧",
        imgPath: ProjectsPath,
        biggerimgPath: ProjectsBiggerPath
    }
]
