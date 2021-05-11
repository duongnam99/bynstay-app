import React, {Component, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect, NavLink, useRouteMatch, useParams, useHistory, Link } from 'react-router-dom';
import {homestayService} from '../../services/homestay.service'

const ItemBooking2 = props => {
    const [hs, setHsState] = useState(props);
    const [images, setImages] = useState([]);
    const [price, setPrice] = useState([]);
    useEffect(() => {
        homestayService.getHsImage(hs.id).then((response) => {
            setImages(response.data)
        })
        homestayService.getHsPrice(hs.id).then((response) => {
            setPrice(response.data)
        })
    }, [])
    return (
        <div class="item_booking_2">
            <Link className="wrap-img" target="_blank" id="bk_n" to={{ pathname: `/home-detail/${hs.id}`}}>
                <img src={images.url != null ? images.url : "/assets/images/Bitmap1.png"} alt="" />
                <div class="flag" href=""><span>Đặt phòng ngay</span></div>
            </Link>
            <div class="info">
                <a href="" class="name">{hs.name}</a>
                <span class="locate">{hs.location}</span>
                <div class="review"></div>
                <div class={'price' + (price.price_normal != null ? '' : ' d-none')}>Gía từ <span>{price.price_normal} VNĐ</span> </div>
            </div>
        </div>
    );
  };
   
export default ItemBooking2;