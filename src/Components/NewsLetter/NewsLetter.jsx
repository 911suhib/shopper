import React, { useContext } from "react";
import "./NewsLetter.css";
import { ShopContext } from "../../Context/ShopContext";
function NewsLetter() {
  const { dark } = useContext(ShopContext);

  return (
    <div className="newsletter">
      <h1 style={{ color: dark ? "white" : "black" }}>
        Get Exclusive Ofeers On Your Email
      </h1>
      <p style={{ color: dark ? "white" : "black" }}>
        Subscrive to our newletter and stay updated
      </p>
      <div>
        <input type="email" placeholder="Your Email id" />
        <button>Subscibe</button>
      </div>
    </div>
  );
}

export default NewsLetter;
