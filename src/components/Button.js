import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function Button({ name, clickMe }) {
  return (
    <div>
      <button onClick={clickMe} type="button" className="All-btn">
        {' '}
        {name}
        {' '}
      </button>
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
