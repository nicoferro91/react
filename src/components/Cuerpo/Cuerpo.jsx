
import Header from "../Header/Header"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import './Cuerpo.css'
import ItemCount from "../ItemCount/ItemCount"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"

export default function Cuerpo() {
    return (
        <>
        <div className="cuerpo">
            <Header/>
            <ItemListContainer greeting="Bienvenida a nuestra tienda!"/>
            <ItemDetailContainer/>
            <ItemCount stock={5} initial={1} />
        </div>
        </>
    )
}

