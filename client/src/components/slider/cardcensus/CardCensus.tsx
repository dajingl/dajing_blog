import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, Tag } from 'antd';
import './CardCensus.less'
const CardCensus = () => {
    return (
        <div className="sidebar_inner">
            <div className="site_author">
                <p className="site_author_name">记昨日书</p>
                <p className="site_description"> 日拱一卒，功不唐捐。 </p>
            </div>
            <div className="nav_tag">
                <div className="nav_item">
                    <Link to="/home/home">
                        <span className="site-state-item-count">8</span>
                        <span className="site-state-item-name">日志</span>
                    </Link>
                </div>
                <div className="nav_item">
                    <Link to="/home/home">
                        <span className="site-state-item-count">1</span>
                        <span className="site-state-item-name">分类</span>
                    </Link>
                </div>
                <div className="nav_item">
                    <Link to="/home/home">
                        <span className="site-state-item-count">2</span>
                        <span className="site-state-item-name">链接</span>
                    </Link>
                </div>
            </div>
            <Divider className="divider">个人标签</Divider>
            <div className="author-tag">
                <Tag color="magenta">magenta</Tag>
                <Tag color="red">red</Tag>
                <Tag color="volcano">volcano</Tag>
                <Tag color="orange">orange</Tag>
                <Tag color="gold">gold</Tag>
                <Tag color="lime">lime</Tag>
            </div>
        </div>
    )
}
export default CardCensus;