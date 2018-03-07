/**
 * Created by johnsonxu on 2018/3/7.
 * 路由配置文件
 */

import Responsive from './routes/responsive/Responsive';
import Intro from './routes/intro/Intro';

const routes = [
  {
    path: '/',
    component: Intro,
  },
  {
    path: '/responsive',
    component: Responsive,
  },
];

export default routes;