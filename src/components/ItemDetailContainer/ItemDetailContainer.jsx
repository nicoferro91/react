import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from "react"
import { getItem } from "../../helpers/getItem"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"


const ItemDetailContainer = (props) => {
    const [productos, setProductos] = useState([])
    let [loading, setLoading] = useState(true)
    
    const {id} = useParams()

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
            <h3>Cargando...</h3>
        :
        <div className='ItemDetailContainer'>          
            <ItemDetail props={productos.find(productos => productos.id===id)}/>
        </div>
        }
        </>
    )    
}

export default ItemDetailContainer