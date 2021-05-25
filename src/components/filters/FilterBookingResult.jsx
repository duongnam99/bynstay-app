import React, {Component, useState, useEffect } from 'react';
import Axios from "axios";
import { stringify } from "querystring";

const FilterBookingResult = () => {

return (
    <div class="filter_booking_result">
    <div class="sort">
        <div class="tit">Sắp xếp</div>
        <div class="sub-tit">Sắp xếp các kết quả</div>
        <div class="options">
            <div class="custom-cb">
                <input type="checkbox" checked />
                <div class="state"><label>Phổ  biến nhất</label></div>
            </div>
            <div class="custom-cb">
                <input type="checkbox" />
                <div class="state"><label>Phổ  biến nhất</label></div>
            </div>
            <div class="custom-cb">
                <input type="checkbox" />
                <div class="state"><label>Phổ  biến nhất</label></div>
            </div>
            <div class="custom-cb">
                <input type="checkbox" />
                <div class="state"><label>Phổ  biến nhất</label></div>
            </div>
             <div class="custom-cb">
                <input type="checkbox" />
                <div class="state"><label>Phổ  biến nhất</label></div>
            </div>
        </div>
    </div>
    <div class="filter">
        <div class="tit"> <span>Bộ lọc</span> <a href="">Bỏ lọc</a></div>
        <div class="sub-tit">Lọc kết quả theo các tiêu chí</div>

        <div class="box-slider">
            <div class="box-title">Khoảng giá</div>
            <div class="wrap-bl-pr">
                <div class="block-pr">
                    <span>VND</span>
                    <div id="min-pr">2,000,000</div>
                </div> <div class="block-pr">
                    <span>VND</span>
                    <div id="max-pr">2,000,000</div>
                </div>
            </div>
             <div id="filter_price_slider"></div>
           
        </div>
        <div class="box-quality box-square">
            <div class="box-title">
                Chất lượng khách sạn
            </div>
            <div class="options_2">
                <label class="cont"> 5 sao
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                </label>
                <label class="cont"> 5 sao
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                </label>
                <label class="cont"> 5 sao
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                </label>
                <label class="cont"> 5 sao
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                </label>
                <label class="cont"> 5 sao
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                </label>
            </div>
        </div>
        <div class="box-square">
            <div class="box-title">
                Tiện nghi
            </div>
            <div class="options_2">
                <label class="cont"> Trả tiền tại khách sạn
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                </label>
                <label class="cont"> Wifi miễn phí
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                </label>
                <label class="cont"> Bãi đậu xe
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                </label>
                <label class="cont"> Gần nhà hàng
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                </label>
                <label class="cont"> Lễ tân 24/7
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                </label>
                <label class="cont"> Thang máy
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                </label>
                <label class="cont"> Dịch vụ ra sân bay
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                </label>
            </div>
        </div>
        <div class="box-square place-level">
            <div class="box-title">Điều kiện chỗ ở</div>
            <div class="options">
                <div class="custom-cb">
                    <input type="checkbox" />
                    <div class="state"><label>Chỗ ở gia đình</label></div>
                </div>
                <div class="custom-cb">
                    <input type="checkbox" />
                    <div class="state"><label>Căn hộ</label></div>
                </div>
                <div class="custom-cb">
                    <input type="checkbox" />
                    <div class="state"><label>Villa</label></div>
                </div>
                <div class="custom-cb">
                    <input type="checkbox" />
                    <div class="state"><label>Sang trọng</label></div>
                </div>
                <div class="custom-cb">
                    <input type="checkbox" />
                    <div class="state"><label>Bờ sông</label></div>
                </div>
            </div>
        </div>
    </div>
</div>
   
   );
};

export default FilterBookingResult;