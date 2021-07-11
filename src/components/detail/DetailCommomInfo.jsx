import React, {Component, useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {homestayService} from '../../services/homestay.service'
import {userService} from '../../services/user.service'
import StarRatings from 'react-star-ratings';

const DetailCommomInfo = props => {
    const [hsIdState, setHsIdState] = useState(props);
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const [images, setImages] = useState([]);
    const [hs, setHs] = useState([]);
    const [hsType, setHsType] = useState([]);
    const [utility, setUtility] = useState([]);
    const [price, setPrice] = useState([]);
    const [isWished, setIsWished] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [rating, setRating] = useState(3);
    const [countNumVote, setCountNumVote] = useState(3);
    
    const changeWish = () => {
        if (isWished) {
            userService.deleteWish(hsIdState['id']).then((response) => {
                setIsWished(false)
            })
        } else {
            userService.addToWish(hsIdState['id']).then((response) => {
                setIsWished(true)
            })
        }

    }

    const changeRating = (newRating, name) => {
        setRating(newRating)
        userService.rate(hsIdState['id'], newRating).then((response) => {
            if (response.data.result) {
                alert("Vote thành công!");
            }
        })
    }

    useEffect(() => {
        let userInfo = JSON.parse(localStorage.getItem('user'));
        if (userInfo != null) {
            setIsLoggedIn(true)
            userService.checkWished(hsIdState['id']).then((response) => {
                setIsWished(response.data.status)
            })
        }

        homestayService.getHsImage(hsIdState['id']).then((response) => {
            setImages(response.data)
        })
        homestayService.getHomestay(hsIdState['id']).then((response) => {
            setHs(response.data)
            if (userInfo != null) {
                let listVote = JSON.parse(response.data.voting);
                setRating(listVote[userInfo.id]);
            }
            setCountNumVote(response.data.count_num_vote)
        })
        homestayService.getHomestayType(hsIdState['id']).then((response) => {
            setHsType(response.data)
        })
    
        homestayService.getHsUtil(hsIdState['id']).then((response) => {
            setUtility(response.data)
        })
        homestayService.getHsPrice(hsIdState['id']).then((response) => {
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
                    {
                        isLoggedIn ? 
                        <div class="add_favorite" onClick={changeWish}>
                            {/* <span class="num">4.9</span>
                            <i class="material-icons">star</i>
                            <span class="count">(1423 đánh giá)</span> */}
                            <i class={"material-icons " + (isWished ? "active" : '')}>favorite</i>
                            <span class="count"> {isWished ? 'Yêu thích' : 'Thêm vào yêu thích'}</span>
                        </div>
                        :
                        ''
                    }
                    <div class="review">
                        <span class="num">{hs.average_star}</span>
                        <i class="material-icons">star</i>
                        <span class="count">({countNumVote} đánh giá)</span>
                    </div>
                    {
                        isLoggedIn ? 
                        <div className="vote">
                            Đánh giá của bạn: 
                            <StarRatings
                                rating={rating}
                                starRatedColor="rgb(255, 201, 56)"
                                changeRating={changeRating}
                                starDimension='25px'
                                starSpacing='0'
                                numberOfStars={5}
                                name='rating'
                            />
                        </div>
                        : ''
                    }
                   
                    
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
            </div>
        </div>
       
        </div>
        <div class="act_map_detail">
            <div class="tit">Bản đồ</div>
            <div class="locate">{hs.location}</div>
            <div class="mapouter_wrap" dangerouslySetInnerHTML={{__html: hs.google_map}} />
            <p className="mt-3">Bạn sẽ nhận được địa chỉ chính xác của chỗ ở sau khi hoàn tất đơn đặt phòng.</p>
       
        </div>

        <div class="act_des">
          <div class="tit">Mô tả</div>
            <div class="des">
                {hs.des}
            </div>
        </div>
        </>
    );
  };
   
export default DetailCommomInfo;