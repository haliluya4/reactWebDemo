/**
 * Created by johnsonxu on 2018/3/7.
 * CSS背景
 */
import React from 'react';
import CodeDisplay from '../../components/codedisplay/CodeDisplay';
import './BackgroundImage.css';

const BackgroundImage = () => {
  const props = {
    msg: <ul>
      <li>background-image
        默认是none，需要通过url指定图片，如url(/i/eg_bg_04.gif)。c3支持通过逗号分隔设置多张背景图片，排前面的在上面。
      </li>
      <li>
        background-repeat 如果图片太小，要平铺，可以通过background-repeat，默认是x、y均重复
        repeat，可以只重复x或y或不重复
      </li>
      <li>
        background-position
        用于指定背景图片的位置，可以是字符串，如center等或百分比（指定图像中心点位于元素中的位置）或长度值（距左上角的位置）
      </li>
    </ul>,
    code: ['.Background-Image {',
      '  height: 100px;',
      '  background-image: url("../../res/compatible_safari.png"), url("../../res/bg.jpeg");',
      '  background-repeat: repeat-x;',
      '}',
      '.Background-Image-Position {',
      '  border-top: 1px blue dashed;',
      '  background-image: url("../../res/bg.jpeg");',
      '  background-position: center;',
      '  background-size: 50% 50%;',
      '  background-repeat: no-repeat;',
      '  height: 500px;',
      '}'].join("\n"),
    element: (
        <div>
          <div className='Background-Image' />
          <div className='Background-Image-Position' />
        </div>
    ),
  };
  return <CodeDisplay {...props} />;
};

export default BackgroundImage;