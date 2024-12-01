import React from 'react'
import v1 from '../assets/hero-light.mp4'
import v2 from '../assets/hero.mp4'
import './nav.css'
const Hero = () => {
  return (
    <div className='lg:flex md:flex-wrap justify-between mt-14 lg:px-40 px-5 md:px-20  mx-auto'>
      <div className=''>
        <h1 className='dark:text-white text-black font-extrabold text-3xl md:text-3xl lg:text-5xl'>3Zero Digital</h1>
        <p className='text-gray-600 dark:text-gray-400 text-2xl font-medium md:my-5 my-4 lg:my-8'>Empowering Digital Solutions with Zero Compromises</p>
        <p className='text-gray-600 dark:text-gray-400 lg:text-xl font-normal md:text-xl'>Offering top-tier software solutions with zero vulnerbilities, zero downtime, and <br /> zero errors. We ensure your business achieves optimal digital performance.</p>
        <div className='flex gap-5 my-8'>
            <button className='primary-color rounded-md p-2 px-4 font-medium text-xl text-white'>Services</button>
            <button className='primary-color rounded-md p-2 px-4 font-medium text-xl text-white'>Plans & Pricing</button>
        </div>
      </div>
      <div>
        <video className='dark:block hidden  border-0 w-[420px] h-[340px]' autoPlay muted loop src={v2}></video>
        <video className='dark:hidden block border-0 w-[420px] h-[340px]' autoPlay muted loop src={v1}></video>
      </div>
    </div>
  )
}

export default Hero
