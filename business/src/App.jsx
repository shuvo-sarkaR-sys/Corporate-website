import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
 
import Footer from './Components/Footer';
 import Wordpress from './Pages/Wordpress'
 import Shopify from './Pages/Shopify';
 import Next from './Pages/Next'
  import Mern from './Pages/Mern'
 import Fullstack from './Pages/Fullstack';
 import Frontend from './Pages/Frontend'
 import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Malware from './Pages/Malware'
import Speed from './Pages/Speed'
import Security from './Pages/Security'
import EmailDeliverability from './Pages/EmailDeliverability';
import Blacklist from './Pages/Blacklist'
 import WebsiteMi from './Pages/WebsiteMi'
import SSL from './Pages/SSL'
import Ongoing from './Pages/Ongoing'
function App() {
  const [darkMode, setDark] = useState(false);
  const handleClick = ()=>{
      setDark(!darkMode);
  }
  useEffect(()=>{
      if (darkMode) {
          document.documentElement.classList.add('dark')

      }
      else{
        document.documentElement.classList.remove('dark')
      }
  },[darkMode])
  return (
    <div className='dark:bg-[#030712]'>
      <BrowserRouter>
   <Navbar handleClick={handleClick} darkMode={darkMode}/>
    
   
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="wordpress" element={<Wordpress/>} />
    <Route path='next' element={<Next/>} />
    <Route path="shopify" element={<Shopify/>} />
    <Route path="fullstack" element={<Fullstack/>}/>
    <Route path="mern" element={<Mern/>} />
    <Route path='frontend' element={<Frontend/>} />

    {/* maintenance nav route */}
      <Route path='malware' element={<Malware/>} />
      <Route path='speed' element={<Speed/>} />
      <Route path='security' element={<Security/>} />
      <Route path='ongoing' element={<Ongoing/>} />
      <Route path='blacklist' element={<Blacklist/>} />
      <Route path="email deliverability" element={<EmailDeliverability/>}/>
      <Route path='website migration' element={<WebsiteMi/>}/>
      <Route path='ssl' element={<SSL/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
    </div>
  )
}

export default App
