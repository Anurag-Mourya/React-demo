import React from 'react'
import Navbar from './homeComponents/Navbar'
import Section1 from './homeComponents/Section1'
import Section2 from './homeComponents/Section2'
import Section3 from './homeComponents/Section3'
import Slider from './homeComponents/Slider'
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import SlickSlider from './homeComponents/SlickSlider'
import Iframe from './homeComponents/Iframe'
import SlickSlider2 from './homeComponents/SlickSlider2'
import Footer from './homeComponents/Footer'


function Home() {
 

  return (
    <div>
        <Navbar/>
        <Slider/>
        <Section1/>
        <Section2/>
        <Section3/>
         <SlickSlider/>
        <Iframe/>
        <SlickSlider2/>
        <Footer/>   
    </div>
  )
}

export default Home