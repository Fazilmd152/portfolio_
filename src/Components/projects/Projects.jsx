import React from 'react'
import ProjectsDetails from './projectsDetails'
//
const Projects = () => {
  return (
    <section className='px-5 md:p-10 md:py-20 mt-10 md:h-[100vh]' id='projects'>
        <h1 className='text-4xl font-bold border-b-4 md:mb-3 border-pink-300 w-fit pb-1' >Projects</h1>

        <div className="grid grid-cols-2 text-sm gap-3 md:flex md:gap-6" data-aos="fade-up">
            <ProjectsDetails/>
            
            
            <ProjectsDetails/>
        </div>
    </section>
  )
}

export default Projects