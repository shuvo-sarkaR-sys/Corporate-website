import React from 'react'
import './nav.css'
const Plan = () => {
    return (
        <div className='text-center dark:text-white mt-10 xl:mt-20'>
            <h1 className='text-green-700 mb-5 font-semibold'>Pricing</h1>
            <h1 className='text-4xl font-semibold '>Simple, scalable pricing.</h1>
            <p>No extra charges. No hidden fees</p>
            <br />
            <div id='price' className='flex mt-10'>
                <div className='mx-auto md:gap-5 gap-3 flex flex-wrap'>
                <div className='bg-[#f6efe9] dark:bg-zinc-900 w-[200px] h-[250px] md:w-[350px] md:h-[700px] xl:w-[520px] px-4 py-3 md:px-10 md:py-8 xl:h-[700px] rounded-2xl'>
                    <p className='text-purple-700 md:my-10 xl:my-10 md:text-xl font-bold'>Starter</p>
                    <p className='xl:text-5xl md:text-5xl text-2xl font-bold mb-6'>$49 <span className='md:text-lg text-sm'>/mo</span></p>
                    <p className='md:mb-10'>For creating impressive tools that generate results.</p>
                    <button className='primary-color mb-4 p-2 md:p-3 text-white md:text-2xl xl:w-[430px] rounded-lg'>Get started</button>
                    <p className='mb-5'>Billed annually</p>
                    <hr />
                    <div className='xl:block md:block hidden'>
                    <div className='flex gap-2 mt-5  '>
                        <div className='bg-purple-200 p-1 rounded-full'>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6 text-green-800">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                        </svg></div>
                        <p>Up to 10 individual users</p>
                    </div>
                  
                    <div className='flex gap-2 my-3'>
                        <div className='bg-purple-200 p-1 rounded-full'>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6 text-green-800">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                        </svg></div>
                        <p>Basic reporting and analytics</p>
                    </div>
                     
                    <div className='flex gap-2'>
                        <div className='bg-purple-200 p-1 rounded-full'>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6 text-green-800">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                        </svg></div>
                        <p>
                            Project Management</p>
                    </div>
                     
                    <div className='flex gap-2 my-3'>
                        <div className='bg-purple-200 p-1 rounded-full'>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6 text-green-800">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                        </svg></div>
                        <p>20GB individual data each user</p>
                    </div>
                    
                    <div className='flex gap-2 '>
                        <div className='bg-purple-200 p-1 rounded-full'>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6 text-green-800">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                        </svg></div>
                        <p>Basic chat and email support</p>
                    </div>
                    </div>
                </div>
                <div className='bg-[#f6efe9] dark:bg-zinc-900 w-[200px] h-[250px] md:w-[350px] xl:w-[520px] px-4 py-3 md:px-10 md:py-8 xl:h-[700px] md:h-[700px] rounded-2xl'>
                    <p className='text-purple-700 xl:my-10 md:my-10 text-xl font-bold'>Pro</p>
                    <p className='xl:text-5xl md:text-5xl text-2xl font-bold  mb-5'>$79 <span className='text-lg'>/mo</span></p>
                    <p className='xl:mb-10 md:mb-10 mb-1'>For seamless integrations and sending tools in bulk.</p>
                    <button className='primary-color mb-4 p-3 text-white  md:text-2xl  md:w-[230px] rounded-lg'>Start a free trial</button>
                    <p className='xl:mb-4 mb-5 md:mb-4'>Billed annually</p>
                    <hr />
                    <div className='xl:block md:block hidden'> 
                    <div className='flex gap-2 mt-5 '>
                        <div className='bg-purple-200 p-1 rounded-full'>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6 text-green-800">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                        </svg></div>
                        <p>Access to all Starter features</p>
                    </div>
                  
                    <div className='flex gap-2 my-3'>
                        <div className='bg-purple-200 p-1 rounded-full'>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6 text-green-800">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                        </svg></div>
                        <p>200+ integrations</p>
                    </div>
                     
                    <div className='flex gap-2'>
                        <div className='bg-purple-200 p-1 rounded-full'>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6 text-green-800">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                        </svg></div>
                        <p>
                        Unlimited team workspaces</p>
                    </div>
                     
                    <div className='flex gap-2 my-3'>
                        <div className='bg-purple-200 p-1 rounded-full'>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6 text-green-800">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                        </svg></div>
                        <p>Approval workflows</p>
                    </div>
                    
                    <div className='flex gap-2 '>
                        <div className='bg-purple-200 p-1 rounded-full'>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6 text-green-800">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                        </svg></div>
                        <p>Salesforce integration*</p>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Plan
