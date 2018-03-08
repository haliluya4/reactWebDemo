/**
 * Created by johnsonxu on 2018/3/7.
 * CSS背景
 */
import React from 'react';
import CodeDisplay from '../../components/codedisplay/CodeDisplay';
import './Background.css';

const Background = () => {
  const css = [
    '.Background-Color {',
    '  height:100px;',
    '    background-color: blue;',
    '}',
    '.Background-Image {',
    '  height:200px;',
    '  background-image: url("../../res/bg.jpeg");',
    '  background-repeat: repeat;',
    '}',
    '.Background-Image-Position {',
    '  height:100px;',
    '  background-image: url("../../res/bg.jpeg");',
    '  background-position: center;',
    '  background-attachment: fixed;',
    '  background-size: 30% 60%;',
    '  background-repeat: no-repeat;',
    '}',
  ].join('\n');
  const element = (
      <div>
        <div className='Background-Color' />
        <div className='Background-Image' />
        <div className='Background-Image-Position' />
      </div>);
  return <CodeDisplay code={css} element={element} />;
};

export default Background;