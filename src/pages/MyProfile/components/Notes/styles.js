import styled from 'styled-components';
import PerfectScroll from 'react-perfect-scrollbar';

import { colors } from '~/styles';

export const Scroll = styled(PerfectScroll)`
  max-height: calc(100vh - 100px);
  padding-bottom: 24px;
  max-width: 100%;
`;

export const Title = styled.h4`
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  color: ${colors.text};
  margin-bottom: 16px;
`;
