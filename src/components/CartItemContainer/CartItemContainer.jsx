import React from 'react'
import { useCartContext } from '../CartContext/CartContext'
import CartItem from "../CartItem/CartItem"
import "./CartItemContainer.css"

const CartItemContainer = () => {
    const { cartList } = useCartContext()

    return (
        <div className="cartItemContainer">
            <table>
                <thead>
                    <tr>
                        <th className="cartColumna">Foto</th>
                        <th className="cartColumna">Nombre</th>
                        <th className="cartColumna">Cantidad</th>
                        <th className="cartColumna">Precio</th>
                        <th className="cartColumna">Quitar</th>
                    </tr>
                </thead>
                <tbody>
                    { cartList.map((item) => ( <CartItem item={item} key={item.producto.id} /> ))}
                </tbody>
            </table>
        </div>
    )
}

export default CartItemContainer