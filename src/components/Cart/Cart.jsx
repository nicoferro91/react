import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function Cart() {
  const [compra, setCompra] = useState([]);
  useEffect(()=>{
    //const compra = JSON.parse(localStorage.getItem("compra"))
    const compra = localStorage.getItem("compra")
    if(compra){
      setCompra(compra)
    }
  }
  )
  
  return (
    <>
      <h1>Tu compra: </h1>
      <p>{compra}</p>
    </>
  )
}
