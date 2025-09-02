import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

function CartItems() {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart, dark } =
    useContext(ShopContext); // تم تصحيح الإسم هنا

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p style={{ color: dark ? "white" : "black" }}>Product</p>
        <p style={{color:dark?"white":"black"}}>Title</p>
        <p style={{color:dark?"white":"black"}}>Price</p>
        <p style={{color:dark?"white":"black"}}>Quantity</p>
        <p style={{color:dark?"white":"black"}}>Total</p>
        <p style={{color:dark?"white":"black"}}>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <hr />
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} className="carticon-product-icon" alt="" />
                <p style={{color:dark?"white":"black"}}>{e.name}</p>
                <p style={{color:dark?"white":"black"}}>${e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p style={{color:dark?"white":"black"}}>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)} // تم تصحيح اسم الوظيفة هنا
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1 style={{color:dark?"white":"black"}}>cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p style={{color:dark?"white":"black"}}>Subtatl</p>
              <p style={{color:dark?"white":"black"}}> ${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p style={{color:dark?"white":"black"}}>Shipping Free</p>
              <p style={{color:dark?"white":"black"}}>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3 style={{color:dark?"white":"black"}}>Total</h3>
              <h3 style={{color:dark?"white":"black"}}>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button style={{color:dark?"white":"black"}}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p style={{color:dark?"white":"black"}}>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button style={{background:dark?"orange":"black"}}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
