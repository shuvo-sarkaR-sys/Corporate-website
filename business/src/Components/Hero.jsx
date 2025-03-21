import React, { useEffect, useRef } from 'react'
import v1 from '../assets/hero-light.mp4'
import v2 from '../assets/hero.mp4'
import './nav.css'
import { Link } from 'react-router-dom'
import {gsap} from "gsap";
 
 const Hero = () => {
  const div1 = useRef(null)
  const div2 = useRef(null)
  useEffect(()=>{
    gsap.fromTo(
      div1.current,
      {opacity: 0, x: -50},
      {opacity: 1, x: 0, duration: 1.5, ease: 'power1.out'}
    )
  },[]) 
  useEffect(()=>{
    gsap.fromTo(
      div2.current,
      {opacity: 0, x: 60},
      {opacity: 1, x: 0, duration: 1.5, ease: 'power1.out'}
    )
  },[]) 
  return (
    <div className='flex z-10 flex-wrap justify-between mt-14 lg:mx-40  px-5 md:px-10  '>
      <div ref={div1} className='lg:w-1/2 '>
        <h1 className='dark:text-white text-black font-extrabold text-3xl md:text-5xl lg:text-5xl'>Digital Solution</h1>
        <p className='text-gray-600 dark:text-gray-400 text-2xl font-medium md:my-5 my-4 lg:my-8'>Empowering Digital Solutions with Zero Compromises</p>
        <p className='text-gray-600 dark:text-gray-400 lg:text-xl font-normal md:text-xl'>Offering top-tier software solutions with zero vulnerbilities, zero downtime, and <br /> zero errors. We ensure your business achieves optimal digital performance.</p>
        <div className='flex gap-5 my-8'>
          <Link to='login'><button className='primary-color rounded-md p-2 px-4 font-medium text-xl text-white'>Services</button></Link>
          <button className='primary-color rounded-md p-2 px-4 font-medium text-xl text-white'>Plans & Pricing</button>
        </div>
      </div>
      <div ref={div2} className='lg:w-[40%]'>
        <video className='dark:block hidden  border-0 w-[420px] h-[340px]' autoPlay muted loop src={v2}></video>
        <video className='dark:hidden block border-0 w-[420px] h-[340px]' autoPlay muted loop src={v1}></video>
      </div>
    </div>
  )
}

export default Hero
