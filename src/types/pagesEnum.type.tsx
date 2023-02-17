import About from "../components/about";
import Contact from "../components/contact";
import ProfesionalProfile from "../components/profesional-profile";
import Projects from "../components/projects";
import Menu from "../components/menu";

const ENUM_PAGES = {
  About: <About></About>,
  Projects: <Projects></Projects>,
  "Profesional profile": <ProfesionalProfile></ProfesionalProfile>,
  Contact: <Contact></Contact>,
  Menu: <Menu></Menu>
};


const EnumPages = () => ENUM_PAGES[""];