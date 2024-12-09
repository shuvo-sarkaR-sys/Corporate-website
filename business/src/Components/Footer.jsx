import React, { useState } from 'react'
import './nav.css'
import p1 from '../assets/logo2.png'
import f11 from '../assets/f11.png'
import lin from '../assets/linkedin-logo.png'
import X from '../assets/twitter (3).png'
import word from '../assets/wordpress.png'
import r1 from '../assets/react.svg'
import html1 from '../assets/html.png'
import bug from '../assets/bug (1).png'
import rocket from '../assets/rocket (1).png'
import shield from "../assets/shield.png"
import error from '../assets/web.png'
const Footer = () => {
  const [text, setText] = useState(false)
  const handleClick=()=>{
    setText(!text)
  }
  const [text1, setText1] = useState(false)
  const handleClick1=()=>{
    setText1(!text1)
  }
  const [text2, setText2] = useState(false)
  const handleClick2=()=>{
    setText2(!text2)
  }
  const [text3, setText3] = useState(false)
  const handleClick3=()=>{
    setText3(!text3)
  }
  return (
    <div className='primary-color flex-wrap justify-between  mt-10 flex px-10 lg:px-36 py-10 text-white'>
    <div className='md:w-1/4 w-full'>
        <img className='w-44 my-[-40px]' src={p1} alt="" />
        <p className='mt-2'>Achieving perfection
           with 0 Vulnerability, 0 Downtime, 0 Error.</p>
           <p className='mt-10'><strong>Phone:</strong>+44 7878 798374</p>
           <p><strong>Email:</strong> support@3zerodigital.com</p>
           <p><strong>Address:</strong> Suite A 82 James Carter Road, Mildenhall, Bury St. Edmunds, England, United Kingdom, IP28 7DE </p>
           <div className='flex gap-5 mt-5'>
            <a href="https://www.facebook.com/3zerodigital.LLC"><img className='w-8 h-8' src={f11} alt="" /></a>
           <a href="https://x.com/3ZeroDigital"><img className='w-8 h-8' src={X} alt="" /></a> 
           <a href="https://www.linkedin.com/company/3zerodigital/"><img className='w-8 h-8' src={lin} alt="" /></a> 
           </div>
      </div>
      <div className='text-sm font-bold w-full md:w-1/5'>
        <h1 className='text-xl font-bold'>Quik Links</h1>
        <h1 className='my-4 border-b-2 border-black pb-3'>About Us</h1>
         
        <h1 className='my-4  border-b-2 border-black pb-3'>Contact</h1>
        
        <h1 className='my-4  border-b-2 border-black pb-3'>Blog</h1>
        
      </div>
      <div className=' w-full font-semibold md:w-1/5'>
        <h1 className='text-xl font-bold'>Services</h1>
        <div className='border-b-2 pb-2 border-black font-semibold '>
       <div className='flex justify-between my-3 text-sm   cursor-pointer' onClick={handleClick}> <h1>Development</h1>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-4 ${!text ? "button-animation" : ""}`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>


       </div>
        {!text ?(<></>): (<div>
          <Link to='wordpress'><div className='flex items-center text-xs gap-2'>
            <img className='h-4 mt-1 w-4' src={word} alt="" />
            <p >WordPress Solutions</p>
          </div></Link>
          <Link to='next'><div className='flex mt-1 items-center text-xs gap-2'>
            <img className='h-4 w-4' src={r1} alt="" />
            <p>Headless WordPress & Next.js</p>
          </div></Link>
          <Link to='shopify'><div className='flex mt-1 items-center text-xs gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-blue-600">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

            <p>Shopify Development</p>
          </div></Link>
          <div className='flex mt-1 items-center text-xs gap-2'>
            <p className='border-2 px-1 rounded-full'>Js</p>
            <p>Fullstack Next.js Applications</p>
          </div>
          <div className='flex mt-1 items-center text-xs gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-blue-600 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>            <p>MERN Stack Development</p>
          </div>
          <div className='flex mt-1 items-center text-xs gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
</svg>
            <p>Frontend</p>
          </div>
          <div className='flex mt-1 items-center text-xs gap-2'>
            <img className='h-4 w-4' src={html1} alt="" />
            <p>Static HTML & CSS website</p>
          </div>
        </div>)}
        </div>



        <div className='border-b-2 pb-2 border-black font-semibold  '>
       <div className='flex justify-between my-3 text-sm  cursor-pointer ' onClick={handleClick1}> <h1>Maintenance</h1>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-4 ${!text1 ? "button-animation" : ""}`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>


       </div>
        {!text1 ?(<></>): (<div>
          <div className='flex items-center text-xs gap-2'>
            <img className='h-4 mt-1 w-4' src={bug} alt="" />
            <p >WordPress Malware Removal</p>
          </div>
          <div className='flex mt-1 items-center text-xs gap-2'>
            <img className='h-4 w-4' src={rocket} alt="" />
            <p>WordPress Speed Optimization</p>
          </div>
          <div className='flex mt-1 items-center text-xs gap-2'>
          <img className='h-4 w-4' src={shield} alt="" />

            <p>WordPress Security</p>
          </div>
          <div className='flex mt-1 items-center text-xs gap-2'>
          <img className='h-4 w-4' src={shield} alt="" />
            <p>Ongoing WordPress Maintenance</p>
          </div>
          <div className='flex mt-1 items-center text-xs gap-2'>
          <img className='h-4 w-4' src={shield} alt="" />
          <p>Blacklist Removal</p>
          </div>
          <div className='flex mt-1 items-center text-xs gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>

            <p>Email Deliverability issues</p>
          </div>
          <div className='flex mt-1 items-center text-xs gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg>
            <p>Website Migration</p>
          </div>
          <div className='flex mt-1 items-center text-xs gap-2'>
            <img className='h-4 w-4' src={shield} alt="" />
            <p>SSL Installation</p>
          </div>
        </div>)}
        </div>        

 {/* Troubleshooting start from here */}
  <div className='border-b-2 border-black pb-1 font-semibold '>
       <div className='flex justify-between my-4 text-sm cursor-pointer  ' onClick={handleClick2}> <h1>Troubleshooting</h1>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-4 ${!text2 ? "button-animation" : ""}`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>


       </div>
        {!text2 ?(<></>): (<div>
          <div className='flex items-center text-xs gap-2'>
            <img className='h-4 mt-1 w-4' src={error} alt="" />
            <p >404 Page</p>
          </div>
          <div className='flex mt-1 items-center text-xs gap-2'>
            <img className='h-4 w-4' src={error} alt="" />
            <p>500 Page</p>
          </div>
          <div className='flex mt-1 items-center text-xs gap-2'>
          <img className='h-4 w-4' src={error} alt="" />

            <p>403 Forbidden</p>
          </div>
          <div className='flex mt-1 items-center text-xs gap-2'>
          <img className='h-4 w-4' src={error} alt="" />
            <p>Mixed Contect Error</p>
          </div>
          <div className='flex mt-1 items-center text-xs gap-2'>
          <img className='h-4 w-4' src={shield} alt="" />
          <p>White Screen Of Death</p>
          </div>
          
          
          
        </div>)}
        </div>     



        {/* marketing start from here    */}
        <div className='border-b-2 border-black pb-1 font-semibold '>
       <div className='flex justify-between my-4 text-sm cursor-pointer  ' onClick={handleClick3}> <h1>Marketing</h1>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-4 ${!text3 ? "button-animation" : ""}`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>


       </div>
        {!text3 ?(<></>): (<div>
          <div className='flex items-center text-xs gap-2'>
            <img className='h-4 mt-1 w-4' src={error} alt="" />
            <p >3D Model</p>
          </div>
          <div className='flex mt-1 items-center text-xs gap-2'>
            <img className='h-4 w-4' src={error} alt="" />
            <p>3D Render Image</p>
          </div>
          <div className='flex mt-1 items-center text-xs gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>

            <p>3D Animation</p>
          </div>
          <div className='flex mt-1 items-center text-xs gap-2'>
          <img className='h-4 w-4' src={rocket} alt="" />
            <p>SEO Optimization</p>
          </div>
          <div className='flex mt-1 items-center text-xs gap-2'>
          <img className='h-4 w-4' src={shield} alt="" />
          <p>BackLink Building</p>
          </div>
          <div className='flex mt-1 items-center text-xs gap-2'>
          <img className='h-4 w-4' src={f11} alt="" />
          <p>Social Media Marketing</p>
          </div>
          
          
        </div>)}
        </div>  
      </div>
      <div className='md:w-1/4 w-full'>
        <h1 className='text-xl font-bold'>Policies</h1>
       
        <a href="privacy"  ><p className='my-4  border-b-2 border-black pb-3 text-sm font-semibold'>Privacy Policy</p></a>
        
        <a href="privacy"><p className='my-4  border-b-2 border-black pb-3 text-sm font-semibold'>Refund Policy</p></a>
        
        <a href="privacy"><p className='my-4  border-b-2 border-black pb-3 text-sm font-semibold'>Term of Service</p></a>
     
        <a href="privacy"><p className='my-4  border-b-2 border-black pb-3 text-sm font-semibold'>Cookie Policy</p></a>
   
        <br />
      
      </div>
      <hr />
    </div>
  )
}

export default Footer
