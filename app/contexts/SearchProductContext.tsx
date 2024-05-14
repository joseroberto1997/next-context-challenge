"use client";
import { createContext, useState } from "react";

interface SearchProductContextTypes {
  children?: React.ReactNode;
  products?: any;
  updateProduct: (term: string) => void;
  newProducts: any;
}

export const SearchProductContext = createContext(
  {} as SearchProductContextTypes
);

const SearchProductProvider = ({
  children,
  products,
}: {
  children: React.ReactNode;
  products: any;
}) => {
  const [newProducts, setNewProducts] = useState([]);

  const updateProduct = async (term: string) => {
    const data = await fetch(`/api/products/${term}`);
    const response = await data.json();

    setNewProducts(response.data);
  };

  return (
    <SearchProductContext.Provider
      value={{ products, updateProduct, newProducts }}
    >
      {children}
    </SearchProductContext.Provider>
  );
};

export default SearchProductProvider;
