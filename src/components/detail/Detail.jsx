import React, {Component, useState, useEffect } from 'react';
import Axios from "axios";
import { stringify } from "querystring";
import { Router, Route, Switch, Redirect, NavLink, useRouteMatch, useParams, useHistory } from 'react-router-dom';


import BreadCrumb from '../common/BreadCrumb'
import DetailCommomInfo from '../detail/DetailCommomInfo'
import DesDetail from '..//detail/DesDetail'
import ConditionDetail from '../detail/ConditionDetail'
import PriceDetail from '../detail/PriceDetail';

const Detail = () => {
    let { path, url } = useRouteMatch();
    const { id } = useParams();
    console.log(id);
    const [hsId, setHsId] = useState(1)
    return (
        <>
            <div class="container mt-3 hotel_activity_search_detail">
                <BreadCrumb />
                <DetailCommomInfo {...id}/>
                <DesDetail />
                <PriceDetail {...id}/>
                <ConditionDetail {...id}/>
            </div>
        </>
    );
  };
   
export default Detail;