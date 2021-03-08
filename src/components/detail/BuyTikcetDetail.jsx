import React, {Component, useState, useEffect } from 'react';
import Axios from "axios";
import { stringify } from "querystring";

const BuyTikcetDetail = () => {

    return (
        <div class="act_buy_ticket">
        <div class="info">
            <div class="wrap-left">
                <h1 class="name d-block">Lặn ngắm san hô tại bán đảo Sơn Trà</h1>
                <div class="status">
                    <span>Còn vé hôm nay</span>
                </div>
                <span class="detail">Xem chi tiết</span>
            </div>
            <div class="wrap-right text-right">
                <div class="price">
                    <span class="old">723.000 VNĐ</span>
                    <span class="new">623.000 VNĐ</span>
                </div>
                <a href="" class="book_now">Chọn</a>
            </div>
        </div>
        <div class="booking" style={{display: "none"}}>
            <div class="box">
                <div class="tit">Ngày tham quan</div>
                <div class="input-date ipt del">
                    <i class="material-icons">calendar_today</i>
                    <input type="text" placeholder="10/10/2019" data-input="" class="js-date_act man" readonly="readonly" />
                    <i class="material-icons ic_2">expand_more</i>
              
                </div>
              
            </div>
            <div class="box">
                <div class="tit"> Hành khách </div>
                <div class="input-people ipt">
                    <i class="material-icons ic_1">people</i>
                    <a href="javascript:;" class="tgl_options_pp man">2 người lớn - 1 trẻ em</a>
                    <i class="material-icons ic_2">expand_more</i>
                    <div class="select-cus">
                        <div class="select-item">
                            <div class="block-1">
                                <span>Người lớn trên 18 tuổi</span>
                                <div>600.000 VNĐ</div>
                            </div>
                            <div class="block-2">
                                <a href="javascript:;">
                                    -
                                </a>
                                <div class="content">
                                    <input type="text" value="1" class="so-nguoi" />
                                </div>
                                <a href="javascript:;">
                                    +
                                </a>
                            </div>
                        
                        </div>
                          <div class="select-item">
                            <div class="block-1">
                                <span>Người lớn trên 18 tuổi</span>
                                <div>600.000 VNĐ</div>
                            </div>
                            <div class="block-2">
                                <a href="javascript:;">
                                    -
                                </a>
                                <div class="content">
                                    <input type="text" value="1" class="" />
                                </div>
                                <a href="javascript:;">
                                    +
                                </a>
                            </div>
                        
                        </div>
                          <div class="select-item">
                            <div class="block">
                                <span>Tổng giá</span>
                                <div>1.600.000 VNĐ</div>
                            </div>
                        </div>
                    </div>
                    <input type="hidden" name="so-nguoi" />
                </div>
            </div>
            <div class="box">
                <div class="tit"> Khung thời gian </div>
                <div class="input-day-time ipt">
                    <i class="material-icons ic_1">access_time</i>
                    <a href="javascript:;" class="tgl_options_dt man">08:00 - 13:00</a>
                    <i class="material-icons ic_2">expand_more</i>
                    <div class="select-cus slt-dt">
                        <div class="select-item">
                           <span>08:00 - 13:00</span>
                        </div>
                        <div class="select-item">
                           <span>13:00 - 16:00</span>
                        </div>
                    </div>
                    <input type="hidden" name="so-nguoi" />
                </div>
                <span class="cm_status">Không có vé phù hợp</span>
            </div>
            <div class="box wrap-btn">
                <a id="bk_n" href="">Đặt Ngay</a>
            </div>
        </div>
    </div>
    );
  };
   
export default BuyTikcetDetail;