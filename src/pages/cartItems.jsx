import React, { useContext, useState } from 'react'
import items from '../data/products.json'
import { CartContext } from '../context/shoptcontext'

const CartItems = () => {
const { addtocart, increment, decrement } = useContext(CartContext)
  return (
    <div>
    {items.map((data)=>{
        if(addtocart[data.id] !== 0){
          return (
            <div key={data.id} className='flex w-full items-center h-80 shadow-md'>
            <div className=' w-2/6'>
              <img width={300} src={data.img}/>
              <p className=''>{data.name}</p>
            </div>
            <div className='flex justify-around items-center w-2/6'>
                <button onClick={()=>{increment(data.id)}} className='bg-blue-400 px-4 py-2 rounded-xl'>+</button>
                <p className=''>{addtocart[data.id]}</p>
                <button onClick={()=>{decrement(data.id)}} className='bg-blue-400 px-4 py-2 rounded-xl'>-</button>
            </div>
            <div className='flex w-2/6 flex-col h-full'>
              <div className='h-5/6 flex items-center justify-center'>
                <p className=''>{data.price}$</p>
              </div>
              <div className='flex justify-around'>
                <p className='font-medium h-1/6'>Total Price</p>
                <p className=''>{data.price * addtocart[data.id]}$</p>
                </div>
            </div>
            </div>
          );
        }
      }
      )
      }
    </div>  
  )
}

export default CartItems
