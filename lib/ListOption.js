'use strict';

var babelHelpers = require('./util/babelHelpers.js');

exports.__esModule = true;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = babelHelpers.interopRequireDefault(_classnames);

var ListOption = _react2['default'].createClass({
  displayName: 'ListOption',

  propTypes: {
    dataItem: _react2['default'].PropTypes.any,
    focused: _react2['default'].PropTypes.bool,
    selected: _react2['default'].PropTypes.bool
  },

  render: function render() {
    var _props = this.props;
    var className = _props.className;
    var children = _props.children;
    var focused = _props.focused;
    var selected = _props.selected;
    var props = babelHelpers.objectWithoutProperties(_props, ['className', 'children', 'focused', 'selected']);

    var classes = {
      'rw-state-focus': focused,
      'rw-state-selected': selected
    };

    return _react2['default'].createElement(
      'li',
      babelHelpers._extends({
        role: 'option',
        tabIndex: '-1',
        'aria-selected': !!selected,
        className: (0, _classnames2['default'])('rw-list-option', className, classes)
      }, props),
      children
    );
  }
});

exports['default'] = ListOption;
module.exports = exports['default'];