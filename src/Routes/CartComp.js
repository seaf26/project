import React, { Fragment } from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'
import Cart from '../Components/Cart/Cart'

const CartComp = () => {
  return (
    <Fragment>
        <NavBar/>
        <Cart/>
        <Footer/>
      
    </Fragment>
  )
}

export default CartComp
