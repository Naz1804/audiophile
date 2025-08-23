"use client";

import Image from 'next/image'
import { useState } from 'react'
import menu from '@/public/assets/shared/tablet/icon-hamburger.svg'
import arrow from '../public/assets/shared/desktop/icon-arrow-right.svg'
import { category } from '..'
import Link from 'next/link'



const Menu = () => {
  const [popUp, setPopUp] = useState(false)
  return (
    <>
      <button className='sm:mr-10 md:hidden' onClick={() => setPopUp(true)}>
        <Image src={menu} alt='menu' width={16} height={15} className='object-contain' />
      </button>

      {popUp &&
        <div className="bg-black/50 fixed top-0 left-0 right-0 bottom-0 z-10 pointer-events-auto w-full flex"
        onClick={() => setPopUp(!popUp)}>

          <div className="bg-white rounded-b-lg mt-15 px-6 pt-22 pb-10 w-full h-fit
          flex flex-col sm:flex-row items-center justify-evenly gap-20 sm:gap-4" 
          onClick={(e) => e.stopPropagation()}>
            {category.map(item => (
              <div key={item.id} className="bg-[#F1F1F1] md:max-w-[223px] w-full h-[165px]
              flex flex-col items-center justify-end pb-6 rounded-lg relative gap-2">

                <Image src={item.image} alt={item.title} 
                className={`absolute ${item.title} object-contain w-[170px] h-[170px]`}/>

                <h5 className='text-black'>{item.title}</h5>

                <Link onClick={() => setPopUp(!popUp)} href={`/category/${item.slug}`} className='link-btn btn-3 flex items-center justify-between gap-3'>
                  SHOP
                  <Image src={arrow} alt='arrow' width={7} height={10}/>
                </Link>
              </div>
            ))}
          </div>
        </div>
      }
    </>
  )
}

export default Menu