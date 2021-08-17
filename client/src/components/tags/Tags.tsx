import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { getLabel } from 'api/label';
import './Tags.less'
const Tags = () => {
    const history = useHistory();
    const { url } = useRouteMatch();
    const [tags, setTags] = useState([]);
    useEffect(() => {
        getLabel().then((res) => {
            console.log(res)
            setTags(res.data.data)
        })
    }, [])
    return (
        <div className="tags_box">
            <div className="t">
                <h2>文章标签</h2>
                <p>目前共计{tags.length}个标签</p>
            </div>
            <ul>
                {
                    tags.map((item: any, index: number) => {
                        return (
                            <li key={item.id} onClick={() => {
                                history.push(
                                    {
                                        pathname: `${url}/${item.id}`,
                                        state:{name: item.name,type: 'label'}
                                    })
                            }
                            }> {item.name}</li>
                        )
                    })
                }
            </ul>
        </div >
    )
}
export default Tags;
