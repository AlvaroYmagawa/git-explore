import styled from 'styled-components';

// CUSTOM IMPORTS
import { colors } from '~/styles';

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 70px;
  padding: 0 64px;
  background: ${colors.primaryDark};
  box-shadow: 2px 6px 6px ${colors.black16};

  svg {
    height: 40px;
    width: auto;
    color: #f6f6f6;
  }
`;

export const ExitButton = styled.button`
  margin-left: auto;
  cursor: pointer;
  border: none;
  background: none;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }

  #exit-icon {
    height: 24px;
    width: 24px;
    color: #f6f6f6;
  }
`;

export const Title = styled.h4`
  margin: 0 0 0 16px;
  font-size: 18px;
  font-weight: bold;
  color: #f6f6f6;
`;
