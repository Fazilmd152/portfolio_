import React from 'react'
import { Link } from 'react-router-dom'
import whatsapp from '../../../Assets/logos/whatsapp2.png'

const Logos = () => {


    return (
        <div className="hidden  md:grid  w-fit mt-10  text-black gap-2">

            <Link to='https://wa.me/7397565259?text=Hello !'>
                <div className="px-2  rounded-md hover:bg-white flex align-middle items-center gap-2 transition delay-75  group">
                    <button className=' transition'>
                        <i class="fa-brands fa-whatsapp text-2xl" style={{ "color": "#00fd29" }}></i>
                    </button>
                    <p className='text-transparent transition delay-75 group-hover:text-black '>Chat me on whatsapp</p>
                </div>
            </Link>

            <Link to='https://github.com/Fazilmd152'>
                <div className="px-2  rounded-md hover:bg-white flex align-middle items-center gap-2 transition delay-75  group">
                    <button className=' transition'>
                        <i class="fa-brands fa-github text-2xl" style={{ "color": "black" }}></i>
                    </button>
                    <p className='text-transparent transition delay-75 group-hover:text-black '>My <i class='fa-brands fa-git text-transparent transition delay-75  group-hover:text-orange-600'></i> profile</p>
                </div>
            </Link>
            <Link to='https://linkedin.com/in/mohamed-fazil-232bab308'>
                <div className="px-2  rounded-md hover:bg-white flex align-middle items-center gap-2 transition delay-75  group">
                    <button className=' '>
                        <i class="fa-brands fa-linkedin text-2xl" style={{ "color": "#02cafd" }}></i>
                    </button>
                    <p className='text-transparent transition delay-75  group-hover:text-black '>Connect me in Linked<span className='font-bold'>.in</span></p>
                </div>
            </Link>

            {/* <Link to='https://github.com/Fazilmd152'>

                <button className=' px-1.5 py-1 rounded-full bg-white'>
                    <i class="fa-brands fa-github fa-xl" style={{ "color": "black" }}></i>
                </button>

            </Link> */}













        </div>
    )
}

export default Logos


//,'backgroundColor':'white','padding-top':'40%','padding-bottom':'40%','paddingLeft':'0','paddingRight':'0'
//                    <i class="fa-brands fa-square-whatsapp fa-xl" style={{ "color": "black" }}></i>


//                    <i class="fa-brands fa-square-github fa-xl" style={{ "color": "black" }}></i>



{/* <div className="px-2 w-fit py-0.5 rounded-full hover:rounded-md bg-white flex align-middle items-center gap-2 group">
  <button className='transition duration-300 ease-in-out group-hover:scale-110'>
  <i class="fa-brands fa-whatsapp text-2xl" style={{ "color": "#2ad249" }}></i>
</button>
<p className='opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out'>Chat me in whatsapp</p>
</div> */}
