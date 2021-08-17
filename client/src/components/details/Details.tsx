import React, { useState, useEffect } from 'react';
import './Details.less'
import { getArticleById } from 'api/article';
import { useParams } from 'react-router-dom';
import { Divider } from 'antd'
import MarkDown from 'components/widget/markdown/MarkDown'
// No import is required in the WebPack.s

interface Params {
    id: string;
}

interface Detail {
    title: string;
    createTime: string;
    updateTime: string;
    context: string;
    desc: string;
    labelList: Array<string>;
    typeList: Array<string>;
}
const Details = () => {
    const params: Params = useParams();
    const [detail, setDetail] = useState<Detail | null>();
    useEffect(() => {
        getArticleById({ id: params.id }).then(res => {
            console.log(res)
            setDetail(res.data.data);
        })
    }, [params])
    
    return (
        <div className="detail" style={{ zIndex: 99 }}>
            <h1 className="t">{detail?.title}</h1>
            <div className="info">
                {detail?.createTime}
                <Divider type="vertical" />
                {detail?.updateTime}
            </div>
            <MarkDown value={detail?.context}/>
        </div>
    )
}

export default Details;