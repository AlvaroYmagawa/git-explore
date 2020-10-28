import styled from 'styled-components';

// CUSTOM IMPORTS
import { colors } from '~/styles';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  align-items: center;
  height: 70px;
  padding: 0 64px;
  background: ${colors.primaryDark};
  box-shadow: 2px 6px 6px ${colors.black16};

  #github-icon {
    height: 40px;
    width: auto;
    color: #f6f6f6;
  }
`;

export const Left = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`;

export const Title = styled.h4`
  margin: 0 0 0 16px;
  font-size: 18px;
  font-weight: bold;
  color: #f6f6f6;
`;
