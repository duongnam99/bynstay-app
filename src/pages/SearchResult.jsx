import React, {Component, useState, useEffect } from 'react';
import Axios from "axios";
import { stringify } from "querystring";

import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import Banner from '../components/banners/Banner'
import FilterBookingResult from '../components/filters/FilterBookingResult'
import TitleBookingResult from '../components/titles/TitleBookingResult'
import SearchBookingResult from '../components/search/SearchBookingResult'
import ItemsBookingResult from '../components/items/ItemsBookingResult'
import Pagination from '../components/common/Pagination'
import NotFoundBookingResult from '../components/common/NotFoundBookingResult'

import MainSearch from '../components/search/MainSearch'
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/dark.css";
import {homestayService} from '../services/homestay.service'
import { Router, Route, Switch, Redirect, NavLink, useRouteMatch, useParams, useHistory, Link } from 'react-router-dom';

const SearchResult = props => {

    const {placename, selectedPlace, query, from, to, numGuess, numNight} = props.location.state

    const history = useHistory();
    let { path, url } = useRouteMatch();
    const [price, setPrice] = useState([]);
    const [date, setDate] = useState('');
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    const [numPassenger, setNumPassenger] = useState(1);
    const [newNumNight, setNewNumNight] = useState(1);
    const [parentUtil, setParentUtil] = useState([]);
    const [hsTypes, setHsTypes] = useState([]);
    const [resultHs, setResultHs] = useState([]);
    const [hsIds, setHsIds] = useState([]);
    const [originIdsHs, setOriginIdsHs] = useState([]);
    const [sortType, setSortType] = useState(1);
    const [hsType, setHsType] = useState(1);
    const [utilsFilter, setUtilsFilter] = useState([]);

    // const handleChangeNumGuess = event => {
    //     setNumPassenger(event.target.value)
    // }

    const handleChangeSortType = event => {
        homestayService.sortHsPrice(hsIds, event.target.value).then((response) => {
            if (response.data.status === false) {
                setResultHs([])
            } else {
                setResultHs(response.data.hs)
                // setHsIds(response.data.ids)
            }
        })
        setSortType(event.target.value);
     
    }

    const handleChangefilterUtil = event => {
        if (event.target.checked) {
            utilsFilter.push(event.target.value);
            setUtilsFilter(utilsFilter)
        } else {
            const index = utilsFilter.indexOf(event.target.value);
            if (index > -1) {
                utilsFilter.splice(index, 1);
            }
        }
        console.log(utilsFilter)
        homestayService.filterUtil(hsIds, utilsFilter).then((response) => {
            console.log('asdf');
            if (response.data.status === false) {
                setResultHs([])
            } else {
                setResultHs(response.data.hs)
                setHsIds(response.data.ids)
            }
        })
        setSortType(event.target.value);
     
    }

    const handleChangeHsType = event => {
        homestayService.filterHsType(hsIds, event.target.value).then((response) => {
            if (response.data.status === false) {
                setResultHs([])
            } else {
                setResultHs(response.data.hs)
                // setHsIds(response.data.ids)
                // setOriginIdsHs(response.data.ids)
            }
        })
        setHsType(event.target.value);
    }

    // const handleDateRangeChange = (selectedDates, dateStr, instance) => {
    //     let dates = dateStr.split(" to ");
    //     let from = new Date(dates[0])
    //     let to = new Date(dates[1])
    //     let range = Math.abs(to - from);

    //     setNewNumNight(range/86400000 + 1);
    //     setDate(dateStr)
    //     setFromDate(dates[0])
    //     setToDate(dates[1])
    // }

    // const search = event => {
    //     history.push({
    //         pathname: `/result`,
    //         state: {from: fromDate, to: toDate, numGuess: numPassenger, numNight: numNight}
    //     })
    // }
    const searchProps = {
        placename: placename,
        selectedPlace: selectedPlace,
        query: query,
        from: from, 
        to: to, 
        numGuess: numGuess, 
        numNight: numNight
    }

    useEffect(() => {
        homestayService.getParentUtility().then((response) => {
            setParentUtil(response.data)
        })

        homestayService.getHsType().then((response) => {
            setHsTypes(response.data)
        })

        homestayService.getHsByPlace(selectedPlace).then((response) => {
            if (response.data.status === false) {
                setResultHs([])
            } else {
                console.log(response.data)
                setResultHs(response.data.hs)
                setHsIds(response.data.ids)
            }
        })
    }, [selectedPlace])

    return (
        <>
            <Header />
            <Banner />
            <MainSearch {...searchProps}/>

            <div class="container mt-5">
                {/* <TitleBookingResult /> */}
                <div class="title_booking_result mb-3">
                    <div class="wrap">
                        <div class="title">Có {resultHs.length} điểm lưu trú ở {placename}</div>
                        {/* <a href=""><span>Thay đổi tìm kiếm</span></a> */}
                    </div>
                    <div class="date">Ngày {from} - {to}</div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        {/* <FilterBookingResult /> */}
                        <div class="filter_booking_result">
                            <div class="sort">
                                <div class="tit">Sắp xếp</div>
                                <div class="sub-tit">Sắp xếp các kết quả</div>
                                <div class="options">
                                    <div class="custom-cb">
                                        <input type="radio" name="sort" value="1" onChange={handleChangeSortType} />
                                        <div class="state"><label>Giá cao nhất</label></div>
                                    </div>
                                    <div class="custom-cb">
                                        <input type="radio" name="sort" value="2" onChange={handleChangeSortType} />
                                        <div class="state"><label>Giá thấp nhất</label></div>
                                    </div>
                                </div>
                            </div>
                            <div class="filter">
                                <div class="tit"> <span>Bộ lọc</span> <a href="">Bỏ lọc</a></div>
                                <div class="sub-tit">Lọc kết quả theo các tiêu chí</div>

                                <div class="box-slider">
                                </div>
                                <div class="box-quality box-square">
                                    {/* <div class="box-title">
                                        Chất lượng homestay
                                    </div>
                                    <div class="options_2">
                                        <label class="cont"> 5 sao
                                            <input type="checkbox" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="cont"> 4 sao
                                            <input type="checkbox" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="cont"> 3 sao
                                            <input type="checkbox" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="cont"> 2 sao
                                            <input type="checkbox" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="cont"> 1 sao
                                            <input type="checkbox" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                */}
                                </div>
                                <div class="box-square">
                                    <div class="box-title">
                                        Tiện nghi
                                    </div>
                                    <div class="options_2">
                                    {parentUtil.map((item, i) =>
                                        <label class="cont"> {item.name}
                                            <input value={item.id} onChange={handleChangefilterUtil} name="filter_util" type="checkbox" />
                                            <span class="checkmark"></span>
                                        </label>
                                    )}
                                    
                                    </div>
                                </div>
                                <div class="box-square place-level">
                                    <div class="box-title">Loại hình nơi lưu trú</div>
                                    <div class="options">
                                        {hsTypes.map((item, i) =>
                                        <div class="custom-cb">
                                            <input value={item.id} onChange={handleChangeHsType} name="hs_type" type="radio" />
                                            <div class="state"><label>{item.name}</label></div>
                                        </div>
                                        )}
                                     
                                    </div>
                                </div>
                            </div>
                        </div>
   
                    </div>
                    <div class="col-md-9">
                                            
                        {/* <SearchBookingResult /> */}
                        {resultHs.map((item, i) =>
                            <ItemsBookingResult {...item}/>
                        )}

                        {/* <Pagination /> */}
                        {Object.keys(resultHs).length == 0 ? <NotFoundBookingResult /> : ''}
                        
                    </div>
                </div>

            </div>
     
            <Footer />
        </>
    );
  };
   
export default SearchResult;