import React, {Component, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect, Link, NavLink, useRouteMatch, useParams, useHistory } from 'react-router-dom';
import {homestayService} from '../../services/homestay.service'
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/dark.css";

const PriceDetail = props => {
    let { path, url } = useRouteMatch();
    const history = useHistory();

    const [hsIdState, setHsIdState] = useState(props);
    const [price, setPrice] = useState([]);
    const [date, setDate] = useState('');
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    const [numPassenger, setNumPassenger] = useState(1);
    const [numNight, setNumNight] = useState(1);
    const [fee, setFee] = useState(0);
    const [orderedTime, setOrderedTime] = useState(0);
    const [isLoadedTime, setIsLoadedTime] = useState(false);

    const checkout = event => {
        if (date == "") {
            alert('Xin hãy chọn thời gian lưu trú!');
        } else {
            history.push({
                pathname: `${url}/order`,
                state: {from: fromDate, to: toDate, numGuess: numPassenger, fee: fee, numNight: numNight}
            })
        }
    }
    const handleDateRangeChange = (selectedDates, dateStr, instance) => {
        let dates = dateStr.split(" to ");
        let from = new Date(dates[0])
        let to = new Date(dates[1])
        let range = Math.abs(to - from);

        range = range / 86400000;
        if(range > price.max_night)
        {
            alert("Vượt quá số ngày lớn nhất: " + price.max_night + ' ngày');
            instance.clear()
        }
        setNumNight(range);
        setDate(dateStr)
        setFromDate(dates[0])
        setToDate(dates[1])
        setFee(homestayService.calHsFee(price, range, numPassenger))
    }

    const handleChangeNumPsg = event => {
        setNumPassenger(event.target.value);
        if (event.target.value <= 1) {
            setNumPassenger(1);
        }
        setFee(homestayService.calHsFee(price, numNight, event.target.value))
    }

    useEffect(() => {
        homestayService.getHsPrice(hsIdState[0]).then((response) => {
            setPrice(response.data)
        })
        homestayService.getHsOrderedTime(hsIdState[0]).then((response) => {
            setOrderedTime(response.data.range)
            setIsLoadedTime(true);
            console.log(response.data);
        })


    }, [])
    return (
        <div class="act_buy_ticket" id="booking_now">
        <div class="info">
            <div class="wrap-left">
                <h1 class="name d-block">Giá phòng</h1>
                
            
                <span class="d-block detail">Số khách tối đa: <big><b>{price.max_guest}</b></big></span>
                <div class="status">
                    <span>Phụ phí khách thêm: {price.price_expense} vnđ</span>
                </div>
                <span class="d-block detail">Số đêm tối đa: <big><b>{price.max_night}</b></big></span>
                <span class="d-block detail">Số đêm tối thiểu: <big><b>{price.min_night}</b></big></span>
            </div>
            <div class="wrap-right text-right">
                <div class="price">
                    <span class="old">Ngày đặc biệt: {price.price_special}</span>
                    <span class="new">Ngày thường: {price.price_normal} <small><sup>vnđ</sup></small></span>
                </div>
                {/* <a href="" class="book_now">Chọn</a> */}
            </div>
        </div>
        <div class="booking" >
            <div class="box" style={{flex: "0 0 30%"}}>
                <div class="tit">Ngày đến - Ngày đi</div>
                <div class="input-date ipt del">
                    <i class="material-icons">calendar_today</i>
                    {isLoadedTime
                        ?  <Flatpickr
                        data-enable-time
                        value={date}
                        options={{ mode: "range", dateFormat: "Y-m-d", enableTime: false,
                                minDate: "today",
                                // disable: [{
                                //     from: "2021-05-17",
                                //     to: "2021-05-21"
                                // }]
                                disable: orderedTime
                            }}
                        onChange={(selectedDates, dateStr, instance) => handleDateRangeChange(selectedDates, dateStr, instance)}
                        />
                        : ''
                    }
                   
                    <i class="material-icons ic_2">expand_more</i>
                </div>
     
              
            </div>
            <div class="box" style={{flex: "0 0 20%"}}>
                <div class="tit"> Số khách </div>
                <div class="input-people ipt">
                    <i class="material-icons ic_1">people</i>
                    <input type="number" onChange={handleChangeNumPsg} value={numPassenger}/>
                </div>
            </div>

            <div class="box">
                <div class="tit"> *Chi phí </div>
                <div class="input-people ipt">
                    <i class="material-icons ic_1">money</i>
                    <input className="hs_fee" type="text" readOnly value={fee + ' VNĐ'} />
                </div>
            </div>
        
            <div class="box wrap-btn">
                <a href="javascript:void(0)" id="bk_n" onClick={checkout}>Đặt ngay</a>
    
            </div>
        </div>
   
    </div>
    );
  };
   
export default PriceDetail;