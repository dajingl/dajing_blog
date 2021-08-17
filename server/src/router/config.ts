import { HomeFilled, TeamOutlined, TagsFilled,GoldenFilled,SolutionOutlined } from '@ant-design/icons'
export interface IFMenuBase {
    key: string;
    title: string;
    icon?: any;
    component?: string;
    query?: string;
    requireAuth?: string;
    route?: string;
    /** 是否登录校验，true不进行校验（访客） */
    login?: boolean;
    redirect?: string;
}
export interface IFMenu extends IFMenuBase {
    children?: IFMenu[];
}
const menus: {
    menus: IFMenu[];
    others?: IFMenu[] | [];
    [index: string]: any;
} = {
    menus: [
        // 菜单相关路由
        { key: '/home', title: '数据总览', icon: HomeFilled, component: 'Home' },
        { key: '/home/article', title: '文章列表', icon: TeamOutlined, component: 'Article' },
        { key: '/home/classify', title: '分类列表', icon: TagsFilled, component: 'Classify' },
        { key: '/home/label', title: '标签列表', icon: GoldenFilled, component: 'Label' },
        { key: '/home/trash', title: '回收站', icon: SolutionOutlined, component: 'Trash' },
    ],
    others: [

    ]
}
export default menus;