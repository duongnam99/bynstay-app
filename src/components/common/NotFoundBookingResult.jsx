import React, {Component, useState, useEffect } from 'react';
import Axios from "axios";
import { stringify } from "querystring";

const NotFoundBookingResult = () => {

    return (
        <div class="not_found_booking_result">
            <div class="wrap-img">
                <img src="/assets/images/group.png" alt="" />
            </div>
            <span>Không tìm thấy khách sạn nào phù hợp yêu cầu!</span>
        </div>
    );
  };
   
export default NotFoundBookingResult;