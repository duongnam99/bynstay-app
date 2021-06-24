import React, {Component, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect, Link, NavLink, useRouteMatch, useParams, useHistory } from 'react-router-dom';
import {homestayService} from '../../services/homestay.service'
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/dark.css";
import ItemBooking2 from '../items/ItemBooking2';

const SimilarHomestays = props => {
    const [hsIdState, setHsIdState] = useState(props);

    let { path, url } = useRouteMatch();
    const history = useHistory();

    const [hsIds, setHsIds] = useState([]);
    const [hs, seths] = useState([]);

    useEffect(() => {
        homestayService.getRecommendHs(2, hsIdState['id']).then((response) => {
            setHsIds(response.data.data);
            homestayService.getHsByIds(response.data.data).then((response) => {
                seths(response.data.result)
            })
        })

    }, []);

    return (
        <div class="similar_homestay">
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
        </div>
    );
  };
   
export default SimilarHomestays;