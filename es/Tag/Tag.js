function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

var Tag = function (_PureComponent) {
  _inherits(Tag, _PureComponent);

  function Tag() {
    _classCallCheck(this, Tag);

    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
  }

  Tag.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        color = _props.color;

    return React.createElement(
      'span',
      { className: 'bg-' + color + ' br-pill f7 dib ph2 pv1 white' },
      children
    );
  };

  return Tag;
}(PureComponent);

Tag.propTypes = process.env.NODE_ENV !== "production" ? {
  color: PropTypes.string,
  children: PropTypes.string.isRequired
} : {};

Tag.defaultProps = {
  color: 'blue'
};

export default Tag;