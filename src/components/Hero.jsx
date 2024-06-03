import React from 'react'
import './design1.css'
import hero from '../assets/hero.jpg';
import heroDesign from '../assets/HeroDesign.png';

export default function Hero() {
  return (
    <section className='heros' id='hero'>
    <div className='background'>
    <img src={hero} alt='backgroundImage'></img>
</div>
<div className='content'>
    <div className='sale'>
        <img src={heroDesign} alt='sales'></img>
        <h1>BIG SALE<span>50% OFF</span></h1>
    </div>
    <div className='info'>
        <h2>RETAILER</h2>
        <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Loremv vvLorem Lorem Lorem Lorem </p>
        <button>ORDER NOW</button>
    </div>
</div>

    </section>
  )
}
