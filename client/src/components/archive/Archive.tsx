import React from 'react';
import { Divider } from 'antd';
import './Archive.less'
const Archive = () => {
    return (
        <div className="archive">
            <div className="archive_desc">嗯..! 目前共计10篇日志。 继续努力。</div>
            <Divider plain></Divider>
            {
                data.map((item)=>{
                    return (
                        <div key={item.key}>
                            <h3>{item.time}</h3>
                            <ul>
                                <li><span>2021-12-12</span>react日记</li>
                            </ul>
                        </div>
                    )
                })
            }
        </div >
    )
}
const data = [
    {
        key: 1,
        time: 2018,
        title: '111',
        create_time: '2012-12-12'
    }
]
export default Archive;