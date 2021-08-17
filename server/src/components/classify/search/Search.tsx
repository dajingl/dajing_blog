import React from 'react';
import { Button } from 'antd';
import useClassify from '../context/useClassify'
const Article = () => {
    const { setVisible } = useClassify();
    return (
        <React.Fragment>
            <Button type="primary" onClick={() => { setVisible(true) }}>新增</Button>
            <div>搜索</div>
        </React.Fragment>
    )
}


export default Article;