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

const SearchResult = () => {

    return (
        <>
            <Header />
            <Banner />
            <MainSearch />

            <div class="container mt-5">
                <TitleBookingResult />
                <div class="row">
                    <div class="col-md-3">
                        <FilterBookingResult />
                    </div>
                    <div class="col-md-9">
                        <SearchBookingResult />

                        <ItemsBookingResult />
                        <ItemsBookingResult />
                        <ItemsBookingResult />
                        <ItemsBookingResult />
                        <ItemsBookingResult />

                        <Pagination />

                        {/* <NotFoundBookingResult class="mt-5" /> */}
                    </div>
                </div>

            </div>
     
            <Footer />
        </>
    );
  };
   
export default SearchResult;