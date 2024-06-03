import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Product from './components/Product'
import Testmonial from './components/Testmonial'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Lowerfooter from './components/Lowerfooter'

export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <Portfolio/>
      <Testmonial/>
      <Product/>
      <Newsletter/>
      <Footer/>
      <Lowerfooter/>

    </>
  )
}

