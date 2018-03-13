/**
 * Created by johnsonxu on 2018/3/7.
 * CSS背景
 */
import React from 'react';
import CodeDisplay from '../../components/codedisplay/CodeDisplay';
import './BackgroundImageFixed.css';

class BackgroundImageFixed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFixed: true,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const props = {
      msg: <ul>
        <li>
          background-attachment
          用于指定当元素滚动时，图片的显示方式，默认是scroll，随图片滚动。也可以设为fixed，固定位置，相对于视口固定，相当于设置到了body上。另外设置了fixed，background-size会失效。
        </li>
        <li>
          background-size
          背景<strong>图片</strong>大小，支持带单位的数字（如果只有宽度，高度则auto）、百分比（按父元素，一样可以只设宽，高auto）、cover（短边等比拉到最大）、contain（长边等比拉到最大）
        </li>
      </ul>,
      code: ['.Background-Image-Fixed {',
        '  background-image: url("../../res/bg.jpeg");',
        '  background-position: center;',
        '  background-attachment: fixed;',
        '  background-size: 30% 60%;',
        '  background-repeat: no-repeat;',
        '  overflow-y: scroll;',
        '  height: 500px;',
        '  maxHeight: 300px;',
        '}',
        '.Background-Image-Scroll {',
        '  background-image: url("../../res/bg.jpeg");',
        '  background-position: center;',
        '  background-attachment: scroll;',
        '  background-size: 30% 60%;',
        '  background-repeat: no-repeat;',
        '}'].join('\n'),
      element: (
          <div className='Background-Image-Fixed'
               style={this.state.isFixed ? {
                 backgroundAttachment: 'fixed',
                 overflowY: 'scroll',
                 height: 500,
                 maxHeight: 300,
               } : {
                 backgroundAttachment: 'scroll',
               }}>
            <label style={{textAlign: 'left'}}>背景固定
              <input
                  name="isFixed"
                  type="checkbox"
                  checked={this.state.isFixed}
                  onChange={this.handleInputChange} />
            </label>
            <p>内容滑动，但是图片不动</p>
            <p>内容滑动，但是图片不动</p>
            <p>内容滑动，但是图片不动</p>
            <p>内容滑动，但是图片不动</p>
            <p>内容滑动，但是图片不动</p>
            <p>内容滑动，但是图片不动</p>
            <p>内容滑动，但是图片不动</p>
            <p>内容滑动，但是图片不动</p>
            <p>内容滑动，但是图片不动</p>
            <p>内容滑动，但是图片不动</p>
            <p>内容滑动，但是图片不动</p>
            <p>内容滑动，但是图片不动</p>
            <p>内容滑动，但是图片不动</p>
          </div>),
    };
    return <CodeDisplay {...props} />;
  }
}

export default BackgroundImageFixed;