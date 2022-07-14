import React from 'react';
import PropTypes from 'prop-types';

function Button({ name }) {
  return (
    <div>
      <button type="button" className="All-btn">
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
