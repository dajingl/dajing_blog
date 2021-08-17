import { lazy } from 'react';
const Home = lazy(() => import('components/home/Home'));
const About = lazy(() => import('components/about/About'));
const Tags = lazy(() => import('components/tags/Tags'));
const Th = lazy(() => import('components/th/Th'));
const Archive = lazy(() => import('components/archive/Archive'));
const MessageBoard = lazy(() => import('components/messageboard/MessageBoard'));
const ArticleList = lazy(() => import('components/articlelist/ArticleList'));
const Details = lazy(() => import('components/details/Details'));



export default {
    Home,
    About,
    Tags,
    Th,
    Archive,
    MessageBoard,
    ArticleList,
    Details
} as any;
