import React, {Component, useState, useEffect } from 'react';
import Axios from "axios";
import { stringify } from "querystring";

import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import BreadCrumb from '../components/common/BreadCrumb'
import DetailCommomInfo from '../components/detail/DetailCommomInfo'
import MapDetail from '../components/detail/MapDetail'
import DesDetail from '../components/detail/DesDetail'
import ConditionDetail from '../components/detail/ConditionDetail'
import BuyTikcetDetail from '../components/detail/BuyTikcetDetail'

const HomestayDetail = () => {

    return (
        <>
            <Header />
            <div class="container mt-3 hotel_activity_search_detail">
                <BreadCrumb />
                <DetailCommomInfo />
                <MapDetail />
                <DesDetail />
                <ConditionDetail />
                <BuyTikcetDetail />
            </div>
        
            <Footer />
        </>
    );
  };
   
export default HomestayDetail;