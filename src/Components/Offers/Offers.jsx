import React, { useContext } from 'react'
import './Offers.css'
import exclusive_image from'../Assets/exclusive_image.png'
import { ShopContext } from '../../Context/ShopContext'
function Offers() {
      const {dark}=useContext(ShopContext)

  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button           style={{color:dark?"white":"black"}}
>Check Now</button>
        </div>
        <div className="offers-tight">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers