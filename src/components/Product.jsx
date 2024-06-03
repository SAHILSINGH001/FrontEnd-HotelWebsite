import React from 'react'
import './design1.css'
import product1 from '../assets/product1.jpg'
import product2 from '../assets/product2.jpg'
import product3 from '../assets/product3.jpg'
import product4 from '../assets/product4.jpg'
export default function Product() {
    const data=[
        {
            image:product1,
            name:"Chicken Burger",
            price:"$22.4/pcs"
        },
        {
            image:product2,
            name:"Tosted Bread",
            price:"$5.4/pcs"
        },
        {
            image:product3,
            name:"Egg Sandwich",
            price:"$8/pcs"
        },
        {
            image:product4,
            name:"Raspberry Cake",
            price:"$12.4/pcs"
        },
    ];

  return (
    <section className='Productss' id='product'>
    <div className='product_title'>
        <h1><span>Favourite  </span>All the Time!</h1>
    </div>
    <div className='products'>
        {
            data.map((product)=>{
                return(
                    <div className='product'>
                    <div className='image1'>
                        <img src={product.image} alt='productImage'></img>
                        </div>
                        <h2>{product.name}</h2>
                        <h3>{product.price}</h3>
                        <p>He Printing and Typsetting the industry.Lorem Ipsum here</p>
                        <button>Buy Now</button>
                    </div>
                );
            })
        }
    </div>
    </section>
  )
}
