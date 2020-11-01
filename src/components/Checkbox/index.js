import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

// CUSTOM IMPORTS
import { Container } from './styles';
import { colors } from '~/styles';

const useStyles = makeStyles({
  root: {
    '&:active': {
      backgroundColor: colors.black16,
    },
  },
});

function Checkbox({ onClick, checked }) {
  const classes = useStyles();

  return (
    <Container
      checked={checked}
      onClick={onClick}
      className={classes.root}
      disableRipple
      color="default"
    />
  );
}

Checkbox.propTypes = {
  onClick: PropTypes.func,
  checked: PropTypes.any,
};

Checkbox.defaultProps = {
  onClick: () => {},
  checked: false,
};

export default Checkbox;
