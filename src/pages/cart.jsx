import React, { useContext, useState } from 'react'
import CartItems from './cartItems'
import { CartContext } from '../context/shoptcontext'

const Cart = () => {
  const { isCartEmpty } = useContext(CartContext)
  return (
    <div className='pt-12 w-screen flex flex-col items-center'>        
      <div className='w-1/2 text-center'>
      <h1 className='text-lg font-extrabold'>Cart Items</h1>
      <CartItems/>
      </div>
      </div>
  )
}

export default Cart
