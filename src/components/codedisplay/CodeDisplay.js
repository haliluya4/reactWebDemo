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
        <div className='Display col-6'>
          {this.props.element}
        </div>
        <div className='Code col-6'>
          {this.props.code}
        </div>
      </div>
    </div>
  }
}

CodeDisplay.propTypes = {
  code: PropTypes.string.isRequired, // 可以通过http://www.css88.com/tool/html2js/转义
  element:PropTypes.element.isRequired,
};

export default CodeDisplay;