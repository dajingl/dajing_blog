import { getSessionStorage } from 'utils/storage'
const initUserInfo = {
    name: "",
    role: "",
    avatar: "",
    token: getSessionStorage(),
};
export default function user(state = initUserInfo, action) {
    switch (action.type) {
        case 'USER_SET_USER_TOKEN':
            return {
                ...state,
                token: action.token || ''
            };
        default:
            return state;
    }
}
