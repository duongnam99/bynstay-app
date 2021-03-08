// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Axios from "axios";

import "./assets/css/style.css";
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
            <Route name="home_detail" exact path="/home-detail" component={HomestayDetail} />
          </Switch>
      </BrowserRouter>
    </>
  );
}
