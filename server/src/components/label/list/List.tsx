import React from 'react';
import { Table, Button, Space } from 'antd';
import useLabel from '../context/useLabel';
import { deleteArticle } from 'api/article'
import { formatTime } from 'utils/utils'
import './List.less'
const Article = () => {
    const { labelList, setVisible, setCurrItem } = useLabel();
    const columns = [
        {
            title: '标题',
            dataIndex: 'name',
            key: 'name',
            render: (text: any) => <a>{text}</a>,
        },
        {
            title: '创建时间',
            dataIndex: 'create_time',
            key: 'create_time',
            render: (text: any) => formatTime(text),
        },
        {
            title: '修改时间',
            dataIndex: 'update_time',
            key: 'update_time',
            render: (text: any) => formatTime(text),
        },
        {
            title: '操作',
            key: 'action',
            render: (text: any, record: any) => (
                <Space size="middle">
                    <Button type="primary" onClick={() => { setVisible(true); setCurrItem(record) }}>编辑</Button>
                    <Button type="ghost" onClick={() => { deleteArticle(record.id) }}>删除</Button>
                </Space>
            ),
        },
    ];
    return (
        <Table columns={columns} dataSource={labelList} />
    )
}


export default Article;