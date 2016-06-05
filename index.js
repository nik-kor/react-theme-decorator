import React from 'react';

/**
 * @param {String} componentName
 * @returns {Function}
 */
export default function (target) {
    target.contextTypes = Object.assign(
        target.contextTypes || {},
        { theme: React.PropTypes.string }
    );

    target.childContextTypes = Object.assign(
        target.childContextTypes || {},
        { theme: React.PropTypes.string }
    );

    target.prototype.getTheme = function() {
        return this.props.theme || this.context.theme || 'my-default-theme';
    };
}
