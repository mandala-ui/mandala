import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

class List extends PureComponent {
  render() {
    const {
      lineColor,
      lined,
      lineWidth,
      children,
      ordered,
    } = this.props;
    const listStyle = 'list ma0 pa0 tl';
    const childArray = React.Children.toArray(children);
    return (
      <div className="list">
        { ordered ?
          <ol className={listStyle} >
            { childArray.map((child, index) => (
              <ListItem
                borderColor={lineColor}
                borderWidth={lineWidth}
                hasBorder={lined}
                key={`list-item-${index}`}
              >
                {child}
              </ListItem>
            ))
            }
          </ol>
          :
          <ul className={listStyle}>
            { childArray.map((child, index) =>
              (<ListItem
                borderColor={lineColor}
                borderWidth={lineWidth}
                hasBorder={lined}
                key={`list-item-${index}`}
              >
                {child}
              </ListItem>))
            }
          </ul>
        }
      </div>
    );
  }
}

List.propTypes = {
  lined: PropTypes.bool,
  lineColor: PropTypes.string,
  children: PropTypes.node,
  lineWidth: PropTypes.number,
  ordered: PropTypes.bool,
};

List.defaultProps = {
  lined: false,
  lineColor: 'gray',
  lineWidth: 0,
  children: null,
  ordered: false,
  radius: 0,
};

export default List;
