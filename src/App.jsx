import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Products from './pages/products'
import Navbar from './components/navbar'
import Cart from './pages/cart'
import { CartContextProvider } from './context/shoptcontext'
function App() {
  return (
    <>
    <CartContextProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Products/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
    </CartContextProvider>
    </>
  )
}

export default App
