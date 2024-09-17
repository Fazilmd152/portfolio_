import React from 'react'
import p1 from '../../Assets/Projects/nostra.png'
import p2 from '../../Assets/Projects/greenden.png'
//data-aos="fade-up"
const ProjectsDetails = () => {
  return (
    <>
    <div className="md:mb-20 mt-5 project overflow-hidden h-fit group "
    >        
    <h1 className='text-xl  mb-1 font-medium md:hidden'>E-commerce website</h1>

           <div className="relative ">
           <img src={p1} alt="" className='rounded-lg md:h-[25vh] object-cover md:group-hover:scale-110  transition duration-300 ease-in-out '/>

           <p className=' project-overflow'>Simple e-commerce website with dynamic user interface and responsive layouts  </p>

           </div>
                

                <h1 className='text-2xl mt-5 mb-1 font-medium hidden md:block'>E-commerce website</h1>

                <p className=' md:hidden mt-1 text-xs'>Simple e-commerce website with dynamic user interface and responsive layouts.</p>

                <div className="flex gap-2 mt-1 md:gap-5 md:mt-5">
                    <button className='button bg-blue-500 hover:bg-blue-400 active:bg-blue-700' ><a href='https://fazilmd152.github.io/Nostra/' target='blank'>Live demo</a></button>
                    <button 
             className='button bg-black hover:bg-[rgba(1,0,0,0.85)]  active:bg-gray-600 active:text-white'>GitHub repository</button>
                </div>
            </div>



        {/* second project */}
        <div className="md:mb-20 mt-5 project overflow-hidden h-fit group "
    >        
    <h1 className='text-xl  mb-1 font-medium md:hidden'>E-commerce website</h1>

           <div className="relative ">
           <img src={p2} alt="" className='rounded-lg md:h-[25vh] object-cover md:group-hover:scale-110  transition duration-300 ease-in-out '/>

           <p className=' project-overflow'>Simple plants selling website desighned by using Tailwind CSS.</p>

           </div>
                

                <h1 className='text-2xl mt-5 mb-1 font-medium hidden md:block'>E-commerce website</h1>

                <p className=' md:hidden mt-1 text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, minus!</p>

                <div className="flex gap-2 mt-1 md:gap-5 md:mt-5">
                    <button className='button bg-blue-500 hover:bg-blue-400 active:bg-blue-700' ><a href='https://fazilmd152.github.io/Greenden-Tailwindcss/' target='blank'>Live demo</a></button>
                    <button 
             className='button bg-black hover:bg-[rgba(1,0,0,0.85)]  active:bg-gray-600 active:text-white'>GitHub repository</button>
                </div>
            </div>
            </>


     
  )
}

export default ProjectsDetails