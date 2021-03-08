import React, {Component, useState, useEffect } from 'react';
import Axios from "axios";
import { stringify } from "querystring";

const Pagination = () => {

    return (
        <div class="pagination_cus mt-5">
            <a class="active" href=""><span>1</span></a>
            <a href=""><span>2</span></a>
            <a href=""><span>3</span></a>
            <span class="spec"> <span>...</span></span>
            <a href=""><span>99</span></a>
            <a class="prev" href=""><span>Trước</span></a>
            <a class="next" href=""><span>Sau</span></a>
        </div>
    );
  };
   
export default Pagination;