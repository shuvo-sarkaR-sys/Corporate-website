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
import Error4 from './Pages/Error4';
import Error3 from './Pages/Error3'
import Error5 from './Pages/Error5'
import WhiteScreen from './Pages/WhiteScreen';
import Mixed from './Pages/Mixed'
import Privacy from './Pages/Privacy';
import FAQ from './Pages/FAQ';
import LogIn from './Components/LogIn';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
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
    <div className='dark:bg-[#030712] font-sans'>
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

<Route path='login' element={<LogIn/>} />


    {/* maintenance nav route */}
      <Route path='malware' element={<Malware/>} />
      <Route path='speed' element={<Speed/>} />
      <Route path='security' element={<Security/>} />
      <Route path='ongoing' element={<Ongoing/>} />
      <Route path='blacklist' element={<Blacklist/>} />
      <Route path="email deliverability" element={<EmailDeliverability/>}/>
      <Route path='website migration' element={<WebsiteMi/>}/>
      <Route path='ssl' element={<SSL/>}/>

      <Route path='error4' element={<Error4/>}  />
      <Route path='error5' element={<Error5/>}  />
      <Route path='error3' element={<Error3/>}  />
      <Route path='white screen' element={<WhiteScreen/>}  />
      <Route path='mixed' element={<Mixed/>}  />
      <Route path='privacy' element={<Privacy/>} />
      <Route path='faq' element={<FAQ/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='blog' element={<Blog/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
    </div>
  )
}

export default App
