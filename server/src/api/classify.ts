import request from 'utils/request'

// 获取文章列表
export function getClassify() {
    return request({
        url: '/admin/getClassify',
        method: 'post',
        data: {}
    })
}

// 新增文章列表
export function addClassify(data: any) {
    return request({
        url: '/admin/addClassify',
        method: 'post',
        data: data
    })
}

// 修改文章列表
export function updateClassify(data: any) {
    return request({
        url: '/admin/updateClassify',
        method: 'post',
        data: data
    })
}
// 删除文章列表
export function deleteClassify(data: any) {
    return request({
        url: '/admin/deleteClassify',
        method: 'post',
        data: data
    })
}


