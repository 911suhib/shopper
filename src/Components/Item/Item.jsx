import React, { useContext } from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

function Item(props) {
  const { dark } = useContext(ShopContext);

  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
      </Link>
      <p style={{ color: dark ? "white" : "black" }}>{props.name}</p>
      <div className="item-prices">
        <div           style={{color:dark?"white":"black"}}
 className="item-price-new">${props.new_price}</div>
        <div
          className="item-price-old"
          style={{ color: dark ? "white" : "black" }}
        >
          ${props.old_price}
        </div>
      </div>
    </div>
  );
}

export default Item;
