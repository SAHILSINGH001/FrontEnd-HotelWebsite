import React from 'react'
import './design2.css'
import logo from '../assets/FoodYummy.png'
import {AiFillInstagram} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
import {FaFacebook} from 'react-icons/fa';
import {GrLinkedinOption} from 'react-icons/gr';
export default function Footer() {
  return (
    <div className='footerr'>
    <section className='Footerss'>
    <div className='brand_container'>
        <img src={logo} alt='brandlogo'></img>
        <p>The npm package react-icon-library receives a total of 17 downloads a week.
         As such, we scored react-icon-library popularity level to be Limited.</p>
         <ul>
            <li><a href='/'><AiFillInstagram/></a></li>
            <li><a href='/'><BsTwitter/></a></li>
            <li><a href='/'><FaFacebook/></a></li>
            <li><a href='/'><GrLinkedinOption/></a></li>
         </ul>
    </div>
    <div className='brand_container'>
        <div className='about_title'>
            <h3>About Us</h3>
        </div>
        <p>The npm package react-icon-library receives a total of 17 downloads a week.
         As such, we scored react-icon-library popularity level to be Limited.</p>
    </div>
    <div className='brand_container'>
    <div className='about_title'>
            <h3>Contact Us</h3>
        </div>
        <p>+91 8770860364</p>
        <p>Sr9827184@gmail.com</p>
        <p>Durg,</p>
        <p>Chhattisgarh</p>
    </div>
    </section>
    
    </div>
  )
}
