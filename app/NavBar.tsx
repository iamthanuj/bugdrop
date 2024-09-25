"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'
import logo from "@/public/svg-formatter-beautifier-_2_.png"
import Image from 'next/image'


const NavBar = () => {

    const pathName = usePathname();``

    const links = [
        {label: "Dashboard", href:'/'},
        {label: "Bugs", href:'/bugs'},
    ]

  return (
    <nav className='flex justify-between h-20 bg-maincolor items-center px-5 '>
        <Link href="/"><Image src={logo} alt='logo'width={150}/></Link>
        <ul className='flex gap-5'>
            {links.map((link)=> <li key={link.href}><Link className={
              classNames({
                'text-secondcolor' : link.href === pathName,
                'text-white' : link.href !== pathName,
                'hover:text-thirdcolor transition-colors' : true
              })
            } href={link.href} >{link.label}</Link></li> )}
            
        </ul>
    </nav>
  )
}

export default NavBar