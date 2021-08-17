import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch, useLocation } from 'react-router-dom';
import { getArticleByLabelId } from 'api/label'
import { getArticleByClassifyId } from 'api/classify'
import './ArticleList.less';
interface RouteMatch {
    url: string;
    params: {
        id: string | undefined
    }
}
const ArticleList = () => {
    const history = useHistory();
    const { url, params }: RouteMatch = useRouteMatch();
    const location: any = useLocation();
    const [list, setList] = useState([])


    useEffect(() => {
        const type = location.state.type;
        if (type === 'label') {
            getArticeListByLabelId()
        } else {
            getArticeListByClassifyId()
        }
    }, [location]);

    const getArticeListByLabelId = () => {
        getArticleByLabelId({ id: params.id }).then((res) => {
            console.log('res', res)
            setList(res.data.data)
        })
    }
    const getArticeListByClassifyId = () => {
        getArticleByClassifyId({ id: params.id }).then((res) => {
            console.log('res', res)
            setList(res.data.data)
        })
    }
    return (
        <div className="article_list">
            <h1>{location.state?.name}</h1>
            {
                list.map((item: any) => {
                    return (
                        <div key={item.id} onClick={() => {
                            history.push({
                                pathname: `${url}/details/${item.id}`,
                                state: { background: location }
                            })
                        }}>{item.createTime}{item.title}</div>
                    )
                })
            }
        </div>
    )
}
export default ArticleList;