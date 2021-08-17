import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import MarkDown from 'components/widget/markdown/MarkDown'
import './About.less';
import mkdStr from './index.md';
const About = () => {
    const [val, setVal] = useState<string>('')
    useEffect(() => {
        fetch(mkdStr)
            .then(res => res.text())
            .then(text => setVal(text));
    }, [])
    return (
        <Card bordered={false}>
            <div className="about_container">
                <h1 className="t">关于我</h1>
                <MarkDown value={val} />
            </div>
        </Card>
    )
}
export default About;