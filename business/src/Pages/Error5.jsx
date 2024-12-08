import React from 'react'

const Error5 = () => {
  return (
    <div className='dark:text-white lg:mx-72 mx-10'>
    <h1 className='text-center text-4xl font-bold my-5'>Fix 500 Errors</h1>
    <p className='text-center text-xl text-gray-500 mb-5'>Is your website showing 500 errors? Our professional service will quickly diagnose and fix the issues, ensuring your website remains reliable and operational.</p>
    <div className='primary-color p-8 flex items-center justify-between rounded-xl'>
      <div>
        <h1 className='text-4xl font-bold text-white'>500 Error Fix</h1>
        <p className='text-white'>Only $30</p>
      </div>
      <button className='bg-white dark:bg-slate-800 px-7 h-12 text-lg rounded-xl'>Purchase Now</button>
    </div>
    <div className='flex gap-5 mt-10'>
      <div className='bg-slate-300 p-6 rounded-xl dark:bg-slate-800'>
        <h1 className='text-center text-xl font-bold'>What's Included</h1>
        <div className='flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-green-700">
<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
<p>Diagnosis of server issues causing 500 errors.</p>
</div>
<div className='flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-green-700">
<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
<p>Fixes to server configurations and code issues.</p>
</div>
<div className='flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-green-700">
<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
<p>Post-fix monitoring to ensure stability.</p>
</div>
      </div>
      <div className='bg-slate-300 p-6 w-1/2 rounded-xl dark:bg-slate-800'>
        <h1 className='text-center text-xl font-bold'>Why Choose Us?</h1>
       <p className=' text-center mt-6'>We specialize in quickly diagnosing and resolving 500 server errors, ensuring your site remains online and fully functional.</p>
      </div>
    </div>
  </div>
  )
}

export default Error5
