import foto01 from "../assets/images/cartera1.jpg"
import foto02 from "../assets/images/cartera2.jpg"
import foto03 from "../assets/images/cartera3.jpg"
import foto04 from "../assets/images/cartera4.jpg"
import foto11 from "../assets/images/billetera1.jpg"
import foto12 from "../assets/images/billetera2.jpg"
import foto13 from "../assets/images/billetera3.jpg"
import foto14 from "../assets/images/billetera4.jpg"
import foto21 from "../assets/images/accesorio1.jpg"
import foto22 from "../assets/images/accesorio2.jpg"
import foto23 from "../assets/images/accesorio3.jpg"
import foto24 from "../assets/images/accesorio4.jpg"


const productos = [
    {id:"01", categoria:"carteras", nombre: "Red Velvet", precio:"3000", imagen:[foto01]},
    {id:"02", categoria:"carteras", nombre: "F.T.S.", precio:"1200", imagen:[foto02]},
    {id:"03", categoria:"carteras", nombre: "Holanda", precio:"1400", imagen:[foto03]},
    {id:"04", categoria:"carteras", nombre: "Crocco", precio:"1100", imagen:[foto04]},
    {id:"11", categoria:"billeteras", nombre: "Millie", precio:"1100", imagen:[foto11]},
    {id:"12", categoria:"billeteras", nombre:"Crocci", precio:"1250", imagen:[foto12]},
    {id:"13", categoria:"billeteras", nombre:"Blues", precio:"1400", imagen:[foto13]},
    {id:"14", categoria:"billeteras", nombre:"Mia", precio:"1300", imagen:[foto14]},
    {id:"21", categoria:"accesorios", nombre: "Pampa", precio:"1000", imagen:[foto21]},
    {id:"22", categoria:"accesorios", nombre: "Albert", precio:"700", imagen:[foto22]},
    {id:"23", categoria:"accesorios", nombre: "Carge pal", precio:"800", imagen:[foto23]},
    {id:"24", categoria:"accesorios", nombre: "Mariana", precio:"1100", imagen:[foto24]}
]

export const getItem = () => {
    return new Promise( (resolve, reject)=>{
        setTimeout(() => {
            resolve(productos)
        }, 1000);
    } )
}