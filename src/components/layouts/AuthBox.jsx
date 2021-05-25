import React, {Component, useState, useEffect } from 'react';
import {  } from 'react-router-dom';
import {userService} from '../../services/user.service';

const AuthBox = ({onClick, openAuth, isRegis}) => {
    let [openRegis, setOpenRegis] = useState(isRegis)
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [cf_pass, setCfPass] = useState('')
    let [name, setName] = useState('')

    const handleOpenRegis = () => {
        setOpenRegis(true)
        setEmail('')
    }
    const handleOpenLogin = () => {
        setOpenRegis(false)
    }

    const login = () => {
        let user = userService.login(email, password)
        // window.location.reload();
    }
    const register = () => {
        if (password != cf_pass){
            alert("Nhập lại mật khẩu không đúng")
        }
        let user = {
            name : name,
            email: email,
            password: password,
            re_pass: cf_pass,
            user_type: 0
        }
        let result = userService.register(user)
        console.log(result);
    }

    const handleChangeEmail = event => {
        setEmail(event.target.value)
    }

    const handleChangePass = event => {
        setPassword(event.target.value)
    }

    const handleChangeName = event => {
        setName(event.target.value)
    }
    const handleChangeCfPass = event => {
        setCfPass(event.target.value)
    }

    return (
      <div id="auth_box" className="modal_custom">
        <div class="modal-content">

        <span class="close" onClick={onClick}>&times;</span>
        <h3>{!openRegis ? 'Đăng nhập': 'Đăng ký'}</h3>

        {!openRegis ? 
        <>
        <div className="wrap_login">
            <div class="box box_1 ">
                <div class="sm-tit">Email</div>
                <input type="email" onChange={handleChangeEmail} placeholder="exmaple@gmail.com" />
            </div>
            <div class="box box_2 ">
                <div class="sm-tit">Mật khẩu</div>
                <input type="password" onChange={handleChangePass} placeholder="" />
            </div>
          </div>
          <a href="javascript:void(0)" className="submit" onClick={login}>Đăng nhập</a>
          <p className="bt_line">Chưa có tài khoản? Vui lòng <a href="javascript:void(0)" onClick={handleOpenRegis}>Đăng ký</a></p>
        </>
          : 
          <>
          <div className="wrap_register">
                <div class="box ">
                    <div class="sm-tit">Email</div>
                    <input type="email" onChange={handleChangeEmail} placeholder="exmaple@gmail.com" />
                </div>
                <div class="box ">
                    <div class="sm-tit">Tên</div>
                    <input type="text" onChange={handleChangeName} placeholder="Nguyễn Văn A" />
                </div>
                <div class="box ">
                    <div class="sm-tit">Mật khẩu</div>
                    <input type="password" onChange={handleChangePass} placeholder="" />
                </div>
                <div class="box ">
                    <div class="sm-tit">Nhập lại mật khẩu</div>
                    <input type="password" onChange={handleChangeCfPass} placeholder="" />
                </div>
          </div>
          <a href="javascript:void(0)" className="submit" onClick={register}>Đăng ký</a>
          <p className="bt_line"><a href="javascript:void(0)" onClick={handleOpenLogin}>Về phần đăng nhập</a></p>

          </>
        }

        </div>

      </div>
    );
  };
   
export default AuthBox;