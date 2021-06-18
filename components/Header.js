import Image from 'next/image'
import Link from 'next/link'
import React,{ useEffect } from 'react'
import { useStateValue } from '../Context/StateProvider'

const Header = () => {
    const [state] = useStateValue()
    const cartNumber = state.length == 0?0:state.map(item => item.quantity)
    .reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    })
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
            <div className="header_nav">
                <Link href="/">
                    <p className="p1">HOME</p>
                </Link>
                <Link href="/product">
                    <p className="p2">ALL PRODUCTS</p>
                </Link>
                <Link href="/cart">
                    <p>CART</p>
                </Link>
            </div>
            <div className="header_logo">
            <Link href="/cart">
                <div className="">
                    <img className="product_logo" src="/product_logo.png" alt="product"/>

                    {state.length==0?null:<div class="dot">{cartNumber}</div>}


                </div>
            </Link>
            </div>
        </nav>
    )
}

export default Header
