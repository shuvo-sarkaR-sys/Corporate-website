import React from 'react'
import '../Components/nav.css'
const Error3 = () => {
  return (
    <div className='dark:text-white lg:mx-72 mx-10'>
    <h1 className='text-center text-4xl font-bold my-5'>Fix 403 Forbidden Errors</h1>
    <p className='text-center text-xl text-gray-500 mb-5'>Experiencing 403 Forbidden errors? Let us help you resolve these issues quickly, ensuring your website is accessible and compliant.</p>
    <div className='primary-color p-8 flex items-center justify-between rounded-xl'>
      <div>
        <h1 className='text-4xl font-bold text-white'>403 Error Fix</h1>
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
<p>Diagnosis of permission issues causing 403 errors.</p>
</div>
<div className='flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-green-700">
<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
<p>Correction of file and direactory permissions.</p>
</div>
<div className='flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-green-700">
<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
<p>Server configuration adjustments for access control.</p>
</div>
      </div>
      <div className='bg-slate-300 p-6 w-1/2 rounded-xl dark:bg-slate-800'>
        <h1 className='text-center text-xl font-bold'>Why Choose Us?</h1>
       <p className=' text-center mt-6'>Our team has the expertise to quickly identify and resolve 403 Forbidden errors, ensuring your website remains accessible and secure.</p>
      </div>
    </div>
  </div>
  )
}

export default Error3
