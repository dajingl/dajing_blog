// Context.js

import React, { useState, useEffect } from "react";
import { getClassify, deleteClassify } from 'api/classify'

const Context = React.createContext([[], () => { }, {}]);
interface Props {
    [key: string]: any;
}
const Provider = (props: Props) => {
    const [classifyList, setClassifyList] = useState([]);
    const [visible, setVisible] = useState<boolean>(false);
    const [currItem, setCurrItem] = useState<any>(null);


    useEffect(() => {
        getClassify().then(res => {
            setClassifyList(res.data.data)
        })
    }, [])
    return <Context.Provider value={[classifyList, setClassifyList, visible, setVisible, currItem, setCurrItem]}>{props.children}</Context.Provider>;
};

export { Context, Provider };