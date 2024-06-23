import axios from 'axios';
import productStyle from './product.module.css';
import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoShuffle } from 'react-icons/io5';
import { PiMagnifyingGlassPlus } from 'react-icons/pi';
import { CiHeart } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { productSlice } from '../../Redux/productSlice';

const Product = () => {
    const [products,setProducts]= useState([]);
    const dispatch=useDispatch();
    useEffect(()=>{
        axios
        .get('https://fakestoreapi.com/products') 
        .then((res)=>{setProducts(res.data)})
        .catch((err)=>{console.log(err)})
    },[])
    products?.splice(8);
  return (
    <section className={productStyle.productContainer}>
        <h1>Exclusive Products</h1>
        <div className={productStyle.boxContainer}>
            {
                products?.map((el,idx)=>(
                    <div className={productStyle.product} key={idx}>
                        <div className={productStyle.imagePro}><img src={el.image} alt=''/>
                        <ul>
                            <li><Link to={el.id}><IoShuffle size={25} style={{transition:'.2s'}} /></Link></li>
                            <li><Link><PiMagnifyingGlassPlus size={25} style={{transition:'.3s'}}/></Link></li>
                            <li><Link><CiHeart size={25} style={{transition:'1s'}}/></Link></li>
                        </ul>
                        </div>
                        <h2>{el.title}</h2>
                        <h3>${el.price}<span>$25.4</span></h3>
                        <div className={productStyle.stars}>
                            <div className={productStyle.star}>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaRegStarHalfStroke /></span>
                            </div>
                            <span>(25)</span>
                        </div>
                        <Link onClick={()=>dispatch(productSlice.actions.addtoCart(el))} className={productStyle.button}>add to cart</Link>

                    </div>
                ))
            }

        </div>
      
    </section>
  )
}

export default Product
