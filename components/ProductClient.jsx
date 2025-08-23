"use client";
import { useState } from "react";
import Counter from "@/components/Counter";
import AddToCart from "@/components/AddToCart";

const ProductClient = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex items-center gap-4">
      <Counter quantity={quantity} setQuantity={setQuantity} widthSize={'w-10'} heightSize={'py-[.8rem]'} />
      <AddToCart productSlug={product.slug} quantity={quantity} />
    </div>
  );
};

export default ProductClient;
