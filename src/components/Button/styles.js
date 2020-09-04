import styled, { css } from 'styled-components';
import { darken } from 'polished';
import CircularProgress from '@material-ui/core/CircularProgress';

// CUSTOM IMPORTS
import { colors } from '~/styles';

export const Container = styled.button`
  cursor: pointer;
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props =>
    props.loading ? darken(0.1, colors.accent) : colors.accent};
  border: 0;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;

  ${props =>
    props.disabled &&
    css`
      background: ${darken(0.15, colors.accent)};
    `}

  box-shadow: 0 2px 4px #00000040;

  &:active,
  &:hover {
    background: ${darken(0.1, colors.accent)};
    transition: background 0.2s ease;
  }
`;

export const Loader = styled(CircularProgress)`
  svg {
    color: ${colors.primaryDark};
  }
`;
