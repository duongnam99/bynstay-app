import React, {Component, useState, useEffect } from 'react';
import Axios from "axios";
import { stringify } from "querystring";

const ItemBooking1 = () => {

    return (
        <div class="item_booking_1">
            <a href="" class="wrap-img">
                <img src="/assets/images/Bitmap1.png" alt="" />
            </a>
            <span class="locate">Vietnam</span>
            <a href="" class="list_hotel"><span>Danh sách khách sạn</span></a>
        </div>
    );
  };
   
export default ItemBooking1;