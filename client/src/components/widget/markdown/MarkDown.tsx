import React, { useEffect } from "react";
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/atom-one-dark.css';
import './MarkDown.less'
interface Props {
    value: string | null | undefined;
}

function beforNumber(code: any) {
    if (!code.trim()) {
        return code;
    }
    const list = code.split('\n');
    const spanList = ['<span aria-hidden="true" line-row>'];
    list.forEach(() => {
        spanList.push('<span></span>');
    });
    spanList.push('</span>');
    list.push(spanList.join(''));
    return list.join('\n');
}

const MarkDown = (props: Props) => {
    useEffect(() => {
        marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true,
            breaks: true,
            pedantic: false,
            smartypants: false,
            highlight(code) {
                return beforNumber(hljs.highlightAuto(code).value);
            },
        });
    }, [])
    return (
        <div className="centent"
            dangerouslySetInnerHTML={{ __html: marked(props.value || '') }}
        ></div>
    );
}
export default MarkDown;
