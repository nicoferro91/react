import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({productos}) => {
    return (
        <>
            <div className="itemList">          
                {productos.map(producto =>  <Item key={producto.id} props={producto} /> )}
            </div>
        </>
    )    
}

export default ItemList
