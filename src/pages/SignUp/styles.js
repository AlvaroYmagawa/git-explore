import styled from 'styled-components';

// CUSTOM IMPORTS
import { colors } from '~/styles';
import CustomCheckbox from '~/components/Checkbox';
import CustomInput from '~/components/Input';

export const Container = styled.div``;

export const Input = styled(CustomInput)``;

export const Fieldset = styled.div`
  display: flex;
  align-items: center;

  h4 {
    font-size: 12px;
    color: ${colors.text};
    margin: 0;
  }
`;
export const Checkbox = styled(CustomCheckbox)``;
