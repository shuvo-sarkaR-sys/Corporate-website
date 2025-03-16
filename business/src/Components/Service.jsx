import React, { useEffect } from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
 import {motion} from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
 
import './nav.css'
import wordpress from '../assets/wordpress.png'
import web1 from '../assets/web1.webp'
 import html from '../assets/html.png'
 import p2 from '../assets/folder.png'
 import web2 from '../assets/m1.webp'
 import kid from '../assets/bug (1).png'
 import rocket from '../assets/rocket (1).png'
 import shield from '../assets/shield.png'
 import mail from '../assets/mail.png'
 import bug from '../assets/web.png'
 import e1 from '../assets/e1.webp'
 import f1 from '../assets/f11.png'
 import gsap from 'gsap';
 import { ScrollTrigger } from 'gsap/ScrollTrigger';
const Service = () => {
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      '.text1',
      {opacity: 0, y: -50},
      
      
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: '.text1',
          start: "top 80%",
          end: "top 10%",
          ease: "Power2.out",
          scrub: true,
        }
      }
    )
  }, [])


  return (
    <div className='mt-14'>
      <h1 className='text1 md:text-4xl text-3xl text-center font-bold dark:text-white'>Explore Our Services</h1>
      <p className='text-gray-600 text1 text-xl text-center dark:text-gray-400 mt-4'>Discover how we can help you grow and optimize your online presence.</p>
      <div className='custom-pagination  flex-wrap  flex justify-center  gap-7 mt-10' >
        <div className='primary-color text-white  p-2 px-5 py-3 rounded-md'>Development</div>
        <div className='primary-color text-white p-2 px-5 rounded-md'>Maintenance</div>
        <div className='primary-color text-white p-2 px-5 rounded-md'>Troubleshooting</div>
        <div className='primary-color text-white p-2 px-5 rounded-md'>Marketing</div>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination", 
        }}

        modules={[Autoplay, Pagination,  ]}
         
      >
        <SwiperSlide>
          <div   
       className='lg:mx-40 mx-4 mt-10'>
            <h1 className='text-2xl  font-bold   dark:text-white'>Comprehensive development services for modern web platforms, e-commerce, and full-stack applications.</h1>
            <div className='flex flex-wrap  '>
              <div className='md:w-1/2 lg:w-1/2 w-full'>
                <div className='flex gap-7 mt-5  items-center'>
                  <img className='w-7 h-7' src={wordpress} alt="" />
                  <div>
                    <h1 className='font-medium dark:text-white'>WordPress Solutions</h1>
                    <p className='text-gray-500 dark:text-gray-400'>Custom themes, plugins, and WordPress site development.</p>
                  </div>

                </div>
                <div className='flex gap-7 mt-5  items-center'>
                 <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
                  <div>
                    <h1 className='font-medium dark:text-white'>Headless WordPress & Next.js</h1>
                    <p className='text-gray-500 dark:text-gray-400'>Build modern, high-performance headless wordPress sites with Next.js.</p>
                  </div>

                </div>
                <div className='flex gap-7 mt-5  items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
                  <div>
                    <h1 className='font-medium dark:text-white'>Shopify Development</h1>
                    <p className='text-gray-500 dark:text-gray-400'>Create Scalable and engaging e-commerce stores using Shopify.</p>
                  </div>

                </div>
                <div className='flex gap-7 mt-5  items-center'>
                <img className='w-7 h-7' src={p2} alt="" />
                  <div>
                    <h1 className='font-medium dark:text-white'>Fullstack Next.js Applications</h1>
                    <p className='text-gray-500 dark:text-gray-400'>End-to-end Next.js application development.</p>
                  </div>

                </div>
                <div className='flex gap-7 mt-5  items-center'>
                 <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
                   <div>
                    <h1 className='font-medium dark:text-white'>MERN Stack Development</h1>
                    <p className='text-gray-500 dark:text-gray-400'>Custom themes, plugins, and WordPress site development.</p>
                  </div>

                </div>
                <div className='flex gap-7 mt-5  items-center'>
                  <img className='w-7 h-7' src={html} alt="" />
                  <div>
                    <h1 className='font-medium dark:text-white'>Static HTML & CSS Websites</h1>
                    <p className='text-gray-500 dark:text-gray-4'>Custom themes, plugins, and WordPress site development.</p>
                  </div>

                </div>
                <div className='flex gap-7 mt-5  items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-violet-700">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
</svg>

                  <div>
                    <h1 className='font-medium dark:text-white'>Front-end development</h1>
                    <p className='text-gray-500 dark:text-gray-400'>Modern front-end development using HTML, CSS, Javascript.</p>
                  </div>

                </div>
              </div>
              <div className='lg:w-1/2 w-full md:w-1/2'>
                <img src={web1} alt="" />
              </div>
            </div>
          </div></SwiperSlide>


      
       
          <SwiperSlide>
          <div className='lg:mx-40 mx-4 mt-10'>
            <h1 className='text-2xl  font-bold  dark:text-white'>Keep your website secure and up-to-date with our maintenance services.</h1>
            <div className='flex flex-wrap items-center '>
              <div className='lg:w-1/2 w-full md:w-1/2'>
                <div className='flex gap-7 mt-5  items-center'>
                  <img className='w-7 h-7' src={kid} alt="" />
                  <div>
                    <h1 className='font-medium dark:text-white'>WordPress Malware Removal</h1>
                    <p className='text-gray-500 dark:text-gray-400'>Fix hacked sites with malware or redirect issues.</p>
                  </div>

                </div>
                <div className='flex gap-7 mt-5  items-center'>
                  <img className='w-7 h-7' src={rocket} alt="" />
                  <div>
                    <h1 className='font-medium dark:text-white'>WordPress Speed Optimization</h1>
                    <p className='text-gray-500 dark:text-gray-400'>Speed up your WordPress website for optimal performance.</p>
                  </div>

                </div>
                <div className='flex gap-7 mt-5  items-center'>
                 <img className='w-7 h-7' src={shield} alt="" />
                  <div>
                    <h1 className='font-medium dark:text-white'>WordPress Security</h1>
                    <p className='text-gray-500 dark:text-gray-400'>Speed up your WordPress website for optimal performance.,</p>
                  </div>

                </div>
                <div className='flex gap-7 mt-5  items-center'>
                <img className='w-7 h-7' src={shield} alt="" />
                  <div>
                    <h1 className='font-medium dark:text-white'>Ongoing WordPress Maintenance</h1>
                    <p className='text-gray-500 dark:text-gray-400'>Continuous backups, updates, and monitoring.</p>
                  </div>

                </div>
                <div className='flex gap-7 mt-5  items-center'>
                  <img className='h-7 w-7' src={mail} alt="" />
                    <div>
                    <h1 className='font-medium dark:text-white'>Email Deliverability Issues</h1>
                    <p className='text-gray-500 dark:text-gray-400'>Resolve issues with email deliverability, spam filters and blacklisting.</p>
                  </div>

                </div>
                
                 

              
              </div>
              <div className='lg:w-1/2 w-full md:w-1/2'>
                <img src={web2} alt="" />
              </div>
            </div>
          </div></SwiperSlide>
          <SwiperSlide>
          <div className='lg:mx-40 mx-4 mt-10'>
            <h1 className='text-2xl fadeIn font-bold  dark:text-white'>Comprehensive development services for modern web platforms, e-commerce, and full-stack applications.</h1>
            <div className='flex flex-wrap items-center fadeIn'>
              <div className='lg:w-1/2 w-full md:w-1/2'>
                <div className='flex gap-7 mt-5  items-center'>
                  <img className='w-7 h-7' src={bug} alt="" />
                  <div>
                    <h1 className='font-medium dark:text-white'>404 Page</h1>
                    <p className='text-gray-500 dark:text-gray-400'>Fix 404 errors and ensure proper redirection.</p>
                  </div>

                </div>
                <div className='flex gap-7 mt-5  items-center'>
                    <img className='h-7 w-7' src={bug} alt="" />
                   <div>
                    <h1 className='font-medium dark:text-white'>500 Page</h1>
                    <p className='text-gray-500 dark:text-gray-400'>Resolve 500 internal Server Errors.</p>
                  </div>

                </div>
                <div className='flex gap-7 mt-5  items-center'>
 <img className='h-7 w-7' src={bug} alt="" />
                  <div>
                    <h1 className='font-medium dark:text-white'>403 Forbidden</h1>
                    <p className='text-gray-500 dark:text-gray-400'>Fix 403 errors for access issues.</p>
                  </div>

                </div>
                <div className='flex gap-7 mt-5  items-center'>
                <img className='w-7 h-7' src={bug} alt="" />
                  <div>
                    <h1 className='font-medium dark:text-white'>Mixed Content Error</h1>
                    <p className='text-gray-500 dark:text-gray-400'>Resolve mixed content error to ensure all elements are loaded securely.</p>
                  </div>

                </div>
                <div className='flex gap-7 mt-5  items-center'>
                  <img className='h-7  w-7' src={bug} alt="" />
 
                    <div>
                    <h1 className='font-medium dark:text-white'>White Screen Of Death</h1>
                    <p className='text-gray-500 dark:text-gray-400'>Diagnose and fix the white screen issue that makes your site inaccssible.</p>
                  </div>

                </div>
                
                
              </div>
              <div className='md:w-1/2 lg:w-1/2 w-full'>
                <img src={e1} alt="" />
              </div>
            </div>
          </div></SwiperSlide>
          <SwiperSlide>
          <div className='lg:mx-40 mx-4 mt-10'>
            <h1 className='text-2xl fadeIn font-bold w-[699px] dark:text-white'>Drive traffic and increase conversions with targeted marketing strategies.</h1>
            <div className='flex flex-wrap items-center fadeIn'>
              <div className='md:w-1/2 lg:w-1/2 w-full'>
                <div className='flex gap-7 mt-5  items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-violet-600 font-bold">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

                  <div>
                    <h1 className='font-medium dark:text-white'>3D Model</h1>
                    <p className='text-gray-500 dark:text-gray-400'>Create stunning 3D models for your business or projects.</p>
                  </div>

                </div>
                <div className='flex gap-7 mt-5  items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-blue-800">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>
                  <div>
                    <h1 className='font-medium dark:text-white'>3D Render Image</h1>
                    <p className='text-gray-500 dark:text-gray-400'>Generate high-quality 3D render images for visualization and marketing.</p>
                  </div>

                </div>
                <div className='flex gap-7 mt-5  items-center'>
                <img className='h-7 w-7' src={rocket} alt="" />
                  <div>
                    <h1 className='font-medium dark:text-white'>SEO Optimization</h1>
                    <p className='text-gray-500 dark:text-gray-400'>Optimize your site for search engine visibility.</p>
                  </div>

                </div>
                <div className='flex gap-7 mt-5  items-center'>
                <img className='w-7 h-7' src={p2} alt="" />
                  <div>
                    <h1 className='font-medium dark:text-white'>Backlink Building</h1>
                    <p className='text-gray-500 dark:text-gray-400'>Increase your site's authority through strategic backlink building.</p>
                  </div>

                </div>
                <div className='flex gap-7 mt-5  items-center'>
                    <img className='h-7 w-7' src={f1} alt="" />
                    <div>
                    <h1 className='font-medium dark:text-white'>Social Media Marketing</h1>
                    <p className='text-gray-500 dark:text-gray-400'>Boost your brand's online presence with effective social media marketing.</p>
                  </div>

                </div>
              
                 
                  
              </div>
              <div className='md:w-1/2 lg:w-1/2 w-full'>
                <img src={web1} alt="" />
              </div>
            </div>
          </div></SwiperSlide>
      </Swiper>


     
    </div>
  );
};

export default Service;
