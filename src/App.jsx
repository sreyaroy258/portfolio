import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import HERO from './Components/HERO/HERO';
import About from './Components/About/About';
import MyWork from './Components/MyWork/MyWork';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


const App = () => {
  return (
    <div>
       <Navbar/>
       <HERO/>
      <About/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
