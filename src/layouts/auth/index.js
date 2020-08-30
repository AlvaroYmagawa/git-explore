import React from 'react';
import PropTypes from 'prop-types';

// CUSTOM IMPORTS
import { Container, Background } from './styles';
import background from '~/assets/background.svg';

export default function AuthLayout({ children }) {
  return (
    <Container>
      <Background src={background} />
      {children}
    </Container>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.elementType.isRequired,
};
