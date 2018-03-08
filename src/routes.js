/**
 * Created by johnsonxu on 2018/3/7.
 * 路由配置文件
 */

import Background from './routes/background/Background';
import Intro from './routes/intro/Intro';

const routes = [
  {
    path: '/intro',
    component: Intro,
  },
  {
    path: '/background',
    component: Background,
  },
];

export default routes;