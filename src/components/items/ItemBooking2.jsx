import React, {Component, useState, useEffect } from 'react';
import Axios from "axios";
import { stringify } from "querystring";

const ItemBooking2 = () => {

    return (
        <div class="item_booking_2">
            <a href="" class="wrap-img">
                <img src="/assets/images/Bitmap1.png" alt="" />
                <div class="flag" href=""><span>Đặt phòng ngay</span></div>
            </a>
            <div class="info">
                <a href="" class="name">Evason Hideaway</a>
                <span class="locate">Nha Trang, Việt Nam</span>
                <div class="review"></div>
                <div class="price">Gía từ <span>3,000,000 VNĐ</span> </div>
            </div>
        </div>
    );
  };
   
export default ItemBooking2;