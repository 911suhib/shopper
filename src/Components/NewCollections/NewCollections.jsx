import React, { useContext } from "react";
import "./NewCollections.css";
import new_collection from "../Assets/new_collections";
import Item from "../Item/Item";
import { ShopContext } from "../../Context/ShopContext";
function NewCollections() {
  const { dark } = useContext(ShopContext);

  return (
    <div className="new-collections">
      <h1 style={{ color: dark ? "white" : "black" }}>NEW COLLECTIONS</h1>
      <hr           style={{background:dark?"white":"black"}}
/>
      <div className="collections">
        {new_collection.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NewCollections;
