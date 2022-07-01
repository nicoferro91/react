import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { collection, getFirestore, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = (props) => {
    let [loading, setLoading] = useState(true)
    let {greeting} = props
    const {categoriaId} = useParams()
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        const database = getFirestore()
        const queryCollection = collection(database, "productos")
        if(categoriaId) {
            const queryCollectionFilter = query(queryCollection, where("categoria", "==", categoriaId))
            getDocs(queryCollectionFilter)
            .then(resp => setProducts(resp.docs.map(prod => ({id: prod.id, ...prod.data() }) )))
            .catch(error => console.log(error))
            .finally(()=>setLoading(false))
        }
        else {
            getDocs(queryCollection)
            .then(resp => setProducts(resp.docs.map(prod => ({id: prod.id, ...prod.data() }) )))
            .catch(error => console.log(error))
            .finally(()=>setLoading(false))
        }

    }, [categoriaId])
    
    return (
        <>
        { loading ? 
            <h2>Cargando...</h2>
        :
        <div className="itemListContainer">
            <h2>{greeting}</h2>          
            <ItemList productos={products}/>
        </div>
        }
        </>
    )    
}

export default ItemListContainer