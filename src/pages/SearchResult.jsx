import React, {Component, useState, useEffect, useCallback } from 'react';
import { Router, Route, Switch, Redirect, NavLink, useRouteMatch } from 'react-router-dom';

import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import Banner from '../components/banners/Banner'

import ItemsBookingResult from '../components/items/ItemsBookingResult'
import Pagination from '../components/common/Pagination'
import NotFoundBookingResult from '../components/common/NotFoundBookingResult'

import MainSearch from '../components/search/MainSearch'
import "flatpickr/dist/themes/dark.css";
import {homestayService} from '../services/homestay.service'

const SearchResult = props => {

    const {placename, selectedPlace, selectedPlaceType, query, from, to, numGuess, numNight} = props.location.state

    const [parentUtil, setParentUtil] = useState([]);
    const [hsTypes, setHsTypes] = useState([]);
    const [resultHs, setResultHs] = useState([]);
    const [originResultIds, setOriginResultHsIds] = useState([]);
    const [hsIds, setHsIds] = useState([]);
    const [sortType, setSortType] = useState("0");
    const [hsType, setHsType] = useState("0");
    const [utilsFilter, setUtilsFilter] = useState([]);
    const [placeId, setPlaceId] = useState(selectedPlace);
    const [totalHs, setTotalHs] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [startRs, setStartRs] = useState(0);
    const [endRs, setEndRs] = useState(5);

    const handleChangeSortType = event => {
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
     
    }

    const processFilter = event => {
        setResultHs([]);
        homestayService.filterUtil(originResultIds, hsType, sortType, utilsFilter).then((response) => {
            if (response.data.status === false) {
                setResultHs([])
            } else {
                setResultHs(response.data.hs)
                setHsIds(response.data.ids)
            }
        })
    }

    const handleChangeHsType = event => {
        setHsType(event.target.value);
    }

    const searchProps = {
        placename: placename,
        selectedPlace: selectedPlace,
        selectedPlaceType: selectedPlaceType,
        query: query,
        from: from, 
        to: to, 
        numGuess: numGuess, 
        numNight: numNight
    }

    const loadResult = async () => {
        homestayService.getHsByPlace(selectedPlace, selectedPlaceType, startRs, endRs).then((response) => {
            if (response.data.status === false) {
                setResultHs([])
            } else {
                setResultHs(response.data.hs)
                setTotalHs(response.data.total)
                setOriginResultHsIds(response.data.ids)
                setHsIds(response.data.ids)
            }
        })
    }

    useEffect(() => {
        if (placeId !== props.location.state.selectedPlace){
            setPlaceId(props.location.state.selectedPlace);
        }
    })

    const handleChangePage = i => {
        setCurrentPage(i)
        setStartRs(i*5)
        setEndRs(i*5 + 5)
        setResultHs([]);
        homestayService.getHsByPlace(selectedPlace, selectedPlaceType, i*5, i*5 + 5).then((response) => {
            setResultHs(response.data.hs)
            setTotalHs(response.data.total)
            setOriginResultHsIds(response.data.ids)
            setHsIds(response.data.ids)
        })
    }

    useEffect(() => {
        homestayService.getParentUtility().then((response) => {
            setParentUtil(response.data)
        })

        homestayService.getHsType().then((response) => {
            setHsTypes(response.data)
        })

    }, [])

    // useEffect(() => {
        // setResultHs([]);
    // }, [sortType, hsType, utilsFilter])

    useEffect(() => {
        setResultHs([]);
        loadResult();
    }, [placeId])

    return (
        <>
            <Header />
            <Banner />
            <MainSearch {...searchProps}/>

            <div class="container mt-5">
                {/* <TitleBookingResult /> */}
                <div class="title_booking_result mb-3">
                    <div class="wrap">
                        <div class="title">Có {totalHs} điểm lưu trú ở {placename}</div>
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
                                    <button class="btn_filter" onClick={processFilter}><i class="material-icons">filter_list</i>Áp dụng</button>
                                     
                                    </div>
                                </div>
                            </div>
                        </div>
   
                    </div>
                    <div class="col-md-9">
                                            
                        {resultHs.map((item, i) =>
                            <ItemsBookingResult {...item}/>
                        )}

                        {/* <Pagination /> */}
                        {Object.keys(resultHs).length == 0 
                        ? 
                        <NotFoundBookingResult /> 
                        : 
                        ''
                        }

                        <div class="pagination_cus mt-5">
                            <a href="javascript:void(0)" class="prev" onClick={() => handleChangePage(currentPage-1)}><span>Trước</span></a>
                     
                            {[...Array(Math.ceil(totalHs/5)).keys()].map((item, i) =>
                                <a href="javascript:void(0)" className={ i == currentPage ? "active" : ''} start={i*5} onClick={() => handleChangePage(i)}><span>{i + 1}</span></a>
                            )}
                            <a href="javascript:void(0)" class="next" onClick={() => handleChangePage(currentPage+1)}><span>Sau</span></a>

                        </div>
                        

                    </div>
                </div>

            </div>
     
            <Footer />
        </>
    );
  };
   
export default SearchResult;