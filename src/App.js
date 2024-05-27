import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeComp from './Routes/HomeComp'
import ProductComp from './Routes/ProductComp'
import CartComp from './Routes/CartComp'
import ContactUsComp from './Routes/ContactUsComp'
import LoginComp from './Routes/LoginComp'


const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<HomeComp/>}/>
        <Route path='/login' element={<LoginComp/>}/>
        <Route path='/home' element={<HomeComp/>}/>
        <Route path='/product' element={<ProductComp/>}/>
        <Route path='/cart' element={<CartComp/>}/>
        <Route path='/contact' element={<ContactUsComp/>}/>
      </Routes>
       
      
    </Fragment>
  )
}

export default App
