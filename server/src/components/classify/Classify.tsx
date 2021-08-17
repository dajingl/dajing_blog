import React from 'react';
import EditClassify from './editclassify/EditClassify';
import { Provider } from './context/Context'
import List from './list/List'
import Search from './search/Search'
import './Classify.less'
const Classify = () => {
    return (
        <Provider>
            <Search />
            <List />
            <EditClassify />
        </Provider>
    )
}
export default Classify;
