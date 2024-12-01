import React from 'react'
import word from '../assets/wordpress.png'
import '../Components/nav.css'
const Wordpress = () => {
  return (
    <div>
      <h1 className='font-bold mt-20 text-5xl dark:text-white text-center'>WordPress Site Design &<br /> Development</h1>
      <p className='dark:text-white mt-8 text-center text-xl'>At 3Zero Digital, we develop WordPress sites with <strong>0 <br />Vulnerability, 0 Downtime,</strong> and <strong>0 Error.</strong> Built for perfection.</p>
      <div className='w-24 p-6 primary-color rounded-full m-auto'>
        <img src={word} alt="" />
      </div>
      <form action="submit">
        <div className='flex-col shadow-md p-10 md:mx-14 lg:mx-56'>
          <p className='text-xl font-bold mb-3'>Type of Website</p>
          <select className='font-semibold w-full border-2 rounded-md p-2 hover:border-purple-800' required id="">
            <option value="select type of website">Select type of website</option>
            <option value="Blog">Blog</option>
            <option value="Corporate">Corporate</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Portfolio">Portfolio</option>
            <option value="Newspaper">Newspaper</option>
            <option value="Magazine">Magazine</option>
            <option value="Education">Education</option>
            <option value="Non-profit">Non-profit</option>
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
                <div>
                  <input className='w-5 h-4 mr-2' type="checkbox" value='contact f0rm' />
                  <label htmlFor="input">Contact form</label></div>
                <div className='my-4'>
                   <input className='w-5 h-4 mr-2' type="checkbox" value="Search" />
                  <label htmlFor="input">Search</label>
                  </div>
                  <div >
                   <input className='w-5 h-4 mr-2' type="checkbox" value="Newsletter signup" />
                  <label htmlFor="input">Newssletter Signup</label>
                  </div>
                  <div className='my-4'>
                   <input className='w-5 h-4 mr-2 ' type="checkbox" value="booking system" />
                  <label htmlFor="input">Booking System</label>
                  </div>
                  <div>
                   <input className='w-5 h-4 mr-2' type="checkbox" value="social media integration" />
                  <label htmlFor="input">Social Media Integration</label>
                  </div>
              </div>
              <div  >
              <div>
                   <input className='w-5 h-4 mr-2' type="checkbox" value="ecommerce" />
                  <label htmlFor="input">E-commerce</label>
                  </div>
                  <div className='my-4'>
                   <input className='w-5 h-4 mr-2' type="checkbox" value="blog" />
                  <label htmlFor="input">Blog</label>
                  </div>
                  <div>
                   <input className='w-5 h-4 mr-2' type="checkbox" value="user login/registration" />
                  <label htmlFor="input">User Login/Registration</label>
                  </div>
                  <div className='my-4'>
                   <input className='w-5 h-4 mr-2' type="checkbox" value="portfoliio/gallery" />
                  <label htmlFor="input">Portfolio/Gallery</label>
                  </div>
                  <div>
                   <input className='w-5 h-4 mr-2' type="checkbox" value="Other" />
                  <label htmlFor="input">Other</label>
                  </div>
              </div>

            </div>
          </div>
          <br />
          <p className='text-xl font-bold mb-3'>Sample Sites or Design Links</p>
          <input className=' w-full border-2 mb-10 rounded-md p-2 hover:border-purple-800' placeholder='Paste your sample site or design link here' type='word' id="" />
          <p className='text-xl font-bold mb-3'>Your Name</p>
          <input className=' w-full border-2 mb-10 rounded-md p-2 hover:border-purple-800' placeholder='Enter your name' type='word' required id="" />
          <p className='text-xl font-bold mb-3'>Email Address</p>
          <input className=' w-full border-2 mb-10 rounded-md p-2 hover:border-purple-800' placeholder='Enter your email' type='email' required id="" />
          <p className='text-xl font-bold mb-3'>Additional Details or Questions</p>
          <input className=' w-full border-2 mb-10 rounded-md p-2 hover:border-purple-800' placeholder='Provide any additional details about your project' type='word' id="" />
          <button
            type="submit"
            className="primary-color p-2 w-full text-white rounded-md"
          >
            Submit
          </button>
          
        </div>

      </form>
    </div>
  )
}

export default Wordpress
