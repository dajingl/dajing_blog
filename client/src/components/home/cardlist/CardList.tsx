import React, { useEffect, useState } from 'react';
import './CardList.less';
import CardItem from '../carditem/CardItem';
import { getArticle } from 'api/article'
import { Pagination } from 'antd';
import { useLocation, useHistory } from 'react-router-dom'

interface cardList {
    total: number;
    data: []
}
const getUrlToken = (name: string, str: string): string | null => {
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
    const r = str.substr(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]); return null;
}
const CardList = () => {
    const [cardList, setCardList] = useState<cardList | any>({});
    const [currPage, setCurrPage] = useState<number>(1);
    const location = useLocation();
    const history = useHistory();

    // 分页改变 重新请求数据
    useEffect(() => {
        getArticle({ pageNo: currPage, pageSize: 1 }).then((res) => {
            setCardList(res.data);
        })
    }, [currPage])

    // 地址栏参数改变
    useEffect(() => {
        const pageNo = Number(getUrlToken('pageNo', location.search));
        pageNo && setCurrPage(pageNo)
    }, [location])
    
    // 分页改变
    const onChange = (page: number, pageSize: number | undefined) => {
        history.replace(`${location.pathname}?pageNo=${page}`)
        setCurrPage(page)
    }
    return (
        <div className="card_list">
            {
                cardList.data && cardList.data.map((item: any, index: number) => {
                    return (
                        <React.Fragment key={index}>
                            <CardItem {...item} />
                        </React.Fragment>
                    )
                })
            }
            <Pagination current={currPage} pageSize={1} total={cardList.total} onChange={onChange} />
        </div>
    )
}
export default CardList;