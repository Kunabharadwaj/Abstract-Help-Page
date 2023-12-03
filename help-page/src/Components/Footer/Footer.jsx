import React from 'react'
import '../Footer/Footer.css'
import { useState } from 'react'
import useWindowSize from '../NavBar/hooks/useWindowSize';

const Footer = () => {
  const size = useWindowSize();
  return (

    <>
    
    {size.width >1024 && (
      <div>
      <h1>Desktop Footer</h1>
    </div>
    )}
    
    
    {size.width < 1024 && (
      <h1>Mobile Footer</h1>
      )}
    
    </>
    
    
  )
}

export default Footer
