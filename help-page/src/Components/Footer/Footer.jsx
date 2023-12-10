import React from 'react'
import '../Footer/Footer.css'
import { useState } from 'react'
import useWindowSize from '../NavBar/hooks/useWindowSize';
import Accordian from './Accordian';

const Footer = () => {

  const data = [
    {
      id: 1,
      title: "Abstract",
      list: ["Start Trail", "Pricing", "Download"]
    },
    {
      id: 2,
      title: "Resources",
      list: ["Blog", "Help Center", "Release Notes", "Status"]
    },
    {
      id: 3,
      title: "Community",
      list: ["LinkedIn",
        "Facebook",
        "Dribbule",
        "Podcast"]
    },
    {
      id: 4,
      title: "Company",
      list: ["About Us",
        "Careers",
        "Legal"]
    },
    {
      id: 5,
      title: "Contact Us",
      list: "info@abstract.com"
    }
  ];


  const size = useWindowSize();
  return (

    <>

      {size.width > 1024 && (
        <div class="footer__desktop">
          <h2>© Developed by Front End Nakamas</h2>
        </div>
      )}


      {size.width < 1024 && (
        <div class="main-accordian">
          {data.map(({ id, title, list }) => (
            <Accordian key={id} title={title} list={list} />
          ))}
        </div>
      )}

    </>


  )
}

export default Footer
