import axios from "axios";
import { message } from "antd";
import store from 'store'


//创建一个axios示例
const service = axios.create({
    baseURL: process.env.REACT_APP_BASE_API, // api 的 base_url
    timeout: 5000, // request timeout
});


service.defaults.headers["Content-Type"] = "application/json";
// 添加请求拦截器
service.interceptors.request.use(
    function (config) {
        // 在发送请求之前做些什么
        
        return config;
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);
// 添加响应拦截器
service.interceptors.response.use(
    function (response) {
       
        return response;
    },
    function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);
export default service;

