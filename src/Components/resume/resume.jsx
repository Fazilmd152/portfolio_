import React from 'react'
import resumePic from '../../Assets/resume.jpg'
import resume from "../../Assets/Resume/my_resume.pdf"

const Resume = () => {
    return (
        <section className='p-10 md:py-32 md:h-[100vh]' id='resume'>
            <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-32">
                <div className="w-8/12 md:w-2/6">
                   
                    <img src={resumePic} alt="" className='border border-black' />
                </div>
                <div className="text-center w-8/12 md:w-full">
                    <h1 className=' md:text-4xl font-bold border-b-2 border-black md:border-b-4 w-fit'>Resume</h1>

                    <p className=' mt-2 mb-2 text-left text-xs md:text-base md:text-center '>You can download my resume here
                         <span className='hidden ml-3 md:inline-block'>
                         <button className=' resume-download-button'><a href={resume} download>Download</a></button>
                        </span>
                    </p>

                    <button className='md:hidden resume-download-button'>Download</button>
                   
                </div>
            </div>

        </section>
    )
}

export default Resume