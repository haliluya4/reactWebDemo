import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'; // 使用BrowserRouter在url语义上更清晰些，就是服务端要做下重定向请求到index.html
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
registerServiceWorker();
