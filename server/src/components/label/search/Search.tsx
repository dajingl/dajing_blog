import React from 'react';
import { Button } from 'antd';
import useLabel from '../context/useLabel'
const Article = () => {
    const { setVisible } = useLabel();
    return (
        <React.Fragment>
            <Button type="primary" onClick={() => { setVisible(true) }}>新增</Button>
            <div>搜索</div>
        </React.Fragment>
    )
}


export default Article;