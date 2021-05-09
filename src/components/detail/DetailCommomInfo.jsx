import React, {Component, useState, useEffect, useRef } from 'react';
import Axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {homestayService} from '../../services/homestay.service'


const DetailCommomInfo = props => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const [hsIdState, setHsIdState] = useState(props);
    const [images, setImages] = useState([]);
    const [hs, setHs] = useState([]);
    const [hsType, setHsType] = useState([]);
    const [utility, setUtility] = useState([]);
    const [price, setPrice] = useState([]);

    useEffect(() => {
        homestayService.getHsImage(hsIdState[0]).then((response) => {
            setImages(response.data)
        })
        homestayService.getHomestay(hsIdState[0]).then((response) => {
            setHs(response.data)
        })
        homestayService.getHomestayType(hsIdState[0]).then((response) => {
            setHsType(response.data)
        })
    
        homestayService.getHsUtil(hsIdState[0]).then((response) => {
            setUtility(response.data)
        })
        homestayService.getHsPrice(hsIdState[0]).then((response) => {
            setPrice(response.data)
        })
    }, [])

    return (
        <>
        <div class="act_search_detail_demo">
            <section class="services-slider">
                <div class="main-container">
                <Slider asNavFor={nav2} ref={c => setNav1(c)}>
                {images.map((item,i) =>  
                    <div class="wrap-img">
                        <img src={item.url} />
                    </div> 
                    )}
        
                </Slider>
                <Slider
                    asNavFor={nav1}
                    ref={c => setNav2(c)}
                    slidesToShow={5}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    arrows={false}
                >
                    {images.map((item,i) =>  
                        <div class="wrap-img">
                            <img src={item.url} />
                        </div> 
                        )}
                </Slider>
                
                </div>
                
            </section>
            <div class="info">
                <div class="wrap-left">
                    <h1 class="name d-block">{hs.name}</h1>
                    <div class="tags">
                        <span>{hsType.name}</span>
                    </div>
                    <div class="review">
                        <span class="num">4.9</span>
                        <i class="material-icons">star</i>
                        <span class="count">(1423 đánh giá)</span>
                    </div>
                    <span class="locate d-block">{hs.location}</span>
                </div>
                <div class="wrap-right text-right">
                    <span class="d-block name">Giá từ</span>
                    <div class="price">
                        <span class="old">{price.price_special}</span>
                        <span class="new">{price.price_normal} <small><sup>VNĐ</sup></small></span>
                    </div>
                    <a href="#booking_now" class="book_now">Đặt Ngay</a>
                </div>
            </div>
            <div class="utility">
            <div class="tit">Tiện nghi</div>
            <div class="list">

            {Object.keys(utility).map((i,ind) => <div className="u_pr mt-3">
                <h5 className="util_line">{i}</h5>
                {utility[i].map((item, i) => <div><span>{item.name}</span></div> )}
            </div> )}

                {/* {utility.map((item,i) => <div><span>{item.name}</span></div> )} */}
            </div>
        </div>
       
        </div>
        <div class="act_map_detail">
            <div class="tit">Bản đồ</div>
            <div class="locate">{hs.location}</div>
            <div class="mapouter_wrap" dangerouslySetInnerHTML={{__html: hs.google_map}} />
            <p className="mt-3">Bạn sẽ nhận được địa chỉ chính xác của chỗ ở sau khi hoàn tất đơn đặt phòng.</p>
       
        </div>
        </>
    );
  };
   
export default DetailCommomInfo;