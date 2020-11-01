import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';
import { colors } from '~/styles';

export const Container = styled(Checkbox)`
  .MuiSvgIcon-root {
    color: ${colors.accent};
  }
`;
