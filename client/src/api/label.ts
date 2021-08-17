import request from 'utils/request'

// 获取标签列表
export function getLabel() {
    return request({
        url: '/admin/getLabel',
        method: 'post',
        data: {}
    })
}

// 获取标签列表
export function getArticleByLabelId(data: any) {
    return request({
        url: '/blog/getArticleByLabelId',
        method: 'post',
        data: data
    })
}



