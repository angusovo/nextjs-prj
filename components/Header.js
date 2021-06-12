import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <nav className="header">
            <div className="header_img">
               <Link href="/">
                   <Image
                   src="/logo.png"
                   height={100}
                   width={100}
                   layout="fixed"
                   
                   />
               </Link>
            </div>
        </nav>
    )
}

export default Header
