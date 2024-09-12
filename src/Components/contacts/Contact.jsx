import React from 'react'

const Contact = () => {
  return (
    <section className='p-10 md:py-20 bg-[#f9f9f9]' id='contact'>
        <div className=' flex flex-col items-center mx-auto gap-3 md:gap-6  contact bg-white w-fit px-1 md:px-28  py-4 md:py-9'>
        <h1 className='text-3xl font-bold  border-b-4 border-[#3d155f] md:text-5xl text-[#4831d4]'>Contact</h1>
        <p > If you want to discuss more in details, Please contact me</p>
        <p><span className='font-bold'>Email: </span>fazilmd251@gmail.com</p>
        <p><span className='font-bold'>Phone: </span>7397565259</p>
    </div>
    </section>
    
  )
}

export default Contact