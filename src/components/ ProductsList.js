import React from "react";
import Product from "./ Product";
import memoriesData from "./memoriesData";

function ProductsList() {
  const array = memoriesData.map((element) => <Product element={element} />);
  return <div className="list">{array}</div>;
}

export default ProductsList;
