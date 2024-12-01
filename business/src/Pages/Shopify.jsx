import React from 'react'

const Shopify = () => {
  return (
    <div>
    <h1 className='font-bold mt-20 text-5xl dark:text-white text-center'>WordPress Site Design &<br /> Development</h1>
    <p className='dark:text-white mt-8 text-center text-xl'>At 3Zero Digital, we develop WordPress sites with <strong>0 <br />Vulnerability, 0 Downtime,</strong> and <strong>0 Error.</strong> Built for perfection.</p>
    <div className='w-24 p-6 primary-color mt-5 rounded-full m-auto'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-13 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

    </div>
    <form action="submit">
      <div className='flex-col rounded-md shadow-md p-10 md:mx-14 lg:mx-56'>
        <p className='text-xl font-bold mb-3'>Type of Store</p>
        <select className='font-normal w-full border-2 rounded-md p-2 hover:border-purple-800' required id="">
          <option value="select type of website">Select type of store</option>
          <option value="Fashion">Fashion</option>
          <option value="electronics">Electronics</option>
          <option value="beauty">Beauty</option>
          <option value="health">Health</option>
          <option value="home decor">Home Decor</option>
          <option value="Jewelary">Jewelary</option>
          <option value="sports">Sports</option>
          <option value="Non-profit">other</option>
        </select>
        <p className='text-xl font-normal mb-3 mt-10'>Estimated Budget</p>
        <select className=' font-semibold mb-10 w-full border-2 rounded-md p-2 hover:border-purple-800' required id="">
          <option value="select type of  website">Select estimated budget</option>
          <option value="200-500">$200 - $500</option>
          <option value="500-1000">$500 - $1000</option>
          <option value="1000-5000">$1000 - $5000</option>
          <option value="5000-10000">$5000 - $10000</option>
          <option value="10000+">$10000+</option>

        </select>
         
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
                <input className='w-5 h-4 mr-2' type="checkbox" value='Payment Gateway Integration' />
                <label htmlFor="input">Payment Geteway Integration</label></div>
              <div className='my-4'>
                 <input className='w-5 h-4 mr-2' type="checkbox" value="Inventory Management" />
                <label htmlFor="input">Inbentory Management</label>
                </div>
                <div >
                 <input className='w-5 h-4 mr-2' type="checkbox" value="SEO Optimization" />
                <label htmlFor="input">SEO Optimization</label>
                </div>
                <div className='my-4'>
                 <input className='w-5 h-4 mr-2 ' type="checkbox" value="Social Media integration" />
                <label htmlFor="input">Social Media Integration</label>
                </div>
                <div>
                 <input className='w-5 h-4 mr-2' type="checkbox" value="Customer Reviews" />
                <label htmlFor="input">Customer Reviews</label>
                </div>
            </div>
            <div  >
            <div>
                 <input className='w-5 h-4 mr-2' type="checkbox" value="discout coupons" />
                <label htmlFor="input">Discout Coupons</label>
                </div>
                <div className='my-4'>
                 <input className='w-5 h-4 mr-2' type="checkbox" value="Analytics & Reporting" />
                <label htmlFor="input">Analytics & Reporting</label>
                </div>
                <div>
                 <input className='w-5 h-4 mr-2' type="checkbox" value="Live Chat" />
                <label htmlFor="input">Live Chat</label>
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

export default Shopify
