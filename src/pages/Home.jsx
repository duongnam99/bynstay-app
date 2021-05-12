import React, {Component, useState, useEffect } from 'react';
import Axios from "axios";
import { stringify } from "querystring";

import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import Banner from '../components/banners/Banner'
import MainSearch from '../components/search/MainSearch'
import ItemBooking1 from '../components/items/ItemBooking1'
import ItemBooking2 from '../components/items/ItemBooking2'
import {homestayService} from '../services/homestay.service'

const HomePage = () => {
    const [hs, setHs] = useState([]);
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        homestayService.getRecommendedHs().then((response) => {
            setHs(response.data.homestay)
        })
  
        homestayService.getSuggestedPlaces().then((response) => {
            setPlaces(response.data)
        })
  
    }, [])

    return (
        <>
            <Header />
            <Banner />
            <MainSearch />
            
            <div class="container list_item_booking_1 mt-5">
            <div class="title text-center">Điểm đến phổ biến</div>
            <div class="row">
                {places.map((item, i) =>
                <div class="col-md-3 col-6">
                    <ItemBooking1 {...item}/>
                </div>
                )}
              
            </div>
        </div>
        <div class="container list_item_booking_2 mt-5">
            <div class="title text-center">Homestay gợi ý</div>
            <div class="row">
            {hs.map((item, i) =>
                <div class="col-md-4 col-6">
                    <ItemBooking2 {...item}/>
                </div>
            )}
            </div>
        </div>

        <Footer />

        </>
    );
  };
   
export default HomePage;