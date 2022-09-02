import React from "react";
import { CartProvider } from "../componentApi/Context";
import { ApiTopPropduct } from "../componentApi/TopProductsApi";
import Product from "./Product";
const Products = () => {
  return (
    <div className="p-5 flex flex-wrap">
      {ApiTopPropduct.map((product, index, id) => (
        // <CartProvider>

        <Product item={product} id={id} key={index} />
        // <Cart item={product} id={id} key={index} />
      ))}
    </div>
  );
};

export default Products;
