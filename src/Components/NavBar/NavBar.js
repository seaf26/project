import React, { Fragment, useEffect, useState } from 'react'
import './navbar.css'
import myImage from '../../images/eng.png'
import { NavLink } from 'react-router-dom'
import { TfiSearch, TfiUser } from "react-icons/tfi";
import { IoIosArrowDown, IoIosMenu,IoMdClose } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import logo from '../../images/logo_dark.png';
import { useSelector } from 'react-redux';
import { GiSmartphone } from 'react-icons/gi';
import { TbArrowsShuffle } from 'react-icons/tb';
import { CiHeart } from 'react-icons/ci';
import { IoSearchSharp } from "react-icons/io5";


const NavBar = () => {
    const [menu,setMenu]=useState(false);
    const [hidden, setHidden] = useState(false);
    const [showNav,setShowNav] = useState(false);
    const [bigMenu,setBigMenu] = useState(false);
    const [search ,setSearch] = useState(false);
    
    const userr = useSelector ((state)=>state.user.user)
    const cartProducts= (useSelector((state)=>state.product.items))
    useEffect(()=>{
        window.addEventListener("resize",()=>{
           let windowSize= window.innerWidth;
           windowSize <=768 ?setMenu(true):setMenu(false)
        setMenu(windowSize)
        })
    })
    window.addEventListener("scroll" , ()=>{
        if (window.scrollY>=10) {
            setHidden(true)
        }else {
            setHidden(false)

        }
        
    })
    window.addEventListener("scroll" , ()=>{
        if (window.scrollY>=200) {
            setShowNav(true)
        }else {
            setShowNav(false)

        }
    })
    const menuChange=()=>{
        setBigMenu(!bigMenu)
    }
    const showSearch=()=>{
        setSearch(true)
    }
    const hideSearch=()=>{
        setSearch(false)
        
    }
    

  return (
    <Fragment>
    <header className={showNav ?  'hidden setHidden' : ''}>
         <div className='top-header'>
             <div className='country'>
                <div className='english'>
                     <img src={myImage} alt='' />
                     <span>english</span>
                     <IoIosArrowDown className='icon' />
                </div>
                <select name="dollar" id="dollar">
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBR">GBR</option>
                 </select>
                 <div className='phone'>
                     <span>
                         <GiSmartphone />
                     </span>
                    <h5>123-456-7890</h5>
                </div>
            </div>
            <div className='leftside'>
                <NavLink className='links'>
                    <h5><TbArrowsShuffle /></h5>
                    <span>compare</span>
                </NavLink>
                <NavLink className='links'>
                    <h5><CiHeart /></h5>
                    <span>wishlist</span>
                </NavLink>
               
                {
                    JSON.stringify(userr) !== '{}' ?  <p>{userr.username}</p> :
                     <NavLink to='/login' className='links'>
                    <h5><TfiUser /></h5>
                    <span>login</span>
                    </NavLink>   
                }            
                  </div>
            </div>
            <div className='hr'></div>
        <nav className='nav'>
            <img src={logo} alt=''/>
            <ul className={bigMenu?'bigMenu':undefined}
             style={menu?{display:'none'}:{display:'flex'}}>
            <li className='li-home'><NavLink to='/home'>HOME</NavLink>
            <div className='dropdown'>
                         <ul>
                            <li><NavLink to='/fashion1'>fashion 1</NavLink></li>
                            <li><NavLink to='/fashion2'>fashion 2</NavLink></li>
                            <li> <NavLink to='/furnitur1'>furnitur 1</NavLink></li>
                            <li><NavLink to='/furnitur2'>furnitur 2</NavLink></li>
                            <li><NavLink to='/furnitur3'>furnitur 3</NavLink></li>
                            <li><NavLink to='/furnitur4'>furnitur 4</NavLink></li>
                        </ul>
                    </div>
            </li>
            <li className='li-pages'><NavLink to='/about'>PAGES</NavLink>
            <div className='dropdown2'>
                         <ul>
                            <li><NavLink to='/aboutus'>about us</NavLink></li>
                            <li><NavLink to='/contact'>contact us</NavLink></li>
                            <li> <NavLink to='/faq'>faq</NavLink></li>
                            <li><NavLink to='/404'>404 error page</NavLink></li>
                            <li><NavLink to='/login'>login</NavLink></li>
                            <li><NavLink to='/register'>register</NavLink></li>        
                            <li><NavLink to='/team'>team and condition</NavLink></li>
                        </ul>
                    </div>
            </li>
            <li><NavLink to='/product'>PRODUCTS</NavLink></li>
            <li className='li-blog'><NavLink to='/blog'>BLOG</NavLink>
            <div className='dropdown3'>
                        <ul>
                            <li><NavLink to='/fasion1'>fashion 1</NavLink></li>
                            <li><NavLink to='/fashion2'>fashion 2</NavLink></li>
                            <li> <NavLink to='/furnitur1'>furnitur 1</NavLink></li>
                            <li><NavLink to='/furnitur2'>furnitur 2</NavLink></li>
                            <li><NavLink to='/furnitur3'>furnitur 3</NavLink></li>
                            <li><NavLink to='/furnitur4'>furnitur 4</NavLink></li>
                        </ul>
                    </div>
            </li>
            <li><NavLink to='/shop'>SHOP</NavLink></li>
            <li><NavLink to='/contact'>CONTACT US</NavLink></li>
            
        </ul>
       
        <div className='icons-nav'>
            <span onClick={showSearch}><NavLink><TfiSearch size={25} /></NavLink></span>
            <span><NavLink to='/cart'><IoCartOutline size={25} />{cartProducts.length>0?cartProducts.length:undefined}</NavLink></span>
        {
                menu? bigMenu ?  <IoMdClose onClick={menuChange} size={25}/>:
                 <IoIosMenu onClick={menuChange} size={25} />:undefined 
                
                 
            }

        </div>
        </nav>
       
      
    </header>
    <div className={search?'search-boxs leftSearch':'search-boxs'} >
        <div className='search'>
            <div className='close' onClick={hideSearch}>
            <IoMdClose/>
            </div>
            <div className='input-close'>
                <input type='text' placeholder='Search'/>
                <label><IoSearchSharp /></label>
            </div>
        </div>


    </div>
    </Fragment>

  )
}

export default NavBar
