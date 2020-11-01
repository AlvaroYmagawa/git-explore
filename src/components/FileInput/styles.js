import styled from 'styled-components';

import { colors } from '~/styles';

export const Container = styled.div`
  input {
    display: none;
  }
`;

export const Label = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 8px;
  transition: background 0.3s;

  &:hover {
    background: ${colors.primary};
  }

  svg {
    height: 24px;
    width: 24px;
    color: ${colors.opaqueText};
  }

  h4 {
    margin-left: 8px;
    font-size: 12px;
    color: ${colors.opaqueText};
  }
`;
