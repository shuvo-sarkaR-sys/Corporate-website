import React, { useState } from 'react'
import '../Components/nav.css'
const FAQ = () => {
    const [text, setText] = useState(false)
    const [text1, setText1] = useState(false)
    const [text2, setText2] = useState(false)

    const [text3, setText3] = useState(false)
    const [text4, setText4] = useState(false)
    const [text5, setText5] = useState(false)
    const [text6, setText6] = useState(false)
    const [text7, setText7] = useState(false)
    const [text8, setText8] = useState(false)
    const [text9, setText9] = useState(false)
    const [text10, setText10] = useState(false)
    const [text11, setText11] = useState(false)
    const [text12, setText12] = useState(false)

    const handleClick = () => {
        setText(!text)
    }
    const handleClick1 = () => {
        setText(false)
        setText1(!text1)
    }
    const handleClick2 = () => {
        setText1(false)
        setText2(!text2)

    }
    const handleClick3 = () => {
        setText3(!text3)
        setText2(false)
    }
    const handleClick4 = () => {
        setText3(false)
        setText4(!text4)
    }
    const handleClick5 = () => {
        setText4(false)
        setText5(!text5)
    }
    const handleClick6 = () => {
        setText5(false)
        setText6(!text6)
    }
    const handleClick7 = () => {
        setText7(!text7)
        setText6(false)
    }
    const handleClick8 = () => {
        setText8(!text8)
        setText7(false)
    }
    const handleClick9 = () => {
        setText9(!text9)
        setText8(false)
    }
    const handleClick10 = () => {
        setText10(!text10)
        setText9(false)
    }
    const handleClick11 = () => {
        setText11(!text11)
        setText10(false)
    }
    const handleClick12 = () => {
        setText12(!text12)
        setText11(false)
    }
    return (
        <div className='lg:mx-64 dark:text-white mx-10 mt-10 '>
            <div onClick={handleClick} className='cursor-pointer border-b-2'>
                <div className='flex my-4 font-bold text-lg justify-between '>
                    <p>What makes Digital solution different from other agencies?</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-4 ${!text ? "button-animation" : ""}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
                {!text ? <></> : <p>We provide a wide range of services, including web development, maintenance, troubleshooting, digital marketing, and custom solutions like authentication systems and database management.</p>}
            </div>
            <div onClick={handleClick1} className='cursor-pointer border-b-2'>
                <div className='flex my-4 font-bold text-lg justify-between '>
                    <p>What makes Digital solution different from other agencies?</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-4 ${!text1 ? "button-animation" : ""}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
                {!text1 ? <></> : <p>We provide a wide range of services, including web development, maintenance, troubleshooting, digital marketing, and custom solutions like authentication systems and database management.</p>}
            </div>
            <div onClick={handleClick2} className='cursor-pointer border-b-2'>
                <div className='flex text-lg my-4 font-bold justify-between '>
                    <p>What makes Digital solution different from other agencies?</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-4 ${!text2 ? "button-animation" : ""}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
                {!text2 ? <></> : <p>At Digital solution, we prioritize achieving perfection with our digital solution principles: 0 Vulnerability, 0 Downtime, and 0 Error, ensuring robust, secure, and reliable solutions for our clients.</p>}
            </div>
            <div onClick={handleClick3} className='cursor-pointer border-b-2'>
                <div className='flex text-lg my-4 font-bold justify-between '>
                    <p>How can I get started with Digital solution?</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-4 ${!text3 ? "button-animation" : ""}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
                {!text3 ? <></> : <p>You can start by reaching out through our contact form on the website or emailing us directly. Let us know your requirements, and we'll guide you through the next steps.</p>}
            </div>
            <div onClick={handleClick4} className='cursor-pointer border-b-2'>
                <div className='flex text-lg my-4 font-bold justify-between '>
                    <p>Do you offer custom web development solutions?</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-4 ${!text4 ? "button-animation" : ""}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
                {!text4 ? <></> : <p>Yes, we specialize in custom web development tailored to your specific business needs, including backend systems, APIs, and integrations.</p>}
                  
            </div>
            <div onClick={handleClick5} className='cursor-pointer border-b-2'>
                <div className='flex text-lg my-4 font-bold justify-between '>
                    <p>Can you help with website security and malware removal?</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-4 ${!text5 ? "button-animation" : ""}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
                

              
                {!text5 ? <></> : <p>Absolutely! We have extensive experience in fixing hacked websites, removing malware, and implementing security measures to prevent future attacks.</p>}
            </div>
            <div onClick={handleClick6} className='cursor-pointer border-b-2'>
                <div className='flex text-lg my-4 font-bold justify-between '>
                    <p>What technologies do you use in your projects?</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-4 ${!text6 ? "button-animation" : ""}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
                {!text6 ? <></> : <p>Our team is proficient in JavaScript, TypeScript, Node.js, React, MongoDB, PostgreSQL, MySQL, and other modern technologies.</p>}
            </div>
            <div onClick={handleClick7} className='cursor-pointer border-b-2'>
                <div className='flex text-lg my-4 font-bold justify-between '>
                    <p>Do you provide support for WordPress websites?</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-4 ${!text7 ? "button-animation" : ""}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
                {!text7 ? <></> : <p>Yes, we offer WordPress services, including development, troubleshooting, migration, and template customization.</p>}
            </div>
            <div onClick={handleClick8} className='cursor-pointer border-b-2'>
                <div className='flex my-4 text-lg font-bold justify-between '>
                    <p>How do you ensure 0 Downtime in your solutions?</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-4 ${!text8 ? "button-animation" : ""}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
                {!text8 ? <></> : <p>We implement industry-best practices such as load balancing, optimized deployment pipelines, and robust server configurations to ensure maximum uptime.</p>}
            </div>
            <div onClick={handleClick9} className='cursor-pointer border-b-2'>
                <div className='flex my-4 text-lg font-bold justify-between '>
                    <p>Do you offer ongoing maintenance services?</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-4 ${!text9 ? "button-animation" : ""}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
                {!text9 ? <></> : <p>Yes, we provide comprehensive maintenance plans to ensure your website or application remains secure, updated, and fully functional.
                    </p>}
            </div>
            <div onClick={handleClick10} className='cursor-pointer border-b-2'>
                <div className='flex font-bold text-lg my-4 justify-between '>
                    <p>What is included in your $10 website launch campaign?</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-4 ${!text10 ? "button-animation" : ""}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
                {!text10 ? <></> : <p>Our $10 campaign includes a domain name, shared hosting, and a prebuilt WordPress template to help you launch your first website with minimal investment.</p>}
            </div>
            <div onClick={handleClick11} className=' cursor-pointer border-b-2'>
                <div className='flex my-4 text-lg font-bold justify-between '>
                    <p>Can you assist with setting up payment gateways?</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-4 ${!text11 ? "button-animation" : ""}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
                {!text11 ? <></> : <p>Yes, we can integrate and configure various payment gateways to suit your business needs, ensuring a secure and smooth transaction process for your customers.</p>}
            </div>
            <div onClick={handleClick12} className='cursor-pointer border-b-2'>
                <div className='flex my-4 text-lg font-bold justify-between '>
                    <p>How do you handle customer support? </p>
                   
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-4 ${!text12 ? "button-animation" : ""}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
                {!text12 ? <></> : <p>Our team is available to assist you via email or our support system, ensuring timely and effective resolutions to your queries.</p>}
            </div>
        </div>
    )
}

export default FAQ
