import React from 'react';
import PropTypes from 'prop-types';

// CUSTOM IMPORTS
import { Container, Children } from './styles';
import Header from '~/components/Header';

export default function DefaultLayout({ children }) {
  return (
    <Container>
      <Header />

      <Children>{children}</Children>
    </Container>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.elementType.isRequired,
};
