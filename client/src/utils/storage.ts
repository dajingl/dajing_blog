/**
* 存储localStorage
*/
export const setLocalStorage = (name: string, content: any) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    localStorage.setItem(name, content);
}

/**
* 获取localStorage
*/
export const getLocalStorage = (name: string): string | undefined | null => {
    if (!name) return;
    return localStorage.getItem(name);
}

/**
* 删除localStorage
*/
export const removeLocalStorage = (name: string) => {
    if (!name) return;
    localStorage.removeItem(name);
}

/**
* 存储sessionStorage
*/
export const setSessionStorage = (name: string, content: any) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    sessionStorage.setItem(name, content);
}

/**
* 获取sessionStorage
*/
export const getSessionStorage = (name: string) => {
    if (!name) return;
    return sessionStorage.getItem(name);
}

/**
* 删除sessionStorage
*/
export const removeSessionStorage = (name: string) => {
    if (!name) return;
    sessionStorage.removeItem(name);
}
