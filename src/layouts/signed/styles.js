import styled from 'styled-components';

// CUSTOM IMPORTS
import { colors } from '~/styles';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${colors.primary};
`;

export const Children = styled.div`
  padding-top: 100px;
`;
