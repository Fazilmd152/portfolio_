import React from 'react'

const Logos = () => {
    return (
        <div className="hidden md:block mt-20 md:grid grid-cols-3 w-fit gap-10 text-3xl bg ">
            <span className='bg-white  rounded-full  md:h-[107%]'>
                <i class="fa-brands fa-square-whatsapp fa-xl " style={{ "color": "#4bc95b" }}></i>
            </span>

            <span className='bg-white w-[90%]  rounded-full md:w-[90%] ' >
                <i class="fa-brands fa-square-github fa-xl" style={{ "color": "black" }}></i>
            </span>

            <span className='bg-white w-[90%] md:w-full rounded-xl md:rounded-full md:h-[107%]'>
                <i class="fa-brands fa-linkedin fa-xl " style={{ "color": "#0078B4" }}></i>
            </span>
        </div>
    )
}

export default Logos