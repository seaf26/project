import React, { useEffect, useState } from 'react'
import loginStyle from './login.module.css'
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'noval';
import { useTranslation } from 'react-i18next';

// import { userSlice } from '../../Redux/userSlice';

const Login = () => {
    const [users,setUsers] = useState()
    const [name,setName] = useState()
    const [pass,setPass] = useState()
    const { t } = useTranslation(); 
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/users')
        .then((res)=>{setUsers(res.data)})
        .catch((err)=>{console.log(err)})
    },[])
    const navigate = useNavigate ()
    const {dispatch} = useDispatch()
        const handlelogin=()=>{
        // const user = users?.filter((r)=>{
        //     if(r.username == name){
        //         if(r.password == pass){
        //             dispatch(userSlice.actions.getUserData(r))
        //             navigate('/product')
        //             return r
        //         }
        //     }
        // })
        console.log(users)
        if(users.length == 0){
            document.querySelector('.wrong').innerHTML = 'Wrong Username or Passwrod'
        }
        dispatch({user: {
            "address": {
                "geolocation": {
                    "lat": "-37.3159",
                    "long": "81.1496"
                },
                "city": "kilcoole",
                "street": "new road",
                "number": 7682,
                "zipcode": "12926-3874"
            },
            "id": 1,
            "email": "john@gmail.com",
            "username": "johnd",
            "password": "m38rmF$",
            "name": {
                "firstname": "john",
                "lastname": "doe"
            },
            "phone": "1-570-236-7033",
            "__v": 0
        }})
        navigate ("/home")
    }
  return (
    <div className={loginStyle.loginContainer}>
        <div className={loginStyle.container}>
            <div className={loginStyle.textCon}>
                <h1>{t("login")}</h1>
            </div>
            <div className={loginStyle.linksCon}>
                <ul>
                    <li>{t('Home')} <IoIosArrowForward size={12} /> </li>
                    <li>{t('Pages')} <IoIosArrowForward size={12} /> </li>
                    <li>{t('Login')}</li>
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
