/**
 * Created by johnsonxu on 2018/3/8.
 * 用于显示代码和效果
 */
import React from 'react';
import PropTypes from 'prop-types';
import './CodeDisplay.css';

class CodeDisplay extends React.Component {
  render() {
    return <div className='CodeDisplay'>
      <div className='row'>
        <div className='Display-Outside col-6'>
          <div className='Display'>
            {this.props.element}
          </div>
        </div>
        <div className='Code-Outside col-6'>
          <div className='Code-Msg'>
            {this.props.msg}
          </div>
          <div className='Code'>
            {this.props.code}
          </div>
        </div>
      </div>
    </div>;
  }
}

CodeDisplay.propTypes = {
  code: PropTypes.string.isRequired, // 可以通过http://www.css88.com/tool/html2js/转义
  element: PropTypes.element.isRequired,
  msg: PropTypes.string,
};

export default CodeDisplay;