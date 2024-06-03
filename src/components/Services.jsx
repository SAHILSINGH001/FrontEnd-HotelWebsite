import React,{useState} from 'react'
import './design1.css'
import services1 from '../assets/Services1.png';
import services2 from '../assets/Services2.png';
import services3 from '../assets/Services3.png';
export default function Services() {
   // const styles={
     //   backgroundColor: "#f9c74f",
    //}
    const [isHovering,setIsHovering]=useState({backgroundColor: "#f9c74f"});
    const handleMouseOver=()=>{
        setIsHovering({backgroundColor: "red"});
    }
  return (
    <section className='Services' id='services'>
     <div className='title_service'>
        <h1 className='yellow'>What we do ?</h1>
        <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
     </div>
     <div className='servicess'>
   <div className='service'>
    <img src={services2} alt='service2'></img>
    <p>He printing and Typesetting the industry.<span>Lorem Ipsum has been the industry</span></p>
    <button>Read More</button>
   </div>
   <div className='service '>
    <img src={services1} alt='service1'></img>
    <p>He printing and Typesetting the industry.<span>Lorem Ipsum has been the industry</span></p>
    <button style={isHovering} onMouseOver={handleMouseOver}>Read More</button>
   </div>
   <div className='service'>
    <img src={services3} alt='service3'></img>
    <p>He printing and Typesetting the industry.<span>Lorem Ipsum has been the industry</span></p>
    <button>Read More</button>
   </div>
     </div>
    </section>
  )
}
