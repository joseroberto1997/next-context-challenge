"use client";

import { SearchProductContext } from "@/app/contexts/SearchProductContext";
import { useContext } from "react";

const Input = () => {
  const { updateProduct } = useContext(SearchProductContext);

  const handleInput = (e: { target: { value: string } }) => {
    updateProduct(e.target.value);
  };

  return (
    <div className="relative mr-6 my-2 flex items-center justify-center">
      <input
        type="search"
        className="bg-purple-white rounded border-0 p-3 m-auto mt-5 shadow"
        placeholder="Search by product..."
        onChange={handleInput}
      />
    </div>
  );
};

export default Input;
