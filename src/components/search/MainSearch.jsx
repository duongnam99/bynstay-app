import React, {Component, useState, useEffect } from 'react';
import Axios from "axios";
import { stringify } from "querystring";

const MainSearch = () => {

    return (
        <div class="search_home container">
        <div class="tab_control">
            <ul class="list-tab">
                <li class="control_item active" data-tab="#tab-search-1">
                    <a href="javascript:;">
                        <i class="material-icons location_city">location_city</i>
                        Homestay
                    </a>
                </li>
                <li class="control_item" data-tab="#tab-search-2">
                    <a href="javascript:;">
                        <i class="material-icons flight">flight</i>
                        Địa điểm
                    </a>
                </li>
                {/* <li class="control_item" data-tab="#tab-search-3">
                    <a href="javascript:;">
                        <i class="material-icons local_activity">local_activity</i>
                        Hoạt động giải trí
                    </a>
                </li>
                <li class="control_item" data-tab="#tab-search-4">
                    <a href="javascript:;">
                        <span class="dub-ic">
                            <i class="material-icons location_city">location_city</i>
                            <i class="material-icons flight">flight</i>
                        </span>
                        Trọn gói
                    </a>
                </li> */}
            </ul>
        </div>
        <div class="tab_main">
            <div class="tab_item tab-hotel d-block" id="tab-search-1">
                <form action="">
                    <div class="d-flex flex-wrap align-items-start">
                        <div class="input-address">
                            <div class="position-relative">
                                <span class="notication">
                                    Vui lòng điền đầy đủ thông tin
                                </span>
                                <span class="position-absolute ic_map"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                                <input type="text" class="input-name-address" placeholder="Bạn muốn đi đâu?" />
                                <input type="hidden" name="item_id" />
                            </div>
                            <ul class="list-return">
                                <li class="item-return">
                                    <a href="javascript:;" data-id="1">
                                        Nha trang
                                    </a>
                                </li>
                                <li class="item-return">
                                    <a href="javascript:;" data-id="2">
                                        Đà Nẵng
                                    </a>
                                </li>
                                <li class="item-return">
                                    <a href="javascript:;" data-id="3">
                                    Phú Quốc
                                    </a>
                                </li>
                                <li class="item-return">
                                    <a href="javascript:;" data-id="4">
                                        Nghệ An
                                    </a>
                                </li>
                                <li class="item-return">
                                    <a href="javascript:;" data-id="5">
                                        Hà Tĩnh
                                    </a>
                                </li>
                                <li class="item-return">
                                    <a href="javascript:;" data-id="1">
                                        Nha trang
                                    </a>
                                </li>
                                <li class="item-return">
                                    <a href="javascript:;" data-id="2">
                                        Đà Nẵng
                                    </a>
                                </li>
                                <li class="item-return">
                                    <a href="javascript:;" data-id="3">
                                    Phú Quốc
                                    </a>
                                </li>
                                <li class="item-return">
                                    <a href="javascript:;" data-id="4">
                                        Nghệ An
                                    </a>
                                </li>
                                <li class="item-return">
                                    <a href="javascript:;" data-id="5">
                                        Hà Tĩnh
                                    </a>
                                </li>
                            </ul>
                            <a href="#" class="his_search d-block">
                                <i class="material-icons">history</i>
                                Lịch sử tìm kiếm
                            </a>
                        </div>
                        <div class="input-date">
                            <div class="position-relative">
                                <span class="ic_note"><i class="material-icons">event_note</i></span>
                                <input type="text" class="js-rangeDate" placeholder="Ngày đi - Ngày về" data-input />
                            </div>
                            <span class="return_date">2 ngày 1 đêm</span>
                        </div>
                        <div class="input-count">
                            <span class="ic_person"><i class="material-icons">person_pin</i></span>
                            <a href="javascript:;" class="js-show-change">Số người - Số phòng</a>
                            <div class="select_count">
                                <div class="select-item">
                                    <a href="javascript:;">
                                        -
                                    </a>
                                    <div class="content">
                                        <input type="text" value="1" class="so-nguoi" />
                                        <span>Người</span>
                                    </div>
                                    <a href="javascript:;">
                                        +
                                    </a>
                                </div>
                                <div class="select-item">
                                    <a href="javascript:;">
                                        -
                                    </a>
                                    <div class="content">
                                        <input type="text" value="1" class="so-phong" />
                                        <span>Phòng</span>
                                    </div>
                                    <a href="javascript:;">
                                        +
                                    </a>
                                </div>
                            </div>
                            <input type="hidden" name="so-nguoi" />
                        </div>
                        <div class="search_submit">
                            <button class="btn_search_action">
                                <i class="material-icons">search</i>
                                Tìm kiếm
                            </button>
                            <div class="check_mission">
                                <input type="checkbox" name="mission" />
                                <span>Tôi đi công tác</span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="tab_item tab-flight" id="tab-search-2">
                <form action="">
                    <div class="d-flex flex-wrap align-items-start">

                        <div class="point-fly d-flex align-items-center">
                            <div class="point-fly-item">
                                <div class="value-content">
                                    <i class="material-icons flight">flight</i>
                                    <span class="placeholder">Khởi hành từ…</span>
                                    <input type="hidden" class="data-point" />
                                </div>

                        
                                <div class="drop-search-city js-drop-search-city position-absolute d-none">
                                    <ul>
                                        <li>
                                            <span>Miền bắc</span>
                                            <ul class="location-dropdown-list">
                                                <li> <a href="javascript: void(0)" data-val="HAN" data-ftitle="Hà Nội">Hà Nội (HAN)</a></li>
                                                <li> <a href="javascript: void(0)" data-val="HPH" data-ftitle="Hải Phòng">Hải Phòng (HPH)</a></li>
                                                <li> <a href="javascript: void(0)" data-val="DIN" data-ftitle="Điện Biên Phủ">Điện Biên Phủ (DIN)</a></li>
                                                <li> <a href="javascript: void(0)" data-val="VDO" data-ftitle="Quảng Ninh">Quảng Ninh (VDO)</a></li>
                                                <li> <a href="javascript: void(0)" data-val="THD" data-ftitle="Thanh Hóa">Thanh Hóa (THD)</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <span>Miền Trung</span>
                                            <ul class="location-dropdown-list">
                                                <li> <a href="javascript: void(0)" data-val="HAN" data-ftitle="Hà Nội">Hà Nội (HAN)</a></li>
                                                <li> <a href="javascript: void(0)" data-val="HPH" data-ftitle="Hải Phòng">Hải Phòng (HPH)</a></li>
                                                <li> <a href="javascript: void(0)" data-val="DIN" data-ftitle="Điện Biên Phủ">Điện Biên Phủ (DIN)</a></li>
                                                <li> <a href="javascript: void(0)" data-val="VDO" data-ftitle="Quảng Ninh">Quảng Ninh (VDO)</a></li>
                                                <li> <a href="javascript: void(0)" data-val="THD" data-ftitle="Thanh Hóa">Thanh Hóa (THD)</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <span>Miền Nam</span>
                                            <ul class="location-dropdown-list">
                                                <li> <a href="javascript: void(0)" data-val="HAN" data-ftitle="Hà Nội">Hà Nội (HAN)</a></li>
                                                <li> <a href="javascript: void(0)" data-val="HPH" data-ftitle="Hải Phòng">Hải Phòng (HPH)</a></li>
                                                <li> <a href="javascript: void(0)" data-val="DIN" data-ftitle="Điện Biên Phủ">Điện Biên Phủ (DIN)</a></li>
                                                <li> <a href="javascript: void(0)" data-val="VDO" data-ftitle="Quảng Ninh">Quảng Ninh (VDO)</a></li>
                                                <li> <a href="javascript: void(0)" data-val="THD" data-ftitle="Thanh Hóa">Thanh Hóa (THD)</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <span class="swap_point">
                                <i class="material-icons">swap_horiz</i>
                            </span>
                            <div class="point-fly-item">
                                <div class="value-content">
                                    <i class="material-icons flight">flight</i>
                                    <span class="placeholder">Hạ cánh ở...</span>
                                    <input type="hidden" class="data-point" />
                                </div>
                                <div class="drop-search-city js-drop-search-city">
                                    
                                </div>
                            </div>
                        </div>

                        <div class="input-date-item date-start">
                            <div class="content-date">
                                <span class="ic_note"><i class="material-icons">event_note</i></span>
                                <input type="text" class="content-date-input js-date-from" placeholder="Ngày đi" />
                            </div>
                        </div>


                        <div class="input-date-item date-end">
                            <div class="content-date">
                                <span class="ic_note"><i class="material-icons">event_note</i></span>
                                <input type="text" class="content-date-input js-date-to" placeholder="Ngày về" />
                                <div class="tooltip_help">
                                    <span class="tooltip-icon">
                                        <i class="material-icons">help_outline</i>
                                    </span>
                                    <span class="tooltip-content">
                                        Bỏ trống Ngày về nếu bạn muốn đặt vé một chiều.
                                    </span>
                                </div>
                            </div>
                        </div>


                        <div class="search_submit">
                            <button class="btn_search_action">
                                <i class="material-icons">search</i>
                                Tìm kiếm
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="tab_item" id="tab-search-3">

            </div>
            <div class="tab_item" id="tab-search-4">

            </div>
        </div>
    </div>
   
   );
  };
   
export default MainSearch;