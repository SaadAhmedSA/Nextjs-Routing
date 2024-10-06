import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-evenly items-center font-bold bg-black text-white h-[70]' >
    <h1 className='text-2xl'>NextApp</h1>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/product">Product</Link>

  </div>

  )
}

export default Navbar