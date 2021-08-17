import React, { useCallback, useState } from 'react';
import { Table, Button, Space } from 'antd';
import EditLabel from './editlabel/EditLabel';
import { Provider } from './context/Context'
import List from './list/List'
import Search from './search/Search'
import './Label.less'
const Classify = () => {
    return (
        <Provider>
            <Search />
            <List />
            <EditLabel />
        </Provider>
    )
}
export default Classify;
