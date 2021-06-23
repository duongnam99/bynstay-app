import React, {Component, useState, useEffect } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import {userService} from '../../services/user.service'

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const orderState = {
    fontSize: '14px',
    color: '#bf2d69'
}

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

const WishList = () => {
    const [wishlist, setWishList] = useState([]);

    const deleteWish = (hsId, pos) => {
        userService.deleteWish(hsId).then((response) => {

            userService.getWishListHs().then((response) => {
                setWishList(response.data.reverse())
            })
            toast.success("Xóa thành công")
        }).catch(error => {
            toast.error("Xóa thất bại!")
        
        })
    }

    useEffect(() => {

        userService.getWishListHs().then((response) => {
            setWishList(response.data.reverse())
        }).catch(error => {
   
        
        })

    }, [])
    return (
        <div className="my_order wishlist">
            {wishlist.map((item, i) =>
                <div class="item_booking_result mt-3">
                <div class="block-main">
                    <a class="wrap" target="_blank" href="home-detail/25">
                        <div class="wrap-img"><img src={ process.env.REACT_APP_BASE_API_URL + 'uploads/' + (item.images.length > 0 ? item.images[0].image : '')} alt="" />
                        </div>
                    </a>
                    <div class="info">
                        <NavLink to={`/home-detail/` + item.id} class="name" >{item.name}</NavLink>
                        <span class="tag"></span>
                        <div class="stars"></div>
                        <div class="locate">{item.location}</div>
                    </div>
                    <div class="box">
                        <div class="block-a w-100" style={orderState}>
                            <div class="" onClick={() => deleteWish(item.id, i)}><i class="material-icons location_city">delete_outline</i></div>
                        </div>
                        <div class="block-b w-100">
                            <div class="line"><span>Số đêm tối đa</span><span> <b>{item.price != null ? item.price.max_night : ''} đêm</b></span></div>
                            <div class="line"><span>Số đêm tối thiểu</span><span><b>{item.price != null ? item.price.min_night: ''} đêm</b></span></div>
                            <div class="line"><span>Chi phí/ đêm</span><span><b>{item.price != null ? item.price.price_normal : ''} VNĐ</b></span></div>
                            <div class="line"><span>Số khách tối đa</span><span> {item.price != null ? item.price.max_guest : ''} người</span></div> 
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
};

export default WishList;