import axios from 'axios';
import constants from '../utils/constants';

var instance = axios.create({
    baseURL: constants.BASE_API,
    timeout: constants.SERVER_TIMEOUT,
})


function fetch(url, data) {
    let headers = null

    return instance.get(url, {
        params: {
            ...data
        },
        headers: headers
    }).then(response => {
        return response.data
    }).catch(error => {
        return error;
    })
}

function post(url, data) {
    let headers = null

    return instance.post(url, data, {
        headers
    }).then(response => {
        return response.data
    }).catch(error => {
        return error;
    })
}

export default apis = {
    fetch,
    post,
}