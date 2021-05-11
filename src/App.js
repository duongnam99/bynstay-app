import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Axios from "axios";

import HomePage from './pages/Home'
import SearchResult from './pages/SearchResult'
import HomestayDetail from './pages/HomestayDetail'
import { createBrowserHistory } from 'history';
import ListHsByPlace from "./pages/ListHsByPlace";
import AllHomestay from "./pages/AllHomestay";
export default function App() {
  const history = createBrowserHistory();

  return (
    <>
      <BrowserRouter>
          <Switch>
            <Route name="home_page" exact path="/" component={HomePage} />
            <Route name="search_result_page" path="/result" component={SearchResult} />
            <Route name="home_detail" path="/home-detail/:id" component={HomestayDetail} />
            <Route name="list_by_place" path="/place/:id" component={ListHsByPlace} />
            <Route exact name="all_hs" path="/list-hs" component={AllHomestay} />
          </Switch>
      </BrowserRouter>
    </>
  );
}
