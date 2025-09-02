import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { MdDarkMode } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems,dark,setDark } = useContext(ShopContext);
   return (
    <div className='navbar' style={{background:dark?"black":"white"}}>
      <div className='nav-left'>
        <div className='nav-logo'>
          <img src={logo} alt="Logo" />
          <p style={{color:dark?"white":"black"}}>SHOPPER</p>
        </div>
      </div>

      <ul className='nav-menu' >
        <li onClick={() => setMenu("shop")}>
          <Link style={{color:dark?"white":"black"}} to='/' className='nav-link'>Shop</Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link style={{color:dark?"white":"black"}} to='/mens' className='nav-link'>Men</Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link style={{color:dark?"white":"black"}} to='/womens' className='nav-link'>Women</Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{color:dark?"white":"black"}} to='/kids' className='nav-link'>Kids</Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

      <div className='nav-login-cart'>
        <MdDarkMode style={{padding:"20px",width:"35px",height:"35px",cursor:'pointer',color:dark?"white":"black"}} onClick={()=>{setDark(!dark)}}/>

        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'>
         <FaShoppingCart style={{color:dark?"white":"black",height:"30px",width:"30px "}} />

        </Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
