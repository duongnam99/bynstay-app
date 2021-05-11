import React, {Component, useState, useEffect } from 'react';
import Axios from "axios";
import { stringify } from "querystring";
import {homestayService} from '../../services/homestay.service'

const ConditionDetail = props => {
    const [hsIdState, setHsIdState] = useState(props);
    const [polices, setPolicies] = useState([]);

    useEffect(() => {
        homestayService.getHsPolicy(hsIdState['id']).then((response) => {
            setPolicies(response.data)
        })

    }, [])

    return (
        <div class="act_condition">
        <div class="tit">Điều khoản & điều kiện</div>
        <div class="list">
            {polices.map((item, i) => 
                <div>
                    <h4 className="tit_2">{item.name}</h4>
                    <span className="content">- {item.content}</span>
                </div>
                
            // <div><span>Khách hàng khi nhận vé vui lòng cung cấp giấy chứng minh độ tuổi.</span></div> 
            
            )}
        </div>
    </div>
    );
  };
   
export default ConditionDetail;