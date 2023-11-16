import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../components style/imageCarousel.css"
import ImageCarousel_1 from "../images/Image_carousel_1.png"
import ImageCarousel_2 from "../images/Image_carousel_2.png"
import ImageCarousel_3 from "../images/Image_carousel_3.png"
import ImageCarousel_4 from "../images/Image_carousel_4.png"
import ImageCarousel_5 from "../images/Image_carousel_5.png"
import ImageCarousel_6 from "../images/Image_carousel_6.jpg"
import ImageCarousel_7 from "../images/Image_carousel_7.jpg"
import ImageCarousel_8 from "../images/Image_carousel_8.jpg"
import ImageCarousel_9 from "../images/Image_carousel_9.jpg"
import ImageCarousel_10 from "../images/Image_carousel_10.png"


function ImageCarousel() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
      };
 
  return (
    <section className='image-carousel-section'>
        <div className='carousel-section'>
            <Slider {...settings}>
            <div>
             <img src={ImageCarousel_1}/>
            </div>
            <div>
             <img src={ImageCarousel_2}/>
            </div>
            <div>
             <img src={ImageCarousel_3}/>
            </div>
            <div>
             <img src={ImageCarousel_4}/>
            </div>
            <div>
             <img src={ImageCarousel_5}/>
            </div>
            <div>
             <img src={ImageCarousel_6}/>
            </div>
            <div>
             <img src={ImageCarousel_7}/>
            </div>
            <div>
             <img src={ImageCarousel_8}/>
            </div>
            <div>
             <img src={ImageCarousel_9}/>
            </div>
            <div>
             <img src={ImageCarousel_10}/>
            </div>
            </Slider>
        </div>
      </section>
  );
}

export default ImageCarousel;