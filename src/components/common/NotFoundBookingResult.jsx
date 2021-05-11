import React, {Component, useState, useEffect } from 'react';
import Axios from "axios";
import { stringify } from "querystring";

const NotFoundBookingResult = props => {

    return (

        <div class="not_found_booking_result mt-5">
            <div class="wrap-img">
                <img src="/assets/images/group.png" alt="" />
            </div>
            <span>Không tìm thấy điểm lưu trú nào phù hợp yêu cầu!</span>
        </div>
    );
  };
   
export default NotFoundBookingResult;