import React from 'react'
import ProjectsDetails from './projectsDetails'

const Projects = () => {
  return (
    <section className='p-10'>
        <h1 className='text-4xl font-bold border-b-4 mb-3 border-pink-300 w-fit pb-1'>Projects</h1>

        <div className="md:flex gap-6">
            <ProjectsDetails/>
            <ProjectsDetails/>
            <ProjectsDetails/>
        </div>
    </section>
  )
}

export default Projects