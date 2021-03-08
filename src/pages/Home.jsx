import React, {Component, useState, useEffect } from 'react';
import Axios from "axios";
import { stringify } from "querystring";

import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import Banner from '../components/banners/Banner'
import MainSearch from '../components/search/MainSearch'
import ItemBooking1 from '../components/items/ItemBooking1'
import ItemBooking2 from '../components/items/ItemBooking2'

const HomePage = () => {

    return (
        <>
            <Header />
            <Banner />
            <MainSearch />
            
            <div class="container list_item_booking_1 mt-5">
            <div class="title text-center">Điểm đến phổ biến</div>
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <ItemBooking1 />
                </div>
                <div class="col-md-3 col-sm-6">
                    <ItemBooking1 />
                </div>
                <div class="col-md-3 col-sm-6">
                    <ItemBooking1 />
                </div>
                <div class="col-md-3 col-sm-6">
                    <ItemBooking1 />
                </div>
                <div class="col-md-3 col-sm-6">
                    <ItemBooking1 />
                </div>
                <div class="col-md-3 col-sm-6">
                    <ItemBooking1 />
                </div>
            </div>
        </div>
        <div class="container list_item_booking_2 mt-5">
            <div class="title text-center">Điểm đến phổ biến</div>
            <div class="row">
                <div class="col-md-4">
                    <ItemBooking2 />
                </div>
                <div class="col-md-4">
                    <ItemBooking2 />
                </div>
                <div class="col-md-4">
                    <ItemBooking2 />                    
                </div>
                <div class="col-md-4">
                    <ItemBooking2 />
                </div>
                <div class="col-md-4">
                    <ItemBooking2 />
                </div>
                <div class="col-md-4">
                    <ItemBooking2 />
                </div>
            </div>
        </div>

        <Footer />

        </>
    );
  };
   
export default HomePage;