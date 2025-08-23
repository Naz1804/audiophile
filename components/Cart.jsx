"use client";

import Image from "next/image"
import Link from "next/link"
import cart from '../public/assets/shared/desktop/icon-cart.svg'
import Counter from "./Counter"
import { useState } from "react";
import data from '@/lib/data.json'
import { useCart } from "./CartContext";


const Cart = () => {
  const [popUp, setPopUp] = useState(false);
  const { cartItems, updateQuantity, clearCart } = useCart();

  const fullCartItems = cartItems.map(cartItem => {
  const product = data.find(p => p.id === cartItem.id);
  if (!product) return null; // avoid breaking if not found

  return {
    ...product,
    quantity: cartItem.quantity
  };
}).filter(Boolean); // removes any nulls


  const total = fullCartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <>
      <button onClick={() => setPopUp(true)} className="sm:ml-auto">
        <Image src={cart} alt="cart" width={28} height={28} />
      </button>

      {popUp && 
      <>
        <div className="bg-black/50 fixed top-0 left-0 right-0 bottom-0 z-10 pointer-events-auto flex justify-center"
        onClick={() => setPopUp(!popUp)}>
        
          <div className="w-full max-w-[1110px] padding">

            {/* Cart Design */}
            <div className="max-w-[377px] w-full bg-white rounded-lg p-8 flex flex-col gap-8 mt-20 ml-auto"
            onClick={(e) => e.stopPropagation()}>
              
              <div className="flex justify-between">
                <h5>Cart ({cartItems.length})</h5>
                <button onClick={clearCart} className="underline text-black/50 hover:text-[#FBAF85]">Remove all</button>
              </div>

              <div className="flex flex-col gap-6">
                {fullCartItems.map(item => (
                  <div key={item.slug} className="flex items-center">
                    <Image src={item.image.mobile} alt={item.name} width={64} height={64} className="rounded-lg" />

                    <div className="flex flex-col mr-auto pl-4">
                      <p className="font-bold uppercase">{item.name_cart}</p>
                      <p className="text-black/50">${item.price.toLocaleString()}</p>
                    </div>

                    <Counter widthSize={'w-8'} heightSize={'py-[9.5px]'} 
                    quantity={item.quantity} setQuantity={(newQty) => updateQuantity(item.id, newQty)} />
                  
                  </div>
                ))}
              </div>

              <div className="flex justify-between">
                <p className="text-black/50 uppercase">Total</p>
                <h5>${total.toLocaleString()}</h5>
              </div>

              <Link href='/checkout' onClick={() => setPopUp(false)}
              className="link-btn orange-btn text-white w-full h-10 flex items-center justify-center">
                checkout
              </Link>
            </div>
          </div>
        </div>
      </>
      }
    </>
  )
}

export default Cart