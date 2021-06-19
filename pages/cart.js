import React from 'react'
import { actionType } from '../Context/Reducer'
import { useStateValue } from '../Context/StateProvider'
import { urlFor } from '../lib/sanity'
import CancelIcon from '@material-ui/icons/Cancel';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddBoxIcon from '@material-ui/icons/AddBox';

export default function Cart() {
    const [state, dispatch] = useStateValue()

    const totalPrice = state.length==0?"0":state.reduce((accumulator, currentValue) => {
            return accumulator + (currentValue.price * currentValue.quantity);
        },0)

    const addtoCart = (product) => {
        dispatch({
            type: actionType.ADD_ITEM,
            product: product
        })
    }

    const removeItem=(product)=>{
        dispatch({
            type: actionType.REMOVE_ITEM,
            product: product
        })
    }

    const decreItem=(product)=>{
        dispatch({
            type: actionType.DECRE_ITEM,
            product: product
        })
    }

    return (
        <div className="cart">
            <div className="cart_header">
                <h3>Cart</h3>
            </div>

            {state.length==0? 
            <div className="empty_cart">
                    Empty Cart! Check our <a href="/product">Products!</a>
            </div>:
            <table className="cart_table">
                <tr>
                    <th>Product</th>
                    <th></th>
                    <th>Price</th>
                    <th>Quanity</th>
                    <th>Total</th>
                </tr>

                {state.map((item, key)=>(
                    <tr key={key}>
                        <th className="cart_img">
                            <img src={urlFor(item.productImage).url()} alt={item.name} />
                        </th>
                        <th className="cart_th_item_name">{item.name}</th>
                        <th>{item.price}</th>
                        <th>
                            <IndeterminateCheckBoxIcon onClick={() => decreItem(item)}/>
                            {item.quantity}
                            <AddBoxIcon onClick={()=>addtoCart(item)}/>
                            </th>
                        <th>{item.price* item.quantity}</th>
                        <th><CancelIcon onClick={() => removeItem(item)}/></th>
                    </tr>
                ))}
            </table>
            }
            {state.length == 0 ?
                <div className="empty_cart_mob">
                    Empty Cart! Check our <a href="/product">Products!</a>
                </div> :
                <ul className="cart_mob">
                {state.map((item, key)=>(
                    <li key={key}>
                        <div className="cart_item_mob">
                            <div className="cart_item_info">
                                <p>{item.name}</p>
                                <div className="cart_item_price">
                                    <p>HKD${item.price}</p>
                                    <div className="cart_item_qty">
            
                                        <IndeterminateCheckBoxIcon onClick={() => decreItem(item)} />
                                        {item.quantity}
                                        <AddBoxIcon onClick={() => addtoCart(item)} />


                                    </div>
                                    <button onClick={() => removeItem(item)} className="cart_item_remove_mob">
                                        REMOVE
                                    </button>

                                </div>
                                <h6 className="cart_item_total">TOTAL:$ {item.price * item.quantity}</h6>

                            </div>
                            <div className="cart_item_img">
                                <img src={urlFor(item.productImage).url()} alt={item.name} />

                            </div>
                        </div>

                    </li>
                )
                    
                )}
                </ul>
            }
            <div className="cart_footer">
                <h4>Total:$ {totalPrice}</h4>
                <button className="check_out_button">CHECK OUT</button>
            </div>
            
        </div>
    )
}


