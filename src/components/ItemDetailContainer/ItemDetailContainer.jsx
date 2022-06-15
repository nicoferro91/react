import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from "react"
import { getItem } from "../../helpers/getItem"
import "./ItemDetailContainer.css"


const ItemDetailContainer = (props) => {
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
            <p></p>
        :
        <div className='ItemDetailContainer'>
            <ItemDetail props={productos[0]}/>
        </div>
        }
        </>
    )    
}

export default ItemDetailContainer