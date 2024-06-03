import React from 'react';
import './design1.css';
import background from '../assets/portfolio.jpg';
export default function Portfolio() {
  return (
    <section className='Portfolioo' id='portfolio'>
    <div className='portfolio_background'>
        <img src={background} alt='backgroundimage'></img>
    </div>
    <div className='content_port'>
        <h1>Buy Premium Pan Free Hand Toasts!</h1>
        <h3>Lorem,ipsum dolar sit amet consecteture adipiscing elit.Modi,molestias</h3>
        <button>BUY NOW</button>
    </div>
    </section>
  )
}
