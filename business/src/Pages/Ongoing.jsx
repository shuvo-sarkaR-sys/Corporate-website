import React from 'react'
import { useState } from 'react'
import '../Components/nav.css'
const Ongoing = () => {
  
const [price, setPrice] = useState(29)
const [value, setValue] = useState(1)
 const valueIncrease = ()=>{
  setPrice(price + 29)
  setValue(value + 1)
 }
 const valueDecrease = ()=>{
  if(value > 1){
  setPrice(price - 29)
  setValue(value - 1)
}

 }

  return (
    <div className='dark:text-white'>
       <div className="flex mt-10 j dark:text-white md:mx-20 mx-10 flex-wrap lg:mx-40">
        <div className="lg:w-[60%] w-full">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-start">Your WordPress Site Is an Easy Target – Fix It Now!</h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 my-10">Hackers Don’t Take Vacations – Your Site Can’t Either!</p>
          <p>Stay protected 24/7 with our expert security solutions. Did you know? One study found that in 2018, over 90% of hacked sites were WordPress. Regular scans, malware removal, and zero downtime – guaranteed.</p>
          <div className="gap-5 flex mt-5 text-white">
            <button className="p-2 rounded-md primary-color font-semibold">Remove My Website Now</button>
            <button className="p-2 rounded-md primary-color font-semibold">Book a call</button>
          </div>
        </div>
        <div className="lg:w-1/3 lg:pt-28 pt-10  lg:pl-32 w-full h-full">
          <iframe
            width="350"
            height="225"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>

        </div>
      </div>
       <div className='mt-10'>
        <h1 className=' text-center lg:text-4xl font-bold  text-2xl'>Ongoing WordPress Security Maintenance</h1>
        <p className='text-center md:mx-32 lg:mx-40 mt-5'>Secure your WordPress site with our comprehensive maintenance services. Our team ensures your site is protected, updated, and performing at its best.</p>

        <div className='  flex dark:bg-zinc-800 justify-between flex-wrap mx-5 lg:mx-40 shadow-xl rounded-md p-6 md:p-10 md:mt-10'>
          <div><h1 className='md:text-center text-xl lg:text-3xl md:text-2xl font-bold '>Ongoing WordPress Maintenance</h1>
          <p className='text-xl text-gray-500 mb-3'>Starting at <del>$147</del> <strong className='text-black'>${price}.00/month</strong></p>
          <p>Number of sites</p>
          <div className='flex gap-5 my-5'>
            <button className='p-1 px-4 rounded-md text-3xl dark:bg-slate-300 bg-slate-300' onClick={valueDecrease}>-</button>
            <p className='text-3xl'>{value}</p>
            <button className='p-1 px-4 rounded-md text-3xl dark:bg-slate-300 bg-slate-300' onClick={valueIncrease}>+</button>
          </div></div>
          <div>
          <button className='primary-color p-2 px-5 text-white rounded-md'>Login to proceed</button>
          </div>
        </div>
        <div className='flex flex-wrap mx-5 md:mx-10 mt-5 md:mt-10 gap-5 md:gap-10 lg:mx-40'>
          <div className='shadow-md lg:w-[45%] dark:bg-zinc-800 w-full p-7 rounded-md'>
            <h1 className='text-2xl font-bold'>Regular Security Audits</h1>
            <p className='text-gray-500'>Identify vulnerabilities to keep your site secure.</p>
          </div>
          <div className='shadow-md dark:bg-zinc-800 w-full lg:w-[45%] p-7 rounded-md'>
            <h1 className='text-2xl font-bold'>24/7 Threat Monitoring</h1>
            <p className='text-gray-500'>Continuous monitoring to detect and mitigate threats.</p>
          </div>
          <div className='shadow-md dark:bg-zinc-800 w-full lg:w-[45%] p-7 rounded-md'>
            <h1 className='text-2xl font-bold'>Automated Backups</h1>
            <p className='text-gray-500'>Daily backups stored securely for quick restoration.</p>
          </div>
          <div className='shadow-md dark:bg-zinc-800 w-full lg:w-[45%] p-7 rounded-md'>
            <h1 className='text-2xl font-bold'>Core & Plugin Updates</h1>
            <p className='text-gray-500'>Ensure your WordPress components are up-to-date with vulnerability checks.</p>
          </div>
          <div className='shadow-md dark:bg-zinc-800  lg:w-[45%] p-7 rounded-md'>
            <h1 className='text-2xl font-bold'>Login Security Enhancements</h1>
            <p className='text-gray-500'>Protect your admin panel with two-factor authentication.</p>
          </div>
          <div className='shadow-md dark:bg-zinc-800 lg:w-[45%] p-7 rounded-md'>
            <h1 className='text-2xl font-bold'>File Integrity Monitoring
            </h1>
            <p className='text-gray-500'>Track and restore any unauthorized file changes.</p>
          </div>
          <div className='shadow-md dark:bg-zinc-800  lg:w-[45%] p-7 rounded-md'>
            <h1 className='text-2xl font-bold'>Performance Optimization</h1>
            <p className='text-gray-500'>Improve loading times with security hardening.</p>
          </div>
          <div className='shadow-md  dark:bg-zinc-800 lg:w-[45%] p-7 rounded-md'>
            <h1 className='text-2xl font-bold'>Firewall Management</h1>
            <p className='text-gray-500'>Prevent brute force attacks with proactive firewall adjustments..</p>
          </div>
         
          
        </div>



       </div>
    </div>
  )
}

export default Ongoing
