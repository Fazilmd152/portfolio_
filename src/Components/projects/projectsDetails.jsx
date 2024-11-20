import React from 'react'

const ProjectsDetails = ({ project }) => {
  return (
    <>
      <div className="md:mb-20 mt-5 project overflow-hidden h-fit group "
      >
        <h1 className='text-xl  mb-1 font-medium md:hidden'>{project.name}</h1>
        <div className="relative ">
          <img src={project.pic} alt="" className='rounded-lg h-32 object-cover md:group-hover:scale-110  transition duration-300 ease-in-out ' />
          <p className=' project-overflow'>{project.desc}</p>
        </div>
        <h1 className='text-2xl mt-5 mb-1 font-medium hidden md:block'>{project.name}</h1>
        <p className=' md:hidden mt-1 text-xs'>{project.desc}</p>
        <div className="flex gap-2 mt-1 md:gap-5 md:mt-5">
          <button className='button bg-blue-500 hover:bg-blue-400 text-sm active:bg-blue-700' ><a href={project.link} target='blank'>Live demo</a></button>
          <button
            className='button bg-black hover:bg-[rgba(1,0,0,0.85)]  active:bg-gray-600 active:text-white text-sm'>GitHub repository</button>
        </div>
      </div>
    </>



  )
}

export default ProjectsDetails