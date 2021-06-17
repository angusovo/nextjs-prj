import { Link } from "@material-ui/core"
import { sanityClient, urlFor, usePreviewSubscription, PortableTextComponent} from "../../lib/sanity"
import {useRouter} from "next/router"

const recipesQuery =`*[_type =="product" && slug.current == $slug][0]{
    _id,
    name,
    slug,
    productImage,
    price,
    factory->{
        name
    },
    ingredient[]{
        _key,
        volume,
        alcoholPercentage,
        ingredient->{
            name
        }
    },
    instruction,
}
`

export default function OneProduct({ data }){
    if (!data) return <div>Loading...</div>;

    const { wines } = data


    return (
        <article className="item">
                <div className="item_container">
                    {console.log(wines.factory)}
                    <img
                    src={urlFor(wines.productImage).url()} 
                    width={"300px"}
                    height={"400px"}
                    layout="responsive"
                    

                    />
                    <div className="item_description">
                        <h2>{wines.name}</h2>
                        <h4>HKD: ${wines.price}</h4>
                    <p>根據香港法律，不得在業務過程中，向未成年人售賣或供應令人醺醉的酒類。
Under the law of Hong Kong, intoxicating liquor must not be sold or supplied to a minor in the course of business.</p>
                    </div>
                </div>
                <div className="item_info">
                    <h5 className="product_intro">Product Introduction:</h5>
                    <PortableTextComponent blocks={wines?.instruction} className="instruction" />

                <h5 className="product_intro">Product Ingredients:</h5>
                {wines.ingredient.map(ingredient => (
                    <table>
                        <tr>
                        <th>
                            原料
                        </th>                           
                        <td>
                            {ingredient.ingredient?.name}
                        </td>
                        </tr>
                    <tr>
                        <th>
                            容量 (ml)
                            </th>
                        <td>
                            {ingredient.volume}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            酒精度 (%)
                            </th>
                        <td>
                            {ingredient.alcoholPercentage}%                        
                        </td>
                    </tr>
                    <tr>
                        <th>
                            生產商
                            </th>
                        <td>
                            {wines.factory.name}
                        </td>
                    </tr>
                    </table>
                ))}
                </div>
            
            <Link href="/product">
                <button>返回商品</button>
            </Link>
        </article>
    )
}

export async function getStaticPaths(){
    const paths= await sanityClient.fetch(
         `*[_type == "product" && defined(slug.current)]{
      "params": {
        "slug": slug.current
      }
    }`
    )

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    const wines = await sanityClient.fetch(recipesQuery, { slug })

    return { props: { data: { wines }, preview: true } }

}