import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./ItemDetailContainer.css"

import { doc, getDoc, getFirestore } from "firebase/firestore"

const ItemDetailContainer = (props) => {
    const [render, setRender] = useState(true)
    let [loading, setLoading] = useState(true)
    const [product, setProduct] = useState([])
    let productId = useParams()

    useEffect(() => {
        const database = getFirestore()
        const queryItem = doc(database, "productos", productId.id) //con doc especificamos el documento y con getDoc lo traemos
        getDoc(queryItem)
        .then(resp => setProduct({id: resp.id, ...resp.data()}))
        .catch((err)=> console.log(err))
        .finally(()=> setLoading(false))
        
    },[render])

    return (
        <>
        { loading ? 
            <h3>Cargando...</h3>
        :
        <div className='ItemDetailContainer'>
            <ItemDetail props={product}/>
        </div>
        }
        </>
    )    
}
export default ItemDetailContainer