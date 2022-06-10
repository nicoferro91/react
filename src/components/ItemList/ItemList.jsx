import { useEffect, useState } from "react"
import { getItem } from "../../helpers/getItem"
import Item from "../Item/Item"
import Container from 'react-bootstrap/Container'
import "./ItemList.css"



const ItemList = (props) => {
    const [productos, setProductos] = useState([])
    let [loading, setLoading] = useState(true)

    useEffect(()=>{
        getItem()
        .then((resp)=>{
            setProductos(resp)
        })
        .catch((err)=>{
            console.log(err)
        })
        .finally(()=> setLoading(false))
    },[])
    const {greeting} = props
    return (
        <>
        { loading ? 
            <h2>Cargando...</h2>
        :
        <Container className="itemList center-text">          
            <p>{greeting}</p>
            {productos.map(producto => <Item key={producto.id} props={producto} /> )}
        </Container>
        }
        </>
    )    
}

export default ItemList




/*
export default function ItemList(props) {
    const {greeting} = props
    return(
    <>
        <div className="itemList">
            <p>{greeting}</p>
            <p>Esto es un ItemList</p>
        </div>
    </>
    )
}
*/