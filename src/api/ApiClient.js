import axios from 'axios';
import Constant from "../utils/Constant";
import {log_common} from "../utils/Logger";

const R = require('ramda');

const api = axios.create({
    headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
    timeout: 200000,
})


const reqGetData = (url) => api.get(url)

const reqPostDataJson = (url, token, data) => api.post(url, data)

const reqDownloadFile = (url) => api.get(url,{
    responseType: 'blob'
})

const reqPostMultipartData = (url, token, data) => api.post(url, data, {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
})

export const getDataFile = async (url) => {
    const response = await reqGetData(url);
    if (response.status === Constant.CODE_SUCCESS) {
        const detail = R.path(['data'], response)
        return Promise.resolve(detail)
    }
    return Promise.reject(response)
}

export const getData = async (url) => {
    const response = await reqGetData(url);
    log_common('response getData', response)
    if (response.status === Constant.CODE_SUCCESS) {
        const detail = R.path(['data'], response)
        return Promise.resolve(detail)
    }
    return Promise.reject(response)
}

export const getDownloadFile = async (url) => {
    const response = await reqDownloadFile(url);
    if (response.ok && response.status === 200) {
        return Promise.resolve(response)
    }
    return Promise.reject(response)
}

export const postMultipartData = async (url, data) => {
    const response = await reqPostMultipartData(url, data);
    if (response.status === Constant.CODE_SUCCESS) {
        const data = R.path(['data'], response)
        return Promise.resolve(data)
    }
    return Promise.reject(response)
}

export const postDataJson = async (url, data) => {
    const response = await reqPostDataJson(url, data);
    if (response.status === Constant.CODE_SUCCESS) {
        const data = R.path(['data'], response)
        return Promise.resolve(data)
    }
    return Promise.reject(response)
}
