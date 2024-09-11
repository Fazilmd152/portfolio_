import React from 'react'

const HeroSec1 = () => {
  return (
    <section className='grow bg-[#4831df] w-full p-5 text-white'>
    <div className="w-fit mx-auto mt-10">
      <h1 className='text-3xl mb-1'>hi iam,</h1>
      <h1 className='text-6xl mb-2 text-[#ccf381] font-bold'> Mohamed <br />Fazil<span>.</span></h1>
      <h1 className='text-3xl mt-5 mb-1'>Full stack developer</h1>
      <h1 className='w-3/4'>I like to craft solid and scalable frontend products with great user experiences.</h1>

      <div className="mt-20 grid grid-cols-3 w-fit gap-10 text-3xl bg">
        <span className='bg-white  rounded-full  h-[107%]'>
          <i class="fa-brands fa-square-whatsapp fa-xl " style={{ "color": "#4bc95b" }}></i>
        </span>

        <span className='bg-white  rounded-full w-[90%] ' >
          <i class="fa-brands fa-square-github fa-xl" style={{ "color": "black" }}></i>
        </span>

        <span className='bg-white  rounded-full h-[107%]'>
          <i class="fa-brands fa-linkedin fa-xl " style={{ "color": "#0078B4" }}></i>
        </span>
      </div>
    </div>

  </section>
  )
}

export default HeroSec1