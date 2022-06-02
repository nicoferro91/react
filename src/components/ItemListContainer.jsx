import ItemList from "./ItemList";

export default function ItemListContainer() {
    return(
    <>
        <div className="itemListContainer">
            <ItemList greeting="Bienvenida a nuestra tienda!"/>
        </div>
    </>
    )
}

// Crea un componente contenedor ItemListContainer.js con una prop greeting, y muestra el mensaje dentro del contenedor con el styling integrado.