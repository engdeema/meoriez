import React from "react";

function Product({ element }) {
  return (
    <div className="each-item">
      <p className="naming">{element.name}</p>
      <p className="naming">{element.date}</p>
      <img src={element.photo} />
    </div>
  );
}

export default Product;
