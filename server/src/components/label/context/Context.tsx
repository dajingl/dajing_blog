// Context.js

import React, { useState, useEffect } from "react";
import { getLabel, deleteLabel } from 'api/label'

const Context = React.createContext([[], () => { }, {}]);
interface Props {
    [key: string]: any;
}
const Provider = (props: Props) => {
    const [labelList, setLabelList] = useState([]);
    const [visible, setVisible] = useState<boolean>(false);
    const [currItem, setCurrItem] = useState<any>(null);


    useEffect(() => {
        getLabel().then(res => {
            setLabelList(res.data.data)
        })
    }, [])
    return <Context.Provider value={[labelList, setLabelList, visible, setVisible, currItem, setCurrItem]}>{props.children}</Context.Provider>;
};

export { Context, Provider };