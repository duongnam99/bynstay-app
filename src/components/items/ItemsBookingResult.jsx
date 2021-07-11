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
        // homestayService.getHsImage(hs.id).then((response) => {
        //     setImages(response.data)
        // })

        // homestayService.getHomestayType(hs.id).then((response) => {
        //     setHsType(response.data)
        // })
    
        // homestayService.getHsPrice(hs.id).then((response) => {
        //     setPrice(response.data)
        // })
    }, [])
    return (
        <div class="item_booking_result">
        <div class="block-main">
            <Link className="wrap" target="_blank" to={{ pathname: `home-detail/${hs.id}`}}>
                <div class="wrap-img">
                    <img src={hs.images.length > 0 ? process.env.REACT_APP_BASE_API_URL + 'uploads/' + hs.images[0].image : "./assets/images/rsz_temp_bk_result.png"} alt="" />
                </div>
            </Link>
            <div class="info">
                <Link className="name" target="_blank" to={{ pathname: `home-detail/${hs.id}`}}>{hs.name}</Link>
                <span class="tag">{hs.type != null ? hs.type.name : ''}</span>
                <div class="stars">
                    {/* <span>(1323 đánh giá)</span> */}
                </div>
                <div class="locate mt-0">{hs.location}</div>
                <div>
                    {hs.utilities.slice(0, 4).map((item, i) => 
                        <span class="tag tag-util mr-2">{item.name}</span>
                    )}
                </div>
            </div>
            <div class="box">
                <div class="wrap-top">
                    <div class="disc"><i class="material-icons md-dark">new_releases</i> <span class="d-inline-block"> Địa điểm được tuyển chọn !</span> </div>
                    <div>Thanh toán online</div>
                </div>
                <div class="price">
                
                    {/* <div class="old">1,099,445 VNĐ</div> */}
                    <div class="new">{hs.prices != null ? hs.prices.price_normal.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : ''} VNĐ</div>
                    <span onClick={toggleShowDetail} class="tgl"> <span>Chi tiết chi phí </span> <i class="material-icons"> expand_less </i></span>
                </div>
            </div>
        </div>
        <div class={"more" + (showDetail ? '' : ' d-none')}>
            <div class="block-a">
                <div class="line">
                    <span>Ngày đặc biệt</span>
                    <span>{hs.prices ? hs.prices.price_special.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : ''} VNĐ</span>
                </div>
                <div class="line">
                    <span>Ngày bình thường</span>
                    <span>{hs.prices ? hs.prices.price_normal.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : ''} VNĐ</span>
                </div>
         
            </div>
            <div class="block-b">
                <div class="line">
                    <span>Số khách tối đa</span>
                    <span>{hs.prices ? hs.prices.max_guest : ''} khách</span>
                </div>
                <div class="line">
                    <span>Số đêm tối đa</span>
                    <span>{hs.prices ? hs.prices.max_night : ''} đêm</span>
                </div>
                <div class="line">
                    <span>Số đêm tối thiểu</span>
                    <span>{hs.prices ? hs.prices.min_night : ''} đêm</span>
                </div>
            </div>
        </div>
    </div>
    );
  };
   
export default ItemsBookingResult;