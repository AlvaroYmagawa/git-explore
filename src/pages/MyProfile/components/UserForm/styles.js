import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

import CustomCard from '~/components/Card';
import CustomInput from '~/components/Input';
import { colors } from '~/styles';

export const Card = styled(CustomCard)``;

export const Form = styled(Unform)``;

export const Title = styled.h4`
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  color: ${colors.text};
  margin-bottom: 16px;
`;

export const Input = styled(CustomInput)`
  margin-bottom: 8px;
`;
