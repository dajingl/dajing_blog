import { reqLogin, reqLogout } from "api/login";
export const login = (username: string, password: string) => (dispatch: any) => {
    return new Promise<any>((resolve, reject) => {
        reqLogin({ params: '111' })
            .then((response: any) => {
                const { data } = response;
                dispatch({ type: 'USER_SET_USER_TOKEN' });
                resolve(data);
            }).catch((error: any) => {
                reject(error);
            });
    });
};


