
import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <main>
        <Link href={"/"}>Home</Link>
        <Link href={"/users"}>User</Link>
    </main>
  )
}

export default Navbar