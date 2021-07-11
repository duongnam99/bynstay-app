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
    getHsOrderedTime,
    getRandomHs,
    getRecommendHs,
    getSuggestedPlaces,
    getParentUtility,
    getHsType,
    searchPlace,
    getHsByPlace,
    sortHsPrice,
    filterHsType,
    filterUtil,
    getHs,
    getHsByIds,
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

function getRandomHs() {
    return Axios.get(process.env.REACT_APP_BASE_API_URL + 'api/pub/homestay-suggested/', config);
}

function getRecommendHs(userId, hsId) {
    let params = {
        'user_id': userId,
        'hs_id': hsId,
    }
    return Axios.get(process.env.REACT_APP_BASE_RECOMMEND_API_URL + 'homestay/recommend', {params: params}, config);
}

function getSuggestedPlaces() {

    return Axios.get(process.env.REACT_APP_BASE_API_URL + 'api/pub/place-suggested', config);
}

function getParentUtility() {
    return Axios.get(process.env.REACT_APP_BASE_API_URL + 'api/pub/homestay-utility-type-parents', config);
}

function getHsType() {
    return Axios.get(process.env.REACT_APP_BASE_API_URL + 'api/pub/homestay-type', config);
}

function searchPlace(query) {
    let params = {
        'query': query
    }
    return Axios.get(process.env.REACT_APP_BASE_API_URL + 'api/pub/search-place', {params: params}, config);
}

function getHsByPlace(id, type, start, end) {
    let params = {
        'id': id,
        'type': type,
        '_start': start,
        '_end': end
    }
    return Axios.get(process.env.REACT_APP_BASE_API_URL + 'api/pub/hs-by-place', {params: params}, config);
}


function sortHsPrice(ids, type) {
    let data = {
        'ids': ids,
        'type': type
    }
    // let data = {
    //     'id': id,
    //     'id_type': idType,
    //     'type': type
    // }
    return Axios.post(process.env.REACT_APP_BASE_API_URL + 'api/pub/sort-hs', data, config);
}

function filterHsType(ids, type) {
    let data = {
        'ids': ids,
        'type': type
    }
    return Axios.post(process.env.REACT_APP_BASE_API_URL + 'api/pub/filter-hs-type', data, config);
}

function filterUtil(originResultIds, hsType, sortType, utilsFilter) {
    let data = {
        'ids': originResultIds,
        'hs_type': hsType,
        'sort_type': sortType,
        'idUtils': utilsFilter
    }
    // return Axios.post(process.env.REACT_APP_BASE_API_URL + 'api/pub/filter-hs-util', data, config);
    return Axios.post(process.env.REACT_APP_BASE_API_URL + 'api/pub/search-filter-hs', data, config);
}
function getHs() {
    return Axios.get(process.env.REACT_APP_BASE_API_URL + 'api/pub/homestay', config);
}

function getHsByIds(hsIds) {
    let data = {
        'ids': hsIds,
    }
    return Axios.post(process.env.REACT_APP_BASE_API_URL + 'api/pub/homestay', data, config);
}


function calHsFee(price, numNight, numGuess) {
    let fee = numNight*parseInt(price.price_normal)
    if (numGuess > parseInt(price.max_guest)) {
        fee += parseInt(price.price_expense)*(numGuess-parseInt(price.max_guest))
    }
    return fee;
}
