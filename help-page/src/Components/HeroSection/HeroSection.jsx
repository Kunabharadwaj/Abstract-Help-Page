import React from 'react'
import '../HeroSection/HeroSection.css'
import { GoArrowRight } from "react-icons/go";

const HeroSection = () => {
  return (
    <section id="main-HeroSection">
      <div class="main-HeroSection__container">
        <h1> How can we help? </h1>
        <div class="main-HeroSection__input">
          <input type='text' placeholder='Search'/>
          <GoArrowRight />
        </div>
      </div>
      
    </section>
  )
}

export default HeroSection