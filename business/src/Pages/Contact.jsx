import React from 'react'
import '../Components/nav.css'
const Contact = () => {
  return (
    <div>
      <h1 className='text-center text-5xl mt-14 mb-5 font-extrabold'>Contact Us</h1>
      <p className='text-xl text-center'>Have quetions or need assistance? Reach out to us, and we will be happy to help.</p>
      <div className='grid-cols-3 mt-10  grid md:mx-20 mx-5 xl:mx-40'>
        <div> 
            <h1 className='text-2xl font-bold text-center'>Email</h1>
            <p className='xl:text-xl text-center'>Support@demo.com</p>
        </div>
        <div>
            <h1 className='text-2xl font-bold text-center'>Phone</h1>
            <p className='xl:text-xl text-center'>+44 12345678</p>
        
        </div>
        <div>
            <h1 className='text-2xl font-bold text-center' >Address</h1>
            <p className=' text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>

      <form action="submit" className='shadow-md rounded-md p-10 xl:mx-32 md:mx-16'>
        <label className='text-2xl font-semibold' htmlFor="input">What type of information do you need</label>
        <select id="input" className='w-full border p-3 text-gray-700 rounded-md mt-5'>
  <option value="Select what type of information do you need">Select what type of information do you need</option>
  <option value="Sales Inquiries">Sales Inquiries</option>
  <option value="Billing">Billing</option>
  <option value="audi">Technical Support</option>
  <option value="General Information">General Information</option>
  <option value="Other">Other</option>
</select>
<br />
<label className='text-2xl font-semibold mt-5' htmlFor="name">Name</label>
<input type="text" className='w-full border p-3 text-gray-700 rounded-md mt-3' id='name' placeholder='Your Name' />
<br />
<label className='text-2xl font-semibold mt-5' htmlFor="email">Email</label>
<input className='w-full border p-3 text-gray-700 rounded-md mt-3' type="email" id='email' placeholder='Enter your email' />
<br />
<label className='text-2xl font-semibold ' htmlFor="details">Additional Details or Questions</label>

<input className='w-full border p-3 text-gray-700 rounded-md mt-3' type="text" placeholder='Provide any additional details about your project'/>
<button className='primary-color p-2 mt-5 rounded-md px-10 text-white text-xl' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact
