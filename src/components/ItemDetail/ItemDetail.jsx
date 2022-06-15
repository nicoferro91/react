import React from 'react'
import "./ItemDetail.css"
import Card from 'react-bootstrap/Card'

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
            </Card.Body>
        </Card>
         
    </>
  )
}
