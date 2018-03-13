/**
 * Created by johnsonxu on 2018/3/7.
 * CSS背景
 */
import React from 'react';
import CodeDisplay from '../../components/codedisplay/CodeDisplay';
import './BackgroundImageOrigin.css';

class BackgroundImageOrigin extends React.Component {
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
    let className = 'Background-Origin-Padding-Box';
    if (this.state.value === 'border-box') {
      className = 'Background-Origin-Border-Box';
    } else if (this.state.value === 'content-box') {
      className = 'Background-Origin-Content-Box';
    }

    const props = {
      msg: <span>background-origin 背景<strong>图片</strong>定位区域，包括content-box、padding-box(默认) 或 border-box。但如果background-attachment 属性为 "fixed"，则该属性没有效果。与background-position配合。</span>,
      code: [
        '.Background-Origin-Padding-Box',
        '{',
        '  padding:25px;',
        '  border:10px dotted #000000;',
        '  background-image: url("../../res/compatible_safari.png");',
        '  background-repeat: no-repeat;',
        '  background-origin:padding-box;',
        '}',
        '.Background-Origin-Border-Box',
        '{',
        '  padding:25px;',
        '  border:10px dotted #000000;',
        '  background-image: url("../../res/compatible_safari.png");',
        '  background-repeat: no-repeat;',
        '  background-origin:border-box;',
        '}',
        '.Background-Origin-Content-Box',
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
            <label style={{textAlign: 'left'}}>背景相对位置
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

export default BackgroundImageOrigin;