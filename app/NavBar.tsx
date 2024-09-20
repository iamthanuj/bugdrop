import React from 'react'
import Link from 'next/link'
import logo from "@/public/svg-formatter-beautifier-_2_.png"
import Image from 'next/image'


const NavBar = () => {


    const links = [
        {label: "Dashboard", href:'/'},
        {label: "Bugs", href:'/bugs'},
    ]

  return (
    <nav className='flex justify-between h-20 bg-maincolor items-center px-5 '>
        <Link href="/"><Image src={logo} alt='logo'width={150}/></Link>
        <ul className='flex gap-5'>
            {links.map((link)=> <li key={link.href}><Link className='hover:text-thirdcolor transition-colors' href={link.href} >{link.label}</Link></li> )}
            
        </ul>
    </nav>
  )
}

export default NavBar