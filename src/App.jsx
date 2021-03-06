import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BarraNav from './components/BarraNav/BarraNav.jsx'
import Header from "./components/Header/Header"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Cart from "./components/Cart/Cart"
import {CartContextProvider} from "./components/CartContext/CartContext"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter basename="/react">
        <BarraNav/>
        <Header/>
        <Routes>
          <Route index path="/" element={<ItemListContainer greeting="Bienvenida a nuestra tienda!"/>} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer/>} />
          <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}
export default App;