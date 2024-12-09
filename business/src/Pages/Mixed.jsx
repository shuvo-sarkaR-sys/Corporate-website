import React from 'react'

const Mixed = () => {
  return (
    <div className='dark:text-white lg:mx-72 mx-10'>
    <h1 className='text-center text-4xl font-bold my-5'>Fix Mixed Content Errors</h1>
    <p className='text-centen text-xl text-gray-500 mb-5'>Are mixed content errors affecting your website's security and performance? Let us resolve these issues to ensure a fully secure and compliant website.</p>
    <div className='primary-color p-8 flex items-center justify-between rounded-xl'>
      <div>
        <h1 className='text-4xl font-bold text-white'>Mixed Content Error Fix</h1>
        <p className='text-white'>Only $30</p>
      </div>
      <button className='bg-white dark:bg-slate-800 px-7 h-12 text-lg rounded-xl'>Purchase Now</button>
    </div>
    <div className='flex flex-wrap gap-5 mt-10'>
      <div className='bg-slate-300 md:w-[45%] p-6 rounded-xl dark:bg-slate-800'>
        <h1 className='text-center text-xl font-bold'>What's Included</h1>
        <div className='flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-green-700">
<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
<p>Identification of mixed content issues on your website.</p>
</div>
<div className='flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-green-700">
<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
<p>Correction of insecure content links (HTTP to HTTPS).</p>
</div>
<div className='flex gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-green-700">
<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
<p>Verification of website security and HTTPS status.</p>
</div>
      </div>
      <div className='bg-slate-300 p-6 md:w-1/2  rounded-xl dark:bg-slate-800'>
        <h1 className='text-center text-xl font-bold'>What's Included</h1>
       <p className=' text-center mt-6'>Our experts will ensure that your website is fully secured with HTTPS, eliminating mixed content errors that could compromise your site’s performance and security.</p>
      </div>
    </div>
  </div>
  )
}

export default Mixed
