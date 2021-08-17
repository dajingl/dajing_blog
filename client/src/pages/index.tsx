import React, { FC } from 'react';
import HeaderCustom from 'components/HeaderCustom';
import { Layout } from 'antd';
import SiderCustom from 'components/slider/SiderCustom';
import Routes from 'router'
import './index.less'
const { Content, Footer } = Layout;
const Index: FC = () => {
    return (
        <Layout>
            <HeaderCustom />
            <div className="container">
                <SiderCustom />
                <Content className="app_layout_content">
                    <Routes />
                </Content>
            </div>
        </Layout>

    )
}

export default Index;