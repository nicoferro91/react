import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCartContext } from '../CartContext/CartContext'
import "./ItemCount.css"

export default function ItemCount({stock, initial,props}) {
    const [cantidad, setCount ] = useState(initial)
    const {addToCart} = useCartContext()
    
    function sumar(){
        if(cantidad<stock) setCount(cantidad + 1)        
    }
    function restar(){
        if(cantidad>0) setCount(cantidad - 1)
    }
    function comprar(){
        setInputType("compra")
        addToCart({cantidad: cantidad, producto: props})
    }

    const Checkout = () => {
        return(
            <>
                <Link to="/">
                    <Button variant="outline-primary" className='mx-2' onClick={restar}>Seguir comprando</Button>
                </Link>
                <Link to="/cart">
                    <Button variant="outline-primary" className='mx-2' onClick={restar}>Ir al carrito</Button>
                </Link>
            </>
        )
    }
    const Elegir = () => {
        return(
            <>
                <h4>Cantidad : {cantidad} </h4>
                <Button variant="outline-primary" className='mx-2' onClick={restar}>-</Button>
                <Button variant="outline-primary" className='mx-2' onClick={sumar}>+</Button>
                <br /><br />
                <Button variant="success" onClick={comprar}>Agregar al carrito</Button>
            </>
        )
    }
    const [inputType, setInputType] = useState("elegir")

    return(
        <>
            { inputType==="elegir" ? <Elegir/> : <Checkout/> }
        </>
    )
}