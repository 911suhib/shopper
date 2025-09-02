import React, { useContext } from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  const { dark } = useContext(ShopContext);

  return (
    <div className="fotter">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p           style={{color:dark?"white":"black"}}
>SHOPPER</p>
      </div>
      <ul className="footer-links"           style={{color:dark?"white":"black"}}
>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <a href="https://www.instagram.com/suhib._.alkhaldy?igsh=Y3RtdHI1cXUzN2tx">
          {" "}
          <FaInstagram
            style={{
              color: dark ? "white" : "black",
              width: "30px",
              height: "30px",
            }}
          />
        </a>

        <a href="https://wa.me/+962796095876">
          <FaWhatsapp
            style={{
              color: dark ? "white" : "black",
              width: "30px",
              height: "30px",
            }}
          />{" "}
        </a>
      </div>
      <div className="footer-copyright">
        <hr />
        <p           style={{color:dark?"white":"black"}}
>Copyright @ 2025 All Right Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
