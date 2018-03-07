/**
 * Created by johnsonxu on 2018/3/7.
 * 没有任何路径匹配时展示
 */
import React from 'react';

const NoMatch = ({location}) => (<div>
  <h1>路径 {location.pathname} 没有匹配到任何页面</h1>
</div>);

export default NoMatch;