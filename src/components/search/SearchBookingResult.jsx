import React, {Component, useState, useEffect } from 'react';
import Axios from "axios";
import { stringify } from "querystring";

const SearchBookingResult = () => {

return (
        <div class="search_booking_result">
            <form action="" class="searching">
                <i class="material-icons"> search </i>
                <input type="text" placeholder="Tìm kiếm" />
            </form>
        </div>
    );
};

export default SearchBookingResult;