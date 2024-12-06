import React from 'react'
import { useState } from 'react'
const WebsiteMi = () => {
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
    <div>
      <div className="flex mt-10 j dark:text-white md:mx-20 mx-10 flex-wrap lg:mx-40">
        <div className="lg:w-[60%] w-full">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-start">Seamless Website Migration – Zero Downtime, 100% Reliability!</h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 my-10">Switch Hosts or domains Without Losing a Single Byte!</p>
          <p>Planning to migrate your website but worried about data loss, downtime, or SEO impact? We specialize in hassle-free website migration services to ensure your site runs smoothly on its new home. Over 500+ websites successfully migrated!</p>
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
          <h1 className='text-5xl text-center font-bold mt-10'>Website Migration Services</h1>
          <p className='text-xl text-gray-500 text-center mt-5'>Transition your website to a new platform or hosting provider with minimal downtime and zero data loss. <br /> Our expert team handles the entire process for a smooth migration.</p>
        
           <div className='flex flex-wrap mt-14 justify-between  md:mx-20 sm:mx-14 mx-10 lg:mx-40'>
            <div>
              <h1 className='text-3xl font-bold'>Full-Service website Migration</h1>
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
              <h1 className='font-bold'>Detailed site audit and planning</h1>
              <p>We carefully plan and execute eact step to ensure a seamless transition with no impact on your site's perfomance or SEO.</p>
            </div>
          </div>
          <div className='flex shadow-md p-8 rounded-md gap-5 w-full lg:w-[48%]'>
            <div><p className='primary-color text-3xl p-1 px-4 text-white text-center items-center rounded-full'>2</p></div>
            <div>
              <h1 className='font-bold'> Backup of existing site data and content</h1>
             
              <p>Our team ensures that your site remains fully functional throughout the migration process, with comprehensive testing and post-migration support.</p>
            </div>
          </div>
          <div className='flex shadow-md p-8 rounded-md gap-5 w-full lg:w-[48%]'>
            <div><p className='primary-color text-3xl p-1 px-4 text-white text-center items-center rounded-full'>3</p></div>
            <div>
              <h1 className='font-bold'>
              Setup and configuration of new hosting environment</h1>
             
              <p>We carefully plan and execute each step to ensure a seamless transition with no impact on your site’s performance or SEO.</p>
            </div>
          </div>
          <div className='flex shadow-md p-8 rounded-md gap-5 w-full lg:w-[48%]'>
            <div><p className='primary-color text-3xl p-1 px-4 text-white text-center items-center rounded-full'>4</p></div>
            <div>
              <h1 className='font-bold'>Migration of all content, databases, and files</h1>
             
              <p>Our team ensures that your site remains fully functional throughout the migration process, with comprehensive testing and post-migration support.</p>
            </div>
          </div>
          <div className='flex shadow-md p-8 rounded-md gap-5 w-full lg:w-[48%]'>
            <div><p className='primary-color text-3xl p-1 px-4 text-white text-center items-center rounded-full'>5</p></div>
            <div>
              <h1 className='font-bold'>Testing to ensure functionality and performance</h1>
             
              <p>We carefully plan and execute each step to ensure a seamless transition with no impact on your site’s performance or SEO.</p>
            </div>
          </div>
          <div className='flex shadow-md p-8 rounded-md gap-5 w-full lg:w-[48%]'>
            <div><p className='primary-color text-3xl p-1 px-4 text-white text-center items-center rounded-full'>6</p></div>
            <div>
              <h1 className='font-bold'>DNS update and go-live support</h1>
             
             
              <p>Our team ensures that your site remains fully functional throughout the migration process, with comprehensive testing and post-migration support.</p>
            </div>
          </div>
          <div className='flex shadow-md p-8 rounded-md gap-5 w-full lg:w-[48%]'>
            <div><p className='primary-color text-3xl p-1 px-4 text-white text-center items-center rounded-full'>7</p></div>
            <div>
              <h1 className='font-bold'>Post-migration support and monitoring</h1>
             
              <p>We carefully plan and execute each step to ensure a seamless transition with no impact on your site’s performance or SEO.</p>
            </div>
          </div>
          <div className='flex shadow-md p-8 rounded-md gap-5 w-full lg:w-[48%]'>
            <div><p className='primary-color text-3xl p-1 px-4 text-white text-center items-center rounded-full'>2</p></div>
            <div>
              <h1 className='font-bold'>SEO audit to maintain search rankings</h1>
              
             
              <p>Our team ensures that your site remains fully functional throughout the migration process, with comprehensive testing and post-migration support.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebsiteMi
