/**
 * Created by johnsonxu on 2018/3/7.
 * 路由配置文件
 */

import BackgroundColor from './routes/background/BackgroundColor';
import Intro from './routes/intro/Intro';
import BackgroundImage from './routes/background/BackgroundImage';
import BackgroundImageFixed from './routes/background/BackgroundImageFixed';
import BackgroundImageOrigin from './routes/background/BackgroundImageOrigin';
import BackgroundClip from './routes/background/BackgroundClip';

const routes = [
  {
    path: '/intro',
    component: Intro,
  },
  {
    path: '/backgroundColor',
    component: BackgroundColor,
  },
  {
    path: '/backgroundImage',
    component: BackgroundImage,
  },
  {
    path: '/backgroundImageFixed',
    component: BackgroundImageFixed,
  },
  {
    path: '/backgroundImageOrigin',
    component: BackgroundImageOrigin,
  },
  {
    path: '/backgroundClip',
    component: BackgroundClip,
  },
];

export default routes;