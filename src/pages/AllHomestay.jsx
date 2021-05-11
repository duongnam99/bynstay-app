import React, {Component, useState, useEffect } from 'react';
import Axios from "axios";
import { stringify } from "querystring";

import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import "flatpickr/dist/themes/dark.css";
import {homestayService} from '../services/homestay.service'
import { Router, Route, Switch, Redirect, NavLink, useRouteMatch, useParams, useHistory, Link } from 'react-router-dom';
import ItemBooking2 from '../components/items/ItemBooking2';

const AllHomestay = props => {
    const { id } = useParams();
    const [hs, setHs] = useState([]);
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        homestayService.getHs().then((response) => {
            setHs(response.data)
        })
  
    }, [])

    return (
        <>
            <Header />

            <div class="container mt-5">
                <div class="row">
                    {hs.map((item, i) =>
                        <div class="col-md-3">
                            <ItemBooking2 {...item}/>
                        </div>
                    )}
                </div>
            </div>
     
            <Footer />
        </>
    );
  };
   
export default AllHomestay;