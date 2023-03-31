import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function handleClick() {
    setInCart((inCart) => !inCart);
  }

  const cartClass = inCart ? "in-cart" : "";
  const cartStatus = inCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>
        {cartStatus}
      </button>
    </li>
  );
}

export default Item;
