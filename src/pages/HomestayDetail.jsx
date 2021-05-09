import React, {Component, useState, useEffect } from 'react';
import Axios from "axios";
import { stringify } from "querystring";
import { Router, Route, Switch, Redirect, NavLink, useRouteMatch, useParams, useHistory } from 'react-router-dom';

import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import BreadCrumb from '../components/common/BreadCrumb'
import DetailCommomInfo from '../components/detail/DetailCommomInfo'
import MapDetail from '../components/detail/MapDetail'
import DesDetail from '../components/detail/DesDetail'
import ConditionDetail from '../components/detail/ConditionDetail'
import BuyTikcetDetail from '../components/detail/BuyTikcetDetail'
import PriceDetail from '../components/detail/PriceDetail';
import Detail from '../components/detail/Detail';
import Order from '../components/detail/Order';
import OrderPaymethod from '../components/detail/OrderPaymethod';
import OrderResult from '../components/detail/OrderResult';

const HomestayDetail = () => {
    let { path, url } = useRouteMatch();
    const { id } = useParams();
    const [hsId, setHsId] = useState(1)
    return (
        <>
            <Header />
            <Switch>
                <Route exact path={`${path}` + '/order'} component={Order} />
                <Route exact path={`${path}` + '/order/paymethod'} component={OrderPaymethod} />
                <Route exact path={`${path}` + '/order/result'} component={OrderResult} />
                <Route path={`${path}`} component={Detail} />
            </Switch>
            <Footer />
        </>
    );
  };
   
export default HomestayDetail;