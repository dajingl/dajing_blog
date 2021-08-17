import React from 'react';
import { Card, Row, Divider, Button } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { formatTime } from 'utils/utils'
import './CardItem.less';
interface Props {
    [key: string]: any
}
const CardItem = (props: Props) => {
    const history = useHistory();
    return (
        <div className="home_box">
            <Card
                // hoverable
                style={{ width: '100%' }}
            >
                <Link to={`/home/details/${props.id}`}>
                    <h1>{props.title}</h1>
                </Link>
                <div className="card_desc">
                    <span><i></i>创建时间：{formatTime(props.createTime)}</span>
                    <Divider type="vertical" />
                    <span><i></i>修改时间：{formatTime(props.updateTime)}</span>
                    <Divider type="vertical" />
                    <span></span>
                </div>
                <Row>{props.desc}</Row>
                <Button onClick={() => { history.push(`/home/details/${props.id}`) }} type="default">阅读全文</Button>
            </Card>
        </div>
    )
}
export default CardItem;