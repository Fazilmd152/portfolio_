import { useEffect, useState } from "react"
import ToggleMenu from "./toggleMenu"

function Nav() {
    const [toggleMenu, setToggleMenu] = useState(false)

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= document.querySelector('#about').offsetTop - 100) {
              setScrolled(true);
            } else {
              setScrolled(false);
            }
          };
          
          
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  

    //fixed top-0 left-0 w-full     

    return (





        <>
            <nav className={` ${scrolled ? 'bg-white shadow-sm' : 'bg-[#4831d4] text-white '}  sticky top-0 flex 
            justify-between items-center px-5 py-4  z-10`}>

                <h1 className="font-bold">Portfolio</h1>
                <div className="hidden md:block">
                    <ul className="flex ">
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a> </li>
                        <li><a href="#resume">Resume</a> </li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setToggleMenu(true)}><i class="fa-solid fa-bars fa-lg   "></i></button>
                </div>
            </nav>

            <ToggleMenu  toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/> 

        </>







    )
}


export default Nav



//


// /* <nav className="flex  justify-between shadow-md">
//         <h1>Md fazil</h1>
//         <ul className="flex">
//         <li>Home</li>
//             <li>About Me</li>
//             <li>Skills</li>
//             <li>Projects</li>
//             <li>Contacts</li>
//         </ul>
//      </nav> */


/*  */
//