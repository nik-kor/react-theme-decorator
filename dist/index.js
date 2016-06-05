'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (target) {
    target.contextTypes = Object.assign(target.contextTypes || {}, { theme: _react2.default.PropTypes.string });

    target.childContextTypes = Object.assign(target.childContextTypes || {}, { theme: _react2.default.PropTypes.string });

    target.prototype.getTheme = function () {
        return this.props.theme || this.context.theme || 'my-default-theme';
    };
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

