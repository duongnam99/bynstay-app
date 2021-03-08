import React, {Component, useState, useEffect } from 'react';
import Axios from "axios";
import { stringify } from "querystring";

const ItemsBookingResult = () => {

    return (
        <div class="item_booking_result">
        <div class="block-main">
        <a href="" class="wrap">
                <div class="wrap-img">
                    <img src="./assets/images/rsz_temp_bk_result.png" alt="" />
                </div>
            </a>
    
            <div class="info">
                <a href="" class="name">Baiyoke Suite Hotel</a>
                <span class="tag">Homestay</span>
                <div class="stars">
                    
                    <span>(1323 đánh giá)</span>
                </div>
                <div class="locate">Pratunam, Bangkok</div>
            </div>
            <div class="box">
                <div class="wrap-top">
                    <div class="disc"><i class="material-icons md-dark">new_releases</i> <span class="d-inline-block"> Giảm 25%, thời gian có hạn !</span> </div>
                    <div>Có trả tiền tại khách sạn</div>
                </div>
                <div class="price">
                
                    <div class="old">1,099,445 VNĐ</div>
                    <div class="new">1,099,445 VNĐ</div>
                    <span class="tgl"> <span>chi tiết chi phí </span> <i class="material-icons"> expand_less </i></span>
                </div>
            </div>
        </div>
        <div class="more" style={{display: "none"}}>
            <div class="block-a">
                <div class="line">
                    <span>Đêm thứ 1 (24/11/2019)</span>
                    <span>300,000 VNĐ</span>
                </div>
                <div class="line">
                    <span>Đêm thứ 1 (24/11/2019)</span>
                    <span>300,000 VNĐ</span>
                </div>
                <div class="line">
                    <span>Đêm thứ 1 (24/11/2019)</span>
                    <span>300,000 VNĐ</span>
                </div>
            </div>
            <div class="block-b">
                 <div class="line">
                    <span>Giá 1 phòng</span>
                    <span>300,000 VNĐ</span>
                </div>
                <div class="line">
                    <span>Chi phí khách sạn</span>
                    <span>0 VNĐ</span>
                </div>
            </div>
        </div>
    </div>
    );
  };
   
export default ItemsBookingResult;