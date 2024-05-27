import React from 'react'
import productStyle from '../Product/product.module.css'
import image from '../../images/furniture_img1.jpg'
import { Link } from 'react-router-dom'
import { IoShuffle } from 'react-icons/io5'
import { PiMagnifyingGlassPlus } from 'react-icons/pi'
import { CiHeart } from 'react-icons/ci'
import { FaRegStarHalfStroke, FaStar } from 'react-icons/fa6'
import image2 from '../../images/furniture_img2.jpg'
import image3 from '../../images/furniture_img3.jpg'
import image4 from '../../images/furniture_img4.jpg'

const Shop = () => {
  return (
    <section className={productStyle.productContainer}>
         <h1>Trending Items</h1>
         <div className={productStyle.boxContainer}>
         <div className={productStyle.product}>
                        <div className={productStyle.imagePro}><img src={image} alt=''/>
                        <ul>
                            <li><Link><IoShuffle size={25} style={{transition:'.6s'}} /></Link></li>
                            <li><Link><PiMagnifyingGlassPlus size={25} style={{transition:'.8s'}}/></Link></li>
                            <li><Link><CiHeart size={25} style={{transition:'1s'}}/></Link></li>
                        </ul>
                        </div>
                        <h2>Enim Expedita Sed</h2>
                        <h3>$45.00<span>$55.25</span></h3>
                        <div className={productStyle.stars}>
                            <div className={productStyle.star}>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaRegStarHalfStroke /></span>
                            </div>
                            <span>(21)</span>
                        </div>
                        <Link className={productStyle.button}>add to cart</Link>

                    </div>
                     <div className={productStyle.product}>
                        <div className={productStyle.imagePro}><img src={image2} alt=''/>
                        <ul>
                            <li><Link><IoShuffle size={25} style={{transition:'.6s'}} /></Link></li>
                            <li><Link><PiMagnifyingGlassPlus size={25} style={{transition:'.8s'}}/></Link></li>
                            <li><Link><CiHeart size={25} style={{transition:'1s'}}/></Link></li>
                        </ul>
                        </div>
                        <h2>Adipisci Official Libero</h2>
                        <h3>$55.00<span>$95.00</span></h3>
                        <div className={productStyle.stars}>
                            <div className={productStyle.star}>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaRegStarHalfStroke /></span>
                            </div>
                            <span>(15)</span>
                        </div>
                    <Link className={productStyle.button}>add to cart</Link>

                        </div>
                        <div className={productStyle.product}>
                        <div className={productStyle.imagePro}><img src={image3} alt=''/>
                        <ul>
                            <li><Link><IoShuffle size={25} style={{transition:'.6s'}} /></Link></li>
                            <li><Link><PiMagnifyingGlassPlus size={25} style={{transition:'.8s'}}/></Link></li>
                            <li><Link><CiHeart size={25} style={{transition:'1s'}}/></Link></li>
                        </ul>
                        </div>
                        <h2>Internet Tend To Repeat</h2>
                        <h3>$68.00<span>$99.00</span></h3>
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
                        <Link className={productStyle.button}>add to cart</Link>

                    </div>
                 <div className={productStyle.product}>
                        <div className={productStyle.imagePro}><img src={image4} alt=''/>
                        <ul>
                            <li><Link><IoShuffle size={25} style={{transition:'.6s'}} /></Link></li>
                            <li><Link><PiMagnifyingGlassPlus size={25} style={{transition:'.8s'}}/></Link></li>
                            <li><Link><CiHeart size={25} style={{transition:'1s'}}/></Link></li>
                        </ul>
                        </div>
                        <h2>Many Desk Publishing</h2>
                        <h3>$69.00<span>$89.00</span></h3>
                        <div className={productStyle.stars}>
                            <div className={productStyle.star}>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaStar /></span>
                            <span><FaRegStarHalfStroke /></span>
                            </div>
                            <span>(22)</span>
                        </div>
                        <Link className={productStyle.button}>add to cart</Link>

                    </div>
         </div>
      
    </section>
  )
}

export default Shop
