import React from 'react'
import '../Components/nav.css'
const Error4= () => {
  return (
    <div className='dark:text-white lg:mx-72 mx-7'>
      <h1 className='text-center text-4xl font-bold my-5'>Fix 404 Errors</h1>
      <p className='text-centen text-xl text-gray-500 mb-5'>Ensure your website provides a seamless experience by fixing broken links and 404 errors. Our expert team will identify and resolve these issues swiftly.</p>
      <div className='primary-color p-8 flex items-center justify-between rounded-xl'>
        <div>
          <h1 className='md:text-4xl text-2xl font-bold text-white'>404 Error Fix</h1>
          <p className='text-white'>Only $30</p>
        </div>
        <button className='bg-white dark:bg-slate-800 px-7  md:h-12 text-lg rounded-xl'>Purchase Now</button>
      </div>
      <div className='flex gap-5 flex-wrap mt-10'>
        <div className='bg-slate-300 md:w-[45%] p-6 rounded-xl dark:bg-slate-800'>
          <h1 className='text-center text-xl font-bold'>What's Included</h1>
          <div className='flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-green-700">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
<p>Identification of broken links across your site.</p>
</div>
<div className='flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-green-700">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
<p>Redirect setup to guide users back to the right pages.</p>
</div>
<div className='flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-green-700">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
<p>Onging monitoring to prevent future 404 errors.</p>
</div>
        </div>
        <div className='bg-slate-300 p-6  md:w-1/2 rounded-xl dark:bg-slate-800'>
          <h1 className='text-center text-xl font-bold'>What's Included</h1>
         <p className=' text-center mt-6'>Our team specializes in identifying and fixing 404 errors quickly, ensuring your website remains functional and your users stay happy.</p>
        </div>
      </div>
    </div>
  )
}

export default Error4
