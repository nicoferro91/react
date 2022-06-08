// import { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Cuerpo from "./components/Cuerpo/Cuerpo.jsx"
import BarraNav from './components/BarraNav/BarraNav.jsx';

function App() {
  return (
    <>
      <BarraNav/>
      <Cuerpo/>
    </>
  );
}

export default App;
