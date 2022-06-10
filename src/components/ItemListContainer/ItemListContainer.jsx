import ItemList from "../ItemList/ItemList"
import Container from 'react-bootstrap/Container'
import "./ItemListContainer.css"

export default function ItemListContainer() {
    return(
    <>
        <Container className="itemListContainer center-text">
            <ItemList greeting="Bienvenida a nuestra tienda!"/>
        </Container>
    </>
    )
}