import React from 'react'
import "./ItemDetail.css"
import Card from 'react-bootstrap/Card'
import ItemCount from '../ItemCount/ItemCount'

export default function ItemDetail({props}) {
  return (
    <>        
        <Card className="text-center tarjeta" style={{width:'32rem'}}>
            <Card.Img className="fotoDetail" variant="top" src={props.imagen} alt="foto del producto"/>
            <Card.Body>
                <Card.Title>{props.nombre}</Card.Title>
                <Card.Text>
                    Acá irá una descripción del producto
                </Card.Text>
                <Card.Text>
                    Precio: ${props.precio}
                </Card.Text>
                <ItemCount props={props} stock={5} initial={1} />
            </Card.Body>
        </Card>
         
    </>
  )
}
