import "./Item.css"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function Item({props}) {
    return(
        <>  
            <Card className="text-center tarjeta" style={{width:'18rem'}}>
                <Card.Img className="fotoCard" variant="top" src={props.imagen} alt="foto del producto"/>
                <Card.Body>
                <Button variant="primary">Ver detalle</Button>
                </Card.Body>
            </Card>
        </>
    )
}

// export default function Item({props}) {
//     return(
//         <>  
//             <Card className="text-center tarjeta" style={{width:'18rem'}}>
//                 <Card.Img className="fotoCard" variant="top" src={props.imagen} alt="foto del producto"/>
//                 <Card.Body>
//                 <Card.Title>{props.nombre}</Card.Title>
//                 <Card.Text>
//                     Acá irá una breve descripción del producto
//                 </Card.Text>
//                 <Card.Text>
//                     Precio: ${props.precio}
//                 </Card.Text>
//                 <Button variant="primary">Ver detalle</Button>
//                 </Card.Body>
//             </Card>
//         </>
//     )
// }