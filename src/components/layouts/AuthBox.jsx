import React, {Component, useState, useEffect, useContext } from 'react';
import { Router, Route, Switch, Redirect, NavLink, useRouteMatch, useParams, useHistory, Link } from 'react-router-dom';
import {userService} from '../../services/user.service';
import UserContext from '../../context/userContext';

const AuthBox = ({onClick, openAuth, isRegis}) => {
    const history = useHistory();
    let { path, url } = useRouteMatch();
    // const { user, setUser } = useContext(UserContext);
    const user = useContext(UserContext);

    let [openRegis, setOpenRegis] = useState(isRegis)
    let [email, setEmail] = useState('')
    let [emailRegis, setEmailRegis] = useState('')
    let [password, setPassword] = useState('')
    let [passRegis, setPassRegis] = useState('')
    let [cf_pass, setCfPass] = useState('')
    let [name, setName] = useState('')
    const [isValidateError, setValidateError] = useState(false)
    const [validatorMes, setValidatorMes] = useState([])

    const [error, setError] = useState(false)

    const handleOpenRegis = () => {
        setOpenRegis(true)
        setError(false);
        setValidateError(false)
    }
    const handleOpenLogin = () => {
        setOpenRegis(false)
        setError(false);
        setValidateError(false)
    }

    const login = () => {
        setError(false);
        setValidateError(false)
        let user = userService.login(email, password).then((response) => {
            window.location.reload()
            
        }).catch(error => {
            if (error.response.status == 403) {
                setError(true);
            } else {
                let errorData = error.response.data;
                setValidateError(true);
                setValidatorMes(errorData.data)
            }
        //    alert('Login failed!');
        })
    }

    const register = () => {
        setError(false);
        setValidateError(false)
        if (password != cf_pass){
            alert("Nhập lại mật khẩu không đúng")
        }
        let user = {
            name : name,
            email: emailRegis,
            password: passRegis,
            re_pass: cf_pass,
            user_type: 0
        }
        let result = userService.register(user).then((response) => {

        }).catch(error => {
            let errorData = error.response.data;
            setValidateError(true);
            setValidatorMes(errorData.data)
        })
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

    const handleChangeEmailRegis = event => {
        setEmailRegis(event.target.value)
    }
    const handleChangePassRegis = event => {
        setPassRegis(event.target.value)
    }
    useEffect(() => {
        console.log(user)
    }, [user])

    return (
      <div id="auth_box" className="modal_custom">
        <div class="modal-content">

        <span class="close" onClick={onClick}>&times;</span>
        <h3>{!openRegis ? 'Đăng nhập': 'Đăng ký'}</h3>

        {/* {!openRegis ? 
        <> */}
        <div className={ "wrap_login " + (openRegis ? 'd-none' : '')}>
            <p className={"login_error " + (error ? 'visible' : 'invisible')}>Tên đăng nhập hoặc mật khẩu không đúng</p>
            <div class="box box_1 ">
                <div class="sm-tit">Email</div>
                <input type="email" onChange={handleChangeEmail} placeholder="exmaple@gmail.com" />
                <span className={"validator_error " + (isValidateError && validatorMes.email ? 'visible' : 'invisible')}>*{validatorMes.email}</span>
            </div>
            <div class="box box_2 ">
                <div class="sm-tit">Mật khẩu</div>
                <input type="password" onChange={handleChangePass} placeholder="" />
            </div>
          </div>
            <a href="javascript:void(0)" className={"submit " + (openRegis ? 'd-none' : '')} onClick={login}>Đăng nhập</a>
            <p className={"bt_line " + (openRegis ? 'd-none' : '')}>Chưa có tài khoản? Vui lòng <a href="javascript:void(0)" onClick={handleOpenRegis}>Đăng ký</a></p>
       
        
        {/* </>
          : 
          <> */}
          <div className={ "wrap_register " + (openRegis ? '' : 'd-none')}>
                <div class="box ">
                    <div class="sm-tit">Email</div>
                    <input type="email" onChange={handleChangeEmailRegis} placeholder="exmaple@gmail.com" />
                    <span className={"validator_error " + (isValidateError && validatorMes.email ? 'visible' : 'invisible')}>*{validatorMes.email}</span>
                </div>
                <div class="box ">
                    <div class="sm-tit">Tên</div>
                    <input type="text" onChange={handleChangeName} placeholder="Nguyễn Văn A" />
                    <span className={"validator_error " + (isValidateError && validatorMes.email ? 'visible' : 'invisible')}>*{validatorMes.email}</span>

                </div>
                <div class="box ">
                    <div class="sm-tit">Mật khẩu</div>
                    <input type="password" onChange={handleChangePassRegis} placeholder="" />
                    <span className={"validator_error " + (isValidateError && validatorMes.password ? 'visible' : 'invisible')}>*{validatorMes.password}</span>

                </div>
                <div class="box ">
                    <div class="sm-tit">Nhập lại mật khẩu</div>
                    <input type="password" onChange={handleChangeCfPass} placeholder="" />
                    <span className={"validator_error " + (isValidateError && validatorMes.c_password ? 'visible' : 'invisible')}>*{validatorMes.name}</span>

                </div>
          </div>
          <a href="javascript:void(0)" className={"submit " + (openRegis ? '' : 'd-none')} onClick={register}>Đăng ký</a>
          <p className={"bt_line " + (openRegis ? '' : 'd-none')}><a href="javascript:void(0)" onClick={handleOpenLogin}>Về phần đăng nhập</a></p>

          {/* </>
        } */}

        </div>

      </div>
    );
  };
   
export default AuthBox;