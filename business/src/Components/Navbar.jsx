import React, { useEffect, useState } from 'react'
import p1 from '../assets/image.webp'
import p2 from '../assets/logo-light.webp'
import { Link } from 'react-router-dom'
import './nav.css'
 
import f11 from '../assets/f11.png'
 
import word from '../assets/wordpress.png'
import r1 from '../assets/react.svg'
import html1 from '../assets/html.png'
import bug from '../assets/bug (1).png'
import rocket from '../assets/rocket (1).png'
import shield from "../assets/shield.png"
import error from '../assets/web.png'
 import './nav.css'
const Navbar = ({darkMode, handleClick}) => {
  
  const [showNav, setShowNav] = useState(false)
  const handleNavClick = ()=>{
    setShowNav(!showNav)
  }
  const [text, setText] = useState(false)
  const handleClick0=()=>{
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
        <div>
            <div className='flex h-10 items-center text-white md:px-8 pl-4 lg:px-40 primary-color justify-between'><p>0 Vulnerability, 0 Downtime, 0 Error</p>
                <div className='lg:flex md:flex hidden gap-5'>
                    <a href="Privacy"><p>Privacy policy</p></a>
                    <a href="faq"><p>FAQ</p></a>
                    <a href="contact"><p>Contact</p></a>
                    <a href="blog"><p>Blog</p></a>
                </div>
            </div>
            <div className='  dark:text-white md:mx-10 mx-10 lg:mx-40 font-semibold flex justify-between items-center'>
               <Link to="/"> <img className='dark:hidden block' src={p2} alt="" />
                <img className='dark:block hidden' src={p1} alt="" /></Link>
                <ul className='hidden gap-8   lg:flex items-center'>
                  <div className='group relative'>
                    <li className='flex items-center  gap-1 hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer p-1 '><p>Development </p><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 transform transition-transform duration-300 group-hover:rotate-180 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

</span></li>

<div className='hidden group-hover:flex   rounded-md p-6  bg-white dark:bg-[#030712] shadow-sm gap-7 absolute  w-[550px]  '>
 
 <div >
  <Link to="wordpress"><div className=' p-2 hover:bg-slate-100 dark:hover:bg-gray-900'>
    <h1>WordPress Solutions</h1>
    <p className='text-gray-500 text-sm'>Custom Themes, plugins, and WordPress site development.</p>
  </div></Link>
  <Link to='shopify'><div className='my-6 p-2 hover:bg-slate-100 dark:hover:bg-gray-900'>
    <h1>
      Shopify Development
    </h1>
    <p className='text-gray-500 text-sm'>Create scalable and engaging e-commerce stores using Shopify.</p>
  </div></Link>
  <Link to='mern'><div className='mb-6  p-2 hover:bg-slate-100 dark:hover:bg-gray-900'>
    <h1>MERN Stack Development</h1>
    <p className='text-gray-500 text-sm'>Full-stack development using MongoDB, Express, React, and...</p>
  </div></Link>
 
 </div>
 <div>
 <Link to='next'><div className=' p-2 hover:bg-slate-100 dark:hover:bg-gray-900'>
    <h1>Headless WordPress & Next.js</h1>
    <p className='text-gray-500 text-sm'>Build modern, high-performance headless WordPress sites with...</p>
  </div></Link> 
  <Link to='fullstack'><div className='my-6  p-2 hover:bg-slate-100 dark:hover:bg-gray-900'>
    <h1>Fullstack Next.js Applications</h1>
    <p className='text-gray-500 text-sm'>End-to-end Next.js application development.</p>
  </div></Link>
 <Link to='frontend'> <div className=' p-2 hover:bg-slate-100 rounded-md dark:hover:bg-gray-900'>
    <h1>Front-end</h1>
    <p className='text-gray-500 text-sm'>Modern Frontend development using HTML, CSS, JavaScrip.</p>
  </div></Link>
  
 </div>
</div>
</div>
 



<div className='group relative'>
                    <li className='flex items-center  gap-1 hover:bg-slate-100  dark:hover:bg-slate-900 p-1 cursor-pointer'><p>Maintenance </p><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 transform transition-transform duration-300 group-hover:rotate-180 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

</span></li>

<div className='hidden rounded-md p-4  bg-white dark:bg-[#030712] shadow-sm gap-7 absolute  left-[-160px]  group-hover:flex w-[600px]  '>
 <div>
  <Link to="/malware"><div className=' p-2 hover:bg-slate-100 rounded-md dark:hover:bg-gray-900'>
    <h1>WordPress Malware Removal</h1>
    <p className='text-gray-500 text-sm'>Fix hacked sites with malware or redireact issues.</p>
  </div></Link>
  <Link to="/security"><div className='my-6  p-2 hover:bg-slate-100 rounded-md dark:hover:bg-gray-900'>
    <h1>
      WordPress Security
    </h1>
    <p className='text-gray-500 text-sm'>Enhance WordPress security to prevent attacks.</p>
  </div></Link>
 <Link to="/blacklist"><div className='mb-6  p-2 hover:bg-slate-100 rounded-md dark:hover:bg-gray-900'>
    <h1>Blacklist Removal</h1>
    <p className='text-gray-500 text-sm'>Remove your website from blacklists and restore its reputation.</p>
  </div></Link> 
 <Link to="/website migration"> <div className=' p-2 hover:bg-slate-100 rounded-md dark:hover:bg-gray-900'>
    <h1>Website Migration</h1>
    <p className='text-gray-500 text-sm'>Smoothly migrate your website to a new host or platform without..</p>
  </div></Link>
 </div>
 <div>
  <Link to='/speed'><div className=' p-2 hover:bg-slate-100 rounded-md dark:hover:bg-gray-900'>
    <h1>WordPress Speed Optimization</h1>
    <p className='text-gray-500 text-sm'>
      Speed up your Wordpress website for optimal performance.
    </p>
  </div></Link>
  <Link to='ongoing'><div className='my-6  p-2 hover:bg-slate-100 rounded-md dark:hover:bg-gray-900'>
    <h1>Ongoing WordPress Maintenance</h1>
    <p className='text-gray-500 text-sm'>Continuous backups, updates, and monitoring.</p>
  </div></Link>
  <Link to='/email deliverability'><div className='mb-6  p-2 hover:bg-slate-100 rounded-md dark:hover:bg-gray-900'>
    <h1>Email Deliverability Issues</h1>
    <p className='text-gray-500 text-sm'>Resolve issues with email deliverability, spam filters, and..</p>
  </div></Link>
  <Link to='ssl'><div className=' p-2 hover:bg-slate-100 rounded-md dark:hover:bg-gray-900'>
    <h1>SSL Installation</h1>
    <p className='text-gray-500 text-sm'>Secure your website with SSL installation, ensuring safe data...</p>
  </div></Link>
  
 </div>
</div>
</div>


<div className='group relative '>
                    <li className='flex items-center  gap-1 hover:bg-slate-100 cursor-pointer dark:hover:bg-slate-900 p-1 '><p>Troubleshooting </p><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 transform transition-transform duration-300 group-hover:rotate-180 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

</span></li>

<div className='hidden rounded-md p-4  bg-white dark:bg-[#030712] shadow-sm gap-7 absolute left-[-300px]  group-hover:flex w-[550px] h-[400px]'>
 <div>
 <Link to='/error4'> <div className='hover:bg-slate-200 dark:hover:bg-slate-900 p-3 rounded-md'>
    <h1>404 Page</h1>
    <p className='text-gray-500 text-sm'>Fix 404 errors and ensure proper redireacion.</p>
  </div></Link>
  <Link to='/error3'><div className='my-8 hover:bg-slate-200 dark:hover:bg-slate-900 p-3 rounded-md'>
    <h1>
      403 Forbidden
    </h1>
    <p className='text-gray-500 text-sm'>Fix 403 errors for access issues.</p>
  </div></Link>
 <Link to='/white screen'><div className='mb-8 hover:bg-slate-200 p-3 dark:hover:bg-slate-900 rounded-md'>
    <h1>White Screen Of Death</h1>
    <p className='text-gray-500 text-sm'>Diagnose and fix the white screen issue that makes your site...</p>
  </div></Link>
  
 </div>
 <div>
  <Link to='/error5'><div className='hover:bg-slate-200 dark:hover:bg-slate-900 p-3 rounded-md'>
    <h1> 500 Page</h1>
    <p className='text-gray-500 text-sm'>
      Resolve 500 Internal Server Errors.
    </p>
  </div></Link>
  <Link to='mixed'><div className='my-8 hover:bg-slate-200 dark:hover:bg-slate-900 p-3 rounded-md'>
    <h1>Mixed Content Error</h1>
    <p className='text-gray-500 text-sm'>Resolve mixed content errors to ensure all elements are loaded...</p>
  </div></Link>
   
  
  
 </div>
</div>
</div>

 
<a href="#casestudies"><li>Case studies</li></a>
                </ul>
                <div className='flex gap-10'>
                <button onClick={handleClick}>{!darkMode? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>
:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>

}
</button>
<button className='border-2 p-2 rounded-md border-black dark:border-white hidden lg:block'>Get started</button>
<button onClick={handleNavClick} className='md:block lg:hidden block'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>
</button>
                </div>
            </div>
            {!showNav ? (<></>):(<div className='lg:hidden block'>
              <div className=' w-full px-10 absolute z-10  dark:bg-black bg-white dark:text-white font-semibold '>
      
        <div className='border-b-2 pb-2 border-black dark:border-white font-semibold '>
       <div className='flex justify-between my-4 text-sm   cursor-pointer' onClick={handleClick0}> <h1>Development</h1>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-4 ${!text ? "button-animation" : ""}`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>


       </div>
        {!text ? (<></>): (<div>
          <Link to='wordpress'><div className='flex items-center text-xs gap-2'>
            <img className='h-4 mt-1 w-4' src={word} alt="" />
            <p >WordPress Solutions</p>
          </div></Link>
          <Link to='/next'><div className='flex mt-1 my-2 items-center text-xs gap-2'>
            <img className='h-4 w-4' src={r1} alt="" />
            <p>Headless WordPress & Next.js</p>
          </div></Link>
          <Link to='shopify'><div className='flex mt-1 items-center text-xs gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-blue-600">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

            <p>Shopify Development</p>
          </div></Link>
          <Link to='/fullstack'><div className='flex mt-1 items-center text-xs my-2 gap-2'>
            <p className='border-2 px-1 rounded-full'>Js</p>
            <p>Fullstack Next.js Applications</p>
          </div></Link>
          <Link to='/mern'><div className='flex mt-1 items-center text-xs gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-blue-600 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>            <p>MERN Stack Development</p>
          </div></Link>
          <Link to='/frontend'><div className='flex mt-1 items-center text-xs gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
</svg>
            <p>Frontend</p>
          </div></Link>
          <Link to='/frontend'><div className='flex mt-1 items-center text-xs gap-2'>
            <img className='h-4 w-4' src={html1} alt="" />
            <p>Static HTML & CSS website</p>
          </div></Link>
        </div>)}
        </div>



        <div className='border-b-2 pb-2 border-black dark:border-white font-semibold  '>
       <div className='flex justify-between my-4 text-sm  cursor-pointer ' onClick={handleClick1}> <h1>Maintenance</h1>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-4 ${!text1 ? "button-animation" : ""}`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>


       </div>
        {!text1 ?(<></>): (<div>
          <Link to='/malware'><div className='flex items-center text-xs gap-2'>
            <img className='h-4 mt-1 w-4' src={bug} alt="" />
            <p >WordPress Malware Removal</p>
          </div></Link>
          <Link to='speed'><div className='flex mt-1 items-center text-xs gap-2'>
            <img className='h-4 w-4' src={rocket} alt="" />
            <p>WordPress Speed Optimization</p>
          </div></Link>
         <Link to='security'> <div className='flex mt-1 items-center text-xs gap-2'>
          <img className='h-4 w-4' src={shield} alt="" />

            <p>WordPress Security</p>
          </div></Link>
          <Link to='onging'><div className='flex mt-1 items-center text-xs gap-2'>
          <img className='h-4 w-4' src={shield} alt="" />
            <p>Ongoing WordPress Maintenance</p>
          </div></Link>
          <Link to='blacklist'><div className='flex mt-1 items-center text-xs gap-2'>
          <img className='h-4 w-4' src={shield} alt="" />
          <p>Blacklist Removal</p>
          </div></Link>
          <Link to='/email deliverability'><div className='flex mt-1 items-center text-xs gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>

            <p>Email Deliverability issues</p>
          </div></Link>
          <Link to='/website migration'><div className='flex mt-1 items-center text-xs gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg>
            <p>Website Migration</p>
          </div></Link>
          <Link to='ssl'><div className='flex mt-1 items-center text-xs gap-2'>
            <img className='h-4 w-4' src={shield} alt="" />
            <p>SSL Installation</p>
          </div></Link>
        </div>)}
        </div>        

 {/* Troubleshooting start from here */}
  <div className='border-b-2 border-black dark:border-white pb-2 font-semibold '>
       <div className='flex justify-between my-4 text-sm cursor-pointer  ' onClick={handleClick2}> <h1>Troubleshooting</h1>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-4 ${!text2 ? "button-animation" : ""}`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>


       </div>
        {!text2 ?(<></>): (<div>
          <Link to='/error4'><div className='flex items-center  text-xs gap-2'>
            <img className='h-4 mt-1 w-4' src={error} alt="" />
            <p >404 Page</p>
          </div></Link>
         <Link to='error5'> <div className='flex mt-1 items-center text-xs gap-2'>
            <img className='h-4 w-4' src={error} alt="" />
            <p>500 Page</p>
          </div></Link>
          <Link to='error3'><div className='flex mt-1 items-center text-xs gap-2'>
          <img className='h-4 w-4' src={error} alt="" />

            <p>403 Forbidden</p>
          </div></Link>
          <Link to='mixed'><div className='flex mt-1 items-center text-xs gap-2'>
          <img className='h-4 w-4' src={error} alt="" />
            <p>Mixed Contect Error</p>
          </div></Link>
         <Link to='/white screen'> <div className='flex mt-1 items-center text-xs gap-2'>
          <img className='h-4 w-4' src={shield} alt="" />
          <p>White Screen Of Death</p>
          </div></Link>
          
          
          
        </div>)}
        </div>     



        {/* marketing start from here    */}
        <div className='pb-2 font-semibold '>
       <div className='flex justify-between my-4 text-sm cursor-pointer  ' onClick={handleClick3}> <h1>Case</h1>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-4 ${!text3 ? "button-animation" : ""}`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
</svg>


       </div>
         
        </div>  
      </div>
            </div>)}
        </div>
    )
}

export default Navbar
