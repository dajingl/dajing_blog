import React, { useState } from 'react';
import { Affix } from 'antd';
import CardMenu from './cardmenu/CardMenu';
import CardCensus from './cardcensus/CardCensus';
import "./SiderCustom.less";
const SiderCustom = () => {
    const [top] = useState(6);
    return (
        <Affix offsetTop={top}>
            <div className="slider_menu">
                <CardMenu />
                <CardCensus />
            </div>
        </Affix>
    );
};

export default SiderCustom;
