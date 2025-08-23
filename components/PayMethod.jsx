"use client";

import { useState } from "react"
import Input from "./Input";
import Image from "next/image";
import cash from '@/public/assets/checkout/icon-cash-on-delivery.svg'

const PayMethod = () => {
  const [methodType, setMethodType] = useState(true)

  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-[#D87D4A] uppercase font-bold">payment method</p>

      <div className="flex flex-col sm:flex-row w-full mb-4 gap-4 sm:gap-0">
        <label htmlFor="">Payment History</label>

        <div className="flex flex-col gap-4 sm:ml-auto sm:w-[48.5%]">
          <label onClick={() => setMethodType(true)}
          className={`border border-[#CFCFCF] hover:border-[#D87D4A] ${methodType && 'border-[#D87D4A]'}
          rounded-lg h-12 flex items-center gap-4 px-3 cursor-pointer`}>
            <input type="radio" name="pay-method" id="e-money" defaultChecked />
            <span className="font-bold text-sm">e-Money</span>
          </label>

          <label htmlFor="cash" onClick={() => setMethodType(false)}
          className={`border border-[#CFCFCF] hover:border-[#D87D4A] ${!methodType && 'border-[#D87D4A]'}
          rounded-lg h-12 flex items-center gap-4 px-3 cursor-pointer`}>
            <input type="radio" name="pay-method" id="cash" className="peer"/>
            <span className="font-bold text-sm">Cash on Delivery</span>
          </label>
        </div>
      </div>

      {methodType ? 
      <div className="flex flex-col sm:flex-row gap-4">
        <Input name={'e-Money Number'} id={'Money number'} type={'number'} place={'238521993'} widthsize={'w-full'} />

        <Input name={'e-Money PIN'} id={'Pin number'} type={'number'} place={'6891'} widthsize={'w-full'} />
      </div>

      :

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 items-center">
        <Image src={cash} alt="cash on hand" width={48} height={48} />

        <p className="text-black/40 font-medium">
          The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. 
          Just make sure your address is correct so that your order will not be cancelled.
        </p>
      </div>
      }
    </div>
  )
}

export default PayMethod