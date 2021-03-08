import React, {Component, useState, useEffect } from 'react';
import Axios from "axios";
import { stringify } from "querystring";

const ConditionDetail = () => {

    return (
        <div class="act_condition">
        <div class="tit">Điều khoản & điều kiện</div>
        <div class="list">
            <div><span>Khách hàng khi nhận vé vui lòng cung cấp giấy chứng minh độ tuổi.</span></div>
            <div><span>Khách hàng có trẻ em đi theo cần đảm bảo an toàn, và luôn để ý đến trẻ tránh tình trạng bị lạc.</span></div>
            <div><span>Khách hàng có trẻ em đi theo cần đảm bảo an toàn, và luôn để ý đến trẻ tránh tình trạng bị lạc.</span></div>
        </div>
    </div>
    );
  };
   
export default ConditionDetail;