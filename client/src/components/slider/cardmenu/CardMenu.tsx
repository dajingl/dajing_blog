import React from 'react';
import './CardMenu.less';
import routesConfig, { IFMenu } from 'router/config';
import { Link, useLocation } from 'react-router-dom';
const CardMenu = () => {
    const Location = useLocation();
    console.log(Location, 'Location')
    return (
        <div className="header_inner">
            <div className="site_brand_wrapper">
                <div className="t">记昨日书</div>
                <p>山有木兮卿有意，昨夜星辰恰似你</p>
            </div>
            <div className="menu">
                <ul>
                    {
                        routesConfig['menus'].map((item: IFMenu) => {
                            let Icon = item.icon;
                            return (
                                <li key={item.key} className={Location.pathname === item.key ? 'active' : ''}>
                                    <Link to={item.key} >
                                        <Icon />
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
export default CardMenu;