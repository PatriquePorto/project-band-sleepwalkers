'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

import { motion } from "framer-motion"
import { fadeIn } from "../../variants"

// Components
import NavMobile from "./NavMobile"
import Nav from "./Nav"
import MenuBtn from "./MenuBtn"
import Socials from "./Socials"

const Header = () => {

  const [active, setActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Detect scroll
      setActive(window.scrollY > 100)
    }
     // Add event listener
    window.addEventListener('scroll', handleScroll)

    // Clear event listener
    return () => { 
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
<header className={`fixed z-50 w-full transition-all ${active ? 'bg-[#32323b] py-6' : 'bg-transparent py-4'}`}>
   <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between">
       {/* Logo */}
       <Link
           href="#"
           className="relative flex w-[210px] h-[35.64px] transition-all mb-4 xl:mb-0 -left-16"
         >
           <Image
               src="/images/logo2.png"
               fill
               className="object-contain"
               alt="logo"
           />
       </Link>
       {/* Nav */}
       <Nav containerStyles='hidden xl:flex items-center gap-x-4 relative -left-8' />
       {/* Nav mobile */}
       <NavMobile />
       {/* Menu btn */}
       <div className="absolute right-7 top-9 z-10 xl:hidden">
           <MenuBtn />
        </div>
       {/* Social */}
       <div className="flex relative left-10 socials">
          <Socials
              containerStyles='flex text-[24px] gap-x-2  '
              iconStyles='hover:scale-125 transition-all'
          />
       </div>
   </div>
</header>
  )
}

export default Header