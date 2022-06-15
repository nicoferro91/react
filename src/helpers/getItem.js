import foto1 from "../assets/images/accesorio2.jpg"
import foto2 from "../assets/images/accesorio3.jpg"
import foto3 from "../assets/images/accesorio12.jpg"
import foto4 from "../assets/images/cartera9.jpg"
import foto5 from "../assets/images/cartera10.jpg"
import foto6 from "../assets/images/accesorio1.jpg"

const productos = [
    {id:"01", nombre:"Crocci", precio:"2000", imagen:[foto1]},
    {id:"02", nombre:"Blues", precio:"1500", imagen:[foto2]},
    {id:"03", nombre: "Pampa", precio:"1000", imagen:[foto3]},
    {id:"04", nombre: "F.T.S.", precio:"1200", imagen:[foto4]},
    {id:"05", nombre: "Red Velvet", precio:"3000", imagen:[foto5]},
    {id:"06", nombre: "Millie", precio:"1100", imagen:[foto6]}
]

export const getItem = () => {
    return new Promise( (resolve, reject)=>{
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    } )
}