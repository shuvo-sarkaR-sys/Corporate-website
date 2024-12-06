import React, { useEffect, useState } from 'react'

const Blacklist = () => {
  const data = [
    {
      name: 'Abusix',
      price: 25,
      exprice: 44
    }, {
      name: 'AdminusLabs',
      price: 25,
      exprice: 44
    },
    {
      name: 'AegisLap',
      price: 25,
      exprice: 44
    },
    {
      name: 'Ahnlab',
      price: 25,
      exprice: 44
    },
    {
      name: 'AlLabs(Monitorapp)',
      price: 25,
      exprice: 44
    },
    {
      name: 'Alibaba',
      price: 25,
      exprice: 44
    },
    {
      name: "AlienVault",
      price: 25,
      exprice: 44
    },
    {
      name: 'AlphaMountain',
      price: 25, 
      exprice: 44
    }, {
      name: 'Abusix',
      price: 25,
      exprice: 44
    }, {
      name: 'AdminusLabs',
      price: 25,
      exprice: 44
    },
    {
      name: 'AegisLap',
      price: 25,
      exprice: 44
    },
    {
      name: 'Ahnlab',
      price: 25,
      exprice: 44
    },
    {
      name: 'AlLabs(Monitorapp)',
      price: 25,
      exprice: 44
    },
    {
      name: 'Alibaba',
      price: 25,
      exprice: 44
    },
    {
      name: "AlienVault",
      price: 25,
      exprice: 44
    },
    {
      name: 'AlphaMountain',
      price: 25, 
      exprice: 44
    }


  ]


  const [valueamout, setValueAmount] = useState(25)
  const [total, setTotal] = useState(0)
  console.log(typeof(valueamout))
  const handleCheck = (e)=>{
   if(e.target.checked)
   {
    setValueAmount(parseFloat(e.target.value))
setTotal(total + valueamout)
   }
   else{
    setTotal(total - valueamout)
   }

   }
  //  useEffect(()=>{
  //    setTotal(total + valueamout)
  //  },[valueamout])
  return (
    <div className='dark:text-white'>
      <div className="flex mt-10 dark:text-white md:mx-20 mx-10 flex-wrap lg:mx-40">
        <div className="lg:w-1/2 w-full">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-start">Get Your Website Off Blacklists – Fast and Reliable!</h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 my-10">Being Blacklisted Costs You Traffic, Trust, and Revenue!</p>
          <p>Being Blacklisted Costs You Traffic, Trust, and Revenue!</p>
          <div className="gap-5 flex mt-5 text-white">
            <button className="p-2 rounded-md primary-color font-semibold">Remove My Website Now</button>
            <button className="p-2 rounded-md primary-color font-semibold">Book a call</button>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pt-28 pt-10 pl-20 lg:pl-36 w-full h-full">
        <iframe
  width="400"
  height="225"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>

        </div>
      </div>
      <div className='shadow-md rounded-md mx-20 md:mx-32 lg:mx-44'>
      <h1 className='lg:text-4xl text-3xl mt-10 text-center font-bold'>Blacklist Removal Service</h1>
      <p className='text-center text-gray-500 my-5'>Select the blacklists you want to remove. Each removal costs $25.00.</p>
      <div className='flex justify-between md:mx-20 mx-14 '>
        <div>
          <p className='text-3xl font-bold'>Total Price: ${total}.0</p>
          <p className='text-gray-500'>The total cost for removing the selected blacklists.</p>
        </div>
        <button className='px-10  primary-color text-white rounded-md font-bold'>Login to Proceed</button>
      </div>
      <div className='   flex flex-wrap  p-5 gap-10 mt-5 text-lg '>
        {data.map((items)=>(
          <div className='flex w-full rounded-xl lg:w-[48%] py-3 px-4 gap-10 justify-between items-center dark:bg-slate-800 dark:hover:bg-slate-900 bg-neutral-100 hover:bg-neutral-200'>
          <div className='items-center flex gap-3'><input onChange={handleCheck} className='w-5 h-5' type="checkbox" value={items.price} name={items.name} id={items.name} />
          <label htmlFor="items.name">{items.name}</label></div> 
          <div>
            <p><del>${items.exprice}.00</del></p>
          <p>${items.price}.00</p>
          </div>

          </div>
          
        ))}
      </div></div>
    </div>
  )
}

export default Blacklist
