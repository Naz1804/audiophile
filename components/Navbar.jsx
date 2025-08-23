import Image from "next/image"
import Link from "next/link"
import logo from '../public/assets/shared/desktop/logo.svg'
import Cart from "./Cart"
import Menu from "./Menu"


const Navbar = () => {
  return (
    <nav className="w-full bg-[#191919] overflow-hidden">
      <div className="max-w-[1110px] flex mx-auto py-4 border-b border-white/20 padding">
        
        <Menu />

        <Image src={logo} alt="logo" width={150} height={150} className="mx-auto sm:mx-0" />

        <div className="hidden md:flex items-center gap-4 ml-auto">
          <Link href="/" className="nav-link">HOME</Link>
          <Link href="/category/headphones" className="nav-link">HEADPHONES</Link>
          <Link href="/category/speakers" className="nav-link">SPEAKERS</Link>
          <Link href="/category/earphones" className="nav-link">EARPHONES</Link>
        </div>

        <Cart />
      </div>
    </nav>
  )
}

export default Navbar