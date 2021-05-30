import React, {Component, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect, NavLink, useRouteMatch, useParams, useHistory, Link } from 'react-router-dom';

import {homestayService} from '../../services/homestay.service'

const Order = props => {
    const history = useHistory();
    let { path, url } = useRouteMatch();
    const { id } = useParams();
    const [hs, setHs] = useState([]);
    const [csName, setCsName] = useState('');
    const [csEmail, setCsEmail] = useState('');
    const [csPhone, setCsPhone] = useState([]);
    const [images, setImages] = useState([]);
    const {from, to, numGuess, fee, numNight} = props.location.state
    const [isValidateError, setValidateError] = useState(false)
    const [validatorMes, setValidatorMes] = useState([])
    const [user, setUser] = useState({});

    const saveOrderAndCheckout = event => {
        let data = {
            homestay_id: id,
            start_date: from,
            end_date: to,
            num_night: numNight,
            num_guess: numGuess,
            fee: fee,
            customer_name: csName,
            customer_email: csEmail,
            customer_phone: csPhone
        }
        let customer = {
            customer_name: csName,
            customer_email: csEmail,
            customer_phone: csPhone
        }
     
        homestayService.createOrder(data).then((response) => {
            if (response.data.status === false) {
                alert('Hệ thống lưu thất bại, chúng tôi sẽ khác phục sớm nhất')
            } else {
                let order = {
                    order_id: response.data.id,
                    hs_id: id,
                }
                localStorage.setItem('customer', JSON.stringify(customer));
                localStorage.setItem('order', JSON.stringify(order));
                history.push({
                    pathname: `${url}/paymethod`,
                    // search: '?query=abc',
                    state: {from: from, to: to, numGuess: numGuess, fee: fee, numNight: numNight, orderId: response.data.id}
                })
            }
            setValidateError(false);
        }).catch(error => {
            setValidateError(true);
            let errorData = error.response.data;
            setValidatorMes(errorData.data)
        })
    }

    const handleChangePhone = event => { setCsPhone(event.target.value) }
    const handleChangeEmail = event => { setCsEmail(event.target.value) }
    const handleChangeName = event => { setCsName(event.target.value) }

    useEffect(() => {
        homestayService.getHsImage(id).then((response) => {
            setImages(response.data)
        })
        homestayService.getHomestay(id).then((response) => {
            setHs(response.data)
        })
        let userData = JSON.parse(localStorage.getItem('user'));
        setUser(userData);
        if (userData != null) {
            setCsEmail(userData.email)
            // setCsPhone(userData.phone)
        }
    }, [])

    return (
        <>
            <div class="container mt-3 act_book_ticket_form">
                <div class="title">Thông tin đặt homestay</div>
                <div class="row mt-3">
                    <div class="col-md-8">
                    <div class="act_book_form_ticket">
                    <div class="contact">
                        <div class="tit">Thông tin đặt chỗ</div>
                        <div class="box wr">
                            <div class="sm-tit">Số khách: <span>{numGuess}</span></div>
                        </div>
                        <div class="wrap">
                            <div class="box">
                                <div class="sm-tit">Nhận phòng</div>
                                <input type="text" readOnly value={from} />
                            </div>
                            <div class="box">
                                <div class="sm-tit">Trả phòng</div>
                                <input type="text" readOnly value={to} />
                            </div>
                        </div>
                        <div class="box wr">
                            <div class="sm-tit">Trách nhiệm vật chất:</div>
                            <p>Khách hàng chịu mọi trách nhiệm thiệt hại về tài sản đã gây ra tại chỗ ở trong thời gian lưu trú.</p>
                        </div>
              
                    </div>
                   
                    <div class="contact mt-4">
                        <div class="tit">Thông tin liên hệ</div>
                        <div class={"box " + (isValidateError && validatorMes.customer_name ? 'wr' : '')}>
                            <div class="sm-tit">Tên người liên hệ</div>
                            <span class={"st " + (isValidateError && validatorMes.customer_name ? 'visible' : 'invisible')}>*{validatorMes.customer_name}</span>
                            <input type="text" placeholder="Nguyen Van A" onChange={handleChangeName} />
                            <span class="dt">*Nhập tên như trên CMND / Hộ chiếu</span>
                        </div>
                        <div class="wrap">
                            <div class={"box box_1 " + (isValidateError && validatorMes.customer_email ? 'wr' : '')}>
                                <div class="sm-tit">Email</div>
                                <span class={"st " + (isValidateError && validatorMes.customer_email ? 'visible' : 'invisible')}>*{validatorMes.customer_email}</span>
                                <input type="email" placeholder="exmaple@gmail.com" value={csEmail} onChange={handleChangeEmail} />
                                <span class="dt">Quý khách lưu ý nhận mã đặt phòng qua email</span>
                            </div>
                            <div class={"box box_2 " + (isValidateError && validatorMes.customer_phone ? 'wr' : '')}>
                                <div class="sm-tit">Số di động</div>
                                <span class={"st " + (isValidateError && validatorMes.customer_phone ? 'visible' : 'invisible')}>*{validatorMes.customer_phone}</span>
                                <input type="text" placeholder="0968686868" value={csPhone} onChange={handleChangePhone} />
                                <span class="dt">VD: 0968686868</span>
                            </div>
                        </div>

                    </div>
                   
                    <div class="detail">
                        <div class="tit">Chi tiết giá</div>
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
                            <span>{fee} VNĐ</span>
                        </div>
                    </div>
                   
                    <div class="final">
                        <span class="left">Khi nhấn vào nút này bạn công nhận mình đã đọc và đồng ý với các <span>Điều khoản sử dụng</span> và <span>Chính sách bảo mật</span> của Bynstay</span>
                        <a class="right" href="javascript:void(0)" onClick={saveOrderAndCheckout}>Thanh toán</a>
                        <Link id="bk_n" className='d-none' to={{ pathname: `${url}/order`, 
                state: {from: from, to: to, numGuess: numGuess, fee: fee, numNight: numNight} }}>Đặt Ngay</Link>
           
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
                                    <span><big>{fee} vnđ</big></span>
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
   
export default Order;