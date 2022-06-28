import React from 'react'
import "./CartWidgetCount.css"
import { useCartContext } from '../CartContext/CartContext'

function CartWidgetCount() {
    const {countCartCant} = useCartContext()
    let cartCant = countCartCant()

    return (
        // <div className='cartWidgetCount'>{cartCant}</div>
        // className={({isActive})=> isActive? "linkActivo" :"link"}
        <div className={cartCant ? "cartWidgetCount" : "emptyCart"}>{cartCant}</div>
    )
}

export default CartWidgetCount