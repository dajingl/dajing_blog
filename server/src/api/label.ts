import request from 'utils/request'

// 获取文章列表
export function getLabel() {
    return request({
        url: '/admin/getLabel',
        method: 'post',
        data: {}
    })
}

// 新增文章列表
export function addLabel(data: any) {
    return request({
        url: '/admin/addLabel',
        method: 'post',
        data: data
    })
}

// 修改文章列表
export function updateLabel(data: any) {
    return request({
        url: '/admin/updateLabel',
        method: 'post',
        data: data
    })
}
// 删除文章列表
export function deleteLabel(data: any) {
    return request({
        url: '/admin/deleteLabel',
        method: 'post',
        data: data
    })
}


