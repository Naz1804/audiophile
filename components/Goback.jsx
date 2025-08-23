'use client';

import { useRouter } from 'next/navigation'
import React from 'react'

const Goback = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className='text-black/50 text-[15px] font-medium mb-10'>
      Go Back
    </button>
  )
}

export default Goback