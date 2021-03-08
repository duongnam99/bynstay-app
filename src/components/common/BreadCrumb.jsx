import React, {Component, useState, useEffect } from 'react';
import Axios from "axios";
import { stringify } from "querystring";

const BreadCrumb = () => {

    return (
        <div class="breadcrumb_cus">
            <a href="">Activity / </a>
            <a href="">Việt Nam / </a>
            <a href="">Đà Nẵng / </a>
            <a href="">Quận Cẩm Lệ / </a>
            <span>Lặn ngắm san hô tại bán đảo Sơn Trà - Tour nửa ngày</span>
        </div>
    );
  };
   
export default BreadCrumb;