import React, {  useState } from 'react'
import c1 from '../assets/image (1).webp'
import c2 from '../assets/image (2).webp'
import c3 from '../assets/image (3).webp'
import c4 from '../assets/image (4).webp'
import c5 from '../assets/image (5).webp'
import c6 from '../assets/image (6).webp'
import c7 from '../assets/image (7).webp'
import c8 from '../assets/image (8).webp'
import c9 from '../assets/image (9).webp'
import c10 from '../assets/image (10).webp'
import c11 from '../assets/image (11).webp'
import './nav.css'
import p1 from '../assets/image (16).webp'
import p2 from '../assets/image (17).webp'
import shield from '../assets/shield.png'
import clock from '../assets/clock.png'
import s1 from '../assets/s1.webp'
const Companies = () => {
  const images = [
    c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11
  ]
  const handleClick = ()=>{
    setShow(!show)
  }
const [show, setShow] = useState(false)
  return (
 <div className='overflow-hidden w-full dark:bg-[#0B1120] relative'>
  <h1 className='text-center mb-10 mt-5 font-semibold text-3xl md:text-4xl dark:text-white'>Companies that Trust Us</h1>
   <div className="flex gap-10 items-center animate-scroll">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className=" h-full flex-shrink-0"
          />
        ))}
        {images.map((image, index) => (
          <img
            key={`copy-${index}`}
            src={image}
            alt={`Slide Copy ${index + 1}`}
            className=" h-full flex-shrink-0"
          />
        ))}
      </div>
 <h1 className='text-center font-bold text-3xl md:text-4xl dark:text-white'>Our Case Studies</h1>
 <p className='text-center text-xl dark:text-white my-5'>Learn more about how we helped businesses achive their goals</p>
{!show ? (<div className='dark:bg-[#111827]   dark:text-white rounded-md shadow-lg flex flex-wrap p-5 md:p-10 md:mx-32 mx-8 lg:mx-40'>
  <div className='relative md:pr-10 lg:w-1/2 w-full md:w-1/2'>
  <div> 
    <img className='rounded-md' src={p1} alt="" />
    <p className='absolute top-2 rounded-md left-2 p-1 bg-red-600'>Before</p>
    </div>
   <div className='relative'>
    <img className='rounded-md' src={p2} alt="" />
    <p className='bg-green-600 p-1 px-2 rounded-lg absolute top-2 left-2'>after</p>
  </div>
  </div>
  <div className='md:w-1/2 lg:w-1/2 w-full'>
    <h1 className='md:text-3xl text-2xl mb-5 font-bold'>Malware Detection and Removal from WooCommerce Checkout Page</h1>
    <p>A WooCommerce site was compromised by a malware script that hijacked the checkout page to steal payment details. We detected, removed the malicious code, and strengthened the site's security, ensuring safe transactions
       for customers. </p>
       <div className='mt-10 flex gap-4 items-center'>
        <img className='w-6 h-6' src={shield}alt="" />
        <div >
        <h2 className='text-xl font-semibold '>Out come</h2>
        <p className='text-gray-600 dark:text-gray-400'>Identified and eliminated a malicious script that intercepted customer payment information.</p>
        </div>
       </div>
       <div className='flex gap-4 mt-5 items-center'>
        <img className='w-6 h-6' src={clock} alt="" />
        <div> 
        <h1 className='text-xl front-semibold'>Services</h1>
        <p className='dark:text-gray-400 text-gray-600'>Fix Hacked site, Malware Detection and Removal, WordPress Security</p>
        </div>
       </div>
  </div>
 </div>):(
 <div className='dark:bg-[#111827]  dark:text-white rounded-md shadow-lg flex gap-10 md:gap-0 lg:gap-0 flex-wrap p-10 md:mx-32 mx-8 lg:mx-40'>
 <div className='relative md:pr-10 lg:w-1/2 w-full md:w-1/2'>
 <div> 
   <img className="rounded-lg w-full h-auto max-h-96 md:max-h-[500px] transition-transform duration-500 object-cover" src={s1} alt="" />
   <p className='absolute top-2 rounded-md left-2 p-1 bg-red-600'>Before</p>
   </div>
  
 </div>
 <div className='md:w-1/2 w-full lg:w-1/2'>
   <h1 className='text-3xl mb-5 font-bold'>Creating a Personalized Jewelry Shopping Experience on Shopify</h1>
   <p>Crafted a bilingual Shopify jewelry
     store with personalized product options, live chat, email marketing, and secure e-commerce
     features for a seamless customer experience. </p>
      <div className='mt-10 flex gap-4 items-center'>
       <img className='w-6 h-6' src={shield}alt="" />
       <div >
       <h2 className='text-xl font-semibold '>Out come</h2>
       <p className='text-gray-600 dark:text-gray-400'>Delivered a cost-effective, bilingual Shopify jewelry store with personalized product options, enhanced customer engagement, 
        and seamless e-commerce functionality.</p>
       </div>
      </div>
      <div className='flex gap-4 mt-5 items-center'>
       <img className='w-6 h-6' src={clock} alt="" />
       <div> 
       <h1 className='text-xl front-semibold'>Services</h1>
       <p className='dark:text-gray-400 text-gray-600'>Shopify design, bilingual setup, product personalization, live chat, email marketing, reviews, payment gateway, and launch prep.</p>
       </div>
      </div>
 </div>
</div>

 )}
<div className='flex justify-center gap-5 mt-12'>
<button className='p-2 px-4 primary-color text-white rounded-full text-xl' onClick={handleClick}>Prev</button>
<button className='p-2 px-4 primary-color text-white rounded-full text-xl' onClick={handleClick}>Next</button>
</div>
 </div>
  )
}

export default Companies
