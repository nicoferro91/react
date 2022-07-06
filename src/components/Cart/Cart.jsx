import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useCartContext } from '../CartContext/CartContext'
import { LinkContainer } from 'react-router-bootstrap'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import CartItemContainer from '../CartItemContainer/CartItemContainer'
import { useState } from 'react'
import Form from '../Form/Form'

export default function Cart() {
  const { cartList, clearList, importeTotal } = useCartContext()
  const [checkoutId, setCheckoutId] = useState(false)

  function createCheckout(event) {
    event.preventDefault()
    
    let checkout = {}
    checkout.buyer = { name: "nico", phone: "1234", mail: "nico@mail.com" }
    checkout.total = importeTotal()

    checkout.products = cartList.map(cartProduct => {
      const id = cartProduct.producto.id
      const name = cartProduct.producto.nombre
      const price = cartProduct.producto.precio * cartProduct.cantidad

      return { id, name, price }
    })
    const db = getFirestore()
    const orderCollection = collection(db, "orders")
    addDoc(orderCollection, checkout)
      .then(resp => {
        setCheckoutId(resp.id)
        clearList()
      })
  }

  return (
    <Container>
      {
        cartList.length === 0 ?
          checkoutId ?
            <div className=" d-flex justify-content-center flex-column align-items-center mt-5">
              <h3 className='text-center'>Gracias por comprar!</h3>
              <h4>Tu id de compra es: {checkoutId}</h4>
            </div>
          :
            <div className=" d-flex justify-content-center flex-column align-items-center mt-5">
              <h3 className='text-center'>Tu compra:</h3>
              <p className="text-center">Tu carro está vacio</p>
              <LinkContainer to="/">
                <Button variant="primary">Volver al Inicio</Button>
              </LinkContainer>
            </div>
        : 
          <div className="mt-5">
            <Form/>
            <br />
            <h3 className='text-center'>Tu compra:</h3>
            <CartItemContainer />
            <h3 className="cartTotal">Importe total: ${importeTotal()}</h3>
            <Button className="cartBoton" variant="danger" onClick={clearList}> Borrar Todo </Button>
            <Button className="cartBoton" variant="success" onClick={createCheckout}> Confirmar compra </Button>
          </div>
      }
    </Container>
  )
}
