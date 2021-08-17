import React from 'react';
import { Table, Button, Space } from 'antd';
import useArticle from '../context/useArticle';
import { deleteArticle } from 'api/article'
import { formatTime } from 'utils/utils'
import './List.less'
const Article = () => {
    const { articleList, setVisible, setCurrItem } = useArticle();
    const columns = [
        {
            title: '标题',
            dataIndex: 'title',
            key: 'title',
            render: (text: any) => <a>{text}</a>,
        },
        {
            title: '描述',
            dataIndex: 'desc',
            key: 'desc',
        },
        {
            title: '创建时间',
            dataIndex: 'createTime',
            key: 'createTime',
            render: (text: any) => formatTime(text),
        },
        {
            title: '修改时间',
            dataIndex: 'updateTime',
            key: 'updateTime',
            render: (text: any) => formatTime(text),
        },
        {
            title: '操作',
            key: 'action',
            render: (text: any, record: any) => (
                <Space size="middle">
                    <Button type="primary" onClick={() => { setVisible(true); setCurrItem(record) }}>编辑</Button>
                    <Button type="ghost" onClick={() => { deleteArticle({ id: record.id }) }}>删除</Button>
                </Space>
            ),
        },
    ];
    return (
        <Table columns={columns} dataSource={articleList} />
    )
}


export default Article;