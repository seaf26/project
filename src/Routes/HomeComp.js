import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
// import NavBarTwo from '../Components/NavBarTwo/NavBarTwo'
import Home from '../Components/Home/Home'
import About from '../Components/About/About'
import Footer from '../Components/Footer/Footer'
import Product from '../Components/Product/Product'
import Blog from '../Components/Blog/Blog'
import Shop from '../Components/shop/Shop'
import ContactUs from '../Components/ContactUs/ContactUs'
import ScrolBtn from '../Components/ScrolBtn/ScrolBtn'

const HomeComp = () => {
  return (
    <div>
      <NavBar/>
      {/* <NavBarTwo/> */}
      <Home/>
      <About/>
      <Product/>
      <Blog/>
      <Shop/>
      <ContactUs/>
      <ScrolBtn/>
      <Footer/>
    </div>
  )
}

export default HomeComp
