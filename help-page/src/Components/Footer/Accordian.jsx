import React from 'react'
import { useState } from 'react';


const Accordian = ({id,title,list}) => {
    const [isActive, setIsActive] = useState(false)
  return (
    <div id="Footer">
      <div class="accordian">
        <div class="accordian__title" onClick={()=>setIsActive(!isActive)}>
            <div>{title}</div>
            <div clacss="accordian__icon">{isActive ? "-" :  "+"}</div>
        </div>

        <div class="accordian__content">
            {isActive && (<div>{list.map((list)=>(
                <li>{list}</li>
            ))}</div>)}
        </div>
      </div>
      
    </div>
  )
}

export default Accordian
