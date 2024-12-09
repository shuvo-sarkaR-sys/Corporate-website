import React from "react";
import mernIng from '../assets/mern-speed.webp'
import mernSecurity from '../assets/mern-security.webp'
import mernSpeed from '../assets/mern-customization.webp'
import rocket from '../assets/rocket (1).png'
const Mern = () => {
  return (
    <div>
      <div className="flex mt-10 dark:text-white md:mx-20 mx-10 flex-wrap lg:mx-40">
        <div className="lg:w-1/2 w-full">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-start">Fullstack App Development with MERN Stack</h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 my-4 lg:my-10">Dynamic, Scalable, and Efficient Web Applications Built to Empower Your Business.</p>
          <p>Unlock the power of modern web technologies with our MERN stack development services. We specialize in creating dynamic and scalable fullstack applications using MongoDB, Express.js, React, and Node.js. Whether you need a high-performance e-commerce platform, a robust SaaS solution, or a custom app, we deliver tailored solutions that drive growth and efficiency for your business.</p>
          <div className="gap-5 flex mt-5 text-white">
            <button className="p-2 rounded-md primary-color font-semibold">Build Your Fullstack Solution Today</button>
            <button className="p-2 rounded-md primary-color font-semibold">Book a call</button>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pt-28 pt-10   lg:pl-36 w-full h-full">
          <iframe
            width="350"
            height="200"
            src="https://www.youtube-nocookie.com/embed/na2iB6nBzIc?controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="mx-5">
        <h1 className="text-center text-3xl mt-10 lg:mt-20 font-bold lg:text-4xl dark:text-white">Key Benefits of MERN stack</h1>
        <br />
        <div className="flex flex-wrap items-center lg:mx-40" >
          <img className="lg:w-1/2 pr-10 w-full" src={mernIng} alt="" />
          <div className="lg:w-1/2 dark:text-white w-full">
            <img className="h-12 w-12" src={rocket} alt="" />
            <br /><p className="text-2xl font-bold">High-Performance Applications</p>
            <br />
            <p>We specialize in building fast, scalable, and efficient applications using the MERN stack. By leveraging MongoDB, Express.js, React, and Node.js, we deliver solutions that handle high traffic, perform exceptionally, and provide seamless user experiences. Every line of code is optimized for speed, ensuring your app runs at peak performance.</p>
          </div>
        </div>
      </div>

      <div className="mx-5">
        <div className="flex flex-wrap-reverse items-center lg:mx-40" >
          <div className="lg:w-1/2 dark:text-white w-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 text-sky-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>

            <br /><p className="text-2xl font-bold">End-to-End Security</p>
            <br />
            <p>Security is at the heart of everything we build. Our MERN stack solutions come with robust security layers, including encrypted connections, secure API development, and vulnerability prevention strategies. We implement advanced techniques like JWT authentication, role-based access control, and real-time monitoring to keep your data safe and your users protected.

            </p>
          </div>
          <img className="lg:w-1/2 pr-10 w-full" src={mernSecurity} alt="" />

        </div>
        <br />
        <br />
        <div className="flex flex-wrap items-center lg:mx-40" >
          <img className="lg:w-1/2 pr-10 w-full" src={mernSpeed} alt="" />
          <div className="lg:w-1/2 dark:text-white w-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 text-sky-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>

            <br /><p className="text-2xl font-bold">Tailored Solutions for Your BusinessTailored Solutions for Your Business</p>
            <br />
            <p>We don’t believe in one-size-fits-all. Our MERN stack development services are customized to meet your unique business needs. From creating highly interactive front-end interfaces to building powerful back-end systems, we design solutions that align perfectly with your goals. We also ensure seamless integration with third-party APIs and services to maximize your app’s functionality.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mern;
