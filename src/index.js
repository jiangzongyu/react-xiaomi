// import './css/common.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Nav from './components/nav';
import Header from './components/header';
import Img from './components/img';
import ImgSub from './components/imgsub';
import MilletStar from './components/milletstar';
import Main from './components/main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <Nav />
        <Header />
        <Img />
        <ImgSub />
        <MilletStar />
        <Main />
        {/* <App /> */}
    </div>,
    document.getElementById('root')
);
registerServiceWorker();
