import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Axios from "axios";

import HomePage from './pages/Home'
import SearchResult from './pages/SearchResult'
import HomestayDetail from './pages/HomestayDetail'

export default function App() {


  return (
    <>
      <BrowserRouter>
          <Switch>
            <Route name="home_page" exact path="/" component={HomePage} />
            <Route name="search_result_page" exact path="/result" component={SearchResult} />
            <Route name="home_detail" path="/home-detail/:id" component={HomestayDetail} />
          </Switch>
      </BrowserRouter>
    </>
  );
}
