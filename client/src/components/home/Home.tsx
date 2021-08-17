import React from 'react';
import './Home.less';
import CardList from './cardlist/CardList';
const Home = () => {
    return (
        <div className="home_box">
            {/* <div>搜索位置，待用context实现兄弟组件通讯</div> */}
            <CardList />
        </div>
    )
}
export default Home;