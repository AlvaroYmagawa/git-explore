/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';
import AuthLayout from '~/layouts/auth';
import DefaultLayout from '~/layouts/signed';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  // REDUCER
  const { signed } = useSelector(state => state.auth);

  // REDIRECTS
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/home" />;
  }

  // LAYOUT CONTROLS
  let Layout = null;

  Layout = signed ? DefaultLayout : AuthLayout;

  //-----

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
