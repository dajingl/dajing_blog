import request from 'utils/request'

// 获取文章列表
export function getArticle() {
    return request({
        url: '/admin/getArticle',
        method: 'post',
        data: {}
    })
}

// 新增文章列表
export function addArticle(data: any) {
    return request({
        url: '/admin/addArticle',
        method: 'post',
        data: data
    })
}

// 修改文章列表
export function updateArticle(data: any) {
    return request({
        url: '/admin/updateArticle',
        method: 'post',
        data: data
    })
}
// 删除文章列表
export function deleteArticle(data: any) {
    return request({
        url: '/admin/deleteArticle',
        method: 'post',
        data: data
    })
}


