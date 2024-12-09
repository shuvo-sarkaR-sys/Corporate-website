import React from 'react'
import { useState } from 'react'
const Speed = () => {
  const [value, setValue] = useState(1)
  const increaseValue = () => {
    setValue(value + 1)
    setDeletevalue(deleteValue + 199)
    setAmount(amount + 99)
  }
  const decreaseValue = () => {
    if (value > 1) {
      setValue(value - 1)
      setDeletevalue(deleteValue - 199)
      setAmount(amount - 99)
    }
  }
  const [deleteValue, setDeletevalue] = useState(199.00)
  const [amount, setAmount] = useState(99)

  return (
    <div className='dark:text-white'>
      <div className="flex mt-10 j dark:text-white md:mx-20 mx-10 flex-wrap lg:mx-40">
        <div className="lg:w-[60%] w-full">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-start">Your Slow Website is Costing You Customers!</h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 my-10">Every Second of Delay = Lost Revenue!</p>
          <p>Did you know? 53% of users leave a site that takes more than 3 seconds to load. Supercharge your WordPress site with our expert speed optimization services – faster loading, higher conversions, and better rankings, guaranteed.</p>
          <div className="gap-5 flex mt-5 text-white">
            <button className="p-2 rounded-md primary-color font-semibold">Remove My Website Now</button>
            <button className="p-2 rounded-md primary-color font-semibold">Book a call</button>
          </div>
        </div>
        <div className="lg:w-1/3 lg:pt-28 pt-10  lg:pl-32 w-full h-full">
          <iframe
            width="350"
            height="220"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>

        </div>
      </div>
      <h1 className='text-center text-4xl mt-14 font-bold'>
        WordPress Speed Optimization
      </h1>
      <p className='text-center text-xl text-gray-600 mx-10 lg:mx-40 mt-5 lg:mt-8'>Supercharge your WordPress site with our comprehensive speed optimization services. Improve loading times, enhance user experience, and boost your search engine rankings.

      </p>

      <div className='flex flex-wrap shadow-lg md:mx-28 mx-10  p-10 lg:mx-40 rounded-md gap-4'>
        <div className='lg:w-[48%] w-full'>
          <h1 className='text-xl font-bold'>Common Issues Indicating Malware</h1>
          <div className='my-4 flex gap-2'>
            <div className=" primary-color px-3  h-6 p-1 rounded-full"> </div>
            <p>Hardened file permissions for critical WordPress files</p>
          </div>

          <div className='my-4 flex gap-2'>

            <div className=" primary-color px-3 h-6 p-1 rounded-full"> </div>
            <p>Advanced firewall protection against DDoS and brute force attacks</p>
          </div>

          <div className='my-4 flex gap-2'>

            <div className=" primary-color px-3 h-6 p-1 rounded-full"> </div>
            <p>Prevention of user enumeration and unauthorized access</p>
          </div>
          <div className='my-4 flex gap-2'>

            <div className=" primary-color px-3 h-6 p-1 rounded-full"> </div>
            <p>Form security enhancements with anti-spam measures
            </p>
          </div>

          <div className='my-4 flex gap-2'>

            <div className=" primary-color px-3 h-6 p-1 rounded-full"> </div>
            <p>Secure login with custom URLs and multi-factor authentication
            </p>
          </div>
          <div className='my-4 flex gap-2'>

            <div className=" primary-color px-3 h-6 p-1 rounded-full"> </div>
            <p>Protection against SQL injection, XSS, and other common exploits
            </p>
          </div>

          <div className='my-4 flex gap-2'>

            <div className=" primary-color px-3 h-6 p-1 rounded-full"> </div>
            <p>
              Automated malware scanning and removal
            </p>
          </div>

          <div className='my-4 flex gap-2'>

            <div className=" primary-color px-3 h-6 p-1 rounded-full"> </div>
            <p>
              Real-time monitoring and threat detection
            </p>
          </div>

          <div className='my-4 flex gap-2'>

            <div className=" primary-color px-3 h-6 p-1 rounded-full"> </div>
            <p>
              Regular updates for plugins, themes, and WordPress core</p>
          </div>



        </div>
        <div className='shadow-md p-10 w-full lg:w-1/2 rounded-md'>
          <h1 className='text-2xl font-bold lg:mt-14 text-center mb-5'>Malware Removal Service</h1>
          <p className='text-3xl font-bold text-gray-500 text-center'><del>${deleteValue}.00</del></p>
          <p className='text-center font-bold text-3xl '>${amount}.00</p>
          <p className='text-center text-gray-400 mt-2'>One-time fee (for 1 site)</p>
          <div>
            <h1 className='text-center text-gray-400'>Number of sites</h1>
            <div className='flex gap-5 items-center justify-center mt-4'>
              <button className={value < 2 ? 'cursor-not-allowed primary-color pb-1 rounded-xl text-4xl px-6 text-white' : 'primary-color rounded-xl text-4xl px-6 text-white'} onClick={decreaseValue}>-</button>
              <p className='text-3xl'>{value}</p>
              <button className='primary-color rounded-xl text-4xl px-6 pb-1 text-white' onClick={increaseValue}>+</button>
            </div>
            <br />
            <p>Includes full site scan, malware removal, and security hardening.</p>
            <button className='w-full primary-color text-2xl mt-5 py-2 rounded-md text-white'>Login to Proceed</button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Speed
