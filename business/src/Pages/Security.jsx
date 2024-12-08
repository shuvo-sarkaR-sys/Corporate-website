import React from 'react'
import { useState } from 'react'
const Security = () => {
  const [value, setValue] = useState(1)
  const increaseValue = ()=>{
    setValue( value + 1)
    setDeletevalue( deleteValue + 199)
    setAmount( amount + 99)
  }
  const decreaseValue = ()=>{
    if(value > 1){
      setValue(value - 1)
    setDeletevalue( deleteValue - 199)
    setAmount( amount - 99)
    }
  }
  const [deleteValue, setDeletevalue] = useState(199.00)
  const [amount, setAmount] = useState(99)


  return (
    <div>
       <div className='dark:text-white'>
       <div className="flex mt-10 j dark:text-white md:mx-20 mx-10 flex-wrap lg:mx-40">
        <div className="lg:w-[60%] w-full">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-start">Your Website’s Security is Non-Negotiable!</h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 my-10">Hackers Are Always Watching – Are You Prepared?</p> 
          <p>A single security breach can cost your business thousands. Protect your WordPress site with our advanced security services – 24/7 monitoring, threat prevention, and guaranteed peace of mind.</p>
          <div className="gap-5 flex mt-5 text-white">
            <button className="p-2 rounded-md primary-color font-semibold">Remove My Website Now</button>
            <button className="p-2 rounded-md primary-color font-semibold">Book a call</button>
          </div>
        </div>
        <div className="lg:w-1/3 lg:pt-28 pt-10 pl-20 lg:pl-32 w-full h-full">
          <iframe
            width="400"
            height="225"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>

        </div>
      </div>
      <h1 className='lg:text-5xl text-center text-3xl mt-14 mb-5 font-bold lg:font-extrabold'>Comprehensive WordPress Security</h1>
      <p className='text-center mx-20 text-xl mb-10 text-gray-500'>Fortify your WordPress site with our advanced security services. <br />Protect your site from malicious attacks, unauthorized access, and potential vulnerabilities.

Key Security Features</p>
      <div className='flex flex-wrap shadow-lg md:mx-28 mx-14  p-10 lg:mx-40 rounded-md justify-center gap-24'>
        <div className=''>
          <h1 className='text-xl font-bold'>Common Issues Indicating Malware</h1>
          <div className='my-4'>
                <input className='w-5 h-4 mr-2' type="checkbox" value="Unexpected redirects" />
               <label htmlFor="input">Unexpected redirects</label>
               </div>

               <div className='my-4'>
                <input className='w-5 h-4 mr-2' type="checkbox" value="Slow website performance" />
               <label htmlFor="input">Slow website performance
               </label>
               </div>

               <div className='my-4'>
                <input className='w-5 h-4 mr-2' type="checkbox" value="Strange pop-ups or ads" />
               <label htmlFor="input">Strange pop-ups or ads</label>
               </div>
               <div className='my-4'>
                <input className='w-5 h-4 mr-2' type="checkbox" value="Unknown files or plugins" />
               <label htmlFor="input">Unknown files or plugins</label>
               </div>

               <div className='my-4'>
                <input className='w-5 h-4 mr-2' type="checkbox" value="Google warning about the site" />
               <label htmlFor="input">Google warning about the site</label>
               </div>

               <div className='my-4'>
                <input className='w-5 h-4 mr-2' type="checkbox" value="Blacklisted by security services" />
               <label htmlFor="input">Blacklisted by security services</label>
               </div>

               <div className='my-4'>
                <input className='w-5 h-4 mr-2' type="checkbox" value="Blog" />
               <label htmlFor="input">Blog</label>
               </div>

               <div className='my-4'>
                <input className='w-5 h-4 mr-2' type="checkbox" value="Unauthorized access attempts" />
               <label htmlFor="input">Unauthorized access attempts</label>
               </div>

               <div className='my-4'>
                <input className='w-5 h-4 mr-2' type="checkbox" value="Spam emails being sent from the site" />
               <label htmlFor="input">
               Spam emails being sent from the site</label>
               </div>

               <div className='my-4'>
                <input className='w-5 h-4 mr-2' type="checkbox" value="Malware detected by scanner" />
               <label htmlFor="input">Malware detected by scanner</label>
               </div>

               <div className='my-4'>
                <input className='w-5 h-4 mr-2' type="checkbox" value="Hosting suspended" />
               <label htmlFor="input">Hosting suspended</label>
               </div>

               <div className='my-4'>
                <input className='w-5 h-4 mr-2' type="checkbox" value="Unwanted errors" />
               <label htmlFor="input">Unwanted errors</label>
               </div>
 
        </div>
        <div className='shadow-md p-10 rounded-md'>
          <h1 className='text-2xl font-bold lg:mt-14 text-center mb-5'>Malware Removal Service</h1>
          <p className='text-3xl font-bold text-gray-500 text-center'><del>${deleteValue}.00</del></p>
          <p className='text-center font-bold text-3xl '>${amount}.00</p>
          <p className='text-center text-gray-400 mt-2'>One-time fee (for 1 site)</p>
          <div>
            <h1 className='text-center text-gray-400'>Number of sites</h1>
            <div className='flex gap-5 items-center justify-center mt-4'>
              <button className={value < 2 ? 'cursor-not-allowed primary-color pb-1 rounded-xl text-4xl px-6 text-white': 'primary-color rounded-xl text-4xl px-6 text-white'  } onClick={decreaseValue}>-</button> 
              <p className='text-3xl'>{value}</p>
              <button className='primary-color rounded-xl text-4xl px-6 pb-1 text-white' onClick={increaseValue}>+</button>
            </div>
            <br />
            <p>Includes full site scan, malware removal, and security hardening.</p>
            <button  className='w-full primary-color text-2xl mt-5 py-2 rounded-md text-white'>Login to Proceed</button>
          </div>
           
        </div>
      </div>
    </div>
    </div>
  )
}

export default Security
