import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const List = ({
  children,
  contained,
  indented,
  lineColor,
  lined,
  lineWidth,
  ordered,
  narrow,
  wide,
}) => {
  const childArray = React.Children.toArray(children);
  return (
    <div className="list">
      { ordered ?
        <ol className="list ma0 pa0 tl">
          { childArray.map((child, i, array) => (
            <ListItem
              hasBorder={contained && (i === array.length - 1) ? false : lined}
              indented={indented}
              key={`list-item-${i + 1}`}
              lineColor={lineColor}
              lineWidths={lineWidth}
              narrow={narrow}
              wide={wide}
            >
              {`${i + 1}. `}{child}
            </ListItem>
          ))
          }
        </ol>
        :
        <ul className="list ma0 pa0 tl">
          { childArray.map((child, i, array) => (
            <ListItem
              hasBorder={contained && (i === array.length - 1) ? false : lined}
              indented={indented}
              key={`list-item-${i + 1}`}
              lineColor={lineColor}
              lineWidths={lineWidth}
              narrow={narrow}
              wide={wide}
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
  narrow: PropTypes.bool,
  wide: PropTypes.bool,
};

List.defaultProps = {
  children: null,
  contained: false,
  indented: false,
  lined: false,
  lineColor: 'black',
  lineWidth: 0,
  ordered: false,
  narrow: false,
  wide: false,
};

export default List;
