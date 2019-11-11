import React from 'react';

const renderOrNothing = (test, CurrentComponent) => {
  const renderOrNothingHOC = props => {
    if (test(props)) {
      return <CurrentComponent {...props} />;
    }

    return null;
  };

  renderOrNothingHOC.propTypes = {};

  return renderOrNothingHOC;
};

export default renderOrNothing;
