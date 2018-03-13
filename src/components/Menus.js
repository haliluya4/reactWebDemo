/**
 * Created by johnsonxu on 2018/3/8.
 * 菜单树
 */
import React from 'react';
import menus from '../menus';
import {Link} from 'react-router-dom';

const Menus = () => {
  const menusDefine = menus.map((menu, index) => {
    return <li key={`menu-${index}`} style={{textAlign: 'left'}}><Link to={menu.url}>{menu.label}</Link></li>;
  });

  return (<ul>
    {menusDefine}
  </ul>);
};

export default Menus;