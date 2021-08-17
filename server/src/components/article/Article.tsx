import React from 'react';
import EditArticle from './editarticle/EditArticle';
import { Provider } from './context/Context'
import List from './list/List';
import Search from './search/Search'
import './Article.less'
const Article = () => {
    return (
        <Provider>
            <Search />
            <List />
            <EditArticle />
        </Provider>
    )
}


export default Article;