import React, {Component, useState, useEffect } from 'react';
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/dark.css";
import {homestayService} from '../../services/homestay.service'
import { Router, Route, Switch, Redirect, NavLink, useRouteMatch, useParams, useHistory, Link } from 'react-router-dom';


const MainSearch = props => {

    const [preSearch, setPreSearch] = useState(props);
    const history = useHistory();
    let { path, url } = useRouteMatch();
    const [price, setPrice] = useState([]);
    const [date, setDate] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [numPassenger, setNumPassenger] = useState(1);
    const [numNight, setNumNight] = useState(0);
    const [query, setQuery] = useState('');
    const [placeSearchRs, setPlaceSearchRs] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState();
    const [selectedPlaceType, setSelectedPlaceType] = useState();
    const [placename, setPlaceName] = useState('');
    const [showSuggest, setShowSuggest] = useState(false);
    const [validatorPlaceNameError, setValidatorPlaceNameError] = useState(false);

    const search = event => {
        if (placename == undefined) {
            setValidatorPlaceNameError(true);
            return;
        } else if(placename.length == 0) {
            setValidatorPlaceNameError(true);
            return;
        }
        if (selectedPlaceType != 'homestay') {
            history.push({
                pathname: `/result`,
                search: '?id='+selectedPlace + '&type=' + selectedPlaceType,
                state: {placename: placename, selectedPlace: selectedPlace, selectedPlaceType: selectedPlaceType, query: query, from: fromDate, to: toDate, numGuess: numPassenger, numNight: numNight}
            })
        } else {
            history.push({
                pathname: `/home-detail/${selectedPlace}`,
            })
        }
    }

    const handleChangeNumGuess = event => {
        setNumPassenger(event.target.value)
    }

    const handleChangeQuery = event => {
        setQuery(event.target.value)
        setPlaceName(event.target.value);
        homestayService.searchPlace(event.target.value).then((response) => {
            setPlaceSearchRs(response.data)
            setShowSuggest(true)
        })
    }

    const selectPlace = event => {
        setSelectedPlace(event.target.getAttribute('value'));
        setSelectedPlaceType(event.target.getAttribute('type'));
        setPlaceName(event.target.textContent);
        setShowSuggest(false)
    }

    const handleDateRangeChange = (selectedDates, dateStr, instance) => {
        let dates = dateStr.split(" to ");
        let from = new Date(dates[0])
        let to = new Date(dates[1])
        let range = Math.abs(to - from);

        setNumNight(range/86400000 + 1);
        setDate(dateStr)
        setFromDate(dates[0])
        setToDate(dates[1])
    }

    useEffect(() => {
        setNumPassenger(preSearch.numGuess);
        setPlaceName(preSearch.placename);
        homestayService.searchPlace(query).then((response) => {
            setPlaceSearchRs(response.data)
        })
    }, [])

    return (
        <div class="search_home container">
            <div class="tab_control">
                <ul class="list-tab">
                    <li class="control_item active" data-tab="#tab-search-1">
                        <a href="javascript:;">
                            <i class="material-icons location_city">location_city</i>
                            Homestay - Địa điểm
                        </a>
                    </li>
                    {/* <li class="control_item" data-tab="#tab-search-2">
                        <a href="javascript:;">
                            <i class="material-icons flight">flight</i>
                            Địa điểm
                        </a>
                    </li> */}
                </ul>
            </div>
            <div class="tab_main">
                <div class="tab_item tab-hotel d-block" id="tab-search-1">
                    <div action="">
                        <div class="d-flex flex-wrap align-items-start">
                            <div class="input-address">
                                <div class="position-relative">
                                    <span class={"notication" + (validatorPlaceNameError ? '' : ' d-none')}>
                                        Vui lòng điền đầy đủ thông tin
                                    </span>
                                    <span class="position-absolute ic_map"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                                    <input value={placename} onChange={handleChangeQuery} type="text" class="input-name-address" placeholder="Bạn muốn đi đâu?" />
                                    <input type="hidden" name="item_id" />
                                </div>
                                <ul class={"list-return" + (showSuggest ? '' : ' d-none')}>
                                    {placeSearchRs.map((item, i) =>
                                          <li class="item-return">
                                            <a href="javascript:;" value={item.id} type={item.s_type} onClick={selectPlace}>
                                                {item.name}
                                            </a>
                                            {item.s_type == 'homestay' ? 
                                            <i class="material-icons">home</i>
                                            :
                                            <i class="material-icons">place</i>
                                            }
                                        </li>
                                    )}
                                
                                </ul>
                                {/* <a href="#" class="his_search d-block">
                                    <i class="material-icons">history</i>
                                    Lịch sử tìm kiếm
                                </a> */}
                            </div>
                            <div class="input-date">
                                <div class="position-relative">
                                    <span class="ic_note"><i class="material-icons">event_note</i></span>
                                    {/* <input type="text" class="js-rangeDate" placeholder="Ngày đi - Ngày về" data-input /> */}
                                    <Flatpickr
                                    data-enable-time
                                    value=''
                                    placeholder='Ngày đi - ngày về'
                                    options={{ mode: "range", dateFormat: "Y-m-d", enableTime: false,
                                            minDate: "today",
                                        }}
                                    onChange={(selectedDates, dateStr, instance) => handleDateRangeChange(selectedDates, dateStr, instance)}
                                    />
                                </div>
                                <span class="return_date">{numNight} ngày</span>
                                
                            </div>
                            <div class="input-count">
                                <span class="ic_person"><i class="material-icons">person_pin</i></span>
                                {/* <a href="javascript:;" class="js-show-change">Số người - Số phòng</a>
                                <div class="select_count">
                                    <div class="select-item">
                                        <a href="javascript:;">
                                            -
                                        </a>
                                        <div class="content">
                                            <input type="text" value="1" class="so-nguoi" />
                                            <span>Người</span>
                                        </div>
                                        <a href="javascript:;">
                                            +
                                        </a>
                                    </div>
                                    <div class="select-item">
                                        <a href="javascript:;">
                                            -
                                        </a>
                                        <div class="content">
                                            <input type="text" value="1" class="so-phong" />
                                            <span>Phòng</span>
                                        </div>
                                        <a href="javascript:;">
                                            +
                                        </a>
                                    </div>
                        
                                </div> */}

                                <input type="number" value={numPassenger} onChange={handleChangeNumGuess} placeholder="Số người" name="so-nguoi" />
                            </div>
                            <div class="search_submit">
                                <button onClick={search} class="btn_search_action">
                                    <i class="material-icons">search</i>
                                    Tìm kiếm
                                </button>
                                {/* <div class="check_mission">
                                    <input type="checkbox" name="mission" />
                                    <span>Tôi đi công tác</span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        
        </div>
   
   );
  };
   
export default MainSearch;