import React from 'react'
import './design1.css'
import avtarImage from '../assets/WhatsApp Image 2023-05-23 at 11.38.26 AM.jpeg';
export default function Testmonial() {
  return (
    <section className='Testmonialss' id='testmonial'>
        <div className='testmonials_container'>
            <div className='testmonial_title'>
                <h1>
                    <span>What</span> Customers Says
                </h1>
            </div>
            <div className='testmonials'>
                <div className='testmonial'>
                    <div className='image'>
                        <img src={avtarImage} alt='AvatarImage'></img>
                    </div>
                    <p>He Printing and Typesetting the industry.<span>Lorem has been the industry</span></p>
                </div>
                <div className='testmonial'>
                    <div className='image'>
                        <img src={avtarImage} alt='AvatarImage'></img>
                    </div>
                    <p>He Printing and Typesetting the industry.<span>Lorem has been the industry</span></p>
                </div>
                <div className='testmonial'>
                    <div className='image'>
                        <img src={avtarImage} alt='AvatarImage'></img>
                    </div>
                    <p>He Printing and Typesetting the industry.<span>Lorem has been the industry</span></p>
                </div>
            </div>
        </div>
    </section>
  )
}
