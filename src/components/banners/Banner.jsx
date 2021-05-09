import React, {Component, useState, useEffect } from 'react';
import Axios from "axios";
import { stringify } from "querystring";

const Banner = () => {

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
                </div>
            </div>
        </div>
    </div>
    );
  };
   
export default Banner;