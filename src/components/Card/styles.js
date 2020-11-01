import styled from 'styled-components';

import { colors } from '~/styles';

export const Container = styled.div`
  padding: 16px;
  border-radius: 8px;
  background: ${colors.primaryDark};
  box-shadow: 2px 5px 7px ${colors.black16};
  color: ${colors.text};
`;
