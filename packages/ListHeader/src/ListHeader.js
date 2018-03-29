import React from 'react';
import PropTypes from 'prop-types';

const ListHeader = ({
  children,
  indented,
  lineColor,
  lined,
  lineWidth }) => {
  const hasLine = `${lined ? `bb ${lineWidth ? `bw${lineWidth}` : ''}` : ''}`;
  const indents = `${indented ? 'ph3' : ''}`;
  return (
    <div className="list-header">
      <div className={`b--${lineColor} ${hasLine} pb2`}>
        <span className={`${indents}`}>
          {children || null}
        </span>
      </div>
    </div>
  );
};

ListHeader.propTypes = {
  children: PropTypes.node,
  indented: PropTypes.bool,
  lineColor: PropTypes.string,
  lined: PropTypes.bool,
  lineWidth: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
};

ListHeader.defaultProps = {
  children: null,
  indented: false,
  lineColor: 'black',
  lined: false,
  lineWidth: 0,
};

export default ListHeader;
