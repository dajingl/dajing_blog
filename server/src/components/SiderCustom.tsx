import React, { useState, useEffect } from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { Menu } from 'antd';
import { SmileTwoTone, HeartTwoTone } from '@ant-design/icons';
import menus from 'router/config';
const { SubMenu } = Menu;

type SiderCustomProps = RouteComponentProps<any> & {
    popoverHide?: () => void;
    collapsed?: boolean;
    smenus?: any;
    location?: string;
};
const SiderCustom = (props: SiderCustomProps) => {
    const [selectedKeys, setSelectedKeys] = useState<any[]>([]);
    const [openKeys, setOpenKeys] = useState<any[]>([]);
    useEffect(() => {
        // Update the document title using the browser API
        const { pathname } = props.location;
        const openKeysList = pathname.split('/');
        const openKeys = openKeysList.slice(0, openKeysList.length - 1).join('/')
        const menuHigh = {
            selectedKeys: pathname,
            openKeys: openKeys
        }
        selectMenuHigh(menuHigh)
    }, [props.location]);

    // 选择菜单
    const selectMenu = ({ item, key, keyPath, domEvent }: { item: any, key: any, keyPath: any, domEvent: any }) => {
        const menuHigh = {
            selectedKeys: key,
            openKeys: keyPath[keyPath.length - 1]
        }
        selectMenuHigh(menuHigh);
    }

    const openMenu = (openKeys: any) => {
        setOpenKeys(openKeys)
    }

    // 菜单高光
    const selectMenuHigh = ({ selectedKeys, openKeys }: { selectedKeys: String, openKeys: any }) => {
        setSelectedKeys([selectedKeys])
        setOpenKeys([openKeys])
    }

    // 渲染无子集的菜单
    const renderMenu = ({ key, title, icon }: { key: any, title: any, icon: any }) => {
        return (
            <Menu.Item key={key} icon={<SmileTwoTone />}>
                <Link to={key}><span>{title}</span></Link>
            </Menu.Item>
        )
    }

    // 渲染有子集的菜单
    const renderSubMenu = ({ key, title, icon, children }: { key: any, icon: any, title: any, children: any }) => {
        return (
            <SubMenu key={key} title={title} icon={<HeartTwoTone />}>
                {
                    children && children.map((item: any) => {
                        return item.children && item.children.length > 0 ? renderSubMenu(item) : renderMenu(item)
                    })
                }
            </SubMenu>
        )
    }
    return (
        <>
            <div className="logo"></div>
            <Menu
                className="menuL"
                theme="dark"
                openKeys={openKeys}
                selectedKeys={selectedKeys}
                onOpenChange={openMenu}
                onClick={selectMenu}
                mode="inline"
                style={{minHeight: '100vh'}}
            >
                {
                    menus.menus.map((item: any) => {
                        return item.children && item.children.length > 0 ? renderSubMenu(item) : renderMenu(item)
                    })
                }
            </Menu>
        </>
    );
}

export default withRouter(SiderCustom);