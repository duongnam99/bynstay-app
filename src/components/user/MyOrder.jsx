import React, {Component, useState, useEffect } from 'react';
import {useDropzone} from 'react-dropzone'
import { NavLink, useRouteMatch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import {userService} from '../../services/user.service'

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const orderState = {
    fontSize: '14px',
    color: '#bf2d69'
}

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

const MyOrder = () => {
    const [homestays, setHomestays] = useState([]);
    const [user, setUser] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {

        let userInfo = JSON.parse(localStorage.getItem('user'));
        setUser(userInfo);
        if (userInfo != null) {
            setName(userInfo['name']);
            setEmail(userInfo['email']);
        }

        userService.getOrder(userInfo['email']).then((response) => {
            setHomestays(response.data.reverse())
        }).catch(error => {
   
        
        })

    }, [])
    return (
        <div className="my_order">
            {homestays.map((item, i) =>
                <div class="item_booking_result">
                <div class="block-main">
                    <a class="wrap" target="_blank" href="home-detail/25">
                        <div class="wrap-img"><img src={ process.env.REACT_APP_BASE_API_URL + 'uploads/' + (item.homestay.images.length > 0 ? item.homestay.images[0].image : '')} alt="" />
        
                        </div>
                    </a>
                    <div class="info">
                        <NavLink to={`/home-detail/` + item.homestay.id} class="name" >{item.homestay.name}</NavLink>
                        <span class="tag"></span>
                        <div class="stars"></div>
                        <div class="locate">{item.homestay.location}</div>
                    </div>
                    <div class="box">
                        <div class="block-a w-100" style={orderState}>
                            <div class="line"><span>Trạng thái thanh toán</span><span>
                                {item.payment_status ? 
                                    <span class="badge badge-pill badge-success">Đã thanh toán</span>
                                    :
                                    <span class="badge badge-pill badge-secondary">Chưa thanh toán</span>
                                } 
                                </span></div>
                            <div class="line"><span>Trạng thái đặt chỗ</span><span> 
                                {item.order_status == 0 ? 
                                    <span class="badge badge-pill badge-info">Mở</span>
                                    :
                                    <span class="badge badge-pill badge-secondary">Đóng</span>
                                }
                                
                                </span></div>
                    
                        </div>
                        <div class="block-b w-100">
                            <div class="line"><span>Số đêm</span><span> <b>{item.num_night} đêm</b></span></div>
                            <div class="line"><span>Số người</span><span><b>{item.num_guess} khách</b></span></div>
                            <div class="line"><span>Chi phí</span><span><b>{item.fee} VNĐ</b></span></div>
                            <div class="line"><span>Mã đặt phòng</span><span> {item.success_code ? item.success_code : '...'}</span></div>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
};

export default MyOrder;