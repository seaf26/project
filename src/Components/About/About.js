import React from 'react'
import { MdOutlineLocalShipping } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { BsBuildingLock } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import AboutStyle from './About.module.css'

const About = () => {
  return (
    <section>
        <div className={AboutStyle.items}>
            <div className={AboutStyle.item}>
                <div className={AboutStyle.icon}>
                    <span><MdOutlineLocalShipping /></span>
                </div>
                <div className={AboutStyle.contant}>
                    <h6>Free Delivery</h6>
                    <p>Worldwide</p>
                </div>

            </div>
            <div className={AboutStyle.item}>
                <div className={AboutStyle.icon}>
                    <span><GiReceiveMoney /></span>
                </div>
                <div className={AboutStyle.contant}>
                    <h6>Money Returns</h6>
                    <p>30 Days money return</p>
                </div>

            </div>
            <div className={AboutStyle.item}>
                <div className={AboutStyle.icon}>
                    <span><BiSupport /></span>
                </div>
                <div className={AboutStyle.contant}>
                    <h6>27/4 Online Support</h6>
                    <p>Customer Support</p>
                </div>

            </div>
            <div className={AboutStyle.item}>
                <div className={AboutStyle.icon}>
                    <span><BsBuildingLock /></span>
                </div>
                <div className={AboutStyle.contant}>
                    <h6>Payment Security</h6>
                    <p>Safe Payment</p>
                </div>

            </div>
        </div>
      
    </section>
  )
}

export default About

