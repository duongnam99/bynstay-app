import Axios from "axios";
import authHeader from '../helpers/auth-header';

export const userService = {
    login,
    logout,
    register,
    updatePassword,
    updateInfo,
    getOrder,
    getWishListHs,
    deleteWish,
    checkWished,
    addToWish,
    resendMailOrder
};

const config = {headers: {'content-type': 'application/json'}};

async function login(email, password) {
    const config = {headers: {'content-type': 'application/x-www-form-urlencoded'}};
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    return Axios.post(process.env.REACT_APP_BASE_API_URL + 'api/login', formData, config)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user.data.user));
            localStorage.setItem('auth-token', user.data.token);
        
            return user.data.user;
        });
}

function logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('auth-token');
}

function register(user) {
    const config = {headers: {'content-type': 'application/x-www-form-urlencoded'}};

    const formData = new FormData();
    formData.append('name', user.name);
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('c_password', user.re_pass);
    formData.append('user_type', user.user_type);

    return Axios.post(process.env.REACT_APP_BASE_API_URL + 'api/register', formData, config)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user.data.user));
            localStorage.setItem('auth-token', user.data.token);

            return user;
        });

}

const permissionConfig = {
    headers: authHeader()
};


function updatePassword(user) {

    let postData = {
        name: user.name,
        password: user.password, 
        email: user.email, 
        new_password: user.new_password,
        new_cf_password: user.new_cf_password,
    }
    return Axios.put(process.env.REACT_APP_BASE_API_URL + 'api/update-pw', postData, permissionConfig);
}

function updateInfo(formData) {

    return Axios.post(process.env.REACT_APP_BASE_API_URL + 'api/user/edit', formData, permissionConfig);
}

function getOrder(email) {
    let params = {
        'email': email
    }
    let config = {...{ params: params}, ...permissionConfig};

    return Axios.get(process.env.REACT_APP_BASE_API_URL + 'api/cus/my-order', config);
}

function getWishListHs() {

    return Axios.get(process.env.REACT_APP_BASE_API_URL + 'api/cus/wishlist-hs', permissionConfig);
}

function deleteWish(hsId) {
    return Axios.get(process.env.REACT_APP_BASE_API_URL + 'api/cus/del-wishlist-hs/' + hsId, permissionConfig);
}

function checkWished(hsId) {
    return Axios.get(process.env.REACT_APP_BASE_API_URL + 'api/cus/check-wished/' + hsId, permissionConfig);
}

function resendMailOrder(orderId) {
    return Axios.get(process.env.REACT_APP_BASE_API_URL + 'api/cus/resend-mail-order/' + orderId, permissionConfig);
}

function addToWish(hsId) {
    let postData = {
        homestay_id: hsId,
    }
    return Axios.post(process.env.REACT_APP_BASE_API_URL + 'api/cus/wishlist', postData, permissionConfig);
}