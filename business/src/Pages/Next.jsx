import React from 'react'
import '../Components/nav.css'
import performance1 from '../assets/performance-before.webp'
import performance2 from '../assets/performance-after.webp'
const Next = () => {
  return (
    <div>
       <div className=" dark:text-white mt-14 items-center flex justify-between flex-wrap gap-8 md:mx-20 lg:mx-44">
        <div className="lg:w-1/2 w-full">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-extrabold text-start">Headless WordPress & Next.js</h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 my-10">Build Faster, Safer Websites with Next.js and WordPress.</p>
          <p className='text-gray-500 dark:text-gray-400'>WordPress powers 43% of the web but is a prime target for hackers—90% of breached sites run WordPress. A hack means stolen data and lost trust. With headless WordPress and Next.js, we make your site virtually UNHACKABLE and secure.</p>
          <div className="gap-5 flex mt-5 text-white">
            <button className="p-2 rounded-md primary-color font-semibold">Make My Site Unhackable</button>
            <button className="p-2 rounded-md primary-color font-semibold">Book a call</button>
          </div>
        </div>
        <div className="lg:w-1/3 w-full ">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube-nocookie.com/embed/na2iB6nBzIc?controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
       
     <h1 className='mt-14 md:mx-28 lg:mx-60 text-center text-4xl font-bold'>How We Boosted Page Speed by 300% -- See the Stunning Results!</h1>
     <br />
     <p className='text-gray-500 text-center lg:px-10 md:mx-16 mx-5 text-xl  lg:mx-80 dark:text-gray-400'>Faster load times mean happier users, better engagement, and more conversions. See how we turned a sluggish website into a performance powerhouse, with load times that increase user retention and improve SEO rankings.</p>
<div className='flex  lg:flex-row flex-col md:flex-col gap-10 text-center mx-10 mt-10 lg:mx-40 text-sm text-black'>
  <div>
    <img className='shadow-md mb-4' src={performance1} alt="" />
    <p>Before: PageSpeed 25</p>
  </div>
  <div>
    <img className='shadow-md mb-4' src={performance2} alt="" />
    <p>After: PageSpeed 100</p>
  </div>
</div>
<div>
      <h1 className='font-bold mt-20 text-5xl dark:text-white text-center'>Headless WordPress & NextJs</h1>
      <p className='dark:text-white mt-8 text-center text-xl'>At 3Zero Digital, we develop WordPress sites with <strong>0 <br />Vulnerability, 0 Downtime,</strong> and <strong>0 Error.</strong> Built for perfection.</p>
      <div className='w-24 p-6 primary-color rounded-full m-auto mt-5'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 text-white ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>


      </div>
      <form action="submit">
        <div className='flex-col shadow-md p-10 md:mx-14 lg:mx-56'>
        <p className='text-xl font-bold mb-3'>Your Name</p>
        <input className=' w-full border-2 mb-10 rounded-md p-2 hover:border-purple-800' placeholder='Enter your name' type='word' required id="" />
        <p className='text-xl font-bold mb-3'>Email Address</p>
          <input className=' w-full border-2 mb-10 rounded-md p-2 hover:border-purple-800' placeholder='Enter your email' type='email' required id="" />
          <p className='text-xl font-bold mb-3'>Type of Website</p>
          <select className='font-semibold w-full border-2 rounded-md p-2 hover:border-purple-800' required id="">
            <option value="select type of website">Select type of website</option>
            <option value="Blog">Blog</option>
             <option value="Portfolio">Portfolio</option>
              
            <option value="Business">Business</option>
          </select>
          <p className='text-xl font-bold mb-3 mt-10'>Estimated Budget</p>
          <select className=' font-semibold mb-10 w-full border-2 rounded-md p-2 hover:border-purple-800' required id="">
            <option value="select type of  website">Select estimated budget</option>
            <option value="200-500">$200 - $500</option>
            <option value="500-1000">$500 - $1000</option>
            <option value="1000-5000">$1000 - $5000</option>
            <option value="5000-10000">$5000 - $10000</option>
            <option value="10000+">$10000+</option>

          </select>
          <p className='text-xl font-bold mb-3'>Number of Pages</p>
          <input className=' w-full border-2 mb-10 rounded-md p-2 hover:border-purple-800' placeholder='Enter number of pages' required type='number' id="" />


          <p className='text-xl font-bold mb-3'>Project Timeline</p>
          <select className=' w-full mb-10 border-2 rounded-md p-2 hover:border-purple-800' required id="">
            <option value="select type of website">Select project timeline</option>
            <option value="1-2months">1-2 months</option>
            <option value="2-3months">2-4 months</option>
            <option value="4-6months">4-6 months</option>
            <option value="Portfolio">6+ months</option>

          </select>
          <div>
            <p className='text-xl font-bold mb-3'>Required Functionalities</p>
            <div className='flex lg:gap-56 md:gap-16' required>
              <div >
                 
              
                <div className='my-4'>
                   <input className='w-5 h-4 mr-2' type="checkbox" value="Blog" />
                  <label htmlFor="input">Blog</label>
                  </div>
                  <div >
                   <input className='w-5 h-4 mr-2' type="checkbox" value="portfolio" />
                  <label htmlFor="input">portfolio</label>
                  </div>
                  <div className='my-4'>
                   <input className='w-5 h-4 mr-2 ' type="checkbox" value="seo optimization" />
                  <label htmlFor="input">Seo Optimization</label>
                  </div>
                  <div>
                   <input className='w-5 h-4 mr-2' type="checkbox" value="api integration" />
                  <label htmlFor="input">API Integration</label>
                  </div>
              </div>
              <div  >
              <div>
                   <input className='w-5 h-4 mr-2' type="checkbox" value="ecommerce" />
                  <label htmlFor="input">E-commerce</label>
                  </div>
                  <div className='my-4'>
                   <input className='w-5 h-4 mr-2' type="checkbox" value="user authentication" />
                  <label htmlFor="input">User Authentication</label>
                  </div>
                  <div>
                   <input className='w-5 h-4 mr-2' type="checkbox" value="Contact Forms" />
                  <label htmlFor="input">Contact Forms</label>
                  </div>
                  <div className='my-4'>
                   <input className='w-5 h-4 mr-2' type="checkbox" value="custom Design" />
                  <label htmlFor="input">Custom Design</label>
                  </div>
                  
              </div>

            </div>
          </div>
          <br />
          
          <p className='text-xl font-bold mb-3'>Additional Details or Questions</p>
          <input className=' w-full  border-2 mb-10 rounded-md p-2 hover:border-purple-800' placeholder='Provide any additional details about your project' type='word' id="" />
          <button
            type="submit"
            className="primary-color p-2 w-full text-white rounded-md"
          >
            Submit
          </button>
          
        </div>

      </form>
    </div>
    </div>
  )
}

export default Next
