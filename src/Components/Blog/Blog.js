import React from "react";
import cardstyle from '../Blog/blog.module.css'
import { NavLink } from "react-router-dom";
import leftImage from '../../images/furniture_banner1.jpg'
import rightImage from '../../images/furniture_banner2.jpg'

const Blog = () => {
  return (
    <section className={cardstyle.Container}>
    <div className={cardstyle.content}>
        <div className={cardstyle.leftSide}>
            <div className={cardstyle.text}>
                <h3>super sale</h3>
                <h1>New Collection</h1>
                <NavLink>shop now</NavLink>
            </div>
            <div className={cardstyle.image}><img src={leftImage} alt=''/></div>
        </div>
        <div className={cardstyle.rightSide}>
            <div className={cardstyle.text}>
            <h1>New Season</h1>
            <h3>Sale 40% Off</h3>
            <NavLink>shop now</NavLink>
            </div>
            <div className={cardstyle.image}>
                <img src={rightImage} alt=''/>
            </div>
        </div>
    </div>
    </section>
  );
};

export default Blog;
