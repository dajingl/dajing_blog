import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { getClassify } from 'api/classify';
import './Th.less'
const Th = () => {
    const history = useHistory();
    const { url } = useRouteMatch();
    const [tags, setTags] = useState([]);
    useEffect(() => {
        getClassify().then((res) => {
            console.log(res)
            setTags(res.data.data)
        })
    }, [])
    return (
        <div className="th_box">
            <div className="t">
                <h2>文章分类</h2>
                <p>目前共计{tags.length}个分类</p>
            </div>
            <ul>
                {
                    tags.map((item: any, index: number) => {
                        return (
                            <li key={item.id} onClick={() => {
                                history.push({
                                    pathname: `${url}/${item.id}`,
                                    state:{name: item.name,type: 'classify'}
                                })
                            }}>{item.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default Th;
