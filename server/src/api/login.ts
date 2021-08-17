import request from 'utils/request'
interface LoginData {
    params: string | boolean;
}
interface AuthLogin {
    sellerId: string;
    sellerNick: string;
    sessionKey: string;
}
export function reqLogin(data: LoginData) {
    return request({
        url: '/v1/auth/login',
        method: 'post',
        data: data
    })
}

//授权登录
export function reqLogout(data: AuthLogin) {
    return request({
        url: '/v1/shop/auth',
        method: 'post',
        data: data
    })
}

