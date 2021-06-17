import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {Card} from "react-bootstrap"
import { actionType } from '../Context/Reducer'
import { useStateValue } from '../Context/StateProvider'
import { urlFor } from "../lib/sanity"


const WineCard = ( { item } ) => {
    const [state, dispatch] = useStateValue()
 
    const addtoCart = (product)=>{
        dispatch({
            type:actionType.ADD_ITEM,
            product: product
        })
    }

    return (
            <Card>
                <div className="card_container">
                    <Image
                        src={ urlFor(item.productImage).url()}
                        width={"600px"}
                        height={"700px"}
                        layout="responsive"
                        />
                    <Card.Body>
                        <Card.Text >
                            <Link href={`/product/${item.slug.current}`}>
                                <h5 className="card_heading">{item.name}</h5>
                            </Link>

                        </Card.Text>
                            <div className="price">
                                <p className="price1">HKD${item.price}</p>                       
                                <p className="price2" onClick={() => { addtoCart(item) }}>ADD TO CART</p>
                            </div>
                    </Card.Body>
                </div>
            </Card>
    )
}

export default WineCard
