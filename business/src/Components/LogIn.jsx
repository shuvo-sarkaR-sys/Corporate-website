import React, { useState } from 'react'

const LogIn = () => {
  const [show, setShow] = useState(false)
  const handleClick = ()=>{
    setShow(!show)
  }
  return (
    <div className='dark:text-white my-14'>
      { !show ?
       <div className='border rounded-xl w-[65%] p-4 md:p-10 md:w-1/3 mx-auto'>
      <h1 className='md:text-3xl text-xl font-medium'>Sign in to your account</h1>
      <p className='md:text-sm text-xs'>Enter your email below to login to your account</p>
      <form action="submit">
      <p className='mt-5'>Username</p>
      <input type="text" className='dark:bg-zinc-800 border w-full h-10 pl-3 rounded-md' placeholder='user@domain.com' required />
      <br />
      <button type='submit' className='primary-color p-1 px-2 mt-3 rounded-md text-white' >Sign In</button></form>
      <p className='text-sm mt-3 text-gray-500'>Don't have an account? <strong onClick={handleClick} className='underline cursor-pointer'>Register</strong></p>
     </div>: <div  className='border rounded-xl w-[65%] p-4 md:p-10 md:w-1/3 mx-auto' >
     <h1 className='md:text-3xl text-xl font-medium'>Create a new account</h1>
     <p className='md:text-sm text-xs' >Enter your details below to create your account</p>
        <form action="submit">
     <p className='mt-4'>First Name</p>
     <input className='dark:bg-zinc-800 border w-full h-10 pl-3 rounded-md' type="text" placeholder='First Name' />
     <p className='mt-3'>Last Name</p>
     <input type="text" className='dark:bg-zinc-800 border w-full h-10 pl-3 rounded-md' placeholder='Last Name' />
     <p className='mt-3'>Email</p>
     <input type="email" className='dark:bg-zinc-800 border w-full h-10 pl-3 rounded-md' placeholder='Email address' required/>
     <p className='text-gray-500 text-end'>Forgot password?</p>
     <button type='submit' className='primary-color w-full py-2 font-medium text-white rounded-md mt-4'>Register</button>
</form>
<p className='text-gray-500 mt-2'>Already have an account? <strong onClick={handleClick} className='underline cursor-pointer'>Login</strong></p>
      </div>}
    </div>
  )
}

export default LogIn
