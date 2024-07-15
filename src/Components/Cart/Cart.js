import React, { useEffect, useMemo, useState } from "react";
import productStyle from "../Product/product.module.css";
import { useDispatch, useSelector } from "noval";
import { Link } from "react-router-dom";
import { IoShuffle } from "react-icons/io5";
import { PiMagnifyingGlassPlus } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { FaRegStarHalfStroke, FaStar, FaTrash } from "react-icons/fa6";
// import { productSlice } from "../../Redux/productSlice";

const Cart = () => {
  
  //   const cartProducts= (useSelector((state)=>state.product.items))
  const cartProducts = useSelector("items");
  const allPrice = useSelector("total");

  const { dispatch } = useDispatch();
  useEffect(() => {
    dispatch("CalcTotal")
    // dispatch("ClearData")
  }, []);
  // useMemo(()=>{
  //   return 
  //      setProducts(cartProducts);
  // },[cartProducts,dispatch,allPrice ])

 
  

  return (
    <section className={productStyle.productContainer}>
      <h1>Total Cost : {allPrice}</h1>
      <div className={productStyle.boxContainer}>
        {cartProducts?.map((el, idx) => (
          <div className={productStyle.product} key={idx}>
            <div className={productStyle.imagePro}>
              <img src={el.image} alt="" />
              <ul>
                <li>
                  <Link to={el.id}>
                    <IoShuffle size={25} style={{ transition: ".6s" }} />
                  </Link>
                </li>
                <li>
                  <Link>
                    <PiMagnifyingGlassPlus
                      size={25}
                      style={{ transition: ".8s" }}
                    />
                  </Link>
                </li>
                <li>
                  <Link>
                    <CiHeart size={25} style={{ transition: "1s" }} />
                  </Link>
                </li>
              </ul>
            </div>
            <h2>{el.title}</h2>
            <h3>
              ${el.price}
              <span>$25.4</span>
            </h3>
            <div className={productStyle.stars}>
              <div className={productStyle.star}>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaRegStarHalfStroke />
                </span>
              </div>
              <span>(25)</span>
            </div>
            <Link
              onClick={()=>dispatch("ClearData",{itemId:el.id})}
              className={productStyle.button}
            >
              <FaTrash />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cart;
