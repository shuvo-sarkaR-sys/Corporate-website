import React from 'react'
import { useState } from 'react'
const EmailDeliverability = () => {
  const [value, setValue] = useState(1)
  const increaseValue = () => {
    setValue(value + 1)
    setDeletevalue(deleteValue + 299)
    setAmount(amount + 75)
  }
  const decreaseValue = () => {
    if (value > 1) {
      setValue(value - 1)
      setDeletevalue(deleteValue - 299)
      setAmount(amount - 75)
    }
  }
  const [deleteValue, setDeletevalue] = useState(299.00)
  const [amount, setAmount] = useState(75)

  return (
    <div className='dark:text-white'>
      <div className="flex mt-10 j dark:text-white md:mx-20 mx-10 flex-wrap lg:mx-40">
        <div className="lg:w-[60%] w-full">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-start">Struggling with Email Deliverability? We Have the Solution!</h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 my-10">Ensure Your Emails Reach the Inbox, Not the Spam Folder!</p>
          <p>Did you know that 53% of users abandon a site that takes more than 3 seconds to load? Similarly, emails that don't land in the inbox can cost you valuable engagement. Our expert team specializes in optimizing email deliverability, ensuring your messages reach your audience effectively.</p>
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
      <div>
        <div>
          <h1 className='text-5xl text-center font-bold mt-10'>Email Deliverability Solutions
          </h1>
          <p className='text-xl text-gray-500 text-center mt-5'>Resolve your email deliverability challenges with our expert services. Identify and fix issues that prevent your emails from reaching the inbox</p>
        
           <div className='flex flex-wrap mt-14 justify-between  md:mx-20 sm:mx-14 mx-10 lg:mx-40'>
            <div>
              <h1 className='text-3xl font-bold'>Complete Email Audit Service</h1>
              <p className='text-xl text-gray-700 mt-3'>Starting at just <del>${deleteValue}</del> ${amount}.00</p>
              <div className='flex my-4 gap-5 items-center'>
                <button className='p-0 px-4 pb-1 rounded-md  text-3xl bg-slate-200' onClick={decreaseValue}>-</button>
                <p className='text-3xl'>{value}</p>
                <button className='p-0 px-4 pb-1 rounded-md text-3xl bg-slate-200' onClick={increaseValue}>+</button>
              </div>
            </div>
            <div>
              <button className='primary-color p-2 px-6 text-white text-xl rounded-md'>Login to proceed</button>
            </div>
           </div>
        </div>
        <div className='flex gap-6 lg:mx-40 md:mx-20 mx-14 flex-wrap'>
          <div className='flex shadow-md p-8 rounded-md gap-5 w-full lg:w-[48%]'>
            <div><p className='primary-color text-3xl p-1 px-4 text-white text-center items-center rounded-full'>1</p></div>
            <div>
              <h1 className='font-bold'>Blacklisted IP addresses</h1>
             
              <p>Our experts will identify this issue and provide targeted solutions to improve your email deliverability..</p>
            </div>
          </div>
          <div className='flex shadow-md p-8 rounded-md gap-5 w-full lg:w-[48%]'>
            <div><p className='primary-color text-3xl p-1 px-4 text-white text-center items-center rounded-full'>2</p></div>
            <div>
              <h1 className='font-bold'>Spammy content or keywords</h1>
             
              <p>We’ll help you mitigate this problem to ensure your emails land in the inbox, not the spam folder.</p>
            </div>
          </div>
          <div className='flex shadow-md p-8 rounded-md gap-5 w-full lg:w-[48%]'>
            <div><p className='primary-color text-3xl p-1 px-4 text-white text-center items-center rounded-full'>3</p></div>
            <div>
              <h1 className='font-bold'>Incorrect DNS settings (SPF, DKIM, DMARC)</h1>
            
             
              <p>Our experts will identify this issue and provide targeted solutions to improve your email deliverability.</p>
            </div>
          </div>
          <div className='flex shadow-md p-8 rounded-md gap-5 w-full lg:w-[48%]'>
            <div><p className='primary-color text-3xl p-1 px-4 text-white text-center items-center rounded-full'>4</p></div>
            <div>
              <h1 className='font-bold'>Poor sender reputation</h1>
             
              <p>We’ll help you mitigate this problem to ensure your emails land in the inbox, not the spam folder.</p>
            </div>
          </div>
          <div className='flex shadow-md p-8 rounded-md gap-5 w-full lg:w-[48%]'>
            <div><p className='primary-color text-3xl p-1 px-4 text-white text-center items-center rounded-full'>5</p></div>
            <div>
              <h1 className='font-bold'>Lack of email authentication protocols</h1>
             
              <p>Our experts will identify this issue and provide targeted solutions to improve your email deliverability.</p>
            </div>
          </div>
          <div className='flex shadow-md p-8 rounded-md gap-5 w-full lg:w-[48%]'>
            <div><p className='primary-color text-3xl p-1 px-4 text-white text-center items-center rounded-full'>6</p></div>
            <div>
              <h1 className='font-bold'>High bounce rates</h1>
             
             
              <p>We’ll help you mitigate this problem to ensure your emails land in the inbox, not the spam folder.</p>
            </div>
          </div>
          <div className='flex shadow-md p-8 rounded-md gap-5 w-full lg:w-[48%]'>
            <div><p className='primary-color text-3xl p-1 px-4 text-white text-center items-center rounded-full'>7</p></div>
            <div>
              <h1 className='font-bold'>Low engagement rates (open/click-through rates)</h1>
             
              <p>Our experts will identify this issue and provide targeted solutions to improve your email deliverability.</p>
            </div>
          </div>
          <div className='flex shadow-md p-8 rounded-md gap-5 w-full lg:w-[48%]'>
            <div><p className='primary-color text-3xl p-1 px-4 text-white text-center items-center rounded-full'>2</p></div>
            <div>
              <h1 className='font-bold'>Email content flagged as suspicious</h1>
              
             
              <p>We’ll help you mitigate this problem to ensure your emails land in the inbox, not the spam folder.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailDeliverability
