import React from 'react'
import '../Components/nav.css'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className='text-center xl:mx-40 dark:text-white md:mx-20 mx-10'>
      <p className='text-xl text-gray-800 dark:text-gray-600 mt-20'>Revolutionizing Traditional Software Services</p>
      <h1 className='xl:text-5xl text-4xl my-4 mx-10 font-extrabold'>Empowering Digital Solutions with Zero Compromises</h1>
      <p className='text-xl '>Experience the future of reliable and efficient digital solutions crafted by expert with a customer-first mindset.</p>
      <div className='flex gap-3 justify-center my-8'>
        <Link to='/'><button className='primary-color p-2 px-7 rounded-xl'>Get Started</button></Link>
        <Link to='/'><button className='primary-color p-2 px-7 rounded-xl'>Book a call</button></Link>
      </div>
      <div className='shadow-md my-14 px-4 rounded-md'>
        <h1 className='text-4xl my-5 font-extrabold'>What Problem Does Digital solution Solve?</h1>
        <p className='text-xl py-5 text-gray-800 dark:text-gray-500'>The "Digital solution" concept represents our commitment to zero vulnerabilities, zero downtime, and zero errors. While perfect zeroes may not always be achievable, our relentless pursuit of excellence ensures that your business enjoys exceptional performance, reliability, and security in its digital journey.</p>

      </div>
      <div>
        <h1 className='text-5xl font-extrabold my-8'>Who are Behind Digital solution?</h1>
        <p>We are five passionate friends, graduates in Computer Science, who started this journey in 2019. With experience in freelancing, remote jobs, and local software companies, we handled over 8,000 clients, fixed 40,000+ hacked sites, and built 1,000+ websites.

We envisioned elevating traditional software services to the next level—making them more reliable, affordable, and expertly crafted by experienced professionals.</p>
      </div>
    </div>
  )
}

export default About
