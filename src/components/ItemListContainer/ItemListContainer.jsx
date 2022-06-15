import ItemList from "../ItemList/ItemList"
import Container from 'react-bootstrap/Container'
import "./ItemListContainer.css"

export default function ItemListContainer(props) {
    const {greeting} = props
    return(
    <>
        <h3>{greeting}</h3>
        <Container className="itemListContainer center-text">
            <ItemList/>
        </Container>
    </>
    )
}