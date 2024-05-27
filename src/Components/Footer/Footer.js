import React, { Fragment } from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaLocationArrow, FaPhone, FaTwitter } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'
import { Link } from 'react-router-dom'
import './Footer.css'

const FooterComp = () => {
  return (
    <Fragment>
       <footer  className="footer">
        <div data-aos="fade-up" className="container">
        <div className="address">
          <h1>Address</h1>
          <span>
            <FaLocationArrow className="icon-span" /> Contact Info
          </span>
          <span>
            <FaPhone className="icon-span" /> Call +01 1234567890
          </span>
          <span>
            <IoMdMail  className="icon-span" /> mail@domain.com
          </span>
          <div className="icon-addres">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaLinkedinIn className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
        <div className="links">
          <h1>Useful Links</h1>
          <ul>
            <li><Link to="">About Us</Link></li>
            <li><Link to="About">FAQ</Link></li>
            <li><Link to="Services">Location</Link></li>
            <li><Link to="WhyUs">Affiliates</Link></li>
            <li><Link to="Team">Contact</Link></li>
          </ul>
        </div>
        <div className="links">
          <h1>My Account</h1>
          <ul>
            <li><Link to="">My Account</Link></li>
            <li><Link to="About">Discount</Link></li>
            <li><Link to="Services">Returns</Link></li>
            <li><Link to="WhyUs">Orders History</Link></li>
            <li><Link to="Team">Order Tracking</Link></li>
          </ul>
        </div>
        <div className="subscribe">
          <h1>Subscribe Our Newsletter</h1>
          <p >If you want to get an email from us every time we have a new special offer, then sign up here!</p>
          <input placeholder="Enter Email Address"/>
        </div>
        </div>
      </footer>
    </Fragment>
  )
}

export default FooterComp