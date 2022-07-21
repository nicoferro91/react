import React from 'react'
import "./CartWidgetCount.css"
import { useCartContext } from '../CartContext/CartContext'

function CartWidgetCount() {
    const {countCartItems} = useCartContext()
    let cartItems = countCartItems()

    return (
        // <div className='cartWidgetCount'>{cartCant}</div>
        // className={({isActive})=> isActive? "linkActivo" :"link"}
        <div className={cartItems ? "cartWidgetCount" : "emptyCart"}>{cartItems}</div>
    )
}

export default CartWidgetCount