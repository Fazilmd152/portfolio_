import { useState } from "react"
import { style1, style2 } from "./styleVariables"


function ToggleMenu({ toggleMenu, setToggleMenu }) {

   



    return (
        
            <div className={toggleMenu?style2:style1}>

                <div className="relative flex py-14 flex-col gap-5  items-center ">
                    <button onClick={()=> setToggleMenu(false)}>
                        <i class="fa-solid fa-x fa-lg absolute top-7 right-6 "></i>
                    </button>
                    <a href="">Home</a>
                    <a href="">About Me</a>
                    <a href="">Skills</a>
                    <a href="">Projects</a>
                    <a href="">Contact</a>
                </div>

            </div>
       


    )
}

export default ToggleMenu