/* eslint-disable @next/next/no-img-element */
"use client";

import { SearchProductContext } from "@/app/contexts/SearchProductContext";
import { useContext } from "react";

const Product = () => {
  const { products, newProducts } = useContext(SearchProductContext);

  const listProducts = newProducts.length > 0 ? newProducts : products;

  return (
    <div className="flex flex-wrap gap-16 items-center justify-center w-100 my-16">
      {listProducts.map((product: any) => (
        <div
          key={product.productId}
          className="border-2 border-emerald-500 p-4 rounded-lg max-w-96 max-h-full size-full shadow"
        >
          <img
            src={product.items[0].images[0].imageUrl}
            alt={product.productName}
            className="mb-8"
          />
          <div className="flex flex-col gap-4 items-center">
            <h2>{product.productName}</h2>
            <p>Marca: {product.brand}</p>
            <p>Preço: {product.items[0].sellers[0].commertialOffer.Price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
