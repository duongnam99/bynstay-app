import React, {Component, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect, NavLink, useRouteMatch, useParams, useHistory, Link } from 'react-router-dom';
import {homestayService} from '../../services/homestay.service'

const ItemsBookingResult = props => {
    
    const [hs, setHsState] = useState(props);
    const [images, setImages] = useState([]);
    const [hsType, setHsType] = useState([]);
    const [price, setPrice] = useState([]);
    const [showDetail, setShowDetail] = useState(false);
    
    const toggleShowDetail = event => {
        setShowDetail(!showDetail);
    }

    useEffect(() => {
        homestayService.getHsImage(hs.id).then((response) => {
            setImages(response.data)
        })

        homestayService.getHomestayType(hs.id).then((response) => {
            setHsType(response.data)
        })
    
        homestayService.getHsPrice(hs.id).then((response) => {
            setPrice(response.data)
        })
    }, [])
    return (
        <div class="item_booking_result">
        <div class="block-main">
            <Link className="wrap" target="_blank" to={{ pathname: `home-detail/${hs.id}`}}>
                <div class="wrap-img">
                    <img src={images.length > 0 ? images[0].url : "./assets/images/rsz_temp_bk_result.png"} alt="" />
                </div>
            </Link>
            <div class="info">
                <Link className="name" target="_blank" to={{ pathname: `home-detail/${hs.id}`}}>{hs.name}</Link>
                <span class="tag">{hsType.name}</span>
                <div class="stars">
                    
                    {/* <span>(1323 đánh giá)</span> */}
                </div>
                <div class="locate">{hs.location}</div>
            </div>
            <div class="box">
                <div class="wrap-top">
                    <div class="disc"><i class="material-icons md-dark">new_releases</i> <span class="d-inline-block"> Địa điểm được tuyển chọn !</span> </div>
                    <div>Thanh toán online</div>
                </div>
                <div class="price">
                
                    {/* <div class="old">1,099,445 VNĐ</div> */}
                    <div class="new">{price.price_normal} VNĐ</div>
                    <span onClick={toggleShowDetail} class="tgl"> <span>Chi tiết chi phí </span> <i class="material-icons"> expand_less </i></span>
                </div>
            </div>
        </div>
        <div class={"more" + (showDetail ? '' : ' d-none')}>
            <div class="block-a">
                <div class="line">
                    <span>Ngày đặc biệt</span>
                    <span>{price.price_special} VNĐ</span>
                </div>
                <div class="line">
                    <span>Ngày bình thường</span>
                    <span>{price.price_normal} VNĐ</span>
                </div>
         
            </div>
            <div class="block-b">
                <div class="line">
                    <span>Số khách tối đa</span>
                    <span>{price.max_guest} khách</span>
                </div>
                <div class="line">
                    <span>Số đêm tối đa</span>
                    <span>{price.max_night} đêm</span>
                </div>
                <div class="line">
                    <span>Số đêm tối thiểu</span>
                    <span>{price.min_night} đêm</span>
                </div>
            </div>
        </div>
    </div>
    );
  };
   
export default ItemsBookingResult;