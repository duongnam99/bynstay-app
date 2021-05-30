import React, {Component, useState, useEffect, useContext } from 'react';
import { Router, Route, Switch, Redirect, NavLink, useRouteMatch, useParams, useHistory, Link } from 'react-router-dom';
import AuthBox from './AuthBox';
import {userService} from '../../services/user.service';

const Header = () => {
    let { path, url } = useRouteMatch();
    // const { user, setUser } = useContext(UserContext);

    let [openAuth, setOpenAuth] = useState(false);
    let [isRegis, setIsRegis] = useState(false);
    let [user, setUser] = useState({});

    const openMobileNav = event => {
        document.getElementById("mySidenav").style.width = "250px";
    }
    
    const closeMobileNav = event => {
        document.getElementById("mySidenav").style.width = "0";
    }

    const openAuthBox = event => {
        setOpenAuth(!openAuth);
        setIsRegis(false);
    }
    
    const logout = event => {
        userService.logout();
        window.location.reload();
    }
    
    const openAuthBoxRegis = event => {
        setOpenAuth(!openAuth);
        setIsRegis(true);
    }
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
        console.log(url)
    }, [])

    return (
    <header>
        <div class="container header-top">
            <div class="d-md-flex align-items-center">
                <div class="menu_mobile d-block d-md-none">

                </div>
                <div class="logo">
                    <a href="/">
                        <img src={'/assets/images/logo-byn.png'} alt="" />
                    </a>
                </div>
                <div class="menu_top">
                    <ul class="main-menu">
                        {/* <li class="menu-item">
                            <a href="">
                               <i class="material-icons">whatshot</i>
                                Ưu đãi
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="">
                                <i class="material-icons">email</i>
                                Tin nhắn
                            </a>
                        </li> */}
                        { user != null ? 
                        <li class="menu-item">
                            <a href="">
                                <i class="material-icons">chrome_reader_mode</i>
                                Lịch đặt của tôi 
                            </a>
                        </li>
                        : ''
                        }
                    </ul>
                    <div class="select-currency">
                        <span class="currency-show ic_vnd">VND</span>
                        <ul>
                            <li>
                                <a href="javascript:;" class="currency-item ic_vnd">
                                    VND
                                </a>
                            </li>
                    
                        </ul>
                    </div>
                </div>
                <div class="user_head">
                    {/* { Object.keys(user).length > 0 ?  */}
                    { user != null ? 
                    <>
                    <div class="d-block">
                        <NavLink className="wrap_uh" to={`/user/wishlist`}>
                            <div className="wrap-img">
                            <img src={ user.avatar != null ? process.env.REACT_APP_BASE_API_URL + 'uploads/' + user.avatar : '/assets/images/avatar_def.png'} alt=""/>
                            </div>
                            <span>{user.name}</span>

                        </NavLink>
                    </div>
                     <li class="regiter">
                        <a onClick={logout} href="javascript:void(0)">
                            Đăng xuất
                        </a>
                    </li>
                 </>
                    :
                    <ul class="link_user">
                        <li class="login">
                            <a onClick={openAuthBox} href="javascript:void(0)">
                                Đăng nhập
                            </a>
                        </li>
                        <li class="regiter">
                            <a onClick={openAuthBoxRegis} href="javascript:void(0)">
                                Đăng ký
                            </a>
                        </li>
                    </ul>
                    }
                </div>
            </div>
        </div>

        <div class="primery-menu">
            <div class="container">
                <ul class="main-menu">
                    <a href="#" className="hum_nav">
                        <span onClick={openMobileNav}>&#9776;</span>
                    </a>
               
                    <li class="menu-item">
                        <Link className="wrap-img" to={{ pathname: `/list-hs` }}>
                            <i class="material-icons location_city">location_city</i>
                            Homestay
                        </Link>
                    </li>
                    <li class="menu-item">
                        <a href="#">
                            <i class="material-icons flight">flight</i>
                            Địa điểm
                        </a>
                    </li>
               
                    {/* <li class="menu-item">
                        <a href="#">
                            <span class="dub-ic">
                                <i class="material-icons hotel">hotel</i>
                                <i class="material-icons flight">flight</i>
                            </span>
                            Gợi ý khám phá
                        </a>
                    </li> */}
                    <li class="menu-item">
                        <a href="#">
                            <i class="material-icons local_activity">local_activity</i>
                            Top homestay 
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    
        <div id="mySidenav"  class="sidenav d-md-none">
            <a href="javascript:void(0)" onClick={closeMobileNav} class="closebtn" onclick="closeNav()">&times;</a>
            <Link className="wrap-img" to={{ pathname: `/list-hs` }}>
                <i class="material-icons location_city">location_city</i>
                Homestay
            </Link>
            <a href="#">
                <i class="material-icons flight">flight</i>
                Địa điểm
            </a>
            <a href="#">
                <i class="material-icons local_activity">local_activity</i>
                Homestay đứng top
            </a>
            <a href="">
                <i class="material-icons">chrome_reader_mode</i>
                Lịch đặt của tôi 
            </a>
            <div class="menu_top">
                   
                </div>
                <div class="user_head">
                    <ul class="link_user">
                        <li class="login">
                            <a onClick={openAuthBox} href="javascript:void(0)">
                                Đăng nhập
                            </a>
                        </li>
                        <li class="regiter">
                            <a onClick={openAuthBox} href="javascript:void(0)">
                                Đăng ký
                            </a>
                        </li>
                    </ul>
                </div>
        </div>
       {openAuth ? <AuthBox onClick={openAuthBox} openAuth={openAuth} isRegis={isRegis}></AuthBox> : ''}
    </header>
    );
  };
   
export default Header;