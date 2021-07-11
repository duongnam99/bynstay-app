import React, {Component, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect, NavLink, useRouteMatch, useParams, useHistory } from 'react-router-dom';

import {homestayService} from '../../services/homestay.service'

const OrderPaymethod = props => {
    const history = useHistory();
    let { path, url } = useRouteMatch();
    const { id } = useParams();
    const [hs, setHs] = useState([]);
    const [images, setImages] = useState([]);
    const [fasterPayForm, setFasterPayForm] = useState('');

    const {from, to, numGuess, fee, numNight, orderId} = props.location.state

    const checkout = event => {
        let data = {
            amount: fee,
            merchant_order_id: orderId,
            hs_id: id,
        }
        homestayService.checkoutSanbox(data).then((response) => {
            if (response.data.status === false) {
                
            } else {
                setFasterPayForm(response.data.pay)
                document.getElementById('fasterpay_submit').click();
            }
        })
        .catch(error => {
            alert("Có vấn đề phát sinh với hệ thống thanh toán")
        })
    }

    useEffect(() => {
        homestayService.getHsImage(id).then((response) => {
            setImages(response.data)
        })
        homestayService.getHomestay(id).then((response) => {
            setHs(response.data)
        })
        let order = JSON.parse(localStorage.getItem('order'));
        if (order != null) {
            if (order.hs_id != id) {
                alert('Không đúng homestay!');
                history.push('/');
            }
        } else {
            alert('Không đúng homestay!');
            history.push('/');
        }
  
    }, [])

    return (
        <>
            <div class="container mt-3 act_book_ticket_form">
                <div class="title">Phương thức thanh toán</div>
                <div class="row mt-2">
                    <div class="col-md-8">
                    <div class="act_book_form_ticket">
                        <div class="contact detail">
                        <div class="tit">Cổng thanh toán</div>
                        <div class="chk">
                            <div class="options">
                                <div class="custom-cb">
                                    <input type="checkbox" checked />
                                    <div class="state"><label>FasterPay (Visa/MasterCard)</label></div>
                                </div>
                            </div>
                        </div>
                        <div class="name">{hs.name}</div>
                        <div class="box">
                            <div class="line">
                                <span>Số người</span>
                                <span>{numGuess}</span>
                            </div>
                            <div class="line">
                                <span>Số đêm</span>
                                <span>{numNight}</span>
                            </div>
                        </div>
                        <div class="checkout">
                            <span>Thanh toán</span>
                            <span>{fee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VNĐ</span>
                        </div>
                    </div>
                        <div class="final">
                            <span class="left">Khi nhấn vào nút này bạn công nhận mình đã đọc và đồng ý với các <span>Điều khoản sử dụng</span> và <span>Chính sách bảo mật</span> của Bynstay</span>

                            <a class="right" href="javascript:void(0)" onClick={checkout}>Thanh toán</a>
                            <div class="d-none" dangerouslySetInnerHTML={{__html:fasterPayForm}} />
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
                                    <span>{from}</span>
                                </div>
                                <div class="line">
                                    <span>Ngày tả phòng</span>
                                    <span>{to}</span>
                                </div>
                                <div class="line">
                                    <span>Số người</span>
                                    <span>{numGuess}</span>
                                </div>
                                <div class="line">
                                    <span>Thanh toán</span>
                                    <span><big>{fee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} vnđ</big></span>
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
   
export default OrderPaymethod;