import React from 'react';
import PropTypes from 'prop-types';

import { Container, Loader } from './styles';

function Button({ className, loading, children, ...rest }) {
  return (
    <Container
      id="animated-button"
      loading={loading}
      className={className}
      {...rest}
    >
      {loading ? <Loader animation="border" size={24} /> : children}
    </Container>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  loading: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  className: null,
  loading: false,
};

export default Button;
