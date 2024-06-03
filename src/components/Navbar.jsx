import React,{useState} from 'react'
import foodYummy from '../assets/FoodYummy.png'
import './design1.css';
import {GiHamburgerMenu} from 'react-icons/gi'
import {VscChromeClose} from 'react-icons/vsc'
export default function Navbar() {
    const [navbarState,setNavbarState]=useState(false);
    const html=document.querySelector("html");
    html.addEventListener("click",()=>setNavbarState(false));

  return (
    <>
    <div className='navbar'>
    <div className='brand'>
        <img src={foodYummy} alt='logo'></img>
        <div className='toogle'>
            {
                navbarState ? 
                <VscChromeClose onClick={()=>setNavbarState(false)}/> : <GiHamburgerMenu onClick={(e)=>{
                  e.stopPropagation();
                  setNavbarState(true);
                }}
                />
                }
                  
        </div>
    </div>
    <ul className='links'>
        <li><a href='#hero' className='active'>Home</a></li>
        <li><a href='#services'>Our Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testmonial'>Testmonials</a></li>
        <li><a href='#product'>Product</a></li>
        <li><a href='#newsletter'>Newsletter</a></li>
    </ul>
    </div>
    <div id='responsible' state={navbarState} className={navbarState ? "show":""}>

   
    </div>
    </>
  )
}
