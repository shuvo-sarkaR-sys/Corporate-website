import React from "react";

const Mern = () => {
  return (
    <div>
    <div className="flex mt-10 dark:text-white md:mx-20 mx-10 flex-wrap lg:mx-40">
      <div className="lg:w-1/2 w-full">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-start">Fullstack App Development with MERN Stack</h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 my-10">Dynamic, Scalable, and Efficient Web Applications Built to Empower Your Business.</p>
        <p>Unlock the power of modern web technologies with our MERN stack development services. We specialize in creating dynamic and scalable fullstack applications using MongoDB, Express.js, React, and Node.js. Whether you need a high-performance e-commerce platform, a robust SaaS solution, or a custom app, we deliver tailored solutions that drive growth and efficiency for your business.</p>
        <div className="gap-5 flex mt-5 text-white">
          <button className="p-2 rounded-md primary-color font-semibold">Build Your Fullstack Solution Today</button>
          <button className="p-2 rounded-md primary-color font-semibold">Book a call</button>
        </div>
      </div>
    <div className="lg:w-1/2 lg:pt-28 pt-10 pl-20 lg:pl-36 w-full h-full">
      <iframe
        width="380"
        height="200"
        src="https://www.youtube-nocookie.com/embed/na2iB6nBzIc?controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    </div>
    <div>
      <h1></h1>
    </div>
    
    </div>
  );
};

export default Mern;
