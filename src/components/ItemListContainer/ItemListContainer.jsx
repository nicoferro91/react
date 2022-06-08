import ItemList from "../ItemList/ItemList";

export default function ItemListContainer() {
    return(
    <>
        <div className="itemListContainer">
            <ItemList greeting="Bienvenida a nuestra tienda!"/>
        </div>
    </>
    )
}