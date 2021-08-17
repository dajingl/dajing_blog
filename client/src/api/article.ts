import request from 'utils/request'

// 获取文章列表
export function getArticle(data: any = {}) {
    return request({
        url: '/admin/getArticle',
        method: 'post',
        data: data
    })
}

// 获取文章列表
export function getArticleById(data: any) {
    return request({
        url: '/admin/getArticleById',
        method: 'post',
        data: data
    })
}



