import React from 'react';
import { Table, Button, Space } from 'antd';
import './Trash.less'
const Trash = () => {
    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}
export default Trash;

const columns = [
    {
        title: '标题',
        dataIndex: 'name',
        key: 'name',
        render: (text: any) => <a>{text}</a>,
    },
    {
        title: '创建时间',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '修改时间',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '操作',
        key: 'action',
        render: (text: any, record: any) => (
            <Space size="middle">
                <Button type="primary">编辑</Button>
                <Button type="ghost">删除</Button>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];