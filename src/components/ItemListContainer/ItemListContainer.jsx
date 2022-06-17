import { useEffect, useState } from "react"
import { getItem } from "../../helpers/getItem"
import {useParams} from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([])
    let [loading, setLoading] = useState(true)
    let {greeting} = props

    const {categoriaId} = useParams()

    useEffect(()=>{
        if (categoriaId) {
            getItem()
            .then((resp)=>{
                setProductos(resp.filter(productos=>productos.categoria === categoriaId ))
            })
            .catch((err)=>{
                console.log(err)
            })
            .finally(()=> setLoading(false))
        } 
        else {
            getItem()
            .then((resp)=>{
                setProductos(resp)
            })
            .catch((err)=>{
                console.log(err)
            })
            .finally(()=> setLoading(false))
        }


    },[categoriaId])
    
    return (
        <>
        { loading ? 
            <h2>Cargando...</h2>
        :
        <div className="itemListContainer">
            <h2>{greeting}</h2>          
            <ItemList productos={productos}/>
        </div>
        }
        </>
    )    
}

export default ItemListContainer




// export default function ItemListContainer(props) {
//     const {greeting} = props
//     return(
//     <>
//         <h3>{greeting}</h3>
//         <Container className="itemListContainer center-text">
//             <ItemList/>
//         </Container>
//     </>
//     )
// }