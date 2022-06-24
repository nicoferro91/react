import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useCartContext } from '../CartContext/CartContext'
import { LinkContainer } from 'react-router-bootstrap'
import CartItemContainer from '../CartItemContainer/CartItemContainer'

export default function Cart() {
  const {cartList} = useCartContext()

  return (
    <Container>
      {
        cartList.length === 0 ? 
        <div className=" d-flex justify-content-center flex-column align-items-center mt-5">
          <h3 className='text-center'>Tu compra:</h3>
          <p className="text-center">Tu carro está vacio</p>
          <LinkContainer to="/">
            <Button variant="primary">Volver al Inicio</Button>
          </LinkContainer>
        </div> :
           <div className="mt-5">
           <h3 className='text-center'>Tu compra:</h3>
           <CartItemContainer/>
        </div>
      }
    </Container>
  )
}
