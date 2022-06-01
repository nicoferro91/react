// import { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Cuerpo from "./components/Cuerpo.jsx"
import Navbar from './components/NavBar.jsx';

function App() {
  return (
    <>
      <Navbar/>
      <Cuerpo/>
    </>
  );
}

export default App;
