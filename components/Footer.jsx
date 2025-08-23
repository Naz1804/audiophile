import Image from 'next/image'
import logo from '../public/assets/shared/desktop/logo.svg'
import Social from './Social'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <div className="max-w-[1110px] h-full mx-auto pb-12 pt-[60px] md:pt-[75px] padding
      flex flex-col md:flex-row justify-between md:items-start">
        
        <div className="line"/>

        <div className="flex flex-col h-full items-center sm:items-start">
          <Image src={logo} alt='logo' width={150} height={150} />

          <p className='text-white/50 font-medium max-w-[540px] mt-9 hidden md:block'>
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
          </p>

          <p className='text-white/50 font-bold mt-auto hidden md:block'>Copyright 2021. All Rights Reserved</p>
        </div>

        <div className="flex flex-col md:items-end mt-10">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/" className="nav-link">HOME</Link>
            <Link href="/category/headphones" className="nav-link">HEADPHONES</Link>
            <Link href="/category/speakers" className="nav-link">SPEAKERS</Link>
            <Link href="/category/earphones" className="nav-link">EARPHONES</Link>   
          </div>

          <p className='text-white/50 font-medium pt-9 md:hidden text-center sm:text-start'>
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
          </p>

          <div className='flex flex-col sm:flex-row justify-between items-center gap-8 mt-9 md:mt-[107px]'>
            <p className='text-white/50 font-bold mt-auto md:hidden'>Copyright 2021. All Rights Reserved</p>
            <Social />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer