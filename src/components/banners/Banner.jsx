import React, {Component, useState, useEffect } from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {homestayService} from '../../services/homestay.service'

const Banner = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 2,
        slidesToShow: 3,
        autoplay: false,
        autoplaySpeed: 2000,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div class="banner_home">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <h3 class="banner_title">Xin chào!</h3>
                    <p class="banner_dec">Bạn đang tìm kiếm một kỷ niệm đáng nhớ?</p>
                    <img src="" alt="" />
                </div>
                <div class="col-lg-7">
                <div class="slider-content">
                <Slider {...settings}>
                    <div>
                        <img src="/assets/images//Bitmap.png" alt="" />
                    </div>
                    <div>
                        <img src="/assets/images//Bitmap.png" alt="" />
                    </div>
                    <div>
                        <img src="/assets/images//Bitmap.png" alt="" />
                    </div>
                    <div>
                        <img src="/assets/images//Bitmap.png" alt="" />
                    </div>
                    <div>
                        <img src="/assets/images//Bitmap.png" alt="" />
                    </div>
                    <div>
                        <img src="/assets/images//Bitmap.png" alt="" />
                    </div>
                    <div>
                        <img src="/assets/images//Bitmap.png" alt="" />
                    </div>
                </Slider>
          
                </div>
                    {/* <div class="slider-content">
                        <div class="js-carousel" data-items="2" data-dots="false" data-margin="24" data-loop="true">
                            <div class="banner-item">
                                <a href="#">
                                    <img src="/assets/images//Bitmap.png" alt="" />
                                </a>
                            </div>
                            <div class="banner-item">
                                <a href="#">
                                    <img src="/assets/images/Bitmap1.png" alt="" />
                                </a>
                            </div>
                            <div class="banner-item">
                                <a href="#">
                                    <img src="/assets/images/Bitmap.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                */}
                </div>
            </div>
        </div>
    </div>
    );
  };
   
export default Banner;