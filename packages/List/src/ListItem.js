import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({
  children,
  hasBorder,
  indented,
  lineColor,
  lineWidth,
  narrow,
  wide,
}) => {
  const indents = `${indented ? 'ph3' : ''}`;
  const borders = `${lineWidth === 0 ? '' : `bw${lineWidth}`}
                   ${hasBorder ? `bb b--${lineColor}` : 'bb b--transparent'}`;
  const spacing = `${narrow ? 'pv1' : `${wide ? 'pv3' : 'pv2'}`}`;
  return (
    <li className={`list-item ${indents} ${borders} ${spacing}`}>
      {children || null}
    </li>
  );
};

ListItem.propTypes = {
  lineColor: PropTypes.string,
  children: PropTypes.node,
  hasBorder: PropTypes.bool,
  indented: PropTypes.bool,
  lineWidth: PropTypes.number,
  narrow: PropTypes.bool,
  wide: PropTypes.bool,
};

ListItem.defaultProps = {
  lineColor: 'black',
  children: null,
  hasBorder: false,
  indented: false,
  lineWidth: 0,
  narrow: false,
  wide: false,
};

export default ListItem;
