import {Button} from 'react-bootstrap'
import { useCartContext } from '../CartContext/CartContext'
import "./CartItem.css"

const CartItem = ({item}) => {
    const { quitarProducto } = useCartContext()
    return (
        <tr className="cartFila">
            <td>
                <img className="cartImagen" src={item.producto.imagen} alt="foto de producto"/>
            </td>
            <td>
                <p>{item.producto.nombre}</p>
            </td>
            <td>
                <p>{item.cantidad}</p>
            </td>
            <td>
                <p>${item.producto.precio}</p>
            </td>
            <td>
                <Button variant="danger" onClick={()=>{quitarProducto(item.producto.id)}}>X</Button>
            </td>
        </tr>
    )
}

export default CartItem