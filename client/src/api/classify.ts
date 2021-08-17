import request from 'utils/request'

// 获取标签列表
export function getClassify() {
    return request({
        url: '/admin/getClassify',
        method: 'post',
        data: {}
    })
}

// 获取标签列表
export function getArticleByClassifyId(data: any) {
    return request({
        url: '/blog/getArticleByClassifyId',
        method: 'post',
        data: data
    })
}



