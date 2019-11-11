import React from 'react';
import PropTypes from 'prop-types';

function SVG(props) {
  return props.isLink ? (
    <a href={props.href}>
      <img
        src={props.src}
        height={props.height ? props.height : '100%'}
        width={props.width ? props.width : '100%'}
        style={props.style}
        alt={props.alt}
      />
    </a>
  ) : (
    <img
      src={props.src}
      height={props.height ? props.height : '100%'}
      width={props.width ? props.width : '100%'}
      style={props.style}
      alt={props.alt}
    />
  );
}
SVG.defaultProps = {
  height: null,
  width: null,
  style: null,
  isLink: false,
  href: '#',
};

SVG.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  alt: PropTypes.string.isRequired,
  style: PropTypes.shape({}),
  href: PropTypes.string,
  isLink: PropTypes.bool,
};

export default SVG;
