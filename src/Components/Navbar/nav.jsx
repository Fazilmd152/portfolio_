import { useState } from "react"
import ToggleMenu from "./toggleMenu"

function Nav() {
    const [toggleMenu, setToggleMenu] = useState(false)

    

    return (
        <>
            <nav className="sticky top-0 flex justify-between items-center px-5 py-4  bg-[#4831d4] text-white z-10">
                <h1>Md fazil</h1>
                <div className="hidden md:block">
                    <ul className="flex ">
                        <li>Home</li>
                        <li>About Me</li>
                        <li>Skills</li>
                        <li>Projects </li>
                        <li>Contact</li>
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