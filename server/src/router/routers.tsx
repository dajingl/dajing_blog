import { lazy } from 'react';
const Home = lazy(() => import('components/home/Home'));
const Article = lazy(() => import('components/article/Article'));
const Classify = lazy(() => import('components/classify/Classify'));
const Label = lazy(() => import('components/label/Label'));
const Trash = lazy(() => import('components/trash/Trash'));



export default {
    Home,
    Article,
    Classify,
    Label,
    Trash
} as any;
