import React, {Component, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect, NavLink, useRouteMatch, useParams, useLocation, useHistory } from 'react-router-dom';

import {homestayService} from '../../services/homestay.service'


const OrderResult = props => {
    const history = useHistory();
    let { path, url } = useRouteMatch();
    const { id } = useParams();
    const [hs, setHs] = useState([]);
    const [hsOrder, setHsOrder] = useState([]);
    const [images, setImages] = useState([]);
    let query = new URLSearchParams(useLocation().search);
    const [isValidateError, setValidateError] = useState(false)
    const [validatorMes, setValidatorMes] = useState([])


    useEffect(() => {
        let customer = JSON.parse(localStorage.getItem('customer'));
        homestayService.getHsImage(id).then((response) => {
            setImages(response.data)
        })
        homestayService.getHomestay(id).then((response) => {
            setHs(response.data)
        })
        homestayService.getHsOrder(query.get('order_id')).then((response) => {
      
            if (customer != null) {
                if (customer.customer_email != response.data.customer_email) {
                    alert('Không đúng order!');
                    history.push('/');
                }
            } else {
                alert('Không đúng order!');
                history.push('/');
            }
          
            setHsOrder(response.data)
            if (response.data.payment_status !== 1) {
                setValidateError(true);
                alert('Quá trình thanh toán đang tiến hành, bạn sẽ nhận được email thông báo sau khi thanh toán thành công')
            }
        })
    }, [])
    return (
        <>
          <div class="container mt-3 act_book_ticket_confirm_page">
            <div class="title">{isValidateError ? "Quá trình thanh toán đang hoàn tất" : "Bạn đã hoàn tất đặt chỗ"}</div>
            <div class="sub-title">Vui lòng đưa mã đặt chỗ đến lễ tân để đối chiếu đặt chỗ</div>
            <div class="row mt-3">
                <div class="col-md-8">
                <div class="act_book_form_ticket act_book_confirm_ticket">
                    <div class="code">
                        <span>Mã đặt vé</span>
                        <span>{isValidateError ? "....." : hsOrder.success_code}</span>
                    </div>
                    <div class="confirm">
                        <div class="tit">Thông tin liên hệ</div>
                        <div class="box">
                            <div class="line">
                                <span>Tên người liên hệ:</span>
                                <span>{hsOrder.customer_name}</span>
                            </div>
                            <div class="line">
                                <span>Email</span>
                                <span>{hsOrder.customer_email}</span>
                            </div>
                            <div class="line">
                                <span>Số điện thoại</span>
                                <span>{hsOrder.customer_phone}</span>
                            </div>
                        </div>
                    </div>
                    <div class="detail">
                        <div class="tit">Chi tiết đặt chỗ</div>
                        <div class="name">{hs.name}</div>
                        <div class="box">
                            <div class="line">
                                <span>Số ngày lưu trú</span>
                                <span>{hsOrder.num_night}</span>
                            </div>
                            <div class="line">
                                <span>Số khách</span>
                                <span>{hsOrder.num_guess}</span>
                            </div>
                        </div>
                        <div class="checkout">
                            <span>Thanh toán</span>
                            <span>{hsOrder.fee}</span>
                        </div>
                    </div>
                    <div class="final">
                        <span class="left">Thông tin thanh toán đã được gửi về email </span>
                        <a class="right" href="">Về trang chủ</a>
                    </div>
                </div>
                </div>
                <div class="col-md-4">
                    <div class="act_ticket_box">
                        <div class="tit">Thông tin nơi lưu trú</div>
                        <div class="wrap">
                            <div class="med">
                                <div class="left">
                                    <div class="wrap-img">
                                        <img src={ images.length > 0 ? images[0].url : "https://via.placeholder.com/150"} alt="" />
                                    </div>
                                </div>
                                <div class="name">{hs.name}</div>
                            </div>
                            <div class="status"><i class="material-icons">report</i>Không được hủy</div>
                            <div class="box">
                                <div class="line">
                                    <span>Ngày nhận phòng</span>
                                    <span>{hsOrder.start_date}</span>
                                </div>
                                <div class="line">
                                    <span>Ngày tả phòng</span>
                                    <span>{hsOrder.end_date}</span>
                                </div>
                                <div class="line">
                                    <span>Số người</span>
                                    <span>{hsOrder.num_guess}</span>
                                </div>
                                <div class="line">
                                    <span>Thanh toán</span>
                                    <span><big>{hsOrder.fee} vnđ</big></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
               
            </div>
        </div>
        
        </>
    );
  };
   
export default OrderResult;