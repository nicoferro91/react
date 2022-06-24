import React from 'react'
import { Button } from 'react-bootstrap'
import { useCartContext } from '../CartContext/CartContext'
import CartItem from "../CartItem/CartItem"
import "./CartItemContainer.css"

const CartItemContainer = () => {
    const { cartList, importeTotal, clearList } = useCartContext()

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
                    { cartList.map((item) => ( <CartItem item={item} key={item.producto.id} /> )) }
                </tbody>
            </table>
                <h3 className="cartTotal">Importe total: ${importeTotal()}</h3>
                <Button className="cartBoton" variant="danger" onClick={clearList }> Borrar Todo </Button>
                <Button className="cartBoton" variant="success" onClick={ console.log("Gracias por elegirnos") }> Confirmar compra </Button>
        </div>


    )
}

export default CartItemContainer