import React from 'react'
import './design1.css'
export default function Newsletter() {
  return (
    <section className='Newsletters' id='newsletter'>
   <div className='newsletter_title'>
    <h1><span>Subscribe</span>  Newsletter</h1>
   
   <p>Providing insightful and actionable data in your small business newsletter helps gain credibility and build rapport with customers. Other credibility boosters include landing on a trusted senders list and using meaningful subject lines.</p>
</div>
  <div className='newsletter_container'>
    <input type='text' placeholder='Search for Food...'></input>
    <button>Search</button>
  </div>
    </section>
  )
}
