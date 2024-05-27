import React, { Fragment, useEffect, useState } from 'react'
import './contactUs.css'
import insta1 from '../../images/furniture_insta1.jpg'
import insta2 from '../../images/furniture_insta2.jpg'
import insta3 from '../../images/furniture_insta3.jpg'
import insta4 from '../../images/furniture_insta4.jpg'
import insta5 from '../../images/furniture_insta5.jpg'
import insta6 from '../../images/furniture_insta6.jpg'
import textImg1 from '../../images/cl_logo1.png'
import textImg2 from '../../images/cl_logo2.png'
import textImg3 from '../../images/cl_logo3.png'
import textImg4 from '../../images/cl_logo4.png'
import textImg5 from '../../images/cl_logo5.png'
import textImg6 from '../../images/cl_logo6.png'
import { FaInstagram } from "react-icons/fa";

const ContactUs = () => {
    const InstaImg = [
        insta1,
        insta2,
        insta3,
        insta4,
        insta5,
        insta6,
        
      ];
      const ImgText = [textImg1, textImg2, textImg3, textImg4, textImg5, textImg6];
      const [Show, setShow] = useState(0);
      useEffect(()=>{
        setInterval(()=>{
          setShow((prevShow) => (prevShow + 1) % ImgText.length);
        },6000)
      },[ImgText.length])
      const getImages = () => {
        let orderedImages = [];
        for (let i = 0; i < ImgText.length; i++) {
          orderedImages.push(ImgText[(i + Show) % ImgText.length]);
        }
        return orderedImages;
      };
      const [offset, setoffset] = useState(0);
      useEffect(() => {
        setInterval(() => {
          setoffset((prevOffset) => (prevOffset + 1) % InstaImg.length);
        }, 5000);
      }, [InstaImg.length]);
      const getImagesToShow = () => {
        let orderedImages = [];
        for (let i = 0; i < InstaImg.length; i++) {
          orderedImages.push(InstaImg[(i + offset) % InstaImg.length]);
        }
        return orderedImages;
      };
      return (
       <Fragment>
        <section className='insta'>
            <div className='img-insta'>
                {getImagesToShow().map((image,index)=>(
                    <div className='single-img'>
                        <img key={index} src={image} alt=""/>
                    </div>
                ))}
                <div className='instgram'>
                <h1>instagram</h1>
                <p>@shoppingzone</p>
                </div>
                <div className='insta-icon'>
                  <FaInstagram />
                  </div>
            </div>
            <div className='container'>
                <div className='img-text'>
                {getImages().map((image,indx)=>(
                        <img key={indx} src={image} alt=""/>
                ))}
                </div>


            </div>

        </section>

       </Fragment> 
      )
    
      
    
    }
export default ContactUs
