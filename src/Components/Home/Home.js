// import React, { useEffect, useState } from 'react'
// import homeStyle from './Home.module.css'
// import { NavLink } from 'react-router-dom';

// const Home = () => {
//     const images = [<div className={`${homeStyle.cover} ${homeStyle.one}`}>
//     <div className={homeStyle.home}>
//         <p>NEW TRANDING</p>
//         <h2>Sofa Collection</h2>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
//         <button>SHOP NOW</button>

//     </div>
//     </div>,
//     <div className={`${homeStyle.cover} ${homeStyle.two}`}>
//     <div className={homeStyle.home}>
//         <p>Get up to 50% off Today Only!</p>
//         <h2>Wooden Chair Collection</h2>
        
//         <button>SHOP NOW</button>

//     </div>
//     </div>,
//     <div className={`${homeStyle.cover} ${homeStyle.three}`}>
//     <div className={homeStyle.home}>
//         <p>Taking your Viewing Experience to Next Level</p>
//         <h2>Living Room Collection</h2>
//         <button>SHOP NOW</button>

//     </div>
//     </div>]
    
//     const [cover,setCover]=useState(0);
//     useEffect(()=>{
//         setInterval(()=>{
//             setCover((next)=>(next+1)%images.length)

//         },9000)
//     },[images.length])
//     const cursor1=()=>{
//         setCover((prev)=>(prev = 0)%images.length)
//     }
//     const cursor2=()=>{
//         setCover((prev)=>(prev = 1)%images.length)
//     }
//     const cursor3=()=>{
//         setCover((prev)=>(prev = 2)%images.length)
//     };   
//   return (
//     <section className={homeStyle.page} >
//         {images[cover]}
//         <div className={homeStyle.cursor}>
//             <NavLink onClick={cursor1}></NavLink>
//             <NavLink onClick={cursor2}></NavLink>
//             <NavLink onClick={cursor3}></NavLink>

//             </div>      
//     </section>
//   )
// }

// export default Home

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import img1 from '../../images/banner7.jpg';
import img2 from '../../images/banner9.jpg';

const Home = () => {
  const images = [img1, img2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="relative">
        <img src={images[currentImageIndex]} alt="Carousel" className="w-full h-auto" />
        <div className="absolute bottom-0 left-0 right-0 flex space-x-4 mt-4 justify-center bg-opacity-50 bg-black py-2">
          {images.map((_, index) => (
            <NavLink
              key={index}
              onClick={() => goToImage(index)}
              className={`cursor-pointer text-white ${currentImageIndex === index ? 'font-bold' : ''}`}
            >
              {index + 1}
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;