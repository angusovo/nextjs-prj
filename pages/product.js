import Image from 'next/image'
import React from 'react'
import { sanityClient, urlFor } from "../lib/sanity"
import { useNextSanityImage } from 'next-sanity-image'
import WineCard from '../components/WineCard'


const Query = `*[_type=="product"]{
  _id,
  name,
  slug,
  productImage,
  factory,
  price
}`

export default function product({ data: item }) {
    const displayData= item.map(item=>(
        <li key={item._id}>
            <WineCard
            imgUrl={urlFor(item.productImage).url()}
            title={item.name}
            content={item.price}
            path={`/product/${item.slug.current}`}
            />
        </li>
    ))
    return (
        <div className="product">
            <div className="product_header">
                <Image
                src={"/toroto_img.jpg"}
                width={"1000"}
                height={"480"}
                layout="responsive"
                className="product_header_img"
                objectFit="cover"
                quality="100"
                />

            </div>
            <div className="product_list">

                <div className="product_list_header">
                    <Image src="/winebottle.png"
                    width={120}
                    height={120}
                    layout="fixed"

                    />
                    
                    <h4>RECOMMANDATION</h4>
                </div>

                <ul className="product_list_grid">
                        {displayData}

                </ul>
            </div>

            
        </div>
    )
}
export async function getStaticProps() {
    const data = await sanityClient.fetch(Query)

    return {
        props: { data }
    }
}