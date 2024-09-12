import React from 'react'
import skills from './skillDetails'


const Skills = () => {



    return (
        <section className='px-10'>
         
         <h1 className='text-4xl font-bold border-b-4 mb-3 border-pink-300 w-fit'>Skills</h1>

           <div className="grid grid-cols-2  gap-3 md:grid-cols-4"
           
           
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