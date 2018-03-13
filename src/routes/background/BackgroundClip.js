/**
 * Created by johnsonxu on 2018/3/7.
 * CSS背景
 */
import React from 'react';
import CodeDisplay from '../../components/codedisplay/CodeDisplay';
import './BackgroundClip.css';

class BackgroundClip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'padding-box',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    this.setState({
      value,
    });
  }

  render() {
    let className = 'Background-Clip-Padding-Box';
    if (this.state.value === 'border-box') {
      className = 'Background-Clip-Border-Box';
    } else if (this.state.value === 'content-box') {
      className = 'Background-Clip-Content-Box';
    }

    const props = {
      msg: 'background-clip 背景绘制区域，图片颜色都支持，超出部分会被裁减。支持content-box、padding-box 或 border-box。',
      code: [
        '.Background-Clip-Padding-Box',
        '{',
        '  padding:25px;',
        '  border:10px dotted #000000;',
        '  background-image: url("../../res/compatible_safari.png");',
        '  background-repeat: no-repeat;',
        '  background-origin:padding-box;',
        '}',
        '.Background-Clip-Border-Box',
        '{',
        '  padding:25px;',
        '  border:10px dotted #000000;',
        '  background-image: url("../../res/compatible_safari.png");',
        '  background-repeat: no-repeat;',
        '  background-origin:border-box;',
        '}',
        '.Background-Clip-Content-Box',
        '{',
        '  padding:25px;',
        '  border:10px dotted #000000;',
        '  background-image: url("../../res/compatible_safari.png");',
        '  background-repeat: no-repeat;',
        '  background-origin:content-box;',
        '}',
      ].join('\n'),
      element: (
          <div className={className}>
            <label style={{textAlign: 'left'}}>背景裁减范围
              <select onChange={this.handleInputChange}>
                <option value="padding-box">padding-box</option>
                <option value="border-box">border-box</option>
                <option value="content-box">content-box</option>
              </select>
            </label>
            <p>一堆文本</p>
            <p>一堆文本</p>
            <p>一堆文本</p>
            <p>一堆文本</p>
            <p>一堆文本</p>
            <p>一堆文本</p>
            <p>一堆文本</p>
          </div>),
    };
    return <CodeDisplay {...props} />;
  }
}

export default BackgroundClip;