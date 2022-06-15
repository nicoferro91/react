import { useEffect, useState } from "react"
import { getItem } from "../../helpers/getItem"
import Item from "../Item/Item"
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

    return (
        <>
        { loading ? 
            <h2>Cargando...</h2>
        :
        <div className="itemList">          
            {productos.map(producto => <Item key={producto.id} props={producto} /> )}
        </div>
        }
        </>
    )    
}

export default ItemList
