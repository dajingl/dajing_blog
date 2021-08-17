import React from 'react';
import { Button } from 'antd';
import useArticle from '../context/useArticle'
const Article = () => {
    const { setVisible } = useArticle();
    return (
        <React.Fragment>
            <Button type="primary" onClick={() => { setVisible(true) }}>新增</Button>
            <div>搜索</div>
        </React.Fragment>
    )
}


export default Article;