const productos = [
    {id:"01", nombre:"Crocci", precio:"2000", imagen:"../../assets/images/accesorio2.jpg"},
    {id:"02", nombre:"Blues", precio:"1500", imagen:"../../assets/images/accesorio3.jpg"},
    {id:"03", nombre: "Pampa", precio:"1000", imagen:"../../assets/images/accesorio12.jpg"},
    {id:"04", nombre: "F.T.S.", precio:"1200", imagen:"../../assets/images/cartera9.jpg"},
    {id:"05", nombre: "Red Velvet", precio:"3000", imagen:"../../assets/images/accesorio10.jpg"}
]

export const getItem = () => {
    return new Promise( (resolve, reject)=>{
        setTimeout(() => {
            resolve(productos)
        }, 3000);
    } )
}