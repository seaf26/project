import React from 'react'
import footerStyle from './Footer.module.css'
import { CiLocationOn, CiMail } from "react-icons/ci";
import { } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { CiYoutube } from "react-icons/ci";
import Visa from '../../images/visa.png'
import discoer from '../../images/discover.png'
import master from '../../images/master_card.png'
import pay from '../../images/paypal.png'
import american from '../../images/amarican_express.png'
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className={footerStyle.footer}>
			<div className={footerStyle.footerContainer}>
				<div className={footerStyle.paddingFooter}>
					<div className={footerStyle.container}>
						<div className={footerStyle.row}>
							<div className={footerStyle.info}>
								<div className={footerStyle.heading}>
									<h5>contact info</h5>

								</div>
								<ul>
									<li><Link><CiLocationOn size={15} /></Link> <p>123 Street, Old Trafford, NewYork, USA</p></li>
									<li><Link><CiMail size={15} /></Link> <Link> info@sitename.com</Link></li>
									<li><Link><IoIosPhonePortrait size={15} /></Link> <p>  + 457 789 789 65</p></li>
								</ul>
								<div className={footerStyle.social}>
									<Link className={footerStyle.facebook}><FaFacebookF /></Link>
									<Link className={footerStyle.twitter}><FaTwitter /></Link>
									<Link className={footerStyle.google}><TiSocialGooglePlus /></Link>
									<Link className={footerStyle.youtube}><CiYoutube /></Link>
									<Link className={footerStyle.insta}><FaInstagram /></Link>
								</div>
							</div>
							<div className={footerStyle.usefuleLinks}>
								<div className={footerStyle.heading}>
									<h5>usefule links</h5>
								</div>
								<ul >
									<li><Link to='/about'>about us</Link></li>
									<li><Link to='/faq'>FAQ</Link></li>
									<li><Link to='/location'>Location</Link></li>
									<li><Link to='/affiliates'>Affiliates</Link></li>
									<li><Link to='/contact'>Contact</Link></li>
								</ul>
							</div>
							<div className={footerStyle.usefuleLinks}>
								<div className={footerStyle.heading}>
									<h5>my account</h5>

								</div>
								<ul>
									<li><Link>My Account</Link></li>
									<li><Link>Discount</Link></li>
									<li><Link>Returns</Link></li>
									<li><Link>Orders History</Link></li>
									<li><Link>Order Tracking</Link></li>
								</ul>
							</div>
							<div className={footerStyle.subscribe}>
								<div className={footerStyle.heading}>
									<h5>Subscribe Our Newsletter</h5>

								</div>
								<p>If you want to get an email from us every time
									we have a new special offer, then sign up here!</p>
								<div className={footerStyle.subInput}>
									<input type='email' placeholder='Enter Email Address' />
									<label><FaEnvelopeOpenText /></label>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={footerStyle.footerDown}>
				<div className={footerStyle.footerDown}>
					<p>© 2020 All Rights Reserved by Bestwebcreator</p>
				</div>
				<div className={footerStyle.leftSide}>
					<img src={Visa} alt='' />
					<img src={discoer} alt='' />
					<img src={master} alt='' />
					<img src={pay} alt='' />
					<img src={american} alt='' />
				</div>
			</div>

		</footer>
	)
}

export default Footer