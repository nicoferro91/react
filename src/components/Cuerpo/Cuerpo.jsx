
import Header from "../Header/Header"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import './Cuerpo.css'
import ItemCount from "../ItemCount/ItemCount"

export default function Cuerpo() {
    return (
        <>
        {/* Esta fue la unica forma que pude poner una imagen */}
        {/* <img src={require("../../assets/images/accesorio2.jpg")} alt="foto prueba" /> */}
        <div className="cuerpo">
            <Header/>
            <ItemListContainer/>
            <ItemCount stock={5} initial={1} />
        </div>
        </>
    )
}

