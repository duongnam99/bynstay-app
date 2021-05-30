import React, {Component, useState, useEffect } from 'react';
import Axios from "axios";
import { stringify } from "querystring";

import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import "flatpickr/dist/themes/dark.css";
import {homestayService} from '../services/homestay.service'
import { Router, Route, Switch, Redirect, NavLink, useRouteMatch, useParams, useHistory, Link } from 'react-router-dom';
import UserEdit from '../components/user/UserEdit';
import MyOrder from '../components/user/MyOrder';

const SearchResult = props => {

    let { path, url } = useRouteMatch();
    const [user, setUser] = useState([])

    useEffect(() => {
        let userInfo = JSON.parse(localStorage.getItem('user'));
        setUser(userInfo);
        // if (userInfo != null) {
        //     setName(userInfo['name']);
        //     setEmail(userInfo['email']);
        // }

    }, [])
    return (
        <>
            <Header />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-3">
                        <div className="sidebar sidebar_user">
                            <ul className="navigation_home">
                                <li>
                                    <NavLink to={`${url}/wishlist`}><i class="material-icons location_city">favorite</i> Yêu thích</NavLink>
                                </li>
                                <li>
                                    <NavLink to={`${url}/my-order`}><i class="material-icons hotel">shopping_cart</i> Đặt chỗ</NavLink>
                                </li>
                                <li>
                                    <NavLink to={`${url}/setting`}><i class="material-icons info_outline">settings</i> Cá nhân</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>  

                    <div className="col-9">
                        <Switch>
                            <Route path={`${path}/setting`} component={UserEdit} />
                            <Route path={`${path}/my-order`} component={MyOrder} />
                        </Switch>
                    </div>
                </div>
               
            </div>
         
            <Footer />
        </>
    );
  };
   
export default SearchResult;