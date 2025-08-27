"use client"
import { useState } from "react";

import Goback from "@/components/Goback"
import Input from "@/components/Input"

import PayMethod from "@/components/PayMethod"
import Summary from "@/components/Summary"

import data from "@/lib/data.json";
import { useCart } from "@/components/CartContext";

const page = () => {
  const [popUp, setPopUp] = useState(false);
  const { cartItems } = useCart();

  const fullCartItems = cartItems.map(cartItem => {
  const product = data.find(p => p.id === cartItem.id);
  if (!product) return null; // avoid breaking if not found

  return {
    ...product,
    quantity: cartItem.quantity
  };
}).filter(Boolean);

  function handleSubmit(event) {
    event.preventDefault();

    const formIsValid = event.currentTarget.checkValidity();
    const cartHasItems = fullCartItems.length > 0;

    if (formIsValid && cartHasItems) {
      setPopUp(true);
    } else {
      event.currentTarget.reportValidity();

      if(!cartHasItems) {
        alert("Your cart is empty.")
      }
    }
  }

  return (
    <section className="bg-[#FAFAFA]">

      <div className="max-w-[1110px] mx-auto pt-10 pb-20 padding">
        <Goback />

        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* Checkout */}
          <form id="myForm" onSubmit={handleSubmit} className="flex flex-col bg-white md:max-w-[730px] w-full rounded-lg p-12 gap-10">
            <h4>checkout</h4>

            {/* Billing Detials */}
            <div className="flex flex-col gap-4">
              <p className="text-[#D87D4A] uppercase font-bold">billing details</p>

              <div className="flex flex-col sm:flex-row gap-4">

                <Input name={'Name'} id={'name'} type={'text'} place={'Alexei Ward'} autocomplete={'name'} widthsize={'w-full'} />
                
                <Input name={'Email Address'} id={'email'} type={'email'} place={'alexei@mail.com'} autocomplete={'email'} widthsize={'w-full'} />
              </div>

              <Input name={'Phone Number'} id={'phone'} type={'tel'} place={'+1 202-555-0136'} widthsize={'sm:w-[48.5%]'} autocomplete={'tel'} />
            </div>

            {/* Shipping Info */}
            <div className="flex flex-col gap-4">
              <p className="text-[#D87D4A] uppercase font-bold">shipping info</p>

              <Input name={'Address'} id={'address'} type={'text'} place={'1137 Williams Avenue'} autocomplete={'street-address'} />

              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Input name={'ZIP Code'} id={'code'} type={'text'} place={'10001'} autocomplete={'postal-code'} widthsize={'w-full'} />
                <Input name={'City'} id={'city'} type={'text'} place={'New York'} autocomplete={'address-level2'} widthsize={'w-full'} />
              </div>

              <Input name={'Country'} id={'country'} type={'text'} place={'United States'} widthsize={'sm:w-[48.5%]'} autocomplete={'country'} />
            </div>

            {/* Payment Details */}
            <PayMethod />
          </form>

          {/* Summary */}
          <Summary popUp={popUp} setPopUp={setPopUp} fullCartItems={fullCartItems} />
        </div>
      </div>
      
    </section>
  )
}

export default page