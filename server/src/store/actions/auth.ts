import { reqLogin, reqLogout } from "api/login";
import JSEncrypt from "jsencrypt";
export const login = (username: string, password: string) => (dispatch: any) => {
    return new Promise<any>((resolve, reject) => {
        let PUBLIC_KEY =
            "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCJy0OlTMzJ92y5cjgr6yIUkRaD/U5qu215jrGGOxVFMSDA6kl+SGJhLvspjDk9iQ6S0EY1o4IMRiZyI/xQJooflwXon5KOy9MIRxowrFDnMqQv2w2rIKAAB1PE551fqc4STNpYcFoYEx+Dv3XDZShHGD0E7NKcsio485l0aH+VDwIDAQAB";
        let encrypt = new JSEncrypt({});
        encrypt.setPublicKey(
            "-----BEGIN PUBLIC KEY-----" + PUBLIC_KEY + "-----END PUBLIC KEY-----"
        );
        let str = {
            username: username.trim(),
            password: password,
        };
        let encrypted = encrypt.encrypt(JSON.stringify(str));
        reqLogin({ params: encrypted })
            .then((response: any) => {
                const { data } = response;
                dispatch({ type: 'USER_SET_USER_TOKEN' });
                resolve(data);
            }).catch((error: any) => {
                reject(error);
            });
    });
};


