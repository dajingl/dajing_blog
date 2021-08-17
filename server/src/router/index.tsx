/**
 * Created by 叶子 on 2017/8/13.
 */
import React, { Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import AllComponents from './routers';
import routesConfig, { IFMenuBase, IFMenu } from './config';
import { Spin } from 'antd';


const CRouter = () => {
    const createMenu = (r: IFMenu) => {
        const route = (r: IFMenuBase) => {
            const Component = r.component && AllComponents[r.component];
            return (
                <Route
                    key={r.route || r.key}
                    exact
                    path={r.route || r.key}
                    component={Component}
                />
            );
        };
        return route(r);
    };
    const createRoute = (key: string) => { return routesConfig[key].map(createMenu) };
    return (
        <Suspense fallback={<div><Spin tip="加载中..." /></div>}>
            <Switch>
                {Object.keys(routesConfig).map((key) => createRoute(key))}
                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        </Suspense>
    );
};

export default CRouter;
