import Image from 'next/image'
import Badge from '@material-ui/core/Badge';
import Link from 'next/link'
import React,{ useEffect } from 'react'
import { useStateValue } from '../Context/StateProvider'
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

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
            <div className="header_logo">
            <Link href="/product">
                <img className="product_logo" src="/product_logo.png" alt="product"/>
            </Link>
            <Link href="/cart">
                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={cartNumber} color="secondary">
                        <ShoppingCartIcon />
                    </StyledBadge>
                </IconButton>
            </Link>
            </div>
        </nav>
    )
}

export default Header
