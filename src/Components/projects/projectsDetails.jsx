import React from 'react'
import p1 from '../../Assets/ecommerce-websites.jpg'
//data-aos="fade-up"
const ProjectsDetails = () => {
  return (
    <div className="mb-20 project overflow-hidden h-fit group"
    >

                <img src={p1} alt="" className='rounded-lg group-hover:scale-125  transition duration-300 ease-in-out'/>

                <h1 className='text-2xl mt-5 mb-1 font-medium'>E-commerce website</h1>

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit cumque laudantium doloribus dignissimos quae facilis laboriosam obcaecati fugit nobis recusandae.</p>

                <div className="flex gap-5 mt-5">
                    <button className='button bg-blue-500 hover:bg-blue-400 active:bg-blue-700' >Live demo</button>
                    <button 
             className='button bg-black hover:bg-[rgba(1,0,0,0.85)]  active:bg-gray-600 active:text-white'>GitHub repository</button>
                </div>
            </div>
  )
}

export default ProjectsDetails