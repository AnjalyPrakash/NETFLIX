import React, { useEffect, useState } from 'react'
import './Nav.css'
import Logo from '../Images/netflix.png'

function Nav() {
  const [show,setShow]=useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>600){
        setShow(true)
      }
      else{
        setShow(false)
      }
    })
  })
  return (
    <div className={`${show && 'nav-bar'} nav`}>
        <img src={Logo} style={{width:'150px'}} alt="no image" />
    </div>
  )
}
export default Nav