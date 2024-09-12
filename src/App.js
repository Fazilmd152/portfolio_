import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Hero from './Components/Hero section/hero';
import Nav from './Components/Navbar/nav';
import AboutME from './Components/about section/AboutMe';
import Skills from './Components/Skills/skills';
import Projects from './Components/projects/Projects';
import Resume from './Components/resume/resume';
import Contact from './Components/contacts/Contact';

function App() {
  return (
    <BrowserRouter>


    <div className="">
    <Nav/>
    <Hero/>
    <AboutME/>
    <Skills/>
    <Projects/>
    <Resume/>
    <Contact/>
   </div>


    </BrowserRouter>
  );
}

export default App;
