import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem.jsx';

const List = ({
  children,
  contained,
  indented,
  lineColor,
  lined,
  lineWidth,
  ordered,
}) => {
  const childArray = React.Children.toArray(children);
  return (
    <div className="list">
      { ordered ?
        <ol className="list ma0 pa0 tl">
          { childArray.map((child, index, array) => (
            <ListItem
              borderColor={lineColor}
              borderWidth={lineWidth}
              hasBorder={contained && (index === array.length - 1) ? false : lined}
              indented={indented}
              key={`list-item-${index + 1}`}
            >
              {`${index + 1}. `}{child}
            </ListItem>
          ))
          }
        </ol>
        :
        <ul className="list ma0 pa0 tl">
          { childArray.map((child, index, array) => (
            <ListItem
              borderColor={lineColor}
              borderWidth={lineWidth}
              hasBorder={contained && (index === array.length - 1) ? false : lined}
              indented={indented}
              key={`list-item-${index + 1}`}
            >
              {child}
            </ListItem>
          ))
          }
        </ul>
      }
    </div>
  );
};

List.propTypes = {
  children: PropTypes.node,
  contained: PropTypes.bool,
  indented: PropTypes.bool,
  lined: PropTypes.bool,
  lineColor: PropTypes.string,
  lineWidth: PropTypes.number,
  ordered: PropTypes.bool,
};

List.defaultProps = {
  children: null,
  contained: false,
  indented: false,
  lined: false,
  lineColor: 'gray',
  lineWidth: 0,
  ordered: false,
};

export default List;
