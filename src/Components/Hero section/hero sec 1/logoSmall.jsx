import React from 'react'
import { Link } from 'react-router-dom'
//style={{ "color": "#00fd29" }}
const LogoSmallScreen = () => {
  return (
    <div className="flex md:hidden  mt-10 p-2  w-full gap-5 justify-between text-center text-white">

<div className="">
<Link to='https://wa.me/7397565259?text=Hello !'>
                
                <button className=''>
                    <i class="fa-brands fa-whatsapp text-green-500 bg-white text-[3vh] p-2 py-1 rounded-md" ></i>
                </button>
                <p className=''> whatsapp</p>
            
        </Link>
</div>
           <div className="">
           <Link to='https://github.com/Fazilmd152'>
                
                <button className=' '>
                    <i class="fa-brands fa-github text-green-500 bg-white text-[3vh] p-2 py-1 rounded-md" style={{ "color": "black" }}></i>
                </button>
                <p className=''> <i class='fa-brands fa-git   text-orange-600'></i> </p>
            
        </Link>
           </div>

            <div className="">
            <Link to='https://linkedin.com/in/mohamed-fazil-232bab308'>
               
               <button className=' '>
                   <i class="fa-brands fa-linkedin text-green-500 bg-white text-[3vh] p-2 py-1 rounded-md" style={{ "color": "#02cafd" }}></i>
               </button>
               <p className=' '>Linkedin</p>
           
       </Link>
            </div>
          

          
</div>
  )
}

export default LogoSmallScreen