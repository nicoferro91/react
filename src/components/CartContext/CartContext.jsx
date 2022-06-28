import { createContext, useState, useContext } from 'react';

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);
export const CartContextProvider = ({ children }) => {
  
  const [cartList, setCartList] = useState([]);
  const addToCart = (objProduct) => {
    
    let cartPrev = [...cartList];
    
    if (cartPrev.some((item) => item.producto.id === objProduct.producto.id)) {
      cartPrev.find((item) => item.producto.id === objProduct.producto.id).cantidad += objProduct.cantidad;
      setCartList(cartPrev);
    } 
    else setCartList([...cartList, objProduct]);
  };

  const clearList = () => setCartList([]);

  const importeTotal = () => {
    let total = 0;
    cartList.forEach((nuevoProducto)=>{total += parseInt(nuevoProducto.producto.precio) * parseInt(nuevoProducto.cantidad)});
    return parseInt(total);
  };

  const quitarProducto = (id) =>  setCartList(cartList.filter((nuevoProducto) => nuevoProducto.producto.id !== id));
  const iconCart = () => cartList.reduce((total, precio) => total + precio.cantidad, 0);

  const countCartCant = () => {
    let cantTotal = 0;
    cartList.forEach((producto)=>{cantTotal += parseInt(producto.cantidad)});
    return cantTotal;
  }

  return (
    <CartContext.Provider value={{cartList, setCartList, addToCart, clearList, importeTotal, quitarProducto, iconCart, countCartCant}}>
      {children}
    </CartContext.Provider>
  );
};