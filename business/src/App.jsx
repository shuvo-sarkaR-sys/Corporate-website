import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
 
import Footer from './Components/Footer';
 import Wordpress from './Pages/Wordpress'
 import Shopify from './Pages/Shopify';
 import Next from './Pages/Next'
  import Mern from './Pages/Mern'
 import Fullstack from './Pages/Fullstack';
 import Frontend from './Pages/Frontend'
 import Static from './Pages/Static'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
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
    <Route path="static" element={<Static/>}/>
     
   </Routes>
   <Footer/>
   </BrowserRouter>
    </div>
  )
}

export default App
