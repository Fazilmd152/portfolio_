import React from 'react'
import skills from './skillDetails'


const Skills = () => {



    return (
        <section className='px-10 py-20 bg-[#3e25e6]'>
         
         <h1 className='text-4xl md:text-5xl font-bold  mb-5  w-fit text-white md:border-b-4 md:w-full md:pb-3 md:border-[#ccf381]'>Skills</h1>

           <div className="grid grid-cols-2  gap-3 md:grid-cols-4 "
           
           
           >

           {
          skills.map(s => {
            return <div className={s.div}
            data-aos="fade-zoom-in"
            >
            <i class={s.i+" text-2xl"}></i>
            <span>{s.span}</span>
            </div>
          })
        }

           </div>
     

        </section>
    )
}

export default Skills