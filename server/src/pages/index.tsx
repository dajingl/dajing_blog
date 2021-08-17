import React, { FC } from 'react';
import HeaderCustom from 'components/HeaderCustom';
import { Layout } from 'antd';
import SiderCustom from 'components/SiderCustom';
import Routes from 'router'
import './index.less'
const { Content, Footer, Sider } = Layout;
const Index: FC = () => {
    return (
        <Layout>
            <Sider>
                <SiderCustom />
            </Sider>
            <Layout>
                <HeaderCustom />
                <Content className="app_layout_content">
                    <Routes />
                </Content>
            </Layout>

        </Layout>

    )
}

export default Index;