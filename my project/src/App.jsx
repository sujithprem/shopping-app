import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import ShopCategory from '../src/pages/ShopCategory'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Footer from './Components/Footer/Footer'
import mens_banner from '../src/assets/banner_mens.png'
import women_banner from '../src/assets/banner_women.png'
import kids_banner from '../src/assets/banner_kids.png'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={mens_banner} Category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} Category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} Category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
           <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
