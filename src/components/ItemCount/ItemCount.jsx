import Button from 'react-bootstrap/Button'
import { useState } from 'react'

export default function ItemCount({stock, initial, onAdd}) {
    const [cantidad, setCount ] = useState(initial)
    function sumar(){
        if(cantidad<stock) setCount(cantidad + 1)        
    }
    function restar(){
        if(cantidad>0) setCount(cantidad - 1)
    }
    function comprar(){
        console.log("se compraron "+cantidad)
    }
    return(
        <>
            <h2>Cantidad : {cantidad}</h2>
            <Button variant="outline-primary" className='mx-2' onClick={restar}>-</Button>
            <Button variant="outline-primary" className='mx-2' onClick={sumar}>+</Button>
            <br />
            <br />
            <Button variant="success" onClick={comprar}>Agregar al carrito</Button>
        </>
    )
}