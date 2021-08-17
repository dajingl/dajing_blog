/**
 * Created by hao.cheng on 2017/4/16.
 */
import React, { useEffect } from 'react';
import { reqLogin } from 'api/login'

const Login = () => {
    useEffect(() => {
        reqLogin({ params: '12345' }).then((res: any) => {
            console.log(res)
        })
    }, [])

    return (
        <div className="login">
            login
        </div>
    );
};

export default Login;
