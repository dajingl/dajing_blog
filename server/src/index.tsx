import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ConfigProvider } from 'antd';
import { Provider } from "react-redux";
import store from "./store";
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import "./index.less"
ReactDOM.render(
    <ConfigProvider locale={zh_CN}>
        <Provider store={store}>
            <App />
        </Provider>
    </ConfigProvider>,
    document.getElementById('root')
);
