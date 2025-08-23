"use client";

import { useCart } from "./CartContext";
import data from "@/lib/data.json";
import { useState, useEffect, use } from "react";

const AddToCart = ({ productSlug, quantity }) => {
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!productSlug) return;

    const found = data.find(p => p.slug === productSlug);
    if (found) {
      setProduct(found);
    } else {
      console.warn("Product not found for slug:", productSlug);
    }
  }, [productSlug]);

  const handleAdd = () => {
    if (!product) return;
    addToCart(product, quantity);
  };

  return (
    <button className="btn-1" onClick={handleAdd}>
      Add to cart
    </button>
  );
};

export default AddToCart;

