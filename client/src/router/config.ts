import { HomeFilled, TeamOutlined, TagsFilled, GoldenFilled, WalletFilled, SolutionOutlined } from '@ant-design/icons';
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
        { key: '/home', title: '首页 Home', icon: HomeFilled, component: 'Home' },
        { key: '/home/about', title: '关于 About', icon: TeamOutlined, component: 'About' },
        { key: '/home/tags', title: '标签 Tags', icon: TagsFilled, component: 'Tags' },
        { key: '/home/th', title: '分类 Th', icon: GoldenFilled, component: 'Th' },
        { key: '/home/archive', title: '归档 Archive', icon: WalletFilled, component: 'Archive' },
        { key: '/messageboard', title: '绘画留言板 MessageBoard', icon: SolutionOutlined, component: 'MessageBoard' },
    ],
    others: [
        { key: '/home/tags/:id', title: '标签 Tags', icon: TagsFilled, component: 'ArticleList' },
        { key: '/home/th/:id', title: '分类 Th', icon: GoldenFilled, component: 'ArticleList' },
        { key: '/home/details/:id', title: '分类 Th', icon: GoldenFilled, component: 'Details' },
        { key: '/home/tags/:id/details/:id', title: '分类 Th', icon: GoldenFilled, component: 'Details' },
        { key: '/home/th/details/:id', title: '分类 Th', icon: GoldenFilled, component: 'Details' },
        { key: '/home/archive/details/:id', title: '分类 Th', icon: GoldenFilled, component: 'Details' },
    ],
}
export default menus;