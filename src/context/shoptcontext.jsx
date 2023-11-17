import React, { useState, createContext } from 'react'
import items from '../data/products.json'

export const CartContext = createContext(null)

let lengthofItems = items.length;
const getDefaultCart = () =>{
  let cart = {}
  for(let i = 1; i <= lengthofItems; i++){
     cart[i] = 0
  }
  return cart
}

export const CartContextProvider = (props) => {
  
  const [addtocart, setAddToCart] = useState(getDefaultCart)

  const increment = (id) =>{
     setAddToCart(prev => {
      return {...prev, [id]: prev[id]+1}
     })
  }
  const decrement = (id) =>{
    setAddToCart(prev => {
      return {...prev, [id]: prev[id]-1}
     })
  }
  const contextValue = {addtocart, increment, decrement}

return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

