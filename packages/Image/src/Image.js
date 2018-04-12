import React from 'react';
import PropTypes from 'prop-types';

const Image = ({
  alt,
  url,
  images,
  radius,
  shadow,
}) => (
  <picture className="image">
    { images && images.desktop ?
      <source
        key={images.desktop[0] || url}
        media="(min-width: 60em)"
        srcSet={`
            ${images.desktop[0] ? images.desktop : null} 1x,
            ${images.desktop[1] ? images.desktop : null} 2x`
          }
      />
        : null
      }
    { images && images.tablet ?
      <source
        key={images.tablet[0] || url}
        media="(min-width: 30em) and (max-width: 60em)"
        srcSet={`
            ${images.tablet[0] ? images.tablet : null} 1x,
            ${images.tablet[1] ? images.tablet : null} 2x`
          }
      />
      : null
    }
    { images && images.mobile ?
      <source
        key={images.mobile[0] || url}
        media="(max-width: 30em)"
        srcSet={`
          ${images.mobile[0] ? images.mobile : null} 1x,
          ${images.mobile[1] ? images.mobile : null} 2x`
        }
      />
    : null
    }
    <img
      className={`br${radius} shadow-${shadow} w-100`}
      src={url}
      alt={alt}
    />
  </picture>
);

Image.propTypes = {
  alt: PropTypes.string,
  url: PropTypes.string,
  images: PropTypes.shape({
    desktop: PropTypes.arrayOf(
      PropTypes.string,
    ),
    mobile: PropTypes.arrayOf(
      PropTypes.string,
    ),
    tablet: PropTypes.arrayOf(
      PropTypes.string,
    ),
  }),
  shadow: PropTypes.number,
  radius: PropTypes.number,
};

Image.defaultProps = {
  alt: 'blank figure',
  url: 'http://via.placeholder.com/1600x900/CDECFF',
  images: null,
  shadow: null,
  radius: 0,
};

export default Image;
