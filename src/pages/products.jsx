import React, { useContext, useState } from 'react'
import items from '../data/products.json'
import '../../global.css'
import { CartContext } from '../context/shoptcontext'

const products = () => {
  
  const { addtocart, increment, decrement } = useContext(CartContext)
  
  return (
    <div className='grid md:grid-cols-3 grid-cols-2 '>
      {items.map((data)=>{
        return (
          <div key={data.id} className='my-12 mx-9 flex flex-col justify-end'>
          <img src={data.img} className=''/>
            <ul className='flex justify-around py-4'>
              <li className='font-semibold'>{data.name}</li>
            <li>{data.price}$</li>
            </ul>
            {addtocart[data.id] < 1?
            <button onClick={()=>{increment(data.id)}} className='bg-blue-500 rounded-md py-2'>Add To Cart</button>
              :
            <div className='flex justify-around'>
            <button onClick={()=>{increment(data.id)}} className='bg-blue-500 rounded-lg py-2 px-4'>+</button>
            <p className='self-center'>{addtocart[data.id]}</p>
            <button onClick={()=>{decrement(data.id)}} className='bg-blue-500 rounded-lg py-2 px-4'>-</button>
            </div>
            }
          </div>
        )
      })}
    </div>
  )
}

export default products