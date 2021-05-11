import React, {Component, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect, NavLink, useRouteMatch, useParams, useHistory, Link } from 'react-router-dom';

const ItemBooking1 = props => {
    const history = useHistory();
    let { path, url } = useRouteMatch();
    const [place, setPlace] = useState(props);

    useEffect(() => {
   
    }, [])
    return (
        
        <div class="item_booking_1">
            <Link className="wrap-img" to={{ pathname: `place/d_${place.district_id}` }}>
                <img src={place.image != null ? place.image : "/assets/images/Bitmap1.png"} alt="" />
            </Link>
            <span className="locate">{place.district.name}</span>
            <Link className="list_hotel" to={{ pathname: `place/d_${place.district_id}` }}><span>Danh sách khách sạn</span></Link>
        </div>
    );
  };
   
export default ItemBooking1;