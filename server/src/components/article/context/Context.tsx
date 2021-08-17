// Context.js

import React, { useState, useEffect } from "react";
import { getArticle, deleteArticle } from 'api/article'

const Context = React.createContext([[], () => { }, {}]);
interface Props {
    [key: string]: any;
}
const Provider = (props: Props) => {
    const [articleList, setArticleList] = useState([]);
    const [visible, setVisible] = useState<boolean>(false);
    const [currItem, setCurrItem] = useState<any>(null);


    useEffect(() => {
        getArticle().then(res => {
            setArticleList(res.data.data)
        })
    }, [])
    return <Context.Provider value={[articleList, setArticleList, visible, setVisible, currItem, setCurrItem]}>{props.children}</Context.Provider>;
};

export { Context, Provider };