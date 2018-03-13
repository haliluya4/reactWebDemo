/**
 * Created by johnsonxu on 2018/3/7.
 * CSS背景
 */
import React from 'react';
import CodeDisplay from '../../components/codedisplay/CodeDisplay';
import './BackgroundColor.css';

const BackgroundColor = () => {
  const props = {
    msg: '支持文字、16进制、rgb定义，默认transparent透明',
    code: [
      '.Background-Color {',
      '  height: 100px;',
      '  background-color: blue;',
      '}',
      '.Background-Color-Hex {',
      '  height: 100px;',
      '  background-color: #3F034F;',
      '}',
      '.Background-Color-Rgb {',
      '  height: 100px;',
      '  background-color: rgb(255,0,0);',
      '}',
    ].join('\n'),
    element: (
        <div>
          <div className='Background-Color' />
          <div className='Background-Color-Hex' />
          <div className='Background-Color-Rgb' />
        </div>),
  };
  return <CodeDisplay {...props} />;
};

export default BackgroundColor;