
import Header from "../Header/Header"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import './Cuerpo.css'
import ItemCount from "../ItemCount/ItemCount"

export default function Cuerpo() {
    return (
        <>
        <div className="cuerpo">
            <Header/>
            <ItemListContainer/>
            <ItemCount stock="5" initial="1" />
        </div>
        </>
    )
}
