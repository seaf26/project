import React, { useEffect, useState } from 'react'
import loginStyle from './login.module.css'
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { userSlice } from '../../Redux/userSlice';

const Login = () => {
    const [users,setUsers] = useState()
    const [name,setName] = useState()
    const [pass,setPass] = useState()
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/users')
        .then((res)=>{setUsers(res.data)})
        .catch((err)=>{console.log(err)})
    },[])
    const navigate = useNavigate ()
    const dispatch = useDispatch ()
        const handlelogin=()=>{
        const user = users?.filter((r)=>{
            if(r.username == name){
                if(r.password == pass){
                    dispatch(userSlice.actions.getUserData(r))
                    navigate('/product')
                    return r
                }
            }
        })
        console.log(user)
        if(user.length == 0){
            document.querySelector('.wrong').innerHTML = 'Wrong Username or Passwrod'
        }
    }
  return (
    <div className={loginStyle.loginContainer}>
        <div className={loginStyle.container}>
            <div className={loginStyle.textCon}>
                <h1>Login</h1>
            </div>
            <div className={loginStyle.linksCon}>
                <ul>
                    <li>Home <IoIosArrowForward size={12} /> </li>
                    <li>Pages <IoIosArrowForward size={12} /> </li>
                    <li>Login</li>
                </ul>
            </div>
            
        </div>
        <div className={loginStyle.login}>
            <div className={loginStyle.inputCon}>
                <div className={loginStyle.inputs}>
                    <h1> Login</h1>
                    <p className='wrong'></p>
                    <input type='text' placeholder='user Name' onChange={(e)=>setName(e.target.value)} />
                    <input type='password' placeholder='password' onChange={(e)=>setPass(e.target.value)} />
                    <div className={loginStyle.chickBox}>
                        <div className={loginStyle.chick}>
                            <input type='checkbox' id='box' />
                            <label for='box'>Remember me</label>
                           
                        </div>
                        <h3> Forgot password? </h3>
                    </div>
                    <button onClick={()=>handlelogin()}>Log In</button>
                    <div className={loginStyle.or}>
                        <div className={loginStyle.hr}></div>
                        <h3> OR </h3>
                        <div className={loginStyle.hr}></div>
                    </div>
                    <div className={loginStyle.buttons}>
                        <Link><FaFacebookF /> Facebook </Link>
                        <Link><TiSocialGooglePlus /> Google </Link>
                    </div>
                    <p>Don't Have an Account?  <Link>Sign up now</Link> </p>
                </div>


            </div>
        </div>
      
    </div>
  )
}

export default Login
