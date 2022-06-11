import React from "react";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div>
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button onClick={() => onAdd(product)  }>Add To Cart</button>
        {/* <button onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button> */}
      </div>
    </div>
  );
}
