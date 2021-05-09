import Axios from "axios";

export const homestayService = {
    getHsImage,
    getHsPrice,
    getHsUtil,
    getHomestay,
    getHomestayType,
    getHsPolicy,
    calHsFee,
    createOrder,
    checkoutSanbox,
    getHsOrder,
    getHsOrderedTime
};

const config = {headers: {'content-type': 'application/json'}};

function getHsImage(id) {
    return Axios.get(process.env.REACT_APP_BASE_API_URL + 'api/pub/get-homestay-image/' + id, config);
}
function getHsPrice(id) {
    return Axios.get(process.env.REACT_APP_BASE_API_URL + 'api/pub/get-homestay-price/' + id, config);
}

function getHsUtil(id) {
    return Axios.get(process.env.REACT_APP_BASE_API_URL + 'api/pub/hs-util/' + id, config);
}

function getHomestay(id) {
    return Axios.get(process.env.REACT_APP_BASE_API_URL + 'api/pub/homestay/' + id, config);
}

function getHomestayType(id) {
    return Axios.get(process.env.REACT_APP_BASE_API_URL + 'api/pub/homestay-type/' + id, config);
}

function getHsPolicy(id) {
    return Axios.get(process.env.REACT_APP_BASE_API_URL + 'api/pub/homestay-policy-full/' + id, config);
}

function createOrder(data) {
    return Axios.post(process.env.REACT_APP_BASE_API_URL + 'api/pub/homestay-order/', data, config);
}

function checkoutSanbox(data) {
    return Axios.post(process.env.REACT_APP_BASE_API_URL + 'api/payment/homestay-checkout/', data, config);
}

function getHsOrder(id) {
    return Axios.get(process.env.REACT_APP_BASE_API_URL + 'api/pub/homestay-order/' + id, config);
}

function getHsOrderedTime(id) {
    return Axios.get(process.env.REACT_APP_BASE_API_URL + 'api/pub/homestay-ordered-time/' + id, config);
}

function calHsFee(price, numNight, numGuess) {
    let fee = numNight*parseInt(price.price_normal)
    if (numGuess > parseInt(price.max_guest)) {
        fee += parseInt(price.price_expense)*(numGuess-parseInt(price.max_guest))
    }
    return fee;
}
