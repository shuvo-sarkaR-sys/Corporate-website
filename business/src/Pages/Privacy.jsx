import React from 'react'

const Privacy = () => {
  return (
    <div className='dark:text-white lg:mx-64 mx-14' id='privacy'>
      <h1 className='text-center md:text-4xl lg:text-5xl text-3xl mt-10 font-bold'>Privacy Policy</h1>
      <p className='text-center mt-5'>Last Updated: <strong>November 9, 2024</strong></p>
      <div>
        <h1 className='text-2xl font-medium mt-10 mb-4'>1. Information We Collect</h1>
        <p>At <strong>Digital solution</strong> , we collect the following types of information:</p>
        <br />
        <ul className='list-disc'>
            <li>Personal Information: We collect your name, email address, and billing details when you sign up, contact us, or complete a payment transaction.</li>
            <li>Technical Information: We collect your IP address, browser type, and device information when you use our site, including during visits, sign-ups, and sign-ins.</li>
            <li><strong>Other Information:</strong> Feedback, queries, or details you share with us.</li>
        </ul>
        <h1 className='text-2xl font-medium mt-10 mb-4'>2. How We Use Your Information</h1>
        <ul className='list-disc'>
            <li>To provide and improve our services.</li>
            <li>To respond to your questions and requests.</li>
            <li>To process payments securely.</li>
            <li>To send updates or promotional emails (you can opt-out anytime)</li>
            <li>To analyze website performance and enhance user experience.</li>
        </ul>
        <h1 className='text-2xl font-medium mt-10 mb-4'>3. Sharing your Information</h1>
            <p>We do not sell your personal information. however, we may share your data with:</p>
            <ul className='list-disc'>
                <li><strong>Service Providers:</strong>We may share your data with third-party service providers, including:</li>
               <li>Clerk for authentication</li>
               <li>Stripe for payment processing</li>
               
               <li>Email platforms for communication</li>
               <li>Tawk.to for live chat support</li>
              <li>Resend for email notifications</li>
             <li><strong>Legal Authorities:</strong> When required by law.</li>
            </ul>
           <p className='text-2xl mt-10 mb-4 font-medium'>4. Cookies and Tracking</p>
           <p>We use cookies to enhance functionality and analyze traffic. You can disable cookies through your browser settings, but some features may not work as intended.</p>
           <h1 className='text-2xl font-medium mt-10 mb-4'>5. How We Protect Your Information</h1>
           <p className='mb-2'>We implement strong security measures to keep your data safe, including:</p>
           
           <ul className='list-disc'>
            <li>Encrypted connections (SSL).</li>
            <li>Restricting access to sensitive information.</li>
            <li>Regularly monitoring systems for vulnerabilities.</li>
           </ul>
           <h1 className='text-2xl font-medium mt-10 mb-3'>6. Your Rights</h1>
           <p>You have the right to access, update, or delete your data. Contact us to exercise your rights.</p>
           <h1> Changes to This Policy</h1>
           <p>We may update this Privacy Policy. Any changes will be reflected with a new 'Last Updated' date.</p>
           <h1 className='text-2xl font-medium mt-10 mb-3'>7. Changes to This Policy</h1>
            <p>We may update this Privacy Policy. Any changes will be reflected with a new "Last Updated" date.</p>
            <h1 className='mt-10 mb-3 text-2xl font-medium'></h1>
            <p>For questions about these Terms:</p>
            <p><strong>Email:</strong><a href="https:www.digitalsolution.com"> support@digitalsolution.com</a></p>
            <p><strong>Phone:</strong>+12345678122</p>
            <p><strong>Address:</strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, accusantium.</p>
      </div>
    </div>
  )
}

export default Privacy
