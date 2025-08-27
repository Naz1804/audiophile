"use client";

import Image from "next/image";
import Tick from "@/public/assets/checkout/icon-order-confirmation.svg";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartContext";
import Items from "./Items";

const Ordered = ({ popUp, setPopUp, fullCartItems }) => {
  
  const [showAll, setshowAll] = useState(false);

  const { clearCart } = useCart();

  const total = fullCartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <button
        type="submit"
        form="myForm"
        className="link-btn orange-btn text-white w-full h-12 flex items-center justify-center"
      >
        continue & pay
      </button>

      {popUp && (
        <>
        {/* dim overlay */}
          <div className="bg-black/50 fixed top-0 left-0 right-0 bottom-0 z-10 pointer-events-auto padding"
          onClick={() => setPopUp(!popUp)}>

            <div className="max-w-[375px] sm:max-w-[540px] bg-white p-8 sm:p-12 rounded-lg flex flex-col gap-8 justify-self-center mt-20"
            onClick={(e) => e.stopPropagation()}>
              
              <Image src={Tick} alt="confrimation" width={64} height={64} />

              <h3>
                Thank you <br /> for your order
              </h3>

              <p>You will recieve an email confirmation shortly.</p>

              {/* cart box & total */}
              <div className="flex flex-col sm:flex-row w-full items-stretch">

                <Items fullcartItems={fullCartItems} showAll={showAll} setshowAll={setshowAll} />
                
                <div className={`bg-black rounded-b-lg sm:rounded-l-none sm:rounded-r-lg sm:w-[198px] flex flex-col justify-center py-4 pl-8 ${showAll ? "sm:pb-10" : ""}`}>
                  <p className={`text-white/50 ${showAll ? "mt-auto" : ""}`}>GRAND TOTAL</p>
                  <h5 className="text-white font-medium">${total.toLocaleString()}</h5>
                </div>
              </div>

              {/* return btn */}
              <Link
                href="/"
                onClick={clearCart}
                className="link-btn orange-btn text-white w-full h-12 flex items-center justify-center"
              >
                Back To Home
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Ordered;
