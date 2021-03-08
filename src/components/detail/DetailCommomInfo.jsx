import React, {Component, useState, useEffect } from 'react';
import Axios from "axios";

const BreadCrumb = () => {

    return (
        <div class="act_search_detail_demo">
        <section class="services-slider">
            <div class="main-container">
                <div class="slider slider-main">
                <div class="wrap-img">
                    <img src="./assets/images/act_detail_demo.jpg" />
                </div>
                <div class="wrap-img">                
                    <img src="./assets/images/act_detail_demo.jpg" />                    
                </div>
                <div class="wrap-img">
                    <img src="./assets/images/act_detail_demo.jpg" />
                </div>
                <div class="wrap-img">
                    <img src="./assets/images/act_detail_demo.jpg" />
                </div>
                  <div class="wrap-img">
                    <img src="./assets/images/act_detail_demo.jpg" />
                </div>
                </div>
            </div>
            <div class="nav-container">
                <div class="slider-nav">
                <div class="wrap-img">
                    <img src="./assets/images/act_detail_demo.jpg" />
                </div>
                <div class="wrap-img">
                    <img src="./assets/images/act_detail_demo.jpg" />
                </div>
                <div class="wrap-img">
                    <img src="./assets/images/act_detail_demo.jpg" />
                </div>
               <div class="wrap-img">
                    <img src="./assets/images/act_detail_demo.jpg" />
                </div>
                  <div class="wrap-img">
                    <img src="./assets/images/act_detail_demo.jpg" />
                </div>
                </div>
            </div>
        </section>
        <div class="info">
            <div class="wrap-left">
                <h1 class="name d-block">Lặn ngắm san hô tại bán đảo Sơn Trà</h1>
                <div class="tags">
                    <span>Khách sạn</span>
                </div>
                 <div class="review">
                    <span class="num">4.9</span>
                    <i class="material-icons">star</i>
                    <span class="count">(1423 đánh giá)</span>
                </div>
                <span class="locate d-block">Nha Trang, Việt Nam</span>
            </div>
            <div class="wrap-right text-right">
                <span class="d-block name">Giá từ</span>
                <div class="price">
                    <span class="old">723.000 VNĐ</span>
                    <span class="new">623.000 VNĐ</span>
                </div>
                <a href="" class="book_now">Đặt Ngay</a>
            </div>
        </div>
         <div class="utility">
            <div class="tit">Tiện nghi</div>
            <div class="list">
                <div><span>Miễn phí hủy</span></div>
                <div><span>Miễn phí hủy</span></div>
                <div><span>Miễn phí hủy</span></div>
                <div><span>Miễn phí hủy</span></div>
            </div>
        </div>
    </div>
    );
  };
   
export default BreadCrumb;