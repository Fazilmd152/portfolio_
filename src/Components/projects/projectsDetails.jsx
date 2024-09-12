import React from 'react'
import p1 from '../../Assets/ecommerce-websites.jpg'
//data-aos="fade-up"
const ProjectsDetails = () => {
  return (
    <div className="md:mb-20 mt-5 project overflow-hidden h-fit group "
    >        
    <h1 className='text-xl  mb-1 font-medium md:hidden'>E-commerce website</h1>

           <div className="relative ">
           <img src={p1} alt="" className='rounded-lg md:group-hover:scale-110  transition duration-300 ease-in-out'/>

           <p className=' project-overflow'>MERN stack e-commerce website with dynamic user interface and responsive layouts.</p>

           </div>
                

                <h1 className='text-2xl mt-5 mb-1 font-medium hidden md:block'>E-commerce website</h1>

                <p className=' md:hidden mt-1 text-xs'>MERN stack e-commerce website with dynamic user interface and responsive layouts.</p>

                <div className="flex gap-2 mt-1 md:gap-5 md:mt-5">
                    <button className='button bg-blue-500 hover:bg-blue-400 active:bg-blue-700' >Live demo</button>
                    <button 
             className='button bg-black hover:bg-[rgba(1,0,0,0.85)]  active:bg-gray-600 active:text-white'>GitHub repository</button>
                </div>
            </div>
  )
}

export default ProjectsDetails