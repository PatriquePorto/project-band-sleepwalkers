import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full h-[40px] flex items-center py-2 px-8 justify-between  bg-slate-800 text-gray-300'>

    <Link href='/'
          className='uppercase font-bold text-md h-12 flex items-center'
    >
      Shop
     </Link>
    </nav>
  )
}

export default Navbar