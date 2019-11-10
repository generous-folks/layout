import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import lozad from 'lozad';

class LazyImage extends PureComponent {
  observer;

  componentDidMount() {
    const { rootMargin } = this.props;
    this.observer = lozad(this.img, {
      rootMargin,
      threshold: 0.01,
    });
    this.observer.observe();
  }

  componentDidUpdate() {
    this.img.removeAttribute('data-loaded');
    this.observer.triggerLoad(this.img);
  }

  applyRef = ref => {
    this.img = ref;
  };

  onErrorEvent(event) {
    event.target.classList.add('onError');
  }

  onLoadEvent(event) {
    event.target.classList.add('onLoad');
  }

  render() {
    const { data, alt, width, height } = this.props;

    return (
      <img
        height={height || 'initial'}
        width={width || 'initial'}
        data-src={data}
        data-iesrc={data}
        alt={alt}
        ref={this.applyRef}
        onError={this.onErrorEvent}
        onLoad={this.onLoadEvent}
      />
    );
  }
}

LazyImage.defaultProps = {
  rootMargin: '0px 512px 0px 512px',
};

LazyImage.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  data: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  srcset: PropTypes.string,
  otherProps: PropTypes.shape({}),
  rootMargin: PropTypes.string,
};

export default LazyImage;
