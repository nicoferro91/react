
export default function ItemList(props) {
    const {greeting} = props
    return(
    <>
        <div className="itemList">
            <p>{greeting}</p>
        </div>
    </>
    )
}